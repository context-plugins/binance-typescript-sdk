<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mining — operations

Accessor: `client.mining` · Source: `src/resources/mining.ts` · 13 operations · Request and error types: namespace `Mining`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### accountListUserData

- **Signature**: `accountListUserData(request: Mining.AccountListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningStatisticsUserListResponse, Mining.AccountListUserDataError>`
- **Wire**: `GET /sapi/v1/mining/statistics/user/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningStatisticsUserListResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.AccountListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.AccountListUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algo` | `query` | `string` | yes |
| `userName` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningStatisticsUserListResponse` | `sapiV1MiningStatisticsUserListResponseSchema` | `src/models/sapi-v1-mining-statistics-user-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### acquiringAlgorithmMarketData

- **Signature**: `acquiringAlgorithmMarketData(options?: RequestOptions): ApiPromise<SapiV1MiningPubAlgoListResponse, Mining.AcquiringAlgorithmMarketDataError>`
- **Wire**: `GET /sapi/v1/mining/pub/algoList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningPubAlgoListResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.AcquiringAlgorithmMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningPubAlgoListResponse` | `sapiV1MiningPubAlgoListResponseSchema` | `src/models/sapi-v1-mining-pub-algo-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### acquiringCoinNameMarketData

- **Signature**: `acquiringCoinNameMarketData(options?: RequestOptions): ApiPromise<SapiV1MiningPubCoinListResponse, Mining.AcquiringCoinNameMarketDataError>`
- **Wire**: `GET /sapi/v1/mining/pub/coinList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningPubCoinListResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.AcquiringCoinNameMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningPubCoinListResponse` | `sapiV1MiningPubCoinListResponseSchema` | `src/models/sapi-v1-mining-pub-coin-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelHashrateResaleConfigurationUserData

- **Signature**: `cancelHashrateResaleConfigurationUserData(request: Mining.CancelHashrateResaleConfigurationUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningHashTransferConfigCancelResponse, Mining.CancelHashrateResaleConfigurationUserDataError>`
- **Wire**: `POST /sapi/v1/mining/hash-transfer/config/cancel`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1MiningHashTransferConfigCancelResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.CancelHashrateResaleConfigurationUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.CancelHashrateResaleConfigurationUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `configId` | `query` | `string` | yes |
| `userName` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningHashTransferConfigCancelResponse` | `sapiV1MiningHashTransferConfigCancelResponseSchema` | `src/models/sapi-v1-mining-hash-transfer-config-cancel-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### earningsListUserData

- **Signature**: `earningsListUserData(request: Mining.EarningsListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningPaymentListResponse, Mining.EarningsListUserDataError>`
- **Wire**: `GET /sapi/v1/mining/payment/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningPaymentListResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.EarningsListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.EarningsListUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algo` | `query` | `string` | yes |
| `userName` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `coin` | `query` | `string` | no |
| `startDate` | `query` | `string` | no |
| `endDate` | `query` | `string` | no |
| `pageIndex` | `query` | `number` | no |
| `pageSize` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningPaymentListResponse` | `sapiV1MiningPaymentListResponseSchema` | `src/models/sapi-v1-mining-payment-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### extraBonusListUserData

