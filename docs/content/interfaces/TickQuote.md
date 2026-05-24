# Interface: TickQuote

Quote packet

## Extends

- `Omit`\<[`TickLtp`](TickLtp.md), `"mode"`\>

## Properties

### average\_traded\_price

> **average\_traded\_price**: `number`

Average traded price

***

### change

> **change**: `number`

Price change

***

### instrument\_token

> **instrument\_token**: `number`

Instrument token

#### Inherited from

[`TickLtp`](TickLtp.md).[`instrument_token`](TickLtp.md#instrument_token)

***

### last\_price

> **last\_price**: `number`

Last traded price

#### Inherited from

[`TickLtp`](TickLtp.md).[`last_price`](TickLtp.md#last_price)

***

### last\_traded\_quantity

> **last\_traded\_quantity**: `number`

Last traded quantity

***

### mode

> **mode**: `"quote"`

Packet mode is 'quote'

***

### ohlc

> **ohlc**: `object`

Open, High, Low and Close data

#### close

> **close**: `number`

Close price of the day

#### high

> **high**: `number`

High price of the day

#### low

> **low**: `number`

Low price of the day

#### open

> **open**: `number`

Open price of the day

***

### total\_buy\_quantity

> **total\_buy\_quantity**: `number`

Total buy quantity

***

### total\_sell\_quantity

> **total\_sell\_quantity**: `number`

Total sell quantity

***

### tradable

> **tradable**: `boolean`

Whether the instrument is tradable or not. `false` for Indices

#### Inherited from

[`TickLtp`](TickLtp.md).[`tradable`](TickLtp.md#tradable)

***

### volume\_traded

> **volume\_traded**: `number`

Volume traded for the day
