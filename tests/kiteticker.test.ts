import * as assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';

import { KiteTicker } from '../lib/ticker';

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

// Fetch ltp mode tick data
test('ltpModeTick', async (t) => {
  await t.test('Fetch ltp mode tick data', () => {
    const tickData = ticker['parseBinary'](toArrayBuffer(ltpPacket));
    assert.ok(Array.isArray(tickData));
    assert.strictEqual(tickData[0].mode, 'ltp');
    assert.ok(tickData[0].hasOwnProperty('instrument_token'));
    assert.ok(tickData[0].hasOwnProperty('last_price'));
  });
});

// Fetch quote mode tick data
test('quoteModeTick', async (t) => {
  await t.test('Fetch quote mode tick data', () => {
    const tickData = ticker['parseBinary'](toArrayBuffer(quotePacket));
    assert.ok(Array.isArray(tickData));
    assert.strictEqual(tickData[0].mode, 'quote');
    assert.ok(tickData[0].hasOwnProperty('instrument_token'));
    assert.ok(tickData[0].hasOwnProperty('ohlc'));
    assert.ok(tickData[0].hasOwnProperty('volume_traded'));
  });
});

// Fetch Full mode tick data
test('fullModeTick', async (t) => {
  await t.test('Fetch full mode tick data', () => {
    const tickData = ticker['parseBinary'](toArrayBuffer(fullPacket));
    assert.ok(Array.isArray(tickData));
    assert.strictEqual(tickData[0].mode, 'full');
    assert.ok(tickData[0].hasOwnProperty('exchange_timestamp'));
    assert.ok(tickData[0].hasOwnProperty('last_trade_time'));
    assert.ok(tickData[0].hasOwnProperty('depth'));
  });
});
