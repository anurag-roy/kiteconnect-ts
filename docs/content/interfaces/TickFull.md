# Interface: TickFull

Full packet with Market Depth data

## Extends

- `Omit`\<[`TickQuote`](TickQuote.md), `"mode"`\>

## Properties

### average\_traded\_price

> **average\_traded\_price**: `number`

Average traded price

#### Inherited from

[`TickQuote`](TickQuote.md).[`average_traded_price`](TickQuote.md#average_traded_price)

***

### change

> **change**: `number`

Price change

#### Inherited from

[`TickQuote`](TickQuote.md).[`change`](TickQuote.md#change)

***

### depth

> **depth**: `object`

Market depth entries

There are ten entries in succession — five bid entries and five offer entries.

#### buy

> **buy**: `object`[]

Bid entries

#### sell

> **sell**: `object`[]

Offer entries

***

### exchange\_timestamp

> **exchange\_timestamp**: `Date`

Exchange timestamp

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

### last\_trade\_time

> **last\_trade\_time**: `Date`

Last traded timestamp

***

### last\_traded\_quantity

> **last\_traded\_quantity**: `number`

Last traded quantity

#### Inherited from

[`TickQuote`](TickQuote.md).[`last_traded_quantity`](TickQuote.md#last_traded_quantity)

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

#### Inherited from

`Omit.ohlc`

***

### oi

> **oi**: `number`

Open Interest

***

### oi\_day\_high

> **oi\_day\_high**: `number`

Open Interest Day High

***

### oi\_day\_low

> **oi\_day\_low**: `number`

Open Interest Day Low

***

### total\_buy\_quantity

> **total\_buy\_quantity**: `number`

Total buy quantity

#### Inherited from

[`TickQuote`](TickQuote.md).[`total_buy_quantity`](TickQuote.md#total_buy_quantity)

***

### total\_sell\_quantity

> **total\_sell\_quantity**: `number`

Total sell quantity

#### Inherited from

[`TickQuote`](TickQuote.md).[`total_sell_quantity`](TickQuote.md#total_sell_quantity)

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

#### Inherited from

[`TickQuote`](TickQuote.md).[`volume_traded`](TickQuote.md#volume_traded)
