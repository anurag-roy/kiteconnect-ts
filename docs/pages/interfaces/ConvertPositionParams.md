[kiteconnect-ts](../README.md) / [Exports](../modules.md) / ConvertPositionParams

# Interface: ConvertPositionParams

## Table of contents

### Properties

- [exchange](ConvertPositionParams.md#exchange)
- [new\_product](ConvertPositionParams.md#new_product)
- [old\_product](ConvertPositionParams.md#old_product)
- [position\_type](ConvertPositionParams.md#position_type)
- [quantity](ConvertPositionParams.md#quantity)
- [tradingsymbol](ConvertPositionParams.md#tradingsymbol)
- [transaction\_type](ConvertPositionParams.md#transaction_type)

## Properties

### exchange

• **exchange**: [`Exchange`](../modules.md#exchange)

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

#### Defined in

[lib/connect/types.ts:1202](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1202)

___

### new\_product

• **new\_product**: [`Product`](../modules.md#product)

New Product code (NRML, MIS, CNC).

#### Defined in

[lib/connect/types.ts:1226](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1226)

___

### old\_product

• **old\_product**: [`Product`](../modules.md#product)

Current product code (NRML, MIS, CNC).

#### Defined in

[lib/connect/types.ts:1222](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1222)

___

### position\_type

• **position\_type**: ``"overnight"`` \| ``"day"``

Position type (overnight, day).

#### Defined in

[lib/connect/types.ts:1214](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1214)

___

### quantity

• **quantity**: `string`

Position quantity

#### Defined in

[lib/connect/types.ts:1218](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1218)

___

### tradingsymbol

• **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

#### Defined in

[lib/connect/types.ts:1206](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1206)

___

### transaction\_type

• **transaction\_type**: [`TransactionType`](../modules.md#transactiontype)

Transaction type (BUY or SELL).

#### Defined in

[lib/connect/types.ts:1210](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1210)
