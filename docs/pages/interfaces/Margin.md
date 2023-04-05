# Interface: Margin

## Hierarchy

- [`CompactMargin`](CompactMargin.md)

  ↳ **`Margin`**

## Properties

### additional

 **additional**: `number`

Additional margins

___

### bo

 **bo**: `number`

BO margins

___

### cash

 **cash**: `number`

Cash credit

___

### charges

 **charges**: `Object`

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

___

### exchange

 **exchange**: `string`

Name of the exchange

#### Inherited from

[CompactMargin](CompactMargin.md).[exchange](CompactMargin.md#exchange)

___

### exposure

 **exposure**: `number`

Exposure margins

___

### leverage

 **leverage**: `number`

Margin leverage allowed for the trade

___

### option\_premium

 **option\_premium**: `number`

Option premium

___

### pnl

 **pnl**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `realised` | `number` | Realised profit and loss |
| `unrealised` | `number` | Unrealised profit and loss |

___

### span

 **span**: `number`

SPAN margins

___

### total

 **total**: `number`

Total margin block

#### Inherited from

[CompactMargin](CompactMargin.md).[total](CompactMargin.md#total)

___

### tradingsymbol

 **tradingsymbol**: `string`

Trading symbol of the instrument

#### Inherited from

[CompactMargin](CompactMargin.md).[tradingsymbol](CompactMargin.md#tradingsymbol)

___

### type

 **type**: `string`

equity/commodity

#### Inherited from

[CompactMargin](CompactMargin.md).[type](CompactMargin.md#type)

___

### var

 **var**: `number`

VAR
