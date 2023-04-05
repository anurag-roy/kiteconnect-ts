[kiteconnect-ts](../README.md) / [Exports](../modules.md) / SessionData

# Interface: SessionData

## Table of contents

### Properties

- [access\_token](SessionData.md#access_token)
- [api\_key](SessionData.md#api_key)
- [avatar\_url](SessionData.md#avatar_url)
- [broker](SessionData.md#broker)
- [email](SessionData.md#email)
- [exchanges](SessionData.md#exchanges)
- [login\_time](SessionData.md#login_time)
- [meta](SessionData.md#meta)
- [order\_types](SessionData.md#order_types)
- [products](SessionData.md#products)
- [public\_token](SessionData.md#public_token)
- [refresh\_token](SessionData.md#refresh_token)
- [user\_id](SessionData.md#user_id)
- [user\_name](SessionData.md#user_name)
- [user\_shortname](SessionData.md#user_shortname)
- [user\_type](SessionData.md#user_type)

## Properties

### access\_token

• **access\_token**: `string`

The authentication token that's used with every subsequent request
Unless this is invalidated using the API, or invalidated by a master-logout
from the Kite Web trading terminal, it'll expire at `6 AM` on the next day (regulatory requirement)

#### Defined in

[lib/connect/types.ts:90](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L90)

___

### api\_key

• **api\_key**: `string`

The API key for which the authentication was performed

#### Defined in

[lib/connect/types.ts:84](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L84)

___

### avatar\_url

• **avatar\_url**: `string`

Full URL to the user's avatar (PNG image) if there's one

#### Defined in

[lib/connect/types.ts:116](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L116)

___

### broker

• **broker**: `string`

The broker ID

#### Defined in

[lib/connect/types.ts:68](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L68)

___

### email

• **email**: `string`

User's email

#### Defined in

[lib/connect/types.ts:60](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L60)

___

### exchanges

• **exchanges**: `string`[]

Exchanges enabled for trading on the user's account

#### Defined in

[lib/connect/types.ts:72](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L72)

___

### login\_time

• **login\_time**: `string`

User's last login time

#### Defined in

[lib/connect/types.ts:103](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L103)

___

### meta

• **meta**: `Object`

A token for public session validation where requests may be exposed to the public

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `demat_consent` | `string` | empty, consent or physical |

#### Defined in

[lib/connect/types.ts:107](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L107)

___

### order\_types

• **order\_types**: `string`[]

Order types enabled for the user

#### Defined in

[lib/connect/types.ts:80](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L80)

___

### products

• **products**: `string`[]

Margin product types enabled for the user

#### Defined in

[lib/connect/types.ts:76](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L76)

___

### public\_token

• **public\_token**: `string`

A token for public session validation where requests may be exposed to the public

#### Defined in

[lib/connect/types.ts:94](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L94)

___

### refresh\_token

• **refresh\_token**: `string`

A token for getting long standing read permissions.
This is only available to certain approved platforms

#### Defined in

[lib/connect/types.ts:99](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L99)

___

### user\_id

• **user\_id**: `string`

The unique, permanent user id registered with the broker and the exchanges

#### Defined in

[lib/connect/types.ts:48](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L48)

___

### user\_name

• **user\_name**: `string`

User's real name

#### Defined in

[lib/connect/types.ts:52](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L52)

___

### user\_shortname

• **user\_shortname**: `string`

Shortened version of the user's real name

#### Defined in

[lib/connect/types.ts:56](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L56)

___

### user\_type

• **user\_type**: `string`

User's registered role at the broker. This will be `individual` for all retail users

#### Defined in

[lib/connect/types.ts:64](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L64)
