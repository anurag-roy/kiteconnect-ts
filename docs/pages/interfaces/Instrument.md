# Interface: Instrument

Single Instrument response.

## Properties

### exchange

 **exchange**: ``"NSE"`` \| ``"BSE"`` \| ``"NFO"`` \| ``"CDS"`` \| ``"BCD"`` \| ``"BFO"`` \| ``"MCX"``

Exchange

___

### exchange\_token

 **exchange\_token**: `string`

The numerical identifier issued by the exchange representing the instrument.

___

### expiry

 **expiry**: `Date`

Expiry date (for derivatives)

___

### instrument\_token

 **instrument\_token**: `string`

Numerical identifier used for subscribing to live market quotes with the WebSocket API.

___

### instrument\_type

 **instrument\_type**: ``"EQ"`` \| ``"FUT"`` \| ``"CE"`` \| ``"PE"``

EQ, FUT, CE, PE

___

### last\_price

 **last\_price**: `number`

Last traded market price

___

### lot\_size

 **lot\_size**: `number`

Quantity of a single lot

___

### name

 **name**: `string`

Name of the company (for equity instruments)

___

### segment

 **segment**: `string`

Segment the instrument belongs to

___

### strike

 **strike**: `number`

Strike (for options)

___

### tick\_size

 **tick\_size**: `number`

Value of a single price tick

___

### tradingsymbol

 **tradingsymbol**: `string`

Exchange tradingsymbol of the instrument
