import * as assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

import { KiteTicker } from 'kiteconnect-ts';

const __dirname = path.dirname(
  fileURLToPath((import.meta as ImportMeta & { url: string }).url)
);

// Ticker binary packets
const ltpPacket = 'ltpMode_binary.packet';
const quotePacket = 'quoteMode_binary.packet';
const fullPacket = 'fullMode_binary.packet';

// Read binary packets
function readBufferPacket(fileName: string) {
  const rawData = fs.readFileSync(path.join(__dirname, fileName));
  return rawData;
}

// Convert buffer to binary buffer array
function toArrayBuffer(tickerMode: string) {
  const buf = readBufferPacket(tickerMode);
  const ab = new ArrayBuffer(buf.length);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    view[i] = buf[i]!;
  }
  return ab;
}

// Run ticker tests
const ticker = new KiteTicker({
  api_key: 'api_key',
  access_token: 'access_token',
});

class FakeWebSocket {
  static readonly CONNECTING = 0;
  static readonly OPEN = 1;
  static readonly CLOSING = 2;
  static readonly CLOSED = 3;
  static readonly instances: FakeWebSocket[] = [];

  readonly constructorArgs: unknown[];
  readonly sent: string[] = [];
  binaryType = 'blob';
  readyState = FakeWebSocket.CONNECTING;
  onopen: ((event: Event) => void) | null = null;
  onmessage: ((event: MessageEvent) => void) | null = null;
  onerror: ((event: Event) => void) | null = null;
  onclose: ((event: CloseEvent) => void) | null = null;

  constructor(...args: unknown[]) {
    this.constructorArgs = args;
    FakeWebSocket.instances.push(this);
  }

  open() {
    this.readyState = FakeWebSocket.OPEN;
    this.onopen?.(new Event('open'));
  }

  message(data: string | ArrayBuffer) {
    this.onmessage?.(new MessageEvent('message', { data }));
  }

  send(data: string) {
    this.sent.push(data);
  }

  close() {
    if (this.readyState === FakeWebSocket.CLOSED) return;
    this.readyState = FakeWebSocket.CLOSED;
    this.onclose?.(new CloseEvent('close', { code: 1000 }));
  }
}

describe('KiteTicker', () => {
  // Fetch ltp mode tick data
  it('Fetch ltp mode tick data', () => {
    const tickData = ticker['parseBinary'](toArrayBuffer(ltpPacket));
    assert.ok(Array.isArray(tickData));
    assert.strictEqual(tickData[0].mode, 'ltp');
    assert.ok(tickData[0].hasOwnProperty('instrument_token'));
    assert.ok(tickData[0].hasOwnProperty('last_price'));
  });

  // Fetch quote mode tick data
  it('Fetch quote mode tick data', () => {
    const tickData = ticker['parseBinary'](toArrayBuffer(quotePacket));
    assert.ok(Array.isArray(tickData));
    assert.strictEqual(tickData[0].mode, 'quote');
    assert.ok(tickData[0].hasOwnProperty('instrument_token'));
    assert.ok(tickData[0].hasOwnProperty('ohlc'));
    assert.ok(tickData[0].hasOwnProperty('volume_traded'));
  });

  // Fetch Full mode tick data
  it('Fetch full mode tick data', () => {
    const tickData = ticker['parseBinary'](toArrayBuffer(fullPacket));
    assert.ok(Array.isArray(tickData));
    assert.strictEqual(tickData[0].mode, 'full');
    assert.ok(tickData[0].hasOwnProperty('exchange_timestamp'));
    assert.ok(tickData[0].hasOwnProperty('last_trade_time'));
    assert.ok(tickData[0].hasOwnProperty('depth'));
  });

  it('uses the runtime WebSocket without handshake headers', () => {
    const originalWebSocket = globalThis.WebSocket;
    FakeWebSocket.instances.length = 0;
    Object.assign(globalThis, {
      WebSocket: FakeWebSocket as unknown as typeof WebSocket,
    });

    try {
      const runtimeTicker = new KiteTicker({
        api_key: 'api key',
        access_token: 'access token',
        reconnect: false,
        root: 'wss://example.test/stream',
      });
      let connectCount = 0;
      let disconnectCount = 0;
      const events: {
        message?: ArrayBuffer;
        ticks?: unknown[];
        order?: { order_timestamp?: Date };
      } = {};

      runtimeTicker.on('connect', () => {
        connectCount++;
      });
      runtimeTicker.on('disconnect', () => {
        disconnectCount++;
      });
      runtimeTicker.on('message', (data) => {
        events.message = data;
      });
      runtimeTicker.on('ticks', (ticks) => {
        events.ticks = ticks;
      });
      runtimeTicker.on('order_update', (order) => {
        events.order = order;
      });

      runtimeTicker.connect();
      runtimeTicker.connect();

      assert.equal(FakeWebSocket.instances.length, 1);
      const socket = FakeWebSocket.instances[0]!;
      assert.equal(socket.constructorArgs.length, 1);
      const url = new URL(String(socket.constructorArgs[0]));
      assert.equal(url.origin, 'wss://example.test');
      assert.equal(url.pathname, '/stream');
      assert.equal(url.searchParams.get('api_key'), 'api key');
      assert.equal(url.searchParams.get('access_token'), 'access token');
      assert.ok(url.searchParams.get('uid'));
      assert.equal(socket.binaryType, 'arraybuffer');

      socket.open();
      assert.equal(connectCount, 1);
      assert.equal(runtimeTicker.connected(), true);

      runtimeTicker.subscribe([738561]);
      runtimeTicker.setMode('full', [738561]);
      assert.deepEqual(socket.sent.map((message) => JSON.parse(message)), [
        { a: 'subscribe', v: [738561] },
        { a: 'mode', v: ['full', [738561]] },
      ]);

      const packet = toArrayBuffer(ltpPacket);
      socket.message(packet);
      assert.equal(events.message, packet);
      assert.equal((events.ticks?.[0] as { mode?: string }).mode, 'ltp');

      socket.message(
        JSON.stringify({
          type: 'order',
          data: { order_timestamp: '2026-07-18 10:00:00' },
        })
      );
      assert.ok(events.order?.order_timestamp instanceof Date);

      runtimeTicker.disconnect();
      assert.equal(disconnectCount, 1);
      assert.equal(runtimeTicker.connected(), false);
      assert.equal(FakeWebSocket.instances.length, 1);
    } finally {
      Object.assign(globalThis, { WebSocket: originalWebSocket });
    }
  });
});
