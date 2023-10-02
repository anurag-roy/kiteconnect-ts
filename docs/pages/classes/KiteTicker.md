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

## Constructors

### constructor

**new KiteTicker**(`params`)

KiteTicker constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`KiteTickerParams`](../interfaces/KiteTickerParams.md) | KiteTicker parameters |

## Methods

### autoReconnect

**autoReconnect**(`t`, `max_retry?`, `max_delay?`): `void`

Auto reconnect settings

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `boolean` | Enable or disable auto disconnect, defaults to false |
| `max_retry?` | `number` | is maximum number re-connection attempts. Defaults to 50 attempts and maximum up to 300 attempts. |
| `max_delay?` | `number` | in seconds is the maximum delay after which subsequent re-connection interval will become constant. Defaults to 60s and minimum acceptable value is 5s. |

#### Returns

`void`

___

### connect

**connect**(): `void`

Initiate a websocket connection

#### Returns

`void`

___

### connected

**connected**(): `boolean`

Check if the ticker is connected

#### Returns

`boolean`

`true` if the ticker is connected or `false` otherwise.

___

### disconnect

**disconnect**(): `void`

Close the websocket connection

#### Returns

`void`

___

### on

**on**<`K`\>(`e`, `callback`): `void`

Register websocket event callbacks. See [TickerEvent](../modules.md#tickerevent) for all available events.

**`Example`**

```ts
ticker.on("ticks", callback);
ticker.on("connect", callback);
ticker.on("disconnect", callback);
```

Tick structure (passed to the tick callback you assign):
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

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`TickerEvents`](../modules.md#tickerevents) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `K` | Event to register callback on. |
| `callback` | [`TickerEvents`](../modules.md#tickerevents)[`K`] | Callback function |

#### Returns

`void`

___

### setMode

**setMode**(`mode`, `tokens`): `number`[]

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

___

### subscribe

**subscribe**(`tokens`): `number`[]

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

___

### unsubscribe

**unsubscribe**(`tokens`): `number`[]

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

## Properties

### modeFull

 `Readonly` **modeFull**: ``"full"``

Set mode full

___

### modeLTP

 `Readonly` **modeLTP**: ``"ltp"``

Set mode LTP

___

### modeQuote

 `Readonly` **modeQuote**: ``"quote"``

Set mode quote
