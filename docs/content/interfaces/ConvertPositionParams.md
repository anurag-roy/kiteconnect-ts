# Interface: ConvertPositionParams

Params to convert a position.

## Properties

### exchange

> **exchange**: `"NSE"` \| `"BSE"` \| `"NFO"` \| `"CDS"` \| `"BCD"` \| `"BFO"` \| `"MCX"`

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

***

### new\_product

> **new\_product**: `"NRML"` \| `"MIS"` \| `"CNC"` \| `"CO"` \| `"BO"`

New Product code (NRML, MIS, CNC).

***

### old\_product

> **old\_product**: `"NRML"` \| `"MIS"` \| `"CNC"` \| `"CO"` \| `"BO"`

Current product code (NRML, MIS, CNC).

***

### position\_type

> **position\_type**: `"overnight"` \| `"day"`

Position type (overnight, day).

***

### quantity

> **quantity**: `string`

Position quantity

***

### tradingsymbol

> **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

***

### transaction\_type

> **transaction\_type**: `"BUY"` \| `"SELL"`

Transaction type (BUY or SELL).
