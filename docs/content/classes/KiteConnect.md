# Class: KiteConnect

API client class. In production, you may initialise a single instance of this class per `api_key`.
This module provides an easy to use abstraction over the HTTP APIs.
The HTTP calls have been converted to methods and their JSON responses.
See the **[Kite Connect API documentation](https://kite.trade/docs/connect/v3/)**
for the complete list of APIs, supported parameters and values, and response formats.

## Examples

Getting started
------------------------
```ts
import { KiteConnect } from "kiteconnect-ts";

const kc = new KiteConnect({
  api_key: 'YOUR_API_KEY',
});

// Get access token
try {
  const { access_token } = await kc.generateSession(
    'request_token',
    'YOUR_API_SECRET'
  );
  console.log('Access token:', access_token);
} catch (error) {
  console.error('Error while generating session', error);
  process.exit(1);
}

// Get equity margins
try {
  const margins = await kc.getMargins('equity');
  console.log('Equity margins', margins);
} catch (error) {
  console.error('Error while fetching equity margins', error);
}
```

API promises
-------------
All API calls returns a promise which you can use to call methods like `.then(...)` and `.catch(...)` or `await`.

```ts
kiteConnectApiCall()
	.then(function(v) {
	    // On success
	})
	.catch(function(e) {
		// On rejected
	});

try {
   const response = await kiteConnectAPiCall();
   // Do something with response
} catch(error) {
   // Handle error
}
```

## Constructors

### Constructor

> **new KiteConnect**(`params`): `KiteConnect`

#### Parameters

##### params

[`KiteConnectParams`](../interfaces/KiteConnectParams.md)

#### Returns

`KiteConnect`

## Properties

### EXCHANGE\_BCD

> `readonly` **EXCHANGE\_BCD**: `"BCD"` = `Exchange.BCD`

***

### EXCHANGE\_BFO

> `readonly` **EXCHANGE\_BFO**: `"BFO"` = `Exchange.BFO`

***

### EXCHANGE\_BSE

> `readonly` **EXCHANGE\_BSE**: `"BSE"` = `Exchange.BSE`

***

### EXCHANGE\_CDS

> `readonly` **EXCHANGE\_CDS**: `"CDS"` = `Exchange.CDS`

***

### EXCHANGE\_MCX

> `readonly` **EXCHANGE\_MCX**: `"MCX"` = `Exchange.MCX`

***

### EXCHANGE\_NFO

> `readonly` **EXCHANGE\_NFO**: `"NFO"` = `Exchange.NFO`

***

### EXCHANGE\_NSE

> `readonly` **EXCHANGE\_NSE**: `"NSE"` = `Exchange.NSE`

***

### GTT\_STATUS\_ACTIVE

> `readonly` **GTT\_STATUS\_ACTIVE**: `"active"` = `'active'`

***

### GTT\_STATUS\_CANCELLED

> `readonly` **GTT\_STATUS\_CANCELLED**: `"cancelled"` = `'cancelled'`

***

### GTT\_STATUS\_DELETED

> `readonly` **GTT\_STATUS\_DELETED**: `"deleted"` = `'deleted'`

***

### GTT\_STATUS\_DISABLED

> `readonly` **GTT\_STATUS\_DISABLED**: `"disabled"` = `'disabled'`

***

### GTT\_STATUS\_EXPIRED

> `readonly` **GTT\_STATUS\_EXPIRED**: `"expired"` = `'expired'`

***

### GTT\_STATUS\_REJECTED

> `readonly` **GTT\_STATUS\_REJECTED**: `"rejected"` = `'rejected'`

***

### GTT\_STATUS\_TRIGGERED

> `readonly` **GTT\_STATUS\_TRIGGERED**: `"triggered"` = `'triggered'`

***

### GTT\_TYPE\_OCO

> `readonly` **GTT\_TYPE\_OCO**: `"two-leg"`

***

### GTT\_TYPE\_SINGLE

> `readonly` **GTT\_TYPE\_SINGLE**: `"single"` = `TriggerType.single`

***

### MARGIN\_COMMODITY

> `readonly` **MARGIN\_COMMODITY**: `"commodity"` = `'commodity'`

***

### MARGIN\_EQUITY

> `readonly` **MARGIN\_EQUITY**: `"equity"` = `'equity'`

***

### ORDER\_TYPE\_LIMIT

> `readonly` **ORDER\_TYPE\_LIMIT**: `"LIMIT"` = `OrderType.LIMIT`

***

### ORDER\_TYPE\_MARKET

> `readonly` **ORDER\_TYPE\_MARKET**: `"MARKET"` = `OrderType.MARKET`

***

### ORDER\_TYPE\_SL

> `readonly` **ORDER\_TYPE\_SL**: `"SL"` = `OrderType.SL`

***

### ORDER\_TYPE\_SLM

> `readonly` **ORDER\_TYPE\_SLM**: `"SL-M"`

***

### POSITION\_TYPE\_DAY

> `readonly` **POSITION\_TYPE\_DAY**: `"day"` = `'day'`

***

### POSITION\_TYPE\_OVERNIGHT

> `readonly` **POSITION\_TYPE\_OVERNIGHT**: `"overnight"` = `'overnight'`

***

### PRODUCT\_BO

> `readonly` **PRODUCT\_BO**: `"BO"` = `ProductType.BO`

***

### PRODUCT\_CNC

> `readonly` **PRODUCT\_CNC**: `"CNC"` = `ProductType.CNC`

***

### PRODUCT\_CO

> `readonly` **PRODUCT\_CO**: `"CO"` = `ProductType.CO`

***

### PRODUCT\_MIS

> `readonly` **PRODUCT\_MIS**: `"MIS"` = `ProductType.MIS`

***

### PRODUCT\_NRML

> `readonly` **PRODUCT\_NRML**: `"NRML"` = `ProductType.NRML`

***

### STATUS\_CANCELLED

> `readonly` **STATUS\_CANCELLED**: `"CANCELLED"` = `'CANCELLED'`

***

### STATUS\_COMPLETE

> `readonly` **STATUS\_COMPLETE**: `"COMPLETE"` = `'COMPLETE'`

***

### STATUS\_REJECTED

> `readonly` **STATUS\_REJECTED**: `"REJECTED"` = `'REJECTED'`

***

### TRANSACTION\_TYPE\_BUY

> `readonly` **TRANSACTION\_TYPE\_BUY**: `"BUY"` = `TransactionType.BUY`

***

### TRANSACTION\_TYPE\_SELL

> `readonly` **TRANSACTION\_TYPE\_SELL**: `"SELL"` = `TransactionType.SELL`

***

### VALIDITY\_DAY

> `readonly` **VALIDITY\_DAY**: `"DAY"` = `Validity.DAY`

***

### VALIDITY\_IOC

> `readonly` **VALIDITY\_IOC**: `"IOC"` = `Validity.IOC`

***

### VALIDITY\_TTL

> `readonly` **VALIDITY\_TTL**: `"TTL"` = `Validity.TTL`

***

### VARIETY\_AMO

> `readonly` **VARIETY\_AMO**: `"amo"` = `Variety.amo`

***

### VARIETY\_AUCTION

> `readonly` **VARIETY\_AUCTION**: `"auction"` = `Variety.auction`

***

### VARIETY\_BO

> `readonly` **VARIETY\_BO**: `"bo"` = `Variety.bo`

***

### VARIETY\_CO

> `readonly` **VARIETY\_CO**: `"co"` = `Variety.co`

***

### VARIETY\_ICEBERG

> `readonly` **VARIETY\_ICEBERG**: `"iceberg"` = `Variety.iceberg`

***

### VARIETY\_REGULAR

> `readonly` **VARIETY\_REGULAR**: `"regular"` = `Variety.regular`

## Methods

### cancelMFOrder()

> **cancelMFOrder**(`order_id`): `Promise`\<\{ `order_id`: `string`; \}\>

Cancel a mutual fund order.

#### Parameters

##### order\_id

`string`

ID of the order.

#### Returns

`Promise`\<\{ `order_id`: `string`; \}\>

***

### cancelMFSIP()

> **cancelMFSIP**(`sip_id`): `Promise`\<\{ `sip_id`: `string`; \}\>

Cancel a mutual fund SIP.

#### Parameters

##### sip\_id

`string`

ID of the SIP.

#### Returns

`Promise`\<\{ `sip_id`: `string`; \}\>

***

### cancelOrder()

> **cancelOrder**(`variety`, `order_id`, `params?`): `Promise`\<\{ `order_id`: `string`; \}\>

Cancel an order

#### Parameters

##### variety

`"amo"` \| `"auction"` \| `"bo"` \| `"co"` \| `"iceberg"` \| `"regular"`

Order variety (ex. bo, co, amo)

##### order\_id

`string`

ID of the order.

##### params?

Order params. regular).

