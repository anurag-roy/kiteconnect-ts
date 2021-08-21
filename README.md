# Kite Connect <img src="https://static.npmjs.com/255a118f56f5346b97e56325a1217a16.svg" width="20" height="20" />

Unofficial library for the Kite Connect trading APIs, written in [TypeScript](https://www.typescriptlang.org/).

## Installation

Install via npm

    npm install kiteconnect-ts

Add via yarn

    yarn add kiteconnect-ts

## KiteConnect

Coming soon!

## KiteTicker

```typescript
import { KiteTicker, TickFull } from 'kiteconnectts';

const ticker: KiteTicker = new KiteTicker({
  apiKey: 'YOUR_API_KEY',
  accessToken: 'YOUR_ACCESS_TOKEN',
});

ticker.on('ticks', (ticks: TickFull) => {
  console.log('Ticks', ticks);
});

ticker.on('connect', () => {
  const items = [738561];
  ticker.subscribe(items);
});

ticker.connect();
```
