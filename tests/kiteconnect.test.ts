import nock from 'nock';
import * as assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';
import {
  Exchange,
  KiteConnect,
  OrderType,
  ProductType,
  TransactionType,
  TriggerType,
  Variety,
} from '../lib';

const mockDir = 'kiteconnect-mocks';
const root = 'https://mock-api.kite.trade';
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

// Chaining the mock requests
nock(root)
  // getProfile
  .get('/user/profile')
  .reply(200, parseJson('profile.json'))

  // getMargins
  .get('/user/margins')
  .reply(200, parseJson('margins.json'))

  // getMargins(segment)
  .get('/user/margins/equity')
  .query({ segment: 'equity' })
  .reply(200, parseJson('margins_equity.json'))

  // placeOrder
  .post('/orders/regular')
  .reply(200, parseJson('order_response.json'))

  // modifyOrder
  .put(`/orders/regular/${mockId}`)
  .reply(200, parseJson('order_modify.json'))

  // cancelOrder
  .delete(`/orders/regular/${mockId}`)
  .query({ variety: 'regular', order_id: mockId })
  .reply(200, parseJson('order_cancel.json'))

  // getOrders
  .get('/orders')
  .reply(200, parseJson('orders.json'))

  // getOrderHistory
  .get(`/orders/${mockId}`)
  .query({ order_id: mockId })
  .reply(200, parseJson('order_info.json'))

  // getTrades
  .get('/trades')
  .reply(200, parseJson('trades.json'))

  // getOrderTrades
  .get(`/orders/${mockId}/trades`)
  .query({ order_id: mockId })
  .reply(200, parseJson('order_trades.json'))

  // getHoldings
  .get('/portfolio/holdings')
  .reply(200, parseJson('holdings.json'))

  // getHoldings
  .get('/portfolio/holdings/auctions')
  .reply(200, parseJson('auctions_list.json'))

  // getPositions
  .get('/portfolio/positions')
  .reply(200, parseJson('positions.json'))

  // convertPosition
  .put('/portfolio/positions')
  .reply(200, parseJson('convert_position.json'))

  // placeMFOrder
  .post('/mf/orders')
  .reply(200, parseJson('mf_order_response.json'))

  // cancelMFOrder
  .delete(`/mf/orders/${mockId}`)
  .query({ order_id: mockId })
  .reply(200, parseJson('mf_order_cancel.json'))

  // getMFOrders
  .get('/mf/orders')
  .reply(200, parseJson('mf_orders.json'))

  // getMFOrders(order_id)
  .get(`/mf/orders/${mockId}`)
  .query({ order_id: mockId })
  .reply(200, parseJson('mf_orders_info.json'))

  // placeMFSIP
  .post('/mf/sips')
  .reply(200, parseJson('mf_sip_place.json'))

  // modifyMFSIP
  .put(`/mf/sips/${mockId}`)
  .reply(200, parseJson('mf_sip_modify.json'))

  // cancelMFSIP
  .delete(`/mf/sips/${mockId}`)
  .query({ sip_id: mockId })
  .reply(200, parseJson('mf_sip_cancel.json'))

  // getMFSIPS
  .get('/mf/sips')
  .reply(200, parseJson('mf_sips.json'))

  // getMFSIPS(sip_id)
  .get(`/mf/sips/${mockId}`)
  .query({ sip_id: mockId })
  .reply(200, parseJson('mf_sip_info.json'))

  // getMFHoldings
  .get('/mf/holdings')
  .reply(200, parseJson('mf_holdings.json'))

  // getHistoricalData
  .get(`/instruments/historical/${mockId}/minute`)
  .query({
    instrument_token: mockId,
    interval: 'minute',
    from: '2022-06-01 09:15:00',
    to: '2022-06-01 15:30:00',
    continuous: 0,
    oi: 0,
  })
  .reply(200, parseJson('historical_minute.json'))

  // getQuote
  .get('/quote')
  .query({ i: 'NSE:INFY' })
  .reply(200, parseJson('quote.json'))

  // getLTP
  .get('/quote/ltp')
  .query({ i: 'NSE:INFY' })
  .reply(200, parseJson('ltp.json'))

  // getOHLC
  .get('/quote/ohlc')
  .query({ i: 'NSE:INFY' })
  .reply(200, parseJson('quote.json'))

  // placeGTT
  .post('/gtt/triggers')
  .reply(200, parseJson('gtt_place_order.json'))

  // modifyGTT
  .put(`/gtt/triggers/${mockId}`)
  .reply(200, parseJson('gtt_modify_order.json'))

  // deleteGTT
  .delete(`/gtt/triggers/${mockId}`)
  .query({ trigger_id: mockId })
  .reply(200, parseJson('gtt_delete_order.json'))

  // getGTTs
  .get('/gtt/triggers')
  .reply(200, parseJson('gtt_get_orders.json'))

  // getGTT(trigger_id)
  .get(`/gtt/triggers/${mockId}`)
  .query({ trigger_id: mockId })
  .reply(200, parseJson('gtt_get_order.json'))

  // orderMargins
  .post('/margins/orders')
  .reply(200, parseJson('order_margins.json'));

