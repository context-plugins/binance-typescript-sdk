import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1AlgoSpotHistoricalOrdersResponseSchema,
  type SapiV1AlgoSpotHistoricalOrdersResponse,
} from "../models/sapi-v1-algo-spot-historical-orders-response.js";
import {
  sapiV1AlgoSpotNewOrderTwapResponseSchema,
  type SapiV1AlgoSpotNewOrderTwapResponse,
} from "../models/sapi-v1-algo-spot-new-order-twap-response.js";
import {
  sapiV1AlgoSpotOpenOrdersResponseSchema,
  type SapiV1AlgoSpotOpenOrdersResponse,
} from "../models/sapi-v1-algo-spot-open-orders-response.js";
import {
  sapiV1AlgoSpotOrderResponseSchema,
  type SapiV1AlgoSpotOrderResponse,
} from "../models/sapi-v1-algo-spot-order-response.js";
import {
  sapiV1AlgoSpotSubOrdersResponseSchema,
  type SapiV1AlgoSpotSubOrdersResponse,
} from "../models/sapi-v1-algo-spot-sub-orders-response.js";
import { sideSchema, type Side } from "../models/side.js";
import type { Servers } from "../servers.js";

/**
 * Spot Algo Endpoints
 */
export class SpotAlgo {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Algo Order
   *
   * @remarks
   * Cancel an open TWAP order
   *
   * Weight(IP): 1
   *
   * @returns Cancelled twap order response
   *
   * @throws {@link SpotAlgo.CancelAlgoOrderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelAlgoOrder(
    request: SpotAlgo.CancelAlgoOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotOrderResponse, SpotAlgo.CancelAlgoOrderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sapi/v1/algo/spot/order"),
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
        success: { kind: "json", schema: sapiV1AlgoSpotOrderResponseSchema },
        errorFactory: SpotAlgo.CancelAlgoOrderError,
      },
      options,
    );
  }

  /**
   * Query Current Algo Open Orders
   *
   * @remarks
   * Get all open SPOT TWAP orders
   *
   * Weight(IP): 1
   *
   * @returns twap open orders
   *
   * @throws {@link SpotAlgo.QueryCurrentAlgoOpenOrdersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryCurrentAlgoOpenOrders(
    request: SpotAlgo.QueryCurrentAlgoOpenOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotOpenOrdersResponse, SpotAlgo.QueryCurrentAlgoOpenOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/algo/spot/openOrders"),
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
        success: { kind: "json", schema: sapiV1AlgoSpotOpenOrdersResponseSchema },
        errorFactory: SpotAlgo.QueryCurrentAlgoOpenOrdersError,
      },
      options,
    );
  }

  /**
   * Query Historical Algo Orders
   *
   * @remarks
   * Get all historical SPOT TWAP orders
   *
   * Weight(IP): 1
   *
   * @returns twap historical orders
   *
   * @throws {@link SpotAlgo.QueryHistoricalAlgoOrdersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryHistoricalAlgoOrders(
    request: SpotAlgo.QueryHistoricalAlgoOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotHistoricalOrdersResponse, SpotAlgo.QueryHistoricalAlgoOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/algo/spot/historicalOrders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
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
        success: { kind: "json", schema: sapiV1AlgoSpotHistoricalOrdersResponseSchema },
        errorFactory: SpotAlgo.QueryHistoricalAlgoOrdersError,
      },
      options,
    );
  }

  /**
   * Query Sub Orders
   *
   * @remarks
   * Get respective sub orders for a specified algoId
   *
   * Weight(IP): 1
   *
   * @returns twap sub orders
   *
   * @throws {@link SpotAlgo.QuerySubOrdersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  querySubOrders(
    request: SpotAlgo.QuerySubOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotSubOrdersResponse, SpotAlgo.QuerySubOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/algo/spot/subOrders"),
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
        success: { kind: "json", schema: sapiV1AlgoSpotSubOrdersResponseSchema },
        errorFactory: SpotAlgo.QuerySubOrdersError,
      },
      options,
    );
  }

  /**
   * Time-Weighted Average Price (Twap) New Order
   *
   * @remarks
   * Place a new spot TWAP order with Algo service.
   *
   * Weight(UID): 3000
   *
   * @returns twap order response
   *
   * @throws {@link SpotAlgo.TimeWeightedAveragePriceTwapNewOrderError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  timeWeightedAveragePriceTwapNewOrder(
    request: SpotAlgo.TimeWeightedAveragePriceTwapNewOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotNewOrderTwapResponse, SpotAlgo.TimeWeightedAveragePriceTwapNewOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/algo/spot/newOrderTwap"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.float64() },
          { name: "duration", value: request.duration, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "clientAlgoId", value: request.clientAlgoId, schema: s.optional(s.string()) },
          { name: "limitPrice", value: request.limitPrice, schema: s.optional(s.float64()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoSpotNewOrderTwapResponseSchema },
        errorFactory: SpotAlgo.TimeWeightedAveragePriceTwapNewOrderError,
      },
      options,
    );
  }
}

export namespace SpotAlgo {
  export type CancelAlgoOrderRequest = {
    algoId: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CancelAlgoOrderError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CancelAlgoOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCurrentAlgoOpenOrdersRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryCurrentAlgoOpenOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryCurrentAlgoOpenOrdersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryHistoricalAlgoOrdersRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
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

  export class QueryHistoricalAlgoOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryHistoricalAlgoOrdersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubOrdersRequest = {
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

  export class QuerySubOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QuerySubOrdersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TimeWeightedAveragePriceTwapNewOrderRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    quantity: number;
    duration: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    clientAlgoId?: string;
    limitPrice?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class TimeWeightedAveragePriceTwapNewOrderError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<TimeWeightedAveragePriceTwapNewOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
