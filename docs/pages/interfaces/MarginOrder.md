[kiteconnect-ts](../README.md) / [Exports](../modules.md) / MarginOrder

# Interface: MarginOrder

## Table of contents

### Properties

- [exchange](MarginOrder.md#exchange)
- [order\_type](MarginOrder.md#order_type)
- [price](MarginOrder.md#price)
- [product](MarginOrder.md#product)
- [quantity](MarginOrder.md#quantity)
- [tradingsymbol](MarginOrder.md#tradingsymbol)
- [transaction\_type](MarginOrder.md#transaction_type)
- [trigger\_price](MarginOrder.md#trigger_price)
- [variety](MarginOrder.md#variety)

## Properties

### exchange

• **exchange**: [`Exchange`](../modules.md#exchange)

Name of the exchange(eg. NSE, BSE, NFO, CDS, MCX)

#### Defined in

[lib/connect/types.ts:1077](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1077)

___

### order\_type

• **order\_type**: [`OrderType`](../modules.md#ordertype)

Order type (MARKET, LIMIT etc.)

#### Defined in

[lib/connect/types.ts:1097](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1097)

___

### price

• **price**: `number`

Price at which the order is going to be placed (LIMIT orders)

#### Defined in

[lib/connect/types.ts:1105](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1105)

___

### product

• **product**: [`Product`](../modules.md#product)

Margin product to use for the order

#### Defined in

[lib/connect/types.ts:1093](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1093)

___

### quantity

• **quantity**: `number`

Quantity of the order

#### Defined in

[lib/connect/types.ts:1101](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1101)

___

### tradingsymbol

• **tradingsymbol**: `string`

Trading symbol of the instrument

#### Defined in

[lib/connect/types.ts:1081](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1081)

___

### transaction\_type

• **transaction\_type**: [`TransactionType`](../modules.md#transactiontype)

eg. BUY, SELL

#### Defined in

[lib/connect/types.ts:1085](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1085)

___

### trigger\_price

• **trigger\_price**: `number`

Trigger price (for SL, SL-M, CO orders)

#### Defined in

[lib/connect/types.ts:1109](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1109)

___

### variety

• **variety**: [`Variety`](../modules.md#variety)

Order variety (regular, amo, bo, co etc.)

#### Defined in

[lib/connect/types.ts:1089](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1089)
