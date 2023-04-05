[kiteconnect-ts](../README.md) / [Exports](../modules.md) / Instrument

# Interface: Instrument

## Table of contents

### Properties

- [exchange](Instrument.md#exchange)
- [exchange\_token](Instrument.md#exchange_token)
- [expiry](Instrument.md#expiry)
- [instrument\_token](Instrument.md#instrument_token)
- [instrument\_type](Instrument.md#instrument_type)
- [last\_price](Instrument.md#last_price)
- [lot\_size](Instrument.md#lot_size)
- [name](Instrument.md#name)
- [segment](Instrument.md#segment)
- [strike](Instrument.md#strike)
- [tick\_size](Instrument.md#tick_size)
- [tradingsymbol](Instrument.md#tradingsymbol)

## Properties

### exchange

• **exchange**: [`Exchange`](../modules.md#exchange)

Exchange

#### Defined in

[lib/connect/types.ts:309](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L309)

___

### exchange\_token

• **exchange\_token**: `string`

The numerical identifier issued by the exchange representing the instrument.

#### Defined in

[lib/connect/types.ts:269](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L269)

___

### expiry

• **expiry**: `Date`

Expiry date (for derivatives)

#### Defined in

[lib/connect/types.ts:285](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L285)

___

### instrument\_token

• **instrument\_token**: `string`

Numerical identifier used for subscribing to live market quotes with the WebSocket API.

#### Defined in

[lib/connect/types.ts:265](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L265)

___

### instrument\_type

• **instrument\_type**: ``"EQ"`` \| ``"FUT"`` \| ``"CE"`` \| ``"PE"``

EQ, FUT, CE, PE

#### Defined in

[lib/connect/types.ts:301](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L301)

___

### last\_price

• **last\_price**: `number`

Last traded market price

#### Defined in

[lib/connect/types.ts:281](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L281)

___

### lot\_size

• **lot\_size**: `number`

Quantity of a single lot

#### Defined in

[lib/connect/types.ts:297](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L297)

___

### name

• **name**: `string`

Name of the company (for equity instruments)

#### Defined in

[lib/connect/types.ts:277](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L277)

___

### segment

• **segment**: `string`

Segment the instrument belongs to

#### Defined in

[lib/connect/types.ts:305](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L305)

___

### strike

• **strike**: `number`

Strike (for options)

#### Defined in

[lib/connect/types.ts:289](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L289)

___

### tick\_size

• **tick\_size**: `number`

Value of a single price tick

#### Defined in

[lib/connect/types.ts:293](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L293)

___

### tradingsymbol

• **tradingsymbol**: `string`

Exchange tradingsymbol of the instrument

#### Defined in

[lib/connect/types.ts:273](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L273)
