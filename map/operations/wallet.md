<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wallet — operations

Accessor: `client.wallet` · Source: `src/resources/wallet.ts` · 34 operations · Request and error types: namespace `Wallet`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### accountApiTradingStatusUserData

- **Signature**: `accountApiTradingStatusUserData(request: Wallet.AccountApiTradingStatusUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AccountApiTradingStatusResponse, Wallet.AccountApiTradingStatusUserDataError>`
- **Wire**: `GET /sapi/v1/account/apiTradingStatus`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AccountApiTradingStatusResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.AccountApiTradingStatusUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.AccountApiTradingStatusUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AccountApiTradingStatusResponse` | `sapiV1AccountApiTradingStatusResponseSchema` | `src/models/sapi-v1-account-api-trading-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### accountStatusUserData

- **Signature**: `accountStatusUserData(request: Wallet.AccountStatusUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AccountStatusResponse, Wallet.AccountStatusUserDataError>`
- **Wire**: `GET /sapi/v1/account/status`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AccountStatusResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.AccountStatusUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.AccountStatusUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AccountStatusResponse` | `sapiV1AccountStatusResponseSchema` | `src/models/sapi-v1-account-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### accountInfoUserData

- **Signature**: `accountInfoUserData(request: Wallet.AccountInfoUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AccountInfoResponse, Wallet.AccountInfoUserDataError>`
- **Wire**: `GET /sapi/v1/account/info`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AccountInfoResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.AccountInfoUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.AccountInfoUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AccountInfoResponse` | `sapiV1AccountInfoResponseSchema` | `src/models/sapi-v1-account-info-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### allCoinsInformationUserData

- **Signature**: `allCoinsInformationUserData(request: Wallet.AllCoinsInformationUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1CapitalConfigGetallResponse[], Wallet.AllCoinsInformationUserDataError>`
- **Wire**: `GET /sapi/v1/capital/config/getall`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CapitalConfigGetallResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.AllCoinsInformationUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.AllCoinsInformationUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalConfigGetallResponse` | `sapiV1CapitalConfigGetallResponseSchema` | `src/models/sapi-v1-capital-config-getall-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetDetailUserData

- **Signature**: `assetDetailUserData(request: Wallet.AssetDetailUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetAssetDetailResponse, Wallet.AssetDetailUserDataError>`
- **Wire**: `GET /sapi/v1/asset/assetDetail`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AssetAssetDetailResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.AssetDetailUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.AssetDetailUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AssetAssetDetailResponse` | `sapiV1AssetAssetDetailResponseSchema` | `src/models/sapi-v1-asset-asset-detail-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetDividendRecordUserData

- **Signature**: `assetDividendRecordUserData(request: Wallet.AssetDividendRecordUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetAssetDividendResponse, Wallet.AssetDividendRecordUserDataError>`
- **Wire**: `GET /sapi/v1/asset/assetDividend`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AssetAssetDividendResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.AssetDividendRecordUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.AssetDividendRecordUserDataRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes | — |
| `signature` | `query` | `string` | yes | — |
| `asset` | `query` | `string` | no | — |
| `startTime` | `query` | `number` | no | — |
| `endTime` | `query` | `number` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `recvWindow` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AssetAssetDividendResponse` | `sapiV1AssetAssetDividendResponseSchema` | `src/models/sapi-v1-asset-asset-dividend-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### convertTransferUserData

- **Signature**: `convertTransferUserData(request: Wallet.ConvertTransferUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetConvertTransferResponse, Wallet.ConvertTransferUserDataError>`
- **Wire**: `POST /sapi/v1/asset/convert-transfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1AssetConvertTransferResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.ConvertTransferUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.ConvertTransferUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `clientTranId` | `query` | `string` | yes |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `targetAsset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AssetConvertTransferResponse` | `sapiV1AssetConvertTransferResponseSchema` | `src/models/sapi-v1-asset-convert-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### dailyAccountSnapshotUserData

