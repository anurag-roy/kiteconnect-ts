# Interface: MarginOrder

An order in the Margin API calculator.

## Properties

### exchange

 **exchange**: ``"NSE"`` \| ``"BSE"`` \| ``"NFO"`` \| ``"CDS"`` \| ``"BCD"`` \| ``"BFO"`` \| ``"MCX"``

Name of the exchange(eg. NSE, BSE, NFO, CDS, MCX)

___

### order\_type

 **order\_type**: ``"LIMIT"`` \| ``"MARKET"`` \| ``"SL"`` \| ``"SL-M"``

Order type (MARKET, LIMIT etc.)

___

### price

 **price**: `number`

Price at which the order is going to be placed (LIMIT orders)

___

### product

 **product**: ``"NRML"`` \| ``"MIS"`` \| ``"CNC"`` \| ``"CO"`` \| ``"BO"``

Margin product to use for the order

___

### quantity

 **quantity**: `number`

Quantity of the order

___

### tradingsymbol

 **tradingsymbol**: `string`

Trading symbol of the instrument

___

### transaction\_type

 **transaction\_type**: ``"BUY"`` \| ``"SELL"``

eg. BUY, SELL

___

### trigger\_price

 **trigger\_price**: `number`

Trigger price (for SL, SL-M, CO orders)

___

### variety

 **variety**: ``"amo"`` \| ``"auction"`` \| ``"bo"`` \| ``"co"`` \| ``"iceberg"`` \| ``"regular"``

Order variety (regular, amo, bo, co etc.)
