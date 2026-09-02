import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1RebateTaxQueryResponseSchema,
  type SapiV1RebateTaxQueryResponse,
} from "../models/sapi-v1-rebate-tax-query-response.js";
import type { Servers } from "../servers.js";

export class Rebate {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getSpotRebateHistoryRecordsUserData(
    request: Rebate.GetSpotRebateHistoryRecordsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1RebateTaxQueryResponse, Rebate.GetSpotRebateHistoryRecordsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/rebate/taxQuery"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    recvWindow?: number;
  };

  export class GetSpotRebateHistoryRecordsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetSpotRebateHistoryRecordsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
