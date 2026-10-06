import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1NftHistoryDepositResponseSchema,
  type SapiV1NftHistoryDepositResponse,
} from "../models/sapi-v1-nft-history-deposit-response.js";
import {
  sapiV1NftHistoryTransactionsResponseSchema,
  type SapiV1NftHistoryTransactionsResponse,
} from "../models/sapi-v1-nft-history-transactions-response.js";
import {
  sapiV1NftHistoryWithdrawResponseSchema,
  type SapiV1NftHistoryWithdrawResponse,
} from "../models/sapi-v1-nft-history-withdraw-response.js";
import {
  sapiV1NftUserGetAssetResponseSchema,
  type SapiV1NftUserGetAssetResponse,
} from "../models/sapi-v1-nft-user-get-asset-response.js";
import type { Servers } from "../servers.js";

/**
 * NFT Endpoints
 */
export class Nft {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get NFT Asset (USER_DATA)
   *
   * @remarks
   * Weight(UID): 3000
   *
   * @returns Asset Information
   *
   * @throws {@link Nft.GetNftAssetUserDataError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNftAssetUserData(
    request: Nft.GetNftAssetUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1NftUserGetAssetResponse, Nft.GetNftAssetUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/nft/user/getAsset"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1NftUserGetAssetResponseSchema },
        errorFactory: Nft.GetNftAssetUserDataError,
      },
      options,
    );
  }

  /**
   * Get NFT Deposit History(USER_DATA)
   *
   * @remarks
   * - The max interval between startTime and endTime is 90 days.
   * - If startTime and endTime are not sent, the recent 7 days' data will be returned.
   *
   * Weight(UID): 3000
   *
   * @returns NFT Deposit History
   *
   * @throws {@link Nft.GetNftDepositHistoryUserDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNftDepositHistoryUserData(
    request: Nft.GetNftDepositHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1NftHistoryDepositResponse, Nft.GetNftDepositHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/nft/history/deposit"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1NftHistoryDepositResponseSchema },
        errorFactory: Nft.GetNftDepositHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get NFT Transaction History (USER_DATA)
   *
   * @remarks
   * - The max interval between startTime and endTime is 90 days.
   * - If startTime and endTime are not sent, the recent 7 days' data will be returned.
   *
   * Weight(UID): 3000
   *
   * @returns NFT Transaction History
   *
   * @throws {@link Nft.GetNftTransactionHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNftTransactionHistoryUserData(
    request: Nft.GetNftTransactionHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1NftHistoryTransactionsResponse, Nft.GetNftTransactionHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/nft/history/transactions"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "orderType", value: request.orderType, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1NftHistoryTransactionsResponseSchema },
        errorFactory: Nft.GetNftTransactionHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get NFT Withdraw History (USER_DATA)
   *
   * @remarks
   * - The max interval between startTime and endTime is 90 days.
   * - If startTime and endTime are not sent, the recent 7 days' data will be returned.
   *
   * Weight(UID): 3000
   *
   * @returns NFT Withdraw History
   *
   * @throws {@link Nft.GetNftWithdrawHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNftWithdrawHistoryUserData(
    request: Nft.GetNftWithdrawHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1NftHistoryWithdrawResponse, Nft.GetNftWithdrawHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/nft/history/withdraw"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1NftHistoryWithdrawResponseSchema },
        errorFactory: Nft.GetNftWithdrawHistoryUserDataError,
      },
      options,
    );
  }
}

export namespace Nft {
  export type GetNftAssetUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Default 50, Max 50 */
    limit?: number;
    /** Default 1 */
    page?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetNftAssetUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetNftAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetNftDepositHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 50, Max 50 */
    limit?: number;
    /** Default 1 */
    page?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetNftDepositHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetNftDepositHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetNftTransactionHistoryUserDataRequest = {
    /** 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee */
    orderType: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 50, Max 50 */
    limit?: number;
    /** Default 1 */
    page?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetNftTransactionHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetNftTransactionHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetNftWithdrawHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 50, Max 50 */
    limit?: number;
    /** Default 1 */
    page?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetNftWithdrawHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetNftWithdrawHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
