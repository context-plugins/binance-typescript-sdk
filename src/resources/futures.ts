import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

export class Futures {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getFutureAccountTransactionHistoryListUserData(
    request: Futures.GetFutureAccountTransactionHistoryListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1FuturesTransferResponse1, Futures.GetFutureAccountTransactionHistoryListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/futures/transfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1FuturesTransferResponse1Schema },
        errorFactory: Futures.GetFutureAccountTransactionHistoryListUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/futures/histDataLink"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "dataType", value: request.dataType, schema: dataTypeSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1FuturesHistDataLinkResponseSchema },
        errorFactory: Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError,
      },
      options,
    );
  }

  newFutureAccountTransferUserData(
    request: Futures.NewFutureAccountTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1FuturesTransferResponse, Futures.NewFutureAccountTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/futures/transfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "type", value: request.type, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    startTime: number;
    timestamp: number;
    signature: string;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetFutureAccountTransactionHistoryListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFutureAccountTransactionHistoryListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataRequest = {
    symbol: string;
    dataType: DataType;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
  };

  export class GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NewFutureAccountTransferUserDataRequest = {
    asset: string;
    amount: number;
    type: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class NewFutureAccountTransferUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<NewFutureAccountTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
