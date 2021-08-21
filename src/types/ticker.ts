import { OutgoingMessageFlag, TickerMode } from './enums';

export interface KiteTickerParams {
  apiKey: string;
  accessToken: string;
  reconnect?: boolean;
  maxRetry?: number;
  maxDelay?: number;
  root?: string;
}

type TokenArray = number[];
type TickRequestValue = [TickerMode, TokenArray];

export interface TickRequest {
  a: OutgoingMessageFlag;
  v: TokenArray | TickRequestValue;
}

interface DepthData {
  quantity: number;
  price: number;
  orders: number;
}

const tickerEvents = [
  'connect',
  'ticks',
  'disconnect',
  'error',
  'close',
  'reconnect',
  'noreconnect',
  'message',
  'orderUpdate',
] as const;

export type TickerEvent = typeof tickerEvents[number];

export interface TickLtp {
  tradable: boolean;
  mode: TickerMode;
  instrumentToken: number;
  lastPrice: number;
}

export interface TickIndexQuote extends TickLtp {
  ohlc: {
    high: number;
    low: number;
    open: number;
    close: number;
  };
  change: number;
}

export interface TickIndexFull extends TickIndexQuote {
  timestamp: number | null;
}

export interface TickQuote extends TickLtp {
  lastQuantity: number;
  averagePrice: number;
  volume: number;
  buyQuantity: number;
  sellQuantity: number;
  ohlc: {
    open: number;
    high: number;
    low: number;
    close: number;
  };
}

export interface TickFull extends TickQuote {
  lastTradeTime: number | null;
  oi: number;
  oiDayHigh: number;
  oiDayLow: number;
  timestamp: number;
  depth: {
    buy?: DepthData[];
    sell?: DepthData[];
  };
}

export type Tick =
  | TickLtp
  | TickIndexQuote
  | TickIndexFull
  | TickQuote
  | TickFull;

export type EventTriggers = {
  [Item in TickerEvent]: any[];
};

export interface NonBinaryTick {
  type: 'order' | 'error' | 'message';
  data: any;
}
