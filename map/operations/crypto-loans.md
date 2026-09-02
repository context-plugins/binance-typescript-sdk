<!-- Generated file — do not edit; regenerated with the SDK. -->

# CryptoLoans — operations

Accessor: `client.cryptoLoans` · Source: `src/resources/crypto-loans.ts` · 21 operations · Request and error types: namespace `CryptoLoans`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### adjustLtvFlexibleLoanAdjustLtvTrade

- **Signature**: `adjustLtvFlexibleLoanAdjustLtvTrade(request: CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeRequest, options?: RequestOptions): ApiPromise<SapiV2LoanFlexibleAdjustLtvResponse, CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError>`
- **Wire**: `POST /sapi/v2/loan/flexible/adjust/ltv`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2LoanFlexibleAdjustLtvResponse`
- **Error**: `CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `adjustmentAmount` | `query` | `number` | yes |
| `direction` | `query` | `Direction` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `SapiV2LoanFlexibleAdjustLtvResponse` | `sapiV2LoanFlexibleAdjustLtvResponseSchema` | `src/models/sapi-v2-loan-flexible-adjust-ltv-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### adjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserData

- **Signature**: `adjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserData(request: CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV2LoanFlexibleLtvAdjustmentHistoryResponse, CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError>`
- **Wire**: `GET /sapi/v2/loan/flexible/ltv/adjustment/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2LoanFlexibleLtvAdjustmentHistoryResponse`
- **Error**: `CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2LoanFlexibleLtvAdjustmentHistoryResponse` | `sapiV2LoanFlexibleLtvAdjustmentHistoryResponseSchema` | `src/models/sapi-v2-loan-flexible-ltv-adjustment-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### borrowFlexibleLoanBorrowTrade

- **Signature**: `borrowFlexibleLoanBorrowTrade(request: CryptoLoans.BorrowFlexibleLoanBorrowTradeRequest, options?: RequestOptions): ApiPromise<SapiV2LoanFlexibleBorrowResponse, CryptoLoans.BorrowFlexibleLoanBorrowTradeError>`
- **Wire**: `POST /sapi/v2/loan/flexible/borrow`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2LoanFlexibleBorrowResponse`
- **Error**: `CryptoLoans.BorrowFlexibleLoanBorrowTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.BorrowFlexibleLoanBorrowTradeRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `loanAmount` | `query` | `number` | no |
| `collateralCoin` | `query` | `string` | no |
| `collateralAmount` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2LoanFlexibleBorrowResponse` | `sapiV2LoanFlexibleBorrowResponseSchema` | `src/models/sapi-v2-loan-flexible-borrow-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### borrowGetFlexibleLoanBorrowHistoryUserData

- **Signature**: `borrowGetFlexibleLoanBorrowHistoryUserData(request: CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV2LoanFlexibleBorrowHistoryResponse, CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataError>`
- **Wire**: `GET /sapi/v2/loan/flexible/borrow/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2LoanFlexibleBorrowHistoryResponse`
- **Error**: `CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2LoanFlexibleBorrowHistoryResponse` | `sapiV2LoanFlexibleBorrowHistoryResponseSchema` | `src/models/sapi-v2-loan-flexible-borrow-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### borrowGetFlexibleLoanOngoingOrdersUserData

- **Signature**: `borrowGetFlexibleLoanOngoingOrdersUserData(request: CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataRequest, options?: RequestOptions): ApiPromise<SapiV2LoanFlexibleOngoingOrdersResponse, CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataError>`
- **Wire**: `GET /sapi/v2/loan/flexible/ongoing/orders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2LoanFlexibleOngoingOrdersResponse`
- **Error**: `CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2LoanFlexibleOngoingOrdersResponse` | `sapiV2LoanFlexibleOngoingOrdersResponseSchema` | `src/models/sapi-v2-loan-flexible-ongoing-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### checkCollateralRepayRateUserData

- **Signature**: `checkCollateralRepayRateUserData(request: CryptoLoans.CheckCollateralRepayRateUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanRepayCollateralRateResponse, CryptoLoans.CheckCollateralRepayRateUserDataError>`
- **Wire**: `GET /sapi/v1/loan/repay/collateral/rate`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanRepayCollateralRateResponse`
- **Error**: `CryptoLoans.CheckCollateralRepayRateUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.CheckCollateralRepayRateUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `loanCoin` | `query` | `string` | yes |
| `collateralCoin` | `query` | `string` | yes |
| `repayAmount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanRepayCollateralRateResponse` | `sapiV1LoanRepayCollateralRateResponseSchema` | `src/models/sapi-v1-loan-repay-collateral-rate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cryptoLoanAdjustLtvTrade

- **Signature**: `cryptoLoanAdjustLtvTrade(request: CryptoLoans.CryptoLoanAdjustLtvTradeRequest, options?: RequestOptions): ApiPromise<SapiV1LoanAdjustLtvResponse, CryptoLoans.CryptoLoanAdjustLtvTradeError>`
- **Wire**: `POST /sapi/v1/loan/adjust/ltv`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanAdjustLtvResponse`
- **Error**: `CryptoLoans.CryptoLoanAdjustLtvTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.CryptoLoanAdjustLtvTradeRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orderId` | `query` | `number` | yes |
| `amount` | `query` | `number` | yes |
| `direction` | `query` | `Direction` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `SapiV1LoanAdjustLtvResponse` | `sapiV1LoanAdjustLtvResponseSchema` | `src/models/sapi-v1-loan-adjust-ltv-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cryptoLoanBorrowTrade

- **Signature**: `cryptoLoanBorrowTrade(request: CryptoLoans.CryptoLoanBorrowTradeRequest, options?: RequestOptions): ApiPromise<SapiV1LoanBorrowResponse, CryptoLoans.CryptoLoanBorrowTradeError>`
- **Wire**: `POST /sapi/v1/loan/borrow`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanBorrowResponse`
- **Error**: `CryptoLoans.CryptoLoanBorrowTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.CryptoLoanBorrowTradeRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `loanCoin` | `query` | `string` | yes |
| `collateralCoin` | `query` | `string` | yes |
| `loanTerm` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanAmount` | `query` | `number` | no |
| `collateralAmount` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanBorrowResponse` | `sapiV1LoanBorrowResponseSchema` | `src/models/sapi-v1-loan-borrow-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cryptoLoanCustomizeMarginCallTrade

- **Signature**: `cryptoLoanCustomizeMarginCallTrade(request: CryptoLoans.CryptoLoanCustomizeMarginCallTradeRequest, options?: RequestOptions): ApiPromise<SapiV1LoanCustomizeMarginCallResponse, CryptoLoans.CryptoLoanCustomizeMarginCallTradeError>`
- **Wire**: `POST /sapi/v1/loan/customize/margin_call`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanCustomizeMarginCallResponse`
- **Error**: `CryptoLoans.CryptoLoanCustomizeMarginCallTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.CryptoLoanCustomizeMarginCallTradeRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `marginCall` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `collateralCoin` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanCustomizeMarginCallResponse` | `sapiV1LoanCustomizeMarginCallResponseSchema` | `src/models/sapi-v1-loan-customize-margin-call-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cryptoLoanRepayTrade

- **Signature**: `cryptoLoanRepayTrade(request: CryptoLoans.CryptoLoanRepayTradeRequest, options?: RequestOptions): ApiPromise<SapiV1LoanRepayResponse, CryptoLoans.CryptoLoanRepayTradeError>`
- **Wire**: `POST /sapi/v1/loan/repay`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanRepayResponse`
- **Error**: `CryptoLoans.CryptoLoanRepayTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.CryptoLoanRepayTradeRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orderId` | `query` | `number` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `type` | `query` | `number` | no |
| `collateralReturn` | `query` | `boolean` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanRepayResponse` | `sapiV1LoanRepayResponseSchema` | `src/models/unions/sapi-v1-loan-repay-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCollateralAssetsDataUserData

- **Signature**: `getCollateralAssetsDataUserData(request: CryptoLoans.GetCollateralAssetsDataUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanCollateralDataResponse, CryptoLoans.GetCollateralAssetsDataUserDataError>`
- **Wire**: `GET /sapi/v1/loan/collateral/data`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanCollateralDataResponse`
- **Error**: `CryptoLoans.GetCollateralAssetsDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.GetCollateralAssetsDataUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `collateralCoin` | `query` | `string` | no |
| `vipLevel` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanCollateralDataResponse` | `sapiV1LoanCollateralDataResponseSchema` | `src/models/sapi-v1-loan-collateral-data-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCryptoLoansBorrowHistoryUserData

- **Signature**: `getCryptoLoansBorrowHistoryUserData(request: CryptoLoans.GetCryptoLoansBorrowHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanBorrowHistoryResponse, CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/loan/borrow/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanBorrowHistoryResponse`
- **Error**: `CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.GetCryptoLoansBorrowHistoryUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanBorrowHistoryResponse` | `sapiV1LoanBorrowHistoryResponseSchema` | `src/models/sapi-v1-loan-borrow-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCryptoLoansIncomeHistoryUserData

- **Signature**: `getCryptoLoansIncomeHistoryUserData(request: CryptoLoans.GetCryptoLoansIncomeHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanIncomeResponse[], CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/loan/income`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanIncomeResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.GetCryptoLoansIncomeHistoryUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `type` | `query` | `Type9` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type9` | `type9Schema` | `src/models/type9.ts` |
| `SapiV1LoanIncomeResponse` | `sapiV1LoanIncomeResponseSchema` | `src/models/sapi-v1-loan-income-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFlexibleLoanAssetsDataUserData

- **Signature**: `getFlexibleLoanAssetsDataUserData(request: CryptoLoans.GetFlexibleLoanAssetsDataUserDataRequest, options?: RequestOptions): ApiPromise<SapiV2LoanFlexibleLoanableDataResponse, CryptoLoans.GetFlexibleLoanAssetsDataUserDataError>`
- **Wire**: `GET /sapi/v2/loan/flexible/loanable/data`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2LoanFlexibleLoanableDataResponse`
- **Error**: `CryptoLoans.GetFlexibleLoanAssetsDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.GetFlexibleLoanAssetsDataUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2LoanFlexibleLoanableDataResponse` | `sapiV2LoanFlexibleLoanableDataResponseSchema` | `src/models/sapi-v2-loan-flexible-loanable-data-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFlexibleLoanCollateralAssetsDataUserData

- **Signature**: `getFlexibleLoanCollateralAssetsDataUserData(request: CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataRequest, options?: RequestOptions): ApiPromise<SapiV2LoanFlexibleCollateralDataResponse, CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataError>`
- **Wire**: `GET /sapi/v2/loan/flexible/collateral/data`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2LoanFlexibleCollateralDataResponse`
- **Error**: `CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `collateralCoin` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2LoanFlexibleCollateralDataResponse` | `sapiV2LoanFlexibleCollateralDataResponseSchema` | `src/models/sapi-v2-loan-flexible-collateral-data-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLoanLtvAdjustmentHistoryUserData

- **Signature**: `getLoanLtvAdjustmentHistoryUserData(request: CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanLtvAdjustmentHistoryResponse, CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/loan/ltv/adjustment/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanLtvAdjustmentHistoryResponse`
- **Error**: `CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanLtvAdjustmentHistoryResponse` | `sapiV1LoanLtvAdjustmentHistoryResponseSchema` | `src/models/sapi-v1-loan-ltv-adjustment-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLoanOngoingOrdersUserData

- **Signature**: `getLoanOngoingOrdersUserData(request: CryptoLoans.GetLoanOngoingOrdersUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanOngoingOrdersResponse, CryptoLoans.GetLoanOngoingOrdersUserDataError>`
- **Wire**: `GET /sapi/v1/loan/ongoing/orders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanOngoingOrdersResponse`
- **Error**: `CryptoLoans.GetLoanOngoingOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.GetLoanOngoingOrdersUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanOngoingOrdersResponse` | `sapiV1LoanOngoingOrdersResponseSchema` | `src/models/sapi-v1-loan-ongoing-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLoanRepaymentHistoryUserData

- **Signature**: `getLoanRepaymentHistoryUserData(request: CryptoLoans.GetLoanRepaymentHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanRepayHistoryResponse, CryptoLoans.GetLoanRepaymentHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/loan/repay/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanRepayHistoryResponse`
- **Error**: `CryptoLoans.GetLoanRepaymentHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.GetLoanRepaymentHistoryUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanRepayHistoryResponse` | `sapiV1LoanRepayHistoryResponseSchema` | `src/models/sapi-v1-loan-repay-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLoanableAssetsDataUserData

- **Signature**: `getLoanableAssetsDataUserData(request: CryptoLoans.GetLoanableAssetsDataUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanLoanableDataResponse, CryptoLoans.GetLoanableAssetsDataUserDataError>`
- **Wire**: `GET /sapi/v1/loan/loanable/data`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanLoanableDataResponse`
- **Error**: `CryptoLoans.GetLoanableAssetsDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.GetLoanableAssetsDataUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `vipLevel` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanLoanableDataResponse` | `sapiV1LoanLoanableDataResponseSchema` | `src/models/sapi-v1-loan-loanable-data-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### repayFlexibleLoanRepayTrade

- **Signature**: `repayFlexibleLoanRepayTrade(request: CryptoLoans.RepayFlexibleLoanRepayTradeRequest, options?: RequestOptions): ApiPromise<SapiV2LoanFlexibleRepayResponse, CryptoLoans.RepayFlexibleLoanRepayTradeError>`
- **Wire**: `POST /sapi/v2/loan/flexible/repay`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2LoanFlexibleRepayResponse`
- **Error**: `CryptoLoans.RepayFlexibleLoanRepayTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.RepayFlexibleLoanRepayTradeRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repayAmount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `collateralReturn` | `query` | `boolean` | no |
| `fullRepayment` | `query` | `boolean` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2LoanFlexibleRepayResponse` | `sapiV2LoanFlexibleRepayResponseSchema` | `src/models/sapi-v2-loan-flexible-repay-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### repayGetFlexibleLoanRepaymentHistoryUserData

- **Signature**: `repayGetFlexibleLoanRepaymentHistoryUserData(request: CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV2LoanFlexibleRepayHistoryResponse, CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataError>`
- **Wire**: `GET /sapi/v2/loan/flexible/repay/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2LoanFlexibleRepayHistoryResponse`
- **Error**: `CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2LoanFlexibleRepayHistoryResponse` | `sapiV2LoanFlexibleRepayHistoryResponseSchema` | `src/models/sapi-v2-loan-flexible-repay-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

