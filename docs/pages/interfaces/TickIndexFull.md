[kiteconnect-ts](../README.md) / [Exports](../modules.md) / TickIndexFull

# Interface: TickIndexFull

Index Full packet

## Hierarchy

- `Omit`<[`TickIndexQuote`](TickIndexQuote.md), ``"mode"``\>

  ↳ **`TickIndexFull`**

## Table of contents

### Properties

- [change](TickIndexFull.md#change)
- [instrument\_token](TickIndexFull.md#instrument_token)
- [last\_price](TickIndexFull.md#last_price)
- [mode](TickIndexFull.md#mode)
- [ohlc](TickIndexFull.md#ohlc)
- [timestamp](TickIndexFull.md#timestamp)
- [tradable](TickIndexFull.md#tradable)

## Properties

### change

• **change**: `number`

Price change

#### Inherited from

Omit.change

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

• **mode**: ``"full"``

Packet mode is 'full'

#### Defined in

[lib/ticker/types.ts:65](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L65)

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

#### Inherited from

Omit.ohlc

#### Defined in

[lib/ticker/types.ts:34](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L34)

___

### timestamp

• **timestamp**: `Date`

Exchange timestamp

#### Defined in

[lib/ticker/types.ts:69](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L69)

___

### tradable

• **tradable**: `boolean`

Whether the instrument is tradable or not. `false` for Indices

#### Inherited from

Omit.tradable

#### Defined in

[lib/ticker/types.ts:8](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L8)
