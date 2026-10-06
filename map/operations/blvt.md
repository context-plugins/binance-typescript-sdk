<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blvt — operations

Accessor: `client.blvt` · Source: `src/resources/blvt.ts` · 6 operations · Request and error types: namespace `Blvt`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### blvtInfoMarketData

- **Signature**: `blvtInfoMarketData(request: Blvt.BlvtInfoMarketDataRequest, options?: RequestOptions): ApiPromise<SapiV1BlvtTokenInfoResponse[], Blvt.BlvtInfoMarketDataError>`
- **Wire**: `GET /sapi/v1/blvt/tokenInfo`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1BlvtTokenInfoResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Blvt.BlvtInfoMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blvt.BlvtInfoMarketDataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tokenName` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1BlvtTokenInfoResponse` | `sapiV1BlvtTokenInfoResponseSchema` | `src/models/sapi-v1-blvt-token-info-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### blvtUserLimitInfoUserData

- **Signature**: `blvtUserLimitInfoUserData(request: Blvt.BlvtUserLimitInfoUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1BlvtUserLimitResponse[], Blvt.BlvtUserLimitInfoUserDataError>`
- **Wire**: `GET /sapi/v1/blvt/userLimit`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1BlvtUserLimitResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Blvt.BlvtUserLimitInfoUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blvt.BlvtUserLimitInfoUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `tokenName` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1BlvtUserLimitResponse` | `sapiV1BlvtUserLimitResponseSchema` | `src/models/sapi-v1-blvt-user-limit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### querySubscriptionRecordUserData

- **Signature**: `querySubscriptionRecordUserData(request: Blvt.QuerySubscriptionRecordUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1BlvtSubscribeRecordResponse, Blvt.QuerySubscriptionRecordUserDataError>`
- **Wire**: `GET /sapi/v1/blvt/subscribe/record`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1BlvtSubscribeRecordResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Blvt.QuerySubscriptionRecordUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blvt.QuerySubscriptionRecordUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `tokenName` | `query` | `string` | no |
| `id` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1BlvtSubscribeRecordResponse` | `sapiV1BlvtSubscribeRecordResponseSchema` | `src/models/sapi-v1-blvt-subscribe-record-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### redeemBlvtUserData

- **Signature**: `redeemBlvtUserData(request: Blvt.RedeemBlvtUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1BlvtRedeemResponse, Blvt.RedeemBlvtUserDataError>`
- **Wire**: `POST /sapi/v1/blvt/redeem`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1BlvtRedeemResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Blvt.RedeemBlvtUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blvt.RedeemBlvtUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tokenName` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1BlvtRedeemResponse` | `sapiV1BlvtRedeemResponseSchema` | `src/models/sapi-v1-blvt-redeem-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### redemptionRecordUserData

- **Signature**: `redemptionRecordUserData(request: Blvt.RedemptionRecordUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1BlvtRedeemRecordResponse[], Blvt.RedemptionRecordUserDataError>`
- **Wire**: `GET /sapi/v1/blvt/redeem/record`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1BlvtRedeemRecordResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Blvt.RedemptionRecordUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blvt.RedemptionRecordUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `tokenName` | `query` | `string` | no |
| `id` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1BlvtRedeemRecordResponse` | `sapiV1BlvtRedeemRecordResponseSchema` | `src/models/sapi-v1-blvt-redeem-record-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subscribeBlvtUserData

- **Signature**: `subscribeBlvtUserData(request: Blvt.SubscribeBlvtUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1BlvtSubscribeResponse, Blvt.SubscribeBlvtUserDataError>`
- **Wire**: `POST /sapi/v1/blvt/subscribe`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1BlvtSubscribeResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Blvt.SubscribeBlvtUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blvt.SubscribeBlvtUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tokenName` | `query` | `string` | yes |
| `cost` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1BlvtSubscribeResponse` | `sapiV1BlvtSubscribeResponseSchema` | `src/models/sapi-v1-blvt-subscribe-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

