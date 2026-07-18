import * as assert from 'node:assert/strict';
import { createServer, type IncomingMessage, type Server } from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { after, before, describe, it } from 'node:test';
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
} from 'kiteconnect-ts';

const __dirname = path.dirname(
  fileURLToPath((import.meta as ImportMeta & { url: string }).url)
);
const mockDir = 'kiteconnect-mocks';
const mockId = '100';

type Fixture = {
  fileName: string;
  query?: Record<string, string>;
  contentType?: string;
};

const fixture = (
  fileName: string,
  query?: Record<string, string>,
  contentType?: string
): Fixture => ({
  fileName,
  query,
  contentType,
});

type RecordedRequest = {
  method: string;
  pathname: string;
  url: URL;
  headers: IncomingMessage['headers'];
  body: string;
};

const requests: RecordedRequest[] = [];

const readRequestBody = async (request: IncomingMessage) => {
  const chunks: Buffer[] = [];

  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString('utf-8');
};

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
    'GET /instruments',
    fixture('instruments_all.csv', undefined, 'text/csv; charset=utf-8'),
  ],
  [
    'GET /mf/instruments',
    fixture('mf_instruments.csv', undefined, 'text/csv; charset=utf-8'),
  ],
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
  createServer(async (request, response) => {
    const requestUrl = new URL(request.url ?? '/', 'http://localhost');
    const key = `${request.method ?? 'GET'} ${requestUrl.pathname}`;
    const routeFixture = fixtures.get(key);
    const requestBody = await readRequestBody(request);

    requests.push({
      method: request.method ?? 'GET',
      pathname: requestUrl.pathname,
      url: requestUrl,
      headers: request.headers,
      body: requestBody,
    });

    if (!routeFixture) {
      response.writeHead(404, {
        'content-type': 'application/json; charset=utf-8',
      });
      response.end(JSON.stringify({ error: `No fixture for ${key}` }));
      return;
    }

    for (const [name, value] of Object.entries(routeFixture.query ?? {})) {
      if (requestUrl.searchParams.get(name) !== value) {
        response.writeHead(400, {
          'content-type': 'application/json; charset=utf-8',
        });
        response.end(
          JSON.stringify({
            error: `Expected query ${name}=${value} for ${key}`,
          })
        );
        return;
      }
    }

    const fileName =
      key === 'POST /orders/regular' && requestBody.includes('autoslice=true')
        ? 'autoslice_response.json'
        : routeFixture.fileName;
    const contentType =
      routeFixture.contentType ?? 'application/json; charset=utf-8';
    const rawData = fs.readFileSync(
      path.join(__dirname, mockDir, fileName),
      'utf-8'
    );

    response.writeHead(200, { 'content-type': contentType });
    response.end(
      contentType.startsWith('application/json')
        ? JSON.stringify(JSON.parse(rawData))
        : rawData
    );
  });

const getLastRequest = (method: string, pathname: string) => {
  const request = requests.findLast(
    (item) => item.method === method && item.pathname === pathname
  );
  assert.ok(request, `Expected a recorded ${method} ${pathname} request`);
  return request;
};

const jsonResponse = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
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

before(async () => {
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
    access_token: 'TEST_ACCESS_TOKEN',
    root: `http://127.0.0.1:${port}`,
  });
});

