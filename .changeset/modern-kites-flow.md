---
"kiteconnect-ts": major
---

Require Node.js 24 and modernize the package build pipeline with Bun and tsdown.

Add support for recent Kite Connect order parameters and response types:

- Add `MarketProtections.AUTO` and `market_protection` support for `placeOrder` and `modifyOrder`.
- Add `autoslice` support for `placeOrder`, including exported `AutosliceChild` and `AutosliceOrderResponse` types.
- Fix `getMargins` typings so `getMargins()` returns both segment margins, while `getMargins("equity")` and `getMargins("commodity")` return a single `UserMargin`.

Refresh generated docs and package validation around the updated public API.
