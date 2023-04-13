import { Order } from '../connect';

/**
 * LTP Packet
 */
export interface TickLtp {
  /**
   * Whether the instrument is tradable or not. `false` for Indices
   */
  tradable: boolean;
  /**
   * Packet mode is 'ltp'
   */
  mode: 'ltp';
  /**
   * Instrument token
   */
  instrument_token: number;
  /**
   * Last traded price
   */
  last_price: number;
}

/**
 * Index Quote packet
 */
export interface TickIndexQuote extends Omit<TickLtp, 'mode'> {
  /**
   * Packet mode is 'quote'
   */
  mode: 'quote';
  /**
   * Open, High, Low and Close data
   */
  ohlc: {
    /**
     * High of the day
     */
    high: number;
    /**
     * Low of the day
     */
    low: number;
    /**
     * Open of the day
     */
    open: number;
    /**
     * Close of the day
     */
    close: number;
  };
  /**
   * Price change
   */
  change: number;
}

/**
 * Index Full packet
 */
export interface TickIndexFull extends Omit<TickIndexQuote, 'mode'> {
  /**
   * Packet mode is 'full'
   */
  mode: 'full';
  /**
   * Exchange timestamp
   */
  timestamp: Date;
}

/**
 * Quote packet
 */
export interface TickQuote extends Omit<TickLtp, 'mode'> {
  /**
   * Packet mode is 'quote'
   */
  mode: 'quote';
  /**
   * Last traded quantity
   */
  last_traded_quantity: number;
  /**
   * Average traded price
   */
  average_traded_price: number;
  /**
   * Volume traded for the day
   */
  volume_traded: number;
  /**
   * Total buy quantity
   */
  total_buy_quantity: number;
  /**
   * Total sell quantity
   */
  total_sell_quantity: number;
  /**
   * Open, High, Low and Close data
   */
  ohlc: {
    /**
     * Open price of the day
     */
    open: number;
    /**
     * High price of the day
     */
    high: number;
    /**
     * Low price of the day
     */
    low: number;
    /**
     * Close price of the day
     */
    close: number;
  };
  /**
   * Price change
   */
  change: number;
}

/**
 * Full packet with Market Depth data
 */
export interface TickFull extends Omit<TickQuote, 'mode'> {
  /**
   * Packet mode is 'full'
   */
  mode: 'full';
  /**
   * Last traded timestamp
   */
  last_trade_time: Date;
  /**
   * Exchange timestamp
   */
  exchange_timestamp: Date;
  /**
   * Open Interest
   */
  oi: number;
  /**
   * Open Interest Day High
   */
  oi_day_high: number;
  /**
   * Open Interest Day Low
   */
  oi_day_low: number;
  /**
   * Market depth entries
   *
   * There are ten entries in succession — five bid entries and five offer entries.
   */
  depth: {
    /**
     * Bid entries
     */
    buy: {
      /**
       * Bid Quantity
       */
      quantity: number;
      /**
       * Bid Price
       */
      price: number;
      /**
       * Number of Bid Orders
       */
      orders: number;
    }[];
    /**
     * Offer entries
     */
    sell: {
      /**
       * Offer Quantity
       */
      quantity: number;
      /**
       * Offer Price
       */
      price: number;
      /**
       * Number of Offer Orders
       */
      orders: number;
    }[];
  };
}

/**
 * Data returned on `order_update` event
 */
export interface OrderUpdatePostback extends Order {}

/**
 * Types of possible tick packet structures
 */
export type Tick =
  | TickLtp
  | TickIndexQuote
  | TickIndexFull
  | TickQuote
  | TickFull;

/**
 * Available KiteTicker Events
 *
 * All events:
 * ----
 * `connect` -  when connection is successfully established.
 *
 * `ticks` - when ticks are available (Arrays of {@link Tick} object as the first argument).
 *
 * `disconnect` - when socket connection is disconnected. Error is received as a first param.
 *
 * `error` - when socket connection is closed with error. Error is received as a first param.
 *
 * `close` - when socket connection is closed cleanly.
 *
 * `reconnect` - When reconnecting (current re-connection count and reconnect interval as arguments respectively).
 *
 * `noreconnect` - When re-connection fails after n number times.
 *
 * `order_update` - When order update (postback) is received for the connected user (Data object is received as first argument).
 *
 * `message` - when binary message is received from the server.
 *
 * ----
 *
 */
export type TickerEvent =
  | 'connect'
  | 'ticks'
  | 'disconnect'
  | 'error'
  | 'close'
  | 'reconnect'
  | 'noreconnect'
  | 'order_update'
  | 'message';

/**
 * Params to construct a KiteTicker class
 */
export interface KiteTickerParams {
  /**
   * API key issued to you.
   */
  api_key: string;
  /**
   * Access token obtained after successful login flow.
   */
  access_token: string;
  /**
   * Enable/Disable auto reconnect. Enabled by default.
   *
   * @defaultValue `true`
   */
  reconnect?: boolean;
  /**
   * The maximum number of re-connection attempts. Defaults to 50 attempts and maximum up to 300 attempts.
   *
   * @defaultValue 50
   */
  max_retry?: number;
  /**
   * The maximum delay in seconds after which subsequent re-connection interval will become constant. Defaults to 60s and minimum acceptable value is 5s.
   *
   * @defaultValue 60
   */
  max_delay?: number;
  /**
   * Kite websocket root.
   *
   * @defaultValue "wss://ws.kite.trade/"
   */
  root?: string;
}
