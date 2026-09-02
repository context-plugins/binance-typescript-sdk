<!-- Generated file — do not edit; regenerated with the SDK. -->

# VipLoans — operations

Accessor: `client.vipLoans` · Source: `src/resources/vip-loans.ts` · 10 operations · Request and error types: namespace `VipLoans`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### checkLockedValueOfVipCollateralAccountUserData

- **Signature**: `checkLockedValueOfVipCollateralAccountUserData(request: VipLoans.CheckLockedValueOfVipCollateralAccountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipCollateralAccountResponse, VipLoans.CheckLockedValueOfVipCollateralAccountUserDataError>`
- **Wire**: `GET /sapi/v1/loan/vip/collateral/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipCollateralAccountResponse`
- **Error**: `VipLoans.CheckLockedValueOfVipCollateralAccountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.CheckLockedValueOfVipCollateralAccountUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `collateralAccountId` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanVipCollateralAccountResponse` | `sapiV1LoanVipCollateralAccountResponseSchema` | `src/models/sapi-v1-loan-vip-collateral-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getBorrowInterestRateUserData

- **Signature**: `getBorrowInterestRateUserData(request: VipLoans.GetBorrowInterestRateUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipRequestInterestRateResponse[], VipLoans.GetBorrowInterestRateUserDataError>`
- **Wire**: `GET /sapi/v1/loan/vip/request/interestRate`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipRequestInterestRateResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VipLoans.GetBorrowInterestRateUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.GetBorrowInterestRateUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanVipRequestInterestRateResponse` | `sapiV1LoanVipRequestInterestRateResponseSchema` | `src/models/sapi-v1-loan-vip-request-interest-rate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCollateralAssetDataUserData

- **Signature**: `getCollateralAssetDataUserData(request: VipLoans.GetCollateralAssetDataUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipCollateralDataResponse, VipLoans.GetCollateralAssetDataUserDataError>`
- **Wire**: `GET /sapi/v1/loan/vip/collateral/data`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipCollateralDataResponse`
- **Error**: `VipLoans.GetCollateralAssetDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.GetCollateralAssetDataUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `collateralCoin` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanVipCollateralDataResponse` | `sapiV1LoanVipCollateralDataResponseSchema` | `src/models/sapi-v1-loan-vip-collateral-data-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLoanableAssetsData

- **Signature**: `getLoanableAssetsData(request: VipLoans.GetLoanableAssetsDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipLoanableDataResponse, VipLoans.GetLoanableAssetsDataError>`
- **Wire**: `GET /sapi/v1/loan/vip/loanable/data`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipLoanableDataResponse`
- **Error**: `VipLoans.GetLoanableAssetsDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.GetLoanableAssetsDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `vipLevel` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanVipLoanableDataResponse` | `sapiV1LoanVipLoanableDataResponseSchema` | `src/models/sapi-v1-loan-vip-loanable-data-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVipLoanOngoingOrdersUserData

- **Signature**: `getVipLoanOngoingOrdersUserData(request: VipLoans.GetVipLoanOngoingOrdersUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipOngoingOrdersResponse, VipLoans.GetVipLoanOngoingOrdersUserDataError>`
- **Wire**: `GET /sapi/v1/loan/vip/ongoing/orders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipOngoingOrdersResponse`
- **Error**: `VipLoans.GetVipLoanOngoingOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.GetVipLoanOngoingOrdersUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `collateralAccountId` | `query` | `number` | no |
| `loanCoin` | `query` | `string` | no |
| `collateralCoin` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanVipOngoingOrdersResponse` | `sapiV1LoanVipOngoingOrdersResponseSchema` | `src/models/sapi-v1-loan-vip-ongoing-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVipLoanRepaymentHistoryUserData

- **Signature**: `getVipLoanRepaymentHistoryUserData(request: VipLoans.GetVipLoanRepaymentHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipRepayHistoryResponse, VipLoans.GetVipLoanRepaymentHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/loan/vip/repay/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipRepayHistoryResponse`
- **Error**: `VipLoans.GetVipLoanRepaymentHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.GetVipLoanRepaymentHistoryUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `loanCoin` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanVipRepayHistoryResponse` | `sapiV1LoanVipRepayHistoryResponseSchema` | `src/models/sapi-v1-loan-vip-repay-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryApplicationStatusUserData

- **Signature**: `queryApplicationStatusUserData(request: VipLoans.QueryApplicationStatusUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipRequestDataResponse, VipLoans.QueryApplicationStatusUserDataError>`
- **Wire**: `GET /sapi/v1/loan/vip/request/data`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipRequestDataResponse`
- **Error**: `VipLoans.QueryApplicationStatusUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.QueryApplicationStatusUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `current` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanVipRequestDataResponse` | `sapiV1LoanVipRequestDataResponseSchema` | `src/models/sapi-v1-loan-vip-request-data-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### vipLoanBorrow

- **Signature**: `vipLoanBorrow(request: VipLoans.VipLoanBorrowRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipBorrowResponse, VipLoans.VipLoanBorrowError>`
- **Wire**: `POST /sapi/v1/loan/vip/borrow`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipBorrowResponse`
- **Error**: `VipLoans.VipLoanBorrowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.VipLoanBorrowRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `loanAccountId` | `query` | `number` | yes |
| `loanAmount` | `query` | `number` | yes |
| `collateralAccountId` | `query` | `string` | yes |
| `collateralCoin` | `query` | `string` | yes |
| `isFlexibleRate` | `query` | `IsFlexibleRate` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `loanCoin` | `query` | `string` | no |
| `loanTerm` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsFlexibleRate` | `isFlexibleRateSchema` | `src/models/is-flexible-rate.ts` |
| `SapiV1LoanVipBorrowResponse` | `sapiV1LoanVipBorrowResponseSchema` | `src/models/sapi-v1-loan-vip-borrow-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### vipLoanRenew

- **Signature**: `vipLoanRenew(request: VipLoans.VipLoanRenewRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipRenewResponse, VipLoans.VipLoanRenewError>`
- **Wire**: `POST /sapi/v1/loan/vip/renew`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipRenewResponse`
- **Error**: `VipLoans.VipLoanRenewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.VipLoanRenewRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `loanTerm` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanVipRenewResponse` | `sapiV1LoanVipRenewResponseSchema` | `src/models/sapi-v1-loan-vip-renew-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### vipLoanRepayTrade

- **Signature**: `vipLoanRepayTrade(request: VipLoans.VipLoanRepayTradeRequest, options?: RequestOptions): ApiPromise<SapiV1LoanVipRepayResponse, VipLoans.VipLoanRepayTradeError>`
- **Wire**: `POST /sapi/v1/loan/vip/repay`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LoanVipRepayResponse`
- **Error**: `VipLoans.VipLoanRepayTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VipLoans.VipLoanRepayTradeRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LoanVipRepayResponse` | `sapiV1LoanVipRepayResponseSchema` | `src/models/sapi-v1-loan-vip-repay-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

