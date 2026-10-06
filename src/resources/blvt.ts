import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

/**
 * Binance Leveraged Tokens Endpoints
 */
export class Blvt {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BLVT Info (MARKET_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns List of token information
   *
   * @throws {@link Blvt.BlvtInfoMarketDataError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  blvtInfoMarketData(
    request: Blvt.BlvtInfoMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtTokenInfoResponse[], Blvt.BlvtInfoMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/blvt/tokenInfo"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "tokenName", value: request.tokenName, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1BlvtTokenInfoResponseSchema)) },
        errorFactory: Blvt.BlvtInfoMarketDataError,
      },
      options,
    );
  }

  /**
   * BLVT User Limit Info (USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns List of token limits
   *
   * @throws {@link Blvt.BlvtUserLimitInfoUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  blvtUserLimitInfoUserData(
    request: Blvt.BlvtUserLimitInfoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtUserLimitResponse[], Blvt.BlvtUserLimitInfoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/blvt/userLimit"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tokenName", value: request.tokenName, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1BlvtUserLimitResponseSchema)) },
        errorFactory: Blvt.BlvtUserLimitInfoUserDataError,
      },
      options,
    );
  }

  /**
   * Query Subscription Record (USER_DATA)
   *
   * @remarks
   * - Only the data of the latest 90 days is available
   *
   * Weight(IP): 1
   *
   * @returns List of subscription record
   *
   * @throws {@link Blvt.QuerySubscriptionRecordUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  querySubscriptionRecordUserData(
    request: Blvt.QuerySubscriptionRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtSubscribeRecordResponse, Blvt.QuerySubscriptionRecordUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/blvt/subscribe/record"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tokenName", value: request.tokenName, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1BlvtSubscribeRecordResponseSchema },
        errorFactory: Blvt.QuerySubscriptionRecordUserDataError,
      },
      options,
    );
  }

  /**
   * Redeem BLVT (USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Redemption record
   *
   * @throws {@link Blvt.RedeemBlvtUserDataError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redeemBlvtUserData(
    request: Blvt.RedeemBlvtUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtRedeemResponse, Blvt.RedeemBlvtUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/blvt/redeem"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "tokenName", value: request.tokenName, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1BlvtRedeemResponseSchema },
        errorFactory: Blvt.RedeemBlvtUserDataError,
      },
      options,
    );
  }

  /**
   * Redemption Record (USER_DATA)
   *
   * @remarks
   * - Only the data of the latest 90 days is available
   *
   * Weight(IP): 1
   *
   * @returns List of redemption record
   *
   * @throws {@link Blvt.RedemptionRecordUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redemptionRecordUserData(
    request: Blvt.RedemptionRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtRedeemRecordResponse[], Blvt.RedemptionRecordUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/blvt/redeem/record"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tokenName", value: request.tokenName, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1BlvtRedeemRecordResponseSchema)) },
        errorFactory: Blvt.RedemptionRecordUserDataError,
      },
      options,
    );
  }

  /**
   * Subscribe BLVT (USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Subscription Info
   *
   * @throws {@link Blvt.SubscribeBlvtUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeBlvtUserData(
    request: Blvt.SubscribeBlvtUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1BlvtSubscribeResponse, Blvt.SubscribeBlvtUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/blvt/subscribe"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "tokenName", value: request.tokenName, schema: s.string() },
          { name: "cost", value: request.cost, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** BTCDOWN, BTCUP */
    tokenName?: string;
  };

  export class BlvtInfoMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<BlvtInfoMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type BlvtUserLimitInfoUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** BTCDOWN, BTCUP */
    tokenName?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class BlvtUserLimitInfoUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<BlvtUserLimitInfoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubscriptionRecordUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** BTCDOWN, BTCUP */
    tokenName?: string;
    id?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QuerySubscriptionRecordUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QuerySubscriptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemBlvtUserDataRequest = {
    /** BTCDOWN, BTCUP */
    tokenName: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RedeemBlvtUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RedeemBlvtUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedemptionRecordUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** BTCDOWN, BTCUP */
    tokenName?: string;
    id?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** default 1000, max 1000 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RedemptionRecordUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RedemptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeBlvtUserDataRequest = {
    /** BTCDOWN, BTCUP */
    tokenName: string;
    /** Spot balance */
    cost: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubscribeBlvtUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubscribeBlvtUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