after(async () => {
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

    const request = getLastRequest('GET', '/user/profile');
    assert.equal(
      request.headers.authorization,
      'token TEST_API_KEY:TEST_ACCESS_TOKEN'
    );
    assert.equal(request.headers['x-kite-version'], '3');
    assert.match(request.headers['user-agent'] ?? '', /^kiteconnect-ts\//);
  });

  it('uses an injected fetch implementation', async () => {
    const captured: { url?: URL; headers?: Headers } = {};
    const client = new KiteConnect({
      api_key: 'CUSTOM_API_KEY',
      access_token: 'CUSTOM_ACCESS_TOKEN',
      root: 'https://example.test',
      fetch: async (input, init) => {
        assert.ok(input instanceof URL);
        captured.url = input;
        captured.headers = new Headers(init?.headers);
        return jsonResponse({
          data: { user_id: 'custom-user', user_name: 'Custom User' },
        });
      },
    });

    const response = await client.getProfile();

    assert.equal(response.user_id, 'custom-user');
    assert.equal(captured.url?.toString(), 'https://example.test/user/profile');
    assert.equal(
      captured.headers?.get('authorization'),
      'token CUSTOM_API_KEY:CUSTOM_ACCESS_TOKEN'
    );
  });

  it('runs the expiry hook and preserves API errors', async () => {
    let expiryCount = 0;
    const client = new KiteConnect({
      api_key: 'TEST_API_KEY',
      fetch: async () =>
        jsonResponse(
          {
            error_type: 'TokenException',
            message: 'Session expired',
            data: null,
          },
          403
        ),
    });
    client.setSessionExpiryHook(() => expiryCount++);

    await assert.rejects(
      () => client.getProfile(),
      (error: any) => {
        assert.equal(error.error_type, 'TokenException');
        assert.equal(error.message, 'Session expired');
        return true;
      }
    );
    assert.equal(expiryCount, 1);
  });

  it('normalizes network failures', async () => {
    const client = new KiteConnect({
      api_key: 'TEST_API_KEY',
      fetch: async () => {
        throw new TypeError('socket closed');
      },
    });

    await assert.rejects(
      () => client.getProfile(),
      (error: any) => {
        assert.equal(error.error_type, 'NetworkException');
        assert.equal(error.message, 'socket closed');
        assert.equal(error.data, null);
        return true;
      }
    );
  });

  it('aborts requests after the configured timeout', async () => {
    const client = new KiteConnect({
      api_key: 'TEST_API_KEY',
      timeout: 5,
      fetch: (_input, init) =>
        new Promise((_resolve, reject) => {
          const signal = init?.signal;
          assert.ok(signal);
          signal.addEventListener('abort', () => reject(signal.reason), {
            once: true,
          });
        }),
    });

    await assert.rejects(
      () => client.getProfile(),
      (error: any) => {
        assert.equal(error.error_type, 'NetworkException');
        assert.equal(error.message, 'Request timed out after 5ms');
        return true;
      }
    );
  });

  it('returns a DataException for unsupported response media types', async () => {
    const client = new KiteConnect({
      api_key: 'TEST_API_KEY',
      fetch: async () =>
        new Response('plain text', {
          headers: { 'content-type': 'text/plain; charset=utf-8' },
        }),
    });

    const response = (await client.getProfile()) as any;

    assert.equal(response.error_type, 'DataException');
    assert.match(response.message, /text\/plain; charset=utf-8/);
  });

  // fetch user fund detail
  it('fetch equity and commodity segment funds', async () => {
    const response = await kc.getMargins();
    assert.ok(response.equity.enabled);
    assert.ok(response.commodity.enabled);
  });

  it('fetch equity specific segment funds', async () => {
    const response = await kc.getMargins('equity');
    assert.ok(response.enabled);
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

    const request = getLastRequest('POST', '/orders/regular');
    const form = new URLSearchParams(request.body);
    assert.equal(form.get('exchange'), Exchange.NSE);
    assert.equal(form.get('tradingsymbol'), 'SBIN');
    assert.equal(form.get('quantity'), '1');
    assert.equal(
      request.headers['content-type'],
      'application/x-www-form-urlencoded'
    );
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

  it('Place order with autoslice enabled', async () => {
    const response = await kc.placeOrder(Variety.regular, {
      exchange: Exchange.NSE,
      tradingsymbol: 'SBIN',
      transaction_type: TransactionType.BUY,
      quantity: 100000,
      product: ProductType.MIS,
      order_type: OrderType.MARKET,
      autoslice: true,
    });

    assert.ok(response.hasOwnProperty('order_id'));
    assert.ok(Array.isArray(response.children));
    assert.equal(response.children?.[2]?.error?.error_type, 'MarginException');
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
  it('parses CSV responses with charset parameters', async () => {
    const response = await kc.getInstruments();

    assert.ok(Array.isArray(response));
    assert.equal(response[0]?.tradingsymbol, 'CENTRALBK-BE');
    assert.equal(response[0]?.last_price, 0);
    assert.equal(response[0]?.lot_size, 1);
  });

  // Retrieve full market quotes for instruments
  it('Retrieve full market quotes for instruments', async () => {
    const response = await kc.getQuote(['NSE:INFY', 'NSE:SBIN']);
    assert.ok(response.hasOwnProperty('NSE:INFY'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('last_price'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('depth'));
    assert.ok(response['NSE:INFY'].hasOwnProperty('ohlc'));

    const request = getLastRequest('GET', '/quote');
    assert.deepEqual(request.url.searchParams.getAll('i'), [
      'NSE:INFY',
      'NSE:SBIN',
    ]);
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

    const request = getLastRequest('POST', '/margins/orders');
    const body = JSON.parse(request.body);
    assert.ok(Array.isArray(body));
    assert.equal(body[0].tradingsymbol, 'SBIN');
    assert.equal(request.headers['content-type'], 'application/json');
  });

  it('validates postback checksums with node:crypto compatibility', () => {
    assert.equal(
      kc.validatePostback(
        {
          order_id: 'ORDER123',
          order_timestamp: '2026-07-18 10:00:00',
          checksum:
            '11e31fa2d8aa9a9f0ef8302ab3ecd6c7c9639a8837d7ee51193dff6f2402ae19',
        },
        'SECRET'
      ),
      true
    );
  });
});
