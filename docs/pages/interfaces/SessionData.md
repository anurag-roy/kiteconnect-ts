# Interface: SessionData

## Properties

### access\_token

 **access\_token**: `string`

The authentication token that's used with every subsequent request
Unless this is invalidated using the API, or invalidated by a master-logout
from the Kite Web trading terminal, it'll expire at `6 AM` on the next day (regulatory requirement)

___

### api\_key

 **api\_key**: `string`

The API key for which the authentication was performed

___

### avatar\_url

 **avatar\_url**: `string`

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

### login\_time

 **login\_time**: `string`

User's last login time

___

### meta

 **meta**: `Object`

A token for public session validation where requests may be exposed to the public

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `demat_consent` | `string` | empty, consent or physical |

___

### order\_types

 **order\_types**: `string`[]

Order types enabled for the user

___

### products

 **products**: `string`[]

Margin product types enabled for the user

___

### public\_token

 **public\_token**: `string`

A token for public session validation where requests may be exposed to the public

___

### refresh\_token

 **refresh\_token**: `string`

A token for getting long standing read permissions.
This is only available to certain approved platforms

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

User's registered role at the broker. This will be `individual` for all retail users
