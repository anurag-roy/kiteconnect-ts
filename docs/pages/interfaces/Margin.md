[kiteconnect-ts](../README.md) / [Exports](../modules.md) / Margin

# Interface: Margin

## Hierarchy

- [`CompactMargin`](CompactMargin.md)

  ↳ **`Margin`**

## Table of contents

### Properties

- [additional](Margin.md#additional)
- [bo](Margin.md#bo)
- [cash](Margin.md#cash)
- [charges](Margin.md#charges)
- [exchange](Margin.md#exchange)
- [exposure](Margin.md#exposure)
- [leverage](Margin.md#leverage)
- [option\_premium](Margin.md#option_premium)
- [pnl](Margin.md#pnl)
- [span](Margin.md#span)
- [total](Margin.md#total)
- [tradingsymbol](Margin.md#tradingsymbol)
- [type](Margin.md#type)
- [var](Margin.md#var)

## Properties

### additional

• **additional**: `number`

Additional margins

#### Defined in

[lib/connect/types.ts:993](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L993)

___

### bo

• **bo**: `number`

BO margins

#### Defined in

[lib/connect/types.ts:997](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L997)

___

### cash

• **cash**: `number`

Cash credit

#### Defined in

[lib/connect/types.ts:1001](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1001)

___

### charges

• **charges**: `Object`

The breakdown of the various charges that will be applied to an order

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `brokerage` | `number` | The brokerage charge for a particular trade |
| `exchange_turnover_charge` | `number` | Charge levied by the exchange on the total turnover of the day |
| `gst` | { `cgst`: `number` ; `igst`: `number` ; `sgst`: `number` ; `total`: `number`  } | - |
| `gst.cgst` | `number` | Central Goods and Services Tax levied by the government |
| `gst.igst` | `number` | Integrated Goods and Services Tax levied by the government |
| `gst.sgst` | `number` | State Goods and Services Tax levied by the government |
| `gst.total` | `number` | Total GST |
| `sebi_turnover_charge` | `number` | Charge levied by SEBI on the total turnover of the day |
| `stamp_duty` | `number` | Duty levied on the transaction value by Government of India |
| `total` | `number` | Total charges |
| `transaction_tax` | `number` | Tax levied for each transaction on the exchanges |
| `transaction_tax_type` | `string` | Type of transaction tax |

#### Defined in

[lib/connect/types.ts:1023](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1023)

___

### exchange

• **exchange**: `string`

Name of the exchange

#### Inherited from

[CompactMargin](CompactMargin.md).[exchange](CompactMargin.md#exchange)

#### Defined in

[lib/connect/types.ts:970](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L970)

___

### exposure

• **exposure**: `number`

Exposure margins

#### Defined in

[lib/connect/types.ts:985](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L985)

___

### leverage

• **leverage**: `number`

Margin leverage allowed for the trade

#### Defined in

[lib/connect/types.ts:1019](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1019)

___

### option\_premium

• **option\_premium**: `number`

Option premium

#### Defined in

[lib/connect/types.ts:989](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L989)

___

### pnl

• **pnl**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `realised` | `number` | Realised profit and loss |
| `unrealised` | `number` | Unrealised profit and loss |

#### Defined in

[lib/connect/types.ts:1006](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1006)

___

### span

• **span**: `number`

SPAN margins

#### Defined in

[lib/connect/types.ts:981](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L981)

___

### total

• **total**: `number`

Total margin block

#### Inherited from

[CompactMargin](CompactMargin.md).[total](CompactMargin.md#total)

#### Defined in

[lib/connect/types.ts:974](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L974)

___

### tradingsymbol

• **tradingsymbol**: `string`

Trading symbol of the instrument

#### Inherited from

[CompactMargin](CompactMargin.md).[tradingsymbol](CompactMargin.md#tradingsymbol)

#### Defined in

[lib/connect/types.ts:966](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L966)

___

### type

• **type**: `string`

equity/commodity

#### Inherited from

[CompactMargin](CompactMargin.md).[type](CompactMargin.md#type)

#### Defined in

[lib/connect/types.ts:962](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L962)

___

### var

• **var**: `number`

VAR

#### Defined in

[lib/connect/types.ts:1005](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1005)
