[kiteconnect-ts](../README.md) / [Exports](../modules.md) / TickFull

# Interface: TickFull

Full packet with Market Depth data

## Hierarchy

- `Omit`<[`TickQuote`](TickQuote.md), ``"mode"``\>

  ↳ **`TickFull`**

## Table of contents

### Properties

- [average\_traded\_price](TickFull.md#average_traded_price)
- [change](TickFull.md#change)
- [depth](TickFull.md#depth)
- [exchange\_timestamp](TickFull.md#exchange_timestamp)
- [instrument\_token](TickFull.md#instrument_token)
- [last\_price](TickFull.md#last_price)
- [last\_trade\_time](TickFull.md#last_trade_time)
- [last\_traded\_quantity](TickFull.md#last_traded_quantity)
- [mode](TickFull.md#mode)
- [ohlc](TickFull.md#ohlc)
- [oi](TickFull.md#oi)
- [oi\_day\_high](TickFull.md#oi_day_high)
- [oi\_day\_low](TickFull.md#oi_day_low)
- [total\_buy\_quantity](TickFull.md#total_buy_quantity)
- [total\_sell\_quantity](TickFull.md#total_sell_quantity)
- [tradable](TickFull.md#tradable)
- [volume\_traded](TickFull.md#volume_traded)

## Properties

### average\_traded\_price

• **average\_traded\_price**: `number`

Average traded price

#### Inherited from

Omit.average\_traded\_price

#### Defined in

[lib/ticker/types.ts:87](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L87)

___

### change

• **change**: `number`

Price change

#### Inherited from

Omit.change

#### Defined in

[lib/ticker/types.ts:124](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L124)

___

### depth

• **depth**: `Object`

Market depth entries

There are ten entries in succession — five bid entries and five offer entries.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `buy` | { `orders`: `number` ; `price`: `number` ; `quantity`: `number`  }[] | Bid entries |
| `sell` | { `orders`: `number` ; `price`: `number` ; `quantity`: `number`  }[] | Offer entries |

#### Defined in

[lib/ticker/types.ts:160](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L160)

___

### exchange\_timestamp

• **exchange\_timestamp**: `Date`

Exchange timestamp

#### Defined in

[lib/ticker/types.ts:142](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L142)

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

### last\_trade\_time

• **last\_trade\_time**: `Date`

Last traded timestamp

#### Defined in

[lib/ticker/types.ts:138](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L138)

___

### last\_traded\_quantity

• **last\_traded\_quantity**: `number`

Last traded quantity

#### Inherited from

Omit.last\_traded\_quantity

#### Defined in

[lib/ticker/types.ts:83](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L83)

___

### mode

• **mode**: ``"full"``

Packet mode is 'full'

#### Defined in

[lib/ticker/types.ts:134](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L134)

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

#### Inherited from

Omit.ohlc

#### Defined in

[lib/ticker/types.ts:103](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L103)

___

### oi

• **oi**: `number`

Open Interest

#### Defined in

[lib/ticker/types.ts:146](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L146)

___

### oi\_day\_high

• **oi\_day\_high**: `number`

Open Interest Day High

#### Defined in

[lib/ticker/types.ts:150](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L150)

___

### oi\_day\_low

• **oi\_day\_low**: `number`

Open Interest Day Low

#### Defined in

[lib/ticker/types.ts:154](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L154)

___

### total\_buy\_quantity

• **total\_buy\_quantity**: `number`

Total buy quantity

#### Inherited from

Omit.total\_buy\_quantity

#### Defined in

[lib/ticker/types.ts:95](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L95)

___

### total\_sell\_quantity

• **total\_sell\_quantity**: `number`

Total sell quantity

#### Inherited from

Omit.total\_sell\_quantity

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

#### Inherited from

Omit.volume\_traded

#### Defined in

[lib/ticker/types.ts:91](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L91)
