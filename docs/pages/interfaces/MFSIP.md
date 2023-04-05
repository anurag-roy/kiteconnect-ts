[kiteconnect-ts](../README.md) / [Exports](../modules.md) / MFSIP

# Interface: MFSIP

## Table of contents

### Properties

- [completed\_instalments](MFSIP.md#completed_instalments)
- [created](MFSIP.md#created)
- [dividend\_type](MFSIP.md#dividend_type)
- [frequency](MFSIP.md#frequency)
- [fund](MFSIP.md#fund)
- [instalment\_amount](MFSIP.md#instalment_amount)
- [instalment\_day](MFSIP.md#instalment_day)
- [instalments](MFSIP.md#instalments)
- [last\_instalment](MFSIP.md#last_instalment)
- [next\_instalment](MFSIP.md#next_instalment)
- [pending\_instalments](MFSIP.md#pending_instalments)
- [sip\_id](MFSIP.md#sip_id)
- [sip\_reg\_num](MFSIP.md#sip_reg_num)
- [sip\_type](MFSIP.md#sip_type)
- [status](MFSIP.md#status)
- [step\_up](MFSIP.md#step_up)
- [tag](MFSIP.md#tag)
- [tradingsymbol](MFSIP.md#tradingsymbol)
- [transaction\_type](MFSIP.md#transaction_type)
- [trigger\_price](MFSIP.md#trigger_price)

## Properties

### completed\_instalments

• **completed\_instalments**: `number`

Total number of completed instalments from the start

#### Defined in

[lib/connect/types.ts:647](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L647)

___

### created

• **created**: `Date`

Date at which the SIP was registered by the API

#### Defined in

[lib/connect/types.ts:615](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L615)

___

### dividend\_type

• **dividend\_type**: `string`

Dividend type (growth, payout)

#### Defined in

[lib/connect/types.ts:603](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L603)

___

### frequency

• **frequency**: `string`

Frequency at which order is triggered (monthly, weekly, or quarterly)

#### Defined in

[lib/connect/types.ts:619](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L619)

___

### fund

• **fund**: `string`

Name of the fund

#### Defined in

[lib/connect/types.ts:599](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L599)

___

### instalment\_amount

• **instalment\_amount**: `number`

Amount worth of units to purchase in each instalment

#### Defined in

[lib/connect/types.ts:627](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L627)

___

### instalment\_day

• **instalment\_day**: `number`

Calendar day in a month on which SIP order to be triggered (valid only incase of frequency monthly, else 0)

#### Defined in

[lib/connect/types.ts:643](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L643)

___

### instalments

• **instalments**: `number`

Number of instalments (-1 in case of SIPs active until cancelled)

#### Defined in

[lib/connect/types.ts:631](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L631)

___

### last\_instalment

• **last\_instalment**: `Date`

Date at which the last instalment was triggered

#### Defined in

[lib/connect/types.ts:635](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L635)

___

### next\_instalment

• **next\_instalment**: `string`

Upcoming instalment date

#### Defined in

[lib/connect/types.ts:623](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L623)

___

### pending\_instalments

• **pending\_instalments**: `number`

Number of instalments pending (-1 in case of SIPs active until cancelled)

#### Defined in

[lib/connect/types.ts:639](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L639)

___

### sip\_id

• **sip\_id**: `string`

Unique SIP id

#### Defined in

[lib/connect/types.ts:591](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L591)

___

### sip\_reg\_num

• **sip\_reg\_num**: ``null`` \| `string`

#### Defined in

[lib/connect/types.ts:652](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L652)

___

### sip\_type

• **sip\_type**: `string`

#### Defined in

[lib/connect/types.ts:655](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L655)

___

### status

• **status**: `string`

ACTIVE, PAUSED or CANCELLED

#### Defined in

[lib/connect/types.ts:611](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L611)

___

### step\_up

• **step\_up**: `Record`<`string`, `number`\>

#### Defined in

[lib/connect/types.ts:654](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L654)

___

### tag

• **tag**: `string`

Tag that was sent with an order to identify it (alphanumeric, max 8 chars)

#### Defined in

[lib/connect/types.ts:651](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L651)

___

### tradingsymbol

• **tradingsymbol**: `string`

ISIN of the fund.

#### Defined in

[lib/connect/types.ts:595](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L595)

___

### transaction\_type

• **transaction\_type**: `string`

BUY or SELL

#### Defined in

[lib/connect/types.ts:607](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L607)

___

### trigger\_price

• **trigger\_price**: `number`

#### Defined in

[lib/connect/types.ts:653](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L653)
