<!-- Generated file — do not edit; regenerated with the SDK. -->

# SimpleEarn — operations

Accessor: `client.simpleEarn` · Source: `src/resources/simple-earn.ts` · 24 operations · Request and error types: namespace `SimpleEarn`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getCollateralRecordUserData

- **Signature**: `getCollateralRecordUserData(request: SimpleEarn.GetCollateralRecordUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse, SimpleEarn.GetCollateralRecordUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/flexible/history/collateralRecord`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse`
- **Error**: `SimpleEarn.GetCollateralRecordUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetCollateralRecordUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `productId` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse` | `sapiV1SimpleEarnFlexibleHistoryCollateralRecordResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-history-collateral-record-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFlexiblePersonalLeftQuotaUserData

- **Signature**: `getFlexiblePersonalLeftQuotaUserData(request: SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse, SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/flexible/personalLeftQuota`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse`
- **Error**: `SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `productId` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse` | `sapiV1SimpleEarnFlexiblePersonalLeftQuotaResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-personal-left-quota-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFlexibleProductPositionUserData

- **Signature**: `getFlexibleProductPositionUserData(request: SimpleEarn.GetFlexibleProductPositionUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexiblePositionResponse, SimpleEarn.GetFlexibleProductPositionUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/flexible/position`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexiblePositionResponse`
- **Error**: `SimpleEarn.GetFlexibleProductPositionUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetFlexibleProductPositionUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `productId` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexiblePositionResponse` | `sapiV1SimpleEarnFlexiblePositionResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-position-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFlexibleRedemptionRecordUserData

- **Signature**: `getFlexibleRedemptionRecordUserData(request: SimpleEarn.GetFlexibleRedemptionRecordUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse, SimpleEarn.GetFlexibleRedemptionRecordUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/flexible/history/redemptionRecord`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse`
- **Error**: `SimpleEarn.GetFlexibleRedemptionRecordUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetFlexibleRedemptionRecordUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `productId` | `query` | `string` | no |
| `redeemId` | `query` | `string` | no |
| `asset` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse` | `sapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-history-redemption-record-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFlexibleRewardsHistoryUserData

- **Signature**: `getFlexibleRewardsHistoryUserData(request: SimpleEarn.GetFlexibleRewardsHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse, SimpleEarn.GetFlexibleRewardsHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/flexible/history/rewardsRecord`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse`
- **Error**: `SimpleEarn.GetFlexibleRewardsHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetFlexibleRewardsHistoryUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `string` | yes |
| `productId` | `query` | `string` | no |
| `asset` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse` | `sapiV1SimpleEarnFlexibleHistoryRewardsRecordResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-history-rewards-record-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFlexibleSubscriptionPreviewUserData

- **Signature**: `getFlexibleSubscriptionPreviewUserData(request: SimpleEarn.GetFlexibleSubscriptionPreviewUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse, SimpleEarn.GetFlexibleSubscriptionPreviewUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/flexible/subscriptionPreview`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse`
- **Error**: `SimpleEarn.GetFlexibleSubscriptionPreviewUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetFlexibleSubscriptionPreviewUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `productId` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse` | `sapiV1SimpleEarnFlexibleSubscriptionPreviewResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-subscription-preview-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFlexibleSubscriptionRecordUserData

- **Signature**: `getFlexibleSubscriptionRecordUserData(request: SimpleEarn.GetFlexibleSubscriptionRecordUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse, SimpleEarn.GetFlexibleSubscriptionRecordUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/flexible/history/subscriptionRecord`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse`
- **Error**: `SimpleEarn.GetFlexibleSubscriptionRecordUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetFlexibleSubscriptionRecordUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `productId` | `query` | `string` | no |
| `purchaseId` | `query` | `string` | no |
| `asset` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse` | `sapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-history-subscription-record-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLockedPersonalLeftQuotaUserData

- **Signature**: `getLockedPersonalLeftQuotaUserData(request: SimpleEarn.GetLockedPersonalLeftQuotaUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedPersonalLeftQuotaResponse, SimpleEarn.GetLockedPersonalLeftQuotaUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/locked/personalLeftQuota`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedPersonalLeftQuotaResponse`
- **Error**: `SimpleEarn.GetLockedPersonalLeftQuotaUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetLockedPersonalLeftQuotaUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnLockedPersonalLeftQuotaResponse` | `sapiV1SimpleEarnLockedPersonalLeftQuotaResponseSchema` | `src/models/sapi-v1-simple-earn-locked-personal-left-quota-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLockedProductPositionUserData

- **Signature**: `getLockedProductPositionUserData(request: SimpleEarn.GetLockedProductPositionUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedPositionResponse, SimpleEarn.GetLockedProductPositionUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/locked/position`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedPositionResponse`
- **Error**: `SimpleEarn.GetLockedProductPositionUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetLockedProductPositionUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `positionId` | `query` | `string` | no |
| `projectId` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnLockedPositionResponse` | `sapiV1SimpleEarnLockedPositionResponseSchema` | `src/models/sapi-v1-simple-earn-locked-position-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLockedRedemptionRecordUserData

