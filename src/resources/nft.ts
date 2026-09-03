import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class Nft {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getNftAssetUserData(
    request: Nft.GetNftAssetUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1NftUserGetAssetResponse, Nft.GetNftAssetUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/nft/user/getAsset"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1NftUserGetAssetResponseSchema },
        errorFactory: Nft.GetNftAssetUserDataError,
      },
      options,
    );
  }

  getNftDepositHistoryUserData(
    request: Nft.GetNftDepositHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1NftHistoryDepositResponse, Nft.GetNftDepositHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/nft/history/deposit"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1NftHistoryDepositResponseSchema },
        errorFactory: Nft.GetNftDepositHistoryUserDataError,
      },
      options,
    );
  }

  getNftTransactionHistoryUserData(
    request: Nft.GetNftTransactionHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1NftHistoryTransactionsResponse, Nft.GetNftTransactionHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/nft/history/transactions"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "orderType", value: request.orderType, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1NftHistoryTransactionsResponseSchema },
        errorFactory: Nft.GetNftTransactionHistoryUserDataError,
      },
      options,
    );
  }

  getNftWithdrawHistoryUserData(
    request: Nft.GetNftWithdrawHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1NftHistoryWithdrawResponse, Nft.GetNftWithdrawHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/nft/history/withdraw"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    timestamp: number;
    signature: string;
    limit?: number;
    page?: number;
    recvWindow?: number;
  };

  export class GetNftAssetUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetNftAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetNftDepositHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    page?: number;
    recvWindow?: number;
  };

  export class GetNftDepositHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetNftDepositHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetNftTransactionHistoryUserDataRequest = {
    orderType: number;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    page?: number;
    recvWindow?: number;
  };

  export class GetNftTransactionHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetNftTransactionHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetNftWithdrawHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    page?: number;
    recvWindow?: number;
  };

  export class GetNftWithdrawHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetNftWithdrawHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
