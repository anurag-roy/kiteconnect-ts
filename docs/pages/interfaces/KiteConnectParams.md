# Interface: KiteConnectParams

## Properties

### access\_token

 `Optional` **access\_token**: `string`

Token obtained after the login flow in exchange for the `request_token`.
Pre-login, this will default to null, but once you have obtained it, you
should persist it in a database or session to pass to the Kite Connect
class initialisation for subsequent requests.

Defaults to `null`

___

### api\_key

 **api\_key**: `string`

API key issued to you.

___

### debug

 `Optional` **debug**: `boolean`

If set to true, will console log requests and responses.

Defaults to `false`

___

### login\_uri

 `Optional` **login\_uri**: `string`

Kite connect login url

Defaults to "https://kite.trade/connect/login"

___

### root

 `Optional` **root**: `string`

API end point root. Unless you explicitly want to send API requests to a
non-default endpoint, this can be ignored.

Defaults to "https://api.kite.trade"

___

### timeout

 `Optional` **timeout**: `number`

Time (milliseconds) for which the API client will wait for a request to complete before it fails.

Defaults to `7000`
