# Interface: Instrument

Single Instrument response.

## Properties

### exchange

> **exchange**: `"NSE"` \| `"BSE"` \| `"NFO"` \| `"CDS"` \| `"BCD"` \| `"BFO"` \| `"MCX"`

Exchange

***

### exchange\_token

> **exchange\_token**: `string`

The numerical identifier issued by the exchange representing the instrument.

***

### expiry

> **expiry**: `Date`

Expiry date (for derivatives)

***

### instrument\_token

> **instrument\_token**: `string`

Numerical identifier used for subscribing to live market quotes with the WebSocket API.

***

### instrument\_type

> **instrument\_type**: `"EQ"` \| `"FUT"` \| `"CE"` \| `"PE"`

EQ, FUT, CE, PE

***

### last\_price

> **last\_price**: `number`

Last traded market price

***

### lot\_size

> **lot\_size**: `number`

Quantity of a single lot

***

### name

> **name**: `string`

Name of the company (for equity instruments)

***

### segment

> **segment**: `string`

Segment the instrument belongs to

***

### strike

> **strike**: `number`

Strike (for options)

***

### tick\_size

> **tick\_size**: `number`

Value of a single price tick

***

### tradingsymbol

> **tradingsymbol**: `string`

Exchange tradingsymbol of the instrument
