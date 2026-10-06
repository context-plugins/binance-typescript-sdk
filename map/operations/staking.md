<!-- Generated file — do not edit; regenerated with the SDK. -->

# Staking — operations

Accessor: `client.staking` · Source: `src/resources/staking.ts` · 12 operations · Request and error types: namespace `Staking`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### ethStakingAccountV2UserData

- **Signature**: `ethStakingAccountV2UserData(request: Staking.EthStakingAccountV2UserDataRequest, options?: RequestOptions): ApiPromise<SapiV2EthStakingAccountResponse, Staking.EthStakingAccountV2UserDataError>`
- **Wire**: `GET /sapi/v2/eth-staking/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV2EthStakingAccountResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.EthStakingAccountV2UserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.EthStakingAccountV2UserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2EthStakingAccountResponse` | `sapiV2EthStakingAccountResponseSchema` | `src/models/sapi-v2-eth-staking-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getBethRewardsDistributionHistoryUserData

- **Signature**: `getBethRewardsDistributionHistoryUserData(request: Staking.GetBethRewardsDistributionHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingEthHistoryRewardsHistoryResponse, Staking.GetBethRewardsDistributionHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/eth-staking/eth/history/rewardsHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1EthStakingEthHistoryRewardsHistoryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.GetBethRewardsDistributionHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.GetBethRewardsDistributionHistoryUserDataRequest` (7):

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
| `SapiV1EthStakingEthHistoryRewardsHistoryResponse` | `sapiV1EthStakingEthHistoryRewardsHistoryResponseSchema` | `src/models/sapi-v1-eth-staking-eth-history-rewards-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getEthRedemptionHistoryUserData

- **Signature**: `getEthRedemptionHistoryUserData(request: Staking.GetEthRedemptionHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingEthHistoryRedemptionHistoryResponse, Staking.GetEthRedemptionHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/eth-staking/eth/history/redemptionHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1EthStakingEthHistoryRedemptionHistoryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.GetEthRedemptionHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.GetEthRedemptionHistoryUserDataRequest` (7):

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
| `SapiV1EthStakingEthHistoryRedemptionHistoryResponse` | `sapiV1EthStakingEthHistoryRedemptionHistoryResponseSchema` | `src/models/sapi-v1-eth-staking-eth-history-redemption-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getEthStakingHistoryUserData

- **Signature**: `getEthStakingHistoryUserData(request: Staking.GetEthStakingHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingEthHistoryStakingHistoryResponse, Staking.GetEthStakingHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/eth-staking/eth/history/stakingHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1EthStakingEthHistoryStakingHistoryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.GetEthStakingHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.GetEthStakingHistoryUserDataRequest` (7):

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
| `SapiV1EthStakingEthHistoryStakingHistoryResponse` | `sapiV1EthStakingEthHistoryStakingHistoryResponseSchema` | `src/models/sapi-v1-eth-staking-eth-history-staking-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getWbethRateHistoryUserData

- **Signature**: `getWbethRateHistoryUserData(request: Staking.GetWbethRateHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingEthHistoryRateHistoryResponse, Staking.GetWbethRateHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/eth-staking/eth/history/rateHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1EthStakingEthHistoryRateHistoryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.GetWbethRateHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.GetWbethRateHistoryUserDataRequest` (7):

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
| `SapiV1EthStakingEthHistoryRateHistoryResponse` | `sapiV1EthStakingEthHistoryRateHistoryResponseSchema` | `src/models/sapi-v1-eth-staking-eth-history-rate-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getWbethRewardsHistoryUserData

- **Signature**: `getWbethRewardsHistoryUserData(request: Staking.GetWbethRewardsHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse, Staking.GetWbethRewardsHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/eth-staking/eth/history/wbethRewardsHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.GetWbethRewardsHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.GetWbethRewardsHistoryUserDataRequest` (7):

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
| `SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse` | `sapiV1EthStakingEthHistoryWbethRewardsHistoryResponseSchema` | `src/models/sapi-v1-eth-staking-eth-history-wbeth-rewards-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getWbethUnwrapHistoryUserData

- **Signature**: `getWbethUnwrapHistoryUserData(request: Staking.GetWbethUnwrapHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingWbethHistoryUnwrapHistoryResponse, Staking.GetWbethUnwrapHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/eth-staking/wbeth/history/unwrapHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1EthStakingWbethHistoryUnwrapHistoryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.GetWbethUnwrapHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.GetWbethUnwrapHistoryUserDataRequest` (7):

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
| `SapiV1EthStakingWbethHistoryUnwrapHistoryResponse` | `sapiV1EthStakingWbethHistoryUnwrapHistoryResponseSchema` | `src/models/sapi-v1-eth-staking-wbeth-history-unwrap-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getWbethWrapHistoryUserData

- **Signature**: `getWbethWrapHistoryUserData(request: Staking.GetWbethWrapHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingWbethHistoryWrapHistoryResponse, Staking.GetWbethWrapHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/eth-staking/wbeth/history/wrapHistory`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1EthStakingWbethHistoryWrapHistoryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.GetWbethWrapHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.GetWbethWrapHistoryUserDataRequest` (7):

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
| `SapiV1EthStakingWbethHistoryWrapHistoryResponse` | `sapiV1EthStakingWbethHistoryWrapHistoryResponseSchema` | `src/models/sapi-v1-eth-staking-wbeth-history-wrap-history-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCurrentEthStakingQuotaUserData

- **Signature**: `getCurrentEthStakingQuotaUserData(request: Staking.GetCurrentEthStakingQuotaUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingEthQuotaResponse, Staking.GetCurrentEthStakingQuotaUserDataError>`
- **Wire**: `GET /sapi/v1/eth-staking/eth/quota`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1EthStakingEthQuotaResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.GetCurrentEthStakingQuotaUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.GetCurrentEthStakingQuotaUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1EthStakingEthQuotaResponse` | `sapiV1EthStakingEthQuotaResponseSchema` | `src/models/sapi-v1-eth-staking-eth-quota-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### redeemEthTrade

- **Signature**: `redeemEthTrade(request: Staking.RedeemEthTradeRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingEthRedeemResponse, Staking.RedeemEthTradeError>`
- **Wire**: `POST /sapi/v1/eth-staking/eth/redeem`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1EthStakingEthRedeemResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.RedeemEthTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.RedeemEthTradeRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `asset` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1EthStakingEthRedeemResponse` | `sapiV1EthStakingEthRedeemResponseSchema` | `src/models/sapi-v1-eth-staking-eth-redeem-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subscribeEthStakingV2Trade

- **Signature**: `subscribeEthStakingV2Trade(request: Staking.SubscribeEthStakingV2TradeRequest, options?: RequestOptions): ApiPromise<SapiV2EthStakingEthStakeResponse, Staking.SubscribeEthStakingV2TradeError>`
- **Wire**: `POST /sapi/v2/eth-staking/eth/stake`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV2EthStakingEthStakeResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.SubscribeEthStakingV2TradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.SubscribeEthStakingV2TradeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV2EthStakingEthStakeResponse` | `sapiV2EthStakingEthStakeResponseSchema` | `src/models/sapi-v2-eth-staking-eth-stake-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### wrapBethTrade

- **Signature**: `wrapBethTrade(request: Staking.WrapBethTradeRequest, options?: RequestOptions): ApiPromise<SapiV1EthStakingWbethWrapResponse, Staking.WrapBethTradeError>`
- **Wire**: `POST /sapi/v1/eth-staking/wbeth/wrap`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1EthStakingWbethWrapResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Staking.WrapBethTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Staking.WrapBethTradeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `amount` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1EthStakingWbethWrapResponse` | `sapiV1EthStakingWbethWrapResponseSchema` | `src/models/sapi-v1-eth-staking-wbeth-wrap-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

