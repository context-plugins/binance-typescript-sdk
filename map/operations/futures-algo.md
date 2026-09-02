<!-- Generated file — do not edit; regenerated with the SDK. -->

# FuturesAlgo — operations

Accessor: `client.futuresAlgo` · Source: `src/resources/futures-algo.ts` · 6 operations · Request and error types: namespace `FuturesAlgo`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelAlgoOrderTrade

- **Signature**: `cancelAlgoOrderTrade(request: FuturesAlgo.CancelAlgoOrderTradeRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoFuturesOrderResponse, FuturesAlgo.CancelAlgoOrderTradeError>`
- **Wire**: `DELETE /sapi/v1/algo/futures/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoFuturesOrderResponse`
- **Error**: `FuturesAlgo.CancelAlgoOrderTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FuturesAlgo.CancelAlgoOrderTradeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algoId` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AlgoFuturesOrderResponse` | `sapiV1AlgoFuturesOrderResponseSchema` | `src/models/sapi-v1-algo-futures-order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryCurrentAlgoOpenOrdersUserData

- **Signature**: `queryCurrentAlgoOpenOrdersUserData(request: FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoFuturesOpenOrdersResponse, FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError>`
- **Wire**: `GET /sapi/v1/algo/futures/openOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoFuturesOpenOrdersResponse`
- **Error**: `FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AlgoFuturesOpenOrdersResponse` | `sapiV1AlgoFuturesOpenOrdersResponseSchema` | `src/models/sapi-v1-algo-futures-open-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryHistoricalAlgoOrdersUserData

- **Signature**: `queryHistoricalAlgoOrdersUserData(request: FuturesAlgo.QueryHistoricalAlgoOrdersUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoFuturesHistoricalOrdersResponse, FuturesAlgo.QueryHistoricalAlgoOrdersUserDataError>`
- **Wire**: `GET /sapi/v1/algo/futures/historicalOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoFuturesHistoricalOrdersResponse`
- **Error**: `FuturesAlgo.QueryHistoricalAlgoOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FuturesAlgo.QueryHistoricalAlgoOrdersUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `symbol` | `query` | `string` | no |
| `side` | `query` | `Side` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `pageSize` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `SapiV1AlgoFuturesHistoricalOrdersResponse` | `sapiV1AlgoFuturesHistoricalOrdersResponseSchema` | `src/models/sapi-v1-algo-futures-historical-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### querySubOrdersUserData

- **Signature**: `querySubOrdersUserData(request: FuturesAlgo.QuerySubOrdersUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoFuturesSubOrdersResponse, FuturesAlgo.QuerySubOrdersUserDataError>`
- **Wire**: `GET /sapi/v1/algo/futures/subOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoFuturesSubOrdersResponse`
- **Error**: `FuturesAlgo.QuerySubOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FuturesAlgo.QuerySubOrdersUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algoId` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `page` | `query` | `number` | no |
| `pageSize` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AlgoFuturesSubOrdersResponse` | `sapiV1AlgoFuturesSubOrdersResponseSchema` | `src/models/sapi-v1-algo-futures-sub-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### timeWeightedAveragePriceTwapNewOrderTrade

- **Signature**: `timeWeightedAveragePriceTwapNewOrderTrade(request: FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoFuturesNewOrderTwapResponse, FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeError>`
- **Wire**: `POST /sapi/v1/algo/futures/newOrderTwap`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoFuturesNewOrderTwapResponse`
- **Error**: `FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `quantity` | `query` | `number` | yes |
| `duration` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `positionSide` | `query` | `PositionSide` | no |
| `clientAlgoId` | `query` | `string` | no |
| `reduceOnly` | `query` | `boolean` | no |
| `limitPrice` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `PositionSide` | `positionSideSchema` | `src/models/position-side.ts` |
| `SapiV1AlgoFuturesNewOrderTwapResponse` | `sapiV1AlgoFuturesNewOrderTwapResponseSchema` | `src/models/sapi-v1-algo-futures-new-order-twap-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### volumeParticipationVpNewOrderTrade

- **Signature**: `volumeParticipationVpNewOrderTrade(request: FuturesAlgo.VolumeParticipationVpNewOrderTradeRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoFuturesNewOrderVpResponse, FuturesAlgo.VolumeParticipationVpNewOrderTradeError>`
- **Wire**: `POST /sapi/v1/algo/futures/newOrderVp`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoFuturesNewOrderVpResponse`
- **Error**: `FuturesAlgo.VolumeParticipationVpNewOrderTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FuturesAlgo.VolumeParticipationVpNewOrderTradeRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `quantity` | `query` | `number` | yes |
| `urgency` | `query` | `Urgency` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `positionSide` | `query` | `PositionSide` | no |
| `clientAlgoId` | `query` | `string` | no |
| `reduceOnly` | `query` | `boolean` | no |
| `limitPrice` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `Urgency` | `urgencySchema` | `src/models/urgency.ts` |
| `PositionSide` | `positionSideSchema` | `src/models/position-side.ts` |
| `SapiV1AlgoFuturesNewOrderVpResponse` | `sapiV1AlgoFuturesNewOrderVpResponseSchema` | `src/models/sapi-v1-algo-futures-new-order-vp-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

