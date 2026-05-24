# Type Alias: AutosliceOrderResponse

> **AutosliceOrderResponse** = `object`

Response for an autoslice order placement. The top-level `order_id` is the
parent, and `children` holds the per-slice results.

## Properties

### children?

> `optional` **children?**: [`AutosliceChild`](AutosliceChild.md)[]

***

### order\_id

> **order\_id**: `string`
