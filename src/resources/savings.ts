import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1LendingCustomizedFixedPurchaseResponseSchema,
  type SapiV1LendingCustomizedFixedPurchaseResponse,
} from "../models/sapi-v1-lending-customized-fixed-purchase-response.js";
import {
  sapiV1LendingPositionChangedResponseSchema,
  type SapiV1LendingPositionChangedResponse,
} from "../models/sapi-v1-lending-position-changed-response.js";
import {
  sapiV1LendingProjectListResponseSchema,
  type SapiV1LendingProjectListResponse,
} from "../models/sapi-v1-lending-project-list-response.js";
import {
  sapiV1LendingProjectPositionListResponseSchema,
  type SapiV1LendingProjectPositionListResponse,
} from "../models/sapi-v1-lending-project-position-list-response.js";
import { sortBySchema, type SortBy } from "../models/sort-by.js";
import { statusSchema, type Status } from "../models/status.js";
import { type8Schema, type Type8 } from "../models/type8.js";
import type { Servers } from "../servers.js";

export class Savings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  changeFixedActivityPositionToDailyPositionUserData(
    request: Savings.ChangeFixedActivityPositionToDailyPositionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingPositionChangedResponse,
    Savings.ChangeFixedActivityPositionToDailyPositionUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/lending/positionChanged"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "lot", value: request.lot, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "positionId", value: request.positionId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingPositionChangedResponseSchema },
        errorFactory: Savings.ChangeFixedActivityPositionToDailyPositionUserDataError,
      },
      options,
    );
  }

  getFixedActivityProjectListUserData(
    request: Savings.GetFixedActivityProjectListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingProjectListResponse[], Savings.GetFixedActivityProjectListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/lending/project/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "type", value: request.type, schema: type8Schema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
          { name: "isSortAsc", value: request.isSortAsc, schema: s.optional(s.boolean()) },
          { name: "sortBy", value: request.sortBy, schema: s.optional(s.lazy(() => sortBySchema)) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1LendingProjectListResponseSchema)) },
        errorFactory: Savings.GetFixedActivityProjectListUserDataError,
      },
      options,
    );
  }

  getFixedActivityProjectPositionUserData(
    request: Savings.GetFixedActivityProjectPositionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingProjectPositionListResponse[],
    Savings.GetFixedActivityProjectPositionUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/lending/project/position/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "projectId", value: request.projectId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1LendingProjectPositionListResponseSchema)),
        },
        errorFactory: Savings.GetFixedActivityProjectPositionUserDataError,
      },
      options,
    );
  }

  purchaseFixedActivityProjectUserData(
    request: Savings.PurchaseFixedActivityProjectUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingCustomizedFixedPurchaseResponse,
    Savings.PurchaseFixedActivityProjectUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/lending/customizedFixed/purchase"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "lot", value: request.lot, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingCustomizedFixedPurchaseResponseSchema },
        errorFactory: Savings.PurchaseFixedActivityProjectUserDataError,
      },
      options,
    );
  }
}

export namespace Savings {
  export type ChangeFixedActivityPositionToDailyPositionUserDataRequest = {
    projectId: string;
    lot: string;
    timestamp: number;
    signature: string;
    positionId?: string;
    recvWindow?: number;
  };

  export class ChangeFixedActivityPositionToDailyPositionUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ChangeFixedActivityPositionToDailyPositionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFixedActivityProjectListUserDataRequest = {
    type: Type8;
    timestamp: number;
    signature: string;
    asset?: string;
    status?: Status;
    isSortAsc?: boolean;
    sortBy?: SortBy;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetFixedActivityProjectListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFixedActivityProjectListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFixedActivityProjectPositionUserDataRequest = {
    asset: string;
    timestamp: number;
    signature: string;
    projectId?: string;
    status?: Status;
    recvWindow?: number;
  };

  export class GetFixedActivityProjectPositionUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFixedActivityProjectPositionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PurchaseFixedActivityProjectUserDataRequest = {
    projectId: string;
    lot: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class PurchaseFixedActivityProjectUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<PurchaseFixedActivityProjectUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
