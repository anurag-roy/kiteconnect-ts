# Interface: PlaceOrderParams

## Properties

### auction\_number

 `Optional` **auction\_number**: `number`

A unique identifier for a particular auction

___

### disclosed\_quantity

 `Optional` **disclosed\_quantity**: `number`

Disclosed quantity

___

### exchange

 **exchange**: [`Exchange`](../modules.md#exchange)

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

___

### iceberg\_legs

 `Optional` **iceberg\_legs**: `number`

Total number of legs for iceberg order variety

___

### iceberg\_quantity

 `Optional` **iceberg\_quantity**: `number`

Split quantity for each iceberg leg order

___

### order\_type

 **order\_type**: [`OrderType`](../modules.md#ordertype)

Order type (LIMIT, SL, SL-M, MARKET).

___

### price

 `Optional` **price**: `number`

Order Price

___

### product

 **product**: [`Product`](../modules.md#product)

Product code (NRML, MIS, CNC).

___

### quantity

 **quantity**: `number`

Order quantity

___

### squareoff

 `Optional` **squareoff**: `number`

Square off value (only for bracket orders)

___

### stoploss

 `Optional` **stoploss**: `number`

Stoploss value (only for bracket orders)

___

### tag

 `Optional` **tag**: `string`

An optional tag to apply to an order to identify it (alphanumeric, max 20 chars)

___

### tradingsymbol

 **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

___

### trailing\_stoploss

 `Optional` **trailing\_stoploss**: `number`

Trailing stoploss value (only for bracket orders)

___

### transaction\_type

 **transaction\_type**: [`TransactionType`](../modules.md#transactiontype)

Transaction type (BUY or SELL).

___

### trigger\_price

 `Optional` **trigger\_price**: `number`

Trigger price

___

### validity

 `Optional` **validity**: [`Validity`](../modules.md#validity)

Order validity (DAY, IOC).

___

### validity\_ttl

 `Optional` **validity\_ttl**: `number`

Order validity in minutes for TTL validity orders