- **Signature**: `dailyAccountSnapshotUserData(request: Wallet.DailyAccountSnapshotUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AccountSnapshotResponse, Wallet.DailyAccountSnapshotUserDataError>`
- **Wire**: `GET /sapi/v1/accountSnapshot`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AccountSnapshotResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.DailyAccountSnapshotUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.DailyAccountSnapshotUserDataRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `type` | `query` | `Type6` | yes | — |
| `timestamp` | `query` | `number` | yes | — |
| `signature` | `query` | `string` | yes | — |
| `startTime` | `query` | `number` | no | — |
| `endTime` | `query` | `number` | no | — |
| `limit` | `query` | `number` | no | `7` |
| `recvWindow` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type6` | `type6Schema` | `src/models/type6.ts` |
| `SapiV1AccountSnapshotResponse` | `sapiV1AccountSnapshotResponseSchema` | `src/models/unions/sapi-v1-account-snapshot-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### depositAddressSupportingNetworkUserData

- **Signature**: `depositAddressSupportingNetworkUserData(request: Wallet.DepositAddressSupportingNetworkUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1CapitalDepositAddressResponse, Wallet.DepositAddressSupportingNetworkUserDataError>`
- **Wire**: `GET /sapi/v1/capital/deposit/address`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CapitalDepositAddressResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.DepositAddressSupportingNetworkUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.DepositAddressSupportingNetworkUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `coin` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `network` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalDepositAddressResponse` | `sapiV1CapitalDepositAddressResponseSchema` | `src/models/sapi-v1-capital-deposit-address-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### depositHistorySupportingNetworkUserData

- **Signature**: `depositHistorySupportingNetworkUserData(request: Wallet.DepositHistorySupportingNetworkUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1CapitalDepositHisrecResponse[], Wallet.DepositHistorySupportingNetworkUserDataError>`
- **Wire**: `GET /sapi/v1/capital/deposit/hisrec`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CapitalDepositHisrecResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.DepositHistorySupportingNetworkUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.DepositHistorySupportingNetworkUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `coin` | `query` | `string` | no |
| `status` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalDepositHisrecResponse` | `sapiV1CapitalDepositHisrecResponseSchema` | `src/models/sapi-v1-capital-deposit-hisrec-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### disableFastWithdrawSwitchUserData

- **Signature**: `disableFastWithdrawSwitchUserData(request: Wallet.DisableFastWithdrawSwitchUserDataRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Wallet.DisableFastWithdrawSwitchUserDataError>`
- **Wire**: `POST /sapi/v1/account/disableFastWithdrawSwitch`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.DisableFastWithdrawSwitchUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.DisableFastWithdrawSwitchUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### dustTransferUserData

