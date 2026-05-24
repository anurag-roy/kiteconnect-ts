# Interface: UserMargin

User margins for a segment.

## Properties

### available

> **available**: `object`

Available margins for the segment

#### adhoc\_margin

> **adhoc\_margin**: `number`

Additional margin provided by the broker

#### cash

> **cash**: `number`

Raw cash balance in the account available for trading (also includes `intraday_payin`)

#### collateral

> **collateral**: `number`

Margin derived from pledged stocks

#### intraday\_payin

> **intraday\_payin**: `number`

Amount that was deposited during the day

#### live\_balance

> **live\_balance**: `number`

Current available balance

#### opening\_balance

> **opening\_balance**: `number`

Opening balance at the day start

***

### enabled

> **enabled**: `boolean`

Indicates whether the segment is enabled for the user

***

### net

> **net**: `number`

Net cash balance available for trading (`intraday_payin` + `adhoc_margin` + `collateral`)

***

### utilised

> **utilised**: `object`

Used margins for the segment

#### debits

> **debits**: `number`

Sum of all utilised margins (unrealised M2M + realised M2M + SPAN + Exposure + Premium + Holding sales)

#### delivery

> **delivery**: `number`

Margin blocked when you sell securities (20% of the value of stocks sold) from your demat or T1 holdings

#### exposure

> **exposure**: `number`

Exposure margin blocked for all open F&O positions

#### holding\_sales

> **holding\_sales**: `number`

Value of holdings sold during the day

#### liquid\_collateral

> **liquid\_collateral**: `number`

Margin utilised against pledged liquidbees ETFs and liquid mutual funds

#### m2m\_realised

> **m2m\_realised**: `number`

Booked intraday profits and losses

#### m2m\_unrealised

> **m2m\_unrealised**: `number`

Un-booked (open) intraday profits and losses

#### option\_premium

> **option\_premium**: `number`

Value of options premium received by shorting

#### payout

> **payout**: `number`

Funds paid out or withdrawn to bank account during the day

#### span

> **span**: `number`

SPAN margin blocked for all open F&O positions

#### stock\_collateral

> **stock\_collateral**: `number`

Margin utilised against pledged stocks/ETFs

#### turnover

> **turnover**: `number`

Utilised portion of the maximum turnover limit (only applicable to certain clients)
