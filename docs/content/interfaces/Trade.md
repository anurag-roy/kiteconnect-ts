# Interface: Trade

Single Trade response.

## Properties

### average\_price

> **average\_price**: `number`

Price at which the quantity was filled

***

### exchange

> **exchange**: `string`

Exchange

***

### exchange\_order\_id

> **exchange\_order\_id**: `string` \| `null`

Exchange generated order ID

***

### exchange\_timestamp

> **exchange\_timestamp**: `Date`

Date at which the order was registered by the exchange

***

### fill\_timestamp

> **fill\_timestamp**: `Date`

Date at which the trade was filled at the exchange

***

### filled

> **filled**: `number`

Filled quantity

***

### instrument\_token

> **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument.
Used for subscribing to live market data over WebSocket

***

### order\_id

> **order\_id**: `string`

Unique order ID

***

### order\_timestamp

> **order\_timestamp**: `Date`

Date at which the order was registered by the API

***

### product

> **product**: `string`

Margin product to use for the order (margins are blocked based on this) ?

***

### quantity

> **quantity**: `number`

***

### trade\_id

> **trade\_id**: `string`

Exchange generated trade ID

***

### tradingsymbol

> **tradingsymbol**: `string`

Exchange tradingsymbol of the of the instrument

***

### transaction\_type

> **transaction\_type**: `string`

BUY or SELL
