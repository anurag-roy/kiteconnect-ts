# Interface: KiteTickerParams

Params to construct a KiteTicker class

## Properties

### access\_token

> **access\_token**: `string`

Access token obtained after successful login flow.

***

### api\_key

> **api\_key**: `string`

API key issued to you.

***

### max\_delay?

> `optional` **max\_delay?**: `number`

The maximum delay in seconds after which subsequent re-connection interval will become constant. Defaults to 60s and minimum acceptable value is 5s.

#### Default Value

```ts
60
```

***

### max\_retry?

> `optional` **max\_retry?**: `number`

The maximum number of re-connection attempts. Defaults to 50 attempts and maximum up to 300 attempts.

#### Default Value

```ts
50
```

***

### reconnect?

> `optional` **reconnect?**: `boolean`

Enable/Disable auto reconnect. Enabled by default.

#### Default Value

`true`

***

### root?

> `optional` **root?**: `string`

Kite websocket root.

#### Default Value

```ts
"wss://ws.kite.trade/"
```
