# Interface: MFInstrument

## Properties

### amc

 **amc**: `string`

AMC code as per the exchange

___

### dividend\_type

 **dividend\_type**: `string`

`growth` or `payout`

___

### last\_price

 **last\_price**: `number`

Last available NAV price of the fund

___

### last\_price\_date

 **last\_price\_date**: `Date`

Last available NAV's date

___

### minimum\_additional\_purchase\_amount

 **minimum\_additional\_purchase\_amount**: `number`

Minimum additional BUY amount

___

### minimum\_purchase\_amount

 **minimum\_purchase\_amount**: `number`

Minimum purchase amount for the first BUY

___

### minimum\_redemption\_quantity

 **minimum\_redemption\_quantity**: `number`

Minimum SELL quantity

___

### name

 **name**: `string`

Fund name

___

### plan

 **plan**: `string`

`direct` or `regular`

___

### purchase\_allowed

 **purchase\_allowed**: `boolean`

___

### purchase\_amount\_multiplier

 **purchase\_amount\_multiplier**: `number`

Buy amount should be in multiple of this value

___

### redemption\_allowed

 **redemption\_allowed**: `boolean`

___

### redemption\_quantity\_multiplier

 **redemption\_quantity\_multiplier**: `number`

SELL quantity multiple

___

### scheme\_type

 **scheme\_type**: `string`

`equity`, `debt`, `elss`

___

### settlement\_type

 **settlement\_type**: `string`

Settlement type of the fund (`T1`, `T2` etc.)

___

### tradingsymbol

 **tradingsymbol**: `string`

ISIN of the fund
