import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1LoanAdjustLtvResponseSchema,
  type SapiV1LoanAdjustLtvResponse,
} from "../models/sapi-v1-loan-adjust-ltv-response.js";
import {
  sapiV1LoanBorrowHistoryResponseSchema,
  type SapiV1LoanBorrowHistoryResponse,
} from "../models/sapi-v1-loan-borrow-history-response.js";
import {
  sapiV1LoanBorrowResponseSchema,
  type SapiV1LoanBorrowResponse,
} from "../models/sapi-v1-loan-borrow-response.js";
import {
  sapiV1LoanCollateralDataResponseSchema,
  type SapiV1LoanCollateralDataResponse,
} from "../models/sapi-v1-loan-collateral-data-response.js";
import {
  sapiV1LoanCustomizeMarginCallResponseSchema,
  type SapiV1LoanCustomizeMarginCallResponse,
} from "../models/sapi-v1-loan-customize-margin-call-response.js";
import {
  sapiV1LoanIncomeResponseSchema,
  type SapiV1LoanIncomeResponse,
} from "../models/sapi-v1-loan-income-response.js";
import {
  sapiV1LoanLoanableDataResponseSchema,
  type SapiV1LoanLoanableDataResponse,
} from "../models/sapi-v1-loan-loanable-data-response.js";
import {
  sapiV1LoanLtvAdjustmentHistoryResponseSchema,
  type SapiV1LoanLtvAdjustmentHistoryResponse,
} from "../models/sapi-v1-loan-ltv-adjustment-history-response.js";
import {
  sapiV1LoanOngoingOrdersResponseSchema,
  type SapiV1LoanOngoingOrdersResponse,
} from "../models/sapi-v1-loan-ongoing-orders-response.js";
import {
  sapiV1LoanRepayCollateralRateResponseSchema,
  type SapiV1LoanRepayCollateralRateResponse,
} from "../models/sapi-v1-loan-repay-collateral-rate-response.js";
import {
  sapiV1LoanRepayHistoryResponseSchema,
  type SapiV1LoanRepayHistoryResponse,
} from "../models/sapi-v1-loan-repay-history-response.js";
import {
  sapiV2LoanFlexibleAdjustLtvResponseSchema,
  type SapiV2LoanFlexibleAdjustLtvResponse,
} from "../models/sapi-v2-loan-flexible-adjust-ltv-response.js";
import {
  sapiV2LoanFlexibleBorrowHistoryResponseSchema,
  type SapiV2LoanFlexibleBorrowHistoryResponse,
} from "../models/sapi-v2-loan-flexible-borrow-history-response.js";
import {
  sapiV2LoanFlexibleBorrowResponseSchema,
  type SapiV2LoanFlexibleBorrowResponse,
} from "../models/sapi-v2-loan-flexible-borrow-response.js";
import {
  sapiV2LoanFlexibleCollateralDataResponseSchema,
  type SapiV2LoanFlexibleCollateralDataResponse,
} from "../models/sapi-v2-loan-flexible-collateral-data-response.js";
import {
  sapiV2LoanFlexibleLoanableDataResponseSchema,
  type SapiV2LoanFlexibleLoanableDataResponse,
} from "../models/sapi-v2-loan-flexible-loanable-data-response.js";
import {
  sapiV2LoanFlexibleLtvAdjustmentHistoryResponseSchema,
  type SapiV2LoanFlexibleLtvAdjustmentHistoryResponse,
} from "../models/sapi-v2-loan-flexible-ltv-adjustment-history-response.js";
import {
  sapiV2LoanFlexibleOngoingOrdersResponseSchema,
  type SapiV2LoanFlexibleOngoingOrdersResponse,
} from "../models/sapi-v2-loan-flexible-ongoing-orders-response.js";
import {
  sapiV2LoanFlexibleRepayHistoryResponseSchema,
  type SapiV2LoanFlexibleRepayHistoryResponse,
} from "../models/sapi-v2-loan-flexible-repay-history-response.js";
import {
  sapiV2LoanFlexibleRepayResponseSchema,
  type SapiV2LoanFlexibleRepayResponse,
} from "../models/sapi-v2-loan-flexible-repay-response.js";
import { type9Schema, type Type9 } from "../models/type9.js";
import {
  sapiV1LoanRepayResponseSchema,
  type SapiV1LoanRepayResponse,
} from "../models/unions/sapi-v1-loan-repay-response.js";
import type { Servers } from "../servers.js";

