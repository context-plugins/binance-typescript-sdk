import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

export class SpotAlgo {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelAlgoOrder(
    request: SpotAlgo.CancelAlgoOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotOrderResponse, SpotAlgo.CancelAlgoOrderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/sapi/v1/algo/spot/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "algoId", value: request.algoId, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoSpotOrderResponseSchema },
        errorFactory: SpotAlgo.CancelAlgoOrderError,
      },
      options,
    );
  }

  queryCurrentAlgoOpenOrders(
    request: SpotAlgo.QueryCurrentAlgoOpenOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotOpenOrdersResponse, SpotAlgo.QueryCurrentAlgoOpenOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/algo/spot/openOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoSpotOpenOrdersResponseSchema },
        errorFactory: SpotAlgo.QueryCurrentAlgoOpenOrdersError,
      },
      options,
    );
  }

  queryHistoricalAlgoOrders(
    request: SpotAlgo.QueryHistoricalAlgoOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotHistoricalOrdersResponse, SpotAlgo.QueryHistoricalAlgoOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/algo/spot/historicalOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoSpotHistoricalOrdersResponseSchema },
        errorFactory: SpotAlgo.QueryHistoricalAlgoOrdersError,
      },
      options,
    );
  }

  querySubOrders(
    request: SpotAlgo.QuerySubOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotSubOrdersResponse, SpotAlgo.QuerySubOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/algo/spot/subOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "algoId", value: request.algoId, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoSpotSubOrdersResponseSchema },
        errorFactory: SpotAlgo.QuerySubOrdersError,
      },
      options,
    );
  }

  timeWeightedAveragePriceTwapNewOrder(
    request: SpotAlgo.TimeWeightedAveragePriceTwapNewOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoSpotNewOrderTwapResponse, SpotAlgo.TimeWeightedAveragePriceTwapNewOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/algo/spot/newOrderTwap"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.number() },
          { name: "duration", value: request.duration, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "clientAlgoId", value: request.clientAlgoId, schema: s.optional(s.string()) },
          { name: "limitPrice", value: request.limitPrice, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CancelAlgoOrderError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CancelAlgoOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCurrentAlgoOpenOrdersRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryCurrentAlgoOpenOrdersError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryCurrentAlgoOpenOrdersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryHistoricalAlgoOrdersRequest = {
    symbol: string;
    side: Side;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    pageSize?: string;
    recvWindow?: number;
  };

  export class QueryHistoricalAlgoOrdersError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryHistoricalAlgoOrdersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubOrdersRequest = {
    algoId: number;
    timestamp: number;
    signature: string;
    page?: number;
    pageSize?: string;
    recvWindow?: number;
  };

  export class QuerySubOrdersError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QuerySubOrdersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TimeWeightedAveragePriceTwapNewOrderRequest = {
    symbol: string;
    side: Side;
    quantity: number;
    duration: number;
    timestamp: number;
    signature: string;
    clientAlgoId?: string;
    limitPrice?: number;
    recvWindow?: number;
  };

  export class TimeWeightedAveragePriceTwapNewOrderError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<TimeWeightedAveragePriceTwapNewOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
