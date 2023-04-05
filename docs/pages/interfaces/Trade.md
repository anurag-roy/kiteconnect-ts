[kiteconnect-ts](../README.md) / [Exports](../modules.md) / Trade

# Interface: Trade

## Table of contents

### Properties

- [average\_price](Trade.md#average_price)
- [exchange](Trade.md#exchange)
- [exchange\_order\_id](Trade.md#exchange_order_id)
- [exchange\_timestamp](Trade.md#exchange_timestamp)
- [fill\_timestamp](Trade.md#fill_timestamp)
- [filled](Trade.md#filled)
- [instrument\_token](Trade.md#instrument_token)
- [order\_id](Trade.md#order_id)
- [order\_timestamp](Trade.md#order_timestamp)
- [product](Trade.md#product)
- [quantity](Trade.md#quantity)
- [trade\_id](Trade.md#trade_id)
- [tradingsymbol](Trade.md#tradingsymbol)
- [transaction\_type](Trade.md#transaction_type)

## Properties

### average\_price

• **average\_price**: `number`

Price at which the quantity was filled

#### Defined in

[lib/connect/types.ts:819](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L819)

___

### exchange

• **exchange**: `string`

Exchange

#### Defined in

[lib/connect/types.ts:802](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L802)

___

### exchange\_order\_id

• **exchange\_order\_id**: ``null`` \| `string`

Exchange generated order ID

#### Defined in

[lib/connect/types.ts:794](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L794)

___

### exchange\_timestamp

• **exchange\_timestamp**: `Date`

Date at which the order was registered by the exchange

#### Defined in

[lib/connect/types.ts:836](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L836)

___

### fill\_timestamp

• **fill\_timestamp**: `Date`

Date at which the trade was filled at the exchange

#### Defined in

[lib/connect/types.ts:828](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L828)

___

### filled

• **filled**: `number`

Filled quantity

#### Defined in

[lib/connect/types.ts:823](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L823)

___

### instrument\_token

• **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument.
Used for subscribing to live market data over WebSocket

#### Defined in

[lib/connect/types.ts:807](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L807)

___

### order\_id

• **order\_id**: `string`

Unique order ID

#### Defined in

[lib/connect/types.ts:790](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L790)

___

### order\_timestamp

• **order\_timestamp**: `Date`

Date at which the order was registered by the API

#### Defined in

[lib/connect/types.ts:832](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L832)

___

### product

• **product**: `string`

Margin product to use for the order (margins are blocked based on this) ?

#### Defined in

[lib/connect/types.ts:815](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L815)

___

### quantity

• **quantity**: `number`

#### Defined in

[lib/connect/types.ts:824](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L824)

___

### trade\_id

• **trade\_id**: `string`

Exchange generated trade ID

#### Defined in

[lib/connect/types.ts:786](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L786)

___

### tradingsymbol

• **tradingsymbol**: `string`

Exchange tradingsymbol of the of the instrument

#### Defined in

[lib/connect/types.ts:798](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L798)

___

### transaction\_type

• **transaction\_type**: `string`

BUY or SELL

#### Defined in

[lib/connect/types.ts:811](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L811)
