import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { aboveTimeInForceSchema, type AboveTimeInForce } from "../models/above-time-in-force.js";
import { accountSchema, type Account } from "../models/account.js";
import {
  apiV3AccountCommissionResponseSchema,
  type ApiV3AccountCommissionResponse,
} from "../models/api-v3-account-commission-response.js";
import {
  apiV3AllOrderListResponseSchema,
  type ApiV3AllOrderListResponse,
} from "../models/api-v3-all-order-list-response.js";
import {
  apiV3MyAllocationsResponseSchema,
  type ApiV3MyAllocationsResponse,
} from "../models/api-v3-my-allocations-response.js";
import {
  apiV3MyPreventedMatchesResponseSchema,
  type ApiV3MyPreventedMatchesResponse,
} from "../models/api-v3-my-prevented-matches-response.js";
import {
  apiV3OpenOrderListResponseSchema,
  type ApiV3OpenOrderListResponse,
} from "../models/api-v3-open-order-list-response.js";
import {
  apiV3OrderCancelReplaceResponseSchema,
  type ApiV3OrderCancelReplaceResponse,
} from "../models/api-v3-order-cancel-replace-response.js";
import {
  apiV3OrderListOcoResponseSchema,
  type ApiV3OrderListOcoResponse,
} from "../models/api-v3-order-list-oco-response.js";
import {
  apiV3OrderListOtoResponseSchema,
  type ApiV3OrderListOtoResponse,
} from "../models/api-v3-order-list-oto-response.js";
import {
  apiV3OrderListOtocoResponseSchema,
  type ApiV3OrderListOtocoResponse,
} from "../models/api-v3-order-list-otoco-response.js";
import {
  apiV3OrderListResponseSchema,
  type ApiV3OrderListResponse,
} from "../models/api-v3-order-list-response.js";
import {
  apiV3RateLimitOrderResponseSchema,
  type ApiV3RateLimitOrderResponse,
} from "../models/api-v3-rate-limit-order-response.js";
import {
  apiV3SorOrderResponseSchema,
  type ApiV3SorOrderResponse,
} from "../models/api-v3-sor-order-response.js";
import { belowTimeInForceSchema, type BelowTimeInForce } from "../models/below-time-in-force.js";
import { cancelRestrictionsSchema, type CancelRestrictions } from "../models/cancel-restrictions.js";
import { errorSchema, type Error } from "../models/error.js";
import { myTradeSchema, type MyTrade } from "../models/my-trade.js";
import { newOrderRespTypeSchema, type NewOrderRespType } from "../models/new-order-resp-type.js";
import { ocoOrderSchema, type OcoOrder } from "../models/oco-order.js";
import { orderDetailsSchema, type OrderDetails } from "../models/order-details.js";
import { orderSchema, type Order } from "../models/order.js";
import {
  pendingAboveTimeInForceSchema,
  type PendingAboveTimeInForce,
} from "../models/pending-above-time-in-force.js";
import { pendingAboveTypeSchema, type PendingAboveType } from "../models/pending-above-type.js";
import {
  pendingBelowTimeInForceSchema,
  type PendingBelowTimeInForce,
} from "../models/pending-below-time-in-force.js";
import { pendingBelowTypeSchema, type PendingBelowType } from "../models/pending-below-type.js";
import { pendingSideSchema, type PendingSide } from "../models/pending-side.js";
import { pendingTimeInForceSchema, type PendingTimeInForce } from "../models/pending-time-in-force.js";
import { pendingTypeSchema, type PendingType } from "../models/pending-type.js";
import {
  selfTradePreventionModeSchema,
  type SelfTradePreventionMode,
} from "../models/self-trade-prevention-mode.js";
import { sideSchema, type Side } from "../models/side.js";
import { timeInForceSchema, type TimeInForce } from "../models/time-in-force.js";
import { type1Schema, type Type1 } from "../models/type1.js";
import {
  apiV3OpenOrdersResponseSchema,
  type ApiV3OpenOrdersResponse,
} from "../models/unions/api-v3-open-orders-response.js";
import { apiV3OrderResponseSchema, type ApiV3OrderResponse } from "../models/unions/api-v3-order-response.js";
import { workingSideSchema, type WorkingSide } from "../models/working-side.js";
import { workingTimeInForceSchema, type WorkingTimeInForce } from "../models/working-time-in-force.js";
import { workingTypeSchema, type WorkingType } from "../models/working-type.js";
import type { Servers } from "../servers.js";

