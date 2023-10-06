import ws, { WebSocket } from 'ws';
import { getUserAgent } from '../utils';
import { KiteTickerParams, TickerEvent, TickerEvents } from './types';

/**
 * The WebSocket client for connecting to Kite connect streaming quotes service.
 *
 * @example
 * Getting started:
 * ----
 * ```ts
 * import { KiteTicker } from "kiteconnect";
 * const ticker = new KiteTicker({
 * 	api_key: "api_key",
 * 	access_token: "access_token"
 * });
 *
 * ticker.connect();
 * ticker.on("ticks", onTicks);
 * ticker.on("connect", subscribe);
 *
 * function onTicks(ticks) {
 * 	console.log("Ticks", ticks);
 * }
 *
 * function subscribe() {
 * 	const items = [738561];
 * 	ticker.subscribe(items);
 * 	ticker.setMode(ticker.modeFull, items);
 * }
 * ```
 *
 * Auto reconnection
 * -----------------
 * Auto reconnection is enabled by default and it can be disabled by passing `reconnect` param while initialising `KiteTicker`.
 *
 * Auto reconnection mechanism is based on [Exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) algorithm in which
 * next retry interval will be increased exponentially. `max_delay` and `max_tries` params can be used to tweak
 * the alogrithm where `max_delay` is the maximum delay after which subsequent reconnection interval will become constant and
 * `max_tries` is maximum number of retries before it quits reconnection.
 *
 * For example if `max_delay` is 60 seconds and `max_tries` is 50 then the first reconnection interval starts from
 * minimum interval which is 2 seconds and keep increasing up to 60 seconds after which it becomes constant and when reconnection attempt
 * is reached upto 50 then it stops reconnecting.
 *
 * Callback `reconnect` will be called with current reconnect attempt and next reconnect interval and
 * `on_noreconnect` is called when reconnection attempts reaches max retries.
 *
 * @example
 * Here is an example demonstrating auto reconnection.
 * ```ts
 * import { KiteTicker } from "kiteconnect-ts";
 * const ticker = new KiteTicker({
 * 	api_key: "api_key",
 * 	access_token: "access_token"
 * });
 *
 * // set autoreconnect with 10 maximum reconnections and 5 second interval
 * ticker.autoReconnect(true, 10, 5)
 * ticker.connect();
 * ticker.on("ticks", onTicks);
 * ticker.on("connect", subscribe);
 *
 * ticker.on("noreconnect", () => {
 * 	console.log("noreconnect");
 * });
 *
 * ticker.on("reconnect", (reconnect_count, reconnect_interval) => {
 * 	console.log("Reconnecting: attempt - ", reconnect_count, " interval - ", reconnect_interval);
 * });
 *
 * ticker.on("message", (binary_msg) => {
 *	console.log("Binary message", binary_msg);
 * });
 *
 * function onTicks(ticks) {
 * 	console.log("Ticks", ticks);
 * }
 *
 * function subscribe() {
 * 	const items = [738561];
 * 	ticker.subscribe(items);
 * 	ticker.setMode(ticker.modeFull, items);
 * }
 * ```
 */
export class KiteTicker {
  private root = 'wss://ws.kite.trade/';
  private api_key: string | null = null;
  private access_token: string | null = null;

  private read_timeout = 5; // seconds
  private reconnect_max_delay = 0;
  private reconnect_max_tries = 0;
  // message flags (outgoing)
  private mSubscribe = 'subscribe';
  private mUnSubscribe = 'unsubscribe';
  private mSetMode = 'mode';
  // incoming
  private readonly mAlert = 10;
  private readonly mMessage = 11;
  private readonly mLogout = 12;
  private readonly mReload = 13;
  private readonly mClearCache = 14;

  // public constants
  /**
   * Set mode full
   */
  public readonly modeFull = 'full'; // Full quote including market depth. 164 bytes.
  /**
   * Set mode quote
   */
  public readonly modeQuote = 'quote'; // Quote excluding market depth. 52 bytes.
  /**
   * Set mode LTP
   */
  public readonly modeLTP = 'ltp';

