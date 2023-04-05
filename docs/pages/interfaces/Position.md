[kiteconnect-ts](../README.md) / [Exports](../modules.md) / Position

# Interface: Position

## Table of contents

### Properties

- [average\_price](Position.md#average_price)
- [buy\_m2m](Position.md#buy_m2m)
- [buy\_price](Position.md#buy_price)
- [buy\_quantity](Position.md#buy_quantity)
- [buy\_value](Position.md#buy_value)
- [close\_price](Position.md#close_price)
- [day\_buy\_price](Position.md#day_buy_price)
- [day\_buy\_quantity](Position.md#day_buy_quantity)
- [day\_buy\_value](Position.md#day_buy_value)
- [day\_sell\_price](Position.md#day_sell_price)
- [day\_sell\_quantity](Position.md#day_sell_quantity)
- [day\_sell\_value](Position.md#day_sell_value)
- [exchange](Position.md#exchange)
- [instrument\_token](Position.md#instrument_token)
- [last\_price](Position.md#last_price)
- [m2m](Position.md#m2m)
- [multiplier](Position.md#multiplier)
- [overnight\_quantity](Position.md#overnight_quantity)
- [pnl](Position.md#pnl)
- [product](Position.md#product)
- [quantity](Position.md#quantity)
- [realised](Position.md#realised)
- [sell\_m2m](Position.md#sell_m2m)
- [sell\_price](Position.md#sell_price)
- [sell\_quantity](Position.md#sell_quantity)
- [sell\_value](Position.md#sell_value)
- [tradingsymbol](Position.md#tradingsymbol)
- [unrealised](Position.md#unrealised)
- [value](Position.md#value)

## Properties

### average\_price

• **average\_price**: `number`

Average price at which the net position quantity was acquired

#### Defined in

[lib/connect/types.ts:871](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L871)

___

### buy\_m2m

• **buy\_m2m**: `number`

Mark to market returns on the bought quantities

#### Defined in

[lib/connect/types.ts:915](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L915)

___

### buy\_price

• **buy\_price**: `number`

Average price at which quantities were bought

#### Defined in

[lib/connect/types.ts:907](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L907)

___

### buy\_quantity

• **buy\_quantity**: `number`

Quantity bought and added to the position

#### Defined in

[lib/connect/types.ts:903](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L903)

___

### buy\_value

• **buy\_value**: `number`

Net value of the bought quantities

#### Defined in

[lib/connect/types.ts:911](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L911)

___

### close\_price

• **close\_price**: `number`

Closing price of the instrument from the last trading day

#### Defined in

[lib/connect/types.ts:875](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L875)

___

### day\_buy\_price

• **day\_buy\_price**: `number`

Average price at which quantities were bought during the day

#### Defined in

[lib/connect/types.ts:923](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L923)

___

### day\_buy\_quantity

• **day\_buy\_quantity**: `number`

Quantity bought and added to the position during the day

#### Defined in

[lib/connect/types.ts:919](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L919)

___

### day\_buy\_value

• **day\_buy\_value**: `number`

Net value of the quantities bought during the day

#### Defined in

[lib/connect/types.ts:927](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L927)

___

### day\_sell\_price

• **day\_sell\_price**: `number`

Average price at which quantities were sold during the day

#### Defined in

[lib/connect/types.ts:951](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L951)

___

### day\_sell\_quantity

• **day\_sell\_quantity**: `number`

Quantity sold off from the position during the day

#### Defined in

[lib/connect/types.ts:947](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L947)

___

### day\_sell\_value

• **day\_sell\_value**: `number`

Net value of the quantities sold during the day

#### Defined in

[lib/connect/types.ts:955](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L955)

___

### exchange

• **exchange**: `string`

Exchange

#### Defined in

[lib/connect/types.ts:847](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L847)

___

### instrument\_token

• **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument. Used for subscribing to live market data over WebSocket

#### Defined in

[lib/connect/types.ts:851](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L851)

___

### last\_price

• **last\_price**: `number`

Last traded market price of the instrument

#### Defined in

[lib/connect/types.ts:879](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L879)

___

### m2m

• **m2m**: `number`

Mark to market returns (computed based on the last close and the last traded price)

#### Defined in

[lib/connect/types.ts:891](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L891)

___

### multiplier

• **multiplier**: `number`

The quantity/lot size multiplier used for calculating P&Ls.

#### Defined in

[lib/connect/types.ts:867](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L867)

___

### overnight\_quantity

• **overnight\_quantity**: `number`

Quantity held previously and carried forward over night

#### Defined in

[lib/connect/types.ts:863](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L863)

___

### pnl

• **pnl**: `number`

Net returns on the position; Profit and loss

#### Defined in

[lib/connect/types.ts:887](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L887)

___

### product

• **product**: `string`

Margin product applied to the position

#### Defined in

[lib/connect/types.ts:855](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L855)

___

### quantity

• **quantity**: `number`

Quantity held

#### Defined in

[lib/connect/types.ts:859](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L859)

___

### realised

• **realised**: `number`

Realised intraday returns

#### Defined in

[lib/connect/types.ts:899](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L899)

___

### sell\_m2m

• **sell\_m2m**: `number`

Mark to market returns on the sold quantities

#### Defined in

[lib/connect/types.ts:943](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L943)

___

### sell\_price

• **sell\_price**: `number`

Average price at which quantities were sold

#### Defined in

[lib/connect/types.ts:935](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L935)

___

### sell\_quantity

• **sell\_quantity**: `number`

Quantity sold off from the position

#### Defined in

[lib/connect/types.ts:931](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L931)

___

### sell\_value

• **sell\_value**: `number`

Net value of the sold quantities

#### Defined in

[lib/connect/types.ts:939](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L939)

___

### tradingsymbol

• **tradingsymbol**: `string`

Exchange tradingsymbol of the instrument

#### Defined in

[lib/connect/types.ts:843](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L843)

___

### unrealised

• **unrealised**: `number`

Unrealised intraday returns

#### Defined in

[lib/connect/types.ts:895](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L895)

___

### value

• **value**: `number`

Net value of the position

#### Defined in

[lib/connect/types.ts:883](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L883)