export class CryptoLoans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adjustLtvFlexibleLoanAdjustLtvTrade(
    request: CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2LoanFlexibleAdjustLtvResponse, CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v2/loan/flexible/adjust/ltv"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "adjustmentAmount", value: request.adjustmentAmount, schema: s.number() },
          { name: "direction", value: request.direction, schema: directionSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleAdjustLtvResponseSchema },
        errorFactory: CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError,
      },
      options,
    );
  }

  adjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserData(
    request: CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2LoanFlexibleLtvAdjustmentHistoryResponse,
    CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/loan/flexible/ltv/adjustment/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleLtvAdjustmentHistoryResponseSchema },
        errorFactory: CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError,
      },
      options,
    );
  }

  borrowFlexibleLoanBorrowTrade(
    request: CryptoLoans.BorrowFlexibleLoanBorrowTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2LoanFlexibleBorrowResponse, CryptoLoans.BorrowFlexibleLoanBorrowTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v2/loan/flexible/borrow"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "loanAmount", value: request.loanAmount, schema: s.optional(s.number()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "collateralAmount", value: request.collateralAmount, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleBorrowResponseSchema },
        errorFactory: CryptoLoans.BorrowFlexibleLoanBorrowTradeError,
      },
      options,
    );
  }

  borrowGetFlexibleLoanBorrowHistoryUserData(
    request: CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2LoanFlexibleBorrowHistoryResponse,
    CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/loan/flexible/borrow/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleBorrowHistoryResponseSchema },
        errorFactory: CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataError,
      },
      options,
    );
  }

  borrowGetFlexibleLoanOngoingOrdersUserData(
    request: CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2LoanFlexibleOngoingOrdersResponse,
    CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/loan/flexible/ongoing/orders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleOngoingOrdersResponseSchema },
        errorFactory: CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataError,
      },
      options,
    );
  }

  checkCollateralRepayRateUserData(
    request: CryptoLoans.CheckCollateralRepayRateUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanRepayCollateralRateResponse, CryptoLoans.CheckCollateralRepayRateUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/repay/collateral/rate"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "loanCoin", value: request.loanCoin, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.string() },
          { name: "repayAmount", value: request.repayAmount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanRepayCollateralRateResponseSchema },
        errorFactory: CryptoLoans.CheckCollateralRepayRateUserDataError,
      },
      options,
    );
  }

  cryptoLoanAdjustLtvTrade(
    request: CryptoLoans.CryptoLoanAdjustLtvTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanAdjustLtvResponse, CryptoLoans.CryptoLoanAdjustLtvTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/loan/adjust/ltv"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "orderId", value: request.orderId, schema: s.number() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "direction", value: request.direction, schema: directionSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanAdjustLtvResponseSchema },
        errorFactory: CryptoLoans.CryptoLoanAdjustLtvTradeError,
      },
      options,
    );
  }

  cryptoLoanBorrowTrade(
    request: CryptoLoans.CryptoLoanBorrowTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanBorrowResponse, CryptoLoans.CryptoLoanBorrowTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/loan/borrow"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "loanCoin", value: request.loanCoin, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.string() },
          { name: "loanTerm", value: request.loanTerm, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanAmount", value: request.loanAmount, schema: s.optional(s.number()) },
          { name: "collateralAmount", value: request.collateralAmount, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanBorrowResponseSchema },
        errorFactory: CryptoLoans.CryptoLoanBorrowTradeError,
      },
      options,
    );
  }

  cryptoLoanCustomizeMarginCallTrade(
    request: CryptoLoans.CryptoLoanCustomizeMarginCallTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanCustomizeMarginCallResponse, CryptoLoans.CryptoLoanCustomizeMarginCallTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/loan/customize/margin_call"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "marginCall", value: request.marginCall, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanCustomizeMarginCallResponseSchema },
        errorFactory: CryptoLoans.CryptoLoanCustomizeMarginCallTradeError,
      },
      options,
    );
  }

  cryptoLoanRepayTrade(
    request: CryptoLoans.CryptoLoanRepayTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanRepayResponse, CryptoLoans.CryptoLoanRepayTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/loan/repay"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "orderId", value: request.orderId, schema: s.number() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "type", value: request.type, schema: s.optional(s.number()) },
          { name: "collateralReturn", value: request.collateralReturn, schema: s.optional(s.boolean()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanRepayResponseSchema },
        errorFactory: CryptoLoans.CryptoLoanRepayTradeError,
      },
      options,
    );
  }

  getCollateralAssetsDataUserData(
    request: CryptoLoans.GetCollateralAssetsDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanCollateralDataResponse, CryptoLoans.GetCollateralAssetsDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/collateral/data"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanCollateralDataResponseSchema },
        errorFactory: CryptoLoans.GetCollateralAssetsDataUserDataError,
      },
      options,
    );
  }

  getCryptoLoansBorrowHistoryUserData(
    request: CryptoLoans.GetCryptoLoansBorrowHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanBorrowHistoryResponse, CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/borrow/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanBorrowHistoryResponseSchema },
        errorFactory: CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError,
      },
      options,
    );
  }

  getCryptoLoansIncomeHistoryUserData(
    request: CryptoLoans.GetCryptoLoansIncomeHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanIncomeResponse[], CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/income"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type9Schema)) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1LoanIncomeResponseSchema)) },
        errorFactory: CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError,
      },
      options,
    );
  }

  getFlexibleLoanAssetsDataUserData(
    request: CryptoLoans.GetFlexibleLoanAssetsDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2LoanFlexibleLoanableDataResponse, CryptoLoans.GetFlexibleLoanAssetsDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/loan/flexible/loanable/data"),
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
        success: { kind: "json", schema: sapiV2LoanFlexibleLoanableDataResponseSchema },
        errorFactory: CryptoLoans.GetFlexibleLoanAssetsDataUserDataError,
      },
      options,
    );
  }

  getFlexibleLoanCollateralAssetsDataUserData(
    request: CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2LoanFlexibleCollateralDataResponse,
    CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/loan/flexible/collateral/data"),
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
        success: { kind: "json", schema: sapiV2LoanFlexibleCollateralDataResponseSchema },
        errorFactory: CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataError,
      },
      options,
    );
  }

  getLoanLtvAdjustmentHistoryUserData(
    request: CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LoanLtvAdjustmentHistoryResponse,
    CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/ltv/adjustment/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanLtvAdjustmentHistoryResponseSchema },
        errorFactory: CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataError,
      },
      options,
    );
  }

  getLoanOngoingOrdersUserData(
    request: CryptoLoans.GetLoanOngoingOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanOngoingOrdersResponse, CryptoLoans.GetLoanOngoingOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/ongoing/orders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanOngoingOrdersResponseSchema },
        errorFactory: CryptoLoans.GetLoanOngoingOrdersUserDataError,
      },
      options,
    );
  }

  getLoanRepaymentHistoryUserData(
    request: CryptoLoans.GetLoanRepaymentHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanRepayHistoryResponse, CryptoLoans.GetLoanRepaymentHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/repay/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanRepayHistoryResponseSchema },
        errorFactory: CryptoLoans.GetLoanRepaymentHistoryUserDataError,
      },
      options,
    );
  }

  getLoanableAssetsDataUserData(
    request: CryptoLoans.GetLoanableAssetsDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanLoanableDataResponse, CryptoLoans.GetLoanableAssetsDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/loan/loanable/data"),
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
        success: { kind: "json", schema: sapiV1LoanLoanableDataResponseSchema },
        errorFactory: CryptoLoans.GetLoanableAssetsDataUserDataError,
      },
      options,
    );
  }

  repayFlexibleLoanRepayTrade(
    request: CryptoLoans.RepayFlexibleLoanRepayTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2LoanFlexibleRepayResponse, CryptoLoans.RepayFlexibleLoanRepayTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v2/loan/flexible/repay"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "repayAmount", value: request.repayAmount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "collateralReturn", value: request.collateralReturn, schema: s.optional(s.boolean()) },
          { name: "fullRepayment", value: request.fullRepayment, schema: s.optional(s.boolean()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleRepayResponseSchema },
        errorFactory: CryptoLoans.RepayFlexibleLoanRepayTradeError,
      },
      options,
    );
  }

  repayGetFlexibleLoanRepaymentHistoryUserData(
    request: CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2LoanFlexibleRepayHistoryResponse,
    CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/loan/flexible/repay/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleRepayHistoryResponseSchema },
        errorFactory: CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataError,
      },
      options,
    );
  }
}

