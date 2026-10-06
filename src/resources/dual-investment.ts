import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { autoCompoundPlanSchema, type AutoCompoundPlan } from "../models/auto-compound-plan.js";
import { errorSchema, type Error } from "../models/error.js";
import { optionTypeSchema, type OptionType } from "../models/option-type.js";
import {
  sapiV1DciProductAccountsResponseSchema,
  type SapiV1DciProductAccountsResponse,
} from "../models/sapi-v1-dci-product-accounts-response.js";
import {
  sapiV1DciProductAutoCompoundEditStatusResponseSchema,
  type SapiV1DciProductAutoCompoundEditStatusResponse,
} from "../models/sapi-v1-dci-product-auto-compound-edit-status-response.js";
import {
  sapiV1DciProductListResponseSchema,
  type SapiV1DciProductListResponse,
} from "../models/sapi-v1-dci-product-list-response.js";
import {
  sapiV1DciProductPositionsResponseSchema,
  type SapiV1DciProductPositionsResponse,
} from "../models/sapi-v1-dci-product-positions-response.js";
import {
  sapiV1DciProductSubscribeResponseSchema,
  type SapiV1DciProductSubscribeResponse,
} from "../models/sapi-v1-dci-product-subscribe-response.js";
import { status2Schema, type Status2 } from "../models/status2.js";
import type { Servers } from "../servers.js";

