[kiteconnect-ts](../README.md) / [Exports](../modules.md) / Trigger

# Interface: Trigger

## Table of contents

### Properties

- [condition](Trigger.md#condition)
- [created\_at](Trigger.md#created_at)
- [expires\_at](Trigger.md#expires_at)
- [id](Trigger.md#id)
- [meta](Trigger.md#meta)
- [orders](Trigger.md#orders)
- [parent\_trigger](Trigger.md#parent_trigger)
- [status](Trigger.md#status)
- [type](Trigger.md#type)
- [updated\_at](Trigger.md#updated_at)
- [user\_id](Trigger.md#user_id)

## Properties

### condition

• **condition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exchange` | `string` |
| `instrument_token` | `number` |
| `last_price` | `number` |
| `tradingsymbol` | `string` |
| `trigger_values` | `number`[] |

#### Defined in

[lib/connect/types.ts:135](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L135)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[lib/connect/types.ts:124](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L124)

___

### expires\_at

• **expires\_at**: `string`

#### Defined in

[lib/connect/types.ts:126](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L126)

___

### id

• **id**: `number`

#### Defined in

[lib/connect/types.ts:120](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L120)

___

### meta

• **meta**: `any`

#### Defined in

[lib/connect/types.ts:170](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L170)

___

### orders

• **orders**: { `exchange`: `string` ; `order_type`: `string` ; `price`: `number` ; `product`: `string` ; `quantity`: `number` ; `result`: ``null`` \| { `account_id`: `string` ; `exchange`: `string` ; `meta`: `string` ; `order_result`: { `order_id`: `string` ; `rejection_reason`: `string` ; `status`: `string`  } ; `order_type`: `string` ; `price`: `number` ; `product`: `string` ; `quantity`: `number` ; `timestamp`: `string` ; `tradingsymbol`: `string` ; `transaction_type`: `string` ; `triggered_at`: `number` ; `validity`: `string`  } ; `tradingsymbol`: `string` ; `transaction_type`: `string`  }[]

#### Defined in

[lib/connect/types.ts:142](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L142)

___

### parent\_trigger

• **parent\_trigger**: `any`

#### Defined in

[lib/connect/types.ts:122](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L122)

___

### status

• **status**: ``"active"`` \| ``"triggered"`` \| ``"disabled"`` \| ``"expired"`` \| ``"cancelled"`` \| ``"rejected"`` \| ``"deleted"``

#### Defined in

[lib/connect/types.ts:127](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L127)

___

### type

• **type**: `string`

#### Defined in

[lib/connect/types.ts:123](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L123)

___

### updated\_at

• **updated\_at**: `string`

#### Defined in

[lib/connect/types.ts:125](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L125)

___

### user\_id

• **user\_id**: `string`

#### Defined in

[lib/connect/types.ts:121](https://github.com/anurag-roy/kiteconnect-ts/blob/327f526/lib/connect/types.ts#L121)
