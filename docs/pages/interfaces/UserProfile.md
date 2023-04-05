[kiteconnect-ts](../README.md) / [Exports](../modules.md) / UserProfile

# Interface: UserProfile

## Table of contents

### Properties

- [avatar\_url](UserProfile.md#avatar_url)
- [broker](UserProfile.md#broker)
- [email](UserProfile.md#email)
- [exchanges](UserProfile.md#exchanges)
- [meta](UserProfile.md#meta)
- [order\_types](UserProfile.md#order_types)
- [products](UserProfile.md#products)
- [user\_id](UserProfile.md#user_id)
- [user\_name](UserProfile.md#user_name)
- [user\_shortname](UserProfile.md#user_shortname)
- [user\_type](UserProfile.md#user_type)

## Properties

### avatar\_url

• **avatar\_url**: ``null`` \| `string`

Full URL to the user's avatar (PNG image) if there's one

#### Defined in

[lib/connect/types.ts:1275](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1275)

___

### broker

• **broker**: `string`

The broker ID

#### Defined in

[lib/connect/types.ts:1253](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1253)

___

### email

• **email**: `string`

User's email

#### Defined in

[lib/connect/types.ts:1245](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1245)

___

### exchanges

• **exchanges**: `string`[]

Exchanges enabled for trading on the user's account

#### Defined in

[lib/connect/types.ts:1257](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1257)

___

### meta

• **meta**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `demat_consent` | `string` | demat_consent: empty, consent or physical |

#### Defined in

[lib/connect/types.ts:1266](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1266)

___

### order\_types

• **order\_types**: `string`[]

Order types enabled for the user

#### Defined in

[lib/connect/types.ts:1265](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1265)

___

### products

• **products**: `string`[]

Margin product types enabled for the user

#### Defined in

[lib/connect/types.ts:1261](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1261)

___

### user\_id

• **user\_id**: `string`

The unique, permanent user id registered with the broker and the exchanges

#### Defined in

[lib/connect/types.ts:1233](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1233)

___

### user\_name

• **user\_name**: `string`

User's real name

#### Defined in

[lib/connect/types.ts:1237](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1237)

___

### user\_shortname

• **user\_shortname**: `string`

Shortened version of the user's real name

#### Defined in

[lib/connect/types.ts:1241](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1241)

___

### user\_type

• **user\_type**: `string`

User's registered role at the broker. This will be individual for all retail users

#### Defined in

[lib/connect/types.ts:1249](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L1249)
