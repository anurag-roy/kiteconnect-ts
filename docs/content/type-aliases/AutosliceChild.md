# Type Alias: AutosliceChild

> **AutosliceChild** = `object`

A single child slice in an autoslice order response. Each entry either
carries an `order_id` on success or an `error` payload on failure.

## Properties

### error?

> `optional` **error?**: `object`

#### code?

> `optional` **code?**: `number`

#### data?

> `optional` **data?**: `unknown`

#### error\_type?

> `optional` **error\_type?**: `string`

#### message?

> `optional` **message?**: `string`

***

### order\_id?

> `optional` **order\_id?**: `string`