###### parent_order_id?

`string`

Parent order id incase of multilegged orders.

#### Returns

`Promise`\<\{ `order_id`: `string`; \}\>

***

### convertPosition()

> **convertPosition**(`params`): `Promise`\<`boolean`\>

Modify an open position's product type.

#### Parameters

##### params

[`ConvertPositionParams`](../interfaces/ConvertPositionParams.md)

params.

#### Returns

`Promise`\<`boolean`\>

***

### deleteGTT()

> **deleteGTT**(`trigger_id`): `Promise`\<\{ `trigger_id`: `number`; \}\>

Get list of order history.

#### Parameters

##### trigger\_id

`string`

GTT ID

#### Returns

`Promise`\<\{ `trigger_id`: `number`; \}\>

***

### exitOrder()

> **exitOrder**(`variety`, `order_id`, `params?`): `Promise`\<\{ `order_id`: `string`; \}\>

Exit an order

#### Parameters

##### variety

`"amo"` \| `"auction"` \| `"bo"` \| `"co"` \| `"iceberg"` \| `"regular"`

Order variety (ex. bo, co, amo)

##### order\_id

`string`

ID of the order.

##### params?

Order params.

###### parent_order_id?

`string`

Parent order id incase of multilegged orders.

#### Returns

`Promise`\<\{ `order_id`: `string`; \}\>

