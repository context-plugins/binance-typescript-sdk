<!-- Generated file — do not edit; regenerated with the SDK. -->

# GiftCard — operations

Accessor: `client.giftCard` · Source: `src/resources/gift-card.ts` · 6 operations · Request and error types: namespace `GiftCard`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### buyABinanceCodeTrade

- **Signature**: `buyABinanceCodeTrade(request: GiftCard.BuyABinanceCodeTradeRequest, options?: RequestOptions): ApiPromise<SapiV1GiftcardBuyCodeResponse, GiftCard.BuyABinanceCodeTradeError>`
- **Wire**: `POST /sapi/v1/giftcard/buyCode`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1GiftcardBuyCodeResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `GiftCard.BuyABinanceCodeTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GiftCard.BuyABinanceCodeTradeRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseToken` | `query` | `string` | yes |
| `faceToken` | `query` | `string` | yes |
| `baseTokenAmount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1GiftcardBuyCodeResponse` | `sapiV1GiftcardBuyCodeResponseSchema` | `src/models/sapi-v1-giftcard-buy-code-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createABinanceCodeUserData

- **Signature**: `createABinanceCodeUserData(request: GiftCard.CreateABinanceCodeUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1GiftcardCreateCodeResponse, GiftCard.CreateABinanceCodeUserDataError>`
- **Wire**: `POST /sapi/v1/giftcard/createCode`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1GiftcardCreateCodeResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `GiftCard.CreateABinanceCodeUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GiftCard.CreateABinanceCodeUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `token` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1GiftcardCreateCodeResponse` | `sapiV1GiftcardCreateCodeResponseSchema` | `src/models/sapi-v1-giftcard-create-code-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchRsaPublicKeyUserData

- **Signature**: `fetchRsaPublicKeyUserData(request: GiftCard.FetchRsaPublicKeyUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1GiftcardCryptographyRsaPublicKeyResponse, GiftCard.FetchRsaPublicKeyUserDataError>`
- **Wire**: `GET /sapi/v1/giftcard/cryptography/rsa-public-key`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1GiftcardCryptographyRsaPublicKeyResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `GiftCard.FetchRsaPublicKeyUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GiftCard.FetchRsaPublicKeyUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1GiftcardCryptographyRsaPublicKeyResponse` | `sapiV1GiftcardCryptographyRsaPublicKeyResponseSchema` | `src/models/sapi-v1-giftcard-cryptography-rsa-public-key-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchTokenLimitUserData

- **Signature**: `fetchTokenLimitUserData(request: GiftCard.FetchTokenLimitUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1GiftcardBuyCodeTokenLimitResponse, GiftCard.FetchTokenLimitUserDataError>`
- **Wire**: `GET /sapi/v1/giftcard/buyCode/token-limit`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1GiftcardBuyCodeTokenLimitResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `GiftCard.FetchTokenLimitUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GiftCard.FetchTokenLimitUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseToken` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1GiftcardBuyCodeTokenLimitResponse` | `sapiV1GiftcardBuyCodeTokenLimitResponseSchema` | `src/models/sapi-v1-giftcard-buy-code-token-limit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### redeemABinanceCodeUserData

- **Signature**: `redeemABinanceCodeUserData(request: GiftCard.RedeemABinanceCodeUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1GiftcardRedeemCodeResponse, GiftCard.RedeemABinanceCodeUserDataError>`
- **Wire**: `POST /sapi/v1/giftcard/redeemCode`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1GiftcardRedeemCodeResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `GiftCard.RedeemABinanceCodeUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GiftCard.RedeemABinanceCodeUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `code` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `externalUid` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1GiftcardRedeemCodeResponse` | `sapiV1GiftcardRedeemCodeResponseSchema` | `src/models/sapi-v1-giftcard-redeem-code-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### verifyABinanceCodeUserData

- **Signature**: `verifyABinanceCodeUserData(request: GiftCard.VerifyABinanceCodeUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1GiftcardVerifyResponse, GiftCard.VerifyABinanceCodeUserDataError>`
- **Wire**: `GET /sapi/v1/giftcard/verify`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1GiftcardVerifyResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `GiftCard.VerifyABinanceCodeUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GiftCard.VerifyABinanceCodeUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `referenceNo` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1GiftcardVerifyResponse` | `sapiV1GiftcardVerifyResponseSchema` | `src/models/sapi-v1-giftcard-verify-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

