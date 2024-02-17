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

 **TickerEvent**: keyof [`TickerEvents`](modules.md#tickerevents)

All Ticker events

___

### TickerEvents

 **TickerEvents**: `Object`

All Ticker events and their corresponding callback functon signatures.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | () => `void` \| `Promise`\<`void`\> | When socket connection is closed cleanly. |
| `connect` | () => `void` \| `Promise`\<`void`\> | When connection is successfully established. |
| `disconnect` | (`error`: `Error`) => `void` \| `Promise`\<`void`\> | When socket connection is disconnected. Error is received as a first param. |
| `error` | (`error`: `Error`) => `void` \| `Promise`\<`void`\> | When socket connection is closed with error. Error is received as a first param. |
| `message` | (`data`: `ArrayBuffer`) => `void` \| `Promise`\<`void`\> | When binary message is received from the server. |
| `noreconnect` | () => `void` \| `Promise`\<`void`\> | When re-connection fails after n number times. |
| `order_update` | (`order`: [`Order`](interfaces/Order.md)) => `void` \| `Promise`\<`void`\> | When order update (postback) is received for the connected user ([Order](interfaces/Order.md) is received as first argument). |
| `reconnect` | (`retries`: `number`, `interval`: `number`) => `void` \| `Promise`\<`void`\> | When reconnecting (current re-connection count and reconnect interval as arguments respectively). |
| `ticks` | (`ticks`: `any`[]) => `void` \| `Promise`\<`void`\> | When ticks are available (Arrays of [Tick](modules.md#tick) object as the first argument). The type has been purposefully kept as `any` because the structure of the tick packet is not known and there can be multiple types of tick packets. |
