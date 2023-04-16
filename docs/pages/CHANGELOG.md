# kiteconnect-ts

## 0.5.0

### Minor Changes

- 5e7c7e9: Add enums for KiteConnect and KiteTicker. See [note on enum usage](https://github.com/anurag-roy/kiteconnect-ts#using-provided-enums) for more details.

## 0.4.5

### Patch Changes

- a018479: Fix return types for margin APIs when `compact` flag is true

## 0.4.4

### Patch Changes

- 0a89c53: Add notes on browser support

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
