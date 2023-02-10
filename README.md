# Kite Connect <img src="https://static.npmjs.com/255a118f56f5346b97e56325a1217a16.svg" width="20" height="20" />

Unofficial library for the Kite Connect trading APIs, written in [TypeScript](https://www.typescriptlang.org/).

All classes and APIs are one-to-one with Zerodha's [official kiteconnectjs library](https://github.com/zerodha/kiteconnectjs), so your existing code should work as is but with the added benefit of types! You will notice TypeScript's type safety as soon as you initialize a new `KiteConnect` or `KiteTicker` class. A bunch of extra types/interfaces are also available and can be used where the type cannot be inferred by TypeScript. See the docs section for more information.

If you notice a bug, please [open an issue](https://github.com/anurag-roy/kiteconnect-ts/issues/new) or consider [contributing](./CONTRIBUTING.md).

## Installation

Install via `npm`:

```
npm install kiteconnect-ts
```

Add via `yarn`:

```
yarn add kiteconnect-ts
```

Add via `pnpm`:

```
pnpm add kiteconnect-ts
```

## Docs

Docs are auto-generated from TsDoc comments using [TypeDoc](https://typedoc.org/).

Browse the full docs [here](https://kiteconnect.anuragroy.dev) or go to a specific part:

### KiteConnect

- [Class, properties and methods](https://kiteconnect.anuragroy.dev/classes/KiteConnect.KiteConnect.html)
- [Extra types and interfaces](https://kiteconnect.anuragroy.dev/modules/KiteConnect.html)

### KiteTicker

- [Class, properties and methods](https://kiteconnect.anuragroy.dev/classes/KiteTicker.KiteTicker.html)
- [Extra types and interfaces](https://kiteconnect.anuragroy.dev/modules/KiteTicker.html)

### Other

- [Zerodha's kiteconnectjs docs](https://kite.trade/docs/kiteconnectjs/v3)
- [Kite Connect HTTP API documentation](https://kite.trade/docs/connect/v3)

## KiteConnect

```typescript
import { KiteConnect } from 'kiteconnect-ts';

const kc = new KiteConnect({
  api_key: 'YOUR_API_KEY',
});

// Get access token
try {
  const { access_token } = await kc.generateSession(
    'request_token',
    'YOUR_API_SECRET'
  );
  console.log('Access token:', access_token);
} catch (error) {
  console.error('Error while generating session', error);
  process.exit(1);
}

// Get equity margins
try {
  const margins = await kc.getMargins('equity');
  console.log('Equity margins', margins.equity);
} catch (error) {
  console.error('Error while fetching equity margins', error);
}
```

## KiteTicker

```typescript
import { KiteTicker, Tick } from 'kiteconnect-ts';

const ticker: KiteTicker = new KiteTicker({
  api_key: 'YOUR_API_KEY',
  access_token: 'YOUR_ACCESS_TOKEN',
});

ticker.on('ticks', (ticks: Tick[]) => {
  console.log('Ticks', ticks);
});

ticker.on('connect', () => {
  const items = [738561];
  ticker.subscribe(items);
});

ticker.connect();
```

## Todos

- Add more examples
- Add tests

## Changelog

Check the [changelog]('./CHANGELOG.md').

## Contributing

See the [Contribution Guide](./CONTRIBUTING.md).

## License

[MIT](./LICENSE) © [Anurag Roy](https://github.com/anurag-roy)
