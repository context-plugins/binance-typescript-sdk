import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { isFlexibleRateSchema, type IsFlexibleRate } from "../models/is-flexible-rate.js";
import {
  sapiV1LoanVipBorrowResponseSchema,
  type SapiV1LoanVipBorrowResponse,
} from "../models/sapi-v1-loan-vip-borrow-response.js";
import {
  sapiV1LoanVipCollateralAccountResponseSchema,
  type SapiV1LoanVipCollateralAccountResponse,
} from "../models/sapi-v1-loan-vip-collateral-account-response.js";
import {
  sapiV1LoanVipCollateralDataResponseSchema,
  type SapiV1LoanVipCollateralDataResponse,
} from "../models/sapi-v1-loan-vip-collateral-data-response.js";
import {
  sapiV1LoanVipLoanableDataResponseSchema,
  type SapiV1LoanVipLoanableDataResponse,
} from "../models/sapi-v1-loan-vip-loanable-data-response.js";
import {
  sapiV1LoanVipOngoingOrdersResponseSchema,
  type SapiV1LoanVipOngoingOrdersResponse,
} from "../models/sapi-v1-loan-vip-ongoing-orders-response.js";
import {
  sapiV1LoanVipRenewResponseSchema,
  type SapiV1LoanVipRenewResponse,
} from "../models/sapi-v1-loan-vip-renew-response.js";
import {
  sapiV1LoanVipRepayHistoryResponseSchema,
  type SapiV1LoanVipRepayHistoryResponse,
} from "../models/sapi-v1-loan-vip-repay-history-response.js";
import {
  sapiV1LoanVipRepayResponseSchema,
  type SapiV1LoanVipRepayResponse,
} from "../models/sapi-v1-loan-vip-repay-response.js";
import {
  sapiV1LoanVipRequestDataResponseSchema,
  type SapiV1LoanVipRequestDataResponse,
} from "../models/sapi-v1-loan-vip-request-data-response.js";
import {
  sapiV1LoanVipRequestInterestRateResponseSchema,
  type SapiV1LoanVipRequestInterestRateResponse,
} from "../models/sapi-v1-loan-vip-request-interest-rate-response.js";
import type { Servers } from "../servers.js";

/**
 * VIP Loans Endpoints
 */
