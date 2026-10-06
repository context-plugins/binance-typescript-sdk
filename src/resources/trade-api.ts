import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Account/Trade
 */
export class TradeApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Account Information (USER_DATA)
   *
   * @remarks
   * Get current account information.
   *
   * Weight(IP): 20
   *
   * @returns Account details
   *
   * @throws {@link TradeApi.AccountInformationUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountInformationUserData(
    request: TradeApi.AccountInformationUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<Account, TradeApi.AccountInformationUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountSchema },
        errorFactory: TradeApi.AccountInformationUserDataError,
      },
      options,
    );
  }

  /**
   * Account Trade List (USER_DATA)
   *
   * @remarks
   * Get trades for a specific account and symbol.
   *
   * If `fromId` is set, it will get id >= that `fromId`. Otherwise most recent orders are returned.
   *
   * The time between startTime and endTime can't be longer than 24 hours. These are the supported
   * combinations of all parameters:
   *
   * symbol
   *
   * symbol + orderId
   *
   * symbol + startTime
   *
   * symbol + endTime
   *
   * symbol + fromId
   *
   * symbol + startTime + endTime
   *
   * symbol+ orderId + fromId
   *
   * Weight(IP): 20
   *
   * @returns List of trades
   *
   * @throws {@link TradeApi.AccountTradeListUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountTradeListUserData(
    request: TradeApi.AccountTradeListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MyTrade[], TradeApi.AccountTradeListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/myTrades"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => myTradeSchema)) },
        errorFactory: TradeApi.AccountTradeListUserDataError,
      },
      options,
    );
  }

  /**
   * All Orders (USER_DATA)
   *
   * @remarks
   * Get all account orders; active, canceled, or filled..
   *
   * - If `orderId` is set, it will get orders >= that `orderId`. Otherwise most recent orders are
   *   returned.
   * - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not
   *   available at this time.
   * - If `startTime` and/or `endTime` provided, `orderId` is not required
   *
   * Weight(IP): 20
   *
   * @returns Current open orders
   *
   * @throws {@link TradeApi.AllOrdersUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  allOrdersUserData(
    request: TradeApi.AllOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderDetails[], TradeApi.AllOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/allOrders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => orderDetailsSchema)) },
        errorFactory: TradeApi.AllOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Cancel OCO (TRADE)
   *
   * @remarks
   * Cancel an entire Order List
   *
   * Canceling an individual leg will cancel the entire OCO
   *
   * Weight(IP): 1
   *
   * @returns Report on deleted OCO
   *
   * @throws {@link TradeApi.CancelOcoTradeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelOcoTrade(
    request: TradeApi.CancelOcoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<OcoOrder, TradeApi.CancelOcoTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/orderList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderListId", value: request.orderListId, schema: s.optional(s.int()) },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ocoOrderSchema },
        errorFactory: TradeApi.CancelOcoTradeError,
      },
      options,
    );
  }

  /**
   * Cancel Order (TRADE)
   *
   * @remarks
   * Cancel an active order.
   *
   * Either `orderId` or `origClientOrderId` must be sent.
   *
   * Weight(IP): 1
   *
   * @returns Cancelled order
   *
   * @throws {@link TradeApi.CancelOrderTradeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelOrderTrade(
    request: TradeApi.CancelOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<Order, TradeApi.CancelOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          {
            name: "cancelRestrictions",
            value: request.cancelRestrictions,
            schema: s.optional(s.lazy(() => cancelRestrictionsSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderSchema },
        errorFactory: TradeApi.CancelOrderTradeError,
      },
      options,
    );
  }

  /**
   * Cancel all Open Orders on a Symbol (TRADE)
   *
   * @remarks
   * Cancels all active orders on a symbol. This includes OCO orders.
   *
   * Weight(IP): 1
   *
   * @returns Cancelled orders
   *
   * @throws {@link TradeApi.CancelAllOpenOrdersOnASymbolTradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelAllOpenOrdersOnASymbolTrade(
    request: TradeApi.CancelAllOpenOrdersOnASymbolTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OpenOrdersResponse[], TradeApi.CancelAllOpenOrdersOnASymbolTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/openOrders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3OpenOrdersResponseSchema)) },
        errorFactory: TradeApi.CancelAllOpenOrdersOnASymbolTradeError,
      },
      options,
    );
  }

  /**
   * Cancel an Existing Order and Send a New Order (Trade)
   *
   * @remarks
   * Cancels an existing order and places a new order on the same symbol.
   *
   * Filters and Order Count are evaluated before the processing of the cancellation and order
   * placement occurs.
   *
   * A new order that was not attempted (i.e. when newOrderResult: NOT_ATTEMPTED), will still
   * increase the order count by 1.
   *
   * Weight(IP): 1
   *
   * @returns Operation details
   *
   * @throws {@link TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelAnExistingOrderAndSendANewOrderTrade(
    request: TradeApi.CancelAnExistingOrderAndSendANewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderCancelReplaceResponse, TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/order/cancelReplace"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "cancelReplaceMode", value: request.cancelReplaceMode, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
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
          { name: "quantity", value: request.quantity, schema: s.optional(s.float64()) },
          { name: "quoteOrderQty", value: request.quoteOrderQty, schema: s.optional(s.float64()) },
          { name: "price", value: request.price, schema: s.optional(s.float64()) },
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
          { name: "cancelOrderId", value: request.cancelOrderId, schema: s.optional(s.int()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.int()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.int()) },
          { name: "stopPrice", value: request.stopPrice, schema: s.optional(s.float64()) },
          { name: "trailingDelta", value: request.trailingDelta, schema: s.optional(s.float64()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.float64()) },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderCancelReplaceResponseSchema },
        errorFactory: TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError,
      },
      options,
    );
  }

  /**
   * Current Open Orders (USER_DATA)
   *
   * @remarks
   * Get all open orders on a symbol. Careful when accessing this with no symbol.
   *
   * Weight(IP):
   * - `6` for a single symbol;
   * - `80` when the symbol parameter is omitted;
   *
   * @returns Current open orders
   *
   * @throws {@link TradeApi.CurrentOpenOrdersUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  currentOpenOrdersUserData(
    request: TradeApi.CurrentOpenOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderDetails[], TradeApi.CurrentOpenOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/openOrders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => orderDetailsSchema)) },
        errorFactory: TradeApi.CurrentOpenOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * New Order (TRADE)
   *
   * @remarks
   * Send in a new order.
   *
   * - `LIMIT_MAKER` are `LIMIT` orders that will be rejected if they would immediately match and
   *   trade as a taker.
   * - `STOP_LOSS` and `TAKE_PROFIT` will execute a `MARKET` order when the `stopPrice` is reached.
   * - Any `LIMIT` or `LIMIT_MAKER` type order can be made an iceberg order by sending an
   *   `icebergQty`.
   * - Any order with an `icebergQty` MUST have `timeInForce` set to `GTC`.
   * - `MARKET` orders using `quantity` specifies how much a user wants to buy or sell based on the
   *   market price.
   * - `MARKET` orders using `quoteOrderQty` specifies the amount the user wants to spend (when
   *   buying) or receive (when selling) of the quote asset; the correct quantity will be determined
   *   based on the market liquidity and `quoteOrderQty`.
   * - `MARKET` orders using `quoteOrderQty` will not break `LOT_SIZE` filter rules; the order will
   *   execute a quantity that will have the notional value as close as possible to `quoteOrderQty`.
   * - same `newClientOrderId` can be accepted only when the previous one is filled, otherwise the
   *   order will be rejected.
   *
   * Trigger order price rules against market price for both `MARKET` and `LIMIT` versions:
   *
   * - Price above market price: `STOP_LOSS` `BUY`, `TAKE_PROFIT` `SELL`
   * - Price below market price: `STOP_LOSS` `SELL`, `TAKE_PROFIT` `BUY`
   *
   *
   * Weight(IP): 1
   *
   * @returns Order result
   *
   * @throws {@link TradeApi.NewOrderTradeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  newOrderTrade(
    request: TradeApi.NewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderResponse, TradeApi.NewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          { name: "quantity", value: request.quantity, schema: s.optional(s.float64()) },
          { name: "quoteOrderQty", value: request.quoteOrderQty, schema: s.optional(s.float64()) },
          { name: "price", value: request.price, schema: s.optional(s.float64()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.int()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.int()) },
          { name: "stopPrice", value: request.stopPrice, schema: s.optional(s.float64()) },
          { name: "trailingDelta", value: request.trailingDelta, schema: s.optional(s.float64()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.float64()) },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderResponseSchema },
        errorFactory: TradeApi.NewOrderTradeError,
      },
      options,
    );
  }

  /**
   * New Order List - OTO (TRADE)
   *
   * @remarks
   * Places an `OTO`.
   * - An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders.
   * - The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially,
   *   only the working order goes on the order book.
   * - The second order is called the pending order. It can be any order type except for `MARKET`
   *   orders using parameter `quoteOrderQty`. The pending order is only placed on the order book
   *   when the working order gets fully filled.
   * - If either the working order or the pending order is cancelled individually, the other order
   *   in the order list will also be canceled or expired.
   * - When the order list is placed, if the working order gets immediately fully filled, the
   *   placement response will show the working order as `FILLED` but the pending order will still
   *   appear as `PENDING_NEW`. You need to query the status of the pending order again to see its
   *   updated status.
   * - OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and
   *   `MAX_NUM_ORDERS` filter.
   *
   * Weight: 1
   *
   * @returns New OTO details
   *
   * @throws {@link TradeApi.NewOrderListOtoTradeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  newOrderListOtoTrade(
    request: TradeApi.NewOrderListOtoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderListOtoResponse, TradeApi.NewOrderListOtoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/orderList/oto"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "workingType", value: request.workingType, schema: workingTypeSchema },
          { name: "workingSide", value: request.workingSide, schema: workingSideSchema },
          { name: "workingPrice", value: request.workingPrice, schema: s.float64() },
          { name: "workingQuantity", value: request.workingQuantity, schema: s.float64() },
          { name: "workingIcebergQty", value: request.workingIcebergQty, schema: s.float64() },
          { name: "pendingType", value: request.pendingType, schema: pendingTypeSchema },
          { name: "pendingSide", value: request.pendingSide, schema: pendingSideSchema },
          { name: "pendingQuantity", value: request.pendingQuantity, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
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
          { name: "workingStrategyId", value: request.workingStrategyId, schema: s.optional(s.float64()) },
          { name: "workingStrategyType", value: request.workingStrategyType, schema: s.optional(s.int()) },
          {
            name: "pendingClientOrderId",
            value: request.pendingClientOrderId,
            schema: s.optional(s.string()),
          },
          { name: "pendingPrice", value: request.pendingPrice, schema: s.optional(s.float64()) },
          { name: "pendingStopPrice", value: request.pendingStopPrice, schema: s.optional(s.float64()) },
          {
            name: "pendingTrailingDelta",
            value: request.pendingTrailingDelta,
            schema: s.optional(s.float64()),
          },
          { name: "pendingIcebergQty", value: request.pendingIcebergQty, schema: s.optional(s.float64()) },
          {
            name: "pendingTimeInForce",
            value: request.pendingTimeInForce,
            schema: s.optional(s.lazy(() => pendingTimeInForceSchema)),
          },
          { name: "pendingStrategyId", value: request.pendingStrategyId, schema: s.optional(s.float64()) },
          { name: "pendingStrategyType", value: request.pendingStrategyType, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderListOtoResponseSchema },
        errorFactory: TradeApi.NewOrderListOtoTradeError,
      },
      options,
    );
  }

  /**
   * New Order List - OTOCO (TRADE)
   *
   * @remarks
   * Place an `OTOCO`.
   * - An `OTOCO` (One-Triggers-One-Cancels-the-Other) is an order list comprised of 3 orders.
   * - The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially,
   *   only the working order goes on the order book.
   *   - The behavior of the working order is the same as the `OTO`.
   * - `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The
   *   pending orders are only placed on the order book when the working order gets fully filled.
   *   - The rules of the pending above and pending below follow the same rules as the Order List
   *     `OCO`.
   * - OTOCOs add 3 orders against the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter, and
   *   `MAX_NUM_ORDERS` filter.
   *
   * Weight: 1
   *
   * @returns New OTOCO details
   *
   * @throws {@link TradeApi.NewOrderListOtocoTradeError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  newOrderListOtocoTrade(
    request: TradeApi.NewOrderListOtocoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderListOtocoResponse, TradeApi.NewOrderListOtocoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/orderList/otoco"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "workingType", value: request.workingType, schema: workingTypeSchema },
          { name: "workingSide", value: request.workingSide, schema: workingSideSchema },
          { name: "workingPrice", value: request.workingPrice, schema: s.float64() },
          { name: "workingQuantity", value: request.workingQuantity, schema: s.float64() },
          { name: "workingIcebergQty", value: request.workingIcebergQty, schema: s.float64() },
          { name: "pendingSide", value: request.pendingSide, schema: pendingSideSchema },
          { name: "pendingQuantity", value: request.pendingQuantity, schema: s.float64() },
          { name: "pendingAboveType", value: request.pendingAboveType, schema: pendingAboveTypeSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
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
          { name: "workingStrategyId", value: request.workingStrategyId, schema: s.optional(s.float64()) },
          { name: "workingStrategyType", value: request.workingStrategyType, schema: s.optional(s.int()) },
          {
            name: "pendingAboveClientOrderId",
            value: request.pendingAboveClientOrderId,
            schema: s.optional(s.string()),
          },
          { name: "pendingAbovePrice", value: request.pendingAbovePrice, schema: s.optional(s.float64()) },
          {
            name: "pendingAboveStopPrice",
            value: request.pendingAboveStopPrice,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingAboveTrailingDelta",
            value: request.pendingAboveTrailingDelta,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingAboveIcebergQty",
            value: request.pendingAboveIcebergQty,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingAboveTimeInForce",
            value: request.pendingAboveTimeInForce,
            schema: s.optional(s.lazy(() => pendingAboveTimeInForceSchema)),
          },
          {
            name: "pendingAboveStrategyId",
            value: request.pendingAboveStrategyId,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingAboveStrategyType",
            value: request.pendingAboveStrategyType,
            schema: s.optional(s.int()),
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
          { name: "pendingBelowPrice", value: request.pendingBelowPrice, schema: s.optional(s.float64()) },
          {
            name: "pendingBelowStopPrice",
            value: request.pendingBelowStopPrice,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingBelowTrailingDelta",
            value: request.pendingBelowTrailingDelta,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingBelowIcebergQty",
            value: request.pendingBelowIcebergQty,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingBelowTimeInForce",
            value: request.pendingBelowTimeInForce,
            schema: s.optional(s.lazy(() => pendingBelowTimeInForceSchema)),
          },
          {
            name: "pendingBelowStrategyId",
            value: request.pendingBelowStrategyId,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingBelowStrategyType",
            value: request.pendingBelowStrategyType,
            schema: s.optional(s.int()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderListOtocoResponseSchema },
        errorFactory: TradeApi.NewOrderListOtocoTradeError,
      },
      options,
    );
  }

  /**
   * New Order list - OCO (TRADE)
   *
   * @remarks
   * Send in an one-cancels-the-other (OCO) pair, where activation of one order immediately cancels
   * the other.
   *
   * - An `OCO` has 2 orders called the above order and below order.
   * - One of the orders must be a `LIMIT_MAKER` order and the other must be `STOP_LOSS`
   *   or`STOP_LOSS_LIMIT` order.
   * - Price restrictions:
   *     - If the `OCO` is on the `SELL` side: `LIMIT_MAKER` price > Last Traded Price > stopPrice
   *     - If the `OCO` is on the `BUY` side: `LIMIT_MAKER` price < Last Traded Price < stopPrice
   * - OCOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_ORDERS` filter, and the
   *   `MAX_NUM_ORDERS` filter.
   *
   * Weight(IP): 1
   *
   * @returns New OCO details
   *
   * @throws {@link TradeApi.NewOrderListOcoTradeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  newOrderListOcoTrade(
    request: TradeApi.NewOrderListOcoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderListOcoResponse, TradeApi.NewOrderListOcoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/orderList/oco"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.float64() },
          { name: "aboveType", value: request.aboveType, schema: s.string() },
          { name: "belowType", value: request.belowType, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          { name: "aboveClientOrderId", value: request.aboveClientOrderId, schema: s.optional(s.string()) },
          { name: "aboveIcebergQty", value: request.aboveIcebergQty, schema: s.optional(s.float64()) },
          { name: "abovePrice", value: request.abovePrice, schema: s.optional(s.float64()) },
          { name: "aboveStopPrice", value: request.aboveStopPrice, schema: s.optional(s.float64()) },
          { name: "aboveTrailingDelta", value: request.aboveTrailingDelta, schema: s.optional(s.float64()) },
          {
            name: "aboveTimeInForce",
            value: request.aboveTimeInForce,
            schema: s.optional(s.lazy(() => aboveTimeInForceSchema)),
          },
          { name: "aboveStrategyId", value: request.aboveStrategyId, schema: s.optional(s.float64()) },
          { name: "aboveStrategyType", value: request.aboveStrategyType, schema: s.optional(s.int()) },
          { name: "belowClientOrderId", value: request.belowClientOrderId, schema: s.optional(s.string()) },
          { name: "belowIcebergQty", value: request.belowIcebergQty, schema: s.optional(s.float64()) },
          { name: "belowPrice", value: request.belowPrice, schema: s.optional(s.float64()) },
          { name: "belowStopPrice", value: request.belowStopPrice, schema: s.optional(s.float64()) },
          { name: "belowTrailingDelta", value: request.belowTrailingDelta, schema: s.optional(s.float64()) },
          {
            name: "belowTimeInForce",
            value: request.belowTimeInForce,
            schema: s.optional(s.lazy(() => belowTimeInForceSchema)),
          },
          { name: "belowStrategyId", value: request.belowStrategyId, schema: s.optional(s.float64()) },
          { name: "belowStrategyType", value: request.belowStrategyType, schema: s.optional(s.int()) },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderListOcoResponseSchema },
        errorFactory: TradeApi.NewOrderListOcoTradeError,
      },
      options,
    );
  }

  /**
   * New order using SOR (TRADE)
   *
   * @remarks
   * Weight(IP): 6
   *
   * @returns New order details
   *
   * @throws {@link TradeApi.NewOrderUsingSorTradeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  newOrderUsingSorTrade(
    request: TradeApi.NewOrderUsingSorTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3SorOrderResponse, TradeApi.NewOrderUsingSorTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/sor/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "quantity", value: request.quantity, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          { name: "price", value: request.price, schema: s.optional(s.float64()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.int()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.int()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.float64()) },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3SorOrderResponseSchema },
        errorFactory: TradeApi.NewOrderUsingSorTradeError,
      },
      options,
    );
  }

  /**
   * Query Allocations (USER_DATA)
   *
   * @remarks
   * Retrieves allocations resulting from SOR order placement.
   *
   * Weight: 20
   *
   * Supported parameter combinations: Parameters Response symbol allocations from oldest to newest
   * symbol + startTime oldest allocations since startTime symbol + endTime newest allocations until
   * endTime symbol + startTime + endTime allocations within the time range symbol +
   * fromAllocationId allocations by allocation ID symbol + orderId allocations related to an order
   * starting with oldest symbol + orderId + fromAllocationId allocations related to an order by
   * allocation ID
   *
   * Note: The time between startTime and endTime can't be longer than 24 hours.
   *
   * @returns Allocations resulting from SOR order placement
   *
   * @throws {@link TradeApi.QueryAllocationsUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryAllocationsUserData(
    request: TradeApi.QueryAllocationsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3MyAllocationsResponse[], TradeApi.QueryAllocationsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/myAllocations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "fromAllocationId", value: request.fromAllocationId, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3MyAllocationsResponseSchema)) },
        errorFactory: TradeApi.QueryAllocationsUserDataError,
      },
      options,
    );
  }

  /**
   * Query Commission Rates (USER_DATA)
   *
   * @remarks
   * Get current account commission rates.
   *
   * Weight: 20
   *
   * @returns Current account commission rates.
   *
   * @throws {@link TradeApi.QueryCommissionRatesUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryCommissionRatesUserData(
    request: TradeApi.QueryCommissionRatesUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3AccountCommissionResponse, TradeApi.QueryCommissionRatesUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/account/commission"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3AccountCommissionResponseSchema },
        errorFactory: TradeApi.QueryCommissionRatesUserDataError,
      },
      options,
    );
  }

  /**
   * Query Current Order Count Usage (TRADE)
   *
   * @remarks
   * Displays the user's current order count usage for all intervals.
   *
   * Weight(IP): 40
   *
   * @returns Order rate limits
   *
   * @throws {@link TradeApi.QueryCurrentOrderCountUsageTradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryCurrentOrderCountUsageTrade(
    request: TradeApi.QueryCurrentOrderCountUsageTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3RateLimitOrderResponse[], TradeApi.QueryCurrentOrderCountUsageTradeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/rateLimit/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3RateLimitOrderResponseSchema)) },
        errorFactory: TradeApi.QueryCurrentOrderCountUsageTradeError,
      },
      options,
    );
  }

  /**
   * Query OCO (USER_DATA)
   *
   * @remarks
   * Retrieves a specific OCO based on provided optional parameters
   *
   * Weight(IP): 4
   *
   * @returns OCO details
   *
   * @throws {@link TradeApi.QueryOcoUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryOcoUserData(
    request: TradeApi.QueryOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OrderListResponse, TradeApi.QueryOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/orderList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderListId", value: request.orderListId, schema: s.optional(s.int()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3OrderListResponseSchema },
        errorFactory: TradeApi.QueryOcoUserDataError,
      },
      options,
    );
  }

  /**
   * Query Open OCO (USER_DATA)
   *
   * @remarks
   * Weight(IP): 6
   *
   * @returns List of OCO orders
   *
   * @throws {@link TradeApi.QueryOpenOcoUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryOpenOcoUserData(
    request: TradeApi.QueryOpenOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3OpenOrderListResponse[], TradeApi.QueryOpenOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/openOrderList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3OpenOrderListResponseSchema)) },
        errorFactory: TradeApi.QueryOpenOcoUserDataError,
      },
      options,
    );
  }

  /**
   * Query Order (USER_DATA)
   *
   * @remarks
   * Check an order's status.
   *
   * - Either `orderId` or `origClientOrderId` must be sent.
   * - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not
   *   available at this time.
   *
   * Weight(IP): 4
   *
   * @returns Order details
   *
   * @throws {@link TradeApi.QueryOrderUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryOrderUserData(
    request: TradeApi.QueryOrderUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderDetails, TradeApi.QueryOrderUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderDetailsSchema },
        errorFactory: TradeApi.QueryOrderUserDataError,
      },
      options,
    );
  }

  /**
   * Query Prevented Matches
   *
   * @remarks
   * Displays the list of orders that were expired because of STP.
   *
   * For additional information on what a Prevented match is, as well as Self Trade Prevention
   * (STP), please refer to our STP FAQ page.
   *
   * These are the combinations supported:
   *
   * * symbol + preventedMatchId
   * * symbol + orderId
   * * symbol + orderId + fromPreventedMatchId (limit will default to 500)
   * * symbol + orderId + fromPreventedMatchId + limit
   *
   * Weight(IP):
   *
   * Case Weight If symbol is invalid: 2 Querying by preventedMatchId: 2 Querying by orderId: 20
   *
   * @returns Order list that were expired due to STP
   *
   * @throws {@link TradeApi.QueryPreventedMatchesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryPreventedMatches(
    request: TradeApi.QueryPreventedMatchesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3MyPreventedMatchesResponse[], TradeApi.QueryPreventedMatchesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/myPreventedMatches"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "preventedMatchId", value: request.preventedMatchId, schema: s.optional(s.int()) },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "fromPreventedMatchId", value: request.fromPreventedMatchId, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3MyPreventedMatchesResponseSchema)) },
        errorFactory: TradeApi.QueryPreventedMatchesError,
      },
      options,
    );
  }

  /**
   * Query all OCO (USER_DATA)
   *
   * @remarks
   * Retrieves all OCO based on provided optional parameters
   *
   * Weight(IP): 20
   *
   * @returns List of OCO orders
   *
   * @throws {@link TradeApi.QueryAllOcoUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryAllOcoUserData(
    request: TradeApi.QueryAllOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3AllOrderListResponse[], TradeApi.QueryAllOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/allOrderList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromId", value: request.fromId, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV3AllOrderListResponseSchema)) },
        errorFactory: TradeApi.QueryAllOcoUserDataError,
      },
      options,
    );
  }

  /**
   * Test New Order (TRADE)
   *
   * @remarks
   * Test new order creation and signature/recvWindow long. Creates and validates a new order but
   * does not send it into the matching engine.
   *
   * Weight(IP):
   *   - Without computeCommissionRates: `1`
   *   - With computeCommissionRates: `20`
   *
   * @returns OK
   *
   * @throws {@link TradeApi.TestNewOrderTradeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testNewOrderTrade(
    request: TradeApi.TestNewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, TradeApi.TestNewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/order/test"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          { name: "quantity", value: request.quantity, schema: s.optional(s.float64()) },
          { name: "quoteOrderQty", value: request.quoteOrderQty, schema: s.optional(s.float64()) },
          { name: "price", value: request.price, schema: s.optional(s.float64()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.int()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.int()) },
          { name: "stopPrice", value: request.stopPrice, schema: s.optional(s.float64()) },
          { name: "trailingDelta", value: request.trailingDelta, schema: s.optional(s.float64()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.float64()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
          {
            name: "computeCommissionRates",
            value: request.computeCommissionRates,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: TradeApi.TestNewOrderTradeError,
      },
      options,
    );
  }

  /**
   * Test new order using SOR (TRADE)
   *
   * @remarks
   * Test new order creation and signature/recvWindow using smart order routing (SOR). Creates and
   * validates a new order but does not send it into the matching engine.
   *
   * Weight(IP):
   *   - Without computeCommissionRates: `1`
   *   - With computeCommissionRates: `20`
   *
   * @returns Test new order
   *
   * @throws {@link TradeApi.TestNewOrderUsingSorTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testNewOrderUsingSorTrade(
    request: TradeApi.TestNewOrderUsingSorTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, TradeApi.TestNewOrderUsingSorTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/sor/order/test"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "quantity", value: request.quantity, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          { name: "price", value: request.price, schema: s.optional(s.float64()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "strategyId", value: request.strategyId, schema: s.optional(s.int()) },
          { name: "strategyType", value: request.strategyType, schema: s.optional(s.int()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.float64()) },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AccountInformationUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AccountInformationUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AccountTradeListUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** This can only be used in combination with symbol. */
    orderId?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Trade id to fetch from. Default gets most recent trades. */
    fromId?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AccountTradeListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AccountTradeListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AllOrdersUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order id */
    orderId?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AllOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AllOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelOcoTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order list id */
    orderListId?: number;
    /** A unique Id for the entire orderList */
    listClientOrderId?: string;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CancelOcoTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CancelOcoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelOrderTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order id */
    orderId?: number;
    /** Order id from client */
    origClientOrderId?: string;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    cancelRestrictions?: CancelRestrictions;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CancelOrderTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CancelOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelAllOpenOrdersOnASymbolTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CancelAllOpenOrdersOnASymbolTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CancelAllOpenOrdersOnASymbolTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelAnExistingOrderAndSendANewOrderTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    /** Order type */
    type: Type1;
    /**
     * - `STOP_ON_FAILURE` If the cancel request fails, the new order placement will not be
     *   attempted.
     * - `ALLOW_FAILURES` If new order placement will be attempted even if cancel request fails.
     */
    cancelReplaceMode: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    cancelRestrictions?: CancelRestrictions;
    /** Order time in force */
    timeInForce?: TimeInForce;
    /** Order quantity */
    quantity?: number;
    /** Quote quantity */
    quoteOrderQty?: number;
    /** Order price */
    price?: number;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    cancelNewClientOrderId?: string;
    /**
     * Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided,
     * cancelOrderId takes precedence.
     */
    cancelOrigClientOrderId?: string;
    /**
     * Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided,
     * cancelOrderId takes precedence.
     */
    cancelOrderId?: number;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    strategyId?: number;
    /** The value cannot be less than 1000000. */
    strategyType?: number;
    /** Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
    stopPrice?: number;
    /** Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
    trailingDelta?: number;
    /** Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. */
    icebergQty?: number;
    /**
     * Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default
     * to ACK.
     */
    newOrderRespType?: NewOrderRespType;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CancelAnExistingOrderAndSendANewOrderTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CancelAnExistingOrderAndSendANewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CurrentOpenOrdersUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CurrentOpenOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CurrentOpenOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    /** Order type */
    type: Type1;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order time in force */
    timeInForce?: TimeInForce;
    /** Order quantity */
    quantity?: number;
    /** Quote quantity */
    quoteOrderQty?: number;
    /** Order price */
    price?: number;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    strategyId?: number;
    /** The value cannot be less than 1000000. */
    strategyType?: number;
    /** Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
    stopPrice?: number;
    /** Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
    trailingDelta?: number;
    /** Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. */
    icebergQty?: number;
    /**
     * Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default
     * to ACK.
     */
    newOrderRespType?: NewOrderRespType;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class NewOrderTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<NewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderListOtoTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** Supported values: LIMIT,LIMIT_MAKER */
    workingType: WorkingType;
    /** BUY,SELL */
    workingSide: WorkingSide;
    workingPrice: number;
    /** Sets the quantity for the working order. */
    workingQuantity: number;
    /** This can only be used if workingTimeInForce is GTC. */
    workingIcebergQty: number;
    /**
     * Supported values: Order Types Note that MARKET orders using quoteOrderQty are not supported.
     */
    pendingType: PendingType;
    /** BUY,SELL */
    pendingSide: PendingSide;
    /** Sets the quantity for the pending order. */
    pendingQuantity: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * Arbitrary unique ID among open order lists. Automatically generated if not sent. A new order
     * list with the same `listClientOrderId` is accepted only when the previous one is filled or
     * completely expired. `listClientOrderId` is distinct from the `workingClientOrderId` and the
     * `pendingClientOrderId`.
     */
    listClientOrderId?: string;
    /** Set the response JSON. */
    newOrderRespType?: NewOrderRespType;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /**
     * Arbitrary unique ID among open orders for the working order. Automatically generated if not
     * sent.
     */
    workingClientOrderId?: string;
    /** GTC, IOC, FOK */
    workingTimeInForce?: WorkingTimeInForce;
    /** Arbitrary numeric value identifying the working order within an order strategy. */
    workingStrategyId?: number;
    /**
     * Arbitrary numeric value identifying the working order strategy. Values smaller than 1000000
     * are reserved and cannot be used.
     */
    workingStrategyType?: number;
    /**
     * Arbitrary unique ID among open orders for the pending order. Automatically generated if not
     * sent.
     */
    pendingClientOrderId?: string;
    pendingPrice?: number;
    pendingStopPrice?: number;
    pendingTrailingDelta?: number;
    /** This can only be used if pendingTimeInForce is GTC. */
    pendingIcebergQty?: number;
    /** GTC, IOC, FOK */
    pendingTimeInForce?: PendingTimeInForce;
    /** Arbitrary numeric value identifying the pending order within an order strategy. */
    pendingStrategyId?: number;
    /**
     * Arbitrary numeric value identifying the pending order strategy. Values smaller than 1000000
     * are reserved and cannot be used.
     */
    pendingStrategyType?: number;
  };

  export class NewOrderListOtoTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<NewOrderListOtoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderListOtocoTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** Supported values: LIMIT,LIMIT_MAKER */
    workingType: WorkingType;
    /** BUY,SELL */
    workingSide: WorkingSide;
    workingPrice: number;
    /** Sets the quantity for the working order. */
    workingQuantity: number;
    /** This can only be used if workingTimeInForce is GTC. */
    workingIcebergQty: number;
    /** BUY,SELL */
    pendingSide: PendingSide;
    /** Sets the quantity for the pending order. */
    pendingQuantity: number;
    /** Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT */
    pendingAboveType: PendingAboveType;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * Arbitrary unique ID among open order lists. Automatically generated if not sent. A new order
     * list with the same `listClientOrderId` is accepted only when the previous one is filled or
     * completely expired. `listClientOrderId` is distinct from the `workingClientOrderId` and the
     * `pendingClientOrderId`.
     */
    listClientOrderId?: string;
    /** Set the response JSON. */
    newOrderRespType?: NewOrderRespType;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /**
     * Arbitrary unique ID among open orders for the working order. Automatically generated if not
     * sent.
     */
    workingClientOrderId?: string;
    /** GTC, IOC, FOK */
    workingTimeInForce?: WorkingTimeInForce;
    /** Arbitrary numeric value identifying the working order within an order strategy. */
    workingStrategyId?: number;
    /**
     * Arbitrary numeric value identifying the working order strategy. Values smaller than 1000000
     * are reserved and cannot be used.
     */
    workingStrategyType?: number;
    /**
     * Arbitrary unique ID among open orders for the pending above order. Automatically generated if
     * not sent.
     */
    pendingAboveClientOrderId?: string;
    pendingAbovePrice?: number;
    pendingAboveStopPrice?: number;
    pendingAboveTrailingDelta?: number;
    /** This can only be used if pendingAboveTimeInForce is GTC. */
    pendingAboveIcebergQty?: number;
    pendingAboveTimeInForce?: PendingAboveTimeInForce;
    /** Arbitrary numeric value identifying the pending above order within an order strategy. */
    pendingAboveStrategyId?: number;
    /**
     * Arbitrary numeric value identifying the pending above order strategy. Values smaller than
     * 1000000 are reserved and cannot be used.
     */
    pendingAboveStrategyType?: number;
    /** Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT */
    pendingBelowType?: PendingBelowType;
    /**
     * Arbitrary unique ID among open orders for the pending below order. Automatically generated if
     * not sent.
     */
    pendingBelowClientOrderId?: string;
    pendingBelowPrice?: number;
    pendingBelowStopPrice?: number;
    pendingBelowTrailingDelta?: number;
    /** This can only be used if pendingBelowTimeInForce is GTC. */
    pendingBelowIcebergQty?: number;
    pendingBelowTimeInForce?: PendingBelowTimeInForce;
    /** Arbitrary numeric value identifying the pending below order within an order strategy. */
    pendingBelowStrategyId?: number;
    /**
     * Arbitrary numeric value identifying the pending below order strategy. Values smaller than
     * 1000000 are reserved and cannot be used.
     */
    pendingBelowStrategyType?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class NewOrderListOtocoTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<NewOrderListOtocoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderListOcoTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    quantity: number;
    /** Supported values : `STOP_LOSS_LIMIT`, `STOP_LOSS`, `LIMIT_MAKER` */
    aboveType: string;
    /** Supported values : `STOP_LOSS_LIMIT`, `STOP_LOSS`, `LIMIT_MAKER` */
    belowType: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * Arbitrary unique ID among open order lists. Automatically generated if not sent. A new order
     * list with the same `listClientOrderId` is accepted only when the previous one is filled or
     * completely expired. `listClientOrderId` is distinct from the `aboveClientOrderId` and the
     * `belowCLientOrderId`.
     */
    listClientOrderId?: string;
    /**
     * Arbitrary unique ID among open orders for the above order. Automatically generated if not
     * sent
     */
    aboveClientOrderId?: string;
    /** Note that this can only be used if `aboveTimeInForce` is `GTC`. */
    aboveIcebergQty?: number;
    abovePrice?: number;
    /**
     * Can be used if `aboveType` is `STOP_LOSS` or `STOP_LOSS_LIMIT`. Either `aboveStopPrice` or
     * `aboveTrailingDelta` or both, must be specified.
     */
    aboveStopPrice?: number;
    aboveTrailingDelta?: number;
    /** Required if the `aboveType` is `STOP_LOSS_LIMIT`. */
    aboveTimeInForce?: AboveTimeInForce;
    /** Arbitrary numeric value identifying the above order within an order strategy. */
    aboveStrategyId?: number;
    /**
     * Arbitrary numeric value identifying the above order strategy. Values smaller than 1000000 are
     * reserved and cannot be used.
     */
    aboveStrategyType?: number;
    /**
     * Arbitrary unique ID among open orders for the below order. Automatically generated if not
     * sent
     */
    belowClientOrderId?: string;
    /** Note that this can only be used if `belowTimeInForce` is `GTC`. */
    belowIcebergQty?: number;
    /**
     * Can be used if `belowType` is `STOP_LOSS_LIMIT` or `LIMIT_MAKER` to specify the limit price.
     */
    belowPrice?: number;
    /**
     * Can be used if `belowType` is `STOP_LOSS` or `STOP_LOSS_LIMIT`. Either `belowStopPrice` or
     * `belowTrailingDelta` or both, must be specified.
     */
    belowStopPrice?: number;
    belowTrailingDelta?: number;
    /** Required if the `belowType` is `STOP_LOSS_LIMIT`. */
    belowTimeInForce?: BelowTimeInForce;
    /** Arbitrary numeric value identifying the below order within an order strategy. */
    belowStrategyId?: number;
    /**
     * Arbitrary numeric value identifying the below order strategy. Values smaller than 1000000 are
     * reserved and cannot be used.
     */
    belowStrategyType?: number;
    /**
     * Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default
     * to ACK.
     */
    newOrderRespType?: NewOrderRespType;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class NewOrderListOcoTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<NewOrderListOcoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewOrderUsingSorTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    /** Order type */
    type: Type1;
    quantity: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order time in force */
    timeInForce?: TimeInForce;
    price?: number;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    strategyId?: number;
    /** The value cannot be less than 1000000. */
    strategyType?: number;
    /** Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. */
    icebergQty?: number;
    /**
     * Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default
     * to ACK.
     */
    newOrderRespType?: NewOrderRespType;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class NewOrderUsingSorTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<NewOrderUsingSorTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryAllocationsUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    fromAllocationId?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** Order id */
    orderId?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryAllocationsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryAllocationsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCommissionRatesUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
  };

  export class QueryCommissionRatesUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryCommissionRatesUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCurrentOrderCountUsageTradeRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryCurrentOrderCountUsageTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryCurrentOrderCountUsageTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOcoUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order list id */
    orderListId?: number;
    /** Order id from client */
    origClientOrderId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryOcoUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOpenOcoUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryOpenOcoUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryOpenOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOrderUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order id */
    orderId?: number;
    /** Order id from client */
    origClientOrderId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryOrderUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryOrderUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryPreventedMatchesRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    preventedMatchId?: number;
    /** Order id */
    orderId?: number;
    fromPreventedMatchId?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryPreventedMatchesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryPreventedMatchesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryAllOcoUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Trade id to fetch from. Default gets most recent trades. */
    fromId?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryAllOcoUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryAllOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TestNewOrderTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    /** Order type */
    type: Type1;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order time in force */
    timeInForce?: TimeInForce;
    /** Order quantity */
    quantity?: number;
    /** Quote quantity */
    quoteOrderQty?: number;
    /** Order price */
    price?: number;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    strategyId?: number;
    /** The value cannot be less than 1000000. */
    strategyType?: number;
    /** Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
    stopPrice?: number;
    /** Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
    trailingDelta?: number;
    /** Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. */
    icebergQty?: number;
    /**
     * Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default
     * to ACK.
     */
    newOrderRespType?: NewOrderRespType;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
    /** Default: false */
    computeCommissionRates?: boolean;
  };

  export class TestNewOrderTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<TestNewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TestNewOrderUsingSorTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    /** Order type */
    type: Type1;
    quantity: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order time in force */
    timeInForce?: TimeInForce;
    price?: number;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    strategyId?: number;
    /** The value cannot be less than 1000000. */
    strategyType?: number;
    /** Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. */
    icebergQty?: number;
    /**
     * Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default
     * to ACK.
     */
    newOrderRespType?: NewOrderRespType;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /** Default: false */
    computeCommissionRates?: boolean;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class TestNewOrderUsingSorTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<TestNewOrderUsingSorTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