  private ws: WebSocket | null = null;
  private triggers: Record<TickerEvent, Function[]> = {
    connect: [],
    ticks: [],
    disconnect: [],
    error: [],
    close: [],
    reconnect: [],
    noreconnect: [],
    message: [],
    order_update: [],
  };
  private read_timer: NodeJS.Timer | null = null;
  private last_read: number = 0;
  private reconnect_timer: NodeJS.Timer | null = null;
  private auto_reconnect = false;
  private current_reconnection_count = 0;
  private last_reconnect_interval: number | null = 0;
  private current_ws_url: string | null = null;
  private readonly defaultReconnectMaxDelay = 60;
  private readonly defaultReconnectMaxRetries = 50;
  private readonly maximumReconnectMaxRetries = 300;
  private readonly minimumReconnectMaxDelay = 5;

  // segment constants
  private readonly NseCM = 1;
  private readonly NseFO = 2;
  private readonly NseCD = 3;
  private readonly BseCM = 4;
  private readonly BseFO = 5;
  private readonly BseCD = 6;
  private readonly McxFO = 7;
  private readonly McxSX = 8;
  private readonly Indices = 9;

  /**
   * KiteTicker constructor
   *
   * @param params KiteTicker parameters
   * @returns An instance of The KiteTicker class
   */
  constructor(params: KiteTickerParams) {
    this.root = params.root || this.root;
    this.api_key = params.api_key;
    this.access_token = params.access_token;

    // Enable auto reconnect by default
    if (!params.reconnect) params.reconnect = true;
    this.autoReconnect(params.reconnect, params.max_retry, params.max_delay);
  }

  /**
   * Auto reconnect settings
   *
   * @param t Enable or disable auto disconnect, defaults to false
   * @param max_retry is maximum number re-connection attempts. Defaults to 50 attempts and maximum up to 300 attempts.
   * @param max_delay in seconds is the maximum delay after which subsequent re-connection interval will become constant. Defaults to 60s and minimum acceptable value is 5s.
   */
  autoReconnect(t: boolean, max_retry?: number, max_delay?: number) {
    this.auto_reconnect = t === true;

    // Set default values
    max_retry = max_retry || this.defaultReconnectMaxRetries;
    max_delay = max_delay || this.defaultReconnectMaxDelay;

    // Set reconnect constraints
    this.reconnect_max_tries =
      max_retry >= this.maximumReconnectMaxRetries
        ? this.maximumReconnectMaxRetries
        : max_retry;
    this.reconnect_max_delay =
      max_delay <= this.minimumReconnectMaxDelay
        ? this.minimumReconnectMaxDelay
        : max_delay;
  }

  /**
   * Initiate a websocket connection
   */
  connect() {
    // Skip if its already connected
    if (
      this.ws &&
      (this.ws.readyState == ws.CONNECTING || this.ws.readyState == ws.OPEN)
    )
      return;

    const url =
      this.root +
      '?api_key=' +
      this.api_key +
      '&access_token=' +
      this.access_token +
      '&uid=' +
      new Date().getTime().toString();

    this.ws = new WebSocket(url, {
      headers: {
        'X-Kite-Version': '3',
        'User-Agent': getUserAgent(),
      },
    });

    this.ws.binaryType = 'arraybuffer';

    this.ws.onopen = () => {
      // Reset last reconnect interval
      this.last_reconnect_interval = null;
      // Reset current_reconnection_count attempt
      this.current_reconnection_count = 0;
      // Store current open connection url to check for auto re-connection.
      if (!this.current_ws_url) this.current_ws_url = url;
      // Trigger on connect event
      this.trigger('connect');
      // If there isn't an incoming message in n seconds, assume disconnection.
      if (this.read_timer) clearInterval(this.read_timer);

      this.last_read = Date.now();
      this.read_timer = setInterval(() => {
        if ((Date.now() - this.last_read) / 1000 >= this.read_timeout) {
          // reset current_ws_url incase current connection times out
          // This is determined when last heart beat received time interval
          // exceeds read_timeout value
          this.current_ws_url = null;
          if (this.ws) this.ws.close();
          if (this.read_timer) clearInterval(this.read_timer);
          this.triggerDisconnect();
        }
      }, this.read_timeout * 1000);
    };

    this.ws.onmessage = (e) => {
      // Binary tick data.
      if (e.data instanceof ArrayBuffer) {
        // Trigger on message event when binary message is received
        this.trigger('message', [e.data]);
        if (e.data.byteLength > 2) {
          const d = this.parseBinary(e.data);
          if (d) this.trigger('ticks', [d]);
        }
      } else {
        this.parseTextMessage(e.data as string);
      }

      // Set last read time to check for connection timeout
      this.last_read = Date.now();
    };

    this.ws.onerror = (e) => {
      this.trigger('error', [e]);

      // Force close to avoid ghost connections
      if (this.ws && this.ws.readyState == ws.OPEN) this.ws.close();
    };

    this.ws.onclose = (e) => {
      this.trigger('close', [e]);

      // the ws id doesn't match the current global id,
      // meaning it's a ghost close event. just ignore.
      if (this.current_ws_url && url != this.current_ws_url) return;

      this.triggerDisconnect(e);
    };
  }

