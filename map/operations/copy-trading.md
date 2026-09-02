<!-- Generated file — do not edit; regenerated with the SDK. -->

# CopyTrading — operations

Accessor: `client.copyTrading` · Source: `src/resources/copy-trading.ts` · 2 operations · Request and error types: namespace `CopyTrading`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getFuturesLeadTraderStatusTrade

- **Signature**: `getFuturesLeadTraderStatusTrade(request: CopyTrading.GetFuturesLeadTraderStatusTradeRequest, options?: RequestOptions): ApiPromise<SapiV1CopyTradingFuturesUserStatusResponse, CopyTrading.GetFuturesLeadTraderStatusTradeError>`
- **Wire**: `GET /sapi/v1/copyTrading/futures/userStatus`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CopyTradingFuturesUserStatusResponse`
- **Error**: `CopyTrading.GetFuturesLeadTraderStatusTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CopyTrading.GetFuturesLeadTraderStatusTradeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CopyTradingFuturesUserStatusResponse` | `sapiV1CopyTradingFuturesUserStatusResponseSchema` | `src/models/sapi-v1-copy-trading-futures-user-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFuturesLeadTradingSymbolWhitelistUserData

- **Signature**: `getFuturesLeadTradingSymbolWhitelistUserData(request: CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1CopyTradingFuturesLeadSymbolResponse, CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataError>`
- **Wire**: `GET /sapi/v1/copyTrading/futures/leadSymbol`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CopyTradingFuturesLeadSymbolResponse`
- **Error**: `CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CopyTradingFuturesLeadSymbolResponse` | `sapiV1CopyTradingFuturesLeadSymbolResponseSchema` | `src/models/sapi-v1-copy-trading-futures-lead-symbol-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

