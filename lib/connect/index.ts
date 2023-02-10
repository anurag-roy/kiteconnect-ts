import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosResponseTransformer,
} from 'axios';
import sha256 from 'crypto-js/sha256';
import csvParse from 'papaparse';
import querystring from 'querystring';
import { getUserAgent } from '../utils';
import {
  ConvertPositionParams,
  Exchange,
  GTTParams,
  Instrument,
  KiteConnectParams,
  Margin,
  MarginOrder,
  MFHolding,
  MFInstrument,
  MFOrder,
  MFSIP,
  Order,
  OrderType,
  PlaceOrderParams,
  PortfolioHolding,
  Position,
  Quote,
  SessionData,
  Trade,
  TransactionType,
  Trigger,
  UserMargin,
  UserProfile,
  Validity,
  Variety,
} from './types';

/**
 * API client class. In production, you may initialise a single instance of this class per `api_key`.
 * This module provides an easy to use abstraction over the HTTP APIs.
 * The HTTP calls have been converted to methods and their JSON responses.
 * See the **[Kite Connect API documentation](https://kite.trade/docs/connect/v3/)**
 * for the complete list of APIs, supported parameters and values, and response formats.
 *
 * @example
 * Getting started with API
 * ------------------------
 * ```ts
 * import { KiteConnect } from "kiteconnect-ts";
 *
 * const kc = new KiteConnect({
 *   api_key: 'YOUR_API_KEY',
 * });
 *
 * // Get access token
 * try {
 *   const { access_token } = await kc.generateSession(
 *     'request_token',
 *     'YOUR_API_SECRET'
 *   );
 *   console.log('Access token:', access_token);
 * } catch (error) {
 *   console.error('Error while generating session', error);
 *   process.exit(1);
 * }
 *
 * // Get equity margins
 * try {
 *   const margins = await kc.getMargins('equity');
 *   console.log('Equity margins', margins.equity);
 * } catch (error) {
 *   console.error('Error while fetching equity margins', error);
 * }
 * ```
 *
 * @example
 * API promises
 * -------------
 * All API calls returns a promise which you can use to call methods like `.then(...)` and `.catch(...)` or `await`.
 *
 * ```ts
 * kiteConnectApiCall()
 * 	.then(function(v) {
 * 	    // On success
 * 	})
 * 	.catch(function(e) {
 * 		// On rejected
 * 	});
 *
 * try {
 *    const response = await kiteConnectAPiCall();
 *    // Do something with response
 * } catch(error) {
 *    // Handle error
 * }
 * ```
 */
export class KiteConnect {
  // Constants

  // Products
  public readonly PRODUCT_MIS = 'MIS';

  public readonly PRODUCT_CNC = 'CNC';

  public readonly PRODUCT_NRML = 'NRML';

  public readonly PRODUCT_CO = 'CO';

  public readonly PRODUCT_BO = 'BO';

  // Order types

  public readonly ORDER_TYPE_MARKET = 'MARKET';

  public readonly ORDER_TYPE_LIMIT = 'LIMIT';

  public readonly ORDER_TYPE_SLM = 'SL-M';

  public readonly ORDER_TYPE_SL = 'SL';

  // Varities

  public readonly VARIETY_REGULAR = 'regular';

  public readonly VARIETY_BO = 'bo';

  public readonly VARIETY_CO = 'co';

  public readonly VARIETY_AMO = 'amo';

  public readonly VARIETY_ICEBERG = 'iceberg';

  public readonly VARIETY_AUCTION = 'auction';

  // Transaction type

  public readonly TRANSACTION_TYPE_BUY = 'BUY';

  public readonly TRANSACTION_TYPE_SELL = 'SELL';

  // Validity

  public readonly VALIDITY_DAY = 'DAY';

  public readonly VALIDITY_IOC = 'IOC';

  public readonly VALIDITY_TTL = 'TTL';

  // Exchanges

  public readonly EXCHANGE_NSE = 'NSE';

  public readonly EXCHANGE_BSE = 'BSE';

  public readonly EXCHANGE_NFO = 'NFO';

  public readonly EXCHANGE_CDS = 'CDS';

  public readonly EXCHANGE_BCD = 'BCD';

  public readonly EXCHANGE_BFO = 'BFO';

  public readonly EXCHANGE_MCX = 'MCX';

  // Margins segments

  public readonly MARGIN_EQUITY = 'equity';

  public readonly MARGIN_COMMODITY = 'commodity';

  public readonly STATUS_CANCELLED = 'CANCELLED';

  public readonly STATUS_REJECTED = 'REJECTED';

  public readonly STATUS_COMPLETE = 'COMPLETE';

  public readonly GTT_TYPE_OCO = 'two-leg';

  public readonly GTT_TYPE_SINGLE = 'single';

  public readonly GTT_STATUS_ACTIVE = 'active';

  public readonly GTT_STATUS_TRIGGERED = 'triggered';

  public readonly GTT_STATUS_DISABLED = 'disabled';

