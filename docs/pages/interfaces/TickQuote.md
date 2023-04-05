# Interface: TickQuote

Quote packet

## Hierarchy

- `Omit`<[`TickLtp`](TickLtp.md), ``"mode"``\>

  ↳ **`TickQuote`**

## Properties

### average\_traded\_price

 **average\_traded\_price**: `number`

Average traded price

___

### change

 **change**: `number`

Price change

___

### instrument\_token

 **instrument\_token**: `number`

Instrument token

#### Inherited from

Omit.instrument\_token

___

### last\_price

 **last\_price**: `number`

Last traded price

#### Inherited from

Omit.last\_price

___

### last\_traded\_quantity

 **last\_traded\_quantity**: `number`

Last traded quantity

___

### mode

 **mode**: ``"quote"``

Packet mode is 'quote'

___

### ohlc

 **ohlc**: `Object`

Open, High, Low and Close data

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | `number` | Close price of the day |
| `high` | `number` | High price of the day |
| `low` | `number` | Low price of the day |
| `open` | `number` | Open price of the day |

___

### total\_buy\_quantity

 **total\_buy\_quantity**: `number`

Total buy quantity

___

### total\_sell\_quantity

 **total\_sell\_quantity**: `number`

Total sell quantity

___

### tradable

 **tradable**: `boolean`

Whether the instrument is tradable or not. `false` for Indices

#### Inherited from

Omit.tradable

___

### volume\_traded

 **volume\_traded**: `number`

Volume traded for the day