***

### generateSession()

> **generateSession**(`request_token`, `api_secret`): `Promise`\<[`SessionData`](../interfaces/SessionData.md)\>

Do the token exchange with the `request_token` obtained after the login flow,
and retrieve the `access_token` required for all subsequent requests. The response
contains not just the `access_token`, but metadata for the user who has authenticated.

#### Parameters

##### request\_token

`string`

Token obtained from the GET parameters after a successful login redirect.

##### api\_secret

`string`

API secret issued with the API key.

#### Returns

`Promise`\<[`SessionData`](../interfaces/SessionData.md)\>

***

### getAuctionInstruments()

> **getAuctionInstruments**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

***

### getGTT()

> **getGTT**(`trigger_id`): `Promise`\<[`Trigger`](../interfaces/Trigger.md)\>

Get list of order history.

#### Parameters

##### trigger\_id

`string`

GTT trigger ID

#### Returns

`Promise`\<[`Trigger`](../interfaces/Trigger.md)\>

***

### getGTTs()

> **getGTTs**(): `Promise`\<[`Trigger`](../interfaces/Trigger.md)[]\>

Get GTTs list

#### Returns

`Promise`\<[`Trigger`](../interfaces/Trigger.md)[]\>

***

### getHistoricalData()

> **getHistoricalData**(`instrument_token`, `interval`, `from_date`, `to_date`, `continuous?`, `oi?`): `Promise`\<`object`[]\>

Retrieve historical data (candles) for an instrument.
Although the actual response JSON from the API does not have field
names such has 'open', 'high' etc., this functin call structures
the data into an array of objects with field names.

