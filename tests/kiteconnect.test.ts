import { afterAll, beforeAll, describe, it } from 'bun:test';
import * as assert from 'node:assert/strict';
import { createServer, type Server } from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Exchange,
  KiteConnect,
  MarketProtections,
  OrderType,
  ProductType,
  TransactionType,
  TriggerType,
  Variety,
} from '../lib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mockDir = 'kiteconnect-mocks';
const mockId = '100';

const parseJson = (fileName: string) => {
  // read and parse mock json file
  const rawdata = fs.readFileSync(
    path.join(__dirname, mockDir, fileName),
    'utf-8'
  );
  const mockData = JSON.parse(rawdata);
  return mockData;
};

type Fixture = {
  fileName: string;
  query?: Record<string, string>;
};

const fixture = (fileName: string, query?: Record<string, string>): Fixture => ({
  fileName,
  query,
});

const fixtures = new Map([
  ['GET /user/profile', fixture('profile.json')],
  ['GET /user/margins', fixture('margins.json')],
  [
    'GET /user/margins/equity',
    fixture('margins_equity.json', { segment: 'equity' }),
  ],
  ['POST /orders/regular', fixture('order_response.json')],
  [`PUT /orders/regular/${mockId}`, fixture('order_modify.json')],
  [
    `DELETE /orders/regular/${mockId}`,
    fixture('order_cancel.json', { variety: 'regular', order_id: mockId }),
  ],
  ['GET /orders', fixture('orders.json')],
  [`GET /orders/${mockId}`, fixture('order_info.json', { order_id: mockId })],
  ['GET /trades', fixture('trades.json')],
  [
    `GET /orders/${mockId}/trades`,
    fixture('order_trades.json', { order_id: mockId }),
  ],
  ['GET /portfolio/holdings', fixture('holdings.json')],
  ['GET /portfolio/holdings/auctions', fixture('auctions_list.json')],
  ['GET /portfolio/positions', fixture('positions.json')],
  ['PUT /portfolio/positions', fixture('convert_position.json')],
  ['POST /mf/orders', fixture('mf_order_response.json')],
  [
    `DELETE /mf/orders/${mockId}`,
    fixture('mf_order_cancel.json', { order_id: mockId }),
  ],
  ['GET /mf/orders', fixture('mf_orders.json')],
  [
    `GET /mf/orders/${mockId}`,
    fixture('mf_orders_info.json', { order_id: mockId }),
  ],
  ['POST /mf/sips', fixture('mf_sip_place.json')],
  [`PUT /mf/sips/${mockId}`, fixture('mf_sip_modify.json')],
  [
    `DELETE /mf/sips/${mockId}`,
    fixture('mf_sip_cancel.json', { sip_id: mockId }),
  ],
  ['GET /mf/sips', fixture('mf_sips.json')],
  [
    `GET /mf/sips/${mockId}`,
    fixture('mf_sip_info.json', { sip_id: mockId }),
  ],
  ['GET /mf/holdings', fixture('mf_holdings.json')],
  [
    `GET /instruments/historical/${mockId}/minute`,
    fixture('historical_minute.json', {
      instrument_token: mockId,
      interval: 'minute',
      from: '2022-06-01 09:15:00',
      to: '2022-06-01 15:30:00',
      continuous: '0',
      oi: '0',
    }),
  ],
  ['GET /quote', fixture('quote.json', { i: 'NSE:INFY' })],
  ['GET /quote/ltp', fixture('ltp.json', { i: 'NSE:INFY' })],
  ['GET /quote/ohlc', fixture('quote.json', { i: 'NSE:INFY' })],
  ['POST /gtt/triggers', fixture('gtt_place_order.json')],
  [`PUT /gtt/triggers/${mockId}`, fixture('gtt_modify_order.json')],
  [
    `DELETE /gtt/triggers/${mockId}`,
    fixture('gtt_delete_order.json', { trigger_id: mockId }),
  ],
  ['GET /gtt/triggers', fixture('gtt_get_orders.json')],
  [
    `GET /gtt/triggers/${mockId}`,
    fixture('gtt_get_order.json', { trigger_id: mockId }),
  ],
  ['POST /margins/orders', fixture('order_margins.json')],
]);

let server: Server | null = null;
let kc: KiteConnect;

const createFixtureServer = () =>
  createServer((request, response) => {
    request.resume();

    const requestUrl = new URL(request.url ?? '/', 'http://localhost');
    const key = `${request.method ?? 'GET'} ${requestUrl.pathname}`;
    const routeFixture = fixtures.get(key);

    if (!routeFixture) {
      response.writeHead(404, { 'content-type': 'application/json' });
      response.end(JSON.stringify({ error: `No fixture for ${key}` }));
      return;
    }

    for (const [name, value] of Object.entries(routeFixture.query ?? {})) {
      if (requestUrl.searchParams.get(name) !== value) {
        response.writeHead(400, { 'content-type': 'application/json' });
        response.end(
          JSON.stringify({
            error: `Expected query ${name}=${value} for ${key}`,
          })
        );
        return;
      }
    }

    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(parseJson(routeFixture.fileName)));
  });

