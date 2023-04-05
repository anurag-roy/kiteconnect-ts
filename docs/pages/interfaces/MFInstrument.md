[kiteconnect-ts](../README.md) / [Exports](../modules.md) / MFInstrument

# Interface: MFInstrument

## Table of contents

### Properties

- [amc](MFInstrument.md#amc)
- [dividend\_type](MFInstrument.md#dividend_type)
- [last\_price](MFInstrument.md#last_price)
- [last\_price\_date](MFInstrument.md#last_price_date)
- [minimum\_additional\_purchase\_amount](MFInstrument.md#minimum_additional_purchase_amount)
- [minimum\_purchase\_amount](MFInstrument.md#minimum_purchase_amount)
- [minimum\_redemption\_quantity](MFInstrument.md#minimum_redemption_quantity)
- [name](MFInstrument.md#name)
- [plan](MFInstrument.md#plan)
- [purchase\_allowed](MFInstrument.md#purchase_allowed)
- [purchase\_amount\_multiplier](MFInstrument.md#purchase_amount_multiplier)
- [redemption\_allowed](MFInstrument.md#redemption_allowed)
- [redemption\_quantity\_multiplier](MFInstrument.md#redemption_quantity_multiplier)
- [scheme\_type](MFInstrument.md#scheme_type)
- [settlement\_type](MFInstrument.md#settlement_type)
- [tradingsymbol](MFInstrument.md#tradingsymbol)

## Properties

### amc

• **amc**: `string`

AMC code as per the exchange

#### Defined in

[lib/connect/types.ts:443](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L443)

___

### dividend\_type

• **dividend\_type**: `string`

`growth` or `payout`

#### Defined in

[lib/connect/types.ts:473](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L473)

___

### last\_price

• **last\_price**: `number`

Last available NAV price of the fund

#### Defined in

[lib/connect/types.ts:489](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L489)

___

### last\_price\_date

• **last\_price\_date**: `Date`

Last available NAV's date

#### Defined in

[lib/connect/types.ts:493](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L493)

___

### minimum\_additional\_purchase\_amount

• **minimum\_additional\_purchase\_amount**: `number`

Minimum additional BUY amount

#### Defined in

[lib/connect/types.ts:461](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L461)

___

### minimum\_purchase\_amount

• **minimum\_purchase\_amount**: `number`

Minimum purchase amount for the first BUY

#### Defined in

[lib/connect/types.ts:453](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L453)

___

### minimum\_redemption\_quantity

• **minimum\_redemption\_quantity**: `number`

Minimum SELL quantity

#### Defined in

[lib/connect/types.ts:465](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L465)

___

### name

• **name**: `string`

Fund name

#### Defined in

[lib/connect/types.ts:447](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L447)

___

### plan

• **plan**: `string`

`direct` or `regular`

#### Defined in

[lib/connect/types.ts:481](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L481)

___

### purchase\_allowed

• **purchase\_allowed**: `boolean`

#### Defined in

[lib/connect/types.ts:448](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L448)

___

### purchase\_amount\_multiplier

• **purchase\_amount\_multiplier**: `number`

Buy amount should be in multiple of this value

#### Defined in

[lib/connect/types.ts:457](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L457)

___

### redemption\_allowed

• **redemption\_allowed**: `boolean`

#### Defined in

[lib/connect/types.ts:449](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L449)

___

### redemption\_quantity\_multiplier

• **redemption\_quantity\_multiplier**: `number`

SELL quantity multiple

#### Defined in

[lib/connect/types.ts:469](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L469)

___

### scheme\_type

• **scheme\_type**: `string`

`equity`, `debt`, `elss`

#### Defined in

[lib/connect/types.ts:477](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L477)

___

### settlement\_type

• **settlement\_type**: `string`

Settlement type of the fund (`T1`, `T2` etc.)

#### Defined in

[lib/connect/types.ts:485](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L485)

___

### tradingsymbol

• **tradingsymbol**: `string`

ISIN of the fund

#### Defined in

[lib/connect/types.ts:439](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L439)
