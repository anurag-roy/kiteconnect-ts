import { OutgoingMessageFlag, TickerMode } from '../types/enums';
import {
  EventTriggers,
  TickerEvent,
  KiteTickerParams,
  TickRequest,
  Tick,
  NonBinaryTick,
} from '../types/ticker';
import { parseBinary } from '../utils/ticker';

export class KiteTicker {
  private _params: KiteTickerParams;
  private _root: string;
  private _readTimeout: number = 5; // seconds
  private _reconnectMaxDelay: number = 0;
  private _reconnectMaxTries: number = 0;

  private _ws: WebSocket;
  private _triggers: EventTriggers = {
    connect: [],
    ticks: [],
    disconnect: [],
    error: [],
    close: [],
    reconnect: [],
    noreconnect: [],
    message: [],
    orderUpdate: [],
  };
  private _readTimer: ReturnType<typeof setTimeout> = null;
  private _lastRead: number = null;
  private _shouldAutoReconnect: boolean = false;
  private _currentReconnectionCount: number = 0;
  private _lastReconnectInterval: number = 0;
  private _currentWsUrl: string = null;
  private _defaultReconnectMaxDelay: number = 60;
  private _defaultReconnectMaxRetries: number = 50;
  private _maximumReconnectMaxRetries: number = 300;
  private _minimumReconnectMaxDelay: number = 5;

  public modeFull = TickerMode.modeFull;
  public modeQuote = TickerMode.modeQuote;
  public modeLTP = TickerMode.modeLTP;

  public constructor(params: KiteTickerParams) {
    this._params = params;
    this._root = this._params.root || 'wss://ws.kite.trade/';

    // Enable auto reconnect by default
    if (!('reconnect' in this._params)) this._params.reconnect = true;
    this.autoReconnect(
      this._params.reconnect,
      this._params.maxRetry,
      this._params.maxDelay
    );
  }

  public connect(): void {
    // Skip if its already connected
    if (
      this._ws &&
      (this._ws.readyState === this._ws.CONNECTING ||
        this._ws.readyState === this._ws.OPEN)
    )
      return;

    const url: string = `${this._root}?api_key=${this._params.apiKey}&access_token=${this._params.accessToken}`;

    this._ws = new WebSocket(url);

    this._ws.binaryType = 'arraybuffer';

    this._ws.onopen = () => {
      // Reset last reconnect interval
      this._lastReconnectInterval = null;
      // Reset current_reconnection_count attempt
      this._currentReconnectionCount = 0;
      // Store current open connection url to check for auto re-connection.
      if (!this._currentWsUrl) this._currentWsUrl = url;
      // Trigger on connect event
      this._trigger('connect');
      // If there isn't an incoming message in n seconds, assume disconnection.
      clearInterval(this._readTimer);

      this._lastRead = new Date().getTime();
      this._readTimer = setInterval(() => {
        if (
          (new Date().getTime() - this._lastRead) / 1000 >=
          this._readTimeout
        ) {
          // reset current_ws_url incase current connection times out
          // This is determined when last heart beat received time interval
          // exceeds read_timeout value
          this._currentWsUrl = null;
          if (this._ws) this._ws.close();
          clearInterval(this._readTimer);
          this._triggerDisconnect(null);
        }
      }, this._readTimeout * 1000);
    };

    this._ws.onmessage = ({ data }) => {
      // Binary tick data.
      if (data instanceof ArrayBuffer) {
        if (data.byteLength > 2) {
          const d: Tick[] = parseBinary(data);
          if (d) this._trigger('ticks', [d]);
        }
      } else {
        this._parseTextMessage(data as string);
      }

      // Set last read time to check for connection timeout
      this._lastRead = new Date().getTime();
    };

    this._ws.onerror = e => {
      this._trigger('error', [e]);

      // Force close to avoid ghost connections
      if (this._ws && this._ws.readyState === this._ws.OPEN) this._ws.close();
    };

    this._ws.onclose = e => {
      this._trigger('close', [e]);

      // the ws id doesn't match the current global id,
      // meaning it's a ghost close event. just ignore.
      if (this._currentWsUrl && url !== this._currentWsUrl) return;

      this._triggerDisconnect(e);
    };
  }

