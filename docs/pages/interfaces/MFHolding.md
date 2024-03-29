# Interface: MFHolding

Single Mutual Fund holding.

## Properties

### average\_price

 **average\_price**: `number`

Allotted NAV price for a completed BUY order; Selling NAV price for completed SELL order

___

### folio

 **folio**: ``null`` \| `string`

Folio number generated by AMC for the completed purchase order (null incase of SELL order)

___

### fund

 **fund**: `string`

Name of the fund

___

### last\_price

 **last\_price**: `number`

Last available NAV price of the fund

___

### last\_price\_date

 **last\_price\_date**: `string`

Date for which last NAV is available

___

### pledged\_quantity

 **pledged\_quantity**: `number`

___

### pnl

 **pnl**: `number`

Net returns of the holding. Based on the last available NAV price.

___

### quantity

 **quantity**: `number`

Quantity available in the client's holding for this ISIN.

___

### tradingsymbol

 **tradingsymbol**: `string`

ISIN of the fund.
