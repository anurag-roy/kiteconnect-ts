# Interface: GTTParams

Params for placing a GTT.

## Properties

### exchange

> **exchange**: `"NSE"` \| `"BSE"` \| `"NFO"` \| `"CDS"` \| `"BCD"` \| `"BFO"` \| `"MCX"`

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

***

### last\_price

> **last\_price**: `number`

Price at which trigger is created. This is usually the last price of the instrument.

***

### orders

> **orders**: `object`[]

#### order\_type

> **order\_type**: `"LIMIT"` \| `"MARKET"` \| `"SL"` \| `"SL-M"`

Order type (LIMIT, SL, SL-M, MARKET).

#### price

> **price**: `number`

Order price.

#### product

> **product**: `"NRML"` \| `"MIS"` \| `"CNC"` \| `"CO"` \| `"BO"`

Product code (NRML, MIS, CNC).

#### quantity

> **quantity**: `number`

Order quantity

#### transaction\_type

> **transaction\_type**: `"BUY"` \| `"SELL"`

Transaction type (BUY or SELL).

***

### tradingsymbol

> **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

***

### trigger\_type

> **trigger\_type**: `"two-leg"` \| `"single"`

GTT type, its either KiteConnect.GTT_TYPE_OCO or KiteConnect.GTT_TYPE_SINGLE.

***

### trigger\_values

> **trigger\_values**: `number`[]

List of trigger values, number of items depends on trigger type.
