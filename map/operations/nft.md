<!-- Generated file — do not edit; regenerated with the SDK. -->

# Nft — operations

Accessor: `client.nft` · Source: `src/resources/nft.ts` · 4 operations · Request and error types: namespace `Nft`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getNftAssetUserData

- **Signature**: `getNftAssetUserData(request: Nft.GetNftAssetUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1NftUserGetAssetResponse, Nft.GetNftAssetUserDataError>`
- **Wire**: `GET /sapi/v1/nft/user/getAsset`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1NftUserGetAssetResponse`
- **Error**: `Nft.GetNftAssetUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Nft.GetNftAssetUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1NftUserGetAssetResponse` | `sapiV1NftUserGetAssetResponseSchema` | `src/models/sapi-v1-nft-user-get-asset-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getNftDepositHistoryUserData

- **Signature**: `getNftDepositHistoryUserData(request: Nft.GetNftDepositHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1NftHistoryDepositResponse, Nft.GetNftDepositHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/nft/history/deposit`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1NftHistoryDepositResponse`
- **Error**: `Nft.GetNftDepositHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Nft.GetNftDepositHistoryUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1NftHistoryDepositResponse` | `sapiV1NftHistoryDepositResponseSchema` | `src/models/sapi-v1-nft-history-deposit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getNftTransactionHistoryUserData

- **Signature**: `getNftTransactionHistoryUserData(request: Nft.GetNftTransactionHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1NftHistoryTransactionsResponse, Nft.GetNftTransactionHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/nft/history/transactions`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1NftHistoryTransactionsResponse`
- **Error**: `Nft.GetNftTransactionHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Nft.GetNftTransactionHistoryUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orderType` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1NftHistoryTransactionsResponse` | `sapiV1NftHistoryTransactionsResponseSchema` | `src/models/sapi-v1-nft-history-transactions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getNftWithdrawHistoryUserData

- **Signature**: `getNftWithdrawHistoryUserData(request: Nft.GetNftWithdrawHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1NftHistoryWithdrawResponse, Nft.GetNftWithdrawHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/nft/history/withdraw`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1NftHistoryWithdrawResponse`
- **Error**: `Nft.GetNftWithdrawHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Nft.GetNftWithdrawHistoryUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1NftHistoryWithdrawResponse` | `sapiV1NftHistoryWithdrawResponseSchema` | `src/models/sapi-v1-nft-history-withdraw-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