#### Parameters

##### instrument\_token

`string`

Instrument identifier (retrieved from the instruments()) call.

##### interval

`"day"` \| `"minute"` \| `"3minute"` \| `"5minute"` \| `"10minute"` \| `"15minute"` \| `"30minute"` \| `"60minute"`

candle interval (minute, day, 5 minute etc.)

##### from\_date

`string` \| `Date`

From date (String in format of 'yyyy-mm-dd HH:MM:SS' or Date object).

##### to\_date

`string` \| `Date`

To date (String in format of 'yyyy-mm-dd HH:MM:SS' or Date object).

##### continuous?

`boolean`

is a bool flag to get continuous data for futures and options instruments. Defaults to false.

##### oi?

`boolean`

is a bool flag to include OI data for futures and options instruments. Defaults to false.

#### Returns

`Promise`\<`object`[]\>

#### Example

```
[{
	date: '2015-02-10T00:00:00+0530',
	open: 277.5,
	high: 290.8,
	low: 275.7,
	close: 287.3,
	volume: 22589681
}, ....]
```

***

### getHoldings()

> **getHoldings**(): `Promise`\<[`PortfolioHolding`](../interfaces/PortfolioHolding.md)[]\>

Retrieve the list of equity holdings.

#### Returns

`Promise`\<[`PortfolioHolding`](../interfaces/PortfolioHolding.md)[]\>

***

### getInstruments()

> **getInstruments**(`exchange?`): `Promise`\<[`Instrument`](../interfaces/Instrument.md)[]\>

Retrieve the list of market instruments available to trade.
Note that the results could be large, several hundred KBs in size,
with tens of thousands of entries in the list.
Response is array for objects.

#### Parameters

##### exchange?

(`"NSE"` \| `"BSE"` \| `"NFO"` \| `"CDS"` \| `"BCD"` \| `"BFO"` \| `"MCX"`)[]

Filter instruments based on exchange (NSE, BSE, NFO, BFO, CDS, MCX). If no `segment` is specified, all instruments are returned.

#### Returns

`Promise`\<[`Instrument`](../interfaces/Instrument.md)[]\>

#### Example

```
	{
		instrument_token: '131098372',
		exchange_token: '512103',
		tradingsymbol: 'NIDHGRN',
		name: 'NIDHI GRANITES',
		last_price: '0.0',
		expiry: '',
		strike: '0.0',
		tick_size: '0.05',
		lot_size: '1',
		instrument_type: 'EQ',
		segment: 'BSE',
		exchange: 'BSE' }, ...]
```

***

### getLoginURL()

> **getLoginURL**(): `string`

Get the remote login url to which a user should be redirected to initiate the login flow.

#### Returns

`string`

***

### getLTP()

> **getLTP**(`instruments`): `Promise`\<`Record`\<`string`, \{ `instrument_token`: `number`; `last_price`: `number`; \}\>\>

Retrieve LTP for list of instruments.

#### Parameters

##### instruments

`string` \| `string`[]

is a single instrument or a list of instruments, Instrument are in the format of `exchange:tradingsymbol`.
For example NSE:INFY and for list of instruments ["NSE:RELIANCE", "NSE:SBIN", ..]

#### Returns

`Promise`\<`Record`\<`string`, \{ `instrument_token`: `number`; `last_price`: `number`; \}\>\>

***

### getMargins()

#### Call Signature

> **getMargins**(): `Promise`\<[`UserMargins`](../interfaces/UserMargins.md)\>

Get account balance and cash margin details for all segments.

##### Returns

`Promise`\<[`UserMargins`](../interfaces/UserMargins.md)\>

#### Call Signature

> **getMargins**(`segment`): `Promise`\<[`UserMargin`](../interfaces/UserMargin.md)\>

Get account balance and cash margin details for a particular segment.

##### Parameters

###### segment

`"equity"` \| `"commodity"`

