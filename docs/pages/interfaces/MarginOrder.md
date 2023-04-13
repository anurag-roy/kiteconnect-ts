# Interface: MarginOrder

An order in the Margin API calculator.

## Properties

### exchange

 **exchange**: [`Exchange`](../modules.md#exchange)

Name of the exchange(eg. NSE, BSE, NFO, CDS, MCX)

___

### order\_type

 **order\_type**: [`OrderType`](../modules.md#ordertype)

Order type (MARKET, LIMIT etc.)

___

### price

 **price**: `number`

Price at which the order is going to be placed (LIMIT orders)

___

### product

 **product**: [`Product`](../modules.md#product)

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

 **transaction\_type**: [`TransactionType`](../modules.md#transactiontype)

eg. BUY, SELL

___

### trigger\_price

 **trigger\_price**: `number`

Trigger price (for SL, SL-M, CO orders)

___

### variety

 **variety**: [`Variety`](../modules.md#variety)

Order variety (regular, amo, bo, co etc.)
