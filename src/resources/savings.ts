import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

/**
 * Savings Endpoints
 */
export class Savings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Change Fixed/Activity Position to Daily Position (USER_DATA)
   *
   * @remarks
   * - PositionId is mandatory parameter for fixed position.
   *
   * Weight(IP): 1
   *
   * @returns Purchase information
   *
   * @throws {@link Savings.ChangeFixedActivityPositionToDailyPositionUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/lending/positionChanged"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "lot", value: request.lot, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "positionId", value: request.positionId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingPositionChangedResponseSchema },
        errorFactory: Savings.ChangeFixedActivityPositionToDailyPositionUserDataError,
      },
      options,
    );
  }

  /**
   * Get Fixed/Activity Project List(USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns List of fixed projects
   *
   * @throws {@link Savings.GetFixedActivityProjectListUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFixedActivityProjectListUserData(
    request: Savings.GetFixedActivityProjectListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingProjectListResponse[], Savings.GetFixedActivityProjectListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/project/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: type8Schema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
          { name: "isSortAsc", value: request.isSortAsc, schema: s.optional(s.boolean()) },
          { name: "sortBy", value: request.sortBy, schema: s.optional(s.lazy(() => sortBySchema)) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1LendingProjectListResponseSchema)) },
        errorFactory: Savings.GetFixedActivityProjectListUserDataError,
      },
      options,
    );
  }

  /**
   * Get Fixed/Activity Project Position (USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns List of fixed project positions
   *
   * @throws {@link Savings.GetFixedActivityProjectPositionUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/lending/project/position/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "projectId", value: request.projectId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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

  /**
   * Purchase Fixed/Activity Project (USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Generated Purchase Id
   *
   * @throws {@link Savings.PurchaseFixedActivityProjectUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/lending/customizedFixed/purchase"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "lot", value: request.lot, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    positionId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class ChangeFixedActivityPositionToDailyPositionUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ChangeFixedActivityPositionToDailyPositionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFixedActivityProjectListUserDataRequest = {
    type: Type8;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    /** Default `ALL` */
    status?: Status;
    /** default "true" */
    isSortAsc?: boolean;
    /** Default `START_TIME` */
    sortBy?: SortBy;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFixedActivityProjectListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFixedActivityProjectListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFixedActivityProjectPositionUserDataRequest = {
    asset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    projectId?: string;
    /** Default `ALL` */
    status?: Status;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFixedActivityProjectPositionUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFixedActivityProjectPositionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PurchaseFixedActivityProjectUserDataRequest = {
    projectId: string;
    lot: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class PurchaseFixedActivityProjectUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<PurchaseFixedActivityProjectUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