export class TradeApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  accountInformationUserData(
    request: TradeApi.AccountInformationUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<Account, TradeApi.AccountInformationUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountSchema },
        errorFactory: TradeApi.AccountInformationUserDataError,
      },
      options,
    );
  }

  accountTradeListUserData(
    request: TradeApi.AccountTradeListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MyTrade[], TradeApi.AccountTradeListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/myTrades"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => myTradeSchema)) },
        errorFactory: TradeApi.AccountTradeListUserDataError,
      },
      options,
    );
  }

  allOrdersUserData(
    request: TradeApi.AllOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderDetails[], TradeApi.AllOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/allOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => orderDetailsSchema)) },
        errorFactory: TradeApi.AllOrdersUserDataError,
      },
      options,
    );
  }

  cancelOcoTrade(
    request: TradeApi.CancelOcoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<OcoOrder, TradeApi.CancelOcoTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/api/v3/orderList"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderListId", value: request.orderListId, schema: s.optional(s.number()) },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ocoOrderSchema },
        errorFactory: TradeApi.CancelOcoTradeError,
      },
      options,
    );
  }

  cancelOrderTrade(
    request: TradeApi.CancelOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<Order, TradeApi.CancelOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/api/v3/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          {
            name: "cancelRestrictions",
            value: request.cancelRestrictions,
            schema: s.optional(s.lazy(() => cancelRestrictionsSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderSchema },
        errorFactory: TradeApi.CancelOrderTradeError,
      },
      options,
    );
  }

  cancelAllOpenOrdersOnASymbolTrade(
    request: TradeApi.CancelAllOpenOrdersOnASymbolTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OpenOrdersResponse[], TradeApi.CancelAllOpenOrdersOnASymbolTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/api/v3/openOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3OpenOrdersResponseSchema)) },
        errorFactory: TradeApi.CancelAllOpenOrdersOnASymbolTradeError,
      },
      options,
    );
  }

  cancelAnExistingOrderAndSendANewOrderTrade(
    request: TradeApi.CancelAnExistingOrderAndSendANewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderCancelReplaceResponse, TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/api/v3/order/cancelReplace"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "cancelReplaceMode", value: request.cancelReplaceMode, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "cancelRestrictions",
            value: request.cancelRestrictions,
            schema: s.optional(s.lazy(() => cancelRestrictionsSchema)),
          },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          { name: "quantity", value: request.quantity, schema: s.optional(s.number()) },
          { name: "quoteOrderQty", value: request.quoteOrderQty, schema: s.optional(s.number()) },
          { name: "price", value: request.price, schema: s.optional(s.number()) },
          {
            name: "cancelNewClientOrderId",
            value: request.cancelNewClientOrderId,
            schema: s.optional(s.string()),
          },
          {
            name: "cancelOrigClientOrderId",
            value: request.cancelOrigClientOrderId,
            schema: s.optional(s.string()),
          },
          { name: "cancelOrderId", value: request.cancelOrderId, schema: s.optional(s.number()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.number()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.number()) },
          { name: "stopPrice", value: request.stopPrice, schema: s.optional(s.number()) },
          { name: "trailingDelta", value: request.trailingDelta, schema: s.optional(s.number()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.number()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderCancelReplaceResponseSchema },
        errorFactory: TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError,
      },
      options,
    );
  }

  currentOpenOrdersUserData(
    request: TradeApi.CurrentOpenOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderDetails[], TradeApi.CurrentOpenOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/openOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => orderDetailsSchema)) },
        errorFactory: TradeApi.CurrentOpenOrdersUserDataError,
      },
      options,
    );
  }

  newOrderTrade(
    request: TradeApi.NewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderResponse, TradeApi.NewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/api/v3/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          { name: "quantity", value: request.quantity, schema: s.optional(s.number()) },
          { name: "quoteOrderQty", value: request.quoteOrderQty, schema: s.optional(s.number()) },
          { name: "price", value: request.price, schema: s.optional(s.number()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.number()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.number()) },
          { name: "stopPrice", value: request.stopPrice, schema: s.optional(s.number()) },
          { name: "trailingDelta", value: request.trailingDelta, schema: s.optional(s.number()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.number()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderResponseSchema },
        errorFactory: TradeApi.NewOrderTradeError,
      },
      options,
    );
  }

  newOrderListOtoTrade(
    request: TradeApi.NewOrderListOtoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderListOtoResponse, TradeApi.NewOrderListOtoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/api/v3/orderList/oto"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "workingType", value: request.workingType, schema: workingTypeSchema },
          { name: "workingSide", value: request.workingSide, schema: workingSideSchema },
          { name: "workingPrice", value: request.workingPrice, schema: s.number() },
          { name: "workingQuantity", value: request.workingQuantity, schema: s.number() },
          { name: "workingIcebergQty", value: request.workingIcebergQty, schema: s.number() },
          { name: "pendingType", value: request.pendingType, schema: pendingTypeSchema },
          { name: "pendingSide", value: request.pendingSide, schema: pendingSideSchema },
          { name: "pendingQuantity", value: request.pendingQuantity, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          {
            name: "workingClientOrderId",
            value: request.workingClientOrderId,
            schema: s.optional(s.string()),
          },
          {
            name: "workingTimeInForce",
            value: request.workingTimeInForce,
            schema: s.optional(s.lazy(() => workingTimeInForceSchema)),
          },
          { name: "workingStrategyId", value: request.workingStrategyId, schema: s.optional(s.number()) },
          { name: "workingStrategyType", value: request.workingStrategyType, schema: s.optional(s.number()) },
          {
            name: "pendingClientOrderId",
            value: request.pendingClientOrderId,
            schema: s.optional(s.string()),
          },
          { name: "pendingPrice", value: request.pendingPrice, schema: s.optional(s.number()) },
          { name: "pendingStopPrice", value: request.pendingStopPrice, schema: s.optional(s.number()) },
          {
            name: "pendingTrailingDelta",
            value: request.pendingTrailingDelta,
            schema: s.optional(s.number()),
          },
          { name: "pendingIcebergQty", value: request.pendingIcebergQty, schema: s.optional(s.number()) },
          {
            name: "pendingTimeInForce",
            value: request.pendingTimeInForce,
            schema: s.optional(s.lazy(() => pendingTimeInForceSchema)),
          },
          { name: "pendingStrategyId", value: request.pendingStrategyId, schema: s.optional(s.number()) },
          { name: "pendingStrategyType", value: request.pendingStrategyType, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderListOtoResponseSchema },
        errorFactory: TradeApi.NewOrderListOtoTradeError,
      },
      options,
    );
  }

  newOrderListOtocoTrade(
    request: TradeApi.NewOrderListOtocoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderListOtocoResponse, TradeApi.NewOrderListOtocoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/api/v3/orderList/otoco"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "workingType", value: request.workingType, schema: workingTypeSchema },
          { name: "workingSide", value: request.workingSide, schema: workingSideSchema },
          { name: "workingPrice", value: request.workingPrice, schema: s.number() },
          { name: "workingQuantity", value: request.workingQuantity, schema: s.number() },
          { name: "workingIcebergQty", value: request.workingIcebergQty, schema: s.number() },
          { name: "pendingSide", value: request.pendingSide, schema: pendingSideSchema },
          { name: "pendingQuantity", value: request.pendingQuantity, schema: s.number() },
          { name: "pendingAboveType", value: request.pendingAboveType, schema: pendingAboveTypeSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          {
            name: "workingClientOrderId",
            value: request.workingClientOrderId,
            schema: s.optional(s.string()),
          },
          {
            name: "workingTimeInForce",
            value: request.workingTimeInForce,
            schema: s.optional(s.lazy(() => workingTimeInForceSchema)),
          },
          { name: "workingStrategyId", value: request.workingStrategyId, schema: s.optional(s.number()) },
          { name: "workingStrategyType", value: request.workingStrategyType, schema: s.optional(s.number()) },
          {
            name: "pendingAboveClientOrderId",
            value: request.pendingAboveClientOrderId,
            schema: s.optional(s.string()),
          },
          { name: "pendingAbovePrice", value: request.pendingAbovePrice, schema: s.optional(s.number()) },
          {
            name: "pendingAboveStopPrice",
            value: request.pendingAboveStopPrice,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingAboveTrailingDelta",
            value: request.pendingAboveTrailingDelta,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingAboveIcebergQty",
            value: request.pendingAboveIcebergQty,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingAboveTimeInForce",
            value: request.pendingAboveTimeInForce,
            schema: s.optional(s.lazy(() => pendingAboveTimeInForceSchema)),
          },
          {
            name: "pendingAboveStrategyId",
            value: request.pendingAboveStrategyId,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingAboveStrategyType",
            value: request.pendingAboveStrategyType,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingBelowType",
            value: request.pendingBelowType,
            schema: s.optional(s.lazy(() => pendingBelowTypeSchema)),
          },
          {
            name: "pendingBelowClientOrderId",
            value: request.pendingBelowClientOrderId,
            schema: s.optional(s.string()),
          },
          { name: "pendingBelowPrice", value: request.pendingBelowPrice, schema: s.optional(s.number()) },
          {
            name: "pendingBelowStopPrice",
            value: request.pendingBelowStopPrice,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingBelowTrailingDelta",
            value: request.pendingBelowTrailingDelta,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingBelowIcebergQty",
            value: request.pendingBelowIcebergQty,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingBelowTimeInForce",
            value: request.pendingBelowTimeInForce,
            schema: s.optional(s.lazy(() => pendingBelowTimeInForceSchema)),
          },
          {
            name: "pendingBelowStrategyId",
            value: request.pendingBelowStrategyId,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingBelowStrategyType",
            value: request.pendingBelowStrategyType,
            schema: s.optional(s.number()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderListOtocoResponseSchema },
        errorFactory: TradeApi.NewOrderListOtocoTradeError,
      },
      options,
    );
  }

  newOrderListOcoTrade(
    request: TradeApi.NewOrderListOcoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderListOcoResponse, TradeApi.NewOrderListOcoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/api/v3/orderList/oco"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.number() },
          { name: "aboveType", value: request.aboveType, schema: s.string() },
          { name: "belowType", value: request.belowType, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          { name: "aboveClientOrderId", value: request.aboveClientOrderId, schema: s.optional(s.string()) },
          { name: "aboveIcebergQty", value: request.aboveIcebergQty, schema: s.optional(s.number()) },
          { name: "abovePrice", value: request.abovePrice, schema: s.optional(s.number()) },
          { name: "aboveStopPrice", value: request.aboveStopPrice, schema: s.optional(s.number()) },
          { name: "aboveTrailingDelta", value: request.aboveTrailingDelta, schema: s.optional(s.number()) },
          {
            name: "aboveTimeInForce",
            value: request.aboveTimeInForce,
            schema: s.optional(s.lazy(() => aboveTimeInForceSchema)),
          },
          { name: "aboveStrategyId", value: request.aboveStrategyId, schema: s.optional(s.number()) },
          { name: "aboveStrategyType", value: request.aboveStrategyType, schema: s.optional(s.number()) },
          { name: "belowClientOrderId", value: request.belowClientOrderId, schema: s.optional(s.string()) },
          { name: "belowIcebergQty", value: request.belowIcebergQty, schema: s.optional(s.number()) },
          { name: "belowPrice", value: request.belowPrice, schema: s.optional(s.number()) },
          { name: "belowStopPrice", value: request.belowStopPrice, schema: s.optional(s.number()) },
          { name: "belowTrailingDelta", value: request.belowTrailingDelta, schema: s.optional(s.number()) },
          {
            name: "belowTimeInForce",
            value: request.belowTimeInForce,
            schema: s.optional(s.lazy(() => belowTimeInForceSchema)),
          },
          { name: "belowStrategyId", value: request.belowStrategyId, schema: s.optional(s.number()) },
          { name: "belowStrategyType", value: request.belowStrategyType, schema: s.optional(s.number()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderListOcoResponseSchema },
        errorFactory: TradeApi.NewOrderListOcoTradeError,
      },
      options,
    );
  }

  newOrderUsingSorTrade(
    request: TradeApi.NewOrderUsingSorTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3SorOrderResponse, TradeApi.NewOrderUsingSorTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/api/v3/sor/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "quantity", value: request.quantity, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          { name: "price", value: request.price, schema: s.optional(s.number()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.number()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.number()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.number()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3SorOrderResponseSchema },
        errorFactory: TradeApi.NewOrderUsingSorTradeError,
      },
      options,
    );
  }

  queryAllocationsUserData(
    request: TradeApi.QueryAllocationsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3MyAllocationsResponse[], TradeApi.QueryAllocationsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/myAllocations"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "fromAllocationId", value: request.fromAllocationId, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3MyAllocationsResponseSchema)) },
        errorFactory: TradeApi.QueryAllocationsUserDataError,
      },
      options,
    );
  }

  queryCommissionRatesUserData(
    request: TradeApi.QueryCommissionRatesUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3AccountCommissionResponse, TradeApi.QueryCommissionRatesUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/account/commission"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3AccountCommissionResponseSchema },
        errorFactory: TradeApi.QueryCommissionRatesUserDataError,
      },
      options,
    );
  }

  queryCurrentOrderCountUsageTrade(
    request: TradeApi.QueryCurrentOrderCountUsageTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3RateLimitOrderResponse[], TradeApi.QueryCurrentOrderCountUsageTradeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/rateLimit/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3RateLimitOrderResponseSchema)) },
        errorFactory: TradeApi.QueryCurrentOrderCountUsageTradeError,
      },
      options,
    );
  }

  queryOcoUserData(
    request: TradeApi.QueryOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderListResponse, TradeApi.QueryOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/orderList"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderListId", value: request.orderListId, schema: s.optional(s.number()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderListResponseSchema },
        errorFactory: TradeApi.QueryOcoUserDataError,
      },
      options,
    );
  }

  queryOpenOcoUserData(
    request: TradeApi.QueryOpenOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OpenOrderListResponse[], TradeApi.QueryOpenOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/openOrderList"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3OpenOrderListResponseSchema)) },
        errorFactory: TradeApi.QueryOpenOcoUserDataError,
      },
      options,
    );
  }

  queryOrderUserData(
    request: TradeApi.QueryOrderUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderDetails, TradeApi.QueryOrderUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderDetailsSchema },
        errorFactory: TradeApi.QueryOrderUserDataError,
      },
      options,
    );
  }

  queryPreventedMatches(
    request: TradeApi.QueryPreventedMatchesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3MyPreventedMatchesResponse[], TradeApi.QueryPreventedMatchesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/myPreventedMatches"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "preventedMatchId", value: request.preventedMatchId, schema: s.optional(s.number()) },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          {
            name: "fromPreventedMatchId",
            value: request.fromPreventedMatchId,
            schema: s.optional(s.number()),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3MyPreventedMatchesResponseSchema)) },
        errorFactory: TradeApi.QueryPreventedMatchesError,
      },
      options,
    );
  }

  queryAllOcoUserData(
    request: TradeApi.QueryAllOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3AllOrderListResponse[], TradeApi.QueryAllOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/allOrderList"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromId", value: request.fromId, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3AllOrderListResponseSchema)) },
        errorFactory: TradeApi.QueryAllOcoUserDataError,
      },
      options,
    );
  }

  testNewOrderTrade(
    request: TradeApi.TestNewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, TradeApi.TestNewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/api/v3/order/test"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          { name: "quantity", value: request.quantity, schema: s.optional(s.number()) },
          { name: "quoteOrderQty", value: request.quoteOrderQty, schema: s.optional(s.number()) },
          { name: "price", value: request.price, schema: s.optional(s.number()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.number()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.number()) },
          { name: "stopPrice", value: request.stopPrice, schema: s.optional(s.number()) },
          { name: "trailingDelta", value: request.trailingDelta, schema: s.optional(s.number()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.number()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
          {
            name: "computeCommissionRates",
            value: request.computeCommissionRates,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: TradeApi.TestNewOrderTradeError,
      },
      options,
    );
  }

  testNewOrderUsingSorTrade(
    request: TradeApi.TestNewOrderUsingSorTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, TradeApi.TestNewOrderUsingSorTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/api/v3/sor/order/test"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "quantity", value: request.quantity, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          { name: "price", value: request.price, schema: s.optional(s.number()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.number()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.number()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.number()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          {
            name: "computeCommissionRates",
            value: request.computeCommissionRates,
            schema: s.optional(s.boolean()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: TradeApi.TestNewOrderUsingSorTradeError,
      },
      options,
    );
  }
}

