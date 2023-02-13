# kiteconnect-ts

## 0.4.3

### Patch Changes

- 60d0dbb: fix: Configure axios params serializer
- 0ed0c9f: fix: Add `change` to TickerQuote and TickerFull types

  fix: Make `modeFull`, `modeQuote` and `modeLTP` in KiteTicker non-static for better compatibility with kiteconnectjs

## 0.4.2

### Patch Changes

- 2a30929: fix: Allow axios to transform responses by default

## 0.4.1

### Patch Changes

- 21fce0a: fix: Make parameter optional in `getInstruments`

## 0.4.0

### Minor Changes

- b56ae78: Add KiteConnect module

## 0.3.1

### Patch Changes

- ff21cf7: Add types for tick packets

## 0.3.0

### Minor Changes

- 2e51217: Overall package rewrite to match existing `kiteconnect` APIs for easy migrations and compatibility with existing code.
