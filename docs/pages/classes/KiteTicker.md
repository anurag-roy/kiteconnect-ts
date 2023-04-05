[kiteconnect-ts](../README.md) / [Exports](../modules.md) / KiteTicker

# Class: KiteTicker

The WebSocket client for connecting to Kite connect streaming quotes service.

**`Example`**

Getting started:
----
```ts
import { KiteTicker } from "kiteconnect";
const ticker = new KiteTicker({
	api_key: "api_key",
	access_token: "access_token"
});

ticker.connect();
ticker.on("ticks", onTicks);
ticker.on("connect", subscribe);

function onTicks(ticks) {
	console.log("Ticks", ticks);
}

function subscribe() {
	const items = [738561];
	ticker.subscribe(items);
	ticker.setMode(ticker.modeFull, items);
}
```

Auto reconnection
-----------------
Auto reconnection is enabled by default and it can be disabled by passing `reconnect` param while initialising `KiteTicker`.

Auto reconnection mechanism is based on [Exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) algorithm in which
next retry interval will be increased exponentially. `max_delay` and `max_tries` params can be used to tweak
the alogrithm where `max_delay` is the maximum delay after which subsequent reconnection interval will become constant and
`max_tries` is maximum number of retries before it quits reconnection.

For example if `max_delay` is 60 seconds and `max_tries` is 50 then the first reconnection interval starts from
minimum interval which is 2 seconds and keep increasing up to 60 seconds after which it becomes constant and when reconnection attempt
is reached upto 50 then it stops reconnecting.

Callback `reconnect` will be called with current reconnect attempt and next reconnect interval and
`on_noreconnect` is called when reconnection attempts reaches max retries.

**`Example`**

Here is an example demonstrating auto reconnection.
```ts
import { KiteTicker } from "kiteconnect-ts";
const ticker = new KiteTicker({
	api_key: "api_key",
	access_token: "access_token"
});

// set autoreconnect with 10 maximum reconnections and 5 second interval
ticker.autoReconnect(true, 10, 5)
ticker.connect();
ticker.on("ticks", onTicks);
ticker.on("connect", subscribe);

ticker.on("noreconnect", () => {
	console.log("noreconnect");
});

ticker.on("reconnect", (reconnect_count, reconnect_interval) => {
	console.log("Reconnecting: attempt - ", reconnect_count, " interval - ", reconnect_interval);
});

ticker.on("message", (binary_msg) => {
	console.log("Binary message", binary_msg);
});

function onTicks(ticks) {
	console.log("Ticks", ticks);
}

function subscribe() {
	const items = [738561];
	ticker.subscribe(items);
	ticker.setMode(ticker.modeFull, items);
}
```

## Table of contents

### Constructors

