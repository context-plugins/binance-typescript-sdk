<!-- Generated file — do not edit; regenerated with the SDK. -->

# PortfolioMargin — operations

Accessor: `client.portfolioMargin` · Source: `src/resources/portfolio-margin.ts` · 14 operations · Request and error types: namespace `PortfolioMargin`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bnbTransferUserData

- **Signature**: `bnbTransferUserData(request: PortfolioMargin.BnbTransferUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioBnbTransferResponse, PortfolioMargin.BnbTransferUserDataError>`
- **Wire**: `POST /sapi/v1/portfolio/bnb-transfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1PortfolioBnbTransferResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.BnbTransferUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.BnbTransferUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transferSide` | `query` | `TransferSide` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferSide` | `transferSideSchema` | `src/models/transfer-side.ts` |
| `SapiV1PortfolioBnbTransferResponse` | `sapiV1PortfolioBnbTransferResponseSchema` | `src/models/sapi-v1-portfolio-bnb-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### changeAutoRepayFuturesStatusUserData

- **Signature**: `changeAutoRepayFuturesStatusUserData(request: PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioRepayFuturesSwitchResponse, PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError>`
- **Wire**: `POST /sapi/v1/portfolio/repay-futures-switch`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1PortfolioRepayFuturesSwitchResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `autoRepay` | `query` | `boolean` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioRepayFuturesSwitchResponse` | `sapiV1PortfolioRepayFuturesSwitchResponseSchema` | `src/models/sapi-v1-portfolio-repay-futures-switch-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fundAutoCollectionUserData

- **Signature**: `fundAutoCollectionUserData(request: PortfolioMargin.FundAutoCollectionUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioAutoCollectionResponse, PortfolioMargin.FundAutoCollectionUserDataError>`
- **Wire**: `POST /sapi/v1/portfolio/auto-collection`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1PortfolioAutoCollectionResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.FundAutoCollectionUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.FundAutoCollectionUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioAutoCollectionResponse` | `sapiV1PortfolioAutoCollectionResponseSchema` | `src/models/sapi-v1-portfolio-auto-collection-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fundCollectionByAssetUserData

- **Signature**: `fundCollectionByAssetUserData(request: PortfolioMargin.FundCollectionByAssetUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioAssetCollectionResponse, PortfolioMargin.FundCollectionByAssetUserDataError>`
- **Wire**: `POST /sapi/v1/portfolio/asset-collection`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1PortfolioAssetCollectionResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.FundCollectionByAssetUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.FundCollectionByAssetUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioAssetCollectionResponse` | `sapiV1PortfolioAssetCollectionResponseSchema` | `src/models/sapi-v1-portfolio-asset-collection-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAutoRepayFuturesStatusUserData

- **Signature**: `getAutoRepayFuturesStatusUserData(request: PortfolioMargin.GetAutoRepayFuturesStatusUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioRepayFuturesSwitchResponse1, PortfolioMargin.GetAutoRepayFuturesStatusUserDataError>`
- **Wire**: `GET /sapi/v1/portfolio/repay-futures-switch`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1PortfolioRepayFuturesSwitchResponse1`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.GetAutoRepayFuturesStatusUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.GetAutoRepayFuturesStatusUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioRepayFuturesSwitchResponse1` | `sapiV1PortfolioRepayFuturesSwitchResponse1Schema` | `src/models/sapi-v1-portfolio-repay-futures-switch-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPortfolioMarginAssetLeverageUserData

- **Signature**: `getPortfolioMarginAssetLeverageUserData(options?: RequestOptions): ApiPromise<SapiV1PortfolioMarginAssetLeverageResponse[], PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError>`
- **Wire**: `GET /sapi/v1/portfolio/margin-asset-leverage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1PortfolioMarginAssetLeverageResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioMarginAssetLeverageResponse` | `sapiV1PortfolioMarginAssetLeverageResponseSchema` | `src/models/sapi-v1-portfolio-margin-asset-leverage-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### portfolioMarginAccountUserData

