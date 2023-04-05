[kiteconnect-ts](../README.md) / [Exports](../modules.md) / TickIndexQuote

# Interface: TickIndexQuote

Index Quote packet

## Hierarchy

- `Omit`<[`TickLtp`](TickLtp.md), ``"mode"``\>

  ↳ **`TickIndexQuote`**

## Table of contents

### Properties

- [change](TickIndexQuote.md#change)
- [instrument\_token](TickIndexQuote.md#instrument_token)
- [last\_price](TickIndexQuote.md#last_price)
- [mode](TickIndexQuote.md#mode)
- [ohlc](TickIndexQuote.md#ohlc)
- [tradable](TickIndexQuote.md#tradable)

## Properties

### change

• **change**: `number`

Price change

#### Defined in

[lib/ticker/types.ts:55](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L55)

___

### instrument\_token

• **instrument\_token**: `number`

Instrument token

#### Inherited from

Omit.instrument\_token

#### Defined in

[lib/ticker/types.ts:16](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L16)

___

### last\_price

• **last\_price**: `number`

Last traded price

#### Inherited from

Omit.last\_price

#### Defined in

[lib/ticker/types.ts:20](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L20)

___

### mode

• **mode**: ``"quote"``

Packet mode is 'quote'

#### Defined in

[lib/ticker/types.ts:30](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L30)

___

### ohlc

• **ohlc**: `Object`

Open, High, Low and Close data

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | `number` | Close of the day |
| `high` | `number` | High of the day |
| `low` | `number` | Low of the day |
| `open` | `number` | Open of the day |

#### Defined in

[lib/ticker/types.ts:34](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L34)

___

### tradable

• **tradable**: `boolean`

Whether the instrument is tradable or not. `false` for Indices

#### Inherited from

Omit.tradable

#### Defined in

[lib/ticker/types.ts:8](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L8)
