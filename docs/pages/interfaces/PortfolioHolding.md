# Interface: PortfolioHolding

Single holdings response.

## Properties

### authorised\_date

 **authorised\_date**: `string`

Date on which user can sell required holding stock

___

### authorised\_quantity

 **authorised\_quantity**: `number`

Quantity authorised at the depository for sale

___

### average\_price

 **average\_price**: `number`

Average price at which the net holding quantity was acquired

___

### close\_price

 **close\_price**: `number`

Closing price of the instrument from the last trading day

___

### collateral\_quantity

 **collateral\_quantity**: `number`

Quantity used as collateral

___

### collateral\_type

 **collateral\_type**: `string`

Type of collateral

___

### day\_change

 **day\_change**: `number`

Day's change in absolute value for the stock

___

### day\_change\_percentage

 **day\_change\_percentage**: `number`

Day's change in percentage for the stock

___

### discrepancy

 **discrepancy**: `boolean`

Indicates whether holding has any price discrepancy

___

### exchange

 **exchange**: `string`

Exchange

___

### instrument\_token

 **instrument\_token**: `number`

Unique instrument identifier (used for WebSocket subscriptions)

___

### isin

 **isin**: `string`

The standard ISIN representing stocks listed on multiple exchanges

___

### last\_price

 **last\_price**: `number`

Last traded market price of the instrument

___

### opening\_quantity

 **opening\_quantity**: `number`

Quantity carried forward over night

___

### pnl

 **pnl**: `number`

Net returns on the stock; Profit and loss

___

### price

 **price**: `number`

___

### product

 **product**: `string`

Margin product applied to the holding

___

### quantity

 **quantity**: `number`

Net quantity (T+1 + realised)

___

### realised\_quantity

 **realised\_quantity**: `number`

Quantity delivered to Demat

___

### t1\_quantity

 **t1\_quantity**: `number`

Quantity on T+1 day after order execution. Stocks are usually delivered into DEMAT accounts on T+2

___

### tradingsymbol

 **tradingsymbol**: `string`

Exchange tradingsymbol of the instrument

___

### used\_quantity

 **used\_quantity**: `number`

Quantity sold from the net holding quantity
