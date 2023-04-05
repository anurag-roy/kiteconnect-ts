# Interface: Trade

## Properties

### average\_price

 **average\_price**: `number`

Price at which the quantity was filled

___

### exchange

 **exchange**: `string`

Exchange

___

### exchange\_order\_id

 **exchange\_order\_id**: ``null`` \| `string`

Exchange generated order ID

___

### exchange\_timestamp

 **exchange\_timestamp**: `Date`

Date at which the order was registered by the exchange

___

### fill\_timestamp

 **fill\_timestamp**: `Date`

Date at which the trade was filled at the exchange

___

### filled

 **filled**: `number`

Filled quantity

___

### instrument\_token

 **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument.
Used for subscribing to live market data over WebSocket

___

### order\_id

 **order\_id**: `string`

Unique order ID

___

### order\_timestamp

 **order\_timestamp**: `Date`

Date at which the order was registered by the API

___

### product

 **product**: `string`

Margin product to use for the order (margins are blocked based on this) ?

___

### quantity

 **quantity**: `number`

___

### trade\_id

 **trade\_id**: `string`

Exchange generated trade ID

___

### tradingsymbol

 **tradingsymbol**: `string`

Exchange tradingsymbol of the of the instrument

___

### transaction\_type

 **transaction\_type**: `string`

BUY or SELL
