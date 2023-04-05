# Class: KiteConnect

API client class. In production, you may initialise a single instance of this class per `api_key`.
This module provides an easy to use abstraction over the HTTP APIs.
The HTTP calls have been converted to methods and their JSON responses.
See the **[Kite Connect API documentation](https://kite.trade/docs/connect/v3/)**
for the complete list of APIs, supported parameters and values, and response formats.

**`Example`**

Getting started with API
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
  console.log('Equity margins', margins.equity);
} catch (error) {
  console.error('Error while fetching equity margins', error);
}
```

**`Example`**

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

### constructor

**new KiteConnect**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`KiteConnectParams`](../interfaces/KiteConnectParams.md) |

## Methods

### cancelMFOrder

**cancelMFOrder**(`order_id`): `Promise`<{ `order_id`: `string`  }\>

Cancel a mutual fund order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order_id` | `string` | ID of the order. |

#### Returns

`Promise`<{ `order_id`: `string`  }\>

___

### cancelMFSIP

**cancelMFSIP**(`sip_id`): `Promise`<{ `sip_id`: `string`  }\>

Cancel a mutual fund SIP.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sip_id` | `string` | ID of the SIP. |

#### Returns

`Promise`<{ `sip_id`: `string`  }\>

___

### cancelOrder

**cancelOrder**(`variety`, `order_id`, `params?`): `Promise`<{ `order_id`: `string`  }\>

Cancel an order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variety` | [`Variety`](../modules.md#variety) | Order variety (ex. bo, co, amo) |
| `order_id` | `string` | ID of the order. |
| `params?` | `Object` | Order params. regular). |
| `params.parent_order_id?` | `string` | Parent order id incase of multilegged orders. |

#### Returns

`Promise`<{ `order_id`: `string`  }\>

___

### convertPosition

**convertPosition**(`params`): `Promise`<`boolean`\>

Modify an open position's product type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ConvertPositionParams`](../interfaces/ConvertPositionParams.md) | params. |

#### Returns

`Promise`<`boolean`\>

___

### deleteGTT

**deleteGTT**(`trigger_id`): `Promise`<{ `trigger_id`: `number`  }\>

