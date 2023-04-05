[kiteconnect-ts](../README.md) / [Exports](../modules.md) / PlaceOrderParams

# Interface: PlaceOrderParams

## Table of contents

### Properties

- [auction\_number](PlaceOrderParams.md#auction_number)
- [disclosed\_quantity](PlaceOrderParams.md#disclosed_quantity)
- [exchange](PlaceOrderParams.md#exchange)
- [iceberg\_legs](PlaceOrderParams.md#iceberg_legs)
- [iceberg\_quantity](PlaceOrderParams.md#iceberg_quantity)
- [order\_type](PlaceOrderParams.md#order_type)
- [price](PlaceOrderParams.md#price)
- [product](PlaceOrderParams.md#product)
- [quantity](PlaceOrderParams.md#quantity)
- [squareoff](PlaceOrderParams.md#squareoff)
- [stoploss](PlaceOrderParams.md#stoploss)
- [tag](PlaceOrderParams.md#tag)
- [tradingsymbol](PlaceOrderParams.md#tradingsymbol)
- [trailing\_stoploss](PlaceOrderParams.md#trailing_stoploss)
- [transaction\_type](PlaceOrderParams.md#transaction_type)
- [trigger\_price](PlaceOrderParams.md#trigger_price)
- [validity](PlaceOrderParams.md#validity)
- [validity\_ttl](PlaceOrderParams.md#validity_ttl)

## Properties

### auction\_number

• `Optional` **auction\_number**: `number`

A unique identifier for a particular auction

#### Defined in

[lib/connect/types.ts:1462](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1462)

___

### disclosed\_quantity

• `Optional` **disclosed\_quantity**: `number`

Disclosed quantity

#### Defined in

[lib/connect/types.ts:1430](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1430)

___

### exchange

• **exchange**: [`Exchange`](../modules.md#exchange)

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

#### Defined in

[lib/connect/types.ts:1398](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1398)

___

### iceberg\_legs

• `Optional` **iceberg\_legs**: `number`

Total number of legs for iceberg order variety

#### Defined in

[lib/connect/types.ts:1454](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1454)

___

### iceberg\_quantity

• `Optional` **iceberg\_quantity**: `number`

Split quantity for each iceberg leg order

#### Defined in

[lib/connect/types.ts:1458](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1458)

___

### order\_type

• **order\_type**: [`OrderType`](../modules.md#ordertype)

Order type (LIMIT, SL, SL-M, MARKET).

#### Defined in

[lib/connect/types.ts:1418](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1418)

___

### price

• `Optional` **price**: `number`

Order Price

#### Defined in

[lib/connect/types.ts:1426](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1426)

___

### product

• **product**: [`Product`](../modules.md#product)

Product code (NRML, MIS, CNC).

#### Defined in

[lib/connect/types.ts:1414](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1414)

___

### quantity

• **quantity**: `number`

Order quantity

#### Defined in

[lib/connect/types.ts:1410](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1410)

___

### squareoff

• `Optional` **squareoff**: `number`

Square off value (only for bracket orders)

#### Defined in

[lib/connect/types.ts:1438](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1438)

___

### stoploss

• `Optional` **stoploss**: `number`

Stoploss value (only for bracket orders)

#### Defined in

[lib/connect/types.ts:1442](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1442)

___

### tag

• `Optional` **tag**: `string`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

#### Defined in

[lib/connect/types.ts:1466](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1466)

___

### tradingsymbol

• **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

#### Defined in

[lib/connect/types.ts:1402](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1402)

___

### trailing\_stoploss

• `Optional` **trailing\_stoploss**: `number`

Trailing stoploss value (only for bracket orders)

#### Defined in

[lib/connect/types.ts:1446](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1446)

___

### transaction\_type

• **transaction\_type**: [`TransactionType`](../modules.md#transactiontype)

Transaction type (BUY or SELL).

#### Defined in

[lib/connect/types.ts:1406](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1406)

___

### trigger\_price

• `Optional` **trigger\_price**: `number`

Trigger price

#### Defined in

[lib/connect/types.ts:1434](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1434)

___

### validity

• `Optional` **validity**: [`Validity`](../modules.md#validity)

Order validity (DAY, IOC).

#### Defined in

[lib/connect/types.ts:1422](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1422)

___

### validity\_ttl

• `Optional` **validity\_ttl**: `number`

Order validity in minutes for TTL validity orders

#### Defined in

[lib/connect/types.ts:1450](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1450)
