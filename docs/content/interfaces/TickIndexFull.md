# Interface: TickIndexFull

Index Full packet

## Extends

- `Omit`\<[`TickIndexQuote`](TickIndexQuote.md), `"mode"`\>

## Properties

### change

> **change**: `number`

Price change

#### Inherited from

[`TickIndexQuote`](TickIndexQuote.md).[`change`](TickIndexQuote.md#change)

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

### mode

> **mode**: `"full"`

Packet mode is 'full'

***

### ohlc

> **ohlc**: `object`

Open, High, Low and Close data

#### close

> **close**: `number`

Close of the day

#### high

> **high**: `number`

High of the day

#### low

> **low**: `number`

Low of the day

#### open

> **open**: `number`

Open of the day

#### Inherited from

`Omit.ohlc`

***

### timestamp

> **timestamp**: `Date`

Exchange timestamp

***

### tradable

> **tradable**: `boolean`

Whether the instrument is tradable or not. `false` for Indices

#### Inherited from

[`TickLtp`](TickLtp.md).[`tradable`](TickLtp.md#tradable)
