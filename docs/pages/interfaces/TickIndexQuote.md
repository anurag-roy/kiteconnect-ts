# Interface: TickIndexQuote

Index Quote packet

## Hierarchy

- `Omit`\<[`TickLtp`](TickLtp.md), ``"mode"``\>

  ↳ **`TickIndexQuote`**

## Properties

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
| `close` | `number` | Close of the day |
| `high` | `number` | High of the day |
| `low` | `number` | Low of the day |
| `open` | `number` | Open of the day |

___

### tradable

 **tradable**: `boolean`

Whether the instrument is tradable or not. `false` for Indices

#### Inherited from

Omit.tradable
