# kiteconnect-ts

## Classes

- [KiteConnect](classes/KiteConnect.md)
- [KiteTicker](classes/KiteTicker.md)

## Interfaces

- [CompactMargin](interfaces/CompactMargin.md)
- [ConvertPositionParams](interfaces/ConvertPositionParams.md)
- [GTTParams](interfaces/GTTParams.md)
- [Instrument](interfaces/Instrument.md)
- [KiteConnectParams](interfaces/KiteConnectParams.md)
- [KiteTickerParams](interfaces/KiteTickerParams.md)
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

## Type Aliases

### Exchange

 **Exchange**: [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_NSE"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_BSE"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_NFO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_CDS"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_BCD"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_BFO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"EXCHANGE_MCX"``]

___

### OrderType

 **OrderType**: [`KiteConnect`](classes/KiteConnect.md)[``"ORDER_TYPE_LIMIT"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"ORDER_TYPE_MARKET"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"ORDER_TYPE_SL"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"ORDER_TYPE_SLM"``]

___

### Product

 **Product**: [`KiteConnect`](classes/KiteConnect.md)[``"PRODUCT_NRML"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"PRODUCT_MIS"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"PRODUCT_CNC"``]

___

### Tick

 **Tick**: [`TickLtp`](interfaces/TickLtp.md) \| [`TickIndexQuote`](interfaces/TickIndexQuote.md) \| [`TickIndexFull`](interfaces/TickIndexFull.md) \| [`TickQuote`](interfaces/TickQuote.md) \| [`TickFull`](interfaces/TickFull.md)

Types of possible tick packet structures

___

### TickerEvent

 **TickerEvent**: ``"connect"`` \| ``"ticks"`` \| ``"disconnect"`` \| ``"error"`` \| ``"close"`` \| ``"reconnect"`` \| ``"noreconnect"`` \| ``"order_update"`` \| ``"message"``

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

___

### TransactionType

 **TransactionType**: [`KiteConnect`](classes/KiteConnect.md)[``"TRANSACTION_TYPE_BUY"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"TRANSACTION_TYPE_SELL"``]

___

### TriggerType

 **TriggerType**: [`KiteConnect`](classes/KiteConnect.md)[``"GTT_TYPE_OCO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"GTT_TYPE_SINGLE"``]

___

### Validity

 **Validity**: [`KiteConnect`](classes/KiteConnect.md)[``"VALIDITY_DAY"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VALIDITY_IOC"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VALIDITY_TTL"``]

___

### Variety

 **Variety**: [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_AMO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_AUCTION"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_BO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_CO"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_ICEBERG"``] \| [`KiteConnect`](classes/KiteConnect.md)[``"VARIETY_REGULAR"``]
