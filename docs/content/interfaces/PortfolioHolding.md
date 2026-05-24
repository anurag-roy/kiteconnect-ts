# Interface: PortfolioHolding

Single holdings response.

## Properties

### authorised\_date

> **authorised\_date**: `string`

Date on which user can sell required holding stock

***

### authorised\_quantity

> **authorised\_quantity**: `number`

Quantity authorised at the depository for sale

***

### average\_price

> **average\_price**: `number`

Average price at which the net holding quantity was acquired

***

### close\_price

> **close\_price**: `number`

Closing price of the instrument from the last trading day

***

### collateral\_quantity

> **collateral\_quantity**: `number`

Quantity used as collateral

***

### collateral\_type

> **collateral\_type**: `string`

Type of collateral

***

### day\_change

> **day\_change**: `number`

Day's change in absolute value for the stock

***

### day\_change\_percentage

> **day\_change\_percentage**: `number`

Day's change in percentage for the stock

***

### discrepancy

> **discrepancy**: `boolean`

Indicates whether holding has any price discrepancy

***

### exchange

> **exchange**: `string`

Exchange

***

### instrument\_token

> **instrument\_token**: `number`

Unique instrument identifier (used for WebSocket subscriptions)

***

### isin

> **isin**: `string`

The standard ISIN representing stocks listed on multiple exchanges

***

### last\_price

> **last\_price**: `number`

Last traded market price of the instrument

***

### opening\_quantity

> **opening\_quantity**: `number`

Quantity carried forward over night

***

### pnl

> **pnl**: `number`

Net returns on the stock; Profit and loss

***

### price

> **price**: `number`

***

### product

> **product**: `string`

Margin product applied to the holding

***

### quantity

> **quantity**: `number`

Net quantity (T+1 + realised)

***

### realised\_quantity

> **realised\_quantity**: `number`

Quantity delivered to Demat

***

### t1\_quantity

> **t1\_quantity**: `number`

Quantity on T+1 day after order execution. Stocks are usually delivered into DEMAT accounts on T+2

***

### tradingsymbol

> **tradingsymbol**: `string`

Exchange tradingsymbol of the instrument

***

### used\_quantity

> **used\_quantity**: `number`

Quantity sold from the net holding quantity
