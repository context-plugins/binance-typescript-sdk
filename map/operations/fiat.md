<!-- Generated file — do not edit; regenerated with the SDK. -->

# Fiat — operations

Accessor: `client.fiat` · Source: `src/resources/fiat.ts` · 2 operations · Request and error types: namespace `Fiat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fiatDepositWithdrawHistoryUserData

- **Signature**: `fiatDepositWithdrawHistoryUserData(request: Fiat.FiatDepositWithdrawHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1FiatOrdersResponse, Fiat.FiatDepositWithdrawHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/fiat/orders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1FiatOrdersResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Fiat.FiatDepositWithdrawHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fiat.FiatDepositWithdrawHistoryUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionType` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `beginTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `rows` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1FiatOrdersResponse` | `sapiV1FiatOrdersResponseSchema` | `src/models/sapi-v1-fiat-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fiatPaymentsHistoryUserData

- **Signature**: `fiatPaymentsHistoryUserData(request: Fiat.FiatPaymentsHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1FiatPaymentsResponse, Fiat.FiatPaymentsHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/fiat/payments`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1FiatPaymentsResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Fiat.FiatPaymentsHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fiat.FiatPaymentsHistoryUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionType` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `beginTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `rows` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1FiatPaymentsResponse` | `sapiV1FiatPaymentsResponseSchema` | `src/models/sapi-v1-fiat-payments-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