export namespace CryptoLoans {
  export type AdjustLtvFlexibleLoanAdjustLtvTradeRequest = {
    adjustmentAmount: number;
    direction: Direction;
    timestamp: number;
    signature: string;
    loanCoin?: string;
    collateralCoin?: string;
    recvWindow?: number;
  };

  export class AdjustLtvFlexibleLoanAdjustLtvTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AdjustLtvFlexibleLoanAdjustLtvTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    loanCoin?: string;
    collateralCoin?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type BorrowFlexibleLoanBorrowTradeRequest = {
    timestamp: number;
    signature: string;
    loanCoin?: string;
    loanAmount?: number;
    collateralCoin?: string;
    collateralAmount?: number;
    recvWindow?: number;
  };

  export class BorrowFlexibleLoanBorrowTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<BorrowFlexibleLoanBorrowTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type BorrowGetFlexibleLoanBorrowHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    loanCoin?: string;
    collateralCoin?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class BorrowGetFlexibleLoanBorrowHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<BorrowGetFlexibleLoanBorrowHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type BorrowGetFlexibleLoanOngoingOrdersUserDataRequest = {
    timestamp: number;
    signature: string;
    loanCoin?: string;
    collateralCoin?: string;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class BorrowGetFlexibleLoanOngoingOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<BorrowGetFlexibleLoanOngoingOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CheckCollateralRepayRateUserDataRequest = {
    loanCoin: string;
    collateralCoin: string;
    repayAmount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CheckCollateralRepayRateUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CheckCollateralRepayRateUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CryptoLoanAdjustLtvTradeRequest = {
    orderId: number;
    amount: number;
    direction: Direction;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CryptoLoanAdjustLtvTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CryptoLoanAdjustLtvTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CryptoLoanBorrowTradeRequest = {
    loanCoin: string;
    collateralCoin: string;
    loanTerm: number;
    timestamp: number;
    signature: string;
    loanAmount?: number;
    collateralAmount?: number;
    recvWindow?: number;
  };

  export class CryptoLoanBorrowTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CryptoLoanBorrowTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CryptoLoanCustomizeMarginCallTradeRequest = {
    marginCall: number;
    timestamp: number;
    signature: string;
    orderId?: number;
    collateralCoin?: string;
    recvWindow?: number;
  };

  export class CryptoLoanCustomizeMarginCallTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CryptoLoanCustomizeMarginCallTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CryptoLoanRepayTradeRequest = {
    orderId: number;
    amount: number;
    timestamp: number;
    signature: string;
    type?: number;
    collateralReturn?: boolean;
    recvWindow?: number;
  };

  export class CryptoLoanRepayTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CryptoLoanRepayTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCollateralAssetsDataUserDataRequest = {
    timestamp: number;
    signature: string;
    collateralCoin?: string;
    vipLevel?: number;
    recvWindow?: number;
  };

  export class GetCollateralAssetsDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetCollateralAssetsDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCryptoLoansBorrowHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    orderId?: number;
    loanCoin?: string;
    collateralCoin?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class GetCryptoLoansBorrowHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetCryptoLoansBorrowHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCryptoLoansIncomeHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    type?: Type9;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class GetCryptoLoansIncomeHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetCryptoLoansIncomeHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleLoanAssetsDataUserDataRequest = {
    timestamp: number;
    signature: string;
    loanCoin?: string;
    recvWindow?: number;
  };

  export class GetFlexibleLoanAssetsDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFlexibleLoanAssetsDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleLoanCollateralAssetsDataUserDataRequest = {
    timestamp: number;
    signature: string;
    collateralCoin?: string;
    recvWindow?: number;
  };

  export class GetFlexibleLoanCollateralAssetsDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFlexibleLoanCollateralAssetsDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanLtvAdjustmentHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    orderId?: number;
    loanCoin?: string;
    collateralCoin?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class GetLoanLtvAdjustmentHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLoanLtvAdjustmentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanOngoingOrdersUserDataRequest = {
    timestamp: number;
    signature: string;
    orderId?: number;
    loanCoin?: string;
    collateralCoin?: string;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class GetLoanOngoingOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLoanOngoingOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanRepaymentHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    orderId?: number;
    loanCoin?: string;
    collateralCoin?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class GetLoanRepaymentHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLoanRepaymentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanableAssetsDataUserDataRequest = {
    timestamp: number;
    signature: string;
    loanCoin?: string;
    vipLevel?: number;
    recvWindow?: number;
  };

  export class GetLoanableAssetsDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLoanableAssetsDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RepayFlexibleLoanRepayTradeRequest = {
    repayAmount: number;
    timestamp: number;
    signature: string;
    loanCoin?: string;
    collateralCoin?: string;
    collateralReturn?: boolean;
    fullRepayment?: boolean;
    recvWindow?: number;
  };

  export class RepayFlexibleLoanRepayTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RepayFlexibleLoanRepayTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RepayGetFlexibleLoanRepaymentHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    loanCoin?: string;
    collateralCoin?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class RepayGetFlexibleLoanRepaymentHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RepayGetFlexibleLoanRepaymentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
