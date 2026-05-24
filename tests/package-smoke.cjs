const assert = require('node:assert/strict');

const cjs = require('kiteconnect-ts');
assert.equal(typeof cjs.KiteConnect, 'function');
assert.equal(typeof cjs.KiteTicker, 'function');

(async () => {
  const esm = await import('kiteconnect-ts');
  assert.equal(typeof esm.KiteConnect, 'function');
  assert.equal(typeof esm.KiteTicker, 'function');
})();