- **Signature**: `dustTransferUserData(request: Wallet.DustTransferUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetDustResponse, Wallet.DustTransferUserDataError>`
- **Wire**: `POST /sapi/v1/asset/dust`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1AssetDustResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.DustTransferUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.DustTransferUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asset` | `query` | `string[]` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `accountType` | `query` | `AccountType` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountType` | `accountTypeSchema` | `src/models/account-type.ts` |
| `SapiV1AssetDustResponse` | `sapiV1AssetDustResponseSchema` | `src/models/sapi-v1-asset-dust-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### dustLogUserData

- **Signature**: `dustLogUserData(request: Wallet.DustLogUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetDribbletResponse, Wallet.DustLogUserDataError>`
- **Wire**: `GET /sapi/v1/asset/dribblet`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AssetDribbletResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.DustLogUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.DustLogUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `accountType` | `query` | `AccountType` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountType` | `accountTypeSchema` | `src/models/account-type.ts` |
| `SapiV1AssetDribbletResponse` | `sapiV1AssetDribbletResponseSchema` | `src/models/sapi-v1-asset-dribblet-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### enableFastWithdrawSwitchUserData

- **Signature**: `enableFastWithdrawSwitchUserData(request: Wallet.EnableFastWithdrawSwitchUserDataRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Wallet.EnableFastWithdrawSwitchUserDataError>`
- **Wire**: `POST /sapi/v1/account/enableFastWithdrawSwitch`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.EnableFastWithdrawSwitchUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.EnableFastWithdrawSwitchUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchDepositAddressListWithNetworkUserData

- **Signature**: `fetchDepositAddressListWithNetworkUserData(request: Wallet.FetchDepositAddressListWithNetworkUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1CapitalDepositAddressListResponse[], Wallet.FetchDepositAddressListWithNetworkUserDataError>`
- **Wire**: `GET /sapi/v1/capital/deposit/address/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CapitalDepositAddressListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.FetchDepositAddressListWithNetworkUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.FetchDepositAddressListWithNetworkUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `coin` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `network` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalDepositAddressListResponse` | `sapiV1CapitalDepositAddressListResponseSchema` | `src/models/sapi-v1-capital-deposit-address-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchWithdrawAddressListUserData

- **Signature**: `fetchWithdrawAddressListUserData(options?: RequestOptions): ApiPromise<SapiV1CapitalWithdrawAddressListResponse[], Wallet.FetchWithdrawAddressListUserDataError>`
- **Wire**: `GET /sapi/v1/capital/withdraw/address/list`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CapitalWithdrawAddressListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.FetchWithdrawAddressListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalWithdrawAddressListResponse` | `sapiV1CapitalWithdrawAddressListResponseSchema` | `src/models/sapi-v1-capital-withdraw-address-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fundingWalletUserData

- **Signature**: `fundingWalletUserData(request: Wallet.FundingWalletUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetGetFundingAssetResponse[], Wallet.FundingWalletUserDataError>`
- **Wire**: `POST /sapi/v1/asset/get-funding-asset`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1AssetGetFundingAssetResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.FundingWalletUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.FundingWalletUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `needBtcValuation` | `query` | `NeedBtcValuation` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NeedBtcValuation` | `needBtcValuationSchema` | `src/models/need-btc-valuation.ts` |
| `SapiV1AssetGetFundingAssetResponse` | `sapiV1AssetGetFundingAssetResponseSchema` | `src/models/sapi-v1-asset-get-funding-asset-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiKeyPermissionUserData

- **Signature**: `getApiKeyPermissionUserData(request: Wallet.GetApiKeyPermissionUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AccountApiRestrictionsResponse, Wallet.GetApiKeyPermissionUserDataError>`
- **Wire**: `GET /sapi/v1/account/apiRestrictions`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AccountApiRestrictionsResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.GetApiKeyPermissionUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.GetApiKeyPermissionUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AccountApiRestrictionsResponse` | `sapiV1AccountApiRestrictionsResponseSchema` | `src/models/sapi-v1-account-api-restrictions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAssetsThatCanBeConvertedIntoBnbUserData

- **Signature**: `getAssetsThatCanBeConvertedIntoBnbUserData(request: Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetDustBtcResponse, Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError>`
- **Wire**: `POST /sapi/v1/asset/dust-btc`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1AssetDustBtcResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `accountType` | `query` | `AccountType` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountType` | `accountTypeSchema` | `src/models/account-type.ts` |
| `SapiV1AssetDustBtcResponse` | `sapiV1AssetDustBtcResponseSchema` | `src/models/sapi-v1-asset-dust-btc-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCloudMiningPaymentAndRefundHistoryUserData

- **Signature**: `getCloudMiningPaymentAndRefundHistoryUserData(request: Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse, Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `startTime` | `query` | `number` | yes |
| `endTime` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `tranId` | `query` | `number` | no |
| `clientTranId` | `query` | `string` | no |
| `asset` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse` | `sapiV1AssetLedgerTransferCloudMiningQueryByPageResponseSchema` | `src/models/sapi-v1-asset-ledger-transfer-cloud-mining-query-by-page-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSymbolsDelistScheduleForSpotMarketData

- **Signature**: `getSymbolsDelistScheduleForSpotMarketData(request: Wallet.GetSymbolsDelistScheduleForSpotMarketDataRequest, options?: RequestOptions): ApiPromise<SapiV1SpotDelistScheduleResponse[], Wallet.GetSymbolsDelistScheduleForSpotMarketDataError>`
- **Wire**: `GET /sapi/v1/spot/delist-schedule`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SpotDelistScheduleResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.GetSymbolsDelistScheduleForSpotMarketDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.GetSymbolsDelistScheduleForSpotMarketDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SpotDelistScheduleResponse` | `sapiV1SpotDelistScheduleResponseSchema` | `src/models/sapi-v1-spot-delist-schedule-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### oneClickArrivalDepositApplyUserData

- **Signature**: `oneClickArrivalDepositApplyUserData(request: Wallet.OneClickArrivalDepositApplyUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1CapitalDepositCreditApplyResponse, Wallet.OneClickArrivalDepositApplyUserDataError>`
- **Wire**: `POST /sapi/v1/capital/deposit/credit-apply`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1CapitalDepositCreditApplyResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.OneClickArrivalDepositApplyUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.OneClickArrivalDepositApplyUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `depositId` | `query` | `number` | no |
| `txId` | `query` | `string` | no |
| `subAccountId` | `query` | `number` | no |
| `subUserId` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalDepositCreditApplyResponse` | `sapiV1CapitalDepositCreditApplyResponseSchema` | `src/models/sapi-v1-capital-deposit-credit-apply-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryConvertTransferUserData

- **Signature**: `queryConvertTransferUserData(request: Wallet.QueryConvertTransferUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetConvertTransferQueryByPageResponse, Wallet.QueryConvertTransferUserDataError>`
- **Wire**: `GET /sapi/v1/asset/convert-transfer/queryByPage`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AssetConvertTransferQueryByPageResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.QueryConvertTransferUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.QueryConvertTransferUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `startTime` | `query` | `number` | yes |
| `endTime` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `tranId` | `query` | `number` | no |
| `asset` | `query` | `string` | no |
| `accountType` | `query` | `AccountType3` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountType3` | `accountType3Schema` | `src/models/account-type3.ts` |
| `SapiV1AssetConvertTransferQueryByPageResponse` | `sapiV1AssetConvertTransferQueryByPageResponseSchema` | `src/models/sapi-v1-asset-convert-transfer-query-by-page-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryUserDelegationHistoryForMasterAccountUserData

- **Signature**: `queryUserDelegationHistoryForMasterAccountUserData(request: Wallet.QueryUserDelegationHistoryForMasterAccountUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetCustodyTransferHistoryResponse, Wallet.QueryUserDelegationHistoryForMasterAccountUserDataError>`
- **Wire**: `GET /sapi/v1/asset/custody/transfer-history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AssetCustodyTransferHistoryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.QueryUserDelegationHistoryForMasterAccountUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.QueryUserDelegationHistoryForMasterAccountUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `startTime` | `query` | `number` | yes |
| `endTime` | `query` | `number` | yes |
| `asset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `type` | `query` | `string` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AssetCustodyTransferHistoryResponse` | `sapiV1AssetCustodyTransferHistoryResponseSchema` | `src/models/sapi-v1-asset-custody-transfer-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryUserUniversalTransferHistoryUserData

- **Signature**: `queryUserUniversalTransferHistoryUserData(request: Wallet.QueryUserUniversalTransferHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetTransferResponse, Wallet.QueryUserUniversalTransferHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/asset/transfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AssetTransferResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.QueryUserUniversalTransferHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.QueryUserUniversalTransferHistoryUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `Type7` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `current` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `fromSymbol` | `query` | `string` | no |
| `toSymbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type7` | `type7Schema` | `src/models/type7.ts` |
| `SapiV1AssetTransferResponse` | `sapiV1AssetTransferResponseSchema` | `src/models/sapi-v1-asset-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryUserWalletBalanceUserData

- **Signature**: `queryUserWalletBalanceUserData(request: Wallet.QueryUserWalletBalanceUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetWalletBalanceResponse[], Wallet.QueryUserWalletBalanceUserDataError>`
- **Wire**: `GET /sapi/v1/asset/wallet/balance`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AssetWalletBalanceResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.QueryUserWalletBalanceUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.QueryUserWalletBalanceUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AssetWalletBalanceResponse` | `sapiV1AssetWalletBalanceResponseSchema` | `src/models/sapi-v1-asset-wallet-balance-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryAutoConvertingStableCoinsUserData

- **Signature**: `queryAutoConvertingStableCoinsUserData(options?: RequestOptions): ApiPromise<SapiV1CapitalContractConvertibleCoinsResponse, Wallet.QueryAutoConvertingStableCoinsUserDataError>`
- **Wire**: `GET /sapi/v1/capital/contract/convertible-coins`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CapitalContractConvertibleCoinsResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.QueryAutoConvertingStableCoinsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalContractConvertibleCoinsResponse` | `sapiV1CapitalContractConvertibleCoinsResponseSchema` | `src/models/sapi-v1-capital-contract-convertible-coins-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### switchOnOffBusdAndStableCoinsConversionUserDataUserData

- **Signature**: `switchOnOffBusdAndStableCoinsConversionUserDataUserData(request: Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError>`
- **Wire**: `POST /sapi/v1/capital/contract/convertible-coins`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `coin` | `query` | `string` | yes |
| `enable` | `query` | `boolean` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### systemStatusSystem

- **Signature**: `systemStatusSystem(options?: RequestOptions): ApiPromise<SapiV1SystemStatusResponse, ApiError>`
- **Wire**: `GET /sapi/v1/system/status`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1SystemStatusResponse`
- **Error**: `BinanceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1SystemStatusResponse` | `sapiV1SystemStatusResponseSchema` | `src/models/sapi-v1-system-status-response.ts` |

### tradeFeeUserData

- **Signature**: `tradeFeeUserData(request: Wallet.TradeFeeUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetTradeFeeResponse[], Wallet.TradeFeeUserDataError>`
- **Wire**: `GET /sapi/v1/asset/tradeFee`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AssetTradeFeeResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.TradeFeeUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.TradeFeeUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `symbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AssetTradeFeeResponse` | `sapiV1AssetTradeFeeResponseSchema` | `src/models/sapi-v1-asset-trade-fee-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userAssetUserData

- **Signature**: `userAssetUserData(request: Wallet.UserAssetUserDataRequest, options?: RequestOptions): ApiPromise<SapiV3AssetGetUserAssetResponse[], Wallet.UserAssetUserDataError>`
- **Wire**: `POST /sapi/v3/asset/getUserAsset`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV3AssetGetUserAssetResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.UserAssetUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.UserAssetUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `needBtcValuation` | `query` | `NeedBtcValuation` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NeedBtcValuation` | `needBtcValuationSchema` | `src/models/need-btc-valuation.ts` |
| `SapiV3AssetGetUserAssetResponse` | `sapiV3AssetGetUserAssetResponseSchema` | `src/models/sapi-v3-asset-get-user-asset-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userUniversalTransferUserData

- **Signature**: `userUniversalTransferUserData(request: Wallet.UserUniversalTransferUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AssetTransferResponse1, Wallet.UserUniversalTransferUserDataError>`
- **Wire**: `POST /sapi/v1/asset/transfer`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1AssetTransferResponse1`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.UserUniversalTransferUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.UserUniversalTransferUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `Type7` | yes |
| `asset` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `fromSymbol` | `query` | `string` | no |
| `toSymbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type7` | `type7Schema` | `src/models/type7.ts` |
| `SapiV1AssetTransferResponse1` | `sapiV1AssetTransferResponse1Schema` | `src/models/sapi-v1-asset-transfer-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### withdrawUserData

- **Signature**: `withdrawUserData(request: Wallet.WithdrawUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1CapitalWithdrawApplyResponse, Wallet.WithdrawUserDataError>`
- **Wire**: `POST /sapi/v1/capital/withdraw/apply`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1CapitalWithdrawApplyResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.WithdrawUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.WithdrawUserDataRequest` (12):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `coin` | `query` | `string` | yes | — |
| `address` | `query` | `string` | yes | — |
| `amount` | `query` | `number` | yes | — |
| `timestamp` | `query` | `number` | yes | — |
| `signature` | `query` | `string` | yes | — |
| `withdrawOrderId` | `query` | `string` | no | — |
| `network` | `query` | `string` | no | — |
| `addressTag` | `query` | `string` | no | — |
| `transactionFeeFlag` | `query` | `boolean` | no | `false` |
| `name` | `query` | `string` | no | — |
| `walletType` | `query` | `number` | no | — |
| `recvWindow` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalWithdrawApplyResponse` | `sapiV1CapitalWithdrawApplyResponseSchema` | `src/models/sapi-v1-capital-withdraw-apply-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### withdrawHistorySupportingNetworkUserData

- **Signature**: `withdrawHistorySupportingNetworkUserData(request: Wallet.WithdrawHistorySupportingNetworkUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1CapitalWithdrawHistoryResponse[], Wallet.WithdrawHistorySupportingNetworkUserDataError>`
- **Wire**: `GET /sapi/v1/capital/withdraw/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1CapitalWithdrawHistoryResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Wallet.WithdrawHistorySupportingNetworkUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wallet.WithdrawHistorySupportingNetworkUserDataRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `coin` | `query` | `string` | no |
| `withdrawOrderId` | `query` | `string` | no |
| `status` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1CapitalWithdrawHistoryResponse` | `sapiV1CapitalWithdrawHistoryResponseSchema` | `src/models/sapi-v1-capital-withdraw-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

