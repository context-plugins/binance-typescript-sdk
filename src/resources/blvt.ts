import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1BlvtRedeemRecordResponseSchema,
  type SapiV1BlvtRedeemRecordResponse,
} from "../models/sapi-v1-blvt-redeem-record-response.js";
import {
  sapiV1BlvtRedeemResponseSchema,
  type SapiV1BlvtRedeemResponse,
} from "../models/sapi-v1-blvt-redeem-response.js";
import {
  sapiV1BlvtSubscribeRecordResponseSchema,
  type SapiV1BlvtSubscribeRecordResponse,
} from "../models/sapi-v1-blvt-subscribe-record-response.js";
import {
  sapiV1BlvtSubscribeResponseSchema,
  type SapiV1BlvtSubscribeResponse,
} from "../models/sapi-v1-blvt-subscribe-response.js";
import {
  sapiV1BlvtTokenInfoResponseSchema,
  type SapiV1BlvtTokenInfoResponse,
} from "../models/sapi-v1-blvt-token-info-response.js";
import {
  sapiV1BlvtUserLimitResponseSchema,
  type SapiV1BlvtUserLimitResponse,
} from "../models/sapi-v1-blvt-user-limit-response.js";
import type { Servers } from "../servers.js";

export class Blvt {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  blvtInfoMarketData(
    request: Blvt.BlvtInfoMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtTokenInfoResponse[], Blvt.BlvtInfoMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/blvt/tokenInfo"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "tokenName", value: request.tokenName, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1BlvtTokenInfoResponseSchema)) },
        errorFactory: Blvt.BlvtInfoMarketDataError,
      },
      options,
    );
  }

  blvtUserLimitInfoUserData(
    request: Blvt.BlvtUserLimitInfoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtUserLimitResponse[], Blvt.BlvtUserLimitInfoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/blvt/userLimit"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tokenName", value: request.tokenName, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1BlvtUserLimitResponseSchema)) },
        errorFactory: Blvt.BlvtUserLimitInfoUserDataError,
      },
      options,
    );
  }

  querySubscriptionRecordUserData(
    request: Blvt.QuerySubscriptionRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtSubscribeRecordResponse, Blvt.QuerySubscriptionRecordUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/blvt/subscribe/record"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tokenName", value: request.tokenName, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1BlvtSubscribeRecordResponseSchema },
        errorFactory: Blvt.QuerySubscriptionRecordUserDataError,
      },
      options,
    );
  }

  redeemBlvtUserData(
    request: Blvt.RedeemBlvtUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtRedeemResponse, Blvt.RedeemBlvtUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/blvt/redeem"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "tokenName", value: request.tokenName, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1BlvtRedeemResponseSchema },
        errorFactory: Blvt.RedeemBlvtUserDataError,
      },
      options,
    );
  }

  redemptionRecordUserData(
    request: Blvt.RedemptionRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtRedeemRecordResponse[], Blvt.RedemptionRecordUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/blvt/redeem/record"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tokenName", value: request.tokenName, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1BlvtRedeemRecordResponseSchema)) },
        errorFactory: Blvt.RedemptionRecordUserDataError,
      },
      options,
    );
  }

  subscribeBlvtUserData(
    request: Blvt.SubscribeBlvtUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtSubscribeResponse, Blvt.SubscribeBlvtUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/blvt/subscribe"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "tokenName", value: request.tokenName, schema: s.string() },
          { name: "cost", value: request.cost, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1BlvtSubscribeResponseSchema },
        errorFactory: Blvt.SubscribeBlvtUserDataError,
      },
      options,
    );
  }
}

export namespace Blvt {
  export type BlvtInfoMarketDataRequest = {
    tokenName?: string;
  };

  export class BlvtInfoMarketDataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<BlvtInfoMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type BlvtUserLimitInfoUserDataRequest = {
    timestamp: number;
    signature: string;
    tokenName?: string;
    recvWindow?: number;
  };

  export class BlvtUserLimitInfoUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<BlvtUserLimitInfoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubscriptionRecordUserDataRequest = {
    timestamp: number;
    signature: string;
    tokenName?: string;
    id?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QuerySubscriptionRecordUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QuerySubscriptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemBlvtUserDataRequest = {
    tokenName: string;
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class RedeemBlvtUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RedeemBlvtUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedemptionRecordUserDataRequest = {
    timestamp: number;
    signature: string;
    tokenName?: string;
    id?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class RedemptionRecordUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RedemptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeBlvtUserDataRequest = {
    tokenName: string;
    cost: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SubscribeBlvtUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubscribeBlvtUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
