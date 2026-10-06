<!-- Generated file — do not edit; regenerated with the SDK. -->

# Convert — operations

Accessor: `client.convert` · Source: `src/resources/convert.ts` · 9 operations · Request and error types: namespace `Convert`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acceptQuoteTrade

- **Signature**: `acceptQuoteTrade(request: Convert.AcceptQuoteTradeRequest, options?: RequestOptions): ApiPromise<SapiV1ConvertAcceptQuoteResponse, Convert.AcceptQuoteTradeError>`
- **Wire**: `POST /sapi/v1/convert/acceptQuote`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1ConvertAcceptQuoteResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Convert.AcceptQuoteTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Convert.AcceptQuoteTradeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `quoteId` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ConvertAcceptQuoteResponse` | `sapiV1ConvertAcceptQuoteResponseSchema` | `src/models/sapi-v1-convert-accept-quote-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelLimitOrderUserData

- **Signature**: `cancelLimitOrderUserData(request: Convert.CancelLimitOrderUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1ConvertLimitCancelOrderResponse, Convert.CancelLimitOrderUserDataError>`
- **Wire**: `POST /sapi/v1/convert/limit/cancelOrder`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1ConvertLimitCancelOrderResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Convert.CancelLimitOrderUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Convert.CancelLimitOrderUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orderId` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ConvertLimitCancelOrderResponse` | `sapiV1ConvertLimitCancelOrderResponseSchema` | `src/models/sapi-v1-convert-limit-cancel-order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getConvertTradeHistoryUserData

- **Signature**: `getConvertTradeHistoryUserData(request: Convert.GetConvertTradeHistoryUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1ConvertTradeFlowResponse, Convert.GetConvertTradeHistoryUserDataError>`
- **Wire**: `GET /sapi/v1/convert/tradeFlow`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ConvertTradeFlowResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Convert.GetConvertTradeHistoryUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Convert.GetConvertTradeHistoryUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `startTime` | `query` | `number` | yes |
| `endTime` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ConvertTradeFlowResponse` | `sapiV1ConvertTradeFlowResponseSchema` | `src/models/sapi-v1-convert-trade-flow-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAllConvertPairs

- **Signature**: `listAllConvertPairs(request: Convert.ListAllConvertPairsRequest, options?: RequestOptions): ApiPromise<SapiV1ConvertExchangeInfoResponse[], Convert.ListAllConvertPairsError>`
- **Wire**: `GET /sapi/v1/convert/exchangeInfo`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ConvertExchangeInfoResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Convert.ListAllConvertPairsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Convert.ListAllConvertPairsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fromAsset` | `query` | `string` | no |
| `toAsset` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ConvertExchangeInfoResponse` | `sapiV1ConvertExchangeInfoResponseSchema` | `src/models/sapi-v1-convert-exchange-info-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### orderStatusUserData

- **Signature**: `orderStatusUserData(request: Convert.OrderStatusUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1ConvertOrderStatusResponse, Convert.OrderStatusUserDataError>`
- **Wire**: `GET /sapi/v1/convert/orderStatus`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ConvertOrderStatusResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Convert.OrderStatusUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Convert.OrderStatusUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `string` | no |
| `quoteId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ConvertOrderStatusResponse` | `sapiV1ConvertOrderStatusResponseSchema` | `src/models/sapi-v1-convert-order-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### placeLimitOrderUserData

- **Signature**: `placeLimitOrderUserData(request: Convert.PlaceLimitOrderUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1ConvertLimitPlaceOrderResponse, Convert.PlaceLimitOrderUserDataError>`
- **Wire**: `POST /sapi/v1/convert/limit/placeOrder`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1ConvertLimitPlaceOrderResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Convert.PlaceLimitOrderUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Convert.PlaceLimitOrderUserDataRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseAsset` | `query` | `string` | yes |
| `quoteAsset` | `query` | `string` | yes |
| `limitPrice` | `query` | `number` | yes |
| `side` | `query` | `Side` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `baseAmount` | `query` | `number` | no |
| `quoteAmount` | `query` | `number` | no |
| `walletType` | `query` | `WalletType` | no |
| `expiredType` | `query` | `ExpiredType` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `WalletType` | `walletTypeSchema` | `src/models/wallet-type.ts` |
| `ExpiredType` | `expiredTypeSchema` | `src/models/expired-type.ts` |
| `SapiV1ConvertLimitPlaceOrderResponse` | `sapiV1ConvertLimitPlaceOrderResponseSchema` | `src/models/sapi-v1-convert-limit-place-order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryLimitOpenOrdersUserData

- **Signature**: `queryLimitOpenOrdersUserData(request: Convert.QueryLimitOpenOrdersUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1ConvertLimitQueryOpenOrdersResponse, Convert.QueryLimitOpenOrdersUserDataError>`
- **Wire**: `GET /sapi/v1/convert/limit/queryOpenOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ConvertLimitQueryOpenOrdersResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Convert.QueryLimitOpenOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Convert.QueryLimitOpenOrdersUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ConvertLimitQueryOpenOrdersResponse` | `sapiV1ConvertLimitQueryOpenOrdersResponseSchema` | `src/models/sapi-v1-convert-limit-query-open-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryOrderQuantityPrecisionPerAssetUserData

- **Signature**: `queryOrderQuantityPrecisionPerAssetUserData(request: Convert.QueryOrderQuantityPrecisionPerAssetUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1ConvertAssetInfoResponse[], Convert.QueryOrderQuantityPrecisionPerAssetUserDataError>`
- **Wire**: `GET /sapi/v1/convert/assetInfo`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1ConvertAssetInfoResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Convert.QueryOrderQuantityPrecisionPerAssetUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Convert.QueryOrderQuantityPrecisionPerAssetUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ConvertAssetInfoResponse` | `sapiV1ConvertAssetInfoResponseSchema` | `src/models/sapi-v1-convert-asset-info-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sendQuoteRequestUserData

- **Signature**: `sendQuoteRequestUserData(request: Convert.SendQuoteRequestUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1ConvertGetQuoteResponse, Convert.SendQuoteRequestUserDataError>`
- **Wire**: `POST /sapi/v1/convert/getQuote`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1ConvertGetQuoteResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Convert.SendQuoteRequestUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Convert.SendQuoteRequestUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fromAsset` | `query` | `string` | yes |
| `toAsset` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `fromAmount` | `query` | `number` | no |
| `toAmount` | `query` | `number` | no |
| `validTime` | `query` | `string` | no |
| `walletType` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1ConvertGetQuoteResponse` | `sapiV1ConvertGetQuoteResponseSchema` | `src/models/sapi-v1-convert-get-quote-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

