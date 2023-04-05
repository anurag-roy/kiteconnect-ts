[kiteconnect-ts](../README.md) / [Exports](../modules.md) / TickLtp

# Interface: TickLtp

LTP Packet

## Table of contents

### Properties

- [instrument\_token](TickLtp.md#instrument_token)
- [last\_price](TickLtp.md#last_price)
- [mode](TickLtp.md#mode)
- [tradable](TickLtp.md#tradable)

## Properties

### instrument\_token

• **instrument\_token**: `number`

Instrument token

#### Defined in

[lib/ticker/types.ts:16](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L16)

___

### last\_price

• **last\_price**: `number`

Last traded price

#### Defined in

[lib/ticker/types.ts:20](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L20)

___

### mode

• **mode**: ``"ltp"``

Packet mode is 'ltp'

#### Defined in

[lib/ticker/types.ts:12](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L12)

___

### tradable

• **tradable**: `boolean`

Whether the instrument is tradable or not. `false` for Indices

#### Defined in

[lib/ticker/types.ts:8](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/types.ts#L8)
