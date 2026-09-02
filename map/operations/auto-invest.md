<!-- Generated file — do not edit; regenerated with the SDK. -->

# AutoInvest — operations

Accessor: `client.autoInvest` · Source: `src/resources/auto-invest.ts` · 17 operations · Request and error types: namespace `AutoInvest`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### changePlanStatus

- **Signature**: `changePlanStatus(request: AutoInvest.ChangePlanStatusRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestPlanEditStatusResponse, AutoInvest.ChangePlanStatusError>`
- **Wire**: `POST /sapi/v1/lending/auto-invest/plan/edit-status`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestPlanEditStatusResponse`
- **Error**: `AutoInvest.ChangePlanStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.ChangePlanStatusRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `planId` | `query` | `number` | yes |
| `status` | `query` | `Status1` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status1` | `status1Schema` | `src/models/status1.ts` |
| `SapiV1LendingAutoInvestPlanEditStatusResponse` | `sapiV1LendingAutoInvestPlanEditStatusResponseSchema` | `src/models/sapi-v1-lending-auto-invest-plan-edit-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getListOfPlans

- **Signature**: `getListOfPlans(request: AutoInvest.GetListOfPlansRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestPlanListResponse, AutoInvest.GetListOfPlansError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/plan/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestPlanListResponse`
- **Error**: `AutoInvest.GetListOfPlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.GetListOfPlansRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `planType` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestPlanListResponse` | `sapiV1LendingAutoInvestPlanListResponseSchema` | `src/models/sapi-v1-lending-auto-invest-plan-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getTargetAssetRoiDataUserData

- **Signature**: `getTargetAssetRoiDataUserData(request: AutoInvest.GetTargetAssetRoiDataUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestTargetAssetRoiListResponse[], AutoInvest.GetTargetAssetRoiDataUserDataError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/target-asset/roi/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestTargetAssetRoiListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AutoInvest.GetTargetAssetRoiDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.GetTargetAssetRoiDataUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `targetAsset` | `query` | `string` | yes |
| `hisRoiType` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestTargetAssetRoiListResponse` | `sapiV1LendingAutoInvestTargetAssetRoiListResponseSchema` | `src/models/sapi-v1-lending-auto-invest-target-asset-roi-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getTargetAssetListUserData

- **Signature**: `getTargetAssetListUserData(request: AutoInvest.GetTargetAssetListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestTargetAssetListResponse, AutoInvest.GetTargetAssetListUserDataError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/target-asset/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestTargetAssetListResponse`
- **Error**: `AutoInvest.GetTargetAssetListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.GetTargetAssetListUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `targetAsset` | `query` | `string` | no |
| `size` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestTargetAssetListResponse` | `sapiV1LendingAutoInvestTargetAssetListResponseSchema` | `src/models/sapi-v1-lending-auto-invest-target-asset-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### indexLinkedPlanRebalanceDetailsUserData

- **Signature**: `indexLinkedPlanRebalanceDetailsUserData(request: AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestRebalanceHistoryResponse[], AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/rebalance/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestRebalanceHistoryResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestRebalanceHistoryResponse` | `sapiV1LendingAutoInvestRebalanceHistoryResponseSchema` | `src/models/sapi-v1-lending-auto-invest-rebalance-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### indexLinkedPlanRedemptionTrade

- **Signature**: `indexLinkedPlanRedemptionTrade(request: AutoInvest.IndexLinkedPlanRedemptionTradeRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestRedeemResponse, AutoInvest.IndexLinkedPlanRedemptionTradeError>`
- **Wire**: `POST /sapi/v1/lending/auto-invest/redeem`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestRedeemResponse`
- **Error**: `AutoInvest.IndexLinkedPlanRedemptionTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.IndexLinkedPlanRedemptionTradeRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `indexId` | `query` | `number` | yes |
| `redemptionPercentage` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestRedeemResponse` | `sapiV1LendingAutoInvestRedeemResponseSchema` | `src/models/sapi-v1-lending-auto-invest-redeem-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### indexLinkedPlanRedemptionHistoryUserData

- **Signature**: `indexLinkedPlanRedemptionHistoryUserData(request: AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestRedeemHistoryResponse[], AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/redeem/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestRedeemHistoryResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `requestId` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `asset` | `query` | `string` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestRedeemHistoryResponse` | `sapiV1LendingAutoInvestRedeemHistoryResponseSchema` | `src/models/sapi-v1-lending-auto-invest-redeem-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### investmentPlanAdjustment

- **Signature**: `investmentPlanAdjustment(request: AutoInvest.InvestmentPlanAdjustmentRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestPlanEditResponse, AutoInvest.InvestmentPlanAdjustmentError>`
- **Wire**: `POST /sapi/v1/lending/auto-invest/plan/edit`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestPlanEditResponse`
- **Error**: `AutoInvest.InvestmentPlanAdjustmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.InvestmentPlanAdjustmentRequest` (12):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `planId` | `query` | `number` | yes |
| `subscriptionAmount` | `query` | `number` | yes |
| `subscriptionCycle` | `query` | `SubscriptionCycle` | yes |
| `subscriptionStartTime` | `query` | `number` | yes |
| `sourceAsset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `subscriptionStartDay` | `query` | `number` | no |
| `subscriptionStartWeekday` | `query` | `SubscriptionStartWeekday` | no |
| `flexibleAllowedToUse` | `query` | `boolean` | no |
| `details` | `query` | `Detail1[]` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionCycle` | `subscriptionCycleSchema` | `src/models/subscription-cycle.ts` |
| `SubscriptionStartWeekday` | `subscriptionStartWeekdaySchema` | `src/models/subscription-start-weekday.ts` |
| `Detail1` | `detail1Schema` | `src/models/detail1.ts` |
| `SapiV1LendingAutoInvestPlanEditResponse` | `sapiV1LendingAutoInvestPlanEditResponseSchema` | `src/models/sapi-v1-lending-auto-invest-plan-edit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### investmentPlanCreationUserData

- **Signature**: `investmentPlanCreationUserData(request: AutoInvest.InvestmentPlanCreationUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestPlanAddResponse, AutoInvest.InvestmentPlanCreationUserDataError>`
- **Wire**: `POST /sapi/v1/lending/auto-invest/plan/add`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestPlanAddResponse`
- **Error**: `AutoInvest.InvestmentPlanCreationUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.InvestmentPlanCreationUserDataRequest` (15):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sourceType` | `query` | — | `SourceType` | yes |
| `planType` | `query` | — | `PlanType` | yes |
| `subscriptionAmount` | `query` | — | `number` | yes |
| `subscriptionCycle` | `query` | — | `SubscriptionCycle` | yes |
| `subscriptionStartTime` | `query` | — | `number` | yes |
| `sourceAsset` | `query` | — | `string` | yes |
| `details` | `query` | — | `Detail1[]` | yes |
| `timestamp` | `query` | — | `number` | yes |
| `signature` | `query` | — | `string` | yes |
| `requestId` | `query` | — | `string` | no |
| `indexId` | `query` | `IndexId` | `number` | no |
| `subscriptionStartDay` | `query` | — | `number` | no |
| `subscriptionStartWeekday` | `query` | — | `SubscriptionStartWeekday` | no |
| `flexibleAllowedToUse` | `query` | — | `boolean` | no |
| `recvWindow` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceType` | `sourceTypeSchema` | `src/models/source-type.ts` |
| `PlanType` | `planTypeSchema` | `src/models/plan-type.ts` |
| `SubscriptionCycle` | `subscriptionCycleSchema` | `src/models/subscription-cycle.ts` |
| `Detail1` | `detail1Schema` | `src/models/detail1.ts` |
| `SubscriptionStartWeekday` | `subscriptionStartWeekdaySchema` | `src/models/subscription-start-weekday.ts` |
| `SapiV1LendingAutoInvestPlanAddResponse` | `sapiV1LendingAutoInvestPlanAddResponseSchema` | `src/models/sapi-v1-lending-auto-invest-plan-add-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### oneTimeTransactionTrade

- **Signature**: `oneTimeTransactionTrade(request: AutoInvest.OneTimeTransactionTradeRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestOneOffResponse, AutoInvest.OneTimeTransactionTradeError>`
- **Wire**: `POST /sapi/v1/lending/auto-invest/one-off`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestOneOffResponse`
- **Error**: `AutoInvest.OneTimeTransactionTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.OneTimeTransactionTradeRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourceType` | `query` | `string` | yes |
| `subscriptionAmount` | `query` | `number` | yes |
| `sourceAsset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `flexibleAllowedToUse` | `query` | `boolean` | no |
| `planId` | `query` | `number` | no |
| `indexId` | `query` | `number` | no |
| `details` | `query` | `Detail5[]` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail5` | `detail5Schema` | `src/models/detail5.ts` |
| `SapiV1LendingAutoInvestOneOffResponse` | `sapiV1LendingAutoInvestOneOffResponseSchema` | `src/models/sapi-v1-lending-auto-invest-one-off-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryIndexDetailsUserData

- **Signature**: `queryIndexDetailsUserData(request: AutoInvest.QueryIndexDetailsUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestIndexInfoResponse, AutoInvest.QueryIndexDetailsUserDataError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/index/info`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestIndexInfoResponse`
- **Error**: `AutoInvest.QueryIndexDetailsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.QueryIndexDetailsUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `indexId` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestIndexInfoResponse` | `sapiV1LendingAutoInvestIndexInfoResponseSchema` | `src/models/sapi-v1-lending-auto-invest-index-info-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryIndexLinkedPlanPositionDetailsUserData

- **Signature**: `queryIndexLinkedPlanPositionDetailsUserData(request: AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestIndexUserSummaryResponse, AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/index/user-summary`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestIndexUserSummaryResponse`
- **Error**: `AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `indexId` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestIndexUserSummaryResponse` | `sapiV1LendingAutoInvestIndexUserSummaryResponseSchema` | `src/models/sapi-v1-lending-auto-invest-index-user-summary-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryOneTimeTransactionStatusUserData

- **Signature**: `queryOneTimeTransactionStatusUserData(request: AutoInvest.QueryOneTimeTransactionStatusUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestOneOffStatusResponse, AutoInvest.QueryOneTimeTransactionStatusUserDataError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/one-off/status`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestOneOffStatusResponse`
- **Error**: `AutoInvest.QueryOneTimeTransactionStatusUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.QueryOneTimeTransactionStatusUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionId` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestOneOffStatusResponse` | `sapiV1LendingAutoInvestOneOffStatusResponseSchema` | `src/models/sapi-v1-lending-auto-invest-one-off-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryAllSourceAssetAndTargetAssetUserData

- **Signature**: `queryAllSourceAssetAndTargetAssetUserData(request: AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestAllAssetResponse, AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/all/asset`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestAllAssetResponse`
- **Error**: `AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestAllAssetResponse` | `sapiV1LendingAutoInvestAllAssetResponseSchema` | `src/models/sapi-v1-lending-auto-invest-all-asset-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryHoldingDetailsOfThePlan

- **Signature**: `queryHoldingDetailsOfThePlan(request: AutoInvest.QueryHoldingDetailsOfThePlanRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestPlanIdResponse, AutoInvest.QueryHoldingDetailsOfThePlanError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/plan/id`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestPlanIdResponse`
- **Error**: `AutoInvest.QueryHoldingDetailsOfThePlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.QueryHoldingDetailsOfThePlanRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `planId` | `query` | `number` | no |
| `requestId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestPlanIdResponse` | `sapiV1LendingAutoInvestPlanIdResponseSchema` | `src/models/sapi-v1-lending-auto-invest-plan-id-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### querySourceAssetListUserData

- **Signature**: `querySourceAssetListUserData(request: AutoInvest.QuerySourceAssetListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestSourceAssetListResponse, AutoInvest.QuerySourceAssetListUserDataError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/source-asset/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestSourceAssetListResponse`
- **Error**: `AutoInvest.QuerySourceAssetListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.QuerySourceAssetListUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `usageType` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `targetAsset` | `query` | `string` | no |
| `indexId` | `query` | `number` | no |
| `flexibleAllowedToUse` | `query` | `boolean` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingAutoInvestSourceAssetListResponse` | `sapiV1LendingAutoInvestSourceAssetListResponseSchema` | `src/models/sapi-v1-lending-auto-invest-source-asset-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### querySubscriptionTransactionHistory

- **Signature**: `querySubscriptionTransactionHistory(request: AutoInvest.QuerySubscriptionTransactionHistoryRequest, options?: RequestOptions): ApiPromise<SapiV1LendingAutoInvestHistoryListResponse[], AutoInvest.QuerySubscriptionTransactionHistoryError>`
- **Wire**: `GET /sapi/v1/lending/auto-invest/history/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingAutoInvestHistoryListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AutoInvest.QuerySubscriptionTransactionHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutoInvest.QuerySubscriptionTransactionHistoryRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `planId` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `targetAsset` | `query` | `number` | no |
| `planType` | `query` | `PlanType1` | no |
| `size` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlanType1` | `planType1Schema` | `src/models/plan-type1.ts` |
| `SapiV1LendingAutoInvestHistoryListResponse` | `sapiV1LendingAutoInvestHistoryListResponseSchema` | `src/models/sapi-v1-lending-auto-invest-history-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

