[kiteconnect-ts](../README.md) / [Exports](../modules.md) / GTTParams

# Interface: GTTParams

## Table of contents

### Properties

- [exchange](GTTParams.md#exchange)
- [last\_price](GTTParams.md#last_price)
- [orders](GTTParams.md#orders)
- [tradingsymbol](GTTParams.md#tradingsymbol)
- [trigger\_type](GTTParams.md#trigger_type)
- [trigger\_values](GTTParams.md#trigger_values)

## Properties

### exchange

• **exchange**: [`Exchange`](../modules.md#exchange)

Exchange in which instrument is listed (NSE, BSE, NFO, BFO, CDS, MCX).

#### Defined in

[lib/connect/types.ts:1124](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1124)

___

### last\_price

• **last\_price**: `number`

Price at which trigger is created. This is usually the last price of the instrument.

#### Defined in

[lib/connect/types.ts:1132](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1132)

___

### orders

• **orders**: { `order_type`: [`OrderType`](../modules.md#ordertype) ; `price`: `number` ; `product`: [`Product`](../modules.md#product) ; `quantity`: `number` ; `transaction_type`: [`TransactionType`](../modules.md#transactiontype)  }[]

#### Defined in

[lib/connect/types.ts:1133](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1133)

___

### tradingsymbol

• **tradingsymbol**: `string`

Tradingsymbol of the instrument (ex. RELIANCE, INFY).

#### Defined in

[lib/connect/types.ts:1120](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1120)

___

### trigger\_type

• **trigger\_type**: [`TriggerType`](../modules.md#triggertype)

GTT type, its either self.GTT_TYPE_OCO or self.GTT_TYPE_SINGLE.

#### Defined in

[lib/connect/types.ts:1116](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1116)

___

### trigger\_values

• **trigger\_values**: `number`[]

List of trigger values, number of items depends on trigger type.

#### Defined in

[lib/connect/types.ts:1128](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1128)