export class VipLoans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check Locked Value of VIP Collateral Account (USER_DATA)
   *
   * @remarks
   * VIP loan is available for VIP users only.
   *
   * Weight(IP): 6000
   *
   * @returns VIP Locked Value
   *
   * @throws {@link VipLoans.CheckLockedValueOfVipCollateralAccountUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkLockedValueOfVipCollateralAccountUserData(
    request: VipLoans.CheckLockedValueOfVipCollateralAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LoanVipCollateralAccountResponse,
    VipLoans.CheckLockedValueOfVipCollateralAccountUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/collateral/account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "collateralAccountId", value: request.collateralAccountId, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipCollateralAccountResponseSchema },
        errorFactory: VipLoans.CheckLockedValueOfVipCollateralAccountUserDataError,
      },
      options,
    );
  }

  /**
   * Get Borrow Interest Rate (USER_DATA)
   *
   * @remarks
   * Get borrow interest rate.
   *
   * Weight(UID): 400
   *
   * @returns Borrow interest rate
   *
   * @throws {@link VipLoans.GetBorrowInterestRateUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBorrowInterestRateUserData(
    request: VipLoans.GetBorrowInterestRateUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRequestInterestRateResponse[], VipLoans.GetBorrowInterestRateUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/request/interestRate"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1LoanVipRequestInterestRateResponseSchema)),
        },
        errorFactory: VipLoans.GetBorrowInterestRateUserDataError,
      },
      options,
    );
  }

  /**
   * Get Collateral Asset Data (USER_DATA)
   *
   * @remarks
   * Get collateral asset data.
   *
   * Weight(IP): 400
   *
   * @returns Collateral Asset Data
   *
   * @throws {@link VipLoans.GetCollateralAssetDataUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCollateralAssetDataUserData(
    request: VipLoans.GetCollateralAssetDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipCollateralDataResponse, VipLoans.GetCollateralAssetDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/collateral/data"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipCollateralDataResponseSchema },
        errorFactory: VipLoans.GetCollateralAssetDataUserDataError,
      },
      options,
    );
  }

  /**
   * Get Loanable Assets Data
   *
   * @remarks
   * Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.
   *
   * Weight(IP): 400
   *
   * @returns Loanable Assets Data
   *
   * @throws {@link VipLoans.GetLoanableAssetsDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLoanableAssetsData(
    request: VipLoans.GetLoanableAssetsDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipLoanableDataResponse, VipLoans.GetLoanableAssetsDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/loanable/data"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipLoanableDataResponseSchema },
        errorFactory: VipLoans.GetLoanableAssetsDataError,
      },
      options,
    );
  }

  /**
   * Get VIP Loan Ongoing Orders (USER_DATA)
   *
   * @remarks
   * VIP loan is available for VIP users only.
   *
   * Weight(IP): 400
   *
   * @returns Ongoing VIP Loan Orders
   *
   * @throws {@link VipLoans.GetVipLoanOngoingOrdersUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVipLoanOngoingOrdersUserData(
    request: VipLoans.GetVipLoanOngoingOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipOngoingOrdersResponse, VipLoans.GetVipLoanOngoingOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/ongoing/orders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "collateralAccountId", value: request.collateralAccountId, schema: s.optional(s.int()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipOngoingOrdersResponseSchema },
        errorFactory: VipLoans.GetVipLoanOngoingOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Get VIP Loan Repayment History (USER_DATA)
   *
   * @remarks
   * VIP loan is available for VIP users only.
   *
   * Weight(IP): 400
   *
   * @returns VIP Loan Repayment History
   *
   * @throws {@link VipLoans.GetVipLoanRepaymentHistoryUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVipLoanRepaymentHistoryUserData(
    request: VipLoans.GetVipLoanRepaymentHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRepayHistoryResponse, VipLoans.GetVipLoanRepaymentHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/repay/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipRepayHistoryResponseSchema },
        errorFactory: VipLoans.GetVipLoanRepaymentHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Query Application Status (USER_DATA)
   *
   * @remarks
   * Get Application Status
   *
   * Weight(UID): 400
   *
   * @returns Application Status
   *
   * @throws {@link VipLoans.QueryApplicationStatusUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryApplicationStatusUserData(
    request: VipLoans.QueryApplicationStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRequestDataResponse, VipLoans.QueryApplicationStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/request/data"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipRequestDataResponseSchema },
        errorFactory: VipLoans.QueryApplicationStatusUserDataError,
      },
      options,
    );
  }

  /**
   * VIP Loan Borrow
   *
   * @remarks
   * VIP loan is available for VIP users only.
   *
   * Weight(UID): 6000
   *
   * @returns Collateral Assets Data
   *
   * @throws {@link VipLoans.VipLoanBorrowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vipLoanBorrow(
    request: VipLoans.VipLoanBorrowRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipBorrowResponse, VipLoans.VipLoanBorrowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/borrow"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "loanAccountId", value: request.loanAccountId, schema: s.int() },
          { name: "loanAmount", value: request.loanAmount, schema: s.float64() },
          { name: "collateralAccountId", value: request.collateralAccountId, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.string() },
          { name: "isFlexibleRate", value: request.isFlexibleRate, schema: isFlexibleRateSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "loanTerm", value: request.loanTerm, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipBorrowResponseSchema },
        errorFactory: VipLoans.VipLoanBorrowError,
      },
      options,
    );
  }

  /**
   * VIP Loan Renew
   *
   * @remarks
   * VIP loan is available for VIP users only.
   *
   * Weight(UID): 6000
   *
   * @returns Loan renew result
   *
   * @throws {@link VipLoans.VipLoanRenewError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vipLoanRenew(
    request: VipLoans.VipLoanRenewRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRenewResponse, VipLoans.VipLoanRenewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/renew"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "loanTerm", value: request.loanTerm, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipRenewResponseSchema },
        errorFactory: VipLoans.VipLoanRenewError,
      },
      options,
    );
  }

  /**
   * VIP Loan Repay (TRADE)
   *
   * @remarks
   * VIP loan is available for VIP users only.
   *
   * Weight(UID): 6000
   *
   * @returns VIP Loan Repayment
   *
   * @throws {@link VipLoans.VipLoanRepayTradeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vipLoanRepayTrade(
    request: VipLoans.VipLoanRepayTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRepayResponse, VipLoans.VipLoanRepayTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/loan/vip/repay"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipRepayResponseSchema },
        errorFactory: VipLoans.VipLoanRepayTradeError,
      },
      options,
    );
  }
}

export namespace VipLoans {
  export type CheckLockedValueOfVipCollateralAccountUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order id */
    orderId?: number;
    collateralAccountId?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CheckLockedValueOfVipCollateralAccountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CheckLockedValueOfVipCollateralAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBorrowInterestRateUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Max 10 assets, Multiple split by "," */
    loanCoin?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetBorrowInterestRateUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetBorrowInterestRateUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCollateralAssetDataUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetCollateralAssetDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetCollateralAssetDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanableAssetsDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    /** Defaults to user's vip level */
    vipLevel?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetLoanableAssetsDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLoanableAssetsDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVipLoanOngoingOrdersUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order id */
    orderId?: number;
    collateralAccountId?: number;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default 10; max 100. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetVipLoanOngoingOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetVipLoanOngoingOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVipLoanRepaymentHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order id */
    orderId?: number;
    /** Coin loaned */
    loanCoin?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default 10; max 100. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetVipLoanRepaymentHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetVipLoanRepaymentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryApplicationStatusUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryApplicationStatusUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryApplicationStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VipLoanBorrowRequest = {
    loanAccountId: number;
    loanAmount: number;
    collateralAccountId: string;
    collateralCoin: string;
    isFlexibleRate: IsFlexibleRate;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    loanTerm?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class VipLoanBorrowError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<VipLoanBorrowError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VipLoanRenewRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order id */
    orderId?: number;
    loanTerm?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class VipLoanRenewError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<VipLoanRenewError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VipLoanRepayTradeRequest = {
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order id */
    orderId?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class VipLoanRepayTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<VipLoanRepayTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
