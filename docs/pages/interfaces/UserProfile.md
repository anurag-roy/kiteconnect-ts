# Interface: UserProfile

## Properties

### avatar\_url

 **avatar\_url**: ``null`` \| `string`

Full URL to the user's avatar (PNG image) if there's one

___

### broker

 **broker**: `string`

The broker ID

___

### email

 **email**: `string`

User's email

___

### exchanges

 **exchanges**: `string`[]

Exchanges enabled for trading on the user's account

___

### meta

 **meta**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `demat_consent` | `string` | demat_consent: empty, consent or physical |

___

### order\_types

 **order\_types**: `string`[]

Order types enabled for the user

___

### products

 **products**: `string`[]

Margin product types enabled for the user

___

### user\_id

 **user\_id**: `string`

The unique, permanent user id registered with the broker and the exchanges

___

### user\_name

 **user\_name**: `string`

User's real name

___

### user\_shortname

 **user\_shortname**: `string`

Shortened version of the user's real name

___

### user\_type

 **user\_type**: `string`

User's registered role at the broker. This will be individual for all retail users
