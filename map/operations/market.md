<!-- Generated file — do not edit; regenerated with the SDK. -->

# Market — operations

Accessor: `client.market` · Source: `src/resources/market.ts` · 15 operations · Request and error types: namespace `Market`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### hrTickerPriceChangeStatistics24

- **Signature**: `hrTickerPriceChangeStatistics24(request: Market.HrTickerPriceChangeStatistics24Request, options?: RequestOptions): ApiPromise<ApiV3Ticker24HrResponse, Market.HrTickerPriceChangeStatistics24Error>`
- **Wire**: `GET /api/v3/ticker/24hr`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3Ticker24HrResponse`
- **Error**: `Market.HrTickerPriceChangeStatistics24Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.HrTickerPriceChangeStatistics24Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `symbols` | `query` | `string` | no |
| `type` | `query` | `Type` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `ApiV3Ticker24HrResponse` | `apiV3Ticker24HrResponseSchema` | `src/models/unions/api-v3-ticker24-hr-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### checkServerTime

- **Signature**: `checkServerTime(options?: RequestOptions): ApiPromise<ApiV3TimeResponse, ResponseError>`
- **Wire**: `GET /api/v3/time`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3TimeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3TimeResponse` | `apiV3TimeResponseSchema` | `src/models/api-v3-time-response.ts` |

### compressedAggregateTradesList

