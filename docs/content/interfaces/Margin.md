# Interface: Margin

Full response from the Margin API calculator.

## Extends

- [`CompactMargin`](CompactMargin.md)

## Properties

### additional

> **additional**: `number`

Additional margins

***

### bo

> **bo**: `number`

BO margins

***

### cash

> **cash**: `number`

Cash credit

***

### charges

> **charges**: `object`

The breakdown of the various charges that will be applied to an order

#### brokerage

> **brokerage**: `number`

The brokerage charge for a particular trade

#### exchange\_turnover\_charge

> **exchange\_turnover\_charge**: `number`

Charge levied by the exchange on the total turnover of the day

#### gst

> **gst**: `object`

##### gst.cgst

> **cgst**: `number`

Central Goods and Services Tax levied by the government

##### gst.igst

> **igst**: `number`

Integrated Goods and Services Tax levied by the government

##### gst.sgst

> **sgst**: `number`

State Goods and Services Tax levied by the government

##### gst.total

> **total**: `number`

Total GST

#### sebi\_turnover\_charge

> **sebi\_turnover\_charge**: `number`

Charge levied by SEBI on the total turnover of the day

#### stamp\_duty

> **stamp\_duty**: `number`

Duty levied on the transaction value by Government of India

#### total

> **total**: `number`

Total charges

#### transaction\_tax

> **transaction\_tax**: `number`

Tax levied for each transaction on the exchanges

#### transaction\_tax\_type

> **transaction\_tax\_type**: `string`

Type of transaction tax

***

### exchange

> **exchange**: `string`

Name of the exchange

#### Inherited from

[`CompactMargin`](CompactMargin.md).[`exchange`](CompactMargin.md#exchange)

***

### exposure

> **exposure**: `number`

Exposure margins

***

### leverage

> **leverage**: `number`

Margin leverage allowed for the trade

***

### option\_premium

> **option\_premium**: `number`

Option premium

***

### pnl

> **pnl**: `object`

#### realised

> **realised**: `number`

Realised profit and loss

#### unrealised

> **unrealised**: `number`

Unrealised profit and loss

***

### span

> **span**: `number`

SPAN margins

***

### total

> **total**: `number`

Total margin block

#### Inherited from

[`CompactMargin`](CompactMargin.md).[`total`](CompactMargin.md#total)

***

### tradingsymbol

> **tradingsymbol**: `string`

Trading symbol of the instrument

#### Inherited from

[`CompactMargin`](CompactMargin.md).[`tradingsymbol`](CompactMargin.md#tradingsymbol)

***

### type

> **type**: `string`

equity/commodity

#### Inherited from

[`CompactMargin`](CompactMargin.md).[`type`](CompactMargin.md#type)

***

### var

> **var**: `number`

VAR
