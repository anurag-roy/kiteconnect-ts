[kiteconnect-ts](../README.md) / [Exports](../modules.md) / UserMargin

# Interface: UserMargin

## Table of contents

### Properties

- [available](UserMargin.md#available)
- [enabled](UserMargin.md#enabled)
- [net](UserMargin.md#net)
- [utilised](UserMargin.md#utilised)

## Properties

### available

• **available**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `adhoc_margin` | `number` | Additional margin provided by the broker |
| `cash` | `number` | Raw cash balance in the account available for trading (also includes `intraday_payin`) |
| `collateral` | `number` | Margin derived from pledged stocks |
| `intraday_payin` | `number` | Amount that was deposited during the day |
| `live_balance` | `number` | Current available balance |
| `opening_balance` | `number` | Opening balance at the day start |

#### Defined in

[lib/connect/types.ts:321](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L321)

___

### enabled

• **enabled**: `boolean`

Indicates whether the segment is enabled for the user

#### Defined in

[lib/connect/types.ts:316](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L316)

___

### net

• **net**: `number`

Net cash balance available for trading (`intraday_payin` + `adhoc_margin` + `collateral`)

#### Defined in

[lib/connect/types.ts:320](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L320)

___

### utilised

• **utilised**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debits` | `number` | Sum of all utilised margins (unrealised M2M + realised M2M + SPAN + Exposure + Premium + Holding sales) |
| `delivery` | `number` | Margin blocked when you sell securities (20% of the value of stocks sold) from your demat or T1 holdings |
| `exposure` | `number` | Exposure margin blocked for all open F&O positions |
| `holding_sales` | `number` | Value of holdings sold during the day |
| `liquid_collateral` | `number` | Margin utilised against pledged liquidbees ETFs and liquid mutual funds |
| `m2m_realised` | `number` | Booked intraday profits and losses |
| `m2m_unrealised` | `number` | Un-booked (open) intraday profits and losses |
| `option_premium` | `number` | Value of options premium received by shorting |
| `payout` | `number` | Funds paid out or withdrawn to bank account during the day |
| `span` | `number` | SPAN margin blocked for all open F&O positions |
| `stock_collateral` | `number` | Margin utilised against pledged stocks/ETFs |
| `turnover` | `number` | Utilised portion of the maximum turnover limit (only applicable to certain clients) |

#### Defined in

[lib/connect/types.ts:347](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L347)