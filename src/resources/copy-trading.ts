import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

/**
 * Copy Trading Endpoints
 */
export class CopyTrading {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Futures Lead Trader Status(TRADE)
   *
   * @remarks
   * Get Futures Lead Trader Status
   *
   * Weight(UID): 20
   *
   * @returns Futures Lead Trader Status
   *
   * @throws {@link CopyTrading.GetFuturesLeadTraderStatusTradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/copyTrading/futures/userStatus"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CopyTradingFuturesUserStatusResponseSchema },
        errorFactory: CopyTrading.GetFuturesLeadTraderStatusTradeError,
      },
      options,
    );
  }

  /**
   * Get Futures Lead Trading Symbol Whitelist(USER_DATA)
   *
   * @remarks
   * Get Futures Lead Trading Symbol Whitelist
   *
   * Weight(IP): 20
   *
   * @returns Futures Lead Trading Symbol Whitelist
   *
   * @throws {@link CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/copyTrading/futures/leadSymbol"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFuturesLeadTraderStatusTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFuturesLeadTraderStatusTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFuturesLeadTradingSymbolWhitelistUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFuturesLeadTradingSymbolWhitelistUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFuturesLeadTradingSymbolWhitelistUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
