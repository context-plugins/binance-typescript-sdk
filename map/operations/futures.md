<!-- Generated file — do not edit; regenerated with the SDK. -->

# Futures — operations

Accessor: `client.futures` · Source: `src/resources/futures.ts` · 3 operations · Request and error types: namespace `Futures`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getFutureAccountTransactionHistoryListUserData

- **Signature**: `getFutureAccountTransactionHistoryListUserData(request: Futures.GetFutureAccountTransactionHistoryListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1FuturesTransferResponse1, Futures.GetFutureAccountTransactionHistoryListUserDataError>`
- **Wire**: `GET /sapi/v1/futures/transfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1FuturesTransferResponse1`
- **Error**: `Futures.GetFutureAccountTransactionHistoryListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Futures.GetFutureAccountTransactionHistoryListUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `startTime` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1FuturesTransferResponse1` | `sapiV1FuturesTransferResponse1Schema` | `src/models/sapi-v1-futures-transfer-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFutureTickLevelOrderbookHistoricalDataDownloadLinkUserData

- **Signature**: `getFutureTickLevelOrderbookHistoricalDataDownloadLinkUserData(request: Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1FuturesHistDataLinkResponse, Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError>`
- **Wire**: `GET /sapi/v1/futures/histDataLink`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1FuturesHistDataLinkResponse`
- **Error**: `Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `dataType` | `query` | `DataType` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataType` | `dataTypeSchema` | `src/models/data-type.ts` |
| `SapiV1FuturesHistDataLinkResponse` | `sapiV1FuturesHistDataLinkResponseSchema` | `src/models/sapi-v1-futures-hist-data-link-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### newFutureAccountTransferUserData

- **Signature**: `newFutureAccountTransferUserData(request: Futures.NewFutureAccountTransferUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1FuturesTransferResponse, Futures.NewFutureAccountTransferUserDataError>`
- **Wire**: `POST /sapi/v1/futures/transfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1FuturesTransferResponse`
- **Error**: `Futures.NewFutureAccountTransferUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Futures.NewFutureAccountTransferUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `type` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1FuturesTransferResponse` | `sapiV1FuturesTransferResponseSchema` | `src/models/sapi-v1-futures-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

