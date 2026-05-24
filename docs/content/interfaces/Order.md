# Interface: Order

Single Order response.

## Extended by

- [`OrderUpdatePostback`](OrderUpdatePostback.md)

## Properties

### average\_price

> **average\_price**: `number`

Average price at which the order was executed (only for COMPLETE orders)

***

### cancelled\_quantity

> **cancelled\_quantity**: `number`

Quantity that's cancelled

***

### disclosed\_quantity

> **disclosed\_quantity**: `number`

Quantity to be disclosed (may be different from actual quantity) to the public exchange orderbook. Only for equities

***

### exchange

> **exchange**: `string`

Exchange

***

### exchange\_order\_id

> **exchange\_order\_id**: `string` \| `null`

Exchange generated order ID. Orders that don't reach the exchange have null IDs

***

### exchange\_timestamp

> **exchange\_timestamp**: `Date` \| `null`

Date at which the order was registered by the exchange. Orders that don't reach the exchange have null timestamps

***

### exchange\_update\_timestamp

> **exchange\_update\_timestamp**: `string` \| `null`

Timestamp at which an order's state changed at the exchange

***

### filled\_quantity

> **filled\_quantity**: `number`

Quantity that's been filled

***

### guid

> **guid**: `string`

Unusable request id to avoid order duplication

***

### instrument\_token

> **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument. Used for subscribing to live market data over WebSocket

***

### market\_protection

> **market\_protection**: `number`

0 or 1

***

### meta

> **meta**: `string` \| `object`

Map of arbitrary fields that the system may attach to an order.

***

### order\_id

> **order\_id**: `string`

Unique order ID

***

### order\_timestamp

> **order\_timestamp**: `Date`

Date at which the order was registered by the API

***

### order\_type

> **order\_type**: `string`

Order type (MARKET, LIMIT etc.)

***

### parent\_order\_id

> **parent\_order\_id**: `string` \| `null`

Order ID of the parent order (only applicable in case of multi-legged orders like CO)

***

### pending\_quantity

> **pending\_quantity**: `number`

Pending quantity to be filled

***

### placed\_by

> **placed\_by**: `string`

ID of the user that placed the order. This may different from the user's ID for orders placed outside of Kite, for instance, by dealers at the brokerage using dealer terminals

***

### price

> **price**: `number`

Price at which the order was placed (LIMIT orders)

***

### product

> **product**: `string`

Margin product to use for the order (margins are blocked based on this) ?

***

### quantity

> **quantity**: `number`

Quantity ordered

***

### status

> **status**: `string`

Current status of the order. Most common values or COMPLETE, REJECTED, CANCELLED, and OPEN. There may be other values as well.

***

### status\_message

> **status\_message**: `string` \| `null`

Textual description of the order's status. Failed orders come with human readable explanation

***

### status\_message\_raw

> **status\_message\_raw**: `string` \| `null`

Raw textual description of the failed order's status, as received from the OMS

***

### tag

> **tag**: `string` \| `null`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

***

### tags?

> `optional` **tags?**: `string`[]

***

### tradingsymbol

> **tradingsymbol**: `string`

Exchange tradingsymbol of the of the instrument

***

### transaction\_type

> **transaction\_type**: `string`

BUY or SELL

***

### trigger\_price

> **trigger\_price**: `number`

Trigger price (for SL, SL-M, CO orders)

***

### validity

> **validity**: `string`

Order validity

***

### variety

> **variety**: `string`

Order variety (regular, amo, co etc.)
