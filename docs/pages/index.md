# kiteconnect-ts

Unofficial library for the Kite Connect trading APIs, written in [TypeScript](https://www.typescriptlang.org/).

All classes and APIs are one-to-one with Zerodha's [official kiteconnectjs library](https://github.com/zerodha/kiteconnectjs), so your existing code should work as is but with the added benefit of types! You will notice TypeScript's type safety as soon as you initialize a new `KiteConnect` or `KiteTicker` class. A bunch of extra types/interfaces are also available and can be used where the type cannot be inferred by TypeScript. See the docs section for more information.

If you notice a bug, please [open an issue](https://github.com/anurag-roy/kiteconnect-ts/issues/new) or consider [contributing](./CONTRIBUTING.md).

## Documentation

These docs are auto-generated from TsDoc comments using [TypeDoc](https://typedoc.org/), [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown) and [Nextra](https://nextra.site/).

Feel free to explore this site or go to a specific part:

- [KiteConnect Class, properties and methods](https://kiteconnect.anuragroy.dev/classes/KiteConnect)
- [KiteTicker Class, properties and methods](https://kiteconnect.anuragroy.dev/classes/KiteTicker)
- [Enums](https://kiteconnect.anuragroy.dev/modules#enumerations)
- [Interfaces](https://kiteconnect.anuragroy.dev/modules#interfaces)

### Other

- [Zerodha's kiteconnectjs docs](https://kite.trade/docs/kiteconnectjs/v3)
- [Kite Connect HTTP API documentation](https://kite.trade/docs/connect/v3)

## Credits

Code was adapted from [kiteconnectjs](https://github.com/zerodha/kiteconnectjs), MIT License, Copyright 2018 [Zerodha Technology](http://zerodha.com)
