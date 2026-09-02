import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1CopyTradingFuturesLeadSymbolResponseSchema,
  type SapiV1CopyTradingFuturesLeadSymbolResponse,
} from "../models/sapi-v1-copy-trading-futures-lead-symbol-response.js";
import {
  sapiV1CopyTradingFuturesUserStatusResponseSchema,
  type SapiV1CopyTradingFuturesUserStatusResponse,
} from "../models/sapi-v1-copy-trading-futures-user-status-response.js";
import type { Servers } from "../servers.js";

export class CopyTrading {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getFuturesLeadTraderStatusTrade(
    request: CopyTrading.GetFuturesLeadTraderStatusTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1CopyTradingFuturesUserStatusResponse,
    CopyTrading.GetFuturesLeadTraderStatusTradeError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/copyTrading/futures/userStatus"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CopyTradingFuturesUserStatusResponseSchema },
        errorFactory: CopyTrading.GetFuturesLeadTraderStatusTradeError,
      },
      options,
    );
  }

  getFuturesLeadTradingSymbolWhitelistUserData(
    request: CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1CopyTradingFuturesLeadSymbolResponse,
    CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/copyTrading/futures/leadSymbol"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CopyTradingFuturesLeadSymbolResponseSchema },
        errorFactory: CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataError,
      },
      options,
    );
  }
}

export namespace CopyTrading {
  export type GetFuturesLeadTraderStatusTradeRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetFuturesLeadTraderStatusTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFuturesLeadTraderStatusTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFuturesLeadTradingSymbolWhitelistUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetFuturesLeadTradingSymbolWhitelistUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFuturesLeadTradingSymbolWhitelistUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