  /**
   * Close the websocket connection
   */
  disconnect() {
    if (
      this.ws &&
      this.ws.readyState != ws.CLOSING &&
      this.ws.readyState != ws.CLOSED
    ) {
      this.ws.close();
    }
  }

  /**
   * Check if the ticker is connected
   *
   * @returns `true` if the ticker is connected or `false` otherwise.
   */
  connected() {
    if (this.ws && this.ws.readyState == ws.OPEN) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Register websocket event callbacks. See {@link TickerEvent} for all available events.
   *
   * @param e Event to register callback on.
   * @param callback Callback function
   *
   * @example
   * ```ts
   * ticker.on("ticks", callback);
   * ticker.on("connect", callback);
   * ticker.on("disconnect", callback);
   * ```
   *
   * Tick structure (passed to the tick callback you assign):
   * ```
   * [
   *   {
   *     tradable: true,
   *     mode: 'full',
   *     instrument_token: 208947,
   *     last_price: 3939,
   *     last_quantity: 1,
   *     average_price: 3944.77,
   *     volume: 28940,
   *     buy_quantity: 4492,
   *     sell_quantity: 4704,
   *     ohlc: { open: 3927, high: 3955, low: 3927, close: 3906 },
   *     change: 0.8448540706605223,
   *     last_trade_time: 1515491369,
   *     timestamp: 1515491373,
   *     oi: 24355,
   *     oi_day_high: 0,
   *     oi_day_low: 0,
   *     depth: {
   *       buy: [
   *         { quantity: 59, price: 3223, orders: 5 },
   *         { quantity: 164, price: 3222, orders: 15 },
   *         { quantity: 123, price: 3221, orders: 7 },
   *         { quantity: 48, price: 3220, orders: 7 },
   *         { quantity: 33, price: 3219, orders: 5 },
   *       ],
   *       sell: [
   *         { quantity: 115, price: 3224, orders: 15 },
   *         { quantity: 50, price: 3225, orders: 5 },
   *         { quantity: 175, price: 3226, orders: 14 },
   *         { quantity: 49, price: 3227, orders: 10 },
   *         { quantity: 106, price: 3228, orders: 13 },
   *       ],
   *     },
   *   },
   * ]
   * ```
   */
  on<K extends TickerEvent>(e: K, callback: TickerEvents[K]) {
    if (this.triggers.hasOwnProperty(e)) {
      this.triggers[e].push(callback);
    }
  }

  /**
   * Subscribe to array of tokens
   *
   * @param tokens Array of tokens to be subscribed
   *
   * @example
   * ```ts
   * ticker.subscribe([738561]);
   * ```
   */
  subscribe(tokens: number[]) {
    if (tokens.length > 0) {
      this.send({ a: this.mSubscribe, v: tokens });
    }
    return tokens;
  }

  /**
   * Unsubscribe from array of tokens
   *
   * @param tokens Array of tokens to be unsubscribed
   *
   * @example
   * ```ts
   * ticker.unsubscribe([738561]);
   * ```
   */
  unsubscribe(tokens: number[]) {
    if (tokens.length > 0) {
      this.send({ a: this.mUnSubscribe, v: tokens });
    }
    return tokens;
  }

  /**
   * Set mode for an array of tokens
   *
   * @param mode mode to set
   * @param tokens Array of tokens to be subscribed
   *
   * @example
   * ```
   * ticker.setMode(ticker.modeFull, [738561]);
   * ```
   */
  setMode(mode: 'ltp' | 'quote' | 'full', tokens: number[]) {
    if (tokens.length > 0) {
      this.send({ a: this.mSetMode, v: [mode, tokens] });
    }
    return tokens;
  }

  private triggerDisconnect(e?: any) {
    this.ws = null;
    this.trigger('disconnect', [e]);
    if (this.auto_reconnect) this.attemptReconnection();
  }

  // send a message via the socket
  // automatically encodes json if possible
  private send(message: any) {
    if (!this.ws || this.ws.readyState != ws.OPEN) return;

    try {
      if (typeof message == 'object') {
        message = JSON.stringify(message);
      }
      this.ws.send(message);
    } catch (e) {
      this.ws.close();
    }
  }

  // trigger event callbacks
  private trigger(e: TickerEvent, args?: any) {
    if (!this.triggers[e]) return;
    for (let n = 0; n < this.triggers[e].length; n++) {
      this.triggers[e][n]?.apply(this.triggers[e][n], args ? args : []);
    }
  }

  private parseTextMessage(dataString: string) {
    let data: any;
    try {
      data = JSON.parse(dataString);
    } catch (e) {
      return;
    }

    if (data.type === 'order') {
      this.trigger('order_update', [data.data]);
    }
  }

  // parse received binary message. each message is a combination of multiple tick packets
  // [2-bytes num packets][size1][tick1][size2][tick2] ...
  private parseBinary(binpacks: ArrayBuffer) {
    const packets = this.splitPackets(binpacks);
    const ticks = [];

    for (let n = 0; n < packets.length; n++) {
      const bin = packets[n]!;
      const instrument_token = this.buf2long(bin.slice(0, 4));
      const segment = instrument_token & 0xff;

      let tradable = true;
      if (segment === this.Indices) tradable = false;

      // Add price divisor based on segment
      let divisor = 100.0;
      if (segment === this.NseCD) {
        divisor = 10000000.0;
      } else if (segment == this.BseCD) {
        divisor = 10000.0;
      }

      // Parse LTP
      if (bin.byteLength === 8) {
        ticks.push({
          tradable: tradable,
          mode: this.modeLTP,
          instrument_token: instrument_token,
          last_price: this.buf2long(bin.slice(4, 8)) / divisor,
        });
        // Parse indices quote and full mode
      } else if (bin.byteLength === 28 || bin.byteLength === 32) {
        let mode = this.modeQuote;
        if (bin.byteLength === 32) mode = this.modeFull;

        const tick: any = {
          tradable: tradable,
          mode: mode,
          instrument_token: instrument_token,
          last_price: this.buf2long(bin.slice(4, 8)) / divisor,
          ohlc: {
            high: this.buf2long(bin.slice(8, 12)) / divisor,
            low: this.buf2long(bin.slice(12, 16)) / divisor,
            open: this.buf2long(bin.slice(16, 20)) / divisor,
            close: this.buf2long(bin.slice(20, 24)) / divisor,
          },
          change: this.buf2long(bin.slice(24, 28)),
        };

        // Compute the change price using close price and last price
        if (tick.ohlc.close != 0) {
          tick.change =
            ((tick.last_price - tick.ohlc.close) * 100) / tick.ohlc.close;
        }

        // Full mode with timestamp in seconds
        if (bin.byteLength === 32) {
          tick.exchange_timestamp = null;
          const timestamp = this.buf2long(bin.slice(28, 32));
          if (timestamp) tick.exchange_timestamp = new Date(timestamp * 1000);
        }

        ticks.push(tick);
      } else if (bin.byteLength === 44 || bin.byteLength === 184) {
        let mode = this.modeQuote;
        if (bin.byteLength === 184) mode = this.modeFull;

        const tick: any = {
          tradable: tradable,
          mode: mode,
          instrument_token: instrument_token,
          last_price: this.buf2long(bin.slice(4, 8)) / divisor,
          last_traded_quantity: this.buf2long(bin.slice(8, 12)),
          average_traded_price: this.buf2long(bin.slice(12, 16)) / divisor,
          volume_traded: this.buf2long(bin.slice(16, 20)),
          total_buy_quantity: this.buf2long(bin.slice(20, 24)),
          total_sell_quantity: this.buf2long(bin.slice(24, 28)),
          ohlc: {
            open: this.buf2long(bin.slice(28, 32)) / divisor,
            high: this.buf2long(bin.slice(32, 36)) / divisor,
            low: this.buf2long(bin.slice(36, 40)) / divisor,
            close: this.buf2long(bin.slice(40, 44)) / divisor,
          },
        };

        // Compute the change price using close price and last price
        if (tick.ohlc.close != 0) {
          tick.change =
            ((tick.last_price - tick.ohlc.close) * 100) / tick.ohlc.close;
        }

        // Parse full mode
        if (bin.byteLength === 184) {
          // Parse last trade time
          tick.last_trade_time = null;
          const last_trade_time = this.buf2long(bin.slice(44, 48));
          if (last_trade_time)
            tick.last_trade_time = new Date(last_trade_time * 1000);

          // Parse timestamp
          tick.exchange_timestamp = null;
          const timestamp = this.buf2long(bin.slice(60, 64));
          if (timestamp) tick.exchange_timestamp = new Date(timestamp * 1000);

          // Parse OI
          tick.oi = this.buf2long(bin.slice(48, 52));
          tick.oi_day_high = this.buf2long(bin.slice(52, 56));
          tick.oi_day_low = this.buf2long(bin.slice(56, 60));
          tick.depth = {
            buy: [],
            sell: [],
          };

          let s = 0;
          const depth = bin.slice(64, 184);
          for (let i = 0; i < 10; i++) {
            s = i * 12;
            tick.depth[i < 5 ? 'buy' : 'sell'].push({
              quantity: this.buf2long(depth.slice(s, s + 4)),
              price: this.buf2long(depth.slice(s + 4, s + 8)) / divisor,
              orders: this.buf2long(depth.slice(s + 8, s + 10)),
            });
          }
        }

        ticks.push(tick);
      }
    }

    return ticks;
  }

  // split one long binary message into individual tick packets
  private splitPackets(bin: ArrayBuffer) {
    // number of packets
    const num = this.buf2long(bin.slice(0, 2));
    let j = 2;
    const packets = [];

    for (let i = 0; i < num; i++) {
      // first two bytes is the packet length
      const size = this.buf2long(bin.slice(j, j + 2)),
        packet = bin.slice(j + 2, j + 2 + size);

      packets.push(packet);

      j += 2 + size;
    }

    return packets;
  }

  private attemptReconnection() {
    // Try reconnecting only so many times.
    if (this.current_reconnection_count > this.reconnect_max_tries) {
      this.trigger('noreconnect');
      process.exit(1);
    }

    if (this.current_reconnection_count > 0) {
      this.last_reconnect_interval = Math.pow(
        2,
        this.current_reconnection_count
      );
    } else if (!this.last_reconnect_interval) {
      this.last_reconnect_interval = 1;
    }

    if (this.last_reconnect_interval > this.reconnect_max_delay) {
      this.last_reconnect_interval = this.reconnect_max_delay;
    }

    this.current_reconnection_count++;

    this.trigger('reconnect', [
      this.current_reconnection_count,
      this.last_reconnect_interval,
    ]);

    this.reconnect_timer = setTimeout(() => {
      this.connect();
    }, this.last_reconnect_interval * 1000);
  }

  // Big endian byte array to long.
  private buf2long(buf: ArrayBuffer) {
    const b = new Uint8Array(buf);
    let val = 0;
    const len = b.length;

    for (let i = 0, j = len - 1; i < len; i++, j--) {
      val += b[j]! << (i * 8);
    }

    return val;
  }
}

export * from './types';
