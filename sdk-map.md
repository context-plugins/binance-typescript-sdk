<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Binance Public Spot API (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Binance Public Spot API |
| Package | `binance-public-spot-api` |
| Package version | `1.0` |
| API spec version | `1.0` |
| Import specifier | `binance-public-spot-api` — the package root is the **only** entry. Deep imports (`binance-public-spot-api/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/binance-public-spot-api/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { BinancePublicSpotApiClient, ServerEnvironment } from "binance-public-spot-api";

const client = new BinancePublicSpotApiClient({
  serverEnvironment: ServerEnvironment.Production,
  apiKeyAuth: "YOUR_API_KEY",
});
```

The only constructor is `new BinancePublicSpotApiClient(clientOptions: Partial<ClientOptions> = {})`, so `new BinancePublicSpotApiClient()` is valid. Resources are memoized lazy getters on the client — `client.market`, `client.tradeApi`, `client.margin`, `client.wallet`, `client.subAccountApi`, `client.stream`, `client.marginStream`, `client.isolatedMarginStream`, `client.savings`, `client.mining`, `client.futures`, `client.futuresAlgo`, `client.spotAlgo`, `client.portfolioMargin`, `client.blvt`, `client.fiat`, `client.c2C`, `client.vipLoans`, `client.cryptoLoans`, `client.pay`, `client.convert`, `client.rebate`, `client.nft`, `client.giftCard`, `client.autoInvest`, `client.copyTrading`, `client.simpleEarn`, `client.staking`, `client.dualInvestment` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `apiKeyAuth` | `TokenProvider \| undefined` | unset |

The 1 auth field is optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `BinancePublicSpotApiError` set. `BinancePublicSpotApiError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `BinancePublicSpotApiError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.market.hrTickerPriceChangeStatistics24();
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof BinancePublicSpotApiError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **340 operations**, **333** declare typed error bodies and **7** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (29 groups, 340 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `market` | 15 | [map/operations/market.md](map/operations/market.md) |
| `tradeApi` | 23 | [map/operations/trade-api.md](map/operations/trade-api.md) |
| `margin` | 48 | [map/operations/margin.md](map/operations/margin.md) |
| `wallet` | 34 | [map/operations/wallet.md](map/operations/wallet.md) |
| `subAccountApi` | 45 | [map/operations/sub-account-api.md](map/operations/sub-account-api.md) |
| `stream` | 3 | [map/operations/stream.md](map/operations/stream.md) |
| `marginStream` | 3 | [map/operations/margin-stream.md](map/operations/margin-stream.md) |
| `isolatedMarginStream` | 3 | [map/operations/isolated-margin-stream.md](map/operations/isolated-margin-stream.md) |
| `savings` | 4 | [map/operations/savings.md](map/operations/savings.md) |
| `mining` | 13 | [map/operations/mining.md](map/operations/mining.md) |
| `futures` | 3 | [map/operations/futures.md](map/operations/futures.md) |
| `futuresAlgo` | 6 | [map/operations/futures-algo.md](map/operations/futures-algo.md) |
| `spotAlgo` | 5 | [map/operations/spot-algo.md](map/operations/spot-algo.md) |
| `portfolioMargin` | 14 | [map/operations/portfolio-margin.md](map/operations/portfolio-margin.md) |
| `blvt` | 6 | [map/operations/blvt.md](map/operations/blvt.md) |
| `fiat` | 2 | [map/operations/fiat.md](map/operations/fiat.md) |
| `c2C` | 1 | [map/operations/c2-c.md](map/operations/c2-c.md) |
| `vipLoans` | 10 | [map/operations/vip-loans.md](map/operations/vip-loans.md) |
| `cryptoLoans` | 21 | [map/operations/crypto-loans.md](map/operations/crypto-loans.md) |
| `pay` | 1 | [map/operations/pay.md](map/operations/pay.md) |
| `convert` | 9 | [map/operations/convert.md](map/operations/convert.md) |
| `rebate` | 1 | [map/operations/rebate.md](map/operations/rebate.md) |
| `nft` | 4 | [map/operations/nft.md](map/operations/nft.md) |
| `giftCard` | 6 | [map/operations/gift-card.md](map/operations/gift-card.md) |
| `autoInvest` | 17 | [map/operations/auto-invest.md](map/operations/auto-invest.md) |
| `copyTrading` | 2 | [map/operations/copy-trading.md](map/operations/copy-trading.md) |
| `simpleEarn` | 24 | [map/operations/simple-earn.md](map/operations/simple-earn.md) |
| `staking` | 12 | [map/operations/staking.md](map/operations/staking.md) |
| `dualInvestment` | 5 | [map/operations/dual-investment.md](map/operations/dual-investment.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AccountProfit, accountProfitSchema } from "binance-public-spot-api";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 522 | `src/models/` |
| Enums (open; const companion plus schema) | 62 | `src/models/` |
| Unions without a discriminant | 15 | `src/models/unions/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AboveTimeInForce` | `Gtc` to `"GTC"` · `Ioc` to `"IOC"` · `Fok` to `"FOK"` | `aboveTimeInForceSchema` |
| `AccountType` | `Spot` to `"SPOT"` · `Margin` to `"MARGIN"` | `accountTypeSchema` |
| `AccountType3` | `Main` to `"MAIN"` · `Card` to `"CARD"` | `accountType3Schema` |
| `AutoCompoundPlan` | `None` to `"NONE"` · `Standard` to `"STANDARD"` · `Advance` to `"ADVANCE"` | `autoCompoundPlanSchema` |
| `BelowTimeInForce` | `Gtc` to `"GTC"` · `Ioc` to `"IOC"` · `Fok` to `"FOK"` | `belowTimeInForceSchema` |
| `CancelRestrictions` | `OnlyNew` to `"ONLY_NEW"` · `OnlyPartiallyFilled` to `"ONLY_PARTIALLY_FILLED"` | `cancelRestrictionsSchema` |
| `DataType` | `TDepth` to `"T_DEPTH"` · `SDepth` to `"S_DEPTH"` | `dataTypeSchema` |
| `Direction` | `Additional` to `"ADDITIONAL"` · `Reduced` to `"REDUCED"` | `directionSchema` |
| `ExpiredType` | `_1D` to `"1_D"` · `_3D` to `"3_D"` · `_7D` to `"7_D"` · `_30D` to `"30_D"` | `expiredTypeSchema` |
| `FromAccountType` | `Spot` to `"SPOT"` · `UsdtFuture` to `"USDT_FUTURE"` · `CoinFuture` to `"COIN_FUTURE"` · `Margin` to `"MARGIN"` · `IsolatedMargin` to `"ISOLATED_MARGIN"` | `fromAccountTypeSchema` |
| `InterestBnbBurn` | `True` to `"true"` · `False` to `"false"` | `interestBnbBurnSchema` |
| `Interval` | `_1S` to `"1s"` · `_1M` to `"1m"` · `_3M` to `"3m"` · `_5M` to `"5m"` · `_15M` to `"15m"` · `_30M` to `"30m"` · `_1H` to `"1h"` · `_2H` to `"2h"` · `_4H` to `"4h"` · `_6H` to `"6h"` · `_8H` to `"8h"` · `_12H` to `"12h"` · `_1D` to `"1d"` · `_3D` to `"3d"` · `_1W` to `"1w"` · `_1M2` to `"1M"` | `intervalSchema` |
| `IsFlexibleRate` | `True` to `"TRUE"` · `False` to `"FALSE"` | `isFlexibleRateSchema` |
| `IsFreeze` | `True` to `"true"` · `False` to `"false"` | `isFreezeSchema` |
| `IsIsolated` | `True` to `"TRUE"` · `False` to `"FALSE"` | `isIsolatedSchema` |
| `NeedBtcValuation` | `True` to `"true"` · `False` to `"false"` | `needBtcValuationSchema` |
| `NewOrderRespType` | `Ack` to `"ACK"` · `Result` to `"RESULT"` · `Full` to `"FULL"` | `newOrderRespTypeSchema` |
| `OptionType` | `Call` to `"CALL"` · `Put` to `"PUT"` | `optionTypeSchema` |
| `PendingAboveTimeInForce` | `Gtc` to `"GTC"` · `Ioc` to `"IOC"` · `Fok` to `"FOK"` | `pendingAboveTimeInForceSchema` |
| `PendingAboveType` | `LimitMaker` to `"LIMIT_MAKER"` · `StopLoss` to `"STOP_LOSS"` · `StopLossLimit` to `"STOP_LOSS_LIMIT"` | `pendingAboveTypeSchema` |
| `PendingBelowTimeInForce` | `Gtc` to `"GTC"` · `Ioc` to `"IOC"` · `Fok` to `"FOK"` | `pendingBelowTimeInForceSchema` |
| `PendingBelowType` | `LimitMaker` to `"LIMIT_MAKER"` · `StopLoss` to `"STOP_LOSS"` · `StopLossLimit` to `"STOP_LOSS_LIMIT"` | `pendingBelowTypeSchema` |
| `PendingSide` | `Buy` to `"BUY"` · `Sell` to `"SELL"` | `pendingSideSchema` |
| `PendingTimeInForce` | `Gtc` to `"GTC"` · `Ioc` to `"IOC"` · `Fok` to `"FOK"` | `pendingTimeInForceSchema` |
| `PendingType` | `Limit` to `"LIMIT"` · `Market` to `"MARKET"` · `StopLoss` to `"STOP_LOSS"` · `StopLossLimit` to `"STOP_LOSS_LIMIT"` · `TakeProfit` to `"TAKE_PROFIT"` · `TakeProfitLimit` to `"TAKE_PROFIT_LIMIT"` · `LimitMaker` to `"LIMIT_MAKER"` | `pendingTypeSchema` |
| `PlanType` | `Single` to `"SINGLE"` · `Portfolio` to `"PORTFOLIO"` · `Index` to `"INDEX"` | `planTypeSchema` |
| `PlanType1` | `Single` to `"SINGLE"` · `Portfolio` to `"PORTFOLIO"` · `Index` to `"INDEX"` · `All` to `"ALL"` | `planType1Schema` |
| `PositionSide` | `Both` to `"BOTH"` · `Long` to `"LONG"` · `Short` to `"SHORT"` | `positionSideSchema` |
| `RedeemTo` | `Spot` to `"SPOT"` · `Flexible` to `"FLEXIBLE"` | `redeemToSchema` |
| `SelfTradePreventionMode` | `ExpireTaker` to `"EXPIRE_TAKER"` · `ExpireMaker` to `"EXPIRE_MAKER"` · `ExpireBoth` to `"EXPIRE_BOTH"` · `None` to `"NONE"` | `selfTradePreventionModeSchema` |
| `Side` | `Sell` to `"SELL"` · `Buy` to `"BUY"` | `sideSchema` |
| `SideEffectType` | `NoSideEffect` to `"NO_SIDE_EFFECT"` · `MarginBuy` to `"MARGIN_BUY"` · `AutoRepay` to `"AUTO_REPAY"` | `sideEffectTypeSchema` |
| `SideEffectType1` | `NoSideEffect` to `"NO_SIDE_EFFECT"` · `MarginBuy` to `"MARGIN_BUY"` | `sideEffectType1Schema` |
| `SortBy` | `StartTime` to `"START_TIME"` · `LotSize` to `"LOT_SIZE"` · `InterestRate` to `"INTEREST_RATE"` · `Duration` to `"DURATION"` | `sortBySchema` |
| `SourceType` | `MainSite` to `"MAIN_SITE"` · `Tr` to `"TR"` | `sourceTypeSchema` |
| `SpotBnbBurn` | `True` to `"true"` · `False` to `"false"` | `spotBnbBurnSchema` |
| `Status` | `All` to `"ALL"` · `Subscribable` to `"SUBSCRIBABLE"` · `Unsubscribable` to `"UNSUBSCRIBABLE"` | `statusSchema` |
| `Status1` | `Ongoing` to `"ONGOING"` · `Paused` to `"PAUSED"` · `Removed` to `"REMOVED"` | `status1Schema` |
| `Status2` | `Pending` to `"PENDING"` · `PurchaseSuccess` to `"PURCHASE_SUCCESS"` · `Settled` to `"SETTLED"` · `PurchaseFail` to `"PURCHASE_FAIL"` · `Refunding` to `"REFUNDING"` · `RefundSuccess` to `"REFUND_SUCCESS"` · `Settling` to `"SETTLING"` | `status2Schema` |
| `StopLimitTimeInForce` | `Gtc` to `"GTC"` · `Fok` to `"FOK"` · `Ioc` to `"IOC"` | `stopLimitTimeInForceSchema` |
| `SubscriptionCycle` | `H1` to `"H1"` · `H4` to `"H4"` · `H8` to `"H8"` · `H12` to `"H12"` · `Weekly` to `"WEEKLY"` · `Daily` to `"DAILY"` · `Monthly` to `"MONTHLY"` · `BiWeekly` to `"BI_WEEKLY"` | `subscriptionCycleSchema` |
| `SubscriptionStartWeekday` | `Mon` to `"MON"` · `Tue` to `"TUE"` · `Wed` to `"WED"` · `Thu` to `"THU"` · `Fri` to `"FRI"` · `Sat` to `"SAT"` · `Sun` to `"SUN"` | `subscriptionStartWeekdaySchema` |
| `TimeInForce` | `Gtc` to `"GTC"` · `Ioc` to `"IOC"` · `Fok` to `"FOK"` | `timeInForceSchema` |
| `ToAccountType` | `Spot` to `"SPOT"` · `UsdtFuture` to `"USDT_FUTURE"` · `CoinFuture` to `"COIN_FUTURE"` · `Margin` to `"MARGIN"` · `IsolatedMargin` to `"ISOLATED_MARGIN"` | `toAccountTypeSchema` |
| `TradeType` | `Buy` to `"BUY"` · `Sell` to `"SELL"` | `tradeTypeSchema` |
| `TransferFunctionAccountType` | `Spot` to `"SPOT"` · `Margin` to `"MARGIN"` · `IsolatedMargin` to `"ISOLATED_MARGIN"` · `UsdtFuture` to `"USDT_FUTURE"` · `CoinFuture` to `"COIN_FUTURE"` | `transferFunctionAccountTypeSchema` |
| `TransferSide` | `ToUm` to `"TO_UM"` · `FromUm` to `"FROM_UM"` | `transferSideSchema` |
| `Transfers` | `From` to `"FROM"` · `To` to `"TO"` | `transfersSchema` |
| `Type` | `Full` to `"FULL"` · `Mini` to `"MINI"` | `typeSchema` |
| `Type1` | `Limit` to `"LIMIT"` · `Market` to `"MARKET"` · `StopLoss` to `"STOP_LOSS"` · `StopLossLimit` to `"STOP_LOSS_LIMIT"` · `TakeProfit` to `"TAKE_PROFIT"` · `TakeProfitLimit` to `"TAKE_PROFIT_LIMIT"` · `LimitMaker` to `"LIMIT_MAKER"` | `type1Schema` |
| `Type2` | `RollIn` to `"ROLL_IN"` · `RollOut` to `"ROLL_OUT"` | `type2Schema` |
| `Type3` | `Transfer` to `"TRANSFER"` · `Borrow` to `"BORROW"` · `Repay` to `"REPAY"` · `BuyIncome` to `"BUY_INCOME"` · `BuyExpense` to `"BUY_EXPENSE"` · `SellIncome` to `"SELL_INCOME"` · `SellExpense` to `"SELL_EXPENSE"` · `TradingCommission` to `"TRADING_COMMISSION"` · `BuyLiquidation` to `"BUY_LIQUIDATION"` · `SellLiquidation` to `"SELL_LIQUIDATION"` · `RepayLiquidation` to `"REPAY_LIQUIDATION"` · `OtherLiquidation` to `"OTHER_LIQUIDATION"` · `LiquidationFee` to `"LIQUIDATION_FEE"` · `SmallBalanceConvert` to `"SMALL_BALANCE_CONVERT"` · `CommissionReturn` to `"COMMISSION_RETURN"` · `SmallConvert` to `"SMALL_CONVERT"` | `type3Schema` |
| `Type4` | `Margin` to `"MARGIN"` · `Isolated` to `"ISOLATED"` | `type4Schema` |
| `Type6` | `Spot` to `"SPOT"` · `Margin` to `"MARGIN"` · `Futures` to `"FUTURES"` | `type6Schema` |
| `Type7` | `MainC2C` to `"MAIN_C2C"` · `MainUmfuture` to `"MAIN_UMFUTURE"` · `MainCmfuture` to `"MAIN_CMFUTURE"` · `MainMargin` to `"MAIN_MARGIN"` · `MainMining` to `"MAIN_MINING"` · `C2CMain` to `"C2C_MAIN"` · `C2CUmfuture` to `"C2C_UMFUTURE"` · `C2CMining` to `"C2C_MINING"` · `C2CMargin` to `"C2C_MARGIN"` · `UmfutureMain` to `"UMFUTURE_MAIN"` · `UmfutureC2C` to `"UMFUTURE_C2C"` · `UmfutureMargin` to `"UMFUTURE_MARGIN"` · `CmfutureMain` to `"CMFUTURE_MAIN"` · `CmfutureMargin` to `"CMFUTURE_MARGIN"` · `MarginMain` to `"MARGIN_MAIN"` · `MarginUmfuture` to `"MARGIN_UMFUTURE"` · `MarginCmfuture` to `"MARGIN_CMFUTURE"` · `MarginMining` to `"MARGIN_MINING"` · `MarginC2C` to `"MARGIN_C2C"` · `MiningMain` to `"MINING_MAIN"` · `MiningUmfuture` to `"MINING_UMFUTURE"` · `MiningC2C` to `"MINING_C2C"` · `MiningMargin` to `"MINING_MARGIN"` · `MainPay` to `"MAIN_PAY"` · `PayMain` to `"PAY_MAIN"` · `IsolatedmarginMargin` to `"ISOLATEDMARGIN_MARGIN"` · `MarginIsolatedmargin` to `"MARGIN_ISOLATEDMARGIN"` · `IsolatedmarginIsolatedmargin` to `"ISOLATEDMARGIN_ISOLATEDMARGIN"` | `type7Schema` |
| `Type8` | `Activity` to `"ACTIVITY"` · `CustomizedFixed` to `"CUSTOMIZED_FIXED"` | `type8Schema` |
| `Type9` | `BorrowIn` to `"borrowIn"` · `CollateralSpent` to `"collateralSpent"` · `RepayAmount` to `"repayAmount"` · `CollateralReturn` to `"collateralReturn"` · `AddCollateral` to `"addCollateral"` · `RemoveCollateral` to `"removeCollateral"` · `CollateralReturnAfterLiquidation` to `"collateralReturnAfterLiquidation"` | `type9Schema` |
| `Urgency` | `Low` to `"LOW"` · `Medium` to `"MEDIUM"` · `High` to `"HIGH"` | `urgencySchema` |
| `WalletType` | `Spot` to `"SPOT"` · `Funding` to `"FUNDING"` · `SpotFunding` to `"SPOT_FUNDING"` | `walletTypeSchema` |
| `WorkingSide` | `Buy` to `"BUY"` · `Sell` to `"SELL"` | `workingSideSchema` |
| `WorkingTimeInForce` | `Gtc` to `"GTC"` · `Ioc` to `"IOC"` · `Fok` to `"FOK"` | `workingTimeInForceSchema` |
| `WorkingType` | `Limit` to `"LIMIT"` · `LimitMaker` to `"LIMIT_MAKER"` | `workingTypeSchema` |

**Unions.** A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import. One without a discriminant is narrowed on the shape of its arms.

| Union | Variants | Narrow with | Source |
| --- | --- | --- | --- |
| `ApiV3KlinesResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/api-v3-klines-response.ts` |
| `ApiV3OpenOrdersResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/api-v3-open-orders-response.ts` |
| `ApiV3OrderResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/api-v3-order-response.ts` |
| `ApiV3Ticker24HrResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/api-v3-ticker24-hr-response.ts` |
| `ApiV3TickerBookTickerResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/api-v3-ticker-book-ticker-response.ts` |
| `ApiV3TickerPriceResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/api-v3-ticker-price-response.ts` |
| `ApiV3TickerTradingDayResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/api-v3-ticker-trading-day-response.ts` |
| `ApiV3UiKlinesResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/api-v3-ui-klines-response.ts` |
| `SapiV1AccountSnapshotResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/sapi-v1-account-snapshot-response.ts` |
| `SapiV1LoanRepayResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/sapi-v1-loan-repay-response.ts` |
| `SapiV1MarginOpenOrdersResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/sapi-v1-margin-open-orders-response.ts` |
| `SapiV1MarginOrderResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/sapi-v1-margin-order-response.ts` |
| `SapiV2SubAccountFuturesAccountResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/sapi-v2-sub-account-futures-account-response.ts` |
| `SapiV2SubAccountFuturesAccountSummaryResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/sapi-v2-sub-account-futures-account-summary-response.ts` |
| `SapiV2SubAccountFuturesPositionRiskResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/sapi-v2-sub-account-futures-position-risk-response.ts` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `Assets` | `matic` | `MATIC` |
| `Assets` | `stpt` | `STPT` |
| `Assets` | `tvk` | `TVK` |
| `Assets` | `shib` | `SHIB` |
| `DeliveryAccountSummaryResp` | `totalMarginBalanceOfBtc` | `totalMarginBalanceOfBTC` |
| `DeliveryAccountSummaryResp` | `totalUnrealizedProfitOfBtc` | `totalUnrealizedProfitOfBTC` |
| `DeliveryAccountSummaryResp` | `totalWalletBalanceOfBtc` | `totalWalletBalanceOfBTC` |
| `Detail` | `toBtc` | `toBTC` |
| `Detail` | `toBnb` | `toBNB` |
| `Detail` | `toBnbOffExchange` | `toBNBOffExchange` |
| `Detail3` | `averagePriceInUsd` | `averagePriceInUSD` |
| `Detail3` | `totalInvestedInUsd` | `totalInvestedInUSD` |
| `Detail3` | `pnlInUsd` | `pnlInUSD` |
| `Detail3` | `assetValueInUsd` | `assetValueInUSD` |
| `Detail4` | `averagePriceInUsd` | `averagePriceInUSD` |
| `Detail4` | `totalInvestedInUsd` | `totalInvestedInUSD` |
| `Detail4` | `currentInvestedInUsd` | `currentInvestedInUSD` |
| `Detail4` | `pnlInUsd` | `pnlInUSD` |
| `Detail4` | `assetValueInUsd` | `assetValueInUSD` |
| `Detail6` | `extraRewardApr` | `extraRewardAPR` |
| `ExchangeRates` | `usdc` | `USDC` |
| `ExchangeRates` | `tusd` | `TUSD` |
| `ExchangeRates` | `usdp` | `USDP` |
| `Indicators` | `btcusdt` | `BTCUSDT` |
| `List4` | `txId` | `txID` |
| `List5` | `txId` | `txID` |
| `ManagerSubUserInfoVoList` | `isSignedLvtRiskAgreement` | `isSignedLVTRiskAgreement` |
| `Plan` | `totalInvestedInUsd` | `totalInvestedInUSD` |
| `Plan` | `planValueInUsd` | `planValueInUSD` |
| `Plan` | `pnlInUsd` | `pnlInUSD` |
| `Plan1` | `totalInvestedInUsd` | `totalInvestedInUSD` |
| `Plan1` | `planValueInUsd` | `planValueInUSD` |
| `Plan1` | `pnlInUsd` | `pnlInUSD` |
| `Profit` | `amountFromWbeth` | `amountFromWBETH` |
| `Profit` | `amountFromBeth` | `amountFromBETH` |
| `ProfitToday` | `btc` | `BTC` |
| `ProfitToday` | `bsv` | `BSV` |
| `ProfitToday` | `bch` | `BCH` |
| `ProfitYesterday` | `btc` | `BTC` |
| `ProfitYesterday` | `bsv` | `BSV` |
| `ProfitYesterday` | `bch` | `BCH` |
| `Row12` | `currentLtv` | `currentLTV` |
| `Row15` | `flexibleDailyInterestRate` | `_flexibleDailyInterestRate` |
| `Row15` | `flexibleYearlyInterestRate` | `_flexibleYearlyInterestRate` |
| `Row15` | `DDailyInterestRate30` | `_30dDailyInterestRate` |
| `Row15` | `DYearlyInterestRate30` | `_30dYearlyInterestRate` |
| `Row15` | `DDailyInterestRate60` | `_60dDailyInterestRate` |
| `Row15` | `DYearlyInterestRate60` | `_60dYearlyInterestRate` |
| `Row16` | `StCollateralRatio1` | `_1stCollateralRatio` |
| `Row16` | `StCollateralRange1` | `_1stCollateralRange` |
| `Row16` | `NdCollateralRatio2` | `_2ndCollateralRatio` |
| `Row16` | `NdCollateralRange2` | `_2ndCollateralRange` |
| `Row16` | `RdCollateralRatio3` | `_3rdCollateralRatio` |
| `Row16` | `RdCollateralRange3` | `_3rdCollateralRange` |
| `Row16` | `ThCollateralRatio4` | `_4thCollateralRatio` |
| `Row16` | `ThCollateralRange4` | `_4thCollateralRange` |
| `Row19` | `currentLtv` | `currentLTV` |
| `Row21` | `preLtv` | `preLTV` |
| `Row21` | `afterLtv` | `afterLTV` |
| `Row22` | `DHourlyInterestRate7` | `_7dHourlyInterestRate` |
| `Row22` | `DDailyInterestRate7` | `_7dDailyInterestRate` |
| `Row22` | `DHourlyInterestRate14` | `_14dHourlyInterestRate` |
| `Row22` | `DDailyInterestRate14` | `_14dDailyInterestRate` |
| `Row22` | `DHourlyInterestRate30` | `_30dHourlyInterestRate` |
| `Row22` | `DDailyInterestRate30` | `_30dDailyInterestRate` |
| `Row22` | `DHourlyInterestRate90` | `_90dHourlyInterestRate` |
| `Row22` | `DDailyInterestRate90` | `_90dDailyInterestRate` |
| `Row22` | `DHourlyInterestRate180` | `_180dHourlyInterestRate` |
| `Row22` | `DDailyInterestRate180` | `_180dDailyInterestRate` |
| `Row23` | `initialLtv` | `initialLTV` |
| `Row23` | `marginCallLtv` | `marginCallLTV` |
| `Row23` | `liquidationLtv` | `liquidationLTV` |
| `Row25` | `currentLtv` | `currentLTV` |
| `Row28` | `preLtv` | `preLTV` |
| `Row28` | `afterLtv` | `afterLTV` |
| `Row30` | `initialLtv` | `initialLTV` |
| `Row30` | `marginCallLtv` | `marginCallLTV` |
| `Row30` | `liquidationLtv` | `liquidationLTV` |
| `Row37` | `amountInEth` | `amountInETH` |
| `Row37` | `holdingInEth` | `holdingInETH` |
| `Row41` | `apy` | `APY` |
| `Row41` | `extraRewardApr` | `extraRewardAPR` |
| `SapiV1AssetAssetDetailResponse` | `ctr` | `CTR` |
| `SapiV1AssetDustBtcResponse` | `totalTransferBnb` | `totalTransferBNB` |
| `SapiV1DciProductAccountsResponse` | `totalAmountInBtc` | `totalAmountInBTC` |
| `SapiV1DciProductAccountsResponse` | `totalAmountInUsdt` | `totalAmountInUSDT` |
| `SapiV1DciProductSubscribeResponse` | `optionType` | `optionType"` |
| `SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse` | `estRewardsInEth` | `estRewardsInETH` |
| `SapiV1LendingAutoInvestIndexUserSummaryResponse` | `totalInvestedInUsd` | `totalInvestedInUSD` |
| `SapiV1LendingAutoInvestIndexUserSummaryResponse` | `currentInvestedInUsd` | `currentInvestedInUSD` |
| `SapiV1LendingAutoInvestIndexUserSummaryResponse` | `pnlInUsd` | `pnlInUSD` |
| `SapiV1LendingAutoInvestPlanIdResponse` | `planValueInUsd` | `planValueInUSD` |
| `SapiV1LendingAutoInvestPlanIdResponse` | `planValueInBtc` | `planValueInBTC` |
| `SapiV1LendingAutoInvestPlanIdResponse` | `pnlInUsd` | `pnlInUSD` |
| `SapiV1LendingAutoInvestPlanListResponse` | `planValueInUsd` | `planValueInUSD` |
| `SapiV1LendingAutoInvestPlanListResponse` | `planValueInBtc` | `planValueInBTC` |
| `SapiV1LendingAutoInvestPlanListResponse` | `pnlInUsd` | `pnlInUSD` |
| `SapiV1LoanAdjustLtvResponse` | `currentLtv` | `currentLTV` |
| `SapiV1LoanVipRepayResponse` | `currentLtv` | `currentLTV` |
| `SapiV1MarginAccountResponse` | `totalCollateralValueInUsdt` | `TotalCollateralValueInUSDT` |
| `SapiV1PortfolioAccountResponse` | `uniMmr` | `uniMMR` |
| `SapiV1SimpleEarnAccountResponse` | `totalAmountInBtc` | `totalAmountInBTC` |
| `SapiV1SimpleEarnAccountResponse` | `totalAmountInUsdt` | `totalAmountInUSDT` |
| `SapiV1SimpleEarnAccountResponse` | `totalFlexibleAmountInBtc` | `totalFlexibleAmountInBTC` |
| `SapiV1SimpleEarnAccountResponse` | `totalFlexibleAmountInUsdt` | `totalFlexibleAmountInUSDT` |
| `SapiV1SimpleEarnAccountResponse` | `totalLockedInBtc` | `totalLockedInBTC` |
| `SapiV1SimpleEarnAccountResponse` | `totalLockedInUsdt` | `totalLockedInUSDT` |
| `SapiV2EthStakingAccountResponse` | `holdingInEth` | `holdingInETH` |
| `SapiV2EthStakingAccountResponse` | `thirtyDaysProfitInEth` | `thirtyDaysProfitInETH` |
| `SapiV2LoanFlexibleAdjustLtvResponse` | `currentLtv` | `currentLTV` |
| `SapiV2LoanFlexibleRepayResponse` | `currentLtv` | `currentLTV` |
| `TierAnnualPercentageRate` | `Btc05` | `0-5BTC` |
| `TierAnnualPercentageRate` | `Btc510` | `5-10BTC` |
| `TriggerCondition` | `gcr` | `GCR` |
| `TriggerCondition` | `ifer` | `IFER` |
| `TriggerCondition` | `ufr` | `UFR` |
| `AggTrade` | `t` | `T` |
| `AggTrade` | `m2` | `M` |
| `BnbBurnStatus` | `spotBnbBurn` | `spotBNBBurn` |
| `BnbBurnStatus` | `interestBnbBurn` | `interestBNBBurn` |
| `RepaymentInfo` | `currentLtv` | `currentLTV` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **321 of the 340 operations** require a credential and **19** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `apiKeyAuth` | `apiKeyAuth` | header `X-MBX-APIKEY: <key>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |
| `ServerEnvironment.Environment2` | `environment2` |

**Server groups.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://api.binance.com` | — |
| `default` | `environment2` | `https://testnet.binance.vision` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("binance-public-spot-api")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Nothing else — no credential this SDK sends reaches for a further global. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

