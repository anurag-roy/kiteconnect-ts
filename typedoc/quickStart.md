## Requirements

- Node.js `v14+`

Please note: Browser environments are not supported. See [Browser Support](#browser-support) for more details.

## Installation

#### npm

```
npm install kiteconnect-ts
```

#### yarn

```
yarn add kiteconnect-ts
```

#### pnpm

```
pnpm add kiteconnect-ts
```

## KiteConnect

```typescript copy
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

```typescript copy
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

## Using provided enums

This library does not export Typescript enums, but rather JavaScript const objects. This was a design decision taken consciously to allow using the value from the object as well as a string literal, which has a better dx in my opinion. Constants are also present in the classes as readonly members, mainly for backwards compatibility with kiteconnectjs. So in total there are 3 ways you can these, pick one that works for you!

### Option 1: As a string

All params which accept specific values provide type validation and autocomplete. So a simple string literal works as follows:

```typescript {8}
import { KiteConnect } from 'kiteconnect-ts';
import env from './env.json';

const kc = new KiteConnect({
  api_key: env.API_KEY,
});

const instruments = await kc.getInstruments(['NSE']);
```

### Option 2: As an enum

You could also import the enum and use as follows:

```typescript {1,8}
import { Exchange, KiteConnect } from 'kiteconnect-ts';
import env from './env.json';

const kc = new KiteConnect({
  api_key: env.API_KEY,
});

const instruments = await kc.getInstruments([Exchange.NSE]);
```

### Option 3: As a class member

This is mainly for backwards compatibility if you are migrating `kiteconnectjs` code to `kiteconnect-ts`.

```typescript {8}
import { KiteConnect } from 'kiteconnect-ts';
import env from './env.json';

const kc = new KiteConnect({
  api_key: env.API_KEY,
});

const instruments = await kc.getInstruments([kc.EXCHANGE_NSE]);
```

## Browser Support

Unfortunately this library does not work on the browser, so you cannot use it on your Angular, React, Vue, etc front-ends. However, if you use a meta/full-stack framework (Next.js, Nuxt, etc) with SSR, you can definitely install and use it on the server side.

This is not a limitation of this library per say, rather a limitation from Zerodha as they [do not want you to use Kite APIs directly from the browser](https://kite.trade/forum/discussion/comment/25372/#Comment_25372). This is also evident once you try to access any Kite API endpoint from your browser and you are greeted with a CORS error.

However, you can connect to [Kite Websocket](https://kite.trade/docs/connect/v3/websocket/) from your browser using `WebSocket`. You'd need to write your own parser or adapt the code from [here](https://github.com/anurag-roy/kiteconnect-ts/blob/main/lib/ticker/index.ts#L87).

Here's an extremely simple full tick parser that just gets the `token`, `firstBid` and `firstAsk`.

```typescript copy filename="parseTick.ts"
// Tick structure reference: https://kite.trade/docs/connect/v3/websocket/#message-structure
const parseBinary = (dataView: DataView) => {
  const numberOfPackets = dataView.getInt16(0);
  let index = 4;
  const ticks: { token: number; firstBid: number; firstAsk: number }[] = [];

  for (let i = 0; i < numberOfPackets; i++) {
    const size = dataView.getInt16(index - 2);

    // Parse whatever you need
    ticks.push({
      token: dataView.getInt32(index),
      firstBid: dataView.getInt32(index + 68) / 100,
      firstAsk: dataView.getInt32(index + 128) / 100,
    });

    index = index + 2 + size;
  }

  return ticks;
};

const API_KEY = 'INSERT_API_KEY_HERE';
const ACCESS_TOKEN = 'INSERT_ACCESS_TOKEN_HERE';

const ws = new WebSocket(
  `wss://ws.kite.trade?api_key=${API_KEY}&access_token=${ACCESS_TOKEN}`
);

ws.onopen = (_event) => {
  console.log('Connected to Zerodha Kite Socket!');

  const setModeMessage = { a: 'mode', v: ['full', [61512711]] };
  ws.send(JSON.stringify(setModeMessage));
};

ws.onerror = (error) => {
  console.log('Some error occurred', error);
};

ws.onmessage = async (message) => {
  if (message.data instanceof Blob && message.data.size > 2) {
    const arrayBuffer = await message.data.arrayBuffer();
    const dataView = new DataView(arrayBuffer);
    const ticks = parseBinary(dataView);
    console.log(ticks);
  }
};
```
