# Interface: OrderUpdatePostback

Data returned on `order_update` event

## Hierarchy

- [`Order`](Order.md)

  ↳ **`OrderUpdatePostback`**

## Properties

### average\_price

 **average\_price**: `number`

Average price at which the order was executed (only for COMPLETE orders)

#### Inherited from

[Order](Order.md).[average_price](Order.md#average_price)

___

### cancelled\_quantity

 **cancelled\_quantity**: `number`

Quantity that's cancelled

#### Inherited from

[Order](Order.md).[cancelled_quantity](Order.md#cancelled_quantity)

___

### disclosed\_quantity

 **disclosed\_quantity**: `number`

Quantity to be disclosed (may be different from actual quantity) to the public exchange orderbook. Only for equities

#### Inherited from

[Order](Order.md).[disclosed_quantity](Order.md#disclosed_quantity)

___

### exchange

 **exchange**: `string`

Exchange

#### Inherited from

[Order](Order.md).[exchange](Order.md#exchange)

___

### exchange\_order\_id

 **exchange\_order\_id**: ``null`` \| `string`

Exchange generated order ID. Orders that don't reach the exchange have null IDs

#### Inherited from

[Order](Order.md).[exchange_order_id](Order.md#exchange_order_id)

___

### exchange\_timestamp

 **exchange\_timestamp**: ``null`` \| `Date`

Date at which the order was registered by the exchange. Orders that don't reach the exchange have null timestamps

#### Inherited from

[Order](Order.md).[exchange_timestamp](Order.md#exchange_timestamp)

___

### exchange\_update\_timestamp

 **exchange\_update\_timestamp**: ``null`` \| `string`

Timestamp at which an order's state changed at the exchange

#### Inherited from

[Order](Order.md).[exchange_update_timestamp](Order.md#exchange_update_timestamp)

___

### filled\_quantity

 **filled\_quantity**: `number`

Quantity that's been filled

#### Inherited from

[Order](Order.md).[filled_quantity](Order.md#filled_quantity)

___

### guid

 **guid**: `string`

Unusable request id to avoid order duplication

#### Inherited from

[Order](Order.md).[guid](Order.md#guid)

___

### instrument\_token

 **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument. Used for subscribing to live market data over WebSocket

#### Inherited from

[Order](Order.md).[instrument_token](Order.md#instrument_token)

___

### market\_protection

 **market\_protection**: `number`

0 or 1

#### Inherited from

[Order](Order.md).[market_protection](Order.md#market_protection)

___

### meta

 **meta**: `string` \| `object`

Map of arbitrary fields that the system may attach to an order.

#### Inherited from

[Order](Order.md).[meta](Order.md#meta)

___

### order\_id

 **order\_id**: `string`

Unique order ID

#### Inherited from

[Order](Order.md).[order_id](Order.md#order_id)

___

### order\_timestamp

 **order\_timestamp**: `Date`

Date at which the order was registered by the API

#### Inherited from

[Order](Order.md).[order_timestamp](Order.md#order_timestamp)

___

### order\_type

 **order\_type**: `string`

Order type (MARKET, LIMIT etc.)

#### Inherited from

[Order](Order.md).[order_type](Order.md#order_type)

___

### parent\_order\_id

 **parent\_order\_id**: ``null`` \| `string`

Order ID of the parent order (only applicable in case of multi-legged orders like CO)

#### Inherited from

[Order](Order.md).[parent_order_id](Order.md#parent_order_id)

___

### pending\_quantity

 **pending\_quantity**: `number`

Pending quantity to be filled

#### Inherited from

[Order](Order.md).[pending_quantity](Order.md#pending_quantity)

___

### placed\_by

 **placed\_by**: `string`

ID of the user that placed the order. This may different from the user's ID for orders placed outside of Kite, for instance, by dealers at the brokerage using dealer terminals

#### Inherited from

[Order](Order.md).[placed_by](Order.md#placed_by)

___

### price

 **price**: `number`

Price at which the order was placed (LIMIT orders)

#### Inherited from

[Order](Order.md).[price](Order.md#price)

___

### product

 **product**: `string`

Margin product to use for the order (margins are blocked based on this) ?

#### Inherited from

[Order](Order.md).[product](Order.md#product)

___

### quantity

 **quantity**: `number`

Quantity ordered

#### Inherited from

[Order](Order.md).[quantity](Order.md#quantity)

___

### status

 **status**: `string`

Current status of the order. Most common values or COMPLETE, REJECTED, CANCELLED, and OPEN. There may be other values as well.

#### Inherited from

[Order](Order.md).[status](Order.md#status)

___

### status\_message

 **status\_message**: ``null`` \| `string`

Textual description of the order's status. Failed orders come with human readable explanation

#### Inherited from

[Order](Order.md).[status_message](Order.md#status_message)

___

### status\_message\_raw

 **status\_message\_raw**: ``null`` \| `string`

Raw textual description of the failed order's status, as received from the OMS

#### Inherited from

[Order](Order.md).[status_message_raw](Order.md#status_message_raw)

___

### tag

 **tag**: ``null`` \| `string`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

#### Inherited from

[Order](Order.md).[tag](Order.md#tag)

___

### tags

 `Optional` **tags**: `string`[]

#### Inherited from

[Order](Order.md).[tags](Order.md#tags)

___

### tradingsymbol

 **tradingsymbol**: `string`

Exchange tradingsymbol of the of the instrument

#### Inherited from

[Order](Order.md).[tradingsymbol](Order.md#tradingsymbol)

___

### transaction\_type

 **transaction\_type**: `string`

BUY or SELL

#### Inherited from

[Order](Order.md).[transaction_type](Order.md#transaction_type)

___

### trigger\_price

 **trigger\_price**: `number`

Trigger price (for SL, SL-M, CO orders)

#### Inherited from

[Order](Order.md).[trigger_price](Order.md#trigger_price)

___

### validity

 **validity**: `string`

Order validity

#### Inherited from

[Order](Order.md).[validity](Order.md#validity)

___

### variety

 **variety**: `string`

Order variety (regular, amo, co etc.)

#### Inherited from

[Order](Order.md).[variety](Order.md#variety)
