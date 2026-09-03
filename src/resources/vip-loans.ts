import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class VipLoans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

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
        url: this.#servers.default("/sapi/v1/loan/vip/collateral/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "collateralAccountId", value: request.collateralAccountId, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipCollateralAccountResponseSchema },
        errorFactory: VipLoans.CheckLockedValueOfVipCollateralAccountUserDataError,
      },
      options,
    );
  }

  getBorrowInterestRateUserData(
    request: VipLoans.GetBorrowInterestRateUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRequestInterestRateResponse[], VipLoans.GetBorrowInterestRateUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/vip/request/interestRate"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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

  getCollateralAssetDataUserData(
    request: VipLoans.GetCollateralAssetDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipCollateralDataResponse, VipLoans.GetCollateralAssetDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/vip/collateral/data"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipCollateralDataResponseSchema },
        errorFactory: VipLoans.GetCollateralAssetDataUserDataError,
      },
      options,
    );
  }

  getLoanableAssetsData(
    request: VipLoans.GetLoanableAssetsDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipLoanableDataResponse, VipLoans.GetLoanableAssetsDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/vip/loanable/data"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipLoanableDataResponseSchema },
        errorFactory: VipLoans.GetLoanableAssetsDataError,
      },
      options,
    );
  }

  getVipLoanOngoingOrdersUserData(
    request: VipLoans.GetVipLoanOngoingOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipOngoingOrdersResponse, VipLoans.GetVipLoanOngoingOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/vip/ongoing/orders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "collateralAccountId", value: request.collateralAccountId, schema: s.optional(s.number()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipOngoingOrdersResponseSchema },
        errorFactory: VipLoans.GetVipLoanOngoingOrdersUserDataError,
      },
      options,
    );
  }

  getVipLoanRepaymentHistoryUserData(
    request: VipLoans.GetVipLoanRepaymentHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRepayHistoryResponse, VipLoans.GetVipLoanRepaymentHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/vip/repay/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipRepayHistoryResponseSchema },
        errorFactory: VipLoans.GetVipLoanRepaymentHistoryUserDataError,
      },
      options,
    );
  }

  queryApplicationStatusUserData(
    request: VipLoans.QueryApplicationStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRequestDataResponse, VipLoans.QueryApplicationStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/vip/request/data"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipRequestDataResponseSchema },
        errorFactory: VipLoans.QueryApplicationStatusUserDataError,
      },
      options,
    );
  }

  vipLoanBorrow(
    request: VipLoans.VipLoanBorrowRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipBorrowResponse, VipLoans.VipLoanBorrowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/loan/vip/borrow"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "loanAccountId", value: request.loanAccountId, schema: s.number() },
          { name: "loanAmount", value: request.loanAmount, schema: s.number() },
          { name: "collateralAccountId", value: request.collateralAccountId, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.string() },
          { name: "isFlexibleRate", value: request.isFlexibleRate, schema: isFlexibleRateSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "loanTerm", value: request.loanTerm, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipBorrowResponseSchema },
        errorFactory: VipLoans.VipLoanBorrowError,
      },
      options,
    );
  }

  vipLoanRenew(
    request: VipLoans.VipLoanRenewRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRenewResponse, VipLoans.VipLoanRenewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/loan/vip/renew"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "loanTerm", value: request.loanTerm, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanVipRenewResponseSchema },
        errorFactory: VipLoans.VipLoanRenewError,
      },
      options,
    );
  }

  vipLoanRepayTrade(
    request: VipLoans.VipLoanRepayTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanVipRepayResponse, VipLoans.VipLoanRepayTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/loan/vip/repay"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    timestamp: number;
    signature: string;
    orderId?: number;
    collateralAccountId?: number;
    recvWindow?: number;
  };

  export class CheckLockedValueOfVipCollateralAccountUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CheckLockedValueOfVipCollateralAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBorrowInterestRateUserDataRequest = {
    timestamp: number;
    signature: string;
    loanCoin?: string;
    recvWindow?: number;
  };

  export class GetBorrowInterestRateUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetBorrowInterestRateUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCollateralAssetDataUserDataRequest = {
    timestamp: number;
    signature: string;
    collateralCoin?: string;
    recvWindow?: number;
  };

  export class GetCollateralAssetDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetCollateralAssetDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanableAssetsDataRequest = {
    timestamp: number;
    signature: string;
    loanCoin?: string;
    vipLevel?: number;
    recvWindow?: number;
  };

  export class GetLoanableAssetsDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLoanableAssetsDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVipLoanOngoingOrdersUserDataRequest = {
    timestamp: number;
    signature: string;
    orderId?: number;
    collateralAccountId?: number;
    loanCoin?: string;
    collateralCoin?: string;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class GetVipLoanOngoingOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetVipLoanOngoingOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVipLoanRepaymentHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    orderId?: number;
    loanCoin?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class GetVipLoanRepaymentHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetVipLoanRepaymentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryApplicationStatusUserDataRequest = {
    timestamp: number;
    signature: string;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QueryApplicationStatusUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
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
    timestamp: number;
    signature: string;
    loanCoin?: string;
    loanTerm?: number;
    recvWindow?: number;
  };

  export class VipLoanBorrowError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<VipLoanBorrowError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VipLoanRenewRequest = {
    timestamp: number;
    signature: string;
    orderId?: number;
    loanTerm?: number;
    recvWindow?: number;
  };

  export class VipLoanRenewError extends ResponseError<Declared<"error", Error> | Declared<"error2", Error>> {
    static readonly errors: ErrorDecoders<VipLoanRenewError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VipLoanRepayTradeRequest = {
    amount: number;
    timestamp: number;
    signature: string;
    orderId?: number;
    recvWindow?: number;
  };

  export class VipLoanRepayTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<VipLoanRepayTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
