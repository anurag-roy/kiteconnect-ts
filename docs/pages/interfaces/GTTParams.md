# Interface: GTTParams

## Properties

### exchange

 **exchange**: [`Exchange`](../modules.md#exchange)

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

___

### last\_price

 **last\_price**: `number`

Price at which trigger is created. This is usually the last price of the instrument.

___

### orders

 **orders**: { `order_type`: [`OrderType`](../modules.md#ordertype) ; `price`: `number` ; `product`: [`Product`](../modules.md#product) ; `quantity`: `number` ; `transaction_type`: [`TransactionType`](../modules.md#transactiontype)  }[]

___

### tradingsymbol

 **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

___

### trigger\_type

 **trigger\_type**: [`TriggerType`](../modules.md#triggertype)

GTT type, its either self.GTT_TYPE_OCO or self.GTT_TYPE_SINGLE.

___

### trigger\_values

 **trigger\_values**: `number`[]

List of trigger values, number of items depends on trigger type.
