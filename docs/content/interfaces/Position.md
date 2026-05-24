# Interface: Position

Single Position response.

## Properties

### average\_price

> **average\_price**: `number`

Average price at which the net position quantity was acquired

***

### buy\_m2m

> **buy\_m2m**: `number`

Mark to market returns on the bought quantities

***

### buy\_price

> **buy\_price**: `number`

Average price at which quantities were bought

***

### buy\_quantity

> **buy\_quantity**: `number`

Quantity bought and added to the position

***

### buy\_value

> **buy\_value**: `number`

Net value of the bought quantities

***

### close\_price

> **close\_price**: `number`

Closing price of the instrument from the last trading day

***

### day\_buy\_price

> **day\_buy\_price**: `number`

Average price at which quantities were bought during the day

***

### day\_buy\_quantity

> **day\_buy\_quantity**: `number`

Quantity bought and added to the position during the day

***

### day\_buy\_value

> **day\_buy\_value**: `number`

Net value of the quantities bought during the day

***

### day\_sell\_price

> **day\_sell\_price**: `number`

Average price at which quantities were sold during the day

***

### day\_sell\_quantity

> **day\_sell\_quantity**: `number`

Quantity sold off from the position during the day

***

### day\_sell\_value

> **day\_sell\_value**: `number`

Net value of the quantities sold during the day

***

### exchange

> **exchange**: `string`

Exchange

***

### instrument\_token

> **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument. Used for subscribing to live market data over WebSocket

***

### last\_price

> **last\_price**: `number`

Last traded market price of the instrument

***

### m2m

> **m2m**: `number`

Mark to market returns (computed based on the last close and the last traded price)

***

### multiplier

> **multiplier**: `number`

The quantity/lot size multiplier used for calculating P&Ls.

***

### overnight\_quantity

> **overnight\_quantity**: `number`

Quantity held previously and carried forward over night

***

### pnl

> **pnl**: `number`

Net returns on the position; Profit and loss

***

### product

> **product**: `string`

Margin product applied to the position

***

### quantity

> **quantity**: `number`

Quantity held

***

### realised

> **realised**: `number`

Realised intraday returns

***

### sell\_m2m

> **sell\_m2m**: `number`

Mark to market returns on the sold quantities

***

### sell\_price

> **sell\_price**: `number`

Average price at which quantities were sold

***

### sell\_quantity

> **sell\_quantity**: `number`

Quantity sold off from the position

***

### sell\_value

> **sell\_value**: `number`

Net value of the sold quantities

***

### tradingsymbol

> **tradingsymbol**: `string`

Exchange tradingsymbol of the instrument

***

### unrealised

> **unrealised**: `number`

Unrealised intraday returns

***

### value

> **value**: `number`

Net value of the position
