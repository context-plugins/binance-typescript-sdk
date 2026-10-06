import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

/**
 * Fiat Endpoints
 */
export class Fiat {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fiat Deposit/Withdraw History (USER_DATA)
   *
   * @remarks
   * - If beginTime and endTime are not sent, the recent 30-day data will be returned.
   *
   * Weight(UID): 90000
   *
   * @returns History of deposit/withdraw orders
   *
   * @throws {@link Fiat.FiatDepositWithdrawHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fiatDepositWithdrawHistoryUserData(
    request: Fiat.FiatDepositWithdrawHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1FiatOrdersResponse, Fiat.FiatDepositWithdrawHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/fiat/orders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "transactionType", value: request.transactionType, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "beginTime", value: request.beginTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "rows", value: request.rows, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1FiatOrdersResponseSchema },
        errorFactory: Fiat.FiatDepositWithdrawHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Fiat Payments History (USER_DATA)
   *
   * @remarks
   * - If beginTime and endTime are not sent, the recent 30-day data will be returned.
   *
   * Weight(IP): 1
   *
   * @returns History of fiat payments
   *
   * @throws {@link Fiat.FiatPaymentsHistoryUserDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fiatPaymentsHistoryUserData(
    request: Fiat.FiatPaymentsHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1FiatPaymentsResponse, Fiat.FiatPaymentsHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/fiat/payments"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "transactionType", value: request.transactionType, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "beginTime", value: request.beginTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "rows", value: request.rows, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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
    /**
     * * `0` - deposit
     * * `1` - withdraw
     */
    transactionType: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    beginTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 1 */
    page?: number;
    /** Default 100, max 500 */
    rows?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FiatDepositWithdrawHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FiatDepositWithdrawHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FiatPaymentsHistoryUserDataRequest = {
    /**
     * * `0` - deposit
     * * `1` - withdraw
     */
    transactionType: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    beginTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 1 */
    page?: number;
    /** Default 100, max 500 */
    rows?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FiatPaymentsHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FiatPaymentsHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
