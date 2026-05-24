# Interface: PlaceOrderParams

Params to place an order.

## Properties

### auction\_number?

> `optional` **auction\_number?**: `number`

A unique identifier for a particular auction

***

### autoslice?

> `optional` **autoslice?**: `boolean`

Set to `true` to allow automatic order slicing for quantities exceeding freeze limits.

***

### disclosed\_quantity?

> `optional` **disclosed\_quantity?**: `number`

Disclosed quantity

***

### exchange

> **exchange**: `"NSE"` \| `"BSE"` \| `"NFO"` \| `"CDS"` \| `"BCD"` \| `"BFO"` \| `"MCX"`

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

***

### iceberg\_legs?

> `optional` **iceberg\_legs?**: `number`

Total number of legs for iceberg order variety

***

### iceberg\_quantity?

> `optional` **iceberg\_quantity?**: `number`

Split quantity for each iceberg leg order

***

### market\_protection?

> `optional` **market\_protection?**: `number`

Set to `-1` for system-default market protection,
or a percentage value greater than `0` up to `100`.

***

### order\_type

> **order\_type**: `"LIMIT"` \| `"MARKET"` \| `"SL"` \| `"SL-M"`

Order type (LIMIT, SL, SL-M, MARKET).

***

### price?

> `optional` **price?**: `number`

Order Price

***

### product

> **product**: `"NRML"` \| `"MIS"` \| `"CNC"` \| `"CO"` \| `"BO"`

Product code (NRML, MIS, CNC).

***

### quantity

> **quantity**: `number`

Order quantity

***

### squareoff?

> `optional` **squareoff?**: `number`

Square off value (only for bracket orders)

***

### stoploss?

> `optional` **stoploss?**: `number`

Stoploss value (only for bracket orders)

***

### tag?

> `optional` **tag?**: `string`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

***

### tradingsymbol

> **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

***

### trailing\_stoploss?

> `optional` **trailing\_stoploss?**: `number`

Trailing stoploss value (only for bracket orders)

***

### transaction\_type

> **transaction\_type**: `"BUY"` \| `"SELL"`

Transaction type (BUY or SELL).

***

### trigger\_price?

> `optional` **trigger\_price?**: `number`

Trigger price

***

### validity?

> `optional` **validity?**: `"DAY"` \| `"IOC"` \| `"TTL"`

Order validity (DAY, IOC).

***

### validity\_ttl?

> `optional` **validity\_ttl?**: `number`

Order validity in minutes for TTL validity orders