  public disconnect(): void {
    if (
      this._ws &&
      this._ws.readyState !== this._ws.CLOSING &&
      this._ws.readyState !== this._ws.CLOSED
    ) {
      this._ws.close();
    }
  }

  public connected(): boolean {
    if (this._ws && this._ws.readyState === this._ws.OPEN) {
      return true;
    } else {
      return false;
    }
  }

  public on(e: TickerEvent, callback: Function): void {
    if (e in this._triggers) {
      this._triggers[e].push(callback);
    }
  }

  public subscribe(tokens: number[]): number[] {
    if (tokens.length > 0) {
      this._send({ a: OutgoingMessageFlag.mSubscribe, v: tokens });
    }
    return tokens;
  }

  public unsubscribe(tokens: number[]): number[] {
    if (tokens.length > 0) {
      this._send({ a: OutgoingMessageFlag.mUnSubscribe, v: tokens });
    }
    return tokens;
  }

  public setMode(mode: TickerMode, tokens: number[]): number[] {
    if (tokens.length > 0) {
      this._send({ a: OutgoingMessageFlag.mSetMode, v: [mode, tokens] });
    }
    return tokens;
  }

  public autoReconnect(t: boolean, max_retry: number, max_delay: number) {
    this._shouldAutoReconnect = t;

    // Set default values
    max_retry = max_retry || this._defaultReconnectMaxRetries;
    max_delay = max_delay || this._defaultReconnectMaxDelay;

    // Set reconnect constraints
    this._reconnectMaxTries =
      max_retry >= this._maximumReconnectMaxRetries
        ? this._maximumReconnectMaxRetries
        : max_retry;
    this._reconnectMaxDelay =
      max_delay <= this._minimumReconnectMaxDelay
        ? this._minimumReconnectMaxDelay
        : max_delay;
  }

  private _triggerDisconnect(e: any) {
    this._ws = null;
    this._trigger('disconnect', [e]);
    if (this._shouldAutoReconnect) this._attemptReconnection();
  }

  // send a message via the socket
  // automatically encodes json if possible
  private _send(message: TickRequest) {
    if (!this._ws || this._ws.readyState !== this._ws.OPEN) return;

    try {
      if (typeof message == 'object') {
        const stringifiedMessage: string = JSON.stringify(message);
        this._ws.send(stringifiedMessage);
      }
    } catch (e) {
      this._ws.close();
    }
  }

  // trigger event callbacks
  private _trigger(e: TickerEvent, args?: any) {
    if (!this._triggers[e]) return;
    for (let n = 0; n < this._triggers[e].length; n++) {
      this._triggers[e][n].apply(this._triggers[e][n], args ? args : []);
    }
  }

  private _parseTextMessage(data: string) {
    try {
      const d: NonBinaryTick = JSON.parse(data);

      if (d.type === 'order') {
        this._trigger('orderUpdate', [d.data]);
      }
    } catch (e) {
      return;
    }
  }

  private _attemptReconnection() {
    // Try reconnecting only so many times.
    if (this._currentReconnectionCount > this._reconnectMaxTries) {
      this._trigger('noreconnect');
      process.exit(1);
    }

    if (this._currentReconnectionCount > 0) {
      this._lastReconnectInterval = Math.pow(2, this._currentReconnectionCount);
    } else if (!this._lastReconnectInterval) {
      this._lastReconnectInterval = 1;
    }

    if (this._lastReconnectInterval > this._reconnectMaxDelay) {
      this._lastReconnectInterval = this._reconnectMaxDelay;
    }

    this._currentReconnectionCount++;

    this._trigger('reconnect', [
      this._currentReconnectionCount,
      this._lastReconnectInterval,
    ]);

    setTimeout(() => {
      this.connect();
    }, this._lastReconnectInterval * 1000);
  }
}
