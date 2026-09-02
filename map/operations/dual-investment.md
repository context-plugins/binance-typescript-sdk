<!-- Generated file — do not edit; regenerated with the SDK. -->

# DualInvestment — operations

Accessor: `client.dualInvestment` · Source: `src/resources/dual-investment.ts` · 5 operations · Request and error types: namespace `DualInvestment`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### changeAutoCompoundStatusUserData

- **Signature**: `changeAutoCompoundStatusUserData(request: DualInvestment.ChangeAutoCompoundStatusUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1DciProductAutoCompoundEditStatusResponse, DualInvestment.ChangeAutoCompoundStatusUserDataError>`
- **Wire**: `POST /sapi/v1/dci/product/auto_compound/edit-status`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1DciProductAutoCompoundEditStatusResponse`
- **Error**: `DualInvestment.ChangeAutoCompoundStatusUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DualInvestment.ChangeAutoCompoundStatusUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `positionId` | `query` | `number` | yes |
| `autoCompoundPlan` | `query` | `AutoCompoundPlan` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutoCompoundPlan` | `autoCompoundPlanSchema` | `src/models/auto-compound-plan.ts` |
| `SapiV1DciProductAutoCompoundEditStatusResponse` | `sapiV1DciProductAutoCompoundEditStatusResponseSchema` | `src/models/sapi-v1-dci-product-auto-compound-edit-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### checkDualInvestmentAccountsUserData

- **Signature**: `checkDualInvestmentAccountsUserData(request: DualInvestment.CheckDualInvestmentAccountsUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1DciProductAccountsResponse, DualInvestment.CheckDualInvestmentAccountsUserDataError>`
- **Wire**: `GET /sapi/v1/dci/product/accounts`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1DciProductAccountsResponse`
- **Error**: `DualInvestment.CheckDualInvestmentAccountsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DualInvestment.CheckDualInvestmentAccountsUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1DciProductAccountsResponse` | `sapiV1DciProductAccountsResponseSchema` | `src/models/sapi-v1-dci-product-accounts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getDualInvestmentPositionsUserData

- **Signature**: `getDualInvestmentPositionsUserData(request: DualInvestment.GetDualInvestmentPositionsUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1DciProductPositionsResponse, DualInvestment.GetDualInvestmentPositionsUserDataError>`
- **Wire**: `GET /sapi/v1/dci/product/positions`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1DciProductPositionsResponse`
- **Error**: `DualInvestment.GetDualInvestmentPositionsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DualInvestment.GetDualInvestmentPositionsUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `status` | `query` | `Status2` | no |
| `pageSize` | `query` | `string` | no |
| `pageIndex` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status2` | `status2Schema` | `src/models/status2.ts` |
| `SapiV1DciProductPositionsResponse` | `sapiV1DciProductPositionsResponseSchema` | `src/models/sapi-v1-dci-product-positions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getDualInvestmentProductListUserData

- **Signature**: `getDualInvestmentProductListUserData(request: DualInvestment.GetDualInvestmentProductListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1DciProductListResponse, DualInvestment.GetDualInvestmentProductListUserDataError>`
- **Wire**: `GET /sapi/v1/dci/product/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1DciProductListResponse`
- **Error**: `DualInvestment.GetDualInvestmentProductListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DualInvestment.GetDualInvestmentProductListUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `optionType` | `query` | `OptionType` | yes |
| `exercisedCoin` | `query` | `string` | yes |
| `investCoin` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `pageSize` | `query` | `string` | no |
| `pageIndex` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OptionType` | `optionTypeSchema` | `src/models/option-type.ts` |
| `SapiV1DciProductListResponse` | `sapiV1DciProductListResponseSchema` | `src/models/sapi-v1-dci-product-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subscribeDualInvestmentProductsUserData

- **Signature**: `subscribeDualInvestmentProductsUserData(request: DualInvestment.SubscribeDualInvestmentProductsUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1DciProductSubscribeResponse, DualInvestment.SubscribeDualInvestmentProductsUserDataError>`
- **Wire**: `POST /sapi/v1/dci/product/subscribe`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1DciProductSubscribeResponse`
- **Error**: `DualInvestment.SubscribeDualInvestmentProductsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DualInvestment.SubscribeDualInvestmentProductsUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `query` | `string` | yes |
| `orderId` | `query` | `string` | yes |
| `depositAmount` | `query` | `number` | yes |
| `autoCompoundPlan` | `query` | `AutoCompoundPlan` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutoCompoundPlan` | `autoCompoundPlanSchema` | `src/models/auto-compound-plan.ts` |
| `SapiV1DciProductSubscribeResponse` | `sapiV1DciProductSubscribeResponseSchema` | `src/models/sapi-v1-dci-product-subscribe-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

