[kiteconnect-ts](../README.md) / [Exports](../modules.md) / PortfolioHolding

# Interface: PortfolioHolding

## Table of contents

### Properties

- [authorised\_date](PortfolioHolding.md#authorised_date)
- [authorised\_quantity](PortfolioHolding.md#authorised_quantity)
- [average\_price](PortfolioHolding.md#average_price)
- [close\_price](PortfolioHolding.md#close_price)
- [collateral\_quantity](PortfolioHolding.md#collateral_quantity)
- [collateral\_type](PortfolioHolding.md#collateral_type)
- [day\_change](PortfolioHolding.md#day_change)
- [day\_change\_percentage](PortfolioHolding.md#day_change_percentage)
- [discrepancy](PortfolioHolding.md#discrepancy)
- [exchange](PortfolioHolding.md#exchange)
- [instrument\_token](PortfolioHolding.md#instrument_token)
- [isin](PortfolioHolding.md#isin)
- [last\_price](PortfolioHolding.md#last_price)
- [opening\_quantity](PortfolioHolding.md#opening_quantity)
- [pnl](PortfolioHolding.md#pnl)
- [price](PortfolioHolding.md#price)
- [product](PortfolioHolding.md#product)
- [quantity](PortfolioHolding.md#quantity)
- [realised\_quantity](PortfolioHolding.md#realised_quantity)
- [t1\_quantity](PortfolioHolding.md#t1_quantity)
- [tradingsymbol](PortfolioHolding.md#tradingsymbol)
- [used\_quantity](PortfolioHolding.md#used_quantity)

## Properties

### authorised\_date

• **authorised\_date**: `string`

Date on which user can sell required holding stock

#### Defined in

[lib/connect/types.ts:218](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L218)

___

### authorised\_quantity

• **authorised\_quantity**: `number`

Quantity authorised at the depository for sale

#### Defined in

[lib/connect/types.ts:214](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L214)

___

### average\_price

• **average\_price**: `number`

Average price at which the net holding quantity was acquired

#### Defined in

[lib/connect/types.ts:238](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L238)

___

### close\_price

• **close\_price**: `number`

Closing price of the instrument from the last trading day

#### Defined in

[lib/connect/types.ts:246](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L246)

___

### collateral\_quantity

• **collateral\_quantity**: `number`

Quantity used as collateral

#### Defined in

[lib/connect/types.ts:226](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L226)

___

### collateral\_type

• **collateral\_type**: `string`

Type of collateral

#### Defined in

[lib/connect/types.ts:230](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L230)

___

### day\_change

• **day\_change**: `number`

Day's change in absolute value for the stock

#### Defined in

[lib/connect/types.ts:254](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L254)

___

### day\_change\_percentage

• **day\_change\_percentage**: `number`

Day's change in percentage for the stock

#### Defined in

[lib/connect/types.ts:258](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L258)

___

### discrepancy

• **discrepancy**: `boolean`

Indicates whether holding has any price discrepancy

#### Defined in

[lib/connect/types.ts:234](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L234)

___

### exchange

• **exchange**: `string`

Exchange

#### Defined in

[lib/connect/types.ts:181](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L181)

___

### instrument\_token

• **instrument\_token**: `number`

Unique instrument identifier (used for WebSocket subscriptions)

#### Defined in

[lib/connect/types.ts:185](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L185)

___

### isin

• **isin**: `string`

The standard ISIN representing stocks listed on multiple exchanges

#### Defined in

[lib/connect/types.ts:189](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L189)

___

### last\_price

• **last\_price**: `number`

Last traded market price of the instrument

#### Defined in

[lib/connect/types.ts:242](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L242)

___

### opening\_quantity

• **opening\_quantity**: `number`

Quantity carried forward over night

#### Defined in

[lib/connect/types.ts:222](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L222)

___

### pnl

• **pnl**: `number`

Net returns on the stock; Profit and loss

#### Defined in

[lib/connect/types.ts:250](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L250)

___

### price

• **price**: `number`

#### Defined in

[lib/connect/types.ts:194](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L194)

___

### product

• **product**: `string`

Margin product applied to the holding

#### Defined in

[lib/connect/types.ts:193](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L193)

___

### quantity

• **quantity**: `number`

Net quantity (T+1 + realised)

#### Defined in

[lib/connect/types.ts:198](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L198)

___

### realised\_quantity

• **realised\_quantity**: `number`

Quantity delivered to Demat

#### Defined in

[lib/connect/types.ts:210](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L210)

___

### t1\_quantity

• **t1\_quantity**: `number`

Quantity on T+1 day after order execution. Stocks are usually delivered into DEMAT accounts on T+2

#### Defined in

[lib/connect/types.ts:206](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L206)

___

### tradingsymbol

• **tradingsymbol**: `string`

Exchange tradingsymbol of the instrument

#### Defined in

[lib/connect/types.ts:177](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L177)

___

### used\_quantity

• **used\_quantity**: `number`

Quantity sold from the net holding quantity

#### Defined in

[lib/connect/types.ts:202](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L202)