  public readonly GTT_STATUS_EXPIRED = 'expired';

  public readonly GTT_STATUS_CANCELLED = 'cancelled';

  public readonly GTT_STATUS_REJECTED = 'rejected';

  public readonly GTT_STATUS_DELETED = 'deleted';

  public readonly POSITION_TYPE_DAY = 'day';

  public readonly POSITION_TYPE_OVERNIGHT = 'overnight';

  private api_key;
  private root;
  private timeout;
  private debug;
  private access_token;
  private default_login_uri;
  private session_expiry_hook: Function | null;
  private requestInstance: AxiosInstance;

  private readonly kiteVersion = 3; // Kite version to send in header
  private readonly userAgent = getUserAgent(); // User agent to be sent with every request

  private readonly routes = {
    'api.token': '/session/token',
    'api.token.invalidate': '/session/token',
    'api.token.renew': '/session/refresh_token',
    'user.profile': '/user/profile',
    'user.margins': '/user/margins',
    'user.margins.segment': '/user/margins/{segment}',

    orders: '/orders',
    trades: '/trades',
    'order.info': '/orders/{order_id}',
    'order.place': '/orders/{variety}',
    'order.modify': '/orders/{variety}/{order_id}',
    'order.cancel': '/orders/{variety}/{order_id}',
    'order.trades': '/orders/{order_id}/trades',
    'order.margins': '/margins/orders',
    'order.margins.basket': '/margins/basket',

    'portfolio.positions': '/portfolio/positions',
    'portfolio.holdings': '/portfolio/holdings',
    'portfolio.holdings.auction': '/portfolio/holdings/auctions',
    'portfolio.positions.convert': '/portfolio/positions',

    'mf.orders': '/mf/orders',
    'mf.order.info': '/mf/orders/{order_id}',
    'mf.order.place': '/mf/orders',
    'mf.order.cancel': '/mf/orders/{order_id}',

    'mf.sips': '/mf/sips',
    'mf.sip.info': '/mf/sips/{sip_id}',
    'mf.sip.place': '/mf/sips',
    'mf.sip.modify': '/mf/sips/{sip_id}',
    'mf.sip.cancel': '/mf/sips/{sip_id}',

    'mf.holdings': '/mf/holdings',
    'mf.instruments': '/mf/instruments',

    'market.instruments.all': '/instruments',
    'market.instruments': '/instruments/{exchange}',
    'market.historical':
      '/instruments/historical/{instrument_token}/{interval}',

    'market.quote': '/quote',
    'market.quote.ohlc': '/quote/ohlc',
    'market.quote.ltp': '/quote/ltp',

    'gtt.triggers': '/gtt/triggers',
    'gtt.trigger_info': '/gtt/triggers/{trigger_id}',
    'gtt.place': '/gtt/triggers',
    'gtt.modify': '/gtt/triggers/{trigger_id}',
    'gtt.delete': '/gtt/triggers/{trigger_id}',
  };