trading segment (eg: equity or commodity).

##### Returns

`Promise`\<[`UserMargin`](../interfaces/UserMargin.md)\>

***

### getMFHoldings()

> **getMFHoldings**(): `Promise`\<[`MFHolding`](../interfaces/MFHolding.md)[]\>

Get list of mutual fund holdings.

#### Returns

`Promise`\<[`MFHolding`](../interfaces/MFHolding.md)[]\>

***

### getMFInstruments()

> **getMFInstruments**(): `Promise`\<[`MFInstrument`](../interfaces/MFInstrument.md)[]\>

Get list of mutual fund instruments.

#### Returns

`Promise`\<[`MFInstrument`](../interfaces/MFInstrument.md)[]\>

***

### getMFOrders()

> **getMFOrders**(`order_id?`): `Promise`\<[`MFOrder`](../interfaces/MFOrder.md) \| [`MFOrder`](../interfaces/MFOrder.md)[]\>

Get list of mutual fund orders.

#### Parameters

##### order\_id?

`string`

ID of the order (optional) whose order details are to be retrieved.
If no `order_id` is specified, all orders for the day are returned.

#### Returns

`Promise`\<[`MFOrder`](../interfaces/MFOrder.md) \| [`MFOrder`](../interfaces/MFOrder.md)[]\>

***

### getMFSIPS()

> **getMFSIPS**(`sip_id?`): `Promise`\<[`MFSIP`](../interfaces/MFSIP.md) \| [`MFSIP`](../interfaces/MFSIP.md)[]\>

Get list of mutual fund SIPS.
If no `sip_id` is specified, all active and paused SIPs are returned.

#### Parameters

##### sip\_id?

`string`

ID of the SIP (optional) whose details are to be retrieved.

#### Returns

`Promise`\<[`MFSIP`](../interfaces/MFSIP.md) \| [`MFSIP`](../interfaces/MFSIP.md)[]\>

***

### getOHLC()

> **getOHLC**(`instruments`): `Promise`\<`Record`\<`string`, \{ `instrument_token`: `number`; `last_price`: `number`; `ohlc`: \{ `close`: `number`; `high`: `number`; `low`: `number`; `open`: `number`; \}; \}\>\>

Retrieve OHLC for list of instruments.

#### Parameters

##### instruments

`string` \| `string`[]

is a single instrument or a list of instruments, Instrument are in the format of `exchange:tradingsymbol`.
For example NSE:INFY and for list of instruments ["NSE:RELIANCE", "NSE:SBIN", ..]

#### Returns

`Promise`\<`Record`\<`string`, \{ `instrument_token`: `number`; `last_price`: `number`; `ohlc`: \{ `close`: `number`; `high`: `number`; `low`: `number`; `open`: `number`; \}; \}\>\>

***

### getOrderHistory()

> **getOrderHistory**(`order_id`): `Promise`\<[`Order`](../interfaces/Order.md)[]\>

Get list of order history.

#### Parameters

##### order\_id

`string`

ID of the order whose order details to be retrieved.

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)[]\>

***

### getOrders()

> **getOrders**(): `Promise`\<[`Order`](../interfaces/Order.md)[]\>

Get list of orders.

#### Returns

`Promise`\<[`Order`](../interfaces/Order.md)[]\>

***

### getOrderTrades()

> **getOrderTrades**(`order_id`): `Promise`\<[`Trade`](../interfaces/Trade.md)[]\>

Retrieve the list of trades a particular order).
An order can be executed in tranches based on market conditions.
These trades are individually recorded under an order.

#### Parameters

##### order\_id

`string`

ID of the order whose trades are to be retrieved.

#### Returns

`Promise`\<[`Trade`](../interfaces/Trade.md)[]\>

***

### getPositions()

> **getPositions**(): `Promise`\<\{ `day`: [`Position`](../interfaces/Position.md)[]; `net`: [`Position`](../interfaces/Position.md)[]; \}\>

Retrieve positions.

#### Returns

