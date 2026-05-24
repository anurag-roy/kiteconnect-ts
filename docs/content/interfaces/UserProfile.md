# Interface: UserProfile

User prodile response.

## Properties

### avatar\_url

> **avatar\_url**: `string` \| `null`

Full URL to the user's avatar (PNG image) if there's one

***

### broker

> **broker**: `string`

The broker ID

***

### email

> **email**: `string`

User's email

***

### exchanges

> **exchanges**: `string`[]

Exchanges enabled for trading on the user's account

***

### meta

> **meta**: `object`

#### demat\_consent

> **demat\_consent**: `string`

demat_consent: empty, consent or physical

***

### order\_types

> **order\_types**: `string`[]

Order types enabled for the user

***

### products

> **products**: `string`[]

Margin product types enabled for the user

***

### user\_id

> **user\_id**: `string`

The unique, permanent user id registered with the broker and the exchanges

***

### user\_name

> **user\_name**: `string`

User's real name

***

### user\_shortname

> **user\_shortname**: `string`

Shortened version of the user's real name

***

### user\_type

> **user\_type**: `string`

User's registered role at the broker. This will be individual for all retail users
