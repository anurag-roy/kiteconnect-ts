[kiteconnect-ts](../README.md) / [Exports](../modules.md) / Order

# Interface: Order

## Table of contents

### Properties

- [average\_price](Order.md#average_price)
- [cancelled\_quantity](Order.md#cancelled_quantity)
- [disclosed\_quantity](Order.md#disclosed_quantity)
- [exchange](Order.md#exchange)
- [exchange\_order\_id](Order.md#exchange_order_id)
- [exchange\_timestamp](Order.md#exchange_timestamp)
- [exchange\_update\_timestamp](Order.md#exchange_update_timestamp)
- [filled\_quantity](Order.md#filled_quantity)
- [guid](Order.md#guid)
- [instrument\_token](Order.md#instrument_token)
- [market\_protection](Order.md#market_protection)
- [meta](Order.md#meta)
- [order\_id](Order.md#order_id)
- [order\_timestamp](Order.md#order_timestamp)
- [order\_type](Order.md#order_type)
- [parent\_order\_id](Order.md#parent_order_id)
- [pending\_quantity](Order.md#pending_quantity)
- [placed\_by](Order.md#placed_by)
- [price](Order.md#price)
- [product](Order.md#product)
- [quantity](Order.md#quantity)
- [status](Order.md#status)
- [status\_message](Order.md#status_message)
- [status\_message\_raw](Order.md#status_message_raw)
- [tag](Order.md#tag)
- [tags](Order.md#tags)
- [tradingsymbol](Order.md#tradingsymbol)
- [transaction\_type](Order.md#transaction_type)
- [trigger\_price](Order.md#trigger_price)
- [validity](Order.md#validity)
- [variety](Order.md#variety)

## Properties

### average\_price

• **average\_price**: `number`

Average price at which the order was executed (only for COMPLETE orders)

#### Defined in

[lib/connect/types.ts:726](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L726)

___

### cancelled\_quantity

• **cancelled\_quantity**: `number`

Quantity that's cancelled

#### Defined in

[lib/connect/types.ts:762](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L762)

___

### disclosed\_quantity

• **disclosed\_quantity**: `number`

Quantity to be disclosed (may be different from actual quantity) to the public exchange orderbook. Only for equities

#### Defined in

[lib/connect/types.ts:738](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L738)

___

### exchange

• **exchange**: `string`

Exchange

#### Defined in

[lib/connect/types.ts:690](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L690)

___

### exchange\_order\_id

• **exchange\_order\_id**: ``null`` \| `string`

Exchange generated order ID. Orders that don't reach the exchange have null IDs

#### Defined in

[lib/connect/types.ts:670](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L670)

___

### exchange\_timestamp

• **exchange\_timestamp**: ``null`` \| `Date`

Date at which the order was registered by the exchange. Orders that don't reach the exchange have null timestamps

#### Defined in

[lib/connect/types.ts:746](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L746)

___

### exchange\_update\_timestamp

• **exchange\_update\_timestamp**: ``null`` \| `string`

Timestamp at which an order's state changed at the exchange

#### Defined in

[lib/connect/types.ts:750](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L750)

___

### filled\_quantity

• **filled\_quantity**: `number`

Quantity that's been filled

#### Defined in

[lib/connect/types.ts:734](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L734)

___

### guid

• **guid**: `string`

Unusable request id to avoid order duplication

#### Defined in

[lib/connect/types.ts:775](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L775)

___

### instrument\_token

• **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument. Used for subscribing to live market data over WebSocket

#### Defined in

[lib/connect/types.ts:694](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L694)

___

### market\_protection

• **market\_protection**: `number`

0 or 1

#### Defined in

[lib/connect/types.ts:779](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L779)

___

### meta

• **meta**: `string` \| `object`

Map of arbitrary fields that the system may attach to an order.

#### Defined in

[lib/connect/types.ts:766](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L766)

___

### order\_id

• **order\_id**: `string`

Unique order ID

#### Defined in

[lib/connect/types.ts:662](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L662)

___

### order\_timestamp

• **order\_timestamp**: `Date`

Date at which the order was registered by the API

#### Defined in

[lib/connect/types.ts:742](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L742)

___

### order\_type

• **order\_type**: `string`

Order type (MARKET, LIMIT etc.)

#### Defined in

[lib/connect/types.ts:702](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L702)

___

### parent\_order\_id

• **parent\_order\_id**: ``null`` \| `string`

Order ID of the parent order (only applicable in case of multi-legged orders like CO)

#### Defined in

[lib/connect/types.ts:666](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L666)

___

### pending\_quantity

• **pending\_quantity**: `number`

Pending quantity to be filled

#### Defined in

[lib/connect/types.ts:730](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L730)

___

### placed\_by

• **placed\_by**: `string`

ID of the user that placed the order. This may different from the user's ID for orders placed outside of Kite, for instance, by dealers at the brokerage using dealer terminals

#### Defined in

[lib/connect/types.ts:674](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L674)

___

### price

• **price**: `number`

Price at which the order was placed (LIMIT orders)

#### Defined in

[lib/connect/types.ts:714](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L714)

___

### product

• **product**: `string`

Margin product to use for the order (margins are blocked based on this) ?

#### Defined in

[lib/connect/types.ts:706](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L706)

___

### quantity

• **quantity**: `number`

Quantity ordered

#### Defined in

[lib/connect/types.ts:718](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L718)

___

### status

• **status**: `string`

Current status of the order. Most common values or COMPLETE, REJECTED, CANCELLED, and OPEN. There may be other values as well.

#### Defined in

[lib/connect/types.ts:682](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L682)

___

### status\_message

• **status\_message**: ``null`` \| `string`

Textual description of the order's status. Failed orders come with human readable explanation

#### Defined in

[lib/connect/types.ts:754](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L754)

___

### status\_message\_raw

• **status\_message\_raw**: ``null`` \| `string`

Raw textual description of the failed order's status, as received from the OMS

#### Defined in

[lib/connect/types.ts:758](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L758)

___

### tag

• **tag**: ``null`` \| `string`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

#### Defined in

[lib/connect/types.ts:770](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L770)

___

### tags

• `Optional` **tags**: `string`[]

#### Defined in

[lib/connect/types.ts:771](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L771)

___

### tradingsymbol

• **tradingsymbol**: `string`

Exchange tradingsymbol of the of the instrument

#### Defined in

[lib/connect/types.ts:686](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L686)

___

### transaction\_type

• **transaction\_type**: `string`

BUY or SELL

#### Defined in

[lib/connect/types.ts:698](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L698)

___

### trigger\_price

• **trigger\_price**: `number`

Trigger price (for SL, SL-M, CO orders)

#### Defined in

[lib/connect/types.ts:722](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L722)

___

### validity

• **validity**: `string`

Order validity

#### Defined in

[lib/connect/types.ts:710](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L710)

___

### variety

• **variety**: `string`

Order variety (regular, amo, co etc.)

#### Defined in

[lib/connect/types.ts:678](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L678)
