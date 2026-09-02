import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1FiatOrdersResponseSchema,
  type SapiV1FiatOrdersResponse,
} from "../models/sapi-v1-fiat-orders-response.js";
import {
  sapiV1FiatPaymentsResponseSchema,
  type SapiV1FiatPaymentsResponse,
} from "../models/sapi-v1-fiat-payments-response.js";
import type { Servers } from "../servers.js";

export class Fiat {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fiatDepositWithdrawHistoryUserData(
    request: Fiat.FiatDepositWithdrawHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1FiatOrdersResponse, Fiat.FiatDepositWithdrawHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/fiat/orders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "transactionType", value: request.transactionType, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "beginTime", value: request.beginTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "rows", value: request.rows, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1FiatOrdersResponseSchema },
        errorFactory: Fiat.FiatDepositWithdrawHistoryUserDataError,
      },
      options,
    );
  }

  fiatPaymentsHistoryUserData(
    request: Fiat.FiatPaymentsHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1FiatPaymentsResponse, Fiat.FiatPaymentsHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/fiat/payments"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "transactionType", value: request.transactionType, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "beginTime", value: request.beginTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "rows", value: request.rows, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1FiatPaymentsResponseSchema },
        errorFactory: Fiat.FiatPaymentsHistoryUserDataError,
      },
      options,
    );
  }
}

export namespace Fiat {
  export type FiatDepositWithdrawHistoryUserDataRequest = {
    transactionType: number;
    timestamp: number;
    signature: string;
    beginTime?: number;
    endTime?: number;
    page?: number;
    rows?: number;
    recvWindow?: number;
  };

  export class FiatDepositWithdrawHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FiatDepositWithdrawHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FiatPaymentsHistoryUserDataRequest = {
    transactionType: number;
    timestamp: number;
    signature: string;
    beginTime?: number;
    endTime?: number;
    page?: number;
    rows?: number;
    recvWindow?: number;
  };

  export class FiatPaymentsHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FiatPaymentsHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