`Promise`\<\{ `day`: [`Position`](../interfaces/Position.md)[]; `net`: [`Position`](../interfaces/Position.md)[]; \}\>

***

### getProfile()

> **getProfile**(): `Promise`\<[`UserProfile`](../interfaces/UserProfile.md)\>

Get user profile details.

#### Returns

`Promise`\<[`UserProfile`](../interfaces/UserProfile.md)\>

***

### getQuote()

> **getQuote**(`instruments`): `Promise`\<`Record`\<`string`, [`Quote`](../interfaces/Quote.md)\>\>

Retrieve quote and market depth for list of instruments.

#### Parameters

##### instruments

`string` \| `string`[]

is a single instrument or a list of instruments, Instrument are in the format of `exchange:tradingsymbol`.
For example NSE:INFY and for list of instruments ["NSE:RELIANCE", "NSE:SBIN", ..]

#### Returns

`Promise`\<`Record`\<`string`, [`Quote`](../interfaces/Quote.md)\>\>

***

### getTrades()

> **getTrades**(): `Promise`\<[`Trade`](../interfaces/Trade.md)[]\>

Retrieve the list of trades executed.

#### Returns

`Promise`\<[`Trade`](../interfaces/Trade.md)[]\>

***

### invalidateAccessToken()

> **invalidateAccessToken**(`access_token?`): `Promise`\<`boolean`\>

Kill the session by invalidating the access token.
If access_token is passed then it will be set as current access token and get in validated.

#### Parameters

##### access\_token?

`string`

Token to invalidate. Default is the active `access_token`.

#### Returns

`Promise`\<`boolean`\>

***

### invalidateRefreshToken()

> **invalidateRefreshToken**(`refresh_token`): `Promise`\<`boolean`\>

Invalidate the refresh token.

#### Parameters

##### refresh\_token

`string`

Token to invalidate.

#### Returns

`Promise`\<`boolean`\>

***

### modifyGTT()

> **modifyGTT**(`trigger_id`, `params`): `Promise`\<\{ `trigger_id`: `number`; \}\>

Modify GTT.

#### Parameters

##### trigger\_id

`string`

GTT trigger ID.

##### params

[`GTTParams`](../interfaces/GTTParams.md)

Modify params

#### Returns

`Promise`\<\{ `trigger_id`: `number`; \}\>

***

### modifyMFSIP()

> **modifyMFSIP**(`sip_id`, `params`): `Promise`\<\{ `sip_id`: `number`; \}\>

Modify a mutual fund SIP.

#### Parameters

##### sip\_id

`string`

ID of the SIP.

##### params

Modify params.

###### frequency?

`"weekly"` \| `"monthly"` \| `"quarterly"`

Order frequency. weekly, monthly, or quarterly.

###### instalment_day?

`string`

If frequency is monthly, the day of the month (1, 5, 10, 15, 20, 25) to trigger the order on.

###### instalments?

`number`

Number of instalments to trigger.
If set to -1, instalments are triggered at fixed intervals until the SIP is cancelled

###### status?

`"active"` \| `"paused"`

Pause or unpause an SIP (active or paused).

#### Returns

`Promise`\<\{ `sip_id`: `number`; \}\>

***

### modifyOrder()

> **modifyOrder**(`variety`, `order_id`, `params`): `Promise`\<\{ `order_id`: `string`; \}\>

Modify an order

#### Parameters

##### variety

`"amo"` \| `"auction"` \| `"bo"` \| `"co"` \| `"iceberg"` \| `"regular"`

Order variety (ex. bo, co, amo, regular).

##### order\_id

`string`

ID of the order.

##### params

[`ModifyOrderParams`](../interfaces/ModifyOrderParams.md)

Order modify params.

#### Returns

`Promise`\<\{ `order_id`: `string`; \}\>

***

### orderBasketMargins()

#### Call Signature