export namespace TradeApi {
  export type AccountInformationUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class AccountInformationUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AccountInformationUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AccountTradeListUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class AccountTradeListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AccountTradeListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AllOrdersUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class AllOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AllOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelOcoTradeRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    orderListId?: number;
    listClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
  };

  export class CancelOcoTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CancelOcoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelOrderTradeRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    orderId?: number;
    origClientOrderId?: string;
    newClientOrderId?: string;
    cancelRestrictions?: CancelRestrictions;
    recvWindow?: number;
  };

  export class CancelOrderTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CancelOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelAllOpenOrdersOnASymbolTradeRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CancelAllOpenOrdersOnASymbolTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CancelAllOpenOrdersOnASymbolTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelAnExistingOrderAndSendANewOrderTradeRequest = {
    symbol: string;
    side: Side;
    type: Type1;
    cancelReplaceMode: string;
    timestamp: number;
    signature: string;
    cancelRestrictions?: CancelRestrictions;
    timeInForce?: TimeInForce;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    cancelNewClientOrderId?: string;
    cancelOrigClientOrderId?: string;
    cancelOrderId?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
  };

  export class CancelAnExistingOrderAndSendANewOrderTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CancelAnExistingOrderAndSendANewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CurrentOpenOrdersUserDataRequest = {
    timestamp: number;
    signature: string;
    symbol?: string;
    recvWindow?: number;
  };

  export class CurrentOpenOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CurrentOpenOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderTradeRequest = {
    symbol: string;
    side: Side;
    type: Type1;
    timestamp: number;
    signature: string;
    timeInForce?: TimeInForce;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
  };

  export class NewOrderTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<NewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderListOtoTradeRequest = {
    symbol: string;
    workingType: WorkingType;
    workingSide: WorkingSide;
    workingPrice: number;
    workingQuantity: number;
    workingIcebergQty: number;
    pendingType: PendingType;
    pendingSide: PendingSide;
    pendingQuantity: number;
    timestamp: number;
    signature: string;
    listClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    workingClientOrderId?: string;
    workingTimeInForce?: WorkingTimeInForce;
    workingStrategyId?: number;
    workingStrategyType?: number;
    pendingClientOrderId?: string;
    pendingPrice?: number;
    pendingStopPrice?: number;
    pendingTrailingDelta?: number;
    pendingIcebergQty?: number;
    pendingTimeInForce?: PendingTimeInForce;
    pendingStrategyId?: number;
    pendingStrategyType?: number;
  };

  export class NewOrderListOtoTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<NewOrderListOtoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderListOtocoTradeRequest = {
    symbol: string;
    workingType: WorkingType;
    workingSide: WorkingSide;
    workingPrice: number;
    workingQuantity: number;
    workingIcebergQty: number;
    pendingSide: PendingSide;
    pendingQuantity: number;
    pendingAboveType: PendingAboveType;
    timestamp: number;
    signature: string;
    listClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    workingClientOrderId?: string;
    workingTimeInForce?: WorkingTimeInForce;
    workingStrategyId?: number;
    workingStrategyType?: number;
    pendingAboveClientOrderId?: string;
    pendingAbovePrice?: number;
    pendingAboveStopPrice?: number;
    pendingAboveTrailingDelta?: number;
    pendingAboveIcebergQty?: number;
    pendingAboveTimeInForce?: PendingAboveTimeInForce;
    pendingAboveStrategyId?: number;
    pendingAboveStrategyType?: number;
    pendingBelowType?: PendingBelowType;
    pendingBelowClientOrderId?: string;
    pendingBelowPrice?: number;
    pendingBelowStopPrice?: number;
    pendingBelowTrailingDelta?: number;
    pendingBelowIcebergQty?: number;
    pendingBelowTimeInForce?: PendingBelowTimeInForce;
    pendingBelowStrategyId?: number;
    pendingBelowStrategyType?: number;
    recvWindow?: number;
  };

  export class NewOrderListOtocoTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<NewOrderListOtocoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderListOcoTradeRequest = {
    symbol: string;
    side: Side;
    quantity: number;
    aboveType: string;
    belowType: string;
    timestamp: number;
    signature: string;
    listClientOrderId?: string;
    aboveClientOrderId?: string;
    aboveIcebergQty?: number;
    abovePrice?: number;
    aboveStopPrice?: number;
    aboveTrailingDelta?: number;
    aboveTimeInForce?: AboveTimeInForce;
    aboveStrategyId?: number;
    aboveStrategyType?: number;
    belowClientOrderId?: string;
    belowIcebergQty?: number;
    belowPrice?: number;
    belowStopPrice?: number;
    belowTrailingDelta?: number;
    belowTimeInForce?: BelowTimeInForce;
    belowStrategyId?: number;
    belowStrategyType?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
  };

  export class NewOrderListOcoTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<NewOrderListOcoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderUsingSorTradeRequest = {
    symbol: string;
    side: Side;
    type: Type1;
    quantity: number;
    timestamp: number;
    signature: string;
    timeInForce?: TimeInForce;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
  };

  export class NewOrderUsingSorTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<NewOrderUsingSorTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryAllocationsUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    fromAllocationId?: number;
    limit?: number;
    orderId?: number;
    recvWindow?: number;
  };

  export class QueryAllocationsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryAllocationsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCommissionRatesUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
  };

  export class QueryCommissionRatesUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryCommissionRatesUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCurrentOrderCountUsageTradeRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryCurrentOrderCountUsageTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryCurrentOrderCountUsageTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOcoUserDataRequest = {
    timestamp: number;
    signature: string;
    orderListId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
  };

  export class QueryOcoUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOpenOcoUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryOpenOcoUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryOpenOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOrderUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    orderId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
  };

  export class QueryOrderUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryOrderUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryPreventedMatchesRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    preventedMatchId?: number;
    orderId?: number;
    fromPreventedMatchId?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QueryPreventedMatchesError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryPreventedMatchesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryAllOcoUserDataRequest = {
    timestamp: number;
    signature: string;
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QueryAllOcoUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryAllOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TestNewOrderTradeRequest = {
    symbol: string;
    side: Side;
    type: Type1;
    timestamp: number;
    signature: string;
    timeInForce?: TimeInForce;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    recvWindow?: number;
    computeCommissionRates?: boolean;
  };

  export class TestNewOrderTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<TestNewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TestNewOrderUsingSorTradeRequest = {
    symbol: string;
    side: Side;
    type: Type1;
    quantity: number;
    timestamp: number;
    signature: string;
    timeInForce?: TimeInForce;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    computeCommissionRates?: boolean;
    recvWindow?: number;
  };

  export class TestNewOrderUsingSorTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<TestNewOrderUsingSorTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
