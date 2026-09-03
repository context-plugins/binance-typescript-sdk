import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1C2COrderMatchListUserOrderHistoryResponseSchema,
  type SapiV1C2COrderMatchListUserOrderHistoryResponse,
} from "../models/sapi-v1-c2-corder-match-list-user-order-history-response.js";
import { tradeTypeSchema, type TradeType } from "../models/trade-type.js";
import type { Servers } from "../servers.js";

export class C2C {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getC2CTradeHistoryUserData(
    request: C2C.GetC2CTradeHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1C2COrderMatchListUserOrderHistoryResponse, C2C.GetC2CTradeHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/c2c/orderMatch/listUserOrderHistory"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "tradeType", value: request.tradeType, schema: tradeTypeSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTimestamp", value: request.startTimestamp, schema: s.optional(s.number()) },
          { name: "endTimestamp", value: request.endTimestamp, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "rows", value: request.rows, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1C2COrderMatchListUserOrderHistoryResponseSchema },
        errorFactory: C2C.GetC2CTradeHistoryUserDataError,
      },
      options,
    );
  }
}

export namespace C2C {
  export type GetC2CTradeHistoryUserDataRequest = {
    tradeType: TradeType;
    timestamp: number;
    signature: string;
    startTimestamp?: number;
    endTimestamp?: number;
    page?: number;
    rows?: number;
    recvWindow?: number;
  };

  export class GetC2CTradeHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetC2CTradeHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
