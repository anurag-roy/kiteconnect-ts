# Interface: Trigger

Single GTT response.

## Properties

### condition

> **condition**: `object`

#### exchange

> **exchange**: `string`

#### instrument\_token

> **instrument\_token**: `number`

#### last\_price

> **last\_price**: `number`

#### tradingsymbol

> **tradingsymbol**: `string`

#### trigger\_values

> **trigger\_values**: `number`[]

***

### created\_at

> **created\_at**: `string`

***

### expires\_at

> **expires\_at**: `string`

***

### id

> **id**: `number`

***

### meta

> **meta**: `any`

***

### orders

> **orders**: `object`[]

#### exchange

> **exchange**: `string`

#### order\_type

> **order\_type**: `string`

#### price

> **price**: `number`

#### product

> **product**: `string`

#### quantity

> **quantity**: `number`

#### result

> **result**: \{ `account_id`: `string`; `exchange`: `string`; `meta`: `string`; `order_result`: \{ `order_id`: `string`; `rejection_reason`: `string`; `status`: `string`; \}; `order_type`: `string`; `price`: `number`; `product`: `string`; `quantity`: `number`; `timestamp`: `string`; `tradingsymbol`: `string`; `transaction_type`: `string`; `triggered_at`: `number`; `validity`: `string`; \} \| `null`

#### tradingsymbol

> **tradingsymbol**: `string`

#### transaction\_type

> **transaction\_type**: `string`

***

### parent\_trigger

> **parent\_trigger**: `any`

***

### status

> **status**: `"active"` \| `"triggered"` \| `"disabled"` \| `"expired"` \| `"cancelled"` \| `"rejected"` \| `"deleted"`

***

### type

> **type**: `string`

***

### updated\_at

> **updated\_at**: `string`

***

### user\_id

> **user\_id**: `string`
