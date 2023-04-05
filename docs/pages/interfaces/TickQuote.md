[kiteconnect-ts](../README.md) / [Exports](../modules.md) / TickQuote

# Interface: TickQuote

Quote packet

## Hierarchy

- `Omit`<[`TickLtp`](TickLtp.md), ``"mode"``\>

  ↳ **`TickQuote`**

## Table of contents

### Properties

- [average\_traded\_price](TickQuote.md#average_traded_price)
- [change](TickQuote.md#change)
- [instrument\_token](TickQuote.md#instrument_token)
- [last\_price](TickQuote.md#last_price)
- [last\_traded\_quantity](TickQuote.md#last_traded_quantity)
- [mode](TickQuote.md#mode)
- [ohlc](TickQuote.md#ohlc)
- [total\_buy\_quantity](TickQuote.md#total_buy_quantity)
- [total\_sell\_quantity](TickQuote.md#total_sell_quantity)
- [tradable](TickQuote.md#tradable)
- [volume\_traded](TickQuote.md#volume_traded)

## Properties

### average\_traded\_price

• **average\_traded\_price**: `number`

Average traded price

#### Defined in

[lib/ticker/types.ts:87](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L87)

___

### change

• **change**: `number`

Price change

#### Defined in

[lib/ticker/types.ts:124](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L124)

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

### last\_traded\_quantity

• **last\_traded\_quantity**: `number`

Last traded quantity

#### Defined in

[lib/ticker/types.ts:83](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L83)

___

### mode

• **mode**: ``"quote"``

Packet mode is 'quote'

#### Defined in

[lib/ticker/types.ts:79](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L79)

___

### ohlc

• **ohlc**: `Object`

Open, High, Low and Close data

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | `number` | Close price of the day |
| `high` | `number` | High price of the day |
| `low` | `number` | Low price of the day |
| `open` | `number` | Open price of the day |

#### Defined in

[lib/ticker/types.ts:103](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L103)

___

### total\_buy\_quantity

• **total\_buy\_quantity**: `number`

Total buy quantity

#### Defined in

[lib/ticker/types.ts:95](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L95)

___

### total\_sell\_quantity

• **total\_sell\_quantity**: `number`

Total sell quantity

#### Defined in

[lib/ticker/types.ts:99](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L99)

___

### tradable

• **tradable**: `boolean`

Whether the instrument is tradable or not. `false` for Indices

#### Inherited from

Omit.tradable

#### Defined in

[lib/ticker/types.ts:8](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L8)

___

### volume\_traded

• **volume\_traded**: `number`

Volume traded for the day

#### Defined in

[lib/ticker/types.ts:91](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L91)
