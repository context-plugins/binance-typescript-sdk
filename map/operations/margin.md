<!-- Generated file — do not edit; regenerated with the SDK. -->

# Margin — operations

Accessor: `client.margin` · Source: `src/resources/margin.ts` · 48 operations · Request and error types: namespace `Margin`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### adjustCrossMarginMaxLeverageUserData

- **Signature**: `adjustCrossMarginMaxLeverageUserData(request: Margin.AdjustCrossMarginMaxLeverageUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginMaxLeverageResponse, Margin.AdjustCrossMarginMaxLeverageUserDataError>`
- **Wire**: `POST /sapi/v1/margin/max-leverage`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginMaxLeverageResponse`
- **Error**: `Margin.AdjustCrossMarginMaxLeverageUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.AdjustCrossMarginMaxLeverageUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `maxLeverage` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginMaxLeverageResponse` | `sapiV1MarginMaxLeverageResponseSchema` | `src/models/sapi-v1-margin-max-leverage-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### crossMarginCollateralRatioMarketData

- **Signature**: `crossMarginCollateralRatioMarketData(options?: RequestOptions): ApiPromise<SapiV1MarginCrossMarginCollateralRatioResponse[], Margin.CrossMarginCollateralRatioMarketDataError>`
- **Wire**: `GET /sapi/v1/margin/crossMarginCollateralRatio`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginCrossMarginCollateralRatioResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.CrossMarginCollateralRatioMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginCrossMarginCollateralRatioResponse` | `sapiV1MarginCrossMarginCollateralRatioResponseSchema` | `src/models/sapi-v1-margin-cross-margin-collateral-ratio-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### disableIsolatedMarginAccountTrade

- **Signature**: `disableIsolatedMarginAccountTrade(request: Margin.DisableIsolatedMarginAccountTradeRequest, options?: RequestOptions): ApiPromise<SapiV1MarginIsolatedAccountResponse, Margin.DisableIsolatedMarginAccountTradeError>`
- **Wire**: `DELETE /sapi/v1/margin/isolated/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginIsolatedAccountResponse`
- **Error**: `Margin.DisableIsolatedMarginAccountTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.DisableIsolatedMarginAccountTradeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginIsolatedAccountResponse` | `sapiV1MarginIsolatedAccountResponseSchema` | `src/models/sapi-v1-margin-isolated-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### enableIsolatedMarginAccountTrade

- **Signature**: `enableIsolatedMarginAccountTrade(request: Margin.EnableIsolatedMarginAccountTradeRequest, options?: RequestOptions): ApiPromise<SapiV1MarginIsolatedAccountResponse, Margin.EnableIsolatedMarginAccountTradeError>`
- **Wire**: `POST /sapi/v1/margin/isolated/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginIsolatedAccountResponse`
- **Error**: `Margin.EnableIsolatedMarginAccountTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.EnableIsolatedMarginAccountTradeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginIsolatedAccountResponse` | `sapiV1MarginIsolatedAccountResponseSchema` | `src/models/sapi-v1-margin-isolated-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllCrossMarginPairsMarketData

- **Signature**: `getAllCrossMarginPairsMarketData(request: Margin.GetAllCrossMarginPairsMarketDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginAllPairsResponse[], Margin.GetAllCrossMarginPairsMarketDataError>`
- **Wire**: `GET /sapi/v1/margin/allPairs`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginAllPairsResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.GetAllCrossMarginPairsMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetAllCrossMarginPairsMarketDataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginAllPairsResponse` | `sapiV1MarginAllPairsResponseSchema` | `src/models/sapi-v1-margin-all-pairs-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllIsolatedMarginSymbolUserData

- **Signature**: `getAllIsolatedMarginSymbolUserData(request: Margin.GetAllIsolatedMarginSymbolUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginIsolatedAllPairsResponse[], Margin.GetAllIsolatedMarginSymbolUserDataError>`
- **Wire**: `GET /sapi/v1/margin/isolated/allPairs`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginIsolatedAllPairsResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.GetAllIsolatedMarginSymbolUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetAllIsolatedMarginSymbolUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginIsolatedAllPairsResponse` | `sapiV1MarginIsolatedAllPairsResponseSchema` | `src/models/sapi-v1-margin-isolated-all-pairs-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllMarginAssetsMarketData

- **Signature**: `getAllMarginAssetsMarketData(request: Margin.GetAllMarginAssetsMarketDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginAllAssetsResponse[], Margin.GetAllMarginAssetsMarketDataError>`
- **Wire**: `GET /sapi/v1/margin/allAssets`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginAllAssetsResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.GetAllMarginAssetsMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetAllMarginAssetsMarketDataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginAllAssetsResponse` | `sapiV1MarginAllAssetsResponseSchema` | `src/models/sapi-v1-margin-all-assets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getBnbBurnStatusUserData