- **Signature**: `portfolioMarginAccountUserData(request: PortfolioMargin.PortfolioMarginAccountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioAccountResponse, PortfolioMargin.PortfolioMarginAccountUserDataError>`
- **Wire**: `GET /sapi/v1/portfolio/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1PortfolioAccountResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.PortfolioMarginAccountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.PortfolioMarginAccountUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioAccountResponse` | `sapiV1PortfolioAccountResponseSchema` | `src/models/sapi-v1-portfolio-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### portfolioMarginBankruptcyLoanAmountUserData

- **Signature**: `portfolioMarginBankruptcyLoanAmountUserData(request: PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioPmLoanResponse, PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError>`
- **Wire**: `GET /sapi/v1/portfolio/pmLoan`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1PortfolioPmLoanResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioPmLoanResponse` | `sapiV1PortfolioPmLoanResponseSchema` | `src/models/sapi-v1-portfolio-pm-loan-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### portfolioMarginBankruptcyLoanRepayUserData

- **Signature**: `portfolioMarginBankruptcyLoanRepayUserData(request: PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioRepayResponse, PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError>`
- **Wire**: `POST /sapi/v1/portfolio/repay`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1PortfolioRepayResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `from` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioRepayResponse` | `sapiV1PortfolioRepayResponseSchema` | `src/models/sapi-v1-portfolio-repay-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### portfolioMarginCollateralRateMarketData

- **Signature**: `portfolioMarginCollateralRateMarketData(options?: RequestOptions): ApiPromise<SapiV1PortfolioCollateralRateResponse[], PortfolioMargin.PortfolioMarginCollateralRateMarketDataError>`
- **Wire**: `GET /sapi/v1/portfolio/collateralRate`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1PortfolioCollateralRateResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.PortfolioMarginCollateralRateMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioCollateralRateResponse` | `sapiV1PortfolioCollateralRateResponseSchema` | `src/models/sapi-v1-portfolio-collateral-rate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### portfolioMarginProTieredCollateralRateUserData

- **Signature**: `portfolioMarginProTieredCollateralRateUserData(request: PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataRequest, options?: RequestOptions): ApiPromise<SapiV2PortfolioCollateralRateResponse[], PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError>`
- **Wire**: `GET /sapi/v2/portfolio/collateralRate`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2PortfolioCollateralRateResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2PortfolioCollateralRateResponse` | `sapiV2PortfolioCollateralRateResponseSchema` | `src/models/sapi-v2-portfolio-collateral-rate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryClassicPortfolioMarginNegativeBalanceInterestHistoryUserData

- **Signature**: `queryClassicPortfolioMarginNegativeBalanceInterestHistoryUserData(request: PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioInterestHistoryResponse[], PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/portfolio/interest-history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1PortfolioInterestHistoryResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioInterestHistoryResponse` | `sapiV1PortfolioInterestHistoryResponseSchema` | `src/models/sapi-v1-portfolio-interest-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryPortfolioMarginAssetIndexPriceMarketData

- **Signature**: `queryPortfolioMarginAssetIndexPriceMarketData(request: PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioAssetIndexPriceResponse[], PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError>`
- **Wire**: `GET /sapi/v1/portfolio/asset-index-price`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1PortfolioAssetIndexPriceResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioAssetIndexPriceResponse` | `sapiV1PortfolioAssetIndexPriceResponseSchema` | `src/models/sapi-v1-portfolio-asset-index-price-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### repayFuturesNegativeBalanceUserData

- **Signature**: `repayFuturesNegativeBalanceUserData(request: PortfolioMargin.RepayFuturesNegativeBalanceUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1PortfolioRepayFuturesNegativeBalanceResponse, PortfolioMargin.RepayFuturesNegativeBalanceUserDataError>`
- **Wire**: `POST /sapi/v1/portfolio/repay-futures-negative-balance`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1PortfolioRepayFuturesNegativeBalanceResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `PortfolioMargin.RepayFuturesNegativeBalanceUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfolioMargin.RepayFuturesNegativeBalanceUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1PortfolioRepayFuturesNegativeBalanceResponse` | `sapiV1PortfolioRepayFuturesNegativeBalanceResponseSchema` | `src/models/sapi-v1-portfolio-repay-futures-negative-balance-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

