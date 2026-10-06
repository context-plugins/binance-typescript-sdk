<!-- Generated file — do not edit; regenerated with the SDK. -->

# Savings — operations

Accessor: `client.savings` · Source: `src/resources/savings.ts` · 4 operations · Request and error types: namespace `Savings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### changeFixedActivityPositionToDailyPositionUserData

- **Signature**: `changeFixedActivityPositionToDailyPositionUserData(request: Savings.ChangeFixedActivityPositionToDailyPositionUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingPositionChangedResponse, Savings.ChangeFixedActivityPositionToDailyPositionUserDataError>`
- **Wire**: `POST /sapi/v1/lending/positionChanged`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1LendingPositionChangedResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Savings.ChangeFixedActivityPositionToDailyPositionUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Savings.ChangeFixedActivityPositionToDailyPositionUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `query` | `string` | yes |
| `lot` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `positionId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingPositionChangedResponse` | `sapiV1LendingPositionChangedResponseSchema` | `src/models/sapi-v1-lending-position-changed-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFixedActivityProjectListUserData

- **Signature**: `getFixedActivityProjectListUserData(request: Savings.GetFixedActivityProjectListUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingProjectListResponse[], Savings.GetFixedActivityProjectListUserDataError>`
- **Wire**: `GET /sapi/v1/lending/project/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingProjectListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Savings.GetFixedActivityProjectListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Savings.GetFixedActivityProjectListUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `Type8` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `status` | `query` | `Status` | no |
| `isSortAsc` | `query` | `boolean` | no |
| `sortBy` | `query` | `SortBy` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type8` | `type8Schema` | `src/models/type8.ts` |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SapiV1LendingProjectListResponse` | `sapiV1LendingProjectListResponseSchema` | `src/models/sapi-v1-lending-project-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFixedActivityProjectPositionUserData

- **Signature**: `getFixedActivityProjectPositionUserData(request: Savings.GetFixedActivityProjectPositionUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingProjectPositionListResponse[], Savings.GetFixedActivityProjectPositionUserDataError>`
- **Wire**: `GET /sapi/v1/lending/project/position/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1LendingProjectPositionListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Savings.GetFixedActivityProjectPositionUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Savings.GetFixedActivityProjectPositionUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `projectId` | `query` | `string` | no |
| `status` | `query` | `Status` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `SapiV1LendingProjectPositionListResponse` | `sapiV1LendingProjectPositionListResponseSchema` | `src/models/sapi-v1-lending-project-position-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### purchaseFixedActivityProjectUserData

- **Signature**: `purchaseFixedActivityProjectUserData(request: Savings.PurchaseFixedActivityProjectUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1LendingCustomizedFixedPurchaseResponse, Savings.PurchaseFixedActivityProjectUserDataError>`
- **Wire**: `POST /sapi/v1/lending/customizedFixed/purchase`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1LendingCustomizedFixedPurchaseResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Savings.PurchaseFixedActivityProjectUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Savings.PurchaseFixedActivityProjectUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `query` | `string` | yes |
| `lot` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1LendingCustomizedFixedPurchaseResponse` | `sapiV1LendingCustomizedFixedPurchaseResponseSchema` | `src/models/sapi-v1-lending-customized-fixed-purchase-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

