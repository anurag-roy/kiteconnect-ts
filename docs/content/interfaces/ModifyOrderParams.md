# Interface: ModifyOrderParams

Params to modify an order.

## Properties

### disclosed\_quantity?

> `optional` **disclosed\_quantity?**: `number`

Disclosed quantity

***

### market\_protection?

> `optional` **market\_protection?**: `number`

Set to `-1` for system-default market protection,
or a percentage value greater than `0` up to `100`.

***

### order\_type?

> `optional` **order\_type?**: `"LIMIT"` \| `"MARKET"` \| `"SL"` \| `"SL-M"`

Order type (NRML, SL, SL-M, MARKET).

***

### parent\_order\_id?

> `optional` **parent\_order\_id?**: `string`

Parent order id incase of multilegged orders.

***

### price?

> `optional` **price?**: `number`

Order Price

***

### quantity?

> `optional` **quantity?**: `number`

Order quantity

***

### trigger\_price?

> `optional` **trigger\_price?**: `number`

Trigger price

***

### validity?

> `optional` **validity?**: `"DAY"` \| `"IOC"` \| `"TTL"`

Order validity (DAY, IOC).
