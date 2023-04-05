[kiteconnect-ts](../README.md) / [Exports](../modules.md) / KiteConnectParams

# Interface: KiteConnectParams

## Table of contents

### Properties

- [access\_token](KiteConnectParams.md#access_token)
- [api\_key](KiteConnectParams.md#api_key)
- [debug](KiteConnectParams.md#debug)
- [login\_uri](KiteConnectParams.md#login_uri)
- [root](KiteConnectParams.md#root)
- [timeout](KiteConnectParams.md#timeout)

## Properties

### access\_token

• `Optional` **access\_token**: `string`

Token obtained after the login flow in exchange for the `request_token`.
Pre-login, this will default to null, but once you have obtained it, you
should persist it in a database or session to pass to the Kite Connect
class initialisation for subsequent requests.

Defaults to `null`

#### Defined in

[lib/connect/types.ts:1170](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1170)

___

### api\_key

• **api\_key**: `string`

API key issued to you.

#### Defined in

[lib/connect/types.ts:1161](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1161)

___

### debug

• `Optional` **debug**: `boolean`

If set to true, will console log requests and responses.

Defaults to `false`

#### Defined in

[lib/connect/types.ts:1189](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1189)

___

### login\_uri

• `Optional` **login\_uri**: `string`

Kite connect login url

Defaults to "https://kite.trade/connect/login"

#### Defined in

[lib/connect/types.ts:1183](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1183)

___

### root

• `Optional` **root**: `string`

API end point root. Unless you explicitly want to send API requests to a
non-default endpoint, this can be ignored.

Defaults to "https://api.kite.trade"

#### Defined in

[lib/connect/types.ts:1177](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1177)

___

### timeout

• `Optional` **timeout**: `number`

Time (milliseconds) for which the API client will wait for a request to complete before it fails.

Defaults to `7000`

#### Defined in

[lib/connect/types.ts:1195](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1195)
