# Interface: GTTParams

Params for placing a GTT.

## Properties

### exchange

 **exchange**: ``"NSE"`` \| ``"BSE"`` \| ``"NFO"`` \| ``"CDS"`` \| ``"BCD"`` \| ``"BFO"`` \| ``"MCX"``

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

___

### last\_price

 **last\_price**: `number`

Price at which trigger is created. This is usually the last price of the instrument.

___

### orders

 **orders**: \{ `order_type`: ``"LIMIT"`` \| ``"MARKET"`` \| ``"SL"`` \| ``"SL-M"`` ; `price`: `number` ; `product`: ``"NRML"`` \| ``"MIS"`` \| ``"CNC"`` \| ``"CO"`` \| ``"BO"`` ; `quantity`: `number` ; `transaction_type`: ``"BUY"`` \| ``"SELL"``  }[]

___

### tradingsymbol

 **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

___

### trigger\_type

 **trigger\_type**: ``"two-leg"`` \| ``"single"``

GTT type, its either KiteConnect.GTT_TYPE_OCO or KiteConnect.GTT_TYPE_SINGLE.

___

### trigger\_values

 **trigger\_values**: `number`[]

List of trigger values, number of items depends on trigger type.
