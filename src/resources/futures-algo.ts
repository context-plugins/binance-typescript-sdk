import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { positionSideSchema, type PositionSide } from "../models/position-side.js";
import {
  sapiV1AlgoFuturesHistoricalOrdersResponseSchema,
  type SapiV1AlgoFuturesHistoricalOrdersResponse,
} from "../models/sapi-v1-algo-futures-historical-orders-response.js";
import {
  sapiV1AlgoFuturesNewOrderTwapResponseSchema,
  type SapiV1AlgoFuturesNewOrderTwapResponse,
} from "../models/sapi-v1-algo-futures-new-order-twap-response.js";
import {
  sapiV1AlgoFuturesNewOrderVpResponseSchema,
  type SapiV1AlgoFuturesNewOrderVpResponse,
} from "../models/sapi-v1-algo-futures-new-order-vp-response.js";
import {
  sapiV1AlgoFuturesOpenOrdersResponseSchema,
  type SapiV1AlgoFuturesOpenOrdersResponse,
} from "../models/sapi-v1-algo-futures-open-orders-response.js";
import {
  sapiV1AlgoFuturesOrderResponseSchema,
  type SapiV1AlgoFuturesOrderResponse,
} from "../models/sapi-v1-algo-futures-order-response.js";
import {
  sapiV1AlgoFuturesSubOrdersResponseSchema,
  type SapiV1AlgoFuturesSubOrdersResponse,
} from "../models/sapi-v1-algo-futures-sub-orders-response.js";
import { sideSchema, type Side } from "../models/side.js";
import { urgencySchema, type Urgency } from "../models/urgency.js";
import type { Servers } from "../servers.js";

/**
 * Futures Algo Endpoints
 */
