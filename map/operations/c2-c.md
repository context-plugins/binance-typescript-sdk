<!-- Generated file — do not edit; regenerated with the SDK. -->

# C2C — operations

Accessor: `client.c2C` · Source: `src/resources/c2-c.ts` · 1 operation · Request and error types: namespace `C2C`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getC2CTradeHistoryUserData

- **Signature**: `getC2CTradeHistoryUserData(request: C2C.GetC2CTradeHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1C2COrderMatchListUserOrderHistoryResponse, C2C.GetC2CTradeHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/c2c/orderMatch/listUserOrderHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1C2COrderMatchListUserOrderHistoryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `C2C.GetC2CTradeHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `C2C.GetC2CTradeHistoryUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tradeType` | `query` | `TradeType` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTimestamp` | `query` | `number` | no |
| `endTimestamp` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `rows` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TradeType` | `tradeTypeSchema` | `src/models/trade-type.ts` |
| `SapiV1C2COrderMatchListUserOrderHistoryResponse` | `sapiV1C2COrderMatchListUserOrderHistoryResponseSchema` | `src/models/sapi-v1-c2-corder-match-list-user-order-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

