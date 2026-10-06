import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1C2COrderMatchListUserOrderHistoryResponseSchema,
  type SapiV1C2COrderMatchListUserOrderHistoryResponse,
} from "../models/sapi-v1-c2-corder-match-list-user-order-history-response.js";
import { tradeTypeSchema, type TradeType } from "../models/trade-type.js";
import type { Servers } from "../servers.js";

/**
 * Consumer-To-Consumer Endpoints
 */
export class C2C {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get C2C Trade History (USER_DATA)
   *
   * @remarks
   * - If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned.
   * - The max interval between startTimestamp and endTimestamp is 30 days.
   *
   * Weight(IP): 1
   *
   * @returns Trades history
   *
   * @throws {@link C2C.GetC2CTradeHistoryUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getC2CTradeHistoryUserData(
    request: C2C.GetC2CTradeHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1C2COrderMatchListUserOrderHistoryResponse, C2C.GetC2CTradeHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/c2c/orderMatch/listUserOrderHistory"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "tradeType", value: request.tradeType, schema: tradeTypeSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTimestamp", value: request.startTimestamp, schema: s.optional(s.int()) },
          { name: "endTimestamp", value: request.endTimestamp, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "rows", value: request.rows, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1C2COrderMatchListUserOrderHistoryResponseSchema },
        errorFactory: C2C.GetC2CTradeHistoryUserDataError,
      },
      options,
    );
  }
}

export namespace C2C {
  export type GetC2CTradeHistoryUserDataRequest = {
    tradeType: TradeType;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTimestamp?: number;
    /** UTC timestamp in ms */
    endTimestamp?: number;
    /** Default 1 */
    page?: number;
    /** default 100, max 100 */
    rows?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetC2CTradeHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetC2CTradeHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