- [constructor](KiteTicker.md#constructor)

### Properties

- [modeFull](KiteTicker.md#modefull)
- [modeLTP](KiteTicker.md#modeltp)
- [modeQuote](KiteTicker.md#modequote)

### Methods

- [autoReconnect](KiteTicker.md#autoreconnect)
- [connect](KiteTicker.md#connect)
- [connected](KiteTicker.md#connected)
- [disconnect](KiteTicker.md#disconnect)
- [on](KiteTicker.md#on)
- [setMode](KiteTicker.md#setmode)
- [subscribe](KiteTicker.md#subscribe)
- [unsubscribe](KiteTicker.md#unsubscribe)

## Constructors

### constructor

• **new KiteTicker**(`params`)

KiteTicker constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`KiteTickerParams`](../modules.md#kitetickerparams) | KiteTicker parameters |

#### Defined in

[lib/ticker/index.ts:161](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L161)

## Properties

### modeFull

• `Readonly` **modeFull**: ``"full"``

Set mode full

#### Defined in

[lib/ticker/index.ts:110](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L110)

___

### modeLTP

• `Readonly` **modeLTP**: ``"ltp"``

Set mode LTP

#### Defined in

[lib/ticker/index.ts:118](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L118)

___

### modeQuote

• `Readonly` **modeQuote**: ``"quote"``

Set mode quote

#### Defined in

[lib/ticker/index.ts:114](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L114)

## Methods

### autoReconnect

▸ **autoReconnect**(`t`, `max_retry?`, `max_delay?`): `void`

Auto reconnect settings

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `boolean` | Enable or disable auto disconnect, defaults to false |
| `max_retry?` | `number` | is maximum number re-connection attempts. Defaults to 50 attempts and maximum up to 300 attempts. |
| `max_delay?` | `number` | in seconds is the maximum delay after which subsequent re-connection interval will become constant. Defaults to 60s and minimum acceptable value is 5s. |

#### Returns

`void`

#### Defined in

[lib/ticker/index.ts:178](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L178)

___

### connect

▸ **connect**(): `void`

Initiate a websocket connection

#### Returns

`void`

#### Defined in

[lib/ticker/index.ts:199](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L199)

___

### connected

▸ **connected**(): `boolean`

Check if the ticker is connected

#### Returns

`boolean`

`true` if the ticker is connected or `false` otherwise.

#### Defined in

[lib/ticker/index.ts:304](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L304)

___

### disconnect

▸ **disconnect**(): `void`

Close the websocket connection

#### Returns

`void`

#### Defined in

[lib/ticker/index.ts:289](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L289)

___

### on

▸ **on**(`e`, `callback`): `void`

Register websocket event callbacks

**`Example`**

```ts
ticker.on("ticks", callback);
ticker.on("connect", callback);
ticker.on("disconnect", callback);
```

Tick structure (passed to the tick callback you assign):
----
```
[
  {
    tradable: true,
    mode: 'full',
    instrument_token: 208947,
    last_price: 3939,
    last_quantity: 1,
    average_price: 3944.77,
    volume: 28940,
    buy_quantity: 4492,
    sell_quantity: 4704,
    ohlc: { open: 3927, high: 3955, low: 3927, close: 3906 },
    change: 0.8448540706605223,
    last_trade_time: 1515491369,
    timestamp: 1515491373,
    oi: 24355,
    oi_day_high: 0,
    oi_day_low: 0,
    depth: {
      buy: [
        { quantity: 59, price: 3223, orders: 5 },
        { quantity: 164, price: 3222, orders: 15 },
        { quantity: 123, price: 3221, orders: 7 },
        { quantity: 48, price: 3220, orders: 7 },
        { quantity: 33, price: 3219, orders: 5 },
      ],
      sell: [
        { quantity: 115, price: 3224, orders: 15 },
        { quantity: 50, price: 3225, orders: 5 },
        { quantity: 175, price: 3226, orders: 14 },
        { quantity: 49, price: 3227, orders: 10 },
        { quantity: 106, price: 3228, orders: 13 },
      ],
    },
  },
]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TickerEvent`](../modules.md#tickerevent) | Event to register callback on |
| `callback` | `Function` | Callback function |

#### Returns

`void`

#### Defined in

[lib/ticker/index.ts:366](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L366)

___

### setMode

▸ **setMode**(`mode`, `tokens`): `number`[]

Set mode for an array of tokens

**`Example`**

```
ticker.setMode(ticker.modeFull, [738561]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | ``"ltp"`` \| ``"quote"`` \| ``"full"`` | mode to set |
| `tokens` | `number`[] | Array of tokens to be subscribed |

#### Returns

`number`[]

#### Defined in

[lib/ticker/index.ts:417](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L417)

___

### subscribe

▸ **subscribe**(`tokens`): `number`[]

Subscribe to array of tokens

**`Example`**

```ts
ticker.subscribe([738561]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokens` | `number`[] | Array of tokens to be subscribed |

#### Returns

`number`[]

#### Defined in

[lib/ticker/index.ts:382](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L382)

___

### unsubscribe

▸ **unsubscribe**(`tokens`): `number`[]

Unsubscribe from array of tokens

**`Example`**

```ts
ticker.unsubscribe([738561]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokens` | `number`[] | Array of tokens to be unsubscribed |

#### Returns

`number`[]

#### Defined in

[lib/ticker/index.ts:399](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/ticker/index.ts#L399)