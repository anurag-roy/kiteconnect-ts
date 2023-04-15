# Interface: Quote

Single Quote response.

## Properties

### average\_price

 **average\_price**: `number`

The volume weighted average price of a stock at a given time during the day?

___

### buy\_quantity

 **buy\_quantity**: `number`

Total quantity of buy orders pending at the exchange

___

### depth

 **depth**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buy` | { `orders`: `number` ; `price`: `number` ; `quantity`: `number`  }[] |
| `sell` | { `orders`: `number` ; `price`: `number` ; `quantity`: `number`  }[] |

___

### instrument\_token

 **instrument\_token**: `number`

The numerical identifier issued by the exchange representing the instrument.

___

### last\_price

 **last\_price**: `number`

Last traded market price

___

### last\_quantity

 **last\_quantity**: `number`

Last traded quantity

___

### last\_trade\_time

 **last\_trade\_time**: ``null`` \| `string`

Last trade timestamp

___

### lower\_circuit\_limit

 **lower\_circuit\_limit**: `number`

The current lower circuit limit

___

### net\_change

 **net\_change**: `number`

The absolute change from yesterday's close to last traded price

___

### ohlc

 **ohlc**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | `number` | Closing price of the instrument from the last trading day |
| `high` | `number` | Highest price today |
| `low` | `number` | Lowest price today |
| `open` | `number` | Price at market opening |

___

### oi

 **oi**: `number`

The Open Interest for a futures or options contract ?

___

### oi\_day\_high

 **oi\_day\_high**: `number`

The highest Open Interest recorded during the day

___

### oi\_day\_low

 **oi\_day\_low**: `number`

The lowest Open Interest recorded during the day

___

### open\_interest

 `Optional` **open\_interest**: `number`

Total number of outstanding contracts held by market participants exchange-wide (only F&O)

___

### sell\_quantity

 **sell\_quantity**: `number`

Total quantity of sell orders pending at the exchange

___

### timestamp

 **timestamp**: `string`

The exchange timestamp of the quote packet

___

### upper\_circuit\_limit

 **upper\_circuit\_limit**: `number`

The current upper circuit limit

___

### volume

 **volume**: `number`

Volume traded today