- **Signature**: `getBnbBurnStatusUserData(request: Margin.GetBnbBurnStatusUserDataRequest, options?: RequestOptions): ApiPromise<BnbBurnStatus, Margin.GetBnbBurnStatusUserDataError>`
- **Wire**: `GET /sapi/v1/bnbBurn`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BnbBurnStatus`
- **Error**: `Margin.GetBnbBurnStatusUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetBnbBurnStatusUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BnbBurnStatus` | `bnbBurnStatusSchema` | `src/models/bnb-burn-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCrossMarginTransferHistoryUserData

- **Signature**: `getCrossMarginTransferHistoryUserData(request: Margin.GetCrossMarginTransferHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginTransferResponse, Margin.GetCrossMarginTransferHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/margin/transfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginTransferResponse`
- **Error**: `Margin.GetCrossMarginTransferHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetCrossMarginTransferHistoryUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `type` | `query` | `Type2` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `isolatedSymbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type2` | `type2Schema` | `src/models/type2.ts` |
| `SapiV1MarginTransferResponse` | `sapiV1MarginTransferResponseSchema` | `src/models/sapi-v1-margin-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getForceLiquidationRecordUserData

- **Signature**: `getForceLiquidationRecordUserData(request: Margin.GetForceLiquidationRecordUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginForceLiquidationRecResponse, Margin.GetForceLiquidationRecordUserDataError>`
- **Wire**: `GET /sapi/v1/margin/forceLiquidationRec`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginForceLiquidationRecResponse`
- **Error**: `Margin.GetForceLiquidationRecordUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetForceLiquidationRecordUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `isolatedSymbol` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginForceLiquidationRecResponse` | `sapiV1MarginForceLiquidationRecResponseSchema` | `src/models/sapi-v1-margin-force-liquidation-rec-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInterestHistoryUserData

- **Signature**: `getInterestHistoryUserData(request: Margin.GetInterestHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginInterestHistoryResponse, Margin.GetInterestHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/margin/interestHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginInterestHistoryResponse`
- **Error**: `Margin.GetInterestHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetInterestHistoryUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `isolatedSymbol` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `archived` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginInterestHistoryResponse` | `sapiV1MarginInterestHistoryResponseSchema` | `src/models/sapi-v1-margin-interest-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSmallLiabilityExchangeCoinListUserData

- **Signature**: `getSmallLiabilityExchangeCoinListUserData(request: Margin.GetSmallLiabilityExchangeCoinListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginExchangeSmallLiabilityResponse[], Margin.GetSmallLiabilityExchangeCoinListUserDataError>`
- **Wire**: `GET /sapi/v1/margin/exchange-small-liability`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginExchangeSmallLiabilityResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.GetSmallLiabilityExchangeCoinListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetSmallLiabilityExchangeCoinListUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginExchangeSmallLiabilityResponse` | `sapiV1MarginExchangeSmallLiabilityResponseSchema` | `src/models/sapi-v1-margin-exchange-small-liability-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSmallLiabilityExchangeHistoryUserData

- **Signature**: `getSmallLiabilityExchangeHistoryUserData(request: Margin.GetSmallLiabilityExchangeHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginExchangeSmallLiabilityHistoryResponse, Margin.GetSmallLiabilityExchangeHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/margin/exchange-small-liability-history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginExchangeSmallLiabilityHistoryResponse`
- **Error**: `Margin.GetSmallLiabilityExchangeHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetSmallLiabilityExchangeHistoryUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginExchangeSmallLiabilityHistoryResponse` | `sapiV1MarginExchangeSmallLiabilityHistoryResponseSchema` | `src/models/sapi-v1-margin-exchange-small-liability-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSummaryOfMarginAccountUserData

- **Signature**: `getSummaryOfMarginAccountUserData(request: Margin.GetSummaryOfMarginAccountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginTradeCoeffResponse, Margin.GetSummaryOfMarginAccountUserDataError>`
- **Wire**: `GET /sapi/v1/margin/tradeCoeff`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginTradeCoeffResponse`
- **Error**: `Margin.GetSummaryOfMarginAccountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetSummaryOfMarginAccountUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginTradeCoeffResponse` | `sapiV1MarginTradeCoeffResponseSchema` | `src/models/sapi-v1-margin-trade-coeff-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAFutureHourlyInterestRateUserData

- **Signature**: `getAFutureHourlyInterestRateUserData(request: Margin.GetAFutureHourlyInterestRateUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginNextHourlyInterestRateResponse[], Margin.GetAFutureHourlyInterestRateUserDataError>`
- **Wire**: `GET /sapi/v1/margin/next-hourly-interest-rate`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginNextHourlyInterestRateResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.GetAFutureHourlyInterestRateUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetAFutureHourlyInterestRateUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `assets` | `query` | `string` | no |
| `isIsolated` | `query` | `IsIsolated` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `SapiV1MarginNextHourlyInterestRateResponse` | `sapiV1MarginNextHourlyInterestRateResponseSchema` | `src/models/sapi-v1-margin-next-hourly-interest-rate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCrossOrIsolatedMarginCapitalFlowUserData

- **Signature**: `getCrossOrIsolatedMarginCapitalFlowUserData(request: Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginCapitalFlowResponse[], Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError>`
- **Wire**: `GET /sapi/v1/margin/capital-flow`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginCapitalFlowResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `symbol` | `query` | `string` | no |
| `type` | `query` | `Type3` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `fromId` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type3` | `type3Schema` | `src/models/type3.ts` |
| `SapiV1MarginCapitalFlowResponse` | `sapiV1MarginCapitalFlowResponseSchema` | `src/models/sapi-v1-margin-capital-flow-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketData

- **Signature**: `getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketData(request: Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginDelistScheduleResponse[], Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError>`
- **Wire**: `GET /sapi/v1/margin/delist-schedule`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginDelistScheduleResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginDelistScheduleResponse` | `sapiV1MarginDelistScheduleResponseSchema` | `src/models/sapi-v1-margin-delist-schedule-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginAccountCancelOcoTrade

- **Signature**: `marginAccountCancelOcoTrade(request: Margin.MarginAccountCancelOcoTradeRequest, options?: RequestOptions): ApiPromise<MarginOcoOrder, Margin.MarginAccountCancelOcoTradeError>`
- **Wire**: `DELETE /sapi/v1/margin/orderList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarginOcoOrder`
- **Error**: `Margin.MarginAccountCancelOcoTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginAccountCancelOcoTradeRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `orderListId` | `query` | `number` | no |
| `listClientOrderId` | `query` | `string` | no |
| `newClientOrderId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `MarginOcoOrder` | `marginOcoOrderSchema` | `src/models/margin-oco-order.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginAccountCancelOrderTrade

- **Signature**: `marginAccountCancelOrderTrade(request: Margin.MarginAccountCancelOrderTradeRequest, options?: RequestOptions): ApiPromise<MarginOrder, Margin.MarginAccountCancelOrderTradeError>`
- **Wire**: `DELETE /sapi/v1/margin/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarginOrder`
- **Error**: `Margin.MarginAccountCancelOrderTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginAccountCancelOrderTradeRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `orderId` | `query` | `number` | no |
| `origClientOrderId` | `query` | `string` | no |
| `newClientOrderId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `MarginOrder` | `marginOrderSchema` | `src/models/margin-order.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginAccountCancelAllOpenOrdersOnASymbolTrade

- **Signature**: `marginAccountCancelAllOpenOrdersOnASymbolTrade(request: Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeRequest, options?: RequestOptions): ApiPromise<SapiV1MarginOpenOrdersResponse[], Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeError>`
- **Wire**: `DELETE /sapi/v1/margin/openOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginOpenOrdersResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `SapiV1MarginOpenOrdersResponse` | `sapiV1MarginOpenOrdersResponseSchema` | `src/models/unions/sapi-v1-margin-open-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginAccountNewOcoTrade

- **Signature**: `marginAccountNewOcoTrade(request: Margin.MarginAccountNewOcoTradeRequest, options?: RequestOptions): ApiPromise<SapiV1MarginOrderOcoResponse, Margin.MarginAccountNewOcoTradeError>`
- **Wire**: `POST /sapi/v1/margin/order/oco`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginOrderOcoResponse`
- **Error**: `Margin.MarginAccountNewOcoTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginAccountNewOcoTradeRequest` (19):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `quantity` | `query` | `number` | yes |
| `price` | `query` | `number` | yes |
| `stopPrice` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `listClientOrderId` | `query` | `string` | no |
| `limitClientOrderId` | `query` | `string` | no |
| `limitIcebergQty` | `query` | `number` | no |
| `stopClientOrderId` | `query` | `string` | no |
| `stopLimitPrice` | `query` | `number` | no |
| `stopIcebergQty` | `query` | `number` | no |
| `stopLimitTimeInForce` | `query` | `StopLimitTimeInForce` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `sideEffectType` | `query` | `SideEffectType` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `StopLimitTimeInForce` | `stopLimitTimeInForceSchema` | `src/models/stop-limit-time-in-force.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SideEffectType` | `sideEffectTypeSchema` | `src/models/side-effect-type.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `SapiV1MarginOrderOcoResponse` | `sapiV1MarginOrderOcoResponseSchema` | `src/models/sapi-v1-margin-order-oco-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginAccountNewOtoTrade

- **Signature**: `marginAccountNewOtoTrade(request: Margin.MarginAccountNewOtoTradeRequest, options?: RequestOptions): ApiPromise<SapiV1MarginOrderOtoResponse, Margin.MarginAccountNewOtoTradeError>`
- **Wire**: `POST /sapi/v1/margin/order/oto`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginOrderOtoResponse`
- **Error**: `Margin.MarginAccountNewOtoTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginAccountNewOtoTradeRequest` (25):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `workingType` | `query` | `WorkingType` | yes |
| `workingSide` | `query` | `WorkingSide` | yes |
| `workingPrice` | `query` | `number` | yes |
| `workingQuantity` | `query` | `number` | yes |
| `workingIcebergQty` | `query` | `number` | yes |
| `pendingType` | `query` | `PendingType` | yes |
| `pendingSide` | `query` | `PendingSide` | yes |
| `pendingQuantity` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `listClientOrderId` | `query` | `string` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `sideEffectType` | `query` | `SideEffectType1` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `autoRepayAtCancel` | `query` | `boolean` | no |
| `workingClientOrderId` | `query` | `string` | no |
| `workingTimeInForce` | `query` | `WorkingTimeInForce` | no |
| `pendingClientOrderId` | `query` | `string` | no |
| `pendingPrice` | `query` | `number` | no |
| `pendingStopPrice` | `query` | `number` | no |
| `pendingTrailingDelta` | `query` | `number` | no |
| `pendingIcebergQty` | `query` | `number` | no |
| `pendingTimeInForce` | `query` | `PendingTimeInForce` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkingType` | `workingTypeSchema` | `src/models/working-type.ts` |
| `WorkingSide` | `workingSideSchema` | `src/models/working-side.ts` |
| `PendingType` | `pendingTypeSchema` | `src/models/pending-type.ts` |
| `PendingSide` | `pendingSideSchema` | `src/models/pending-side.ts` |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SideEffectType1` | `sideEffectType1Schema` | `src/models/side-effect-type1.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `WorkingTimeInForce` | `workingTimeInForceSchema` | `src/models/working-time-in-force.ts` |
| `PendingTimeInForce` | `pendingTimeInForceSchema` | `src/models/pending-time-in-force.ts` |
| `SapiV1MarginOrderOtoResponse` | `sapiV1MarginOrderOtoResponseSchema` | `src/models/sapi-v1-margin-order-oto-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginAccountNewOtocoTrade

- **Signature**: `marginAccountNewOtocoTrade(request: Margin.MarginAccountNewOtocoTradeRequest, options?: RequestOptions): ApiPromise<SapiV1MarginOrderOtocoResponse, Margin.MarginAccountNewOtocoTradeError>`
- **Wire**: `POST /sapi/v1/margin/order/otoco`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginOrderOtocoResponse`
- **Error**: `Margin.MarginAccountNewOtocoTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginAccountNewOtocoTradeRequest` (32):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `workingType` | `query` | `WorkingType` | yes |
| `workingSide` | `query` | `WorkingSide` | yes |
| `workingPrice` | `query` | `number` | yes |
| `workingQuantity` | `query` | `number` | yes |
| `workingIcebergQty` | `query` | `number` | yes |
| `pendingSide` | `query` | `PendingSide` | yes |
| `pendingQuantity` | `query` | `number` | yes |
| `pendingAboveType` | `query` | `PendingAboveType` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `sideEffectType` | `query` | `SideEffectType1` | no |
| `autoRepayAtCancel` | `query` | `boolean` | no |
| `listClientOrderId` | `query` | `string` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `workingClientOrderId` | `query` | `string` | no |
| `workingTimeInForce` | `query` | `WorkingTimeInForce` | no |
| `pendingAboveClientOrderId` | `query` | `string` | no |
| `pendingAbovePrice` | `query` | `number` | no |
| `pendingAboveStopPrice` | `query` | `number` | no |
| `pendingAboveTrailingDelta` | `query` | `number` | no |
| `pendingAboveIcebergQty` | `query` | `number` | no |
| `pendingAboveTimeInForce` | `query` | `PendingAboveTimeInForce` | no |
| `pendingBelowType` | `query` | `PendingBelowType` | no |
| `pendingBelowClientOrderId` | `query` | `string` | no |
| `pendingBelowPrice` | `query` | `number` | no |
| `pendingBelowStopPrice` | `query` | `number` | no |
| `pendingBelowTrailingDelta` | `query` | `number` | no |
| `pendingBelowIcebergQty` | `query` | `number` | no |
| `pendingBelowTimeInForce` | `query` | `PendingBelowTimeInForce` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkingType` | `workingTypeSchema` | `src/models/working-type.ts` |
| `WorkingSide` | `workingSideSchema` | `src/models/working-side.ts` |
| `PendingSide` | `pendingSideSchema` | `src/models/pending-side.ts` |
| `PendingAboveType` | `pendingAboveTypeSchema` | `src/models/pending-above-type.ts` |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `SideEffectType1` | `sideEffectType1Schema` | `src/models/side-effect-type1.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `WorkingTimeInForce` | `workingTimeInForceSchema` | `src/models/working-time-in-force.ts` |
| `PendingAboveTimeInForce` | `pendingAboveTimeInForceSchema` | `src/models/pending-above-time-in-force.ts` |
| `PendingBelowType` | `pendingBelowTypeSchema` | `src/models/pending-below-type.ts` |
| `PendingBelowTimeInForce` | `pendingBelowTimeInForceSchema` | `src/models/pending-below-time-in-force.ts` |
| `SapiV1MarginOrderOtocoResponse` | `sapiV1MarginOrderOtocoResponseSchema` | `src/models/sapi-v1-margin-order-otoco-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginAccountNewOrderTrade

- **Signature**: `marginAccountNewOrderTrade(request: Margin.MarginAccountNewOrderTradeRequest, options?: RequestOptions): ApiPromise<SapiV1MarginOrderResponse, Margin.MarginAccountNewOrderTradeError>`
- **Wire**: `POST /sapi/v1/margin/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginOrderResponse`
- **Error**: `Margin.MarginAccountNewOrderTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginAccountNewOrderTradeRequest` (18):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `type` | `query` | `Type1` | yes |
| `quantity` | `query` | `number` | yes |
| `autoRepayAtCancel` | `query` | `boolean` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `quoteOrderQty` | `query` | `number` | no |
| `price` | `query` | `number` | no |
| `stopPrice` | `query` | `number` | no |
| `newClientOrderId` | `query` | `string` | no |
| `icebergQty` | `query` | `number` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `sideEffectType` | `query` | `SideEffectType` | no |
| `timeInForce` | `query` | `TimeInForce` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SideEffectType` | `sideEffectTypeSchema` | `src/models/side-effect-type.ts` |
| `TimeInForce` | `timeInForceSchema` | `src/models/time-in-force.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `SapiV1MarginOrderResponse` | `sapiV1MarginOrderResponseSchema` | `src/models/unions/sapi-v1-margin-order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginInterestRateHistoryUserData

- **Signature**: `marginInterestRateHistoryUserData(request: Margin.MarginInterestRateHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginInterestRateHistoryResponse[], Margin.MarginInterestRateHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/margin/interestRateHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginInterestRateHistoryResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.MarginInterestRateHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginInterestRateHistoryUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `vipLevel` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginInterestRateHistoryResponse` | `sapiV1MarginInterestRateHistoryResponseSchema` | `src/models/sapi-v1-margin-interest-rate-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginAccountBorrowRepayMargin

- **Signature**: `marginAccountBorrowRepayMargin(request: Margin.MarginAccountBorrowRepayMarginRequest, options?: RequestOptions): ApiPromise<SapiV1MarginBorrowRepayResponse, Margin.MarginAccountBorrowRepayMarginError>`
- **Wire**: `POST /sapi/v1/margin/borrow-repay`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginBorrowRepayResponse`
- **Error**: `Margin.MarginAccountBorrowRepayMarginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginAccountBorrowRepayMarginRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `isIsolated` | `query` | `string` | yes |
| `symbol` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `type` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginBorrowRepayResponse` | `sapiV1MarginBorrowRepayResponseSchema` | `src/models/sapi-v1-margin-borrow-repay-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginManualLiquidationMargin

- **Signature**: `marginManualLiquidationMargin(request: Margin.MarginManualLiquidationMarginRequest, options?: RequestOptions): ApiPromise<SapiV1MarginManualLiquidationResponse[], Margin.MarginManualLiquidationMarginError>`
- **Wire**: `POST /sapi/v1/margin/manual-liquidation`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginManualLiquidationResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.MarginManualLiquidationMarginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.MarginManualLiquidationMarginRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `Type4` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `symbol` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type4` | `type4Schema` | `src/models/type4.ts` |
| `SapiV1MarginManualLiquidationResponse` | `sapiV1MarginManualLiquidationResponseSchema` | `src/models/sapi-v1-margin-manual-liquidation-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryCrossMarginAccountDetailsUserData

- **Signature**: `queryCrossMarginAccountDetailsUserData(request: Margin.QueryCrossMarginAccountDetailsUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginAccountResponse, Margin.QueryCrossMarginAccountDetailsUserDataError>`
- **Wire**: `GET /sapi/v1/margin/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginAccountResponse`
- **Error**: `Margin.QueryCrossMarginAccountDetailsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryCrossMarginAccountDetailsUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginAccountResponse` | `sapiV1MarginAccountResponseSchema` | `src/models/sapi-v1-margin-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryCrossMarginFeeDataUserData

- **Signature**: `queryCrossMarginFeeDataUserData(request: Margin.QueryCrossMarginFeeDataUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginCrossMarginDataResponse[], Margin.QueryCrossMarginFeeDataUserDataError>`
- **Wire**: `GET /sapi/v1/margin/crossMarginData`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginCrossMarginDataResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryCrossMarginFeeDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryCrossMarginFeeDataUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `vipLevel` | `query` | `number` | no |
| `coin` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginCrossMarginDataResponse` | `sapiV1MarginCrossMarginDataResponseSchema` | `src/models/sapi-v1-margin-cross-margin-data-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryCurrentMarginOrderCountUsageTrade

- **Signature**: `queryCurrentMarginOrderCountUsageTrade(request: Margin.QueryCurrentMarginOrderCountUsageTradeRequest, options?: RequestOptions): ApiPromise<SapiV1MarginRateLimitOrderResponse[], Margin.QueryCurrentMarginOrderCountUsageTradeError>`
- **Wire**: `GET /sapi/v1/margin/rateLimit/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginRateLimitOrderResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryCurrentMarginOrderCountUsageTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryCurrentMarginOrderCountUsageTradeRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `string` | no |
| `symbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginRateLimitOrderResponse` | `sapiV1MarginRateLimitOrderResponseSchema` | `src/models/sapi-v1-margin-rate-limit-order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryEnabledIsolatedMarginAccountLimitUserData

- **Signature**: `queryEnabledIsolatedMarginAccountLimitUserData(request: Margin.QueryEnabledIsolatedMarginAccountLimitUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginIsolatedAccountLimitResponse, Margin.QueryEnabledIsolatedMarginAccountLimitUserDataError>`
- **Wire**: `GET /sapi/v1/margin/isolated/accountLimit`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginIsolatedAccountLimitResponse`
- **Error**: `Margin.QueryEnabledIsolatedMarginAccountLimitUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryEnabledIsolatedMarginAccountLimitUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginIsolatedAccountLimitResponse` | `sapiV1MarginIsolatedAccountLimitResponseSchema` | `src/models/sapi-v1-margin-isolated-account-limit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryIsolatedMarginAccountInfoUserData

- **Signature**: `queryIsolatedMarginAccountInfoUserData(request: Margin.QueryIsolatedMarginAccountInfoUserDataRequest, options?: RequestOptions): ApiPromise<IsolatedMarginAccountInfo, Margin.QueryIsolatedMarginAccountInfoUserDataError>`
- **Wire**: `GET /sapi/v1/margin/isolated/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IsolatedMarginAccountInfo`
- **Error**: `Margin.QueryIsolatedMarginAccountInfoUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryIsolatedMarginAccountInfoUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `symbols` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsolatedMarginAccountInfo` | `isolatedMarginAccountInfoSchema` | `src/models/isolated-margin-account-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryIsolatedMarginFeeDataUserData

- **Signature**: `queryIsolatedMarginFeeDataUserData(request: Margin.QueryIsolatedMarginFeeDataUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginIsolatedMarginDataResponse[], Margin.QueryIsolatedMarginFeeDataUserDataError>`
- **Wire**: `GET /sapi/v1/margin/isolatedMarginData`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginIsolatedMarginDataResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryIsolatedMarginFeeDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryIsolatedMarginFeeDataUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `vipLevel` | `query` | `number` | no |
| `symbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginIsolatedMarginDataResponse` | `sapiV1MarginIsolatedMarginDataResponseSchema` | `src/models/sapi-v1-margin-isolated-margin-data-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryIsolatedMarginTierDataUserData

- **Signature**: `queryIsolatedMarginTierDataUserData(request: Margin.QueryIsolatedMarginTierDataUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginIsolatedMarginTierResponse[], Margin.QueryIsolatedMarginTierDataUserDataError>`
- **Wire**: `GET /sapi/v1/margin/isolatedMarginTier`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginIsolatedMarginTierResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryIsolatedMarginTierDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryIsolatedMarginTierDataUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `tier` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginIsolatedMarginTierResponse` | `sapiV1MarginIsolatedMarginTierResponseSchema` | `src/models/sapi-v1-margin-isolated-margin-tier-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryLiabilityCoinLeverageBracketInCrossMarginProModeMarketData

- **Signature**: `queryLiabilityCoinLeverageBracketInCrossMarginProModeMarketData(options?: RequestOptions): ApiPromise<SapiV1MarginLeverageBracketResponse[], Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError>`
- **Wire**: `GET /sapi/v1/margin/leverageBracket`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginLeverageBracketResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginLeverageBracketResponse` | `sapiV1MarginLeverageBracketResponseSchema` | `src/models/sapi-v1-margin-leverage-bracket-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMarginAccountSAllOrdersUserData

- **Signature**: `queryMarginAccountSAllOrdersUserData(request: Margin.QueryMarginAccountSAllOrdersUserDataRequest, options?: RequestOptions): ApiPromise<MarginOrderDetail[], Margin.QueryMarginAccountSAllOrdersUserDataError>`
- **Wire**: `GET /sapi/v1/margin/allOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarginOrderDetail[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryMarginAccountSAllOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMarginAccountSAllOrdersUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `orderId` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `MarginOrderDetail` | `marginOrderDetailSchema` | `src/models/margin-order-detail.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMarginAccountSOcoUserData

- **Signature**: `queryMarginAccountSOcoUserData(request: Margin.QueryMarginAccountSOcoUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginOrderListResponse, Margin.QueryMarginAccountSOcoUserDataError>`
- **Wire**: `GET /sapi/v1/margin/orderList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginOrderListResponse`
- **Error**: `Margin.QueryMarginAccountSOcoUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMarginAccountSOcoUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `symbol` | `query` | `string` | no |
| `orderListId` | `query` | `number` | no |
| `origClientOrderId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `SapiV1MarginOrderListResponse` | `sapiV1MarginOrderListResponseSchema` | `src/models/sapi-v1-margin-order-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMarginAccountSOpenOcoUserData

- **Signature**: `queryMarginAccountSOpenOcoUserData(request: Margin.QueryMarginAccountSOpenOcoUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginOpenOrderListResponse[], Margin.QueryMarginAccountSOpenOcoUserDataError>`
- **Wire**: `GET /sapi/v1/margin/openOrderList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginOpenOrderListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryMarginAccountSOpenOcoUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMarginAccountSOpenOcoUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `symbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `SapiV1MarginOpenOrderListResponse` | `sapiV1MarginOpenOrderListResponseSchema` | `src/models/sapi-v1-margin-open-order-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMarginAccountSOpenOrdersUserData

- **Signature**: `queryMarginAccountSOpenOrdersUserData(request: Margin.QueryMarginAccountSOpenOrdersUserDataRequest, options?: RequestOptions): ApiPromise<MarginOrderDetail[], Margin.QueryMarginAccountSOpenOrdersUserDataError>`
- **Wire**: `GET /sapi/v1/margin/openOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarginOrderDetail[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryMarginAccountSOpenOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMarginAccountSOpenOrdersUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `symbol` | `query` | `string` | no |
| `isIsolated` | `query` | `IsIsolated` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `MarginOrderDetail` | `marginOrderDetailSchema` | `src/models/margin-order-detail.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMarginAccountSOrderUserData

- **Signature**: `queryMarginAccountSOrderUserData(request: Margin.QueryMarginAccountSOrderUserDataRequest, options?: RequestOptions): ApiPromise<MarginOrderDetail, Margin.QueryMarginAccountSOrderUserDataError>`
- **Wire**: `GET /sapi/v1/margin/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarginOrderDetail`
- **Error**: `Margin.QueryMarginAccountSOrderUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMarginAccountSOrderUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `orderId` | `query` | `number` | no |
| `origClientOrderId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `MarginOrderDetail` | `marginOrderDetailSchema` | `src/models/margin-order-detail.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMarginAccountSTradeListUserData

- **Signature**: `queryMarginAccountSTradeListUserData(request: Margin.QueryMarginAccountSTradeListUserDataRequest, options?: RequestOptions): ApiPromise<MarginTrade[], Margin.QueryMarginAccountSTradeListUserDataError>`
- **Wire**: `GET /sapi/v1/margin/myTrades`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarginTrade[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryMarginAccountSTradeListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMarginAccountSTradeListUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `fromId` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `MarginTrade` | `marginTradeSchema` | `src/models/margin-trade.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMarginAccountSAllOcoUserData

- **Signature**: `queryMarginAccountSAllOcoUserData(request: Margin.QueryMarginAccountSAllOcoUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginAllOrderListResponse[], Margin.QueryMarginAccountSAllOcoUserDataError>`
- **Wire**: `GET /sapi/v1/margin/allOrderList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginAllOrderListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Margin.QueryMarginAccountSAllOcoUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMarginAccountSAllOcoUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isIsolated` | `query` | `IsIsolated` | no |
| `symbol` | `query` | `string` | no |
| `fromId` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsIsolated` | `isIsolatedSchema` | `src/models/is-isolated.ts` |
| `SapiV1MarginAllOrderListResponse` | `sapiV1MarginAllOrderListResponseSchema` | `src/models/sapi-v1-margin-all-order-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMarginAvailableInventoryUserData

- **Signature**: `queryMarginAvailableInventoryUserData(request: Margin.QueryMarginAvailableInventoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginAvailableInventoryResponse, Margin.QueryMarginAvailableInventoryUserDataError>`
- **Wire**: `GET /sapi/v1/margin/available-inventory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginAvailableInventoryResponse`
- **Error**: `Margin.QueryMarginAvailableInventoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMarginAvailableInventoryUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `Type4` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type4` | `type4Schema` | `src/models/type4.ts` |
| `SapiV1MarginAvailableInventoryResponse` | `sapiV1MarginAvailableInventoryResponseSchema` | `src/models/sapi-v1-margin-available-inventory-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMarginPriceIndexMarketData

- **Signature**: `queryMarginPriceIndexMarketData(request: Margin.QueryMarginPriceIndexMarketDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginPriceIndexResponse, Margin.QueryMarginPriceIndexMarketDataError>`
- **Wire**: `GET /sapi/v1/margin/priceIndex`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginPriceIndexResponse`
- **Error**: `Margin.QueryMarginPriceIndexMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMarginPriceIndexMarketDataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginPriceIndexResponse` | `sapiV1MarginPriceIndexResponseSchema` | `src/models/sapi-v1-margin-price-index-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMaxBorrowUserData

- **Signature**: `queryMaxBorrowUserData(request: Margin.QueryMaxBorrowUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginMaxBorrowableResponse, Margin.QueryMaxBorrowUserDataError>`
- **Wire**: `GET /sapi/v1/margin/maxBorrowable`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginMaxBorrowableResponse`
- **Error**: `Margin.QueryMaxBorrowUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMaxBorrowUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isolatedSymbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginMaxBorrowableResponse` | `sapiV1MarginMaxBorrowableResponseSchema` | `src/models/sapi-v1-margin-max-borrowable-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryMaxTransferOutAmountUserData

- **Signature**: `queryMaxTransferOutAmountUserData(request: Margin.QueryMaxTransferOutAmountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginMaxTransferableResponse, Margin.QueryMaxTransferOutAmountUserDataError>`
- **Wire**: `GET /sapi/v1/margin/maxTransferable`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginMaxTransferableResponse`
- **Error**: `Margin.QueryMaxTransferOutAmountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryMaxTransferOutAmountUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isolatedSymbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginMaxTransferableResponse` | `sapiV1MarginMaxTransferableResponseSchema` | `src/models/sapi-v1-margin-max-transferable-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryBorrowRepayRecordsInMarginAccountUserData

- **Signature**: `queryBorrowRepayRecordsInMarginAccountUserData(request: Margin.QueryBorrowRepayRecordsInMarginAccountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1MarginBorrowRepayResponse1, Margin.QueryBorrowRepayRecordsInMarginAccountUserDataError>`
- **Wire**: `GET /sapi/v1/margin/borrow-repay`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1MarginBorrowRepayResponse1`
- **Error**: `Margin.QueryBorrowRepayRecordsInMarginAccountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.QueryBorrowRepayRecordsInMarginAccountUserDataRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `type` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `isolatedSymbol` | `query` | `string` | no |
| `txId` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1MarginBorrowRepayResponse1` | `sapiV1MarginBorrowRepayResponse1Schema` | `src/models/sapi-v1-margin-borrow-repay-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### toggleBnbBurnOnSpotTradeAndMarginInterestUserData

- **Signature**: `toggleBnbBurnOnSpotTradeAndMarginInterestUserData(request: Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataRequest, options?: RequestOptions): ApiPromise<BnbBurnStatus, Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError>`
- **Wire**: `POST /sapi/v1/bnbBurn`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BnbBurnStatus`
- **Error**: `Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `timestamp` | `query` | — | `number` | yes |
| `signature` | `query` | — | `string` | yes |
| `spotBnbBurn` | `query` | `spotBNBBurn` | `SpotBnbBurn` | no |
| `interestBnbBurn` | `query` | `interestBNBBurn` | `InterestBnbBurn` | no |
| `recvWindow` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SpotBnbBurn` | `spotBnbBurnSchema` | `src/models/spot-bnb-burn.ts` |
| `InterestBnbBurn` | `interestBnbBurnSchema` | `src/models/interest-bnb-burn.ts` |
| `BnbBurnStatus` | `bnbBurnStatusSchema` | `src/models/bnb-burn-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

