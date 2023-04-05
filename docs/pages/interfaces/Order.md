# Interface: Order

## Properties

### average\_price

 **average\_price**: `number`

Average price at which the order was executed (only for COMPLETE orders)

___

### cancelled\_quantity

 **cancelled\_quantity**: `number`

Quantity that's cancelled

___

### disclosed\_quantity

 **disclosed\_quantity**: `number`

Quantity to be disclosed (may be different from actual quantity) to the public exchange orderbook. Only for equities

___

### exchange

 **exchange**: `string`

Exchange

___

### exchange\_order\_id

 **exchange\_order\_id**: ``null`` \| `string`

Exchange generated order ID. Orders that don't reach the exchange have null IDs

___

### exchange\_timestamp

 **exchange\_timestamp**: ``null`` \| `Date`

Date at which the order was registered by the exchange. Orders that don't reach the exchange have null timestamps

___

### exchange\_update\_timestamp

 **exchange\_update\_timestamp**: ``null`` \| `string`

Timestamp at which an order's state changed at the exchange

___

### filled\_quantity

 **filled\_quantity**: `number`

Quantity that's been filled

___

### guid

 **guid**: `string`

Unusable request id to avoid order duplication

___

### instrument\_token

 **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument. Used for subscribing to live market data over WebSocket

___

### market\_protection

 **market\_protection**: `number`

0 or 1

___

### meta

 **meta**: `string` \| `object`

Map of arbitrary fields that the system may attach to an order.

___

### order\_id

 **order\_id**: `string`

Unique order ID

___

### order\_timestamp

 **order\_timestamp**: `Date`

Date at which the order was registered by the API

___

### order\_type

 **order\_type**: `string`

Order type (MARKET, LIMIT etc.)

___

### parent\_order\_id

 **parent\_order\_id**: ``null`` \| `string`

Order ID of the parent order (only applicable in case of multi-legged orders like CO)

___

### pending\_quantity

 **pending\_quantity**: `number`

Pending quantity to be filled

___

### placed\_by

 **placed\_by**: `string`

ID of the user that placed the order. This may different from the user's ID for orders placed outside of Kite, for instance, by dealers at the brokerage using dealer terminals

___

### price

 **price**: `number`

Price at which the order was placed (LIMIT orders)

___

### product

 **product**: `string`

Margin product to use for the order (margins are blocked based on this) ?

___

### quantity

 **quantity**: `number`

Quantity ordered

___

### status

 **status**: `string`

Current status of the order. Most common values or COMPLETE, REJECTED, CANCELLED, and OPEN. There may be other values as well.

___

### status\_message

 **status\_message**: ``null`` \| `string`

Textual description of the order's status. Failed orders come with human readable explanation

___

### status\_message\_raw

 **status\_message\_raw**: ``null`` \| `string`

Raw textual description of the failed order's status, as received from the OMS

___

### tag

 **tag**: ``null`` \| `string`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

___

### tags

 `Optional` **tags**: `string`[]

___

### tradingsymbol

 **tradingsymbol**: `string`

Exchange tradingsymbol of the of the instrument

___

### transaction\_type

 **transaction\_type**: `string`

BUY or SELL

___

### trigger\_price

 **trigger\_price**: `number`

Trigger price (for SL, SL-M, CO orders)

___

### validity

 **validity**: `string`

Order validity

___

### variety

 **variety**: `string`

Order variety (regular, amo, co etc.)
