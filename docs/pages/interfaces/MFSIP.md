# Interface: MFSIP

Single Mutual Fund SIP response.

## Properties

### completed\_instalments

 **completed\_instalments**: `number`

Total number of completed instalments from the start

___

### created

 **created**: `Date`

Date at which the SIP was registered by the API

___

### dividend\_type

 **dividend\_type**: `string`

Dividend type (growth, payout)

___

### frequency

 **frequency**: `string`

Frequency at which order is triggered (monthly, weekly, or quarterly)

___

### fund

 **fund**: `string`

Name of the fund

___

### instalment\_amount

 **instalment\_amount**: `number`

Amount worth of units to purchase in each instalment

___

### instalment\_day

 **instalment\_day**: `number`

Calendar day in a month on which SIP order to be triggered (valid only incase of frequency monthly, else 0)

___

### instalments

 **instalments**: `number`

Number of instalments (-1 in case of SIPs active until cancelled)

___

### last\_instalment

 **last\_instalment**: `Date`

Date at which the last instalment was triggered

___

### next\_instalment

 **next\_instalment**: `string`

Upcoming instalment date

___

### pending\_instalments

 **pending\_instalments**: `number`

Number of instalments pending (-1 in case of SIPs active until cancelled)

___

### sip\_id

 **sip\_id**: `string`

Unique SIP id

___

### sip\_reg\_num

 **sip\_reg\_num**: ``null`` \| `string`

___

### sip\_type

 **sip\_type**: `string`

___

### status

 **status**: `string`

ACTIVE, PAUSED or CANCELLED

___

### step\_up

 **step\_up**: `Record`\<`string`, `number`\>

___

### tag

 **tag**: `string`

Tag that was sent with an order to identify it (alphanumeric, max 8 chars)

___

### tradingsymbol

 **tradingsymbol**: `string`

ISIN of the fund.

___

### transaction\_type

 **transaction\_type**: `string`

BUY or SELL

___

### trigger\_price

 **trigger\_price**: `number`
