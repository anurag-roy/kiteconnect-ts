[kiteconnect-ts](README.md) / Exports

# kiteconnect-ts

## Table of contents

### Classes

- [KiteConnect](classes/KiteConnect.md)
- [KiteTicker](classes/KiteTicker.md)

### Interfaces

- [CompactMargin](interfaces/CompactMargin.md)
- [ConvertPositionParams](interfaces/ConvertPositionParams.md)
- [GTTParams](interfaces/GTTParams.md)
- [Instrument](interfaces/Instrument.md)
- [KiteConnectParams](interfaces/KiteConnectParams.md)
- [MFHolding](interfaces/MFHolding.md)
- [MFInstrument](interfaces/MFInstrument.md)
- [MFOrder](interfaces/MFOrder.md)
- [MFSIP](interfaces/MFSIP.md)
- [Margin](interfaces/Margin.md)
- [MarginOrder](interfaces/MarginOrder.md)
- [Order](interfaces/Order.md)
- [OrderUpdatePostback](interfaces/OrderUpdatePostback.md)
- [PlaceOrderParams](interfaces/PlaceOrderParams.md)
- [PortfolioHolding](interfaces/PortfolioHolding.md)
- [Position](interfaces/Position.md)
- [Quote](interfaces/Quote.md)
- [SessionData](interfaces/SessionData.md)
- [TickFull](interfaces/TickFull.md)
- [TickIndexFull](interfaces/TickIndexFull.md)
- [TickIndexQuote](interfaces/TickIndexQuote.md)
- [TickLtp](interfaces/TickLtp.md)
- [TickQuote](interfaces/TickQuote.md)
- [Trade](interfaces/Trade.md)
- [Trigger](interfaces/Trigger.md)
- [UserMargin](interfaces/UserMargin.md)
- [UserProfile](interfaces/UserProfile.md)

### Type Aliases

- [Exchange](modules.md#exchange)
- [KiteTickerParams](modules.md#kitetickerparams)
- [OrderType](modules.md#ordertype)
- [Product](modules.md#product)
- [Tick](modules.md#tick)
- [TickerEvent](modules.md#tickerevent)
- [TransactionType](modules.md#transactiontype)
- [TriggerType](modules.md#triggertype)
- [Validity](modules.md#validity)
- [Variety](modules.md#variety)

## Type Aliases

### Exchange

Ƭ **Exchange**: [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_NSE"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_BSE"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_NFO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_CDS"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_BCD"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_BFO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_MCX"``]

#### Defined in

[lib/connect/types.ts:3](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L3)

___

### KiteTickerParams

Ƭ **KiteTickerParams**: `Object`

Params to construct a KiteTicker class

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `access_token` | `string` | Access token obtained after successful login flow. |
| `api_key` | `string` | API key issued to you. |
| `max_delay?` | `number` | The maximum delay in seconds after which subsequent re-connection interval will become constant. Defaults to 60s and minimum acceptable value is 5s. **`Default Value`** 60 |
| `max_retry?` | `number` | The maximum number of re-connection attempts. Defaults to 50 attempts and maximum up to 300 attempts. **`Default Value`** 50 |
| `reconnect?` | `boolean` | Enable/Disable auto reconnect. Enabled by default. **`Default Value`** `true` |
| `root?` | `string` | Kite websocket root. **`Default Value`** "wss://ws.kite.trade/" |

#### Defined in

[lib/ticker/types.ts:253](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L253)

___

### OrderType

Ƭ **OrderType**: [`KiteConnect`](classes/KiteConnect.md)[``"ORDER_TYPE_LIMIT"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"ORDER_TYPE_MARKET"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"ORDER_TYPE_SL"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"ORDER_TYPE_SLM"``]

#### Defined in

[lib/connect/types.ts:21](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L21)

___

### Product

Ƭ **Product**: [`KiteConnect`](classes/KiteConnect.md)[``"PRODUCT_NRML"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"PRODUCT_MIS"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"PRODUCT_CNC"``]

#### Defined in

[lib/connect/types.ts:16](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L16)

___

### Tick

Ƭ **Tick**: [`TickLtp`](interfaces/TickLtp.md) \| [`TickIndexQuote`](interfaces/TickIndexQuote.md) \| [`TickIndexFull`](interfaces/TickIndexFull.md) \| [`TickQuote`](interfaces/TickQuote.md) \| [`TickFull`](interfaces/TickFull.md)

Types of possible tick packet structures

#### Defined in

[lib/ticker/types.ts:206](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L206)

___

### TickerEvent

Ƭ **TickerEvent**: ``"connect"`` \| ``"ticks"`` \| ``"disconnect"`` \| ``"error"`` \| ``"close"`` \| ``"reconnect"`` \| ``"noreconnect"`` \| ``"order_update"`` \| ``"message"``

Available KiteTicker Events

All events:
----
`connect` -  when connection is successfully established.

`ticks` - when ticks are available (Arrays of [Tick](modules.md#tick) object as the first argument).

`disconnect` - when socket connection is disconnected. Error is received as a first param.

`error` - when socket connection is closed with error. Error is received as a first param.

`close` - when socket connection is closed cleanly.

`reconnect` - When reconnecting (current re-connection count and reconnect interval as arguments respectively).

`noreconnect` - When re-connection fails after n number times.

`order_update` - When order update (postback) is received for the connected user (Data object is received as first argument).

`message` - when binary message is received from the server.

----

#### Defined in

[lib/ticker/types.ts:239](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L239)

___

### TransactionType

Ƭ **TransactionType**: [`KiteConnect`](classes/KiteConnect.md)[``"TRANSACTION_TYPE_BUY"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"TRANSACTION_TYPE_SELL"``]

#### Defined in

[lib/connect/types.ts:12](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L12)

___

### TriggerType

Ƭ **TriggerType**: [`KiteConnect`](classes/KiteConnect.md)[``"GTT_TYPE_OCO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"GTT_TYPE_SINGLE"``]

#### Defined in

[lib/connect/types.ts:40](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L40)

___

### Validity

Ƭ **Validity**: [`KiteConnect`](classes/KiteConnect.md)[``"VALIDITY_DAY"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VALIDITY_IOC"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VALIDITY_TTL"``]

#### Defined in

[lib/connect/types.ts:35](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L35)

___

### Variety

Ƭ **Variety**: [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_AMO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_AUCTION"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_BO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_CO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_ICEBERG"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_REGULAR"``]

#### Defined in

[lib/connect/types.ts:27](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L27)