> **orderBasketMargins**(`orders`): `Promise`\<\{ `final`: [`Margin`](../interfaces/Margin.md); `initial`: [`Margin`](../interfaces/Margin.md); `orders`: [`Margin`](../interfaces/Margin.md)[]; \}\>

Fetch basket margin for list of orders

##### Parameters

###### orders

[`MarginOrder`](../interfaces/MarginOrder.md)[]

Margin fetch orders.

##### Returns

`Promise`\<\{ `final`: [`Margin`](../interfaces/Margin.md); `initial`: [`Margin`](../interfaces/Margin.md); `orders`: [`Margin`](../interfaces/Margin.md)[]; \}\>

#### Call Signature

> **orderBasketMargins**(`orders`, `consider_positions`): `Promise`\<\{ `final`: [`Margin`](../interfaces/Margin.md); `initial`: [`Margin`](../interfaces/Margin.md); `orders`: [`Margin`](../interfaces/Margin.md)[]; \}\>

Fetch basket margin for list of orders

##### Parameters

###### orders

[`MarginOrder`](../interfaces/MarginOrder.md)[]

Margin fetch orders.

###### consider\_positions

`boolean`

Boolean to consider users positions while calculating margins. Defauls to true

##### Returns

`Promise`\<\{ `final`: [`Margin`](../interfaces/Margin.md); `initial`: [`Margin`](../interfaces/Margin.md); `orders`: [`Margin`](../interfaces/Margin.md)[]; \}\>

#### Call Signature

> **orderBasketMargins**(`orders`, `consider_positions`, `mode`): `Promise`\<\{ `final`: [`CompactMargin`](../interfaces/CompactMargin.md); `initial`: [`CompactMargin`](../interfaces/CompactMargin.md); `orders`: [`CompactMargin`](../interfaces/CompactMargin.md)[]; \}\>

Fetch basket margin for list of orders

##### Parameters

###### orders

[`MarginOrder`](../interfaces/MarginOrder.md)[]

Margin fetch orders.

###### consider\_positions

`boolean`

Boolean to consider users positions while calculating margins. Defauls to true

###### mode

`"compact"`

(optional) Compact mode will only give the total margins

##### Returns

`Promise`\<\{ `final`: [`CompactMargin`](../interfaces/CompactMargin.md); `initial`: [`CompactMargin`](../interfaces/CompactMargin.md); `orders`: [`CompactMargin`](../interfaces/CompactMargin.md)[]; \}\>

***

### orderMargins()

#### Call Signature

> **orderMargins**(`orders`): `Promise`\<[`Margin`](../interfaces/Margin.md)[]\>

Fetch required margin for order/list of orders

##### Parameters

###### orders

[`MarginOrder`](../interfaces/MarginOrder.md)[]

Margin fetch orders.

##### Returns

`Promise`\<[`Margin`](../interfaces/Margin.md)[]\>

#### Call Signature

> **orderMargins**(`orders`, `mode`): `Promise`\<[`CompactMargin`](../interfaces/CompactMargin.md)[]\>

Fetch required margin for order/list of orders

##### Parameters

###### orders

[`MarginOrder`](../interfaces/MarginOrder.md)[]

Margin fetch orders.

###### mode

`"compact"`

(optional) Compact mode will only give the total margins

##### Returns

`Promise`\<[`CompactMargin`](../interfaces/CompactMargin.md)[]\>

***

### placeGTT()

> **placeGTT**(`params`): `Promise`\<\{ `trigger_id`: `number`; \}\>

Place GTT.

#### Parameters

##### params

[`GTTParams`](../interfaces/GTTParams.md)

Place GTT params

#### Returns

`Promise`\<\{ `trigger_id`: `number`; \}\>

***

### placeMFOrder()

> **placeMFOrder**(`params`): `Promise`\<\{ `order_id`: `number`; \}\>

Place a mutual fund order.

#### Parameters

##### params

MF Order params.

###### amount?

`number`

Amount worth of units to purchase. Not applicable on SELLs

###### quantity?

`number`

