# Interface: MFInstrument

Single Mutual Fund instrument response.

## Properties

### amc

> **amc**: `string`

AMC code as per the exchange

***

### dividend\_type

> **dividend\_type**: `string`

`growth` or `payout`

***

### last\_price

> **last\_price**: `number`

Last available NAV price of the fund

***

### last\_price\_date

> **last\_price\_date**: `Date`

Last available NAV's date

***

### minimum\_additional\_purchase\_amount

> **minimum\_additional\_purchase\_amount**: `number`

Minimum additional BUY amount

***

### minimum\_purchase\_amount

> **minimum\_purchase\_amount**: `number`

Minimum purchase amount for the first BUY

***

### minimum\_redemption\_quantity

> **minimum\_redemption\_quantity**: `number`

Minimum SELL quantity

***

### name

> **name**: `string`

Fund name

***

### plan

> **plan**: `string`

`direct` or `regular`

***

### purchase\_allowed

> **purchase\_allowed**: `boolean`

***

### purchase\_amount\_multiplier

> **purchase\_amount\_multiplier**: `number`

Buy amount should be in multiple of this value

***

### redemption\_allowed

> **redemption\_allowed**: `boolean`

***

### redemption\_quantity\_multiplier

> **redemption\_quantity\_multiplier**: `number`

SELL quantity multiple

***

### scheme\_type

> **scheme\_type**: `string`

`equity`, `debt`, `elss`

***

### settlement\_type

> **settlement\_type**: `string`

Settlement type of the fund (`T1`, `T2` etc.)

***

### tradingsymbol

> **tradingsymbol**: `string`

ISIN of the fund
