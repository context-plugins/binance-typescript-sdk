import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class FuturesAlgo {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelAlgoOrderTrade(
    request: FuturesAlgo.CancelAlgoOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoFuturesOrderResponse, FuturesAlgo.CancelAlgoOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/sapi/v1/algo/futures/order"),
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
        success: { kind: "json", schema: sapiV1AlgoFuturesOrderResponseSchema },
        errorFactory: FuturesAlgo.CancelAlgoOrderTradeError,
      },
      options,
    );
  }

  queryCurrentAlgoOpenOrdersUserData(
    request: FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoFuturesOpenOrdersResponse, FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/algo/futures/openOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoFuturesOpenOrdersResponseSchema },
        errorFactory: FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/algo/futures/historicalOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "side", value: request.side, schema: s.optional(s.lazy(() => sideSchema)) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoFuturesHistoricalOrdersResponseSchema },
        errorFactory: FuturesAlgo.QueryHistoricalAlgoOrdersUserDataError,
      },
      options,
    );
  }

  querySubOrdersUserData(
    request: FuturesAlgo.QuerySubOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoFuturesSubOrdersResponse, FuturesAlgo.QuerySubOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/algo/futures/subOrders"),
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
        success: { kind: "json", schema: sapiV1AlgoFuturesSubOrdersResponseSchema },
        errorFactory: FuturesAlgo.QuerySubOrdersUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/algo/futures/newOrderTwap"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.number() },
          { name: "duration", value: request.duration, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "positionSide",
            value: request.positionSide,
            schema: s.optional(s.lazy(() => positionSideSchema)),
          },
          { name: "clientAlgoId", value: request.clientAlgoId, schema: s.optional(s.string()) },
          { name: "reduceOnly", value: request.reduceOnly, schema: s.optional(s.boolean()) },
          { name: "limitPrice", value: request.limitPrice, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AlgoFuturesNewOrderTwapResponseSchema },
        errorFactory: FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeError,
      },
      options,
    );
  }

  volumeParticipationVpNewOrderTrade(
    request: FuturesAlgo.VolumeParticipationVpNewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AlgoFuturesNewOrderVpResponse, FuturesAlgo.VolumeParticipationVpNewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/algo/futures/newOrderVp"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.number() },
          { name: "urgency", value: request.urgency, schema: urgencySchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "positionSide",
            value: request.positionSide,
            schema: s.optional(s.lazy(() => positionSideSchema)),
          },
          { name: "clientAlgoId", value: request.clientAlgoId, schema: s.optional(s.string()) },
          { name: "reduceOnly", value: request.reduceOnly, schema: s.optional(s.boolean()) },
          { name: "limitPrice", value: request.limitPrice, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    algoId: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CancelAlgoOrderTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CancelAlgoOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCurrentAlgoOpenOrdersUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryCurrentAlgoOpenOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryCurrentAlgoOpenOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryHistoricalAlgoOrdersUserDataRequest = {
    timestamp: number;
    signature: string;
    symbol?: string;
    side?: Side;
    startTime?: number;
    endTime?: number;
    page?: number;
    pageSize?: string;
    recvWindow?: number;
  };

  export class QueryHistoricalAlgoOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryHistoricalAlgoOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubOrdersUserDataRequest = {
    algoId: number;
    timestamp: number;
    signature: string;
    page?: number;
    pageSize?: string;
    recvWindow?: number;
  };

  export class QuerySubOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QuerySubOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TimeWeightedAveragePriceTwapNewOrderTradeRequest = {
    symbol: string;
    side: Side;
    quantity: number;
    duration: number;
    timestamp: number;
    signature: string;
    positionSide?: PositionSide;
    clientAlgoId?: string;
    reduceOnly?: boolean;
    limitPrice?: number;
    recvWindow?: number;
  };

  export class TimeWeightedAveragePriceTwapNewOrderTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<TimeWeightedAveragePriceTwapNewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VolumeParticipationVpNewOrderTradeRequest = {
    symbol: string;
    side: Side;
    quantity: number;
    urgency: Urgency;
    timestamp: number;
    signature: string;
    positionSide?: PositionSide;
    clientAlgoId?: string;
    reduceOnly?: boolean;
    limitPrice?: number;
    recvWindow?: number;
  };

  export class VolumeParticipationVpNewOrderTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<VolumeParticipationVpNewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
