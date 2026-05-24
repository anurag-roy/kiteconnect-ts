# Interface: MFSIP

Single Mutual Fund SIP response.

## Properties

### completed\_instalments

> **completed\_instalments**: `number`

Total number of completed instalments from the start

***

### created

> **created**: `Date`

Date at which the SIP was registered by the API

***

### dividend\_type

> **dividend\_type**: `string`

Dividend type (growth, payout)

***

### frequency

> **frequency**: `string`

Frequency at which order is triggered (monthly, weekly, or quarterly)

***

### fund

> **fund**: `string`

Name of the fund

***

### instalment\_amount

> **instalment\_amount**: `number`

Amount worth of units to purchase in each instalment

***

### instalment\_day

> **instalment\_day**: `number`

Calendar day in a month on which SIP order to be triggered (valid only incase of frequency monthly, else 0)

***

### instalments

> **instalments**: `number`

Number of instalments (-1 in case of SIPs active until cancelled)

***

### last\_instalment

> **last\_instalment**: `Date`

Date at which the last instalment was triggered

***

### next\_instalment

> **next\_instalment**: `string`

Upcoming instalment date

***

### pending\_instalments

> **pending\_instalments**: `number`

Number of instalments pending (-1 in case of SIPs active until cancelled)

***

### sip\_id

> **sip\_id**: `string`

Unique SIP id

***

### sip\_reg\_num

> **sip\_reg\_num**: `string` \| `null`

***

### sip\_type

> **sip\_type**: `string`

***

### status

> **status**: `string`

ACTIVE, PAUSED or CANCELLED

***

### step\_up

> **step\_up**: `Record`\<`string`, `number`\>

***

### tag

> **tag**: `string`

Tag that was sent with an order to identify it (alphanumeric, max 8 chars)

***

### tradingsymbol

> **tradingsymbol**: `string`

ISIN of the fund.

***

### transaction\_type

> **transaction\_type**: `string`

BUY or SELL

***

### trigger\_price

> **trigger\_price**: `number`
