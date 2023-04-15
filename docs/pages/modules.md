# kiteconnect-ts

## Enumerations

- [Exchange](enums/Exchange.md)
- [OrderType](enums/OrderType.md)
- [ProductType](enums/ProductType.md)
- [TransactionType](enums/TransactionType.md)
- [TriggerType](enums/TriggerType.md)
- [Validity](enums/Validity.md)
- [Variety](enums/Variety.md)

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

### Tick

 **Tick**: [`TickLtp`](interfaces/TickLtp.md) \| [`TickIndexQuote`](interfaces/TickIndexQuote.md) \| [`TickIndexFull`](interfaces/TickIndexFull.md) \| [`TickQuote`](interfaces/TickQuote.md) \| [`TickFull`](interfaces/TickFull.md)

Types of possible tick packet structures

___

### TickerEvent

 **TickerEvent**: ``"connect"`` \| ``"ticks"`` \| ``"disconnect"`` \| ``"error"`` \| ``"close"`` \| ``"reconnect"`` \| ``"noreconnect"`` \| ``"order_update"`` \| ``"message"``

All available KiteTicker events:

`connect` -  when connection is successfully established.

`ticks` - when ticks are available (Arrays of [Tick](modules.md#tick) object as the first argument).

`disconnect` - when socket connection is disconnected. Error is received as a first param.

`error` - when socket connection is closed with error. Error is received as a first param.

`close` - when socket connection is closed cleanly.

`reconnect` - When reconnecting (current re-connection count and reconnect interval as arguments respectively).

`noreconnect` - When re-connection fails after n number times.

`order_update` - When order update (postback) is received for the connected user (Data object is received as first argument).

`message` - when binary message is received from the server.
