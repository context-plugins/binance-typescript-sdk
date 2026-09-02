<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubAccountApi — operations

Accessor: `client.subAccountApi` · Source: `src/resources/sub-account-api.ts` · 45 operations · Request and error types: namespace `SubAccountApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createAVirtualSubAccountForMasterAccount

- **Signature**: `createAVirtualSubAccountForMasterAccount(request: SubAccountApi.CreateAVirtualSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountVirtualSubAccountResponse, SubAccountApi.CreateAVirtualSubAccountForMasterAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/virtualSubAccount`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountVirtualSubAccountResponse`
- **Error**: `SubAccountApi.CreateAVirtualSubAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.CreateAVirtualSubAccountForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subAccountString` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountVirtualSubAccountResponse` | `sapiV1SubAccountVirtualSubAccountResponseSchema` | `src/models/sapi-v1-sub-account-virtual-sub-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteIpListForASubAccountApiKeyForMasterAccount

- **Signature**: `deleteIpListForASubAccountApiKeyForMasterAccount(request: SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse, SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountError>`
- **Wire**: `DELETE /sapi/v1/sub-account/subAccountApi/ipRestriction/ipList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse`
- **Error**: `SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `subAccountApiKey` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `ipAddress` | `query` | `string` | no |
| `thirdPartyName` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse` | `sapiV1SubAccountSubAccountApiIpRestrictionIpListResponseSchema` | `src/models/sapi-v1-sub-account-sub-account-api-ip-restriction-ip-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### depositAssetsIntoTheManagedSubAccountForInvestorMasterAccount

- **Signature**: `depositAssetsIntoTheManagedSubAccountForInvestorMasterAccount(request: SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountDepositResponse, SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError>`
- **Wire**: `POST /sapi/v1/managed-subaccount/deposit`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountDepositResponse`
- **Error**: `SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `toEmail` | `query` | `string` | yes |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountDepositResponse` | `sapiV1ManagedSubaccountDepositResponseSchema` | `src/models/sapi-v1-managed-subaccount-deposit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### detailOnSubAccountSFuturesAccountForMasterAccount

- **Signature**: `detailOnSubAccountSFuturesAccountForMasterAccount(request: SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountFuturesAccountResponse, SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/futures/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountFuturesAccountResponse`
- **Error**: `SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountFuturesAccountResponse` | `sapiV1SubAccountFuturesAccountResponseSchema` | `src/models/sapi-v1-sub-account-futures-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### detailOnSubAccountSFuturesAccountV2ForMasterAccount

- **Signature**: `detailOnSubAccountSFuturesAccountV2ForMasterAccount(request: SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV2SubAccountFuturesAccountResponse, SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountError>`
- **Wire**: `GET /sapi/v2/sub-account/futures/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2SubAccountFuturesAccountResponse`
- **Error**: `SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `futuresType` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2SubAccountFuturesAccountResponse` | `sapiV2SubAccountFuturesAccountResponseSchema` | `src/models/unions/sapi-v2-sub-account-futures-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### detailOnSubAccountSMarginAccountForMasterAccount

- **Signature**: `detailOnSubAccountSMarginAccountForMasterAccount(request: SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountMarginAccountResponse, SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/margin/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountMarginAccountResponse`
- **Error**: `SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountMarginAccountResponse` | `sapiV1SubAccountMarginAccountResponseSchema` | `src/models/sapi-v1-sub-account-margin-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### enableFuturesForSubAccountForMasterAccount

- **Signature**: `enableFuturesForSubAccountForMasterAccount(request: SubAccountApi.EnableFuturesForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountFuturesEnableResponse, SubAccountApi.EnableFuturesForSubAccountForMasterAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/futures/enable`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountFuturesEnableResponse`
- **Error**: `SubAccountApi.EnableFuturesForSubAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.EnableFuturesForSubAccountForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountFuturesEnableResponse` | `sapiV1SubAccountFuturesEnableResponseSchema` | `src/models/sapi-v1-sub-account-futures-enable-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### enableLeverageTokenForSubAccountForMasterAccount

- **Signature**: `enableLeverageTokenForSubAccountForMasterAccount(request: SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountBlvtEnableResponse, SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/blvt/enable`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountBlvtEnableResponse`
- **Error**: `SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `enableBlvt` | `query` | `boolean` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountBlvtEnableResponse` | `sapiV1SubAccountBlvtEnableResponseSchema` | `src/models/sapi-v1-sub-account-blvt-enable-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### enableMarginForSubAccountForMasterAccount

- **Signature**: `enableMarginForSubAccountForMasterAccount(request: SubAccountApi.EnableMarginForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountMarginEnableResponse, SubAccountApi.EnableMarginForSubAccountForMasterAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/margin/enable`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountMarginEnableResponse`
- **Error**: `SubAccountApi.EnableMarginForSubAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.EnableMarginForSubAccountForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountMarginEnableResponse` | `sapiV1SubAccountMarginEnableResponseSchema` | `src/models/sapi-v1-sub-account-margin-enable-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### enableOptionsForSubAccountForMasterAccountUserData

- **Signature**: `enableOptionsForSubAccountForMasterAccountUserData(request: SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountEoptionsEnableResponse, SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataError>`
- **Wire**: `POST /sapi/v1/sub-account/eoptions/enable`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountEoptionsEnableResponse`
- **Error**: `SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountEoptionsEnableResponse` | `sapiV1SubAccountEoptionsEnableResponseSchema` | `src/models/sapi-v1-sub-account-eoptions-enable-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### futuresPositionRiskOfSubAccountForMasterAccount

- **Signature**: `futuresPositionRiskOfSubAccountForMasterAccount(request: SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountFuturesPositionRiskResponse[], SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/futures/positionRisk`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountFuturesPositionRiskResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountFuturesPositionRiskResponse` | `sapiV1SubAccountFuturesPositionRiskResponseSchema` | `src/models/sapi-v1-sub-account-futures-position-risk-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### futuresPositionRiskOfSubAccountV2ForMasterAccount

- **Signature**: `futuresPositionRiskOfSubAccountV2ForMasterAccount(request: SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV2SubAccountFuturesPositionRiskResponse, SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountError>`
- **Wire**: `GET /sapi/v2/sub-account/futures/positionRisk`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2SubAccountFuturesPositionRiskResponse`
- **Error**: `SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `futuresType` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2SubAccountFuturesPositionRiskResponse` | `sapiV2SubAccountFuturesPositionRiskResponseSchema` | `src/models/unions/sapi-v2-sub-account-futures-position-risk-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getIpRestrictionForASubAccountApiKeyForMasterAccount

- **Signature**: `getIpRestrictionForASubAccountApiKeyForMasterAccount(request: SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountSubAccountApiIpRestrictionResponse, SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/subAccountApi/ipRestriction`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountSubAccountApiIpRestrictionResponse`
- **Error**: `SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `subAccountApiKey` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountSubAccountApiIpRestrictionResponse` | `sapiV1SubAccountSubAccountApiIpRestrictionResponseSchema` | `src/models/sapi-v1-sub-account-sub-account-api-ip-restriction-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getManagedSubAccountDepositAddressForInvestorMasterAccount

- **Signature**: `getManagedSubAccountDepositAddressForInvestorMasterAccount(request: SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountDepositAddressResponse, SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountError>`
- **Wire**: `GET /sapi/v1/managed-subaccount/deposit/address`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountDepositAddressResponse`
- **Error**: `SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `coin` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `network` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountDepositAddressResponse` | `sapiV1ManagedSubaccountDepositAddressResponseSchema` | `src/models/sapi-v1-managed-subaccount-deposit-address-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### managedSubAccountAssetDetailsForInvestorMasterAccount

- **Signature**: `managedSubAccountAssetDetailsForInvestorMasterAccount(request: SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountAssetResponse[], SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountError>`
- **Wire**: `GET /sapi/v1/managed-subaccount/asset`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountAssetResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountAssetResponse` | `sapiV1ManagedSubaccountAssetResponseSchema` | `src/models/sapi-v1-managed-subaccount-asset-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### managedSubAccountSnapshotForInvestorMasterAccount

- **Signature**: `managedSubAccountSnapshotForInvestorMasterAccount(request: SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountAccountSnapshotResponse, SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountError>`
- **Wire**: `GET /sapi/v1/managed-subaccount/accountSnapshot`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountAccountSnapshotResponse`
- **Error**: `SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `type` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountAccountSnapshotResponse` | `sapiV1ManagedSubaccountAccountSnapshotResponseSchema` | `src/models/sapi-v1-managed-subaccount-account-snapshot-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### marginTransferForSubAccountForMasterAccount

- **Signature**: `marginTransferForSubAccountForMasterAccount(request: SubAccountApi.MarginTransferForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountMarginTransferResponse, SubAccountApi.MarginTransferForSubAccountForMasterAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/margin/transfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountMarginTransferResponse`
- **Error**: `SubAccountApi.MarginTransferForSubAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.MarginTransferForSubAccountForMasterAccountRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `type` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountMarginTransferResponse` | `sapiV1SubAccountMarginTransferResponseSchema` | `src/models/sapi-v1-sub-account-margin-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryManagedSubAccountTransferLogForInvestorMasterAccount

- **Signature**: `queryManagedSubAccountTransferLogForInvestorMasterAccount(request: SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountQueryTransLogForInvestorResponse, SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountError>`
- **Wire**: `GET /sapi/v1/managed-subaccount/queryTransLogForInvestor`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountQueryTransLogForInvestorResponse`
- **Error**: `SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `transfers` | `query` | `string` | no |
| `transferFunctionAccountType` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountQueryTransLogForInvestorResponse` | `sapiV1ManagedSubaccountQueryTransLogForInvestorResponseSchema` | `src/models/sapi-v1-managed-subaccount-query-trans-log-for-investor-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryManagedSubAccountTransferLogForTradingTeamMasterAccount

- **Signature**: `queryManagedSubAccountTransferLogForTradingTeamMasterAccount(request: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse, SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError>`
- **Wire**: `GET /sapi/v1/managed-subaccount/queryTransLogForTradeParent`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse`
- **Error**: `SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `transfers` | `query` | `string` | no |
| `transferFunctionAccountType` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse` | `sapiV1ManagedSubaccountQueryTransLogForTradeParentResponseSchema` | `src/models/sapi-v1-managed-subaccount-query-trans-log-for-trade-parent-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryManagedSubAccountTransferLogForTradingTeamSubAccountUserData

- **Signature**: `queryManagedSubAccountTransferLogForTradingTeamSubAccountUserData(request: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountQueryTransLogResponse, SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError>`
- **Wire**: `GET /sapi/v1/managed-subaccount/query-trans-log`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountQueryTransLogResponse`
- **Error**: `SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transfers` | `query` | `Transfers` | yes |
| `transferFunctionAccountType` | `query` | `TransferFunctionAccountType` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Transfers` | `transfersSchema` | `src/models/transfers.ts` |
| `TransferFunctionAccountType` | `transferFunctionAccountTypeSchema` | `src/models/transfer-function-account-type.ts` |
| `SapiV1ManagedSubaccountQueryTransLogResponse` | `sapiV1ManagedSubaccountQueryTransLogResponseSchema` | `src/models/sapi-v1-managed-subaccount-query-trans-log-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccount

- **Signature**: `queryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccount(request: SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountFetchFutureAssetResponse, SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError>`
- **Wire**: `GET /sapi/v1/managed-subaccount/fetch-future-asset`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountFetchFutureAssetResponse`
- **Error**: `SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountFetchFutureAssetResponse` | `sapiV1ManagedSubaccountFetchFutureAssetResponseSchema` | `src/models/sapi-v1-managed-subaccount-fetch-future-asset-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryManagedSubAccountListForInvestor

- **Signature**: `queryManagedSubAccountListForInvestor(request: SubAccountApi.QueryManagedSubAccountListForInvestorRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountInfoResponse, SubAccountApi.QueryManagedSubAccountListForInvestorError>`
- **Wire**: `GET /sapi/v1/managed-subaccount/info`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountInfoResponse`
- **Error**: `SubAccountApi.QueryManagedSubAccountListForInvestorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.QueryManagedSubAccountListForInvestorRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `page` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountInfoResponse` | `sapiV1ManagedSubaccountInfoResponseSchema` | `src/models/sapi-v1-managed-subaccount-info-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryManagedSubAccountMarginAssetDetailsForInvestorMasterAccount

- **Signature**: `queryManagedSubAccountMarginAssetDetailsForInvestorMasterAccount(request: SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountMarginAssetResponse, SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError>`
- **Wire**: `GET /sapi/v1/managed-subaccount/marginAsset`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountMarginAssetResponse`
- **Error**: `SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountMarginAssetResponse` | `sapiV1ManagedSubaccountMarginAssetResponseSchema` | `src/models/sapi-v1-managed-subaccount-margin-asset-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### querySubAccountAssetsForMasterAccount

- **Signature**: `querySubAccountAssetsForMasterAccount(request: SubAccountApi.QuerySubAccountAssetsForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV4SubAccountAssetsResponse, SubAccountApi.QuerySubAccountAssetsForMasterAccountError>`
- **Wire**: `GET /sapi/v4/sub-account/assets`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV4SubAccountAssetsResponse`
- **Error**: `SubAccountApi.QuerySubAccountAssetsForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.QuerySubAccountAssetsForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV4SubAccountAssetsResponse` | `sapiV4SubAccountAssetsResponseSchema` | `src/models/sapi-v4-sub-account-assets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### querySubAccountListForMasterAccount

- **Signature**: `querySubAccountListForMasterAccount(request: SubAccountApi.QuerySubAccountListForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountListResponse, SubAccountApi.QuerySubAccountListForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountListResponse`
- **Error**: `SubAccountApi.QuerySubAccountListForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.QuerySubAccountListForMasterAccountRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `email` | `query` | `string` | no |
| `isFreeze` | `query` | `IsFreeze` | no |
| `page` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsFreeze` | `isFreezeSchema` | `src/models/is-freeze.ts` |
| `SapiV1SubAccountListResponse` | `sapiV1SubAccountListResponseSchema` | `src/models/sapi-v1-sub-account-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### querySubAccountTransactionStatisticsForMasterAccount

- **Signature**: `querySubAccountTransactionStatisticsForMasterAccount(request: SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountTransactionStatisticsResponse, SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/transaction-statistics`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountTransactionStatisticsResponse`
- **Error**: `SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountTransactionStatisticsResponse` | `sapiV1SubAccountTransactionStatisticsResponseSchema` | `src/models/sapi-v1-sub-account-transaction-statistics-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subAccountAssetsForMasterAccount

- **Signature**: `subAccountAssetsForMasterAccount(request: SubAccountApi.SubAccountAssetsForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV3SubAccountAssetsResponse, SubAccountApi.SubAccountAssetsForMasterAccountError>`
- **Wire**: `GET /sapi/v3/sub-account/assets`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV3SubAccountAssetsResponse`
- **Error**: `SubAccountApi.SubAccountAssetsForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SubAccountAssetsForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV3SubAccountAssetsResponse` | `sapiV3SubAccountAssetsResponseSchema` | `src/models/sapi-v3-sub-account-assets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subAccountDepositHistoryForMasterAccount

- **Signature**: `subAccountDepositHistoryForMasterAccount(request: SubAccountApi.SubAccountDepositHistoryForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1CapitalDepositSubHisrecResponse[], SubAccountApi.SubAccountDepositHistoryForMasterAccountError>`
- **Wire**: `GET /sapi/v1/capital/deposit/subHisrec`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CapitalDepositSubHisrecResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SubAccountApi.SubAccountDepositHistoryForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SubAccountDepositHistoryForMasterAccountRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `coin` | `query` | `string` | no |
| `status` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalDepositSubHisrecResponse` | `sapiV1CapitalDepositSubHisrecResponseSchema` | `src/models/sapi-v1-capital-deposit-sub-hisrec-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subAccountFuturesAssetTransferForMasterAccount

- **Signature**: `subAccountFuturesAssetTransferForMasterAccount(request: SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountFuturesInternalTransferResponse1, SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/futures/internalTransfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountFuturesInternalTransferResponse1`
- **Error**: `SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fromEmail` | `query` | `string` | yes |
| `toEmail` | `query` | `string` | yes |
| `futuresType` | `query` | `number` | yes |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountFuturesInternalTransferResponse1` | `sapiV1SubAccountFuturesInternalTransferResponse1Schema` | `src/models/sapi-v1-sub-account-futures-internal-transfer-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subAccountFuturesAssetTransferHistoryForMasterAccount

- **Signature**: `subAccountFuturesAssetTransferHistoryForMasterAccount(request: SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountFuturesInternalTransferResponse, SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/futures/internalTransfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountFuturesInternalTransferResponse`
- **Error**: `SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `futuresType` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountFuturesInternalTransferResponse` | `sapiV1SubAccountFuturesInternalTransferResponseSchema` | `src/models/sapi-v1-sub-account-futures-internal-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subAccountSpotAssetTransferHistoryForMasterAccount

- **Signature**: `subAccountSpotAssetTransferHistoryForMasterAccount(request: SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountSubTransferHistoryResponse[], SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/sub/transfer/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountSubTransferHistoryResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `fromEmail` | `query` | `string` | no |
| `toEmail` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountSubTransferHistoryResponse` | `sapiV1SubAccountSubTransferHistoryResponseSchema` | `src/models/sapi-v1-sub-account-sub-transfer-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subAccountSpotAssetsSummaryForMasterAccount

- **Signature**: `subAccountSpotAssetsSummaryForMasterAccount(request: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountSpotSummaryResponse, SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/spotSummary`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountSpotSummaryResponse`
- **Error**: `SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `email` | `query` | `string` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountSpotSummaryResponse` | `sapiV1SubAccountSpotSummaryResponseSchema` | `src/models/sapi-v1-sub-account-spot-summary-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subAccountSpotAssetsSummaryForMasterAccount2

- **Signature**: `subAccountSpotAssetsSummaryForMasterAccount2(request: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Request, options?: RequestOptions): ApiPromise<SapiV1CapitalDepositSubAddressResponse, SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Error>`
- **Wire**: `GET /sapi/v1/capital/deposit/subAddress`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CapitalDepositSubAddressResponse`
- **Error**: `SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Request` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `coin` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `network` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalDepositSubAddressResponse` | `sapiV1CapitalDepositSubAddressResponseSchema` | `src/models/sapi-v1-capital-deposit-sub-address-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subAccountTransferHistoryForSubAccount

- **Signature**: `subAccountTransferHistoryForSubAccount(request: SubAccountApi.SubAccountTransferHistoryForSubAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountTransferSubUserHistoryResponse[], SubAccountApi.SubAccountTransferHistoryForSubAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/transfer/subUserHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountTransferSubUserHistoryResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SubAccountApi.SubAccountTransferHistoryForSubAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SubAccountTransferHistoryForSubAccountRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `type` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountTransferSubUserHistoryResponse` | `sapiV1SubAccountTransferSubUserHistoryResponseSchema` | `src/models/sapi-v1-sub-account-transfer-sub-user-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subAccountSStatusOnMarginFuturesForMasterAccount

- **Signature**: `subAccountSStatusOnMarginFuturesForMasterAccount(request: SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountStatusResponse[], SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/status`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountStatusResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `email` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountStatusResponse` | `sapiV1SubAccountStatusResponseSchema` | `src/models/sapi-v1-sub-account-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### summaryOfSubAccountSFuturesAccountForMasterAccount

- **Signature**: `summaryOfSubAccountSFuturesAccountForMasterAccount(request: SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountFuturesAccountSummaryResponse, SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/futures/accountSummary`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountFuturesAccountSummaryResponse`
- **Error**: `SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountFuturesAccountSummaryResponse` | `sapiV1SubAccountFuturesAccountSummaryResponseSchema` | `src/models/sapi-v1-sub-account-futures-account-summary-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### summaryOfSubAccountSFuturesAccountV2ForMasterAccount

- **Signature**: `summaryOfSubAccountSFuturesAccountV2ForMasterAccount(request: SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV2SubAccountFuturesAccountSummaryResponse, SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError>`
- **Wire**: `GET /sapi/v2/sub-account/futures/accountSummary`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2SubAccountFuturesAccountSummaryResponse`
- **Error**: `SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `futuresType` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `page` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2SubAccountFuturesAccountSummaryResponse` | `sapiV2SubAccountFuturesAccountSummaryResponseSchema` | `src/models/unions/sapi-v2-sub-account-futures-account-summary-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### summaryOfSubAccountSMarginAccountForMasterAccount

- **Signature**: `summaryOfSubAccountSMarginAccountForMasterAccount(request: SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountMarginAccountSummaryResponse, SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/margin/accountSummary`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountMarginAccountSummaryResponse`
- **Error**: `SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountMarginAccountSummaryResponse` | `sapiV1SubAccountMarginAccountSummaryResponseSchema` | `src/models/sapi-v1-sub-account-margin-account-summary-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferForSubAccountForMasterAccount

- **Signature**: `transferForSubAccountForMasterAccount(request: SubAccountApi.TransferForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountFuturesTransferResponse, SubAccountApi.TransferForSubAccountForMasterAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/futures/transfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountFuturesTransferResponse`
- **Error**: `SubAccountApi.TransferForSubAccountForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.TransferForSubAccountForMasterAccountRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `type` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountFuturesTransferResponse` | `sapiV1SubAccountFuturesTransferResponseSchema` | `src/models/sapi-v1-sub-account-futures-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferToMasterForSubAccount

- **Signature**: `transferToMasterForSubAccount(request: SubAccountApi.TransferToMasterForSubAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountTransferSubToMasterResponse, SubAccountApi.TransferToMasterForSubAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/transfer/subToMaster`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountTransferSubToMasterResponse`
- **Error**: `SubAccountApi.TransferToMasterForSubAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.TransferToMasterForSubAccountRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountTransferSubToMasterResponse` | `sapiV1SubAccountTransferSubToMasterResponseSchema` | `src/models/sapi-v1-sub-account-transfer-sub-to-master-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferToSubAccountOfSameMasterForSubAccount

- **Signature**: `transferToSubAccountOfSameMasterForSubAccount(request: SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountTransferSubToSubResponse, SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/transfer/subToSub`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountTransferSubToSubResponse`
- **Error**: `SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `toEmail` | `query` | `string` | yes |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountTransferSubToSubResponse` | `sapiV1SubAccountTransferSubToSubResponseSchema` | `src/models/sapi-v1-sub-account-transfer-sub-to-sub-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### universalTransferForMasterAccount

- **Signature**: `universalTransferForMasterAccount(request: SubAccountApi.UniversalTransferForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountUniversalTransferResponse1, SubAccountApi.UniversalTransferForMasterAccountError>`
- **Wire**: `POST /sapi/v1/sub-account/universalTransfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountUniversalTransferResponse1`
- **Error**: `SubAccountApi.UniversalTransferForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.UniversalTransferForMasterAccountRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fromAccountType` | `query` | `FromAccountType` | yes |
| `toAccountType` | `query` | `ToAccountType` | yes |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `fromEmail` | `query` | `string` | no |
| `toEmail` | `query` | `string` | no |
| `clientTranId` | `query` | `string` | no |
| `symbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FromAccountType` | `fromAccountTypeSchema` | `src/models/from-account-type.ts` |
| `ToAccountType` | `toAccountTypeSchema` | `src/models/to-account-type.ts` |
| `SapiV1SubAccountUniversalTransferResponse1` | `sapiV1SubAccountUniversalTransferResponse1Schema` | `src/models/sapi-v1-sub-account-universal-transfer-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### universalTransferHistoryForMasterAccount

- **Signature**: `universalTransferHistoryForMasterAccount(request: SubAccountApi.UniversalTransferHistoryForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1SubAccountUniversalTransferResponse[], SubAccountApi.UniversalTransferHistoryForMasterAccountError>`
- **Wire**: `GET /sapi/v1/sub-account/universalTransfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SubAccountUniversalTransferResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SubAccountApi.UniversalTransferHistoryForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.UniversalTransferHistoryForMasterAccountRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `fromEmail` | `query` | `string` | no |
| `toEmail` | `query` | `string` | no |
| `clientTranId` | `query` | `string` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SubAccountUniversalTransferResponse` | `sapiV1SubAccountUniversalTransferResponseSchema` | `src/models/sapi-v1-sub-account-universal-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateIpRestrictionForSubAccountApiKeyForMasterAccount

- **Signature**: `updateIpRestrictionForSubAccountApiKeyForMasterAccount(request: SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV2SubAccountSubAccountApiIpRestrictionResponse, SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError>`
- **Wire**: `POST /sapi/v2/sub-account/subAccountApi/ipRestriction`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2SubAccountSubAccountApiIpRestrictionResponse`
- **Error**: `SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `subAccountApiKey` | `query` | `string` | yes |
| `status` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `thirdPartyName` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2SubAccountSubAccountApiIpRestrictionResponse` | `sapiV2SubAccountSubAccountApiIpRestrictionResponseSchema` | `src/models/sapi-v2-sub-account-sub-account-api-ip-restriction-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### withdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccount

- **Signature**: `withdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccount(request: SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise<SapiV1ManagedSubaccountWithdrawResponse, SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError>`
- **Wire**: `POST /sapi/v1/managed-subaccount/withdraw`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ManagedSubaccountWithdrawResponse`
- **Error**: `SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fromEmail` | `query` | `string` | yes |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `transferDate` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ManagedSubaccountWithdrawResponse` | `sapiV1ManagedSubaccountWithdrawResponseSchema` | `src/models/sapi-v1-managed-subaccount-withdraw-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

