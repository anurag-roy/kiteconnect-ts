# Interface: MarginOrder

An order in the Margin API calculator.

## Properties

### exchange

> **exchange**: `"NSE"` \| `"BSE"` \| `"NFO"` \| `"CDS"` \| `"BCD"` \| `"BFO"` \| `"MCX"`

Name of the exchange(eg. NSE, BSE, NFO, CDS, MCX)

***

### order\_type

> **order\_type**: `"LIMIT"` \| `"MARKET"` \| `"SL"` \| `"SL-M"`

Order type (MARKET, LIMIT etc.)

***

### price?

> `optional` **price?**: `number`

Price at which the order is going to be placed (LIMIT orders)

***

### product

> **product**: `"NRML"` \| `"MIS"` \| `"CNC"` \| `"CO"` \| `"BO"`

Margin product to use for the order

***

### quantity

> **quantity**: `number`

Quantity of the order

***

### tradingsymbol

> **tradingsymbol**: `string`

Trading symbol of the instrument

***

### transaction\_type

> **transaction\_type**: `"BUY"` \| `"SELL"`

eg. BUY, SELL

***

### trigger\_price?

> `optional` **trigger\_price?**: `number`

Trigger price (for SL, SL-M, CO orders)

***

### variety

> **variety**: `"amo"` \| `"auction"` \| `"bo"` \| `"co"` \| `"iceberg"` \| `"regular"`

Order variety (regular, amo, bo, co etc.)
