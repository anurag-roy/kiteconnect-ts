# Enumeration: TickerEvent

All available KiteTicker events.

## Enumeration Members

### close

 **close** = ``"close"``

When socket connection is closed cleanly.

___

### connect

 **connect** = ``"connect"``

When connection is successfully established.

___

### disconnect

 **disconnect** = ``"disconnect"``

When socket connection is disconnected. Error is received as a first param.

___

### error

 **error** = ``"error"``

When socket connection is closed with error. Error is received as a first param.

___

### message

 **message** = ``"message"``

When binary message is received from the server.

___

### noreconnect

 **noreconnect** = ``"noreconnect"``

When re-connection fails after n number times.

___

### order\_update

 **order\_update** = ``"order_update"``

When order update (postback) is received for the connected user ([Order](../interfaces/Order.md) is received as first argument).

___

### reconnect

 **reconnect** = ``"reconnect"``

When reconnecting (current re-connection count and reconnect interval as arguments respectively).

___

### ticks

 **ticks** = ``"ticks"``

When ticks are available (Arrays of [Tick](../modules.md#tick) object as the first argument).