Quantity to SELL. Not applicable on BUYs.

###### tag?

`string`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

###### tradingsymbol

`string`

Tradingsymbol (ISIN) of the fund.

###### transaction_type

`"BUY"` \| `"SELL"`

Transaction type (BUY or SELL).

#### Returns

`Promise`\<\{ `order_id`: `number`; \}\>

***

### placeMFSIP()

> **placeMFSIP**(`params`): `Promise`\<\{ `sip_id`: `number`; \}\>

Place a mutual fund SIP.

#### Parameters

##### params

SIP params.

###### amount

`number`

Amount worth of units to purchase.

###### frequency

`"weekly"` \| `"monthly"` \| `"quarterly"`

Order frequency. weekly, monthly, or quarterly.

###### initial_amount?

`number`

Amount worth of units to purchase before the SIP starts.

###### instalment_day?

`string`

If frequency is monthly, the day of the month (1, 5, 10, 15, 20, 25) to trigger the order on.

###### instalments

`number`

Number of instalments to trigger.
If set to -1, instalments are triggered at fixed intervals until the SIP is cancelled

###### tag?

`string`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

###### tradingsymbol

`string`

Tradingsymbol (ISIN) of the fund.

#### Returns

`Promise`\<\{ `sip_id`: `number`; \}\>

***

### placeOrder()

> **placeOrder**(`variety`, `params`): `Promise`\<[`AutosliceOrderResponse`](../type-aliases/AutosliceOrderResponse.md)\>

Place an order.

When `params.autoslice` is `true`, the backend may split the order into
multiple child slices. In that case, the resolved response includes a
`children` array, where each entry either carries an `order_id` or an
`error` payload.

#### Parameters

##### variety

`"amo"` \| `"auction"` \| `"bo"` \| `"co"` \| `"iceberg"` \| `"regular"`

Order variety (ex. bo, co, amo, regular).

##### params

[`PlaceOrderParams`](../interfaces/PlaceOrderParams.md)

Order params. Set `autoslice: true` to allow automatic order slicing.

#### Returns

`Promise`\<[`AutosliceOrderResponse`](../type-aliases/AutosliceOrderResponse.md)\>

***

### renewAccessToken()

> **renewAccessToken**(`refresh_token`, `api_secret`): `Promise`\<[`SessionData`](../interfaces/SessionData.md)\>

Renew access token by active refresh token. Renewed access token is implicitly set.

#### Parameters

##### refresh\_token

`string`

Token obtained from previous successful login.

##### api\_secret

`string`

API secret issued with the API key.

#### Returns

`Promise`\<[`SessionData`](../interfaces/SessionData.md)\>

***

### setAccessToken()

> **setAccessToken**(`access_token`): `void`

Set access_token received after a successful authentication.

#### Parameters

##### access\_token

`string`

Token obtained in exchange for `request_token`.
Once you have obtained `access_token`, you should persist it in a database or session to pass
to the Kite Connect class initialisation for subsequent requests.

#### Returns

`void`

***

### setSessionExpiryHook()

> **setSessionExpiryHook**(`cb`): `void`

Set a callback hook for session (`TokenException` -- timeout, expiry etc.) errors.
`access_token` (login session) can become invalid for a number of
reasons, but it doesn't make sense for the client to try and catch it during every API call.

A callback method that handles session errors can be set here and when the client encounters
a token error at any point, it'll be called.

This callback, for instance, can log the user out of the UI,
clear session cookies, or initiate a fresh login.

#### Parameters

##### cb

`Function`

Callback

#### Returns

`void`

***

### validatePostback()

> **validatePostback**(`postback_data`, `api_secret`): `boolean`

Validate postback data checksum

#### Parameters

##### postback\_data

Postback data received. Must be an json object with required keys order_id, checksum and order_timestamp

###### checksum

`string`

###### order_id

`string`

###### order_timestamp

`string`

##### api\_secret

`string`

Api secret of the app

#### Returns

`boolean`
