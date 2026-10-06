import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1RebateTaxQueryResponseSchema,
  type SapiV1RebateTaxQueryResponse,
} from "../models/sapi-v1-rebate-tax-query-response.js";
import type { Servers } from "../servers.js";

/**
 * Rebate Endpoints
 */
export class Rebate {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Spot Rebate History Records (USER_DATA)
   *
   * @remarks
   * - The max interval between startTime and endTime is 90 days.
   * - If startTime and endTime are not sent, the recent 7 days' data will be returned.
   * - The earliest startTime is supported on June 10, 2020
   *
   * Weight(UID): 3000
   *
   * @returns Rebate History
   *
   * @throws {@link Rebate.GetSpotRebateHistoryRecordsUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSpotRebateHistoryRecordsUserData(
    request: Rebate.GetSpotRebateHistoryRecordsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1RebateTaxQueryResponse, Rebate.GetSpotRebateHistoryRecordsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/rebate/taxQuery"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1RebateTaxQueryResponseSchema },
        errorFactory: Rebate.GetSpotRebateHistoryRecordsUserDataError,
      },
      options,
    );
  }
}

export namespace Rebate {
  export type GetSpotRebateHistoryRecordsUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** default 1 */
    page?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetSpotRebateHistoryRecordsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetSpotRebateHistoryRecordsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