const listenOnPort = async (port: number) => {
  const nextServer = createFixtureServer();

  await new Promise<void>((resolve, reject) => {
    const onError = (error: Error) => {
      nextServer.off('listening', onListening);
      reject(error);
    };
    const onListening = () => {
      nextServer.off('error', onError);
      resolve();
    };

    nextServer.once('error', onError);
    nextServer.once('listening', onListening);
    nextServer.listen(port, '127.0.0.1');
  });

  server = nextServer;
};

beforeAll(async () => {
  const basePort = 30000 + (process.pid % 10000);
  let port = basePort;
  let lastError: unknown;

  for (let attempt = 0; attempt < 10; attempt++) {
    port = basePort + attempt;
    try {
      await listenOnPort(port);
      lastError = undefined;
      break;
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    throw lastError;
  }

  kc = new KiteConnect({
    api_key: 'TEST_API_KEY',
    root: `http://127.0.0.1:${port}`,
  });
});

afterAll(async () => {
  if (!server?.listening) return;

  await new Promise<void>((resolve, reject) => {
    server?.close((error) => {
      if (error) reject(error);
      else resolve();
    });
  });
});

describe('KiteConnect', () => {
  // fetch user profile detail
  it('fetch user profile detail', async () => {
    const response = await kc.getProfile();
    assert.ok(response.hasOwnProperty('user_id'));
    assert.ok(response.hasOwnProperty('user_name'));
  });

  // fetch user fund detail
  it('fetch equity and commodity segment funds', async () => {
    const response = await kc.getMargins();
    assert.ok(response.hasOwnProperty('equity'));
    assert.ok(response.hasOwnProperty('commodity'));
  });

  it('fetch equity specific segment funds', async () => {
    const response = await kc.getMargins('equity');
    assert.ok(response.hasOwnProperty('enabled'));
  });

  // Order APIs
  // Place market and limit order
  it('Place market order', async () => {
    const response = await kc.placeOrder(Variety.regular, {
      exchange: Exchange.NSE,
      tradingsymbol: 'SBIN',
      transaction_type: TransactionType.BUY,
      quantity: 1,
      product: ProductType.MIS,
      order_type: OrderType.MARKET,
    });
    assert.ok(response.hasOwnProperty('order_id'));
  });

  it('Place market order with market_protection', async () => {
    const response = await kc.placeOrder(Variety.regular, {
      exchange: Exchange.NSE,
      tradingsymbol: 'SBIN',
      transaction_type: TransactionType.BUY,
      quantity: 1,
      product: ProductType.MIS,
      order_type: OrderType.MARKET,
      market_protection: MarketProtections.AUTO,
    });
    assert.ok(response.hasOwnProperty('order_id'));
  });

  // modify open pending order
  it('Modify an open order', async () => {
    const response = await kc.modifyOrder(Variety.regular, mockId, {
      price: 10,
    });
    assert.ok(response.hasOwnProperty('order_id'));
  });

  it('Modify an open order with market_protection', async () => {
    const response = await kc.modifyOrder(Variety.regular, mockId, {
      price: 10,
      market_protection: MarketProtections.AUTO,
    });
    assert.ok(response.hasOwnProperty('order_id'));
  });

  // cancel an open pending order
  it('cancel an open pending order', async () => {
    const response = await kc.cancelOrder(Variety.regular, mockId);
    assert.ok(response.hasOwnProperty('order_id'));
  });

  // Retrieve complete orderbook
  it('Retrieve the list of all orders under orderbook', async () => {
    const response = await kc.getOrders();
    assert.ok(Array.isArray(response));
    assert.ok(response[0]?.hasOwnProperty('order_id'));
    assert.ok(response[0]?.hasOwnProperty('status'));
    assert.ok(response[0]?.hasOwnProperty('tradingsymbol'));
  });

  // Retrieve the history of a given order
  it('Retrieve the history of a given order', async () => {
    const response = await kc.getOrderHistory(mockId);
    assert.ok(response[0]?.hasOwnProperty('order_id'));
    assert.ok(response[0]?.hasOwnProperty('status'));
  });

  // Retrieve the list of all executed trades
  it('Retrieve the list of all executed trades for the day', async () => {
    const response = await kc.getTrades();
    assert.ok(Array.isArray(response));
    assert.ok(response[0]?.hasOwnProperty('order_id'));
    assert.ok(response[0]?.hasOwnProperty('exchange_timestamp'));
  });

  // Retrieve all the trades generated by an order
  it('Retrieve all the trades generated by an order', async () => {
    const response = await kc.getOrderTrades(mockId);
    assert.ok(Array.isArray(response));
  });

  // Portfolio APIs
  // Retrieve the list of equity holdings
  it('Retrieve the list of equity holdings', async () => {
    const response = await kc.getHoldings();
    assert.ok(Array.isArray(response));
    assert.ok(response[0]?.hasOwnProperty('tradingsymbol'));
    assert.ok(response[0]?.hasOwnProperty('average_price'));
  });

  // Retrieves list of available instruments for a auction session
  it('Retrieves list of available instruments for a auction session', async () => {
    const response = await kc.getAuctionInstruments();
    assert.ok(Array.isArray(response));
    assert.ok(response[0]?.hasOwnProperty('auction_number'));
    assert.ok(response[0]?.hasOwnProperty('instrument_token'));
    assert.ok(response[0]?.hasOwnProperty('tradingsymbol'));
  });

  // Retrieve the list of positions
  it('Retrieve the list of positions', async () => {
    const response = await kc.getPositions();
    assert.ok(response.hasOwnProperty('net'));
    assert.ok(response.hasOwnProperty('day'));
  });

  // convert existing position
  it('convert existing position', async () => {
    const response = await kc.convertPosition({
      tradingsymbol: 'SBIN',
      exchange: Exchange.NSE,
      transaction_type: TransactionType.BUY,
      position_type: 'day',
      quantity: '1',
      old_product: ProductType.CNC,
      new_product: ProductType.MIS,
    });
    assert.ok(response);
  });

  // MF APIs
  // Place MF Order
  it('Place MF order', async () => {
    const response = await kc.placeMFOrder({
      tradingsymbol: 'INF174K01LS2',
      transaction_type: TransactionType.BUY,
      amount: 1000,
    });
    assert.ok(response.hasOwnProperty('order_id'));
  });

  // cancel an open pending MF order
  it('cancel an open pending MF order', async () => {
    const response = await kc.cancelMFOrder(mockId);
    assert.ok(response.hasOwnProperty('order_id'));
  });

  // Retrieve the list of all MF orders (open and executed) over the last 7 days
  it('Retrieve the list of all MF orders from orderbook', async () => {
    const response = await kc.getMFOrders();
    assert.ok(Array.isArray(response));
  });

  // Retrieve the detail of a given MF order
  it('Retrieve the detail of a given MF order', async () => {
    const response = await kc.getMFOrders(mockId);
    assert.ok(response.hasOwnProperty('order_timestamp'));
    assert.ok(response.hasOwnProperty('status'));
  });

  // Place MF SIP Order
  it('Place MF SIP Order', async () => {
    const response = await kc.placeMFSIP({
      tradingsymbol: 'INF174K01LS2',
      frequency: 'monthly',
      instalment_day: '1',
      instalments: -1,
      initial_amount: 5000,
      amount: 1000,
    });
    assert.ok(response.hasOwnProperty('sip_id'));
  });

  // modify open pending MF SIP order
  it('modify open pending NF SIP order', async () => {
    const response = await kc.modifyMFSIP(mockId, {
      instalments: 12,
    });
    assert.ok(response.hasOwnProperty('sip_id'));
  });

  // cancel an open pending MF SIP order
  it('cancel an open pending MF SIP order', async () => {
    const response = await kc.cancelMFSIP(mockId);
    assert.ok(response.hasOwnProperty('sip_id'));
  });

  // Retrieve complete SIP orderbook
  it('Retrieve complete SIP orderbook', async () => {
    const response = await kc.getMFSIPS();
    assert.ok(Array.isArray(response));
    assert.ok(response[0]?.hasOwnProperty('status'));
    assert.ok(response[0]?.hasOwnProperty('created'));
  });

  // Retrieve the detail of a given SIP order
  it('Retrieve the detail of a given SIP order', async () => {
    const response = await kc.getMFSIPS(mockId);
    assert.ok(response.hasOwnProperty('status'));
    assert.ok(response.hasOwnProperty('created'));
  });

  // Retrieve complete MF holdings
  it('Retrieve complete MF holdings', async () => {
    const response = await kc.getMFHoldings();
    assert.ok(Array.isArray(response));
    assert.ok(response[0]?.hasOwnProperty('folio'));
    assert.ok(response[0]?.hasOwnProperty('fund'));
  });

  // Historical candle APIs
  it('Fetch historical data for minute(intraday) candle', async () => {
    const response = await kc.getHistoricalData(
      mockId,
      'minute',
      '2022-06-01 09:15:00',
      '2022-06-01 15:30:00'
    );
    assert.ok(Array.isArray(response));
    assert.ok(response[0]?.hasOwnProperty('date'));
    assert.ok(response[0]?.hasOwnProperty('open'));
    assert.ok(response[0]?.hasOwnProperty('close'));
    assert.ok(response[0]?.hasOwnProperty('volume'));
  });

  // Market quotes and instruments
  // Retrieve full market quotes for instruments
  it('Retrieve full market quotes for instruments', async () => {
    const response = await kc.getQuote('NSE:INFY');
    assert.ok(response.hasOwnProperty('NSE:INFY'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('last_price'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('depth'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('ohlc'));
  });

  // Retrieve LTP quotes for instruments
  it('Retrieve LTP quotes for instruments', async () => {
    const response = await kc.getLTP('NSE:INFY');
    assert.ok(response.hasOwnProperty('NSE:INFY'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('instrument_token'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('last_price'));
  });

  // Retrieve OHLC quotes for instruments
  it('Retrieve OHLC quotes for instruments', async () => {
    const response = await kc.getOHLC('NSE:INFY');
    assert.ok(response.hasOwnProperty('NSE:INFY'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('last_price'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('ohlc'));
  });

  // GTT APIs
  // Place a GTT
  it('Place an GTT OCO order', async () => {
    const response = await kc.placeGTT({
      trigger_type: TriggerType['two-leg'],
      tradingsymbol: 'SBIN',
      exchange: Exchange.NSE,
      trigger_values: [350, 450],
      last_price: 400,
      orders: [
        {
          transaction_type: TransactionType.SELL,
          quantity: 1,
          product: ProductType.CNC,
          order_type: OrderType.LIMIT,
          price: 350,
        },
        {
          transaction_type: TransactionType.SELL,
          quantity: 1,
          product: ProductType.CNC,
          order_type: OrderType.LIMIT,
          price: 450,
        },
      ],
    });
    assert.ok(response.hasOwnProperty('trigger_id'));
  });

  // Retrieve a list of all GTTs visible in GTT order book
  it('Fetch list of all GTTs visible in GTT order book', async () => {
    const response = await kc.getGTTs();
    assert.ok(Array.isArray(response));
    assert.ok(response[0]?.hasOwnProperty('id'));
    assert.ok(response[0]?.hasOwnProperty('created_at'));
    assert.ok(response[0]?.hasOwnProperty('user_id'));
    assert.ok(response[0]?.hasOwnProperty('status'));
  });

  // Retrieve an individual trigger
  it('Fetch specific gtt order detail using trigger_id', async () => {
    const response = await kc.getGTT(mockId);
    assert.ok(response.hasOwnProperty('id'));
    assert.ok(response.hasOwnProperty('type'));
    assert.ok(response.hasOwnProperty('status'));
    assert.ok(response.hasOwnProperty('condition'));
  });

  // Modify an active GTT
  it('Modify an open GTT order using trigger_id', async () => {
    const response = await kc.modifyGTT(mockId, {
      trigger_type: TriggerType['two-leg'],
      tradingsymbol: 'SBIN',
      exchange: Exchange.NSE,
      trigger_values: [358, 458],
      last_price: 400,
      orders: [
        {
          transaction_type: TransactionType.SELL,
          quantity: 1,
          product: ProductType.CNC,
          order_type: OrderType.LIMIT,
          price: 358,
        },
        {
          transaction_type: TransactionType.SELL,
          quantity: 1,
          product: ProductType.CNC,
          order_type: OrderType.LIMIT,
          price: 458,
        },
      ],
    });
    assert.ok(response.hasOwnProperty('trigger_id'));
  });

  // Delete an active GTT
  it('Delete a GTT using trigger_id', async () => {
    const response = await kc.deleteGTT(mockId);
    assert.ok(response.hasOwnProperty('trigger_id'));
  });

  // Margin APIs
  // fetch order Margin detail
  it('Fetch order margin detail', async () => {
    const response = await kc.orderMargins([
      {
        exchange: Exchange.NSE,
        tradingsymbol: 'SBIN',
        transaction_type: TransactionType.BUY,
        variety: Variety.regular,
        product: ProductType.MIS,
        order_type: OrderType.MARKET,
        quantity: 1,
      },
    ]);
    assert.ok(response[0]?.hasOwnProperty('type'));
    assert.ok(response[0]?.hasOwnProperty('var'));
    assert.ok(response[0]?.hasOwnProperty('span'));
    assert.ok(response[0]?.hasOwnProperty('exposure'));
    // Order charges
    assert.ok(response[0]?.charges.hasOwnProperty('total'));
    assert.ok(response[0]?.charges.hasOwnProperty('transaction_tax'));
    assert.ok(response[0]?.charges.hasOwnProperty('gst'));
    assert.ok(response[0]?.charges.gst.hasOwnProperty('total'));
  });
});
