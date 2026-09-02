<!-- Generated file — do not edit; regenerated with the SDK. -->

# TradeApi — operations

Accessor: `client.tradeApi` · Source: `src/resources/trade-api.ts` · 23 operations · Request and error types: namespace `TradeApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### accountInformationUserData

- **Signature**: `accountInformationUserData(request: TradeApi.AccountInformationUserDataRequest, options?: RequestOptions): ApiPromise<Account, TradeApi.AccountInformationUserDataError>`
- **Wire**: `GET /api/v3/account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Account`
- **Error**: `TradeApi.AccountInformationUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.AccountInformationUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Account` | `accountSchema` | `src/models/account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### accountTradeListUserData

- **Signature**: `accountTradeListUserData(request: TradeApi.AccountTradeListUserDataRequest, options?: RequestOptions): ApiPromise<MyTrade[], TradeApi.AccountTradeListUserDataError>`
- **Wire**: `GET /api/v3/myTrades`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MyTrade[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TradeApi.AccountTradeListUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.AccountTradeListUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `fromId` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MyTrade` | `myTradeSchema` | `src/models/my-trade.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### allOrdersUserData

- **Signature**: `allOrdersUserData(request: TradeApi.AllOrdersUserDataRequest, options?: RequestOptions): ApiPromise<OrderDetails[], TradeApi.AllOrdersUserDataError>`
- **Wire**: `GET /api/v3/allOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrderDetails[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TradeApi.AllOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.AllOrdersUserDataRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderDetails` | `orderDetailsSchema` | `src/models/order-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelOcoTrade

- **Signature**: `cancelOcoTrade(request: TradeApi.CancelOcoTradeRequest, options?: RequestOptions): ApiPromise<OcoOrder, TradeApi.CancelOcoTradeError>`
- **Wire**: `DELETE /api/v3/orderList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OcoOrder`
- **Error**: `TradeApi.CancelOcoTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.CancelOcoTradeRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderListId` | `query` | `number` | no |
| `listClientOrderId` | `query` | `string` | no |
| `newClientOrderId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OcoOrder` | `ocoOrderSchema` | `src/models/oco-order.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelOrderTrade

- **Signature**: `cancelOrderTrade(request: TradeApi.CancelOrderTradeRequest, options?: RequestOptions): ApiPromise<Order, TradeApi.CancelOrderTradeError>`
- **Wire**: `DELETE /api/v3/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Order`
- **Error**: `TradeApi.CancelOrderTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.CancelOrderTradeRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `origClientOrderId` | `query` | `string` | no |
| `newClientOrderId` | `query` | `string` | no |
| `cancelRestrictions` | `query` | `CancelRestrictions` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelRestrictions` | `cancelRestrictionsSchema` | `src/models/cancel-restrictions.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelAllOpenOrdersOnASymbolTrade

- **Signature**: `cancelAllOpenOrdersOnASymbolTrade(request: TradeApi.CancelAllOpenOrdersOnASymbolTradeRequest, options?: RequestOptions): ApiPromise<ApiV3OpenOrdersResponse[], TradeApi.CancelAllOpenOrdersOnASymbolTradeError>`
- **Wire**: `DELETE /api/v3/openOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3OpenOrdersResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TradeApi.CancelAllOpenOrdersOnASymbolTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.CancelAllOpenOrdersOnASymbolTradeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3OpenOrdersResponse` | `apiV3OpenOrdersResponseSchema` | `src/models/unions/api-v3-open-orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelAnExistingOrderAndSendANewOrderTrade

- **Signature**: `cancelAnExistingOrderAndSendANewOrderTrade(request: TradeApi.CancelAnExistingOrderAndSendANewOrderTradeRequest, options?: RequestOptions): ApiPromise<ApiV3OrderCancelReplaceResponse, TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError>`
- **Wire**: `POST /api/v3/order/cancelReplace`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3OrderCancelReplaceResponse`
- **Error**: `TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.CancelAnExistingOrderAndSendANewOrderTradeRequest` (23):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `type` | `query` | `Type1` | yes |
| `cancelReplaceMode` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `cancelRestrictions` | `query` | `CancelRestrictions` | no |
| `timeInForce` | `query` | `TimeInForce` | no |
| `quantity` | `query` | `number` | no |
| `quoteOrderQty` | `query` | `number` | no |
| `price` | `query` | `number` | no |
| `cancelNewClientOrderId` | `query` | `string` | no |
| `cancelOrigClientOrderId` | `query` | `string` | no |
| `cancelOrderId` | `query` | `number` | no |
| `newClientOrderId` | `query` | `string` | no |
| `strategyId` | `query` | `number` | no |
| `strategyType` | `query` | `number` | no |
| `stopPrice` | `query` | `number` | no |
| `trailingDelta` | `query` | `number` | no |
| `icebergQty` | `query` | `number` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `CancelRestrictions` | `cancelRestrictionsSchema` | `src/models/cancel-restrictions.ts` |
| `TimeInForce` | `timeInForceSchema` | `src/models/time-in-force.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `ApiV3OrderCancelReplaceResponse` | `apiV3OrderCancelReplaceResponseSchema` | `src/models/api-v3-order-cancel-replace-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### currentOpenOrdersUserData

- **Signature**: `currentOpenOrdersUserData(request: TradeApi.CurrentOpenOrdersUserDataRequest, options?: RequestOptions): ApiPromise<OrderDetails[], TradeApi.CurrentOpenOrdersUserDataError>`
- **Wire**: `GET /api/v3/openOrders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrderDetails[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TradeApi.CurrentOpenOrdersUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.CurrentOpenOrdersUserDataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `symbol` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderDetails` | `orderDetailsSchema` | `src/models/order-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### newOrderTrade

- **Signature**: `newOrderTrade(request: TradeApi.NewOrderTradeRequest, options?: RequestOptions): ApiPromise<ApiV3OrderResponse, TradeApi.NewOrderTradeError>`
- **Wire**: `POST /api/v3/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3OrderResponse`
- **Error**: `TradeApi.NewOrderTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.NewOrderTradeRequest` (18):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `type` | `query` | `Type1` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `timeInForce` | `query` | `TimeInForce` | no |
| `quantity` | `query` | `number` | no |
| `quoteOrderQty` | `query` | `number` | no |
| `price` | `query` | `number` | no |
| `newClientOrderId` | `query` | `string` | no |
| `strategyId` | `query` | `number` | no |
| `strategyType` | `query` | `number` | no |
| `stopPrice` | `query` | `number` | no |
| `trailingDelta` | `query` | `number` | no |
| `icebergQty` | `query` | `number` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `TimeInForce` | `timeInForceSchema` | `src/models/time-in-force.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `ApiV3OrderResponse` | `apiV3OrderResponseSchema` | `src/models/unions/api-v3-order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### newOrderListOtoTrade

- **Signature**: `newOrderListOtoTrade(request: TradeApi.NewOrderListOtoTradeRequest, options?: RequestOptions): ApiPromise<ApiV3OrderListOtoResponse, TradeApi.NewOrderListOtoTradeError>`
- **Wire**: `POST /api/v3/orderList/oto`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3OrderListOtoResponse`
- **Error**: `TradeApi.NewOrderListOtoTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.NewOrderListOtoTradeRequest` (26):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `workingType` | `query` | `WorkingType` | yes |
| `workingSide` | `query` | `WorkingSide` | yes |
| `workingPrice` | `query` | `number` | yes |
| `workingQuantity` | `query` | `number` | yes |
| `workingIcebergQty` | `query` | `number` | yes |
| `pendingType` | `query` | `PendingType` | yes |
| `pendingSide` | `query` | `PendingSide` | yes |
| `pendingQuantity` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `listClientOrderId` | `query` | `string` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `workingClientOrderId` | `query` | `string` | no |
| `workingTimeInForce` | `query` | `WorkingTimeInForce` | no |
| `workingStrategyId` | `query` | `number` | no |
| `workingStrategyType` | `query` | `number` | no |
| `pendingClientOrderId` | `query` | `string` | no |
| `pendingPrice` | `query` | `number` | no |
| `pendingStopPrice` | `query` | `number` | no |
| `pendingTrailingDelta` | `query` | `number` | no |
| `pendingIcebergQty` | `query` | `number` | no |
| `pendingTimeInForce` | `query` | `PendingTimeInForce` | no |
| `pendingStrategyId` | `query` | `number` | no |
| `pendingStrategyType` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkingType` | `workingTypeSchema` | `src/models/working-type.ts` |
| `WorkingSide` | `workingSideSchema` | `src/models/working-side.ts` |
| `PendingType` | `pendingTypeSchema` | `src/models/pending-type.ts` |
| `PendingSide` | `pendingSideSchema` | `src/models/pending-side.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `WorkingTimeInForce` | `workingTimeInForceSchema` | `src/models/working-time-in-force.ts` |
| `PendingTimeInForce` | `pendingTimeInForceSchema` | `src/models/pending-time-in-force.ts` |
| `ApiV3OrderListOtoResponse` | `apiV3OrderListOtoResponseSchema` | `src/models/api-v3-order-list-oto-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### newOrderListOtocoTrade

- **Signature**: `newOrderListOtocoTrade(request: TradeApi.NewOrderListOtocoTradeRequest, options?: RequestOptions): ApiPromise<ApiV3OrderListOtocoResponse, TradeApi.NewOrderListOtocoTradeError>`
- **Wire**: `POST /api/v3/orderList/otoco`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3OrderListOtocoResponse`
- **Error**: `TradeApi.NewOrderListOtocoTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.NewOrderListOtocoTradeRequest` (36):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `workingType` | `query` | `WorkingType` | yes |
| `workingSide` | `query` | `WorkingSide` | yes |
| `workingPrice` | `query` | `number` | yes |
| `workingQuantity` | `query` | `number` | yes |
| `workingIcebergQty` | `query` | `number` | yes |
| `pendingSide` | `query` | `PendingSide` | yes |
| `pendingQuantity` | `query` | `number` | yes |
| `pendingAboveType` | `query` | `PendingAboveType` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `listClientOrderId` | `query` | `string` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `workingClientOrderId` | `query` | `string` | no |
| `workingTimeInForce` | `query` | `WorkingTimeInForce` | no |
| `workingStrategyId` | `query` | `number` | no |
| `workingStrategyType` | `query` | `number` | no |
| `pendingAboveClientOrderId` | `query` | `string` | no |
| `pendingAbovePrice` | `query` | `number` | no |
| `pendingAboveStopPrice` | `query` | `number` | no |
| `pendingAboveTrailingDelta` | `query` | `number` | no |
| `pendingAboveIcebergQty` | `query` | `number` | no |
| `pendingAboveTimeInForce` | `query` | `PendingAboveTimeInForce` | no |
| `pendingAboveStrategyId` | `query` | `number` | no |
| `pendingAboveStrategyType` | `query` | `number` | no |
| `pendingBelowType` | `query` | `PendingBelowType` | no |
| `pendingBelowClientOrderId` | `query` | `string` | no |
| `pendingBelowPrice` | `query` | `number` | no |
| `pendingBelowStopPrice` | `query` | `number` | no |
| `pendingBelowTrailingDelta` | `query` | `number` | no |
| `pendingBelowIcebergQty` | `query` | `number` | no |
| `pendingBelowTimeInForce` | `query` | `PendingBelowTimeInForce` | no |
| `pendingBelowStrategyId` | `query` | `number` | no |
| `pendingBelowStrategyType` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkingType` | `workingTypeSchema` | `src/models/working-type.ts` |
| `WorkingSide` | `workingSideSchema` | `src/models/working-side.ts` |
| `PendingSide` | `pendingSideSchema` | `src/models/pending-side.ts` |
| `PendingAboveType` | `pendingAboveTypeSchema` | `src/models/pending-above-type.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `WorkingTimeInForce` | `workingTimeInForceSchema` | `src/models/working-time-in-force.ts` |
| `PendingAboveTimeInForce` | `pendingAboveTimeInForceSchema` | `src/models/pending-above-time-in-force.ts` |
| `PendingBelowType` | `pendingBelowTypeSchema` | `src/models/pending-below-type.ts` |
| `PendingBelowTimeInForce` | `pendingBelowTimeInForceSchema` | `src/models/pending-below-time-in-force.ts` |
| `ApiV3OrderListOtocoResponse` | `apiV3OrderListOtocoResponseSchema` | `src/models/api-v3-order-list-otoco-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### newOrderListOcoTrade

- **Signature**: `newOrderListOcoTrade(request: TradeApi.NewOrderListOcoTradeRequest, options?: RequestOptions): ApiPromise<ApiV3OrderListOcoResponse, TradeApi.NewOrderListOcoTradeError>`
- **Wire**: `POST /api/v3/orderList/oco`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3OrderListOcoResponse`
- **Error**: `TradeApi.NewOrderListOcoTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.NewOrderListOcoTradeRequest` (27):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `quantity` | `query` | `number` | yes |
| `aboveType` | `query` | `string` | yes |
| `belowType` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `listClientOrderId` | `query` | `string` | no |
| `aboveClientOrderId` | `query` | `string` | no |
| `aboveIcebergQty` | `query` | `number` | no |
| `abovePrice` | `query` | `number` | no |
| `aboveStopPrice` | `query` | `number` | no |
| `aboveTrailingDelta` | `query` | `number` | no |
| `aboveTimeInForce` | `query` | `AboveTimeInForce` | no |
| `aboveStrategyId` | `query` | `number` | no |
| `aboveStrategyType` | `query` | `number` | no |
| `belowClientOrderId` | `query` | `string` | no |
| `belowIcebergQty` | `query` | `number` | no |
| `belowPrice` | `query` | `number` | no |
| `belowStopPrice` | `query` | `number` | no |
| `belowTrailingDelta` | `query` | `number` | no |
| `belowTimeInForce` | `query` | `BelowTimeInForce` | no |
| `belowStrategyId` | `query` | `number` | no |
| `belowStrategyType` | `query` | `number` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `AboveTimeInForce` | `aboveTimeInForceSchema` | `src/models/above-time-in-force.ts` |
| `BelowTimeInForce` | `belowTimeInForceSchema` | `src/models/below-time-in-force.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `ApiV3OrderListOcoResponse` | `apiV3OrderListOcoResponseSchema` | `src/models/api-v3-order-list-oco-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### newOrderUsingSorTrade

- **Signature**: `newOrderUsingSorTrade(request: TradeApi.NewOrderUsingSorTradeRequest, options?: RequestOptions): ApiPromise<ApiV3SorOrderResponse, TradeApi.NewOrderUsingSorTradeError>`
- **Wire**: `POST /api/v3/sor/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3SorOrderResponse`
- **Error**: `TradeApi.NewOrderUsingSorTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.NewOrderUsingSorTradeRequest` (15):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `type` | `query` | `Type1` | yes |
| `quantity` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `timeInForce` | `query` | `TimeInForce` | no |
| `price` | `query` | `number` | no |
| `newClientOrderId` | `query` | `string` | no |
| `strategyId` | `query` | `number` | no |
| `strategyType` | `query` | `number` | no |
| `icebergQty` | `query` | `number` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `TimeInForce` | `timeInForceSchema` | `src/models/time-in-force.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `ApiV3SorOrderResponse` | `apiV3SorOrderResponseSchema` | `src/models/api-v3-sor-order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryAllocationsUserData

- **Signature**: `queryAllocationsUserData(request: TradeApi.QueryAllocationsUserDataRequest, options?: RequestOptions): ApiPromise<ApiV3MyAllocationsResponse[], TradeApi.QueryAllocationsUserDataError>`
- **Wire**: `GET /api/v3/myAllocations`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3MyAllocationsResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TradeApi.QueryAllocationsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.QueryAllocationsUserDataRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `fromAllocationId` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `orderId` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3MyAllocationsResponse` | `apiV3MyAllocationsResponseSchema` | `src/models/api-v3-my-allocations-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryCommissionRatesUserData

- **Signature**: `queryCommissionRatesUserData(request: TradeApi.QueryCommissionRatesUserDataRequest, options?: RequestOptions): ApiPromise<ApiV3AccountCommissionResponse, TradeApi.QueryCommissionRatesUserDataError>`
- **Wire**: `GET /api/v3/account/commission`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3AccountCommissionResponse`
- **Error**: `TradeApi.QueryCommissionRatesUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.QueryCommissionRatesUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3AccountCommissionResponse` | `apiV3AccountCommissionResponseSchema` | `src/models/api-v3-account-commission-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryCurrentOrderCountUsageTrade

- **Signature**: `queryCurrentOrderCountUsageTrade(request: TradeApi.QueryCurrentOrderCountUsageTradeRequest, options?: RequestOptions): ApiPromise<ApiV3RateLimitOrderResponse[], TradeApi.QueryCurrentOrderCountUsageTradeError>`
- **Wire**: `GET /api/v3/rateLimit/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3RateLimitOrderResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TradeApi.QueryCurrentOrderCountUsageTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.QueryCurrentOrderCountUsageTradeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3RateLimitOrderResponse` | `apiV3RateLimitOrderResponseSchema` | `src/models/api-v3-rate-limit-order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryOcoUserData

- **Signature**: `queryOcoUserData(request: TradeApi.QueryOcoUserDataRequest, options?: RequestOptions): ApiPromise<ApiV3OrderListResponse, TradeApi.QueryOcoUserDataError>`
- **Wire**: `GET /api/v3/orderList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3OrderListResponse`
- **Error**: `TradeApi.QueryOcoUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.QueryOcoUserDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderListId` | `query` | `number` | no |
| `origClientOrderId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3OrderListResponse` | `apiV3OrderListResponseSchema` | `src/models/api-v3-order-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryOpenOcoUserData

- **Signature**: `queryOpenOcoUserData(request: TradeApi.QueryOpenOcoUserDataRequest, options?: RequestOptions): ApiPromise<ApiV3OpenOrderListResponse[], TradeApi.QueryOpenOcoUserDataError>`
- **Wire**: `GET /api/v3/openOrderList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3OpenOrderListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TradeApi.QueryOpenOcoUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.QueryOpenOcoUserDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3OpenOrderListResponse` | `apiV3OpenOrderListResponseSchema` | `src/models/api-v3-open-order-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryOrderUserData

- **Signature**: `queryOrderUserData(request: TradeApi.QueryOrderUserDataRequest, options?: RequestOptions): ApiPromise<OrderDetails, TradeApi.QueryOrderUserDataError>`
- **Wire**: `GET /api/v3/order`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrderDetails`
- **Error**: `TradeApi.QueryOrderUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.QueryOrderUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `orderId` | `query` | `number` | no |
| `origClientOrderId` | `query` | `string` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderDetails` | `orderDetailsSchema` | `src/models/order-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryPreventedMatches

- **Signature**: `queryPreventedMatches(request: TradeApi.QueryPreventedMatchesRequest, options?: RequestOptions): ApiPromise<ApiV3MyPreventedMatchesResponse[], TradeApi.QueryPreventedMatchesError>`
- **Wire**: `GET /api/v3/myPreventedMatches`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3MyPreventedMatchesResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TradeApi.QueryPreventedMatchesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.QueryPreventedMatchesRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `preventedMatchId` | `query` | `number` | no |
| `orderId` | `query` | `number` | no |
| `fromPreventedMatchId` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3MyPreventedMatchesResponse` | `apiV3MyPreventedMatchesResponseSchema` | `src/models/api-v3-my-prevented-matches-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### queryAllOcoUserData

- **Signature**: `queryAllOcoUserData(request: TradeApi.QueryAllOcoUserDataRequest, options?: RequestOptions): ApiPromise<ApiV3AllOrderListResponse[], TradeApi.QueryAllOcoUserDataError>`
- **Wire**: `GET /api/v3/allOrderList`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV3AllOrderListResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TradeApi.QueryAllOcoUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.QueryAllOcoUserDataRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `fromId` | `query` | `number` | no |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3AllOrderListResponse` | `apiV3AllOrderListResponseSchema` | `src/models/api-v3-all-order-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### testNewOrderTrade

- **Signature**: `testNewOrderTrade(request: TradeApi.TestNewOrderTradeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, TradeApi.TestNewOrderTradeError>`
- **Wire**: `POST /api/v3/order/test`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `TradeApi.TestNewOrderTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.TestNewOrderTradeRequest` (18):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `type` | `query` | `Type1` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `timeInForce` | `query` | `TimeInForce` | no |
| `quantity` | `query` | `number` | no |
| `quoteOrderQty` | `query` | `number` | no |
| `price` | `query` | `number` | no |
| `newClientOrderId` | `query` | `string` | no |
| `strategyId` | `query` | `number` | no |
| `strategyType` | `query` | `number` | no |
| `stopPrice` | `query` | `number` | no |
| `trailingDelta` | `query` | `number` | no |
| `icebergQty` | `query` | `number` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `recvWindow` | `query` | `number` | no |
| `computeCommissionRates` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `TimeInForce` | `timeInForceSchema` | `src/models/time-in-force.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### testNewOrderUsingSorTrade

- **Signature**: `testNewOrderUsingSorTrade(request: TradeApi.TestNewOrderUsingSorTradeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, TradeApi.TestNewOrderUsingSorTradeError>`
- **Wire**: `POST /api/v3/sor/order/test`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `TradeApi.TestNewOrderUsingSorTradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeApi.TestNewOrderUsingSorTradeRequest` (16):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `side` | `query` | `Side` | yes |
| `type` | `query` | `Type1` | yes |
| `quantity` | `query` | `number` | yes |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `timeInForce` | `query` | `TimeInForce` | no |
| `price` | `query` | `number` | no |
| `newClientOrderId` | `query` | `string` | no |
| `strategyId` | `query` | `number` | no |
| `strategyType` | `query` | `number` | no |
| `icebergQty` | `query` | `number` | no |
| `newOrderRespType` | `query` | `NewOrderRespType` | no |
| `selfTradePreventionMode` | `query` | `SelfTradePreventionMode` | no |
| `computeCommissionRates` | `query` | `boolean` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side` | `sideSchema` | `src/models/side.ts` |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `TimeInForce` | `timeInForceSchema` | `src/models/time-in-force.ts` |
| `NewOrderRespType` | `newOrderRespTypeSchema` | `src/models/new-order-resp-type.ts` |
| `SelfTradePreventionMode` | `selfTradePreventionModeSchema` | `src/models/self-trade-prevention-mode.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