const kc = new KiteConnect({
  api_key: 'TEST_API_KEY',
  root: root,
});

describe('KiteConnect', () => {
  // fetch user profile detail
  it('getProfile', async (t) => {
    await t.test('fetch user profile detail', async () => {
      const response = await kc.getProfile();
      assert.ok(response.hasOwnProperty('user_id'));
      assert.ok(response.hasOwnProperty('user_name'));
    });
  });

  // fetch user fund detail
  it('getMargins', async (t) => {
    await t.test('fetch equity and commodity segment funds', async () => {
      const response = await kc.getMargins();
      assert.ok(response.hasOwnProperty('equity'));
      assert.ok(response.hasOwnProperty('commodity'));
    });
    await t.test('fetch equity specific segment funds', async () => {
      const response = await kc.getMargins('equity');
      assert.ok(response.hasOwnProperty('enabled'));
    });
  });

  // Order APIs
  // Place market and limit order
  it('placeOrder', async (t) => {
    await t.test('Place market order', async () => {
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
  });

  // modify open pending order
  it('modifyOrder', async (t) => {
    await t.test('Modify an open order', async () => {
      const response = await kc.modifyOrder(Variety.regular, mockId, {
        price: 10,
      });
      assert.ok(response.hasOwnProperty('order_id'));
    });
  });

  // cancel an open pending order
  it('cancelOrder', async (t) => {
    await t.test('cancel an open pending order', async () => {
      const response = await kc.cancelOrder(Variety.regular, mockId);
      assert.ok(response.hasOwnProperty('order_id'));
    });
  });

  // Retrieve complete orderbook
  it('getOrders', async (t) => {
    await t.test(
      'Retrieve the list of all orders under orderbook',
      async () => {
        const response = await kc.getOrders();
        assert.ok(Array.isArray(response));
        assert.ok(response[0]?.hasOwnProperty('order_id'));
        assert.ok(response[0]?.hasOwnProperty('status'));
        assert.ok(response[0]?.hasOwnProperty('tradingsymbol'));
      }
    );
  });

  // Retrieve the history of a given order
  it('getOrderHistory', async (t) => {
    await t.test('Retrieve the history of a given order', async () => {
      const response = await kc.getOrderHistory(mockId);
      assert.ok(response[0]?.hasOwnProperty('order_id'));
      assert.ok(response[0]?.hasOwnProperty('status'));
    });
  });

  // Retrieve the list of all executed trades
  it('getTrades', async (t) => {
    await t.test(
      'Retrieve the list of all executed trades for the day',
      async () => {
        const response = await kc.getTrades();
        assert.ok(Array.isArray(response));
        assert.ok(response[0]?.hasOwnProperty('order_id'));
        assert.ok(response[0]?.hasOwnProperty('exchange_timestamp'));
      }
    );
  });

  // Retrieve all the trades generated by an order
  it('getOrderTrades', async (t) => {
    await t.test('Retrieve all the trades generated by an order', async () => {
      const response = await kc.getOrderTrades(mockId);
      assert.ok(Array.isArray(response));
    });
  });

  // Portfolio APIs
  // Retrieve the list of equity holdings
  it('getHoldings', async (t) => {
    await t.test('Retrieve the list of equity holdings', async () => {
      const response = await kc.getHoldings();
      assert.ok(Array.isArray(response));
      assert.ok(response[0]?.hasOwnProperty('tradingsymbol'));
      assert.ok(response[0]?.hasOwnProperty('average_price'));
    });
  });

  // Retrieves list of available instruments for a auction session
  it('getAuctionInstruments', async (t) => {
    await t.test(
      'Retrieves list of available instruments for a auction session',
      async () => {
        const response = await kc.getAuctionInstruments();
        assert.ok(Array.isArray(response));
        assert.ok(response[0]?.hasOwnProperty('auction_number'));
        assert.ok(response[0]?.hasOwnProperty('instrument_token'));
        assert.ok(response[0]?.hasOwnProperty('tradingsymbol'));
      }
    );
  });

  // Retrieve the list of positions
  it('getPositions', async (t) => {
    await t.test('Retrieve the list of positions', async () => {
      const response = await kc.getPositions();
      assert.ok(response.hasOwnProperty('net'));
      assert.ok(response.hasOwnProperty('day'));
    });
  });

  // convert existing position
  it('convertPosition', async (t) => {
    await t.test('convert existing position', async () => {
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
  });

  // MF APIs
  // Place MF Order
  it('placeMFOrder', async (t) => {
    await t.test('Place MF order', async () => {
      const response = await kc.placeMFOrder({
        tradingsymbol: 'INF174K01LS2',
        transaction_type: TransactionType.BUY,
        amount: 1000,
      });
      assert.ok(response.hasOwnProperty('order_id'));
    });
  });

  // cancel an open pending MF order
  it('cancelMFOrder', async (t) => {
    await t.test('cancel an open pending MF order', async () => {
      const response = await kc.cancelMFOrder(mockId);
      assert.ok(response.hasOwnProperty('order_id'));
    });
  });

  // Retrieve the list of all MF orders (open and executed) over the last 7 days
  it('getMFOrders', async (t) => {
    await t.test(
      'Retrieve the list of all MF orders from orderbook',
      async () => {
        const response = await kc.getMFOrders();
        assert.ok(Array.isArray(response));
      }
    );
  });

  // Retrieve the detail of a given MF order
  it('getMFOrders', async (t) => {
    await t.test('Retrieve the detail of a given MF order', async () => {
      const response = await kc.getMFOrders(mockId);
      assert.ok(response.hasOwnProperty('order_timestamp'));
      assert.ok(response.hasOwnProperty('status'));
    });
  });

  // Place MF SIP Order
  it('placeMFSIP', async (t) => {
    await t.test('Place MF SIP Order', async () => {
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
  });

  // modify open pending MF SIP order
  it('modifyMFSIP', async (t) => {
    await t.test('modify open pending NF SIP order', async () => {
      const response = await kc.modifyMFSIP(mockId, {
        instalments: 12,
      });
      assert.ok(response.hasOwnProperty('sip_id'));
    });
  });

  // cancel an open pending MF SIP order
  it('cancelMFSIP', async (t) => {
    await t.test('cancel an open pending MF SIP order', async () => {
      const response = await kc.cancelMFSIP(mockId);
      assert.ok(response.hasOwnProperty('sip_id'));
    });
  });

  // Retrieve complete SIP orderbook
  it('getMFSIPS', async (t) => {
    await t.test('Retrieve complete SIP orderbook', async () => {
      const response = await kc.getMFSIPS();
      assert.ok(Array.isArray(response));
      assert.ok(response[0]?.hasOwnProperty('status'));
      assert.ok(response[0]?.hasOwnProperty('created'));
    });
  });

  // Retrieve the detail of a given SIP order
  it('getMFSIPS', async (t) => {
    await t.test('Retrieve the detail of a given SIP order', async () => {
      const response = await kc.getMFSIPS(mockId);
      assert.ok(response.hasOwnProperty('status'));
      assert.ok(response.hasOwnProperty('created'));
    });
  });

  // Retrieve complete MF holdings
  it('getMFHoldings', async (t) => {
    await t.test('Retrieve complete MF holdings', async () => {
      const response = await kc.getMFHoldings();
      assert.ok(Array.isArray(response));
      assert.ok(response[0]?.hasOwnProperty('folio'));
      assert.ok(response[0]?.hasOwnProperty('fund'));
    });
  });

  // Historical candle APIs
  it('getHistoricalData', async (t) => {
    // for intraday candle
    await t.test(
      'Fetch historical data for minute(intraday) candle',
      async () => {
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
      }
    );
  });

  // Market quotes and instruments
  // Retrieve full market quotes for instruments
  it('getQuote', async (t) => {
    await t.test('Retrieve full market quotes for instruments', async () => {
      const response = await kc.getQuote('NSE:INFY');
      assert.ok(response.hasOwnProperty('NSE:INFY'));
      assert.ok(response['NSE:INFY'].hasOwnProperty('last_price'));
      assert.ok(response['NSE:INFY'].hasOwnProperty('depth'));
      assert.ok(response['NSE:INFY'].hasOwnProperty('ohlc'));
    });
  });

  // Retrieve LTP quotes for instruments
  it('getLTP', async (t) => {
    await t.test('Retrieve LTP quotes for instruments', async () => {
      const response = await kc.getLTP('NSE:INFY');
      assert.ok(response.hasOwnProperty('NSE:INFY'));
      assert.ok(response['NSE:INFY'].hasOwnProperty('instrument_token'));
      assert.ok(response['NSE:INFY'].hasOwnProperty('last_price'));
    });
  });

  // Retrieve OHLC quotes for instruments
  it('getOHLC', async (t) => {
    await t.test('Retrieve OHLC quotes for instruments', async () => {
      const response = await kc.getOHLC('NSE:INFY');
      assert.ok(response.hasOwnProperty('NSE:INFY'));
      assert.ok(response['NSE:INFY'].hasOwnProperty('last_price'));
      assert.ok(response['NSE:INFY'].hasOwnProperty('ohlc'));
    });
  });

  // GTT APIs
  // Place a GTT
  it('placeGTT', async (t) => {
    await t.test('Place an GTT OCO order', async () => {
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
  });

  //Retrieve a list of all GTTs visible in GTT order book
  it('getGTTs', async (t) => {
    await t.test(
      'Fetch list of all GTTs visible in GTT order book',
      async () => {
        const response = await kc.getGTTs();
        assert.ok(Array.isArray(response));
        assert.ok(response[0]?.hasOwnProperty('id'));
        assert.ok(response[0]?.hasOwnProperty('created_at'));
        assert.ok(response[0]?.hasOwnProperty('user_id'));
        assert.ok(response[0]?.hasOwnProperty('status'));
      }
    );
  });

  // Retrieve an individual trigger
  it('getGTT', async (t) => {
    await t.test(
      'Fetch specific gtt order detail using trigger_id',
      async () => {
        const response = await kc.getGTT(mockId);
        assert.ok(response.hasOwnProperty('id'));
        assert.ok(response.hasOwnProperty('type'));
        assert.ok(response.hasOwnProperty('status'));
        assert.ok(response.hasOwnProperty('condition'));
      }
    );
  });

  // Modify an active GTT
  it('modifyGTT', async (t) => {
    await t.test('Modify an open GTT order using trigger_id', async () => {
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
  });

  // Delete an active GTT
  it('deleteGTT', async (t) => {
    await t.test('Delete a GTT using trigger_id', async () => {
      const response = await kc.deleteGTT(mockId);
      assert.ok(response.hasOwnProperty('trigger_id'));
    });
  });

  // Margin APIs
  // fetch order Margin detail
  it('orderMargins', async (t) => {
    await t.test('Fetch order margin detail', async () => {
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
});