export class FuturesAlgo {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Algo Order(TRADE)
   *
   * @remarks
   * Cancel an active order.
   * - You need to enable Futures Trading Permission for the api key which requests this endpoint.
   * - Base URL: https://api.binance.com
   *
   * Weight(IP): 1
   *
   * @returns Cancelled order
   *
   * @throws {@link FuturesAlgo.CancelAlgoOrderTradeError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelAlgoOrderTrade(
    request: FuturesAlgo.CancelAlgoOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoFuturesOrderResponse, FuturesAlgo.CancelAlgoOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sapi/v1/algo/futures/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "algoId", value: request.algoId, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoFuturesOrderResponseSchema },
        errorFactory: FuturesAlgo.CancelAlgoOrderTradeError,
      },
      options,
    );
  }

  /**
   * Query Current Algo Open Orders (USER_DATA)
   *
   * @remarks
   * - You need to enable Futures Trading Permission for the api key which requests this endpoint.
   * - Base URL: https://api.binance.com
   *
   * Weight(IP): 1
   *
   * @returns Open Algo Orders
   *
   * @throws {@link FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryCurrentAlgoOpenOrdersUserData(
    request: FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoFuturesOpenOrdersResponse, FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/algo/futures/openOrders"),
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
        success: { kind: "json", schema: sapiV1AlgoFuturesOpenOrdersResponseSchema },
        errorFactory: FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Query Historical Algo Orders (USER_DATA)
   *
   * @remarks
   * - You need to enable Futures Trading Permission for the api key which requests this endpoint.
   * - Base URL: https://api.binance.com
   *
   * Weight(IP): 1
   *
   * @returns Historical Algo Orders
   *
   * @throws {@link FuturesAlgo.QueryHistoricalAlgoOrdersUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryHistoricalAlgoOrdersUserData(
    request: FuturesAlgo.QueryHistoricalAlgoOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1AlgoFuturesHistoricalOrdersResponse,
    FuturesAlgo.QueryHistoricalAlgoOrdersUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/algo/futures/historicalOrders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "side", value: request.side, schema: s.optional(s.lazy(() => sideSchema)) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoFuturesHistoricalOrdersResponseSchema },
        errorFactory: FuturesAlgo.QueryHistoricalAlgoOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Query Sub Orders (USER_DATA)
   *
   * @remarks
   * - You need to enable Futures Trading Permission for the api key which requests this endpoint.
   * - Base URL: https://api.binance.com
   *
   * Weight(IP): 1
   *
   * @returns Sub orders
   *
   * @throws {@link FuturesAlgo.QuerySubOrdersUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  querySubOrdersUserData(
    request: FuturesAlgo.QuerySubOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoFuturesSubOrdersResponse, FuturesAlgo.QuerySubOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/algo/futures/subOrders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "algoId", value: request.algoId, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoFuturesSubOrdersResponseSchema },
        errorFactory: FuturesAlgo.QuerySubOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Time-Weighted Average Price(Twap) New Order (TRADE)
   *
   * @remarks
   * Send in a Twap new order. Only support on USDⓈ-M Contracts.
   *
   * You need to enable Futures Trading Permission for the api key which requests this endpoint.
   * Base URL: https://api.binance.com
   *
   * - Total Algo open orders max allowed: 10 orders.
   * - Leverage of symbols and position mode will be the same as your futures account settings. You
   *   can set up through the trading page or fapi.
   * - Receiving "success": true does not mean that your order will be executed. Please use the
   *   query order endpoints(GET sapi/v1/algo/futures/openOrders or GET
   *   sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures
   *   balance is insufficient, or open position with reduce only or position side is inconsistent
   *   with your own setting. In these cases you will receive "success": true, but the order status
   *   will be expired after we check it.
   * - quantity * 60 / duration should be larger than minQty
   * - duration cannot be less than 5 mins or more than 24 hours.
   * - For delivery contracts, TWAP end time should be one hour earlier than the delivery time of
   *   the symbol.
   *
   * Weight(UID): 3000
   *
   * @returns Time-Weighted Average Price(Twap) New Order
   *
   * @throws {@link FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  timeWeightedAveragePriceTwapNewOrderTrade(
    request: FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1AlgoFuturesNewOrderTwapResponse,
    FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/algo/futures/newOrderTwap"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.float64() },
          { name: "duration", value: request.duration, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "positionSide",
            value: request.positionSide,
            schema: s.optional(s.lazy(() => positionSideSchema)),
          },
          { name: "clientAlgoId", value: request.clientAlgoId, schema: s.optional(s.string()) },
          { name: "reduceOnly", value: request.reduceOnly, schema: s.optional(s.boolean()) },
          { name: "limitPrice", value: request.limitPrice, schema: s.optional(s.float64()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoFuturesNewOrderTwapResponseSchema },
        errorFactory: FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeError,
      },
      options,
    );
  }

  /**
   * Volume Participation(VP) New Order (TRADE)
   *
   * @remarks
   * Send in a VP new order. Only support on USDⓈ-M Contracts.
   *
   * - You need to enable `Futures Trading Permission` for the api key which requests this endpoint.
   * - Base URL: https://api.binance.com
   *
   * - Total Algo open orders max allowed: 10 orders.
   * - Leverage of symbols and position mode will be the same as your futures account settings. You
   *   can set up through the trading page or fapi.
   * - Receiving "success": true does not mean that your order will be executed. Please use the
   *   query order endpoints(GET sapi/v1/algo/futures/openOrders or GET
   *   sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures
   *   balance is insufficient, or open position with reduce only or position side is inconsistent
   *   with your own setting. In these cases you will receive "success": true, but the order status
   *   will be expired after we check it.
   *
   * Weight(UID): 3000
   *
   * @returns Volume Participation(VP) Order
   *
   * @throws {@link FuturesAlgo.VolumeParticipationVpNewOrderTradeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  volumeParticipationVpNewOrderTrade(
    request: FuturesAlgo.VolumeParticipationVpNewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoFuturesNewOrderVpResponse, FuturesAlgo.VolumeParticipationVpNewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/algo/futures/newOrderVp"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.float64() },
          { name: "urgency", value: request.urgency, schema: urgencySchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "positionSide",
            value: request.positionSide,
            schema: s.optional(s.lazy(() => positionSideSchema)),
          },
          { name: "clientAlgoId", value: request.clientAlgoId, schema: s.optional(s.string()) },
          { name: "reduceOnly", value: request.reduceOnly, schema: s.optional(s.boolean()) },
          { name: "limitPrice", value: request.limitPrice, schema: s.optional(s.float64()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoFuturesNewOrderVpResponseSchema },
        errorFactory: FuturesAlgo.VolumeParticipationVpNewOrderTradeError,
      },
      options,
    );
  }
}

export namespace FuturesAlgo {
  export type CancelAlgoOrderTradeRequest = {
    /** Eg. 14511 */
    algoId: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CancelAlgoOrderTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CancelAlgoOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCurrentAlgoOpenOrdersUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryCurrentAlgoOpenOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryCurrentAlgoOpenOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryHistoricalAlgoOrdersUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    side?: Side;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 1 */
    page?: number;
    /** MIN 1, MAX 100; Default 100 */
    pageSize?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryHistoricalAlgoOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryHistoricalAlgoOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubOrdersUserDataRequest = {
    algoId: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Default 1 */
    page?: number;
    /** MIN 1, MAX 100; Default 100 */
    pageSize?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QuerySubOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QuerySubOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TimeWeightedAveragePriceTwapNewOrderTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    /**
     * Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than
     * the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT
     */
    quantity: number;
    /**
     * Duration for TWAP orders in seconds. [300, 86400];Less than 5min => defaults to 5 min;
     * Greater than 24h => defaults to 24h
     */
    duration: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.
     */
    positionSide?: PositionSide;
    /**
     * A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will
     * give default value
     */
    clientAlgoId?: string;
    /**
     * 'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you
     * open a position
     */
    reduceOnly?: boolean;
    /** Limit price of the order; If it is not sent, will place order by market price by default */
    limitPrice?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class TimeWeightedAveragePriceTwapNewOrderTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<TimeWeightedAveragePriceTwapNewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VolumeParticipationVpNewOrderTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    /**
     * Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than
     * the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT
     */
    quantity: number;
    /** Represent the relative speed of the current execution; ENUM: LOW, MEDIUM, HIGH */
    urgency: Urgency;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.
     */
    positionSide?: PositionSide;
    /**
     * A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will
     * give default value
     */
    clientAlgoId?: string;
    /**
     * 'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you
     * open a position
     */
    reduceOnly?: boolean;
    /** Limit price of the order; If it is not sent, will place order by market price by default */
    limitPrice?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class VolumeParticipationVpNewOrderTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<VolumeParticipationVpNewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
