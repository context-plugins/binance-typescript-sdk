<!-- Generated file — do not edit; regenerated with the SDK. -->

# SpotAlgo — operations

Accessor: `client.spotAlgo` · Source: `src/resources/spot-algo.ts` · 5 operations · Request and error types: namespace `SpotAlgo`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelAlgoOrder

- **Signature**: `cancelAlgoOrder(request: SpotAlgo.CancelAlgoOrderRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoSpotOrderResponse, SpotAlgo.CancelAlgoOrderError>`
- **Wire**: `DELETE /sapi/v1/algo/spot/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoSpotOrderResponse`
- **Error**: `SpotAlgo.CancelAlgoOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SpotAlgo.CancelAlgoOrderRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `algoId` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AlgoSpotOrderResponse` | `sapiV1AlgoSpotOrderResponseSchema` | `src/models/sapi-v1-algo-spot-order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryCurrentAlgoOpenOrders

- **Signature**: `queryCurrentAlgoOpenOrders(request: SpotAlgo.QueryCurrentAlgoOpenOrdersRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoSpotOpenOrdersResponse, SpotAlgo.QueryCurrentAlgoOpenOrdersError>`
- **Wire**: `GET /sapi/v1/algo/spot/openOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoSpotOpenOrdersResponse`
- **Error**: `SpotAlgo.QueryCurrentAlgoOpenOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SpotAlgo.QueryCurrentAlgoOpenOrdersRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1AlgoSpotOpenOrdersResponse` | `sapiV1AlgoSpotOpenOrdersResponseSchema` | `src/models/sapi-v1-algo-spot-open-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryHistoricalAlgoOrders

- **Signature**: `queryHistoricalAlgoOrders(request: SpotAlgo.QueryHistoricalAlgoOrdersRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoSpotHistoricalOrdersResponse, SpotAlgo.QueryHistoricalAlgoOrdersError>`
- **Wire**: `GET /sapi/v1/algo/spot/historicalOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoSpotHistoricalOrdersResponse`
- **Error**: `SpotAlgo.QueryHistoricalAlgoOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SpotAlgo.QueryHistoricalAlgoOrdersRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `pageSize` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `SapiV1AlgoSpotHistoricalOrdersResponse` | `sapiV1AlgoSpotHistoricalOrdersResponseSchema` | `src/models/sapi-v1-algo-spot-historical-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### querySubOrders

- **Signature**: `querySubOrders(request: SpotAlgo.QuerySubOrdersRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoSpotSubOrdersResponse, SpotAlgo.QuerySubOrdersError>`
- **Wire**: `GET /sapi/v1/algo/spot/subOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoSpotSubOrdersResponse`
- **Error**: `SpotAlgo.QuerySubOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SpotAlgo.QuerySubOrdersRequest` (6):

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
| `SapiV1AlgoSpotSubOrdersResponse` | `sapiV1AlgoSpotSubOrdersResponseSchema` | `src/models/sapi-v1-algo-spot-sub-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### timeWeightedAveragePriceTwapNewOrder

- **Signature**: `timeWeightedAveragePriceTwapNewOrder(request: SpotAlgo.TimeWeightedAveragePriceTwapNewOrderRequest, options?: RequestOptions): ApiPromise<SapiV1AlgoSpotNewOrderTwapResponse, SpotAlgo.TimeWeightedAveragePriceTwapNewOrderError>`
- **Wire**: `POST /sapi/v1/algo/spot/newOrderTwap`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1AlgoSpotNewOrderTwapResponse`
- **Error**: `SpotAlgo.TimeWeightedAveragePriceTwapNewOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SpotAlgo.TimeWeightedAveragePriceTwapNewOrderRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `quantity` | `query` | `number` | yes |
| `duration` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `clientAlgoId` | `query` | `string` | no |
| `limitPrice` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `SapiV1AlgoSpotNewOrderTwapResponse` | `sapiV1AlgoSpotNewOrderTwapResponseSchema` | `src/models/sapi-v1-algo-spot-new-order-twap-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

