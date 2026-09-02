<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pay — operations

Accessor: `client.pay` · Source: `src/resources/pay.ts` · 1 operation · Request and error types: namespace `Pay`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getPayTradeHistoryUserData

- **Signature**: `getPayTradeHistoryUserData(request: Pay.GetPayTradeHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PayTransactionsResponse, Pay.GetPayTradeHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/pay/transactions`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1PayTransactionsResponse`
- **Error**: `Pay.GetPayTradeHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pay.GetPayTradeHistoryUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PayTransactionsResponse` | `sapiV1PayTransactionsResponseSchema` | `src/models/sapi-v1-pay-transactions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

