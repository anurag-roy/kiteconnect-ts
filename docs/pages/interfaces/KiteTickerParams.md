# Interface: KiteTickerParams

Params to construct a KiteTicker class

## Properties

### access\_token

 **access\_token**: `string`

Access token obtained after successful login flow.

___

### api\_key

 **api\_key**: `string`

API key issued to you.

___

### max\_delay

 `Optional` **max\_delay**: `number`

The maximum delay in seconds after which subsequent re-connection interval will become constant. Defaults to 60s and minimum acceptable value is 5s.

**`Default Value`**

```ts
60
```

___

### max\_retry

 `Optional` **max\_retry**: `number`

The maximum number of re-connection attempts. Defaults to 50 attempts and maximum up to 300 attempts.

**`Default Value`**

```ts
50
```

___

### reconnect

 `Optional` **reconnect**: `boolean`

Enable/Disable auto reconnect. Enabled by default.

**`Default Value`**

`true`

___

### root

 `Optional` **root**: `string`

Kite websocket root.

**`Default Value`**

```ts
"wss://ws.kite.trade/"
```
