# Interface: Position

Single Position response.

## Properties

### average\_price

 **average\_price**: `number`

Average price at which the net position quantity was acquired

___

### buy\_m2m

 **buy\_m2m**: `number`

Mark to market returns on the bought quantities

___

### buy\_price

 **buy\_price**: `number`

Average price at which quantities were bought

___

### buy\_quantity

 **buy\_quantity**: `number`

Quantity bought and added to the position

___

### buy\_value

 **buy\_value**: `number`

Net value of the bought quantities

___

### close\_price

 **close\_price**: `number`

Closing price of the instrument from the last trading day

___

### day\_buy\_price

 **day\_buy\_price**: `number`

Average price at which quantities were bought during the day

___

### day\_buy\_quantity

 **day\_buy\_quantity**: `number`

Quantity bought and added to the position during the day

___

### day\_buy\_value

 **day\_buy\_value**: `number`

Net value of the quantities bought during the day

___

### day\_sell\_price

 **day\_sell\_price**: `number`

Average price at which quantities were sold during the day

___

### day\_sell\_quantity

 **day\_sell\_quantity**: `number`

Quantity sold off from the position during the day

___

### day\_sell\_value

 **day\_sell\_value**: `number`

Net value of the quantities sold during the day

___

### exchange

 **exchange**: `string`

Exchange

___

### instrument\_token

 **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument. Used for subscribing to live market data over WebSocket

___

### last\_price

 **last\_price**: `number`

Last traded market price of the instrument

___

### m2m

 **m2m**: `number`

Mark to market returns (computed based on the last close and the last traded price)

___

### multiplier

 **multiplier**: `number`

The quantity/lot size multiplier used for calculating P&Ls.

___

### overnight\_quantity

 **overnight\_quantity**: `number`

Quantity held previously and carried forward over night

___

### pnl

 **pnl**: `number`

Net returns on the position; Profit and loss

___

### product

 **product**: `string`

Margin product applied to the position

___

### quantity

 **quantity**: `number`

Quantity held

___

### realised

 **realised**: `number`

Realised intraday returns

___

### sell\_m2m

 **sell\_m2m**: `number`

Mark to market returns on the sold quantities

___

### sell\_price

 **sell\_price**: `number`

Average price at which quantities were sold

___

### sell\_quantity

 **sell\_quantity**: `number`

Quantity sold off from the position

___

### sell\_value

 **sell\_value**: `number`

Net value of the sold quantities

___

### tradingsymbol

 **tradingsymbol**: `string`

Exchange tradingsymbol of the instrument

___

### unrealised

 **unrealised**: `number`

Unrealised intraday returns

___

### value

 **value**: `number`

Net value of the position
