import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { dataTypeSchema, type DataType } from "../models/data-type.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1FuturesHistDataLinkResponseSchema,
  type SapiV1FuturesHistDataLinkResponse,
} from "../models/sapi-v1-futures-hist-data-link-response.js";
import {
  sapiV1FuturesTransferResponseSchema,
  type SapiV1FuturesTransferResponse,
} from "../models/sapi-v1-futures-transfer-response.js";
import {
  sapiV1FuturesTransferResponse1Schema,
  type SapiV1FuturesTransferResponse1,
} from "../models/sapi-v1-futures-transfer-response1.js";
import type { Servers } from "../servers.js";

/**
 * Futures Endpoints
 */
export class Futures {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Future Account Transaction History List (USER_DATA)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns Futures Transfer Query
   *
   * @throws {@link Futures.GetFutureAccountTransactionHistoryListUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFutureAccountTransactionHistoryListUserData(
    request: Futures.GetFutureAccountTransactionHistoryListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1FuturesTransferResponse1, Futures.GetFutureAccountTransactionHistoryListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/futures/transfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1FuturesTransferResponse1Schema },
        errorFactory: Futures.GetFutureAccountTransactionHistoryListUserDataError,
      },
      options,
    );
  }

  /**
   * Get Future TickLevel Orderbook Historical Data Download Link (USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns data link
   *
   * @throws {@link Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFutureTickLevelOrderbookHistoricalDataDownloadLinkUserData(
    request: Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1FuturesHistDataLinkResponse,
    Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/futures/histDataLink"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "dataType", value: request.dataType, schema: dataTypeSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1FuturesHistDataLinkResponseSchema },
        errorFactory: Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError,
      },
      options,
    );
  }

  /**
   * New Future Account Transfer (USER_DATA)
   *
   * @remarks
   * Execute transfer between spot account and futures account.
   *
   * Weight(IP): 1
   *
   * @returns Futures Transfer
   *
   * @throws {@link Futures.NewFutureAccountTransferUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  newFutureAccountTransferUserData(
    request: Futures.NewFutureAccountTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1FuturesTransferResponse, Futures.NewFutureAccountTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/futures/transfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "type", value: request.type, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1FuturesTransferResponseSchema },
        errorFactory: Futures.NewFutureAccountTransferUserDataError,
      },
      options,
    );
  }
}

export namespace Futures {
  export type GetFutureAccountTransactionHistoryListUserDataRequest = {
    asset: string;
    /** UTC timestamp in ms */
    startTime: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFutureAccountTransactionHistoryListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFutureAccountTransactionHistoryListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataRequest = {
    symbol: string;
    dataType: DataType;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError> =
      [
        { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
        { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      ];
  }

  export type NewFutureAccountTransferUserDataRequest = {
    asset: string;
    amount: number;
    /**
     * 1: transfer from spot account to USDT-Ⓜ futures account. 2: transfer from USDT-Ⓜ futures
     * account to spot account. 3: transfer from spot account to COIN-Ⓜ futures account. 4: transfer
     * from COIN-Ⓜ futures account to spot account.
     */
    type: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class NewFutureAccountTransferUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<NewFutureAccountTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
