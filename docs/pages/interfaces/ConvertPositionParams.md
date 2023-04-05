# Interface: ConvertPositionParams

## Properties

### exchange

 **exchange**: [`Exchange`](../modules.md#exchange)

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

___

### new\_product

 **new\_product**: [`Product`](../modules.md#product)

New Product code (NRML, MIS, CNC).

___

### old\_product

 **old\_product**: [`Product`](../modules.md#product)

Current product code (NRML, MIS, CNC).

___

### position\_type

 **position\_type**: ``"overnight"`` \| ``"day"``

Position type (overnight, day).

___

### quantity

 **quantity**: `string`

Position quantity

___

### tradingsymbol

 **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

___

### transaction\_type

 **transaction\_type**: [`TransactionType`](../modules.md#transactiontype)

Transaction type (BUY or SELL).
