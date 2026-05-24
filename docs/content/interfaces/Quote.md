# Interface: Quote

Single Quote response.

## Properties

### average\_price

> **average\_price**: `number`

The volume weighted average price of a stock at a given time during the day?

***

### buy\_quantity

> **buy\_quantity**: `number`

Total quantity of buy orders pending at the exchange

***

### depth

> **depth**: `object`

#### buy

> **buy**: `object`[]

#### sell

> **sell**: `object`[]

***

### instrument\_token

> **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument.

***

### last\_price

> **last\_price**: `number`

Last traded market price

***

### last\_quantity

> **last\_quantity**: `number`

Last traded quantity

***

### last\_trade\_time

> **last\_trade\_time**: `string` \| `null`

Last trade timestamp

***

### lower\_circuit\_limit

> **lower\_circuit\_limit**: `number`

The current lower circuit limit

***

### net\_change

> **net\_change**: `number`

The absolute change from yesterday's close to last traded price

***

### ohlc

> **ohlc**: `object`

#### close

> **close**: `number`

Closing price of the instrument from the last trading day

#### high

> **high**: `number`

Highest price today

#### low

> **low**: `number`

Lowest price today

#### open

> **open**: `number`

Price at market opening

***

### oi

> **oi**: `number`

The Open Interest for a futures or options contract ?

***

### oi\_day\_high

> **oi\_day\_high**: `number`

The highest Open Interest recorded during the day

***

### oi\_day\_low

> **oi\_day\_low**: `number`

The lowest Open Interest recorded during the day

***

### open\_interest?

> `optional` **open\_interest?**: `number`

Total number of outstanding contracts held by market participants exchange-wide (only F&O)

***

### sell\_quantity

> **sell\_quantity**: `number`

Total quantity of sell orders pending at the exchange

***

### timestamp

> **timestamp**: `string`

The exchange timestamp of the quote packet

***

### upper\_circuit\_limit

> **upper\_circuit\_limit**: `number`

The current upper circuit limit

***

### volume

> **volume**: `number`

Volume traded today