  constructor(params: KiteConnectParams) {
    const defaults = {
      root: 'https://api.kite.trade',
      login: 'https://kite.zerodha.com/connect/login',
      debug: false,
      timeout: 7000,
    };
    this.api_key = params.api_key;
    this.root = params.root || defaults.root;
    this.timeout = params.timeout || defaults.timeout;
    this.debug = params.debug || defaults.debug;
    this.access_token = params.access_token || null;
    this.default_login_uri = defaults.login;
    this.session_expiry_hook = null;

    this.requestInstance = axios.create({
      baseURL: this.root,
      timeout: this.timeout,
      headers: {
        'X-Kite-Version': this.kiteVersion,
        'User-Agent': this.userAgent,
      },
    });

    // Add a request interceptor
    this.requestInstance.interceptors.request.use((request) => {
      if (this.debug) console.log(request);
      return request;
    });

    // Add a response interceptor
    this.requestInstance.interceptors.response.use(
      (response) => {
        if (this.debug) console.log(response);

        const contentType = response.headers['content-type'];
        if (
          contentType === 'application/json' &&
          typeof response.data === 'object'
        ) {
          // Throw incase of error
          if (response.data.error_type) throw response.data;

          // Return success data
          return response.data.data;
        } else if (contentType === 'text/csv') {
          // Return the response directly
          return response.data;
        } else {
          return {
            error_type: 'DataException',
            message:
              'Unknown content type (' +
              contentType +
              ') with response: (' +
              response.data +
              ')',
          };
        }
      },
      (error) => {
        let resp = {
          message: 'Unknown error',
          error_type: 'GeneralException',
          data: null,
        };

        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.data && error.response.data.error_type) {
            if (
              error.response.data.error_type === 'TokenException' &&
              this.session_expiry_hook
            ) {
              this.session_expiry_hook();
            }

            resp = error.response.data;
          } else {
            resp.error_type = 'NetworkException';
            resp.message = error.response.statusText;
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          resp.error_type = 'NetworkException';
          resp.message =
            'No response from server with error code: ' + error.code;
        } else if (error.message) {
          resp = error;
        }

        return Promise.reject(resp);
      }
    );
  }

  /**
   * Set access_token received after a successful authentication.
   *
   * @param access_token Token obtained in exchange for `request_token`.
   * Once you have obtained `access_token`, you should persist it in a database or session to pass
   * to the Kite Connect class initialisation for subsequent requests.
   */
  setAccessToken(access_token: string) {
    this.access_token = access_token;
  }

  /**
   * Set a callback hook for session (`TokenException` -- timeout, expiry etc.) errors.
   * `access_token` (login session) can become invalid for a number of
   * reasons, but it doesn't make sense for the client to try and catch it during every API call.
   *
   * A callback method that handles session errors can be set here and when the client encounters
   * a token error at any point, it'll be called.
   *
   * This callback, for instance, can log the user out of the UI,
   * clear session cookies, or initiate a fresh login.
   *
   * @param cb Callback
   */
  setSessionExpiryHook(cb: Function) {
    this.session_expiry_hook = cb;
  }

  /**
   * Get the remote login url to which a user should be redirected to initiate the login flow.
   */
  getLoginURL(): string {
    return (
      this.default_login_uri +
      '?api_key=' +
      this.api_key +
      '&v=' +
      this.kiteVersion
    );
  }

  /**
   * Do the token exchange with the `request_token` obtained after the login flow,
   * and retrieve the `access_token` required for all subsequent requests. The response
   * contains not just the `access_token`, but metadata for the user who has authenticated.
   *
   * @param request_token Token obtained from the GET parameters after a successful login redirect.
   * @param api_secret API secret issued with the API key.
   */
  generateSession(
    request_token: string,
    api_secret: string
  ): Promise<SessionData> {
    return new Promise((resolve, reject) => {
      const checksum = sha256(
        this.api_key + request_token + api_secret
      ).toString();
      const p = this._post(
        'api.token',
        {
          api_key: this.api_key,
          request_token: request_token,
          checksum: checksum,
        },
        null,
        this.formatGenerateSession
      );

      p.then((resp) => {
        // Set access token.
        if (resp && resp.access_token) {
          this.setAccessToken(resp.access_token);
        }
        return resolve(resp);
      }).catch((err) => {
        return reject(err);
      });
    });
  }

  /**
   * Kill the session by invalidating the access token.
   * If access_token is passed then it will be set as current access token and get in validated.
   *
   * @param access_token Token to invalidate. Default is the active `access_token`.
   */
  invalidateAccessToken(access_token?: string): Promise<boolean> {
    return this._delete('api.token.invalidate', {
      api_key: this.api_key,
      access_token: access_token || this.access_token,
    });
  }

  /**
   * Renew access token by active refresh token. Renewed access token is implicitly set.
   *
   * @param refresh_token Token obtained from previous successful login.
   * @param api_secret API secret issued with the API key.
   */
  renewAccessToken(
    refresh_token: string,
    api_secret: string
  ): Promise<SessionData> {
    return new Promise((resolve, reject) => {
      const checksum = sha256(
        this.api_key + refresh_token + api_secret
      ).toString();

      const p = this._post('api.token.renew', {
        api_key: this.api_key,
        refresh_token: refresh_token,
        checksum: checksum,
      });

      p.then((resp) => {
        if (resp && resp.access_token) {
          this.setAccessToken(resp.access_token);
        }
        return resolve(resp);
      }).catch((err) => {
        return reject(err);
      });
    });
  }

  /**
   * Invalidate the refresh token.
   *
   * @param refresh_token Token to invalidate.
   */
  invalidateRefreshToken(refresh_token: string): Promise<boolean> {
    return this._delete('api.token.invalidate', {
      api_key: this.api_key,
      refresh_token: refresh_token,
    });
  }

  /**
   * Get user profile details.
   */
  getProfile(): Promise<UserProfile> {
    return this._get('user.profile');
  }

  /**
   * Get account balance and cash margin details for a particular segment.
   *
   * @param segment trading segment (eg: equity or commodity).
   */
  getMargins(segment?: 'equity' | 'commodity'): Promise<{
    equity?: UserMargin;
    commodity?: UserMargin;
  }> {
    if (segment) {
      return this._get('user.margins.segment', { segment: segment });
    } else {
      return this._get('user.margins');
    }
  }

  /**
   * Place an order.
   *
   * @param variety Order variety (ex. bo, co, amo, regular).
   * @param params Order params.
   */
  placeOrder(
    variety: Variety,
    params: PlaceOrderParams
  ): Promise<{ order_id: string }> {
    return this._post('order.place', { variety, ...params });
  }

  /**
   * Modify an order
   *
   * @param variety Order variety (ex. bo, co, amo, regular).
   * @param order_id ID of the order.
   * @param params Order modify params.
   */
  modifyOrder(
    variety: Variety,
    order_id: string,
    params: {
      /**
       * Order quantity
       */
      quantity?: number;
      /**
       * Order Price
       */
      price?: number;
      /**
       * Order type (NRML, SL, SL-M, MARKET).
       */
      order_type?: OrderType;
      /**
       * Order validity (DAY, IOC).
       */
      validity?: Validity;
      /**
       * Disclosed quantity
       */
      disclosed_quantity?: number;
      /**
       * Trigger price
       */
      trigger_price?: number;
      /**
       * Parent order id incase of multilegged orders.
       */
      parent_order_id?: string;
    }
  ): Promise<{ order_id: string }> {
    return this._put('order.modify', { variety, order_id, ...params });
  }

  /**
   * Cancel an order
   *
   * @param variety Order variety (ex. bo, co, amo)
   * @param order_id ID of the order.
   * @param params Order params. regular).
   */
  cancelOrder(
    variety: Variety,
    order_id: string,
    params?: {
      /**
       * Parent order id incase of multilegged orders.
       */
      parent_order_id?: string;
    }
  ): Promise<{ order_id: string }> {
    const mergedParams: any = params || {};
    mergedParams.variety = variety;
    mergedParams.order_id = order_id;
    return this._delete('order.cancel', mergedParams);
  }

  /**
   * Exit an order
   *
   * @param variety Order variety (ex. bo, co, amo)
   * @param order_id ID of the order.
   * @param params Order params.
   */
  exitOrder(
    variety: Variety,
    order_id: string,
    params?: {
      /**
       * Parent order id incase of multilegged orders.
       */
      parent_order_id?: string;
    }
  ): Promise<{ order_id: string }> {
    return this.cancelOrder(variety, order_id, params);
  }

  /**
   * Get list of orders.
   */
  getOrders(): Promise<Order[]> {
    return this._get('orders', null, null, this.formatResponse);
  }

  /**
   * Get list of order history.
   *
   * @param order_id ID of the order whose order details to be retrieved.
   */
  getOrderHistory(order_id: string): Promise<Order[]> {
    return this._get(
      'order.info',
      { order_id: order_id },
      null,
      this.formatResponse
    );
  }

  /**
   * Retrieve the list of trades executed.
   */
  getTrades(): Promise<Trade[]> {
    return this._get('trades', null, null, this.formatResponse);
  }

  /**
   * Retrieve the list of trades a particular order).
   * An order can be executed in tranches based on market conditions.
   * These trades are individually recorded under an order.
   *
   * @param order_id ID of the order whose trades are to be retrieved.
   */
  getOrderTrades(order_id: string): Promise<Trade[]> {
    return this._get(
      'order.trades',
      { order_id: order_id },
      null,
      this.formatResponse
    );
  }

  /**
   * Fetch required margin for order/list of orders
   *
   * @param orders Margin fetch orders.
   * @param mode (optional) Compact mode will only give the total margins
   */
  orderMargins(
    orders: MarginOrder[],
    mode: 'compact' | null = null
  ): Promise<Margin[]> {
    return this._post('order.margins', orders, null, null, true, {
      mode: mode,
    });
  }

  /**
   * Fetch basket margin for list of orders
   *
   * @param orders Margin fetch orders.
   * @param consider_positions Boolean to consider users positions while calculating margins. Defauls to true
   * @param mode (optional) Compact mode will only give the total margins
   */
  orderBasketMargins(
    orders: MarginOrder[],
    consider_positions = true,
    mode: 'compact' | null = null
  ): Promise<{
    initial: Margin;
    final: Margin;
    orders: Margin[];
  }> {
    return this._post('order.margins.basket', orders, null, null, true, {
      consider_positions: consider_positions,
      mode: mode,
    });
  }

  /**
   * Retrieve the list of equity holdings.
   */
  getHoldings(): Promise<PortfolioHolding[]> {
    return this._get('portfolio.holdings');
  }

  getAuctionInstruments() {
    return this._get('portfolio.holdings.auction');
  }

  /**
   * Retrieve positions.
   */
  getPositions(): Promise<{
    net: Position[];
    day: Position[];
  }> {
    return this._get('portfolio.positions');
  }

  /**
   * Modify an open position's product type.
   *
   * @param params params.
   */
  convertPosition(params: ConvertPositionParams): Promise<boolean> {
    return this._put('portfolio.positions.convert', params);
  }

  /**
   * Retrieve the list of market instruments available to trade.
   * Note that the results could be large, several hundred KBs in size,
   * with tens of thousands of entries in the list.
   * Response is array for objects.
   *
   * @example
   * ```
   * 	{
   * 		instrument_token: '131098372',
   *		exchange_token: '512103',
   *		tradingsymbol: 'NIDHGRN',
   *		name: 'NIDHI GRANITES',
   *		last_price: '0.0',
   *		expiry: '',
   *		strike: '0.0',
   *		tick_size: '0.05',
   *		lot_size: '1',
   *		instrument_type: 'EQ',
   *		segment: 'BSE',
   *		exchange: 'BSE' }, ...]
   * ```
   *
   * @param exchange Filter instruments based on exchange (NSE, BSE, NFO, BFO, CDS, MCX). If no `segment` is specified, all instruments are returned.
   */
  getInstruments(exchange: Exchange[]): Promise<Instrument[]> {
    if (exchange) {
      return this._get(
        'market.instruments',
        {
          exchange: exchange,
        },
        null,
        this.transformInstrumentsResponse
      );
    } else {
      return this._get(
        'market.instruments.all',
        null,
        null,
        this.transformInstrumentsResponse
      );
    }
  }

  /**
   * Retrieve quote and market depth for list of instruments.
   *
   * @param instruments is a list of instruments, Instrument are in the format of `exchange:tradingsymbol`.
   * For example NSE:INFY and for list of instruments ["NSE:RELIANCE", "NSE:SBIN", ..]
   */
  getQuote(instruments: string[]): Promise<Record<string, Quote>> {
    return this._get(
      'market.quote',
      { i: instruments },
      null,
      this.formatQuoteResponse
    );
  }

  /**
   * Retrieve OHLC for list of instruments.
   *
   * @param instruments is a list of instruments, Instrument are in the format of `exchange:tradingsymbol`.
   * For example NSE:INFY and for list of instruments ["NSE:RELIANCE", "NSE:SBIN", ..]
   */
  getOHLC(instruments: string[]): Promise<
    Record<
      string,
      {
        /**
         * The numerical identifier issued by the exchange representing the instrument.
         */
        instrument_token: number;
        /**
         * Last traded market price
         */
        last_price: number;
        ohlc: {
          /**
           * Price at market opening
           */
          open: number;
          /**
           * Highest price today
           */
          high: number;
          /**
           * Lowest price today
           */
          low: number;
          /**
           * Closing price of the instrument from the last trading day
           */
          close: number;
        };
      }
    >
  > {
    return this._get('market.quote.ohlc', { i: instruments });
  }

  /**
   * Retrieve LTP for list of instruments.
   *
   * @param instruments is a list of instruments, Instrument are in the format of `exchange:tradingsymbol`.
   * For example NSE:INFY and for list of instruments ["NSE:RELIANCE", "NSE:SBIN", ..]
   */
  getLTP(instruments: string[]): Promise<
    Record<
      string,
      {
        /**
         * The numerical identifier issued by the exchange representing the instrument.
         */
        instrument_token: number;
        /**
         * Last traded market price
         */
        last_price: number;
      }
    >
  > {
    return this._get('market.quote.ltp', { i: instruments });
  }

  /**
   * Retrieve historical data (candles) for an instrument.
   * Although the actual response JSON from the API does not have field
   * names such has 'open', 'high' etc., this functin call structures
   * the data into an array of objects with field names.
   *
   * @example
   * ```
   * [{
   * 	date: '2015-02-10T00:00:00+0530',
   * 	open: 277.5,
   * 	high: 290.8,
   * 	low: 275.7,
   * 	close: 287.3,
   * 	volume: 22589681
   * }, ....]
   * ```
   *
   * @param instrument_token Instrument identifier (retrieved from the instruments()) call.
   * @param interval candle interval (minute, day, 5 minute etc.)
   * @param from_date From date (String in format of 'yyyy-mm-dd HH:MM:SS' or Date object).
   * @param to_date To date (String in format of 'yyyy-mm-dd HH:MM:SS' or Date object).
   * @param continuous is a bool flag to get continuous data for futures and options instruments. Defaults to false.
   * @param oi is a bool flag to include OI data for futures and options instruments. Defaults to false.
   */
  getHistoricalData(
    instrument_token: string,
    interval:
      | 'minute'
      | 'day'
      | '3minute'
      | '5minute'
      | '10minute'
      | '15minute'
      | '30minute'
      | '60minute',
    from_date: string | Date,
    to_date: string | Date,
    continuous?: boolean,
    oi?: boolean
  ): Promise<{
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    oi?: number;
  }> {
    return this._get(
      'market.historical',
      {
        instrument_token: instrument_token,
        interval: interval,
        from:
          typeof from_date === 'object'
            ? this._getDateTimeString(from_date)
            : from_date,
        to:
          typeof to_date === 'object'
            ? this._getDateTimeString(to_date)
            : to_date,
        continuous: continuous ? 1 : 0,
        oi: oi ? 1 : 0,
      },
      null,
      this.parseHistorical
    );
  }

  // Convert Date object to string of format yyyy-mm-dd HH:MM:SS
  private _getDateTimeString(date: Date) {
    const isoString = date.toISOString();
    return isoString.replace('T', ' ').split('.')[0];
  }

  /**
   * Get list of mutual fund orders.
   *
   * @param order_id ID of the order (optional) whose order details are to be retrieved.
   * If no `order_id` is specified, all orders for the day are returned.
   */
  getMFOrders(order_id?: string): Promise<MFOrder | MFOrder[]> {
    if (order_id) {
      return this._get(
        'mf.order.info',
        { order_id: order_id },
        null,
        this.formatResponse
      );
    } else {
      return this._get('mf.orders', null, null, this.formatResponse);
    }
  }

  /**
   * Place a mutual fund order.
   *
   * @param params MF Order params.
   */
  placeMFOrder(params: {
    /**
     * Tradingsymbol (ISIN) of the fund.
     */
    tradingsymbol: string;
    /**
     * Transaction type (BUY or SELL).
     */
    transaction_type: TransactionType;
    /**
     * Quantity to SELL. Not applicable on BUYs.
     */
    quantity?: number;
    /**
     * Amount worth of units to purchase. Not applicable on SELLs
     */
    amount?: number;
    /**
     * An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)
     */
    tag?: string;
  }): Promise<{ order_id: number }> {
    return this._post('mf.order.place', params);
  }

  /**
   * Cancel a mutual fund order.
   *
   * @param order_id ID of the order.
   */
  cancelMFOrder(order_id: string): Promise<{ order_id: string }> {
    return this._delete('mf.order.cancel', { order_id: order_id });
  }

  /**
   * Get list of mutual fund SIPS.
   * If no `sip_id` is specified, all active and paused SIPs are returned.
   *
   * @param sip_id ID of the SIP (optional) whose details are to be retrieved.
   */
  getMFSIPS(sip_id?: string): Promise<MFSIP | MFSIP[]> {
    if (sip_id) {
      return this._get(
        'mf.sip.info',
        { sip_id: sip_id },
        null,
        this.formatResponse
      );
    } else {
      return this._get('mf.sips', null, null, this.formatResponse);
    }
  }

  /**
   * Place a mutual fund SIP.
   *
   * @param params SIP params.
   */
  placeMFSIP(params: {
    /**
     * Tradingsymbol (ISIN) of the fund.
     */
    tradingsymbol: string;
    /**
     * Amount worth of units to purchase.
     */
    amount: number;
    /**
     * Number of instalments to trigger.
     * If set to -1, instalments are triggered at fixed intervals until the SIP is cancelled
     */
    instalments: number;
    /**
     * Order frequency. weekly, monthly, or quarterly.
     */
    frequency: 'weekly' | 'monthly' | 'quarterly';
    /**
     * Amount worth of units to purchase before the SIP starts.
     */
    initial_amount?: number;
    /**
     * If frequency is monthly, the day of the month (1, 5, 10, 15, 20, 25) to trigger the order on.
     */
    instalment_day?: string;
    /**
     * An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)
     */
    tag?: string;
  }): Promise<{ sip_id: number }> {
    return this._post('mf.sip.place', params);
  }

  /**
   * Modify a mutual fund SIP.
   *
   * @param sip_id ID of the SIP.
   * @param params Modify params.
   */
  modifyMFSIP(
    sip_id: string,
    params: {
      /**
       * Number of instalments to trigger.
       * If set to -1, instalments are triggered at fixed intervals until the SIP is cancelled
       */
      instalments?: number;
      /**
       * Order frequency. weekly, monthly, or quarterly.
       */
      frequency?: 'weekly' | 'monthly' | 'quarterly';
      /**
       * If frequency is monthly, the day of the month (1, 5, 10, 15, 20, 25) to trigger the order on.
       */
      instalment_day?: string;
      /**
       * Pause or unpause an SIP (active or paused).
       */
      status?: 'active' | 'paused';
    }
  ): Promise<{ sip_id: number }> {
    return this._put('mf.sip.modify', { sip_id, ...params });
  }

  /**
   * Cancel a mutual fund SIP.
   *
   * @param sip_id ID of the SIP.
   */
  cancelMFSIP(sip_id: string): Promise<{ sip_id: string }> {
    return this._delete('mf.sip.cancel', { sip_id: sip_id });
  }

  /**
   * Get list of mutual fund holdings.
   */
  getMFHoldings(): Promise<MFHolding[]> {
    return this._get('mf.holdings');
  }

  /**
   * Get list of mutual fund instruments.
   */
  getMFInstruments(): Promise<MFInstrument[]> {
    return this._get(
      'mf.instruments',
      null,
      null,
      this.transformMFInstrumentsResponse
    );
  }

  /**
   * Get GTTs list
   */
  getGTTs(): Promise<Trigger[]> {
    return this._get('gtt.triggers', null, null, this.formatResponse);
  }

  /**
   * Get list of order history.
   * @param trigger_id GTT trigger ID
   */
  getGTT(trigger_id: string): Promise<Trigger> {
    return this._get(
      'gtt.trigger_info',
      { trigger_id: trigger_id },
      null,
      this.formatResponse
    );
  }

  // Get API params from user defined GTT params.
  private _getGTTPayload(params: GTTParams) {
    if (
      params.trigger_type !== this.GTT_TYPE_OCO &&
      params.trigger_type !== this.GTT_TYPE_SINGLE
    ) {
      throw new Error('Invalid `params.trigger_type`');
    }
    if (
      params.trigger_type === this.GTT_TYPE_OCO &&
      params.trigger_values.length !== 2
    ) {
      throw new Error('Invalid `trigger_values` for `OCO` order type');
    }
    if (
      params.trigger_type === this.GTT_TYPE_SINGLE &&
      params.trigger_values.length !== 1
    ) {
      throw new Error('Invalid `trigger_values` for `single` order type');
    }
    let condition = {
      exchange: params.exchange,
      tradingsymbol: params.tradingsymbol,
      trigger_values: params.trigger_values,
      last_price: parseFloat(String(params.last_price)),
    };
    let orders = [];
    for (let o of params.orders) {
      orders.push({
        transaction_type: o.transaction_type,
        order_type: o.order_type,
        product: o.product,
        quantity: parseInt(String(o.quantity)),
        price: parseFloat(String(o.price)),
        exchange: params.exchange,
        tradingsymbol: params.tradingsymbol,
      });
    }
    return { condition, orders };
  }

  /**
   * Place GTT.
   *
   * @param params Place GTT params
   */
  placeGTT(params: GTTParams): Promise<{ trigger_id: number }> {
    let payload = this._getGTTPayload(params);
    return this._post('gtt.place', {
      condition: JSON.stringify(payload.condition),
      orders: JSON.stringify(payload.orders),
      type: params.trigger_type,
    });
  }

  /**
   * Modify GTT.
   *
   * @param trigger_id GTT trigger ID.
   * @param params Modify params
   */
  modifyGTT(
    trigger_id: string,
    params: GTTParams
  ): Promise<{ trigger_id: number }> {
    let payload = this._getGTTPayload(params);
    return this._put('gtt.modify', {
      trigger_id: trigger_id,
      type: params.trigger_type,
      condition: JSON.stringify(payload.condition),
      orders: JSON.stringify(payload.orders),
    });
  }

  /**
   * Get list of order history.
   *
   * @param trigger_id GTT ID
   */
  deleteGTT(trigger_id: string): Promise<{ trigger_id: number }> {
    return this._delete('gtt.delete', { trigger_id: trigger_id }, null, null);
  }

  /**
   * Validate postback data checksum
   *
   * @param postback_data Postback data received. Must be an json object with required keys order_id, checksum and order_timestamp
   * @param api_secret Api secret of the app
   */
  validatePostback(
    postback_data: {
      order_id: string;
      checksum: string;
      order_timestamp: string;
    },
    api_secret: string
  ) {
    if (
      !postback_data ||
      !postback_data.checksum ||
      !postback_data.order_id ||
      !postback_data.order_timestamp ||
      !api_secret
    ) {
      throw new Error('Invalid postback data or api_secret');
    }

    const inputString =
      postback_data.order_id + postback_data.order_timestamp + api_secret;
    let checksum;
    try {
      checksum = sha256(inputString).toString();
    } catch (e) {
      throw e;
    }

    if (postback_data.checksum === checksum) {
      return true;
    } else {
      return false;
    }
  }

  // Format generate session response
  private formatGenerateSession(data: any) {
    if (!data.data || typeof data.data !== 'object') return data;

    if (data.data.login_time) {
      data.data.login_time = new Date(data.data.login_time);
    }

    return data;
  }

  private formatQuoteResponse(data: any) {
    if (!data.data || typeof data.data !== 'object') return data;

    for (const k in data.data) {
      const item = data.data[k];
      for (const field of ['timestamp', 'last_trade_time']) {
        if (item[field] && item[field].length === 19) {
          item[field] = new Date(item[field]);
        }
      }
    }

    return data;
  }

  // Format response ex. datetime string to date
  private formatResponse(data: AxiosResponse) {
    if (!data.data || typeof data.data !== 'object') return data;
    let list = [];
    if (data.data instanceof Array) {
      list = data.data;
    } else {
      list = [data.data];
    }

    const results = [];
    const fields = [
      'order_timestamp',
      'exchange_timestamp',
      'created',
      'last_instalment',
      'fill_timestamp',
    ];

    for (const item of list) {
      for (const field of fields) {
        if (item[field] && item[field].length === 19) {
          item[field] = new Date(item[field]);
        }
      }

      results.push(item);
    }

    if (data.data instanceof Array) {
      data.data = results;
    } else {
      data.data = results[0];
    }

    return data;
  }

  private parseHistorical(jsonData: any) {
    // Return if its an error
    if (jsonData.error_type) return jsonData;

    const results = [];
    for (let i = 0; i < jsonData.data.candles.length; i++) {
      const d = jsonData.data.candles[i];
      const c: any = {
        date: new Date(d[0]),
        open: d[1],
        high: d[2],
        low: d[3],
        close: d[4],
        volume: d[5],
      };

      // Add OI field if its returned
      if (d[6]) {
        c['oi'] = d[6];
      }

      results.push(c);
    }

    return { data: results };
  }

  private transformInstrumentsResponse(data: any, headers: any) {
    // Parse CSV responses
    if (headers['content-type'] === 'text/csv') {
      const parsedData = csvParse.parse(data, { header: true }).data as any[];
      for (const item of parsedData) {
        item['last_price'] = parseFloat(item['last_price']);
        item['strike'] = parseFloat(item['strike']);
        item['tick_size'] = parseFloat(item['tick_size']);
        item['lot_size'] = parseInt(item['lot_size']);

        if (item['expiry'] && item['expiry'].length === 10) {
          item['expiry'] = new Date(item['expiry']);
        }
      }

      return parsedData;
    }

    return data;
  }

  private transformMFInstrumentsResponse(data: any, headers: any) {
    // Parse CSV responses
    if (headers['content-type'] === 'text/csv') {
      const parsedData = csvParse.parse(data, { header: true }).data as any[];
      for (const item of parsedData) {
        item['minimum_purchase_amount'] = parseFloat(
          item['minimum_purchase_amount']
        );
        item['purchase_amount_multiplier'] = parseFloat(
          item['purchase_amount_multiplier']
        );
        item['minimum_additional_purchase_amount'] = parseFloat(
          item['minimum_additional_purchase_amount']
        );
        item['redemption_quantity_multiplier'] = parseFloat(
          item['redemption_quantity_multiplier']
        );
        item['minimum_additional_purchase_amount'] = parseFloat(
          item['minimum_additional_purchase_amount']
        );
        item['last_price'] = parseFloat(item['last_price']);
        item['purchase_allowed'] = Boolean(parseInt(item['purchase_allowed']));
        item['redemption_allowed'] = Boolean(
          parseInt(item['redemption_allowed'])
        );

        if (item['last_price_date'] && item['last_price_date'].length === 10) {
          item['last_price_date'] = new Date(item['last_price_date']);
        }
      }

      return parsedData;
    }

    return data;
  }

  private _get(
    route: keyof typeof this.routes,
    params?: any,
    responseType?: string | null,
    responseTransformer?: AxiosResponseTransformer | null,
    isJSON = false
  ) {
    return this.request(
      route,
      'GET',
      params || {},
      responseType,
      responseTransformer,
      isJSON
    );
  }

  private _post(
    route: keyof typeof this.routes,
    params: any,
    responseType?: string | null,
    responseTransformer?: AxiosResponseTransformer | null,
    isJSON = false,
    queryParams: any = null
  ) {
    return this.request(
      route,
      'POST',
      params || {},
      responseType,
      responseTransformer,
      isJSON,
      queryParams
    );
  }

  private _put(
    route: keyof typeof this.routes,
    params: any,
    responseType?: string | null,
    responseTransformer?: AxiosResponseTransformer | null,
    isJSON = false,
    queryParams = null
  ) {
    return this.request(
      route,
      'PUT',
      params || {},
      responseType,
      responseTransformer,
      isJSON,
      queryParams
    );
  }

  private _delete(
    route: keyof typeof this.routes,
    params?: any,
    responseType?: string | null,
    responseTransformer?: AxiosResponseTransformer | null,
    isJSON = false
  ) {
    return this.request(
      route,
      'DELETE',
      params || {},
      responseType,
      responseTransformer,
      isJSON
    );
  }

  private request(
    route: keyof typeof this.routes,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    params?: any,
    responseType?: string | null,
    responseTransformer?: AxiosResponseTransformer | null,
    isJSON?: boolean,
    queryParams?: any
  ) {
    // Check access token
    if (!responseType) responseType = 'json';
    let uri = this.routes[route];

    // Replace variables in "RESTful" URLs with corresponding params
    if (uri.indexOf('{') !== -1) {
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          uri = uri.replace('{' + k + '}', params[k]);
        }
      }
    }

    let payload = null;
    if (method === 'GET' || method === 'DELETE') {
      queryParams = params;
    } else {
      if (isJSON) {
        // post JSON payload
        payload = JSON.stringify(params);
      } else {
        // post url encoded payload
        payload = querystring.stringify(params);
      }
    }

    const options = {
      method: method,
      url: uri,
      params: queryParams,
      data: payload,
      // Set auth header
      headers: {} as any,
      transformResponse: null as any,
    };

    // Send auth token
    if (this.access_token) {
      const authHeader = this.api_key + ':' + this.access_token;
      options['headers']['Authorization'] = 'token ' + authHeader;
    }

    // Set request header content type
    if (isJSON) {
      options['headers']['Content-Type'] = 'application/json';
    } else {
      options['headers']['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    // Set response transformer
    if (responseTransformer) {
      if (!axios.defaults.transformResponse) {
        options.transformResponse = responseTransformer;
      }
      if (Array.isArray(axios.defaults.transformResponse)) {
        options.transformResponse =
          axios.defaults.transformResponse.concat(responseTransformer);
      } else {
        options.transformResponse = [axios.defaults.transformResponse].concat(
          responseTransformer
        );
      }
    }
    return this.requestInstance.request(options) as Promise<any>;
  }
}

export * from './types';
