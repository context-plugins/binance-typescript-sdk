import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1PayTransactionsResponseSchema,
  type SapiV1PayTransactionsResponse,
} from "../models/sapi-v1-pay-transactions-response.js";
import type { Servers } from "../servers.js";

export class Pay {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getPayTradeHistoryUserData(
    request: Pay.GetPayTradeHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1PayTransactionsResponse, Pay.GetPayTradeHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/pay/transactions"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PayTransactionsResponseSchema },
        errorFactory: Pay.GetPayTradeHistoryUserDataError,
      },
      options,
    );
  }
}

export namespace Pay {
  export type GetPayTradeHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class GetPayTradeHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetPayTradeHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
