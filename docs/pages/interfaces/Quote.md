[kiteconnect-ts](../README.md) / [Exports](../modules.md) / Quote

# Interface: Quote

## Table of contents

### Properties

- [average\_price](Quote.md#average_price)
- [buy\_quantity](Quote.md#buy_quantity)
- [depth](Quote.md#depth)
- [instrument\_token](Quote.md#instrument_token)
- [last\_price](Quote.md#last_price)
- [last\_quantity](Quote.md#last_quantity)
- [last\_trade\_time](Quote.md#last_trade_time)
- [lower\_circuit\_limit](Quote.md#lower_circuit_limit)
- [net\_change](Quote.md#net_change)
- [ohlc](Quote.md#ohlc)
- [oi](Quote.md#oi)
- [oi\_day\_high](Quote.md#oi_day_high)
- [oi\_day\_low](Quote.md#oi_day_low)
- [open\_interest](Quote.md#open_interest)
- [sell\_quantity](Quote.md#sell_quantity)
- [timestamp](Quote.md#timestamp)
- [upper\_circuit\_limit](Quote.md#upper_circuit_limit)
- [volume](Quote.md#volume)

## Properties

### average\_price

• **average\_price**: `number`

The volume weighted average price of a stock at a given time during the day?

#### Defined in

[lib/connect/types.ts:1302](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1302)

___

### buy\_quantity

• **buy\_quantity**: `number`

Total quantity of buy orders pending at the exchange

#### Defined in

[lib/connect/types.ts:1306](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1306)

___

### depth

• **depth**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buy` | { `orders`: `number` ; `price`: `number` ; `quantity`: `number`  }[] |
| `sell` | { `orders`: `number` ; `price`: `number` ; `quantity`: `number`  }[] |

#### Defined in

[lib/connect/types.ts:1362](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1362)

___

### instrument\_token

• **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument.

#### Defined in

[lib/connect/types.ts:1282](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1282)

___

### last\_price

• **last\_price**: `number`

Last traded market price

#### Defined in

[lib/connect/types.ts:1294](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1294)

___

### last\_quantity

• **last\_quantity**: `number`

Last traded quantity

#### Defined in

[lib/connect/types.ts:1318](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1318)

___

### last\_trade\_time

• **last\_trade\_time**: ``null`` \| `string`

Last trade timestamp

#### Defined in

[lib/connect/types.ts:1290](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1290)

___

### lower\_circuit\_limit

• **lower\_circuit\_limit**: `number`

The current lower circuit limit

#### Defined in

[lib/connect/types.ts:1345](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1345)

___

### net\_change

• **net\_change**: `number`

The absolute change from yesterday's close to last traded price

#### Defined in

[lib/connect/types.ts:1341](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1341)

___

### ohlc

• **ohlc**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | `number` | Closing price of the instrument from the last trading day |
| `high` | `number` | Highest price today |
| `low` | `number` | Lowest price today |
| `open` | `number` | Price at market opening |

#### Defined in

[lib/connect/types.ts:1319](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1319)

___

### oi

• **oi**: `number`

The Open Interest for a futures or options contract ?

#### Defined in

[lib/connect/types.ts:1353](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1353)

___

### oi\_day\_high

• **oi\_day\_high**: `number`

The highest Open Interest recorded during the day

#### Defined in

[lib/connect/types.ts:1357](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1357)

___

### oi\_day\_low

• **oi\_day\_low**: `number`

The lowest Open Interest recorded during the day

#### Defined in

[lib/connect/types.ts:1361](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1361)

___

### open\_interest

• `Optional` **open\_interest**: `number`

Total number of outstanding contracts held by market participants exchange-wide (only F&O)

#### Defined in

[lib/connect/types.ts:1314](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1314)

___

### sell\_quantity

• **sell\_quantity**: `number`

Total quantity of sell orders pending at the exchange

#### Defined in

[lib/connect/types.ts:1310](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1310)

___

### timestamp

• **timestamp**: `string`

The exchange timestamp of the quote packet

#### Defined in

[lib/connect/types.ts:1286](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1286)

___

### upper\_circuit\_limit

• **upper\_circuit\_limit**: `number`

The current upper circuit limit

#### Defined in

[lib/connect/types.ts:1349](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1349)

___

### volume

• **volume**: `number`

Volume traded today

#### Defined in

[lib/connect/types.ts:1298](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1298)
