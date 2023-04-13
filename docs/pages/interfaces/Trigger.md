# Interface: Trigger

Single GTT response.

## Properties

### condition

 **condition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exchange` | `string` |
| `instrument_token` | `number` |
| `last_price` | `number` |
| `tradingsymbol` | `string` |
| `trigger_values` | `number`[] |

___

### created\_at

 **created\_at**: `string`

___

### expires\_at

 **expires\_at**: `string`

___

### id

 **id**: `number`

___

### meta

 **meta**: `any`

___

### orders

 **orders**: { `exchange`: `string` ; `order_type`: `string` ; `price`: `number` ; `product`: `string` ; `quantity`: `number` ; `result`: ``null`` \| { `account_id`: `string` ; `exchange`: `string` ; `meta`: `string` ; `order_result`: { `order_id`: `string` ; `rejection_reason`: `string` ; `status`: `string`  } ; `order_type`: `string` ; `price`: `number` ; `product`: `string` ; `quantity`: `number` ; `timestamp`: `string` ; `tradingsymbol`: `string` ; `transaction_type`: `string` ; `triggered_at`: `number` ; `validity`: `string`  } ; `tradingsymbol`: `string` ; `transaction_type`: `string`  }[]

___

### parent\_trigger

 **parent\_trigger**: `any`

___

### status

 **status**: ``"active"`` \| ``"triggered"`` \| ``"disabled"`` \| ``"expired"`` \| ``"cancelled"`` \| ``"rejected"`` \| ``"deleted"``

___

### type

 **type**: `string`

___

### updated\_at

 **updated\_at**: `string`

___

### user\_id

 **user\_id**: `string`