- **Signature**: `getLockedRedemptionRecordUserData(request: SimpleEarn.GetLockedRedemptionRecordUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse, SimpleEarn.GetLockedRedemptionRecordUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/locked/history/redemptionRecord`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse`
- **Error**: `SimpleEarn.GetLockedRedemptionRecordUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetLockedRedemptionRecordUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `positionId` | `query` | `string` | no |
| `redeemId` | `query` | `string` | no |
| `asset` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse` | `sapiV1SimpleEarnLockedHistoryRedemptionRecordResponseSchema` | `src/models/sapi-v1-simple-earn-locked-history-redemption-record-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLockedRewardsHistoryUserData

- **Signature**: `getLockedRewardsHistoryUserData(request: SimpleEarn.GetLockedRewardsHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedHistoryRewardsRecordResponse, SimpleEarn.GetLockedRewardsHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/locked/history/rewardsRecord`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedHistoryRewardsRecordResponse`
- **Error**: `SimpleEarn.GetLockedRewardsHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetLockedRewardsHistoryUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `positionId` | `query` | `string` | no |
| `asset` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnLockedHistoryRewardsRecordResponse` | `sapiV1SimpleEarnLockedHistoryRewardsRecordResponseSchema` | `src/models/sapi-v1-simple-earn-locked-history-rewards-record-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLockedSubscriptionPreviewUserData

- **Signature**: `getLockedSubscriptionPreviewUserData(request: SimpleEarn.GetLockedSubscriptionPreviewUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedSubscriptionPreviewResponse[], SimpleEarn.GetLockedSubscriptionPreviewUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/locked/subscriptionPreview`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedSubscriptionPreviewResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SimpleEarn.GetLockedSubscriptionPreviewUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetLockedSubscriptionPreviewUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `autoSubscribe` | `query` | `boolean` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnLockedSubscriptionPreviewResponse` | `sapiV1SimpleEarnLockedSubscriptionPreviewResponseSchema` | `src/models/sapi-v1-simple-earn-locked-subscription-preview-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLockedSubscriptionRecordUserData

- **Signature**: `getLockedSubscriptionRecordUserData(request: SimpleEarn.GetLockedSubscriptionRecordUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse, SimpleEarn.GetLockedSubscriptionRecordUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/locked/history/subscriptionRecord`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse`
- **Error**: `SimpleEarn.GetLockedSubscriptionRecordUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetLockedSubscriptionRecordUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `purchaseId` | `query` | `string` | no |
| `asset` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse` | `sapiV1SimpleEarnLockedHistorySubscriptionRecordResponseSchema` | `src/models/sapi-v1-simple-earn-locked-history-subscription-record-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRateHistoryUserData

- **Signature**: `getRateHistoryUserData(request: SimpleEarn.GetRateHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse, SimpleEarn.GetRateHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/flexible/history/rateHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse`
- **Error**: `SimpleEarn.GetRateHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetRateHistoryUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `productId` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse` | `sapiV1SimpleEarnFlexibleHistoryRateHistoryResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-history-rate-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSimpleEarnFlexibleProductListUserData

- **Signature**: `getSimpleEarnFlexibleProductListUserData(request: SimpleEarn.GetSimpleEarnFlexibleProductListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleListResponse, SimpleEarn.GetSimpleEarnFlexibleProductListUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/flexible/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleListResponse`
- **Error**: `SimpleEarn.GetSimpleEarnFlexibleProductListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetSimpleEarnFlexibleProductListUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleListResponse` | `sapiV1SimpleEarnFlexibleListResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSimpleEarnLockedProductListUserData

- **Signature**: `getSimpleEarnLockedProductListUserData(request: SimpleEarn.GetSimpleEarnLockedProductListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedListResponse, SimpleEarn.GetSimpleEarnLockedProductListUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/locked/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedListResponse`
- **Error**: `SimpleEarn.GetSimpleEarnLockedProductListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.GetSimpleEarnLockedProductListUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnLockedListResponse` | `sapiV1SimpleEarnLockedListResponseSchema` | `src/models/sapi-v1-simple-earn-locked-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### redeemFlexibleProductTrade

- **Signature**: `redeemFlexibleProductTrade(request: SimpleEarn.RedeemFlexibleProductTradeRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleRedeemResponse, SimpleEarn.RedeemFlexibleProductTradeError>`
- **Wire**: `POST /sapi/v1/simple-earn/flexible/redeem`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleRedeemResponse`
- **Error**: `SimpleEarn.RedeemFlexibleProductTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.RedeemFlexibleProductTradeRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `productId` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `redeemAll` | `query` | `boolean` | no |
| `amount` | `query` | `number` | no |
| `destAccount` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleRedeemResponse` | `sapiV1SimpleEarnFlexibleRedeemResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-redeem-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### redeemLockedProductTrade

- **Signature**: `redeemLockedProductTrade(request: SimpleEarn.RedeemLockedProductTradeRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedRedeemResponse, SimpleEarn.RedeemLockedProductTradeError>`
- **Wire**: `POST /sapi/v1/simple-earn/locked/redeem`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedRedeemResponse`
- **Error**: `SimpleEarn.RedeemLockedProductTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.RedeemLockedProductTradeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `positionId` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnLockedRedeemResponse` | `sapiV1SimpleEarnLockedRedeemResponseSchema` | `src/models/sapi-v1-simple-earn-locked-redeem-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setFlexibleAutoSubscribeUserData

- **Signature**: `setFlexibleAutoSubscribeUserData(request: SimpleEarn.SetFlexibleAutoSubscribeUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse, SimpleEarn.SetFlexibleAutoSubscribeUserDataError>`
- **Wire**: `POST /sapi/v1/simple-earn/flexible/setAutoSubscribe`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse`
- **Error**: `SimpleEarn.SetFlexibleAutoSubscribeUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.SetFlexibleAutoSubscribeUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `productId` | `query` | `string` | yes |
| `autoSubscribe` | `query` | `boolean` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse` | `sapiV1SimpleEarnFlexibleSetAutoSubscribeResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-set-auto-subscribe-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setLockedAutoSubscribeUserData

- **Signature**: `setLockedAutoSubscribeUserData(request: SimpleEarn.SetLockedAutoSubscribeUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedSetAutoSubscribeResponse, SimpleEarn.SetLockedAutoSubscribeUserDataError>`
- **Wire**: `POST /sapi/v1/simple-earn/locked/setAutoSubscribe`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedSetAutoSubscribeResponse`
- **Error**: `SimpleEarn.SetLockedAutoSubscribeUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.SetLockedAutoSubscribeUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `positionId` | `query` | `string` | yes |
| `autoSubscribe` | `query` | `boolean` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnLockedSetAutoSubscribeResponse` | `sapiV1SimpleEarnLockedSetAutoSubscribeResponseSchema` | `src/models/sapi-v1-simple-earn-locked-set-auto-subscribe-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setLockedProductRedeemOptionUserData

- **Signature**: `setLockedProductRedeemOptionUserData(request: SimpleEarn.SetLockedProductRedeemOptionUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedSetRedeemOptionResponse, SimpleEarn.SetLockedProductRedeemOptionUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/locked/setRedeemOption`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedSetRedeemOptionResponse`
- **Error**: `SimpleEarn.SetLockedProductRedeemOptionUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.SetLockedProductRedeemOptionUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `positionId` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `redeemTo` | `query` | `RedeemTo` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RedeemTo` | `redeemToSchema` | `src/models/redeem-to.ts` |
| `SapiV1SimpleEarnLockedSetRedeemOptionResponse` | `sapiV1SimpleEarnLockedSetRedeemOptionResponseSchema` | `src/models/sapi-v1-simple-earn-locked-set-redeem-option-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### simpleAccountUserData

- **Signature**: `simpleAccountUserData(request: SimpleEarn.SimpleAccountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnAccountResponse, SimpleEarn.SimpleAccountUserDataError>`
- **Wire**: `GET /sapi/v1/simple-earn/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnAccountResponse`
- **Error**: `SimpleEarn.SimpleAccountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.SimpleAccountUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnAccountResponse` | `sapiV1SimpleEarnAccountResponseSchema` | `src/models/sapi-v1-simple-earn-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subscribeFlexibleProductTrade

- **Signature**: `subscribeFlexibleProductTrade(request: SimpleEarn.SubscribeFlexibleProductTradeRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnFlexibleSubscribeResponse, SimpleEarn.SubscribeFlexibleProductTradeError>`
- **Wire**: `POST /sapi/v1/simple-earn/flexible/subscribe`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnFlexibleSubscribeResponse`
- **Error**: `SimpleEarn.SubscribeFlexibleProductTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.SubscribeFlexibleProductTradeRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `productId` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `autoSubscribe` | `query` | `boolean` | no |
| `sourceAccount` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SimpleEarnFlexibleSubscribeResponse` | `sapiV1SimpleEarnFlexibleSubscribeResponseSchema` | `src/models/sapi-v1-simple-earn-flexible-subscribe-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subscribeLockedProductTrade

- **Signature**: `subscribeLockedProductTrade(request: SimpleEarn.SubscribeLockedProductTradeRequest, options?: RequestOptions): ApiPromise<SapiV1SimpleEarnLockedSubscribeResponse, SimpleEarn.SubscribeLockedProductTradeError>`
- **Wire**: `POST /sapi/v1/simple-earn/locked/subscribe`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SimpleEarnLockedSubscribeResponse`
- **Error**: `SimpleEarn.SubscribeLockedProductTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimpleEarn.SubscribeLockedProductTradeRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `autoSubscribe` | `query` | `boolean` | no |
| `sourceAccount` | `query` | `string` | no |
| `redeemTo` | `query` | `RedeemTo` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RedeemTo` | `redeemToSchema` | `src/models/redeem-to.ts` |
| `SapiV1SimpleEarnLockedSubscribeResponse` | `sapiV1SimpleEarnLockedSubscribeResponseSchema` | `src/models/sapi-v1-simple-earn-locked-subscribe-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

