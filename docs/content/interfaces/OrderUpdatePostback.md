# Interface: OrderUpdatePostback

Data returned on `order_update` event

## Extends

- [`Order`](Order.md)

## Properties

### average\_price

> **average\_price**: `number`

Average price at which the order was executed (only for COMPLETE orders)

#### Inherited from

[`Order`](Order.md).[`average_price`](Order.md#average_price)

***

### cancelled\_quantity

> **cancelled\_quantity**: `number`

Quantity that's cancelled

#### Inherited from

[`Order`](Order.md).[`cancelled_quantity`](Order.md#cancelled_quantity)

***

### disclosed\_quantity

> **disclosed\_quantity**: `number`

Quantity to be disclosed (may be different from actual quantity) to the public exchange orderbook. Only for equities

#### Inherited from

[`Order`](Order.md).[`disclosed_quantity`](Order.md#disclosed_quantity)

***

### exchange

> **exchange**: `string`

Exchange

#### Inherited from

[`Order`](Order.md).[`exchange`](Order.md#exchange)

***

### exchange\_order\_id

> **exchange\_order\_id**: `string` \| `null`

Exchange generated order ID. Orders that don't reach the exchange have null IDs

#### Inherited from

[`Order`](Order.md).[`exchange_order_id`](Order.md#exchange_order_id)

***

### exchange\_timestamp

> **exchange\_timestamp**: `Date` \| `null`

Date at which the order was registered by the exchange. Orders that don't reach the exchange have null timestamps

#### Inherited from

[`Order`](Order.md).[`exchange_timestamp`](Order.md#exchange_timestamp)

***

### exchange\_update\_timestamp

> **exchange\_update\_timestamp**: `string` \| `null`

Timestamp at which an order's state changed at the exchange

#### Inherited from

[`Order`](Order.md).[`exchange_update_timestamp`](Order.md#exchange_update_timestamp)

***

### filled\_quantity

> **filled\_quantity**: `number`

Quantity that's been filled

#### Inherited from

[`Order`](Order.md).[`filled_quantity`](Order.md#filled_quantity)

***

### guid

> **guid**: `string`

Unusable request id to avoid order duplication

#### Inherited from

[`Order`](Order.md).[`guid`](Order.md#guid)

***

### instrument\_token

> **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument. Used for subscribing to live market data over WebSocket

#### Inherited from

[`Order`](Order.md).[`instrument_token`](Order.md#instrument_token)

***

### market\_protection

> **market\_protection**: `number`

0 or 1

#### Inherited from

[`Order`](Order.md).[`market_protection`](Order.md#market_protection)

***

### meta

> **meta**: `string` \| `object`

Map of arbitrary fields that the system may attach to an order.

#### Inherited from

[`Order`](Order.md).[`meta`](Order.md#meta)

***

### order\_id

> **order\_id**: `string`

Unique order ID

#### Inherited from

[`Order`](Order.md).[`order_id`](Order.md#order_id)

***

### order\_timestamp

> **order\_timestamp**: `Date`

Date at which the order was registered by the API

#### Inherited from

[`Order`](Order.md).[`order_timestamp`](Order.md#order_timestamp)

***

### order\_type

> **order\_type**: `string`

Order type (MARKET, LIMIT etc.)

#### Inherited from

[`Order`](Order.md).[`order_type`](Order.md#order_type)

***

### parent\_order\_id

> **parent\_order\_id**: `string` \| `null`

Order ID of the parent order (only applicable in case of multi-legged orders like CO)

#### Inherited from

[`Order`](Order.md).[`parent_order_id`](Order.md#parent_order_id)

***

### pending\_quantity

> **pending\_quantity**: `number`

Pending quantity to be filled

#### Inherited from

[`Order`](Order.md).[`pending_quantity`](Order.md#pending_quantity)

***

### placed\_by

> **placed\_by**: `string`

ID of the user that placed the order. This may different from the user's ID for orders placed outside of Kite, for instance, by dealers at the brokerage using dealer terminals

#### Inherited from

[`Order`](Order.md).[`placed_by`](Order.md#placed_by)

***

### price

> **price**: `number`

Price at which the order was placed (LIMIT orders)

#### Inherited from

[`Order`](Order.md).[`price`](Order.md#price)

***

### product

> **product**: `string`

Margin product to use for the order (margins are blocked based on this) ?

#### Inherited from

[`Order`](Order.md).[`product`](Order.md#product)

***

### quantity

> **quantity**: `number`

Quantity ordered

#### Inherited from

[`Order`](Order.md).[`quantity`](Order.md#quantity)

***

### status

> **status**: `string`

Current status of the order. Most common values or COMPLETE, REJECTED, CANCELLED, and OPEN. There may be other values as well.

#### Inherited from

[`Order`](Order.md).[`status`](Order.md#status)

***

### status\_message

> **status\_message**: `string` \| `null`

Textual description of the order's status. Failed orders come with human readable explanation

#### Inherited from

[`Order`](Order.md).[`status_message`](Order.md#status_message)

***

### status\_message\_raw

> **status\_message\_raw**: `string` \| `null`

Raw textual description of the failed order's status, as received from the OMS

#### Inherited from

[`Order`](Order.md).[`status_message_raw`](Order.md#status_message_raw)

***

### tag

> **tag**: `string` \| `null`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

#### Inherited from

[`Order`](Order.md).[`tag`](Order.md#tag)

***

### tags?

> `optional` **tags?**: `string`[]

#### Inherited from

[`Order`](Order.md).[`tags`](Order.md#tags)

***

### tradingsymbol

> **tradingsymbol**: `string`

Exchange tradingsymbol of the of the instrument

#### Inherited from

[`Order`](Order.md).[`tradingsymbol`](Order.md#tradingsymbol)

***

### transaction\_type

> **transaction\_type**: `string`

BUY or SELL

#### Inherited from

[`Order`](Order.md).[`transaction_type`](Order.md#transaction_type)

***

### trigger\_price

> **trigger\_price**: `number`

Trigger price (for SL, SL-M, CO orders)

#### Inherited from

[`Order`](Order.md).[`trigger_price`](Order.md#trigger_price)

***

### validity

> **validity**: `string`

Order validity

#### Inherited from

[`Order`](Order.md).[`validity`](Order.md#validity)

***

### variety

> **variety**: `string`

Order variety (regular, amo, co etc.)

#### Inherited from

[`Order`](Order.md).[`variety`](Order.md#variety)
