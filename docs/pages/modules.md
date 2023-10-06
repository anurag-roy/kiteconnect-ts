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

| Name | Type |
| :------ | :------ |
| `close` | () => `void` \| `Promise`<`void`\> |
| `connect` | () => `void` \| `Promise`<`void`\> |
| `disconnect` | (`error`: `Error`) => `void` \| `Promise`<`void`\> |
| `error` | (`error`: `Error`) => `void` \| `Promise`<`void`\> |
| `message` | (`data`: `ArrayBuffer`) => `void` \| `Promise`<`void`\> |
| `noreconnect` | () => `void` \| `Promise`<`void`\> |
| `order_update` | (`order`: [`Order`](interfaces/Order.md)) => `void` \| `Promise`<`void`\> |
| `reconnect` | (`retries`: `number`, `interval`: `number`) => `void` \| `Promise`<`void`\> |
| `ticks` | (`ticks`: `any`[]) => `void` \| `Promise`<`void`\> |