- **Signature**: `compressedAggregateTradesList(request: Market.CompressedAggregateTradesListRequest, options?: RequestOptions): ApiPromise<AggTrade[], Market.CompressedAggregateTradesListError>`
- **Wire**: `GET /api/v3/aggTrades`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AggTrade[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Market.CompressedAggregateTradesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.CompressedAggregateTradesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `fromId` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggTrade` | `aggTradeSchema` | `src/models/agg-trade.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### currentAveragePrice

- **Signature**: `currentAveragePrice(request: Market.CurrentAveragePriceRequest, options?: RequestOptions): ApiPromise<ApiV3AvgPriceResponse, Market.CurrentAveragePriceError>`
- **Wire**: `GET /api/v3/avgPrice`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3AvgPriceResponse`
- **Error**: `Market.CurrentAveragePriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.CurrentAveragePriceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3AvgPriceResponse` | `apiV3AvgPriceResponseSchema` | `src/models/api-v3-avg-price-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### exchangeInformation

- **Signature**: `exchangeInformation(request: Market.ExchangeInformationRequest, options?: RequestOptions): ApiPromise<ApiV3ExchangeInfoResponse, Market.ExchangeInformationError>`
- **Wire**: `GET /api/v3/exchangeInfo`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3ExchangeInfoResponse`
- **Error**: `Market.ExchangeInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.ExchangeInformationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `symbols` | `query` | `string` | no |
| `permissions` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3ExchangeInfoResponse` | `apiV3ExchangeInfoResponseSchema` | `src/models/api-v3-exchange-info-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### klineCandlestickData

- **Signature**: `klineCandlestickData(request: Market.KlineCandlestickDataRequest, options?: RequestOptions): ApiPromise<ApiV3KlinesResponse[][], Market.KlineCandlestickDataError>`
- **Wire**: `GET /api/v3/klines`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3KlinesResponse[][]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Market.KlineCandlestickDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.KlineCandlestickDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `interval` | `query` | `Interval` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `timeZone` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Interval` | `intervalSchema` | `src/models/interval.ts` |
| `ApiV3KlinesResponse` | `apiV3KlinesResponseSchema` | `src/models/unions/api-v3-klines-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### oldTradeLookup

- **Signature**: `oldTradeLookup(request: Market.OldTradeLookupRequest, options?: RequestOptions): ApiPromise<Trade[], ResponseError>`
- **Wire**: `GET /api/v3/historicalTrades`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Trade[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Market.OldTradeLookupRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |
| `fromId` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Trade` | `tradeSchema` | `src/models/trade.ts` |

### orderBook

- **Signature**: `orderBook(request: Market.OrderBookRequest, options?: RequestOptions): ApiPromise<ApiV3DepthResponse, Market.OrderBookError>`
- **Wire**: `GET /api/v3/depth`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3DepthResponse`
- **Error**: `Market.OrderBookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.OrderBookRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes | — |
| `limit` | `query` | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3DepthResponse` | `apiV3DepthResponseSchema` | `src/models/api-v3-depth-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### recentTradesList

- **Signature**: `recentTradesList(request: Market.RecentTradesListRequest, options?: RequestOptions): ApiPromise<Trade[], Market.RecentTradesListError>`
- **Wire**: `GET /api/v3/trades`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Trade[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Market.RecentTradesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.RecentTradesListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Trade` | `tradeSchema` | `src/models/trade.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### rollingWindowPriceChangeStatistics

- **Signature**: `rollingWindowPriceChangeStatistics(request: Market.RollingWindowPriceChangeStatisticsRequest, options?: RequestOptions): ApiPromise<ApiV3TickerResponse, Market.RollingWindowPriceChangeStatisticsError>`
- **Wire**: `GET /api/v3/ticker`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3TickerResponse`
- **Error**: `Market.RollingWindowPriceChangeStatisticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.RollingWindowPriceChangeStatisticsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `symbols` | `query` | `string` | no |
| `windowSize` | `query` | `string` | no |
| `type` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3TickerResponse` | `apiV3TickerResponseSchema` | `src/models/api-v3-ticker-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### symbolOrderBookTicker

- **Signature**: `symbolOrderBookTicker(request: Market.SymbolOrderBookTickerRequest, options?: RequestOptions): ApiPromise<ApiV3TickerBookTickerResponse, Market.SymbolOrderBookTickerError>`
- **Wire**: `GET /api/v3/ticker/bookTicker`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3TickerBookTickerResponse`
- **Error**: `Market.SymbolOrderBookTickerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.SymbolOrderBookTickerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `symbols` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3TickerBookTickerResponse` | `apiV3TickerBookTickerResponseSchema` | `src/models/unions/api-v3-ticker-book-ticker-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### symbolPriceTicker

- **Signature**: `symbolPriceTicker(request: Market.SymbolPriceTickerRequest, options?: RequestOptions): ApiPromise<ApiV3TickerPriceResponse, Market.SymbolPriceTickerError>`
- **Wire**: `GET /api/v3/ticker/price`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3TickerPriceResponse`
- **Error**: `Market.SymbolPriceTickerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.SymbolPriceTickerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `symbols` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3TickerPriceResponse` | `apiV3TickerPriceResponseSchema` | `src/models/unions/api-v3-ticker-price-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### testConnectivity

- **Signature**: `testConnectivity(options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError>`
- **Wire**: `GET /api/v3/ping`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

### tradingDayTicker

- **Signature**: `tradingDayTicker(request: Market.TradingDayTickerRequest, options?: RequestOptions): ApiPromise<ApiV3TickerTradingDayResponse, Market.TradingDayTickerError>`
- **Wire**: `GET /api/v3/ticker/tradingDay`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3TickerTradingDayResponse`
- **Error**: `Market.TradingDayTickerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.TradingDayTickerRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | no |
| `symbols` | `query` | `string` | no |
| `timeZone` | `query` | `string` | no |
| `type` | `query` | `Type` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `ApiV3TickerTradingDayResponse` | `apiV3TickerTradingDayResponseSchema` | `src/models/unions/api-v3-ticker-trading-day-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### uiKlines

- **Signature**: `uiKlines(request: Market.UiKlinesRequest, options?: RequestOptions): ApiPromise<ApiV3UiKlinesResponse[][], Market.UiKlinesError>`
- **Wire**: `GET /api/v3/uiKlines`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3UiKlinesResponse[][]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Market.UiKlinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.UiKlinesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `interval` | `query` | `Interval` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `timeZone` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Interval` | `intervalSchema` | `src/models/interval.ts` |
| `ApiV3UiKlinesResponse` | `apiV3UiKlinesResponseSchema` | `src/models/unions/api-v3-ui-klines-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