- **Signature**: `extraBonusListUserData(request: Mining.ExtraBonusListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningPaymentOtherResponse, Mining.ExtraBonusListUserDataError>`
- **Wire**: `GET /sapi/v1/mining/payment/other`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningPaymentOtherResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.ExtraBonusListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.ExtraBonusListUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algo` | `query` | `string` | yes |
| `userName` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `coin` | `query` | `string` | no |
| `startDate` | `query` | `string` | no |
| `endDate` | `query` | `string` | no |
| `pageIndex` | `query` | `number` | no |
| `pageSize` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningPaymentOtherResponse` | `sapiV1MiningPaymentOtherResponseSchema` | `src/models/sapi-v1-mining-payment-other-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### hashrateResaleDetailsUserData

- **Signature**: `hashrateResaleDetailsUserData(request: Mining.HashrateResaleDetailsUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningHashTransferProfitDetailsResponse, Mining.HashrateResaleDetailsUserDataError>`
- **Wire**: `GET /sapi/v1/mining/hash-transfer/profit/details`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningHashTransferProfitDetailsResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.HashrateResaleDetailsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.HashrateResaleDetailsUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `configId` | `query` | `string` | yes |
| `userName` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `pageIndex` | `query` | `number` | no |
| `pageSize` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningHashTransferProfitDetailsResponse` | `sapiV1MiningHashTransferProfitDetailsResponseSchema` | `src/models/sapi-v1-mining-hash-transfer-profit-details-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### hashrateResaleListUserData

- **Signature**: `hashrateResaleListUserData(request: Mining.HashrateResaleListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningHashTransferConfigDetailsListResponse, Mining.HashrateResaleListUserDataError>`
- **Wire**: `GET /sapi/v1/mining/hash-transfer/config/details/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningHashTransferConfigDetailsListResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.HashrateResaleListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.HashrateResaleListUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `pageIndex` | `query` | `number` | no |
| `pageSize` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningHashTransferConfigDetailsListResponse` | `sapiV1MiningHashTransferConfigDetailsListResponseSchema` | `src/models/sapi-v1-mining-hash-transfer-config-details-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### hashrateResaleRequestUserData

- **Signature**: `hashrateResaleRequestUserData(request: Mining.HashrateResaleRequestUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningHashTransferConfigResponse, Mining.HashrateResaleRequestUserDataError>`
- **Wire**: `POST /sapi/v1/mining/hash-transfer/config`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1MiningHashTransferConfigResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.HashrateResaleRequestUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.HashrateResaleRequestUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userName` | `query` | `string` | yes |
| `algo` | `query` | `string` | yes |
| `toPoolUser` | `query` | `string` | yes |
| `hashRate` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startDate` | `query` | `string` | no |
| `endDate` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningHashTransferConfigResponse` | `sapiV1MiningHashTransferConfigResponseSchema` | `src/models/sapi-v1-mining-hash-transfer-config-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### miningAccountEarningUserData

- **Signature**: `miningAccountEarningUserData(request: Mining.MiningAccountEarningUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningPaymentUidResponse, Mining.MiningAccountEarningUserDataError>`
- **Wire**: `GET /sapi/v1/mining/payment/uid`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningPaymentUidResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.MiningAccountEarningUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.MiningAccountEarningUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algo` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startDate` | `query` | `string` | no |
| `endDate` | `query` | `string` | no |
| `pageIndex` | `query` | `number` | no |
| `pageSize` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningPaymentUidResponse` | `sapiV1MiningPaymentUidResponseSchema` | `src/models/sapi-v1-mining-payment-uid-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### requestForDetailMinerListUserData

- **Signature**: `requestForDetailMinerListUserData(request: Mining.RequestForDetailMinerListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningWorkerDetailResponse, Mining.RequestForDetailMinerListUserDataError>`
- **Wire**: `GET /sapi/v1/mining/worker/detail`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningWorkerDetailResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.RequestForDetailMinerListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.RequestForDetailMinerListUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algo` | `query` | `string` | yes |
| `userName` | `query` | `string` | yes |
| `workerName` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningWorkerDetailResponse` | `sapiV1MiningWorkerDetailResponseSchema` | `src/models/sapi-v1-mining-worker-detail-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### requestForMinerListUserData

- **Signature**: `requestForMinerListUserData(request: Mining.RequestForMinerListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningWorkerListResponse, Mining.RequestForMinerListUserDataError>`
- **Wire**: `GET /sapi/v1/mining/worker/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningWorkerListResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.RequestForMinerListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.RequestForMinerListUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algo` | `query` | `string` | yes |
| `userName` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `pageIndex` | `query` | `number` | no |
| `sort` | `query` | `number` | no |
| `sortColumn` | `query` | `number` | no |
| `workerStatus` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningWorkerListResponse` | `sapiV1MiningWorkerListResponseSchema` | `src/models/sapi-v1-mining-worker-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### statisticListUserData

- **Signature**: `statisticListUserData(request: Mining.StatisticListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MiningStatisticsUserStatusResponse, Mining.StatisticListUserDataError>`
- **Wire**: `GET /sapi/v1/mining/statistics/user/status`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MiningStatisticsUserStatusResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Mining.StatisticListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mining.StatisticListUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algo` | `query` | `string` | yes |
| `userName` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MiningStatisticsUserStatusResponse` | `sapiV1MiningStatisticsUserStatusResponseSchema` | `src/models/sapi-v1-mining-statistics-user-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