export class DualInvestment {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Change Auto-Compound status(USER_DATA)
   *
   * @remarks
   * Change Auto-Compound status
   *
   * - 15:31 ~ 16:00 UTC+8 This function is disabled
   *
   * Weight(IP): 1
   *
   * Rate Limit: Maximum 1 time/s per account
   *
   * @returns Change Auto-Compound status response
   *
   * @throws {@link DualInvestment.ChangeAutoCompoundStatusUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changeAutoCompoundStatusUserData(
    request: DualInvestment.ChangeAutoCompoundStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1DciProductAutoCompoundEditStatusResponse,
    DualInvestment.ChangeAutoCompoundStatusUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/dci/product/auto_compound/edit-status"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "positionId", value: request.positionId, schema: s.int() },
          { name: "autoCompoundPlan", value: request.autoCompoundPlan, schema: autoCompoundPlanSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1DciProductAutoCompoundEditStatusResponseSchema },
        errorFactory: DualInvestment.ChangeAutoCompoundStatusUserDataError,
      },
      options,
    );
  }

  /**
   * Check Dual Investment accounts(USER_DATA)
   *
   * @remarks
   * Check Dual Investment accounts
   *
   * Weight(IP): 1
   *
   * @returns Dual Investment accounts
   *
   * @throws {@link DualInvestment.CheckDualInvestmentAccountsUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkDualInvestmentAccountsUserData(
    request: DualInvestment.CheckDualInvestmentAccountsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1DciProductAccountsResponse, DualInvestment.CheckDualInvestmentAccountsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/dci/product/accounts"),
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
        success: { kind: "json", schema: sapiV1DciProductAccountsResponseSchema },
        errorFactory: DualInvestment.CheckDualInvestmentAccountsUserDataError,
      },
      options,
    );
  }

  /**
   * Get Dual Investment positions(USER_DATA)
   *
   * @remarks
   * Get Dual Investment positions (batch)
   *
   * Weight(IP): 1
   *
   * @returns Dual Investment product list
   *
   * @throws {@link DualInvestment.GetDualInvestmentPositionsUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDualInvestmentPositionsUserData(
    request: DualInvestment.GetDualInvestmentPositionsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1DciProductPositionsResponse, DualInvestment.GetDualInvestmentPositionsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/dci/product/positions"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status2Schema)) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1DciProductPositionsResponseSchema },
        errorFactory: DualInvestment.GetDualInvestmentPositionsUserDataError,
      },
      options,
    );
  }

  /**
   * Get Dual Investment product list(USER_DATA)
   *
   * @remarks
   * Get Dual Investment product list
   *
   * Weight(IP): 1
   *
   * @returns Dual Investment product list
   *
   * @throws {@link DualInvestment.GetDualInvestmentProductListUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDualInvestmentProductListUserData(
    request: DualInvestment.GetDualInvestmentProductListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1DciProductListResponse, DualInvestment.GetDualInvestmentProductListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/dci/product/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "optionType", value: request.optionType, schema: optionTypeSchema },
          { name: "exercisedCoin", value: request.exercisedCoin, schema: s.string() },
          { name: "investCoin", value: request.investCoin, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1DciProductListResponseSchema },
        errorFactory: DualInvestment.GetDualInvestmentProductListUserDataError,
      },
      options,
    );
  }

  /**
   * Subscribe Dual Investment products(USER_DATA)
   *
   * @remarks
   * Subscribe Dual Investment products
   *
   * - `Products are not available.` means that the APR changes to lower value, or the orders are
   *   not available.
   * - `Failed` is a system or network errors.
   *
   * Weight(IP): 1
   *
   * @returns Dual Investment product subscription response
   *
   * @throws {@link DualInvestment.SubscribeDualInvestmentProductsUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeDualInvestmentProductsUserData(
    request: DualInvestment.SubscribeDualInvestmentProductsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1DciProductSubscribeResponse,
    DualInvestment.SubscribeDualInvestmentProductsUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/dci/product/subscribe"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
          { name: "depositAmount", value: request.depositAmount, schema: s.float64() },
          { name: "autoCompoundPlan", value: request.autoCompoundPlan, schema: autoCompoundPlanSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1DciProductSubscribeResponseSchema },
        errorFactory: DualInvestment.SubscribeDualInvestmentProductsUserDataError,
      },
      options,
    );
  }
}

export namespace DualInvestment {
  export type ChangeAutoCompoundStatusUserDataRequest = {
    /** Get positionId from /sapi/v1/dci/product/positions */
    positionId: number;
    /** NONE: switch off the plan, STANDARD: standard plan, ADVANCED: advanced plan; */
    autoCompoundPlan: AutoCompoundPlan;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class ChangeAutoCompoundStatusUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ChangeAutoCompoundStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CheckDualInvestmentAccountsUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CheckDualInvestmentAccountsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CheckDualInvestmentAccountsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetDualInvestmentPositionsUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * - PENDING: Products are purchasing, will give results later;
     * - PURCHASE_SUCCESS: purchase successfully;
     * - SETTLED: Products are finish settling;
     * - PURCHASE_FAIL: fail to purchase;
     * - REFUNDING: refund ongoing;
     * - REFUND_SUCCESS: refund to spot account successfully;
     * - SETTLING: Products are settling. If don't fill this field, will response all the position
     *   status.
     */
    status?: Status2;
    /** MIN 1, MAX 100; Default 100 */
    pageSize?: string;
    /** Page number, default is first page, start form 1 */
    pageIndex?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetDualInvestmentPositionsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetDualInvestmentPositionsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetDualInvestmentProductListUserDataRequest = {
    /** Input CALL or PUT */
    optionType: OptionType;
    /**
     * Target exercised asset, e.g.: if you subscribe to a high sell product (call option), you
     * should input:
     *   - optionType: CALL,
     *   - exercisedCoin: USDT,
     *   - investCoin: BNB;
     *
     * if you subscribe to a low buy product (put option), you should input:
     *   - optionType: PUT,
     *   - exercisedCoin: BNB,
     *   - investCoin: USDT;
     */
    exercisedCoin: string;
    /**
     * Asset used for subscribing, e.g.: if you subscribe to a high sell product (call option), you
     * should input:
     *   - optionType: CALL,
     *   - exercisedCoin: USDT,
     *   - investCoin: BNB;
     *
     * if you subscribe to a low buy product (put option), you should input:
     *   - optionType: PUT,
     *   - exercisedCoin: BNB,
     *   - investCoin: USDT;
     */
    investCoin: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** MIN 1, MAX 100; Default 100 */
    pageSize?: string;
    /** Page number, default is first page, start form 1 */
    pageIndex?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetDualInvestmentProductListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetDualInvestmentProductListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeDualInvestmentProductsUserDataRequest = {
    /** get id from /sapi/v1/dci/product/list */
    id: string;
    /** get orderId from /sapi/v1/dci/product/list */
    orderId: string;
    depositAmount: number;
    /** NONE: switch off the plan, STANDARD: standard plan, ADVANCED: advanced plan; */
    autoCompoundPlan: AutoCompoundPlan;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubscribeDualInvestmentProductsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubscribeDualInvestmentProductsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
