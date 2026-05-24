# Type Alias: TickerEvents

> **TickerEvents** = `object`

All Ticker events and their corresponding callback functon signatures.

## Properties

### close

> **close**: () => `void` \| `Promise`\<`void`\>

When socket connection is closed cleanly.

#### Returns

`void` \| `Promise`\<`void`\>

***

### connect

> **connect**: () => `void` \| `Promise`\<`void`\>

When connection is successfully established.

#### Returns

`void` \| `Promise`\<`void`\>

***

### disconnect

> **disconnect**: (`error`) => `void` \| `Promise`\<`void`\>

When socket connection is disconnected. Error is received as a first param.

#### Parameters

##### error

`Error`

#### Returns

`void` \| `Promise`\<`void`\>

***

### error

> **error**: (`error`) => `void` \| `Promise`\<`void`\>

When socket connection is closed with error. Error is received as a first param.

#### Parameters

##### error

`Error`

#### Returns

`void` \| `Promise`\<`void`\>

***

### message

> **message**: (`data`) => `void` \| `Promise`\<`void`\>

When binary message is received from the server.

#### Parameters

##### data

`ArrayBuffer`

#### Returns

`void` \| `Promise`\<`void`\>

***

### noreconnect

> **noreconnect**: () => `void` \| `Promise`\<`void`\>

When re-connection fails after n number times.

#### Returns

`void` \| `Promise`\<`void`\>

***

### order\_update

> **order\_update**: (`order`) => `void` \| `Promise`\<`void`\>

When order update (postback) is received for the connected user ([Order](../interfaces/Order.md) is received as first argument).

#### Parameters

##### order

[`Order`](../interfaces/Order.md)

#### Returns

`void` \| `Promise`\<`void`\>

***

### reconnect

> **reconnect**: (`retries`, `interval`) => `void` \| `Promise`\<`void`\>

When reconnecting (current re-connection count and reconnect interval as arguments respectively).

#### Parameters

##### retries

`number`

##### interval

`number`

#### Returns

`void` \| `Promise`\<`void`\>

***

### ticks

> **ticks**: (`ticks`) => `void` \| `Promise`\<`void`\>

When ticks are available (Arrays of [Tick](Tick.md) object as the first argument).

The type has been purposefully kept as `any` because the structure of the tick packet is not known
and there can be multiple types of tick packets.

#### Parameters

##### ticks

`any`[]

#### Returns

`void` \| `Promise`\<`void`\>