Get list of order history.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trigger_id` | `string` | GTT ID |

#### Returns

`Promise`<{ `trigger_id`: `number`  }\>

___

### exitOrder

**exitOrder**(`variety`, `order_id`, `params?`): `Promise`<{ `order_id`: `string`  }\>

Exit an order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variety` | [`Variety`](../modules.md#variety) | Order variety (ex. bo, co, amo) |
| `order_id` | `string` | ID of the order. |
| `params?` | `Object` | Order params. |
| `params.parent_order_id?` | `string` | Parent order id incase of multilegged orders. |

#### Returns

`Promise`<{ `order_id`: `string`  }\>

___

### generateSession

**generateSession**(`request_token`, `api_secret`): `Promise`<[`SessionData`](../interfaces/SessionData.md)\>

Do the token exchange with the `request_token` obtained after the login flow,
and retrieve the `access_token` required for all subsequent requests. The response
contains not just the `access_token`, but metadata for the user who has authenticated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request_token` | `string` | Token obtained from the GET parameters after a successful login redirect. |
| `api_secret` | `string` | API secret issued with the API key. |

#### Returns

`Promise`<[`SessionData`](../interfaces/SessionData.md)\>

___

### getAuctionInstruments

**getAuctionInstruments**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### getGTT

**getGTT**(`trigger_id`): `Promise`<[`Trigger`](../interfaces/Trigger.md)\>

Get list of order history.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trigger_id` | `string` | GTT trigger ID |

#### Returns

`Promise`<[`Trigger`](../interfaces/Trigger.md)\>

___

### getGTTs

**getGTTs**(): `Promise`<[`Trigger`](../interfaces/Trigger.md)[]\>

Get GTTs list

#### Returns

`Promise`<[`Trigger`](../interfaces/Trigger.md)[]\>

___

### getHistoricalData

**getHistoricalData**(`instrument_token`, `interval`, `from_date`, `to_date`, `continuous?`, `oi?`): `Promise`<{ `close`: `number` ; `date`: `Date` ; `high`: `number` ; `low`: `number` ; `oi?`: `number` ; `open`: `number` ; `volume`: `number`  }\>

Retrieve historical data (candles) for an instrument.
Although the actual response JSON from the API does not have field
names such has 'open', 'high' etc., this functin call structures
the data into an array of objects with field names.

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instrument_token` | `string` | Instrument identifier (retrieved from the instruments()) call. |
| `interval` | ``"day"`` \| ``"minute"`` \| ``"3minute"`` \| ``"5minute"`` \| ``"10minute"`` \| ``"15minute"`` \| ``"30minute"`` \| ``"60minute"`` | candle interval (minute, day, 5 minute etc.) |
| `from_date` | `string` \| `Date` | From date (String in format of 'yyyy-mm-dd HH:MM:SS' or Date object). |
| `to_date` | `string` \| `Date` | To date (String in format of 'yyyy-mm-dd HH:MM:SS' or Date object). |
| `continuous?` | `boolean` | is a bool flag to get continuous data for futures and options instruments. Defaults to false. |
| `oi?` | `boolean` | is a bool flag to include OI data for futures and options instruments. Defaults to false. |

#### Returns

`Promise`<{ `close`: `number` ; `date`: `Date` ; `high`: `number` ; `low`: `number` ; `oi?`: `number` ; `open`: `number` ; `volume`: `number`  }\>

___

### getHoldings

**getHoldings**(): `Promise`<[`PortfolioHolding`](../interfaces/PortfolioHolding.md)[]\>

Retrieve the list of equity holdings.

#### Returns

`Promise`<[`PortfolioHolding`](../interfaces/PortfolioHolding.md)[]\>

___

### getInstruments

**getInstruments**(`exchange?`): `Promise`<[`Instrument`](../interfaces/Instrument.md)[]\>

Retrieve the list of market instruments available to trade.
Note that the results could be large, several hundred KBs in size,
with tens of thousands of entries in the list.
Response is array for objects.

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exchange?` | [`Exchange`](../modules.md#exchange)[] | Filter instruments based on exchange (NSE, BSE, NFO, BFO, CDS, MCX). If no `segment` is specified, all instruments are returned. |

#### Returns

`Promise`<[`Instrument`](../interfaces/Instrument.md)[]\>

___

### getLTP

**getLTP**(`instruments`): `Promise`<`Record`<`string`, { `instrument_token`: `number` ; `last_price`: `number`  }\>\>

Retrieve LTP for list of instruments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instruments` | `string`[] | is a list of instruments, Instrument are in the format of `exchange:tradingsymbol`. For example NSE:INFY and for list of instruments ["NSE:RELIANCE", "NSE:SBIN", ..] |

#### Returns

`Promise`<`Record`<`string`, { `instrument_token`: `number` ; `last_price`: `number`  }\>\>

___

### getLoginURL

**getLoginURL**(): `string`

Get the remote login url to which a user should be redirected to initiate the login flow.

#### Returns

`string`

___

### getMFHoldings

**getMFHoldings**(): `Promise`<[`MFHolding`](../interfaces/MFHolding.md)[]\>

Get list of mutual fund holdings.

#### Returns

`Promise`<[`MFHolding`](../interfaces/MFHolding.md)[]\>

___

### getMFInstruments

**getMFInstruments**(): `Promise`<[`MFInstrument`](../interfaces/MFInstrument.md)[]\>

Get list of mutual fund instruments.

#### Returns

`Promise`<[`MFInstrument`](../interfaces/MFInstrument.md)[]\>

___

### getMFOrders

**getMFOrders**(`order_id?`): `Promise`<[`MFOrder`](../interfaces/MFOrder.md) \| [`MFOrder`](../interfaces/MFOrder.md)[]\>

Get list of mutual fund orders.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order_id?` | `string` | ID of the order (optional) whose order details are to be retrieved. If no `order_id` is specified, all orders for the day are returned. |

#### Returns

`Promise`<[`MFOrder`](../interfaces/MFOrder.md) \| [`MFOrder`](../interfaces/MFOrder.md)[]\>

___

### getMFSIPS

**getMFSIPS**(`sip_id?`): `Promise`<[`MFSIP`](../interfaces/MFSIP.md) \| [`MFSIP`](../interfaces/MFSIP.md)[]\>

Get list of mutual fund SIPS.
If no `sip_id` is specified, all active and paused SIPs are returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sip_id?` | `string` | ID of the SIP (optional) whose details are to be retrieved. |

#### Returns

`Promise`<[`MFSIP`](../interfaces/MFSIP.md) \| [`MFSIP`](../interfaces/MFSIP.md)[]\>

___

### getMargins

**getMargins**(`segment?`): `Promise`<{ `commodity?`: [`UserMargin`](../interfaces/UserMargin.md) ; `equity?`: [`UserMargin`](../interfaces/UserMargin.md)  }\>

Get account balance and cash margin details for a particular segment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `segment?` | ``"equity"`` \| ``"commodity"`` | trading segment (eg: equity or commodity). |

#### Returns

`Promise`<{ `commodity?`: [`UserMargin`](../interfaces/UserMargin.md) ; `equity?`: [`UserMargin`](../interfaces/UserMargin.md)  }\>

___

### getOHLC

**getOHLC**(`instruments`): `Promise`<`Record`<`string`, { `instrument_token`: `number` ; `last_price`: `number` ; `ohlc`: { `close`: `number` ; `high`: `number` ; `low`: `number` ; `open`: `number`  }  }\>\>

Retrieve OHLC for list of instruments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instruments` | `string`[] | is a list of instruments, Instrument are in the format of `exchange:tradingsymbol`. For example NSE:INFY and for list of instruments ["NSE:RELIANCE", "NSE:SBIN", ..] |

#### Returns

`Promise`<`Record`<`string`, { `instrument_token`: `number` ; `last_price`: `number` ; `ohlc`: { `close`: `number` ; `high`: `number` ; `low`: `number` ; `open`: `number`  }  }\>\>

___

### getOrderHistory

**getOrderHistory**(`order_id`): `Promise`<[`Order`](../interfaces/Order.md)[]\>

Get list of order history.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order_id` | `string` | ID of the order whose order details to be retrieved. |

#### Returns

`Promise`<[`Order`](../interfaces/Order.md)[]\>

___

### getOrderTrades

**getOrderTrades**(`order_id`): `Promise`<[`Trade`](../interfaces/Trade.md)[]\>

Retrieve the list of trades a particular order).
An order can be executed in tranches based on market conditions.
These trades are individually recorded under an order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order_id` | `string` | ID of the order whose trades are to be retrieved. |

#### Returns

`Promise`<[`Trade`](../interfaces/Trade.md)[]\>

___

### getOrders

**getOrders**(): `Promise`<[`Order`](../interfaces/Order.md)[]\>

Get list of orders.

#### Returns

`Promise`<[`Order`](../interfaces/Order.md)[]\>

___

### getPositions

**getPositions**(): `Promise`<{ `day`: [`Position`](../interfaces/Position.md)[] ; `net`: [`Position`](../interfaces/Position.md)[]  }\>

Retrieve positions.

#### Returns

`Promise`<{ `day`: [`Position`](../interfaces/Position.md)[] ; `net`: [`Position`](../interfaces/Position.md)[]  }\>

___

### getProfile

**getProfile**(): `Promise`<[`UserProfile`](../interfaces/UserProfile.md)\>

Get user profile details.

#### Returns

`Promise`<[`UserProfile`](../interfaces/UserProfile.md)\>

___

### getQuote

**getQuote**(`instruments`): `Promise`<`Record`<`string`, [`Quote`](../interfaces/Quote.md)\>\>

Retrieve quote and market depth for list of instruments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instruments` | `string`[] | is a list of instruments, Instrument are in the format of `exchange:tradingsymbol`. For example NSE:INFY and for list of instruments ["NSE:RELIANCE", "NSE:SBIN", ..] |

#### Returns

`Promise`<`Record`<`string`, [`Quote`](../interfaces/Quote.md)\>\>

___

### getTrades

**getTrades**(): `Promise`<[`Trade`](../interfaces/Trade.md)[]\>

Retrieve the list of trades executed.

#### Returns

`Promise`<[`Trade`](../interfaces/Trade.md)[]\>

___

### invalidateAccessToken

**invalidateAccessToken**(`access_token?`): `Promise`<`boolean`\>

Kill the session by invalidating the access token.
If access_token is passed then it will be set as current access token and get in validated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `access_token?` | `string` | Token to invalidate. Default is the active `access_token`. |

#### Returns

`Promise`<`boolean`\>

___

### invalidateRefreshToken

**invalidateRefreshToken**(`refresh_token`): `Promise`<`boolean`\>

Invalidate the refresh token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `refresh_token` | `string` | Token to invalidate. |

#### Returns

`Promise`<`boolean`\>

___

### modifyGTT

**modifyGTT**(`trigger_id`, `params`): `Promise`<{ `trigger_id`: `number`  }\>

Modify GTT.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trigger_id` | `string` | GTT trigger ID. |
| `params` | [`GTTParams`](../interfaces/GTTParams.md) | Modify params |

#### Returns

`Promise`<{ `trigger_id`: `number`  }\>

___

### modifyMFSIP

**modifyMFSIP**(`sip_id`, `params`): `Promise`<{ `sip_id`: `number`  }\>

Modify a mutual fund SIP.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sip_id` | `string` | ID of the SIP. |
| `params` | `Object` | Modify params. |
| `params.frequency?` | ``"weekly"`` \| ``"monthly"`` \| ``"quarterly"`` | Order frequency. weekly, monthly, or quarterly. |
| `params.instalment_day?` | `string` | If frequency is monthly, the day of the month (1, 5, 10, 15, 20, 25) to trigger the order on. |
| `params.instalments?` | `number` | Number of instalments to trigger. If set to -1, instalments are triggered at fixed intervals until the SIP is cancelled |
| `params.status?` | ``"active"`` \| ``"paused"`` | Pause or unpause an SIP (active or paused). |

#### Returns

`Promise`<{ `sip_id`: `number`  }\>

___

### modifyOrder

**modifyOrder**(`variety`, `order_id`, `params`): `Promise`<{ `order_id`: `string`  }\>

Modify an order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variety` | [`Variety`](../modules.md#variety) | Order variety (ex. bo, co, amo, regular). |
| `order_id` | `string` | ID of the order. |
| `params` | `Object` | Order modify params. |
| `params.disclosed_quantity?` | `number` | Disclosed quantity |
| `params.order_type?` | [`OrderType`](../modules.md#ordertype) | Order type (NRML, SL, SL-M, MARKET). |
| `params.parent_order_id?` | `string` | Parent order id incase of multilegged orders. |
| `params.price?` | `number` | Order Price |
| `params.quantity?` | `number` | Order quantity |
| `params.trigger_price?` | `number` | Trigger price |
| `params.validity?` | [`Validity`](../modules.md#validity) | Order validity (DAY, IOC). |

#### Returns

`Promise`<{ `order_id`: `string`  }\>

___

### orderBasketMargins

**orderBasketMargins**(`orders`): `Promise`<{ `final`: [`Margin`](../interfaces/Margin.md) ; `initial`: [`Margin`](../interfaces/Margin.md) ; `orders`: [`Margin`](../interfaces/Margin.md)[]  }\>

Fetch basket margin for list of orders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orders` | [`MarginOrder`](../interfaces/MarginOrder.md)[] | Margin fetch orders. |

#### Returns

`Promise`<{ `final`: [`Margin`](../interfaces/Margin.md) ; `initial`: [`Margin`](../interfaces/Margin.md) ; `orders`: [`Margin`](../interfaces/Margin.md)[]  }\>

**orderBasketMargins**(`orders`, `consider_positions`): `Promise`<{ `final`: [`Margin`](../interfaces/Margin.md) ; `initial`: [`Margin`](../interfaces/Margin.md) ; `orders`: [`Margin`](../interfaces/Margin.md)[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orders` | [`MarginOrder`](../interfaces/MarginOrder.md)[] |
| `consider_positions` | `boolean` |

#### Returns

`Promise`<{ `final`: [`Margin`](../interfaces/Margin.md) ; `initial`: [`Margin`](../interfaces/Margin.md) ; `orders`: [`Margin`](../interfaces/Margin.md)[]  }\>

**orderBasketMargins**(`orders`, `consider_positions`, `mode`): `Promise`<{ `final`: [`CompactMargin`](../interfaces/CompactMargin.md) ; `initial`: [`CompactMargin`](../interfaces/CompactMargin.md) ; `orders`: [`CompactMargin`](../interfaces/CompactMargin.md)[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orders` | [`MarginOrder`](../interfaces/MarginOrder.md)[] |
| `consider_positions` | `boolean` |
| `mode` | ``"compact"`` |

#### Returns

`Promise`<{ `final`: [`CompactMargin`](../interfaces/CompactMargin.md) ; `initial`: [`CompactMargin`](../interfaces/CompactMargin.md) ; `orders`: [`CompactMargin`](../interfaces/CompactMargin.md)[]  }\>

___

### orderMargins

**orderMargins**(`orders`): `Promise`<[`Margin`](../interfaces/Margin.md)[]\>

Fetch required margin for order/list of orders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orders` | [`MarginOrder`](../interfaces/MarginOrder.md)[] | Margin fetch orders. |

#### Returns

`Promise`<[`Margin`](../interfaces/Margin.md)[]\>

**orderMargins**(`orders`, `mode`): `Promise`<[`CompactMargin`](../interfaces/CompactMargin.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orders` | [`MarginOrder`](../interfaces/MarginOrder.md)[] |
| `mode` | ``"compact"`` |

#### Returns

`Promise`<[`CompactMargin`](../interfaces/CompactMargin.md)[]\>

___

### placeGTT

**placeGTT**(`params`): `Promise`<{ `trigger_id`: `number`  }\>

Place GTT.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GTTParams`](../interfaces/GTTParams.md) | Place GTT params |

#### Returns

`Promise`<{ `trigger_id`: `number`  }\>

___

### placeMFOrder

**placeMFOrder**(`params`): `Promise`<{ `order_id`: `number`  }\>

Place a mutual fund order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | MF Order params. |
| `params.amount?` | `number` | Amount worth of units to purchase. Not applicable on SELLs |
| `params.quantity?` | `number` | Quantity to SELL. Not applicable on BUYs. |
| `params.tag?` | `string` | An optional tag to apply to an order to identify it (alphanumeric, max 20 chars) |
| `params.tradingsymbol` | `string` | Tradingsymbol (ISIN) of the fund. |
| `params.transaction_type` | [`TransactionType`](../modules.md#transactiontype) | Transaction type (BUY or SELL). |

#### Returns

`Promise`<{ `order_id`: `number`  }\>

___

### placeMFSIP

**placeMFSIP**(`params`): `Promise`<{ `sip_id`: `number`  }\>

Place a mutual fund SIP.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | SIP params. |
| `params.amount` | `number` | Amount worth of units to purchase. |
| `params.frequency` | ``"weekly"`` \| ``"monthly"`` \| ``"quarterly"`` | Order frequency. weekly, monthly, or quarterly. |
| `params.initial_amount?` | `number` | Amount worth of units to purchase before the SIP starts. |
| `params.instalment_day?` | `string` | If frequency is monthly, the day of the month (1, 5, 10, 15, 20, 25) to trigger the order on. |
| `params.instalments` | `number` | Number of instalments to trigger. If set to -1, instalments are triggered at fixed intervals until the SIP is cancelled |
| `params.tag?` | `string` | An optional tag to apply to an order to identify it (alphanumeric, max 20 chars) |
| `params.tradingsymbol` | `string` | Tradingsymbol (ISIN) of the fund. |

#### Returns

`Promise`<{ `sip_id`: `number`  }\>

___

### placeOrder

**placeOrder**(`variety`, `params`): `Promise`<{ `order_id`: `string`  }\>

Place an order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variety` | [`Variety`](../modules.md#variety) | Order variety (ex. bo, co, amo, regular). |
| `params` | [`PlaceOrderParams`](../interfaces/PlaceOrderParams.md) | Order params. |

#### Returns

`Promise`<{ `order_id`: `string`  }\>

___

### renewAccessToken

**renewAccessToken**(`refresh_token`, `api_secret`): `Promise`<[`SessionData`](../interfaces/SessionData.md)\>

Renew access token by active refresh token. Renewed access token is implicitly set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `refresh_token` | `string` | Token obtained from previous successful login. |
| `api_secret` | `string` | API secret issued with the API key. |

#### Returns

`Promise`<[`SessionData`](../interfaces/SessionData.md)\>

___

### setAccessToken

**setAccessToken**(`access_token`): `void`

Set access_token received after a successful authentication.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `access_token` | `string` | Token obtained in exchange for `request_token`. Once you have obtained `access_token`, you should persist it in a database or session to pass to the Kite Connect class initialisation for subsequent requests. |

#### Returns

`void`

___

### setSessionExpiryHook

**setSessionExpiryHook**(`cb`): `void`

Set a callback hook for session (`TokenException` -- timeout, expiry etc.) errors.
`access_token` (login session) can become invalid for a number of
reasons, but it doesn't make sense for the client to try and catch it during every API call.

A callback method that handles session errors can be set here and when the client encounters
a token error at any point, it'll be called.

This callback, for instance, can log the user out of the UI,
clear session cookies, or initiate a fresh login.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | `Function` | Callback |

#### Returns

`void`

___

### validatePostback

**validatePostback**(`postback_data`, `api_secret`): `boolean`

Validate postback data checksum

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postback_data` | `Object` | Postback data received. Must be an json object with required keys order_id, checksum and order_timestamp |
| `postback_data.checksum` | `string` | - |
| `postback_data.order_id` | `string` | - |
| `postback_data.order_timestamp` | `string` | - |
| `api_secret` | `string` | Api secret of the app |

#### Returns

`boolean`

## Properties

### EXCHANGE\_BCD

 `Readonly` **EXCHANGE\_BCD**: ``"BCD"``

___

### EXCHANGE\_BFO

 `Readonly` **EXCHANGE\_BFO**: ``"BFO"``

___

### EXCHANGE\_BSE

 `Readonly` **EXCHANGE\_BSE**: ``"BSE"``

___

### EXCHANGE\_CDS

 `Readonly` **EXCHANGE\_CDS**: ``"CDS"``

___

### EXCHANGE\_MCX

 `Readonly` **EXCHANGE\_MCX**: ``"MCX"``

___

### EXCHANGE\_NFO

 `Readonly` **EXCHANGE\_NFO**: ``"NFO"``

___

### EXCHANGE\_NSE

 `Readonly` **EXCHANGE\_NSE**: ``"NSE"``

___

### GTT\_STATUS\_ACTIVE

 `Readonly` **GTT\_STATUS\_ACTIVE**: ``"active"``

___

### GTT\_STATUS\_CANCELLED

 `Readonly` **GTT\_STATUS\_CANCELLED**: ``"cancelled"``

___

### GTT\_STATUS\_DELETED

 `Readonly` **GTT\_STATUS\_DELETED**: ``"deleted"``

___

### GTT\_STATUS\_DISABLED

 `Readonly` **GTT\_STATUS\_DISABLED**: ``"disabled"``

___

### GTT\_STATUS\_EXPIRED

 `Readonly` **GTT\_STATUS\_EXPIRED**: ``"expired"``

___

### GTT\_STATUS\_REJECTED

 `Readonly` **GTT\_STATUS\_REJECTED**: ``"rejected"``

___

### GTT\_STATUS\_TRIGGERED

 `Readonly` **GTT\_STATUS\_TRIGGERED**: ``"triggered"``

___

### GTT\_TYPE\_OCO

 `Readonly` **GTT\_TYPE\_OCO**: ``"two-leg"``

___

### GTT\_TYPE\_SINGLE

 `Readonly` **GTT\_TYPE\_SINGLE**: ``"single"``

___

### MARGIN\_COMMODITY

 `Readonly` **MARGIN\_COMMODITY**: ``"commodity"``

___

### MARGIN\_EQUITY

 `Readonly` **MARGIN\_EQUITY**: ``"equity"``

___

### ORDER\_TYPE\_LIMIT

 `Readonly` **ORDER\_TYPE\_LIMIT**: ``"LIMIT"``

___

### ORDER\_TYPE\_MARKET

 `Readonly` **ORDER\_TYPE\_MARKET**: ``"MARKET"``

___

### ORDER\_TYPE\_SL

 `Readonly` **ORDER\_TYPE\_SL**: ``"SL"``

___

### ORDER\_TYPE\_SLM

 `Readonly` **ORDER\_TYPE\_SLM**: ``"SL-M"``

___

### POSITION\_TYPE\_DAY

 `Readonly` **POSITION\_TYPE\_DAY**: ``"day"``

___

### POSITION\_TYPE\_OVERNIGHT

 `Readonly` **POSITION\_TYPE\_OVERNIGHT**: ``"overnight"``

___

### PRODUCT\_BO

 `Readonly` **PRODUCT\_BO**: ``"BO"``

___

### PRODUCT\_CNC

 `Readonly` **PRODUCT\_CNC**: ``"CNC"``

___

### PRODUCT\_CO

 `Readonly` **PRODUCT\_CO**: ``"CO"``

___

### PRODUCT\_MIS

 `Readonly` **PRODUCT\_MIS**: ``"MIS"``

___

### PRODUCT\_NRML

 `Readonly` **PRODUCT\_NRML**: ``"NRML"``

___

### STATUS\_CANCELLED

 `Readonly` **STATUS\_CANCELLED**: ``"CANCELLED"``

___

### STATUS\_COMPLETE

 `Readonly` **STATUS\_COMPLETE**: ``"COMPLETE"``

___

### STATUS\_REJECTED

 `Readonly` **STATUS\_REJECTED**: ``"REJECTED"``

___

### TRANSACTION\_TYPE\_BUY

 `Readonly` **TRANSACTION\_TYPE\_BUY**: ``"BUY"``

___

### TRANSACTION\_TYPE\_SELL

 `Readonly` **TRANSACTION\_TYPE\_SELL**: ``"SELL"``

___

### VALIDITY\_DAY

 `Readonly` **VALIDITY\_DAY**: ``"DAY"``

___

### VALIDITY\_IOC

 `Readonly` **VALIDITY\_IOC**: ``"IOC"``

___

### VALIDITY\_TTL

 `Readonly` **VALIDITY\_TTL**: ``"TTL"``

___

### VARIETY\_AMO

 `Readonly` **VARIETY\_AMO**: ``"amo"``

___

### VARIETY\_AUCTION

 `Readonly` **VARIETY\_AUCTION**: ``"auction"``

___

### VARIETY\_BO

 `Readonly` **VARIETY\_BO**: ``"bo"``

___

### VARIETY\_CO

 `Readonly` **VARIETY\_CO**: ``"co"``

___

### VARIETY\_ICEBERG

 `Readonly` **VARIETY\_ICEBERG**: ``"iceberg"``

___

### VARIETY\_REGULAR

 `Readonly` **VARIETY\_REGULAR**: ``"regular"``
