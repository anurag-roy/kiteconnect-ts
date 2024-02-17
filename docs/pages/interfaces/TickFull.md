# Interface: TickFull

Full packet with Market Depth data

## Hierarchy

- `Omit`\<[`TickQuote`](TickQuote.md), ``"mode"``\>

  ↳ **`TickFull`**

## Properties

### average\_traded\_price

 **average\_traded\_price**: `number`

Average traded price

#### Inherited from

Omit.average\_traded\_price

___

### change

 **change**: `number`

Price change

#### Inherited from

Omit.change

___

### depth

 **depth**: `Object`

Market depth entries

There are ten entries in succession — five bid entries and five offer entries.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `buy` | \{ `orders`: `number` ; `price`: `number` ; `quantity`: `number`  }[] | Bid entries |
| `sell` | \{ `orders`: `number` ; `price`: `number` ; `quantity`: `number`  }[] | Offer entries |

___

### exchange\_timestamp

 **exchange\_timestamp**: `Date`

Exchange timestamp

___

### instrument\_token

 **instrument\_token**: `number`

Instrument token

#### Inherited from

Omit.instrument\_token

___

### last\_price

 **last\_price**: `number`

Last traded price

#### Inherited from

Omit.last\_price

___

### last\_trade\_time

 **last\_trade\_time**: `Date`

Last traded timestamp

___

### last\_traded\_quantity

 **last\_traded\_quantity**: `number`

Last traded quantity

#### Inherited from

Omit.last\_traded\_quantity

___

### mode

 **mode**: ``"full"``

Packet mode is 'full'

___

### ohlc

 **ohlc**: `Object`

Open, High, Low and Close data

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | `number` | Close price of the day |
| `high` | `number` | High price of the day |
| `low` | `number` | Low price of the day |
| `open` | `number` | Open price of the day |

#### Inherited from

Omit.ohlc

___

### oi

 **oi**: `number`

Open Interest

___

### oi\_day\_high

 **oi\_day\_high**: `number`

Open Interest Day High

___

### oi\_day\_low

 **oi\_day\_low**: `number`

Open Interest Day Low

___

### total\_buy\_quantity

 **total\_buy\_quantity**: `number`

Total buy quantity

#### Inherited from

Omit.total\_buy\_quantity

___

### total\_sell\_quantity

 **total\_sell\_quantity**: `number`

Total sell quantity

#### Inherited from

Omit.total\_sell\_quantity

___

### tradable

 **tradable**: `boolean`

Whether the instrument is tradable or not. `false` for Indices

#### Inherited from

Omit.tradable

___

### volume\_traded

 **volume\_traded**: `number`

Volume traded for the day

#### Inherited from

Omit.volume\_traded
