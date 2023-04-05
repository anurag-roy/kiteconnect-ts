[kiteconnect-ts](../README.md) / [Exports](../modules.md) / MFHolding

# Interface: MFHolding

## Table of contents

### Properties

- [average\_price](MFHolding.md#average_price)
- [folio](MFHolding.md#folio)
- [fund](MFHolding.md#fund)
- [last\_price](MFHolding.md#last_price)
- [last\_price\_date](MFHolding.md#last_price_date)
- [pledged\_quantity](MFHolding.md#pledged_quantity)
- [pnl](MFHolding.md#pnl)
- [quantity](MFHolding.md#quantity)
- [tradingsymbol](MFHolding.md#tradingsymbol)

## Properties

### average\_price

• **average\_price**: `number`

Allotted NAV price for a completed BUY order; Selling NAV price for completed SELL order

#### Defined in

[lib/connect/types.ts:407](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L407)

___

### folio

• **folio**: ``null`` \| `string`

Folio number generated by AMC for the completed purchase order (null incase of SELL order)

#### Defined in

[lib/connect/types.ts:403](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L403)

___

### fund

• **fund**: `string`

Name of the fund

#### Defined in

[lib/connect/types.ts:420](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L420)

___

### last\_price

• **last\_price**: `number`

Last available NAV price of the fund

#### Defined in

[lib/connect/types.ts:411](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L411)

___

### last\_price\_date

• **last\_price\_date**: `string`

Date for which last NAV is available

#### Defined in

[lib/connect/types.ts:415](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L415)

___

### pledged\_quantity

• **pledged\_quantity**: `number`

#### Defined in

[lib/connect/types.ts:416](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L416)

___

### pnl

• **pnl**: `number`

Net returns of the holding. Based on the last available NAV price.

#### Defined in

[lib/connect/types.ts:428](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L428)

___

### quantity

• **quantity**: `number`

Quantity available in the client's holding for this ISIN.

#### Defined in

[lib/connect/types.ts:432](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L432)

___

### tradingsymbol

• **tradingsymbol**: `string`

ISIN of the fund.

#### Defined in

[lib/connect/types.ts:424](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L424)