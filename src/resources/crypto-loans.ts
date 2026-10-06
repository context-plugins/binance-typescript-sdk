import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Crypto Loans Endpoints
 */
export class CryptoLoans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Adjust LTV - Flexible Loan Adjust LTV (TRADE)
   *
   * @remarks
   * - API Key needs Spot & Margin Trading permission for this endpoint
   *
   * Weight(UID): 6000
   *
   * @returns adjust LTV result
   *
   * @throws {@link CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adjustLtvFlexibleLoanAdjustLtvTrade(
    request: CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2LoanFlexibleAdjustLtvResponse, CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v2/loan/flexible/adjust/ltv"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "adjustmentAmount", value: request.adjustmentAmount, schema: s.float64() },
          { name: "direction", value: request.direction, schema: directionSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleAdjustLtvResponseSchema },
        errorFactory: CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError,
      },
      options,
    );
  }

  /**
   * Adjust LTV - Get Flexible Loan LTV Adjustment History (USER_DATA)
   *
   * @remarks
   * - If startTime and endTime are not sent, the recent 90-day data will be returned.
   * - The max interval between startTime and endTime is 180 days.
   *
   * Weight(IP): 400
   *
   * @returns LTV adjustment history
   *
   * @throws {@link CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v2/loan/flexible/ltv/adjustment/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: sapiV2LoanFlexibleLtvAdjustmentHistoryResponseSchema },
        errorFactory: CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Borrow - Flexible Loan Borrow (TRADE)
   *
   * @remarks
   * - Only available for master account
   *
   * Weight(UID): 6000
   *
   * @returns Collateral Assets Data
   *
   * @throws {@link CryptoLoans.BorrowFlexibleLoanBorrowTradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  borrowFlexibleLoanBorrowTrade(
    request: CryptoLoans.BorrowFlexibleLoanBorrowTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2LoanFlexibleBorrowResponse, CryptoLoans.BorrowFlexibleLoanBorrowTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v2/loan/flexible/borrow"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "loanAmount", value: request.loanAmount, schema: s.optional(s.float64()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "collateralAmount", value: request.collateralAmount, schema: s.optional(s.float64()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleBorrowResponseSchema },
        errorFactory: CryptoLoans.BorrowFlexibleLoanBorrowTradeError,
      },
      options,
    );
  }

  /**
   * Borrow - Get Flexible Loan Borrow History (USER_DATA)
   *
   * @remarks
   * - If startTime and endTime are not sent, the recent 90-day data will be returned.
   * - The max interval between startTime and endTime is 180 days.
   *
   * Weight(IP): 400
   *
   * @returns Loan borrow histroy
   *
   * @throws {@link CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v2/loan/flexible/borrow/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: sapiV2LoanFlexibleBorrowHistoryResponseSchema },
        errorFactory: CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Borrow - Get Flexible Loan Ongoing Orders (USER_DATA)
   *
   * @remarks
   *
   * Weight(IP): 300
   *
   * @returns Collateral Assets Data
   *
   * @throws {@link CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v2/loan/flexible/ongoing/orders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
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
        success: { kind: "json", schema: sapiV2LoanFlexibleOngoingOrdersResponseSchema },
        errorFactory: CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Check Collateral Repay Rate (USER_DATA)
   *
   * @remarks
   * Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be
   * valid within 8 second.
   *
   * Weight(IP): 6000
   *
   * @returns Collateral Assets Data
   *
   * @throws {@link CryptoLoans.CheckCollateralRepayRateUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkCollateralRepayRateUserData(
    request: CryptoLoans.CheckCollateralRepayRateUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanRepayCollateralRateResponse, CryptoLoans.CheckCollateralRepayRateUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/repay/collateral/rate"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "loanCoin", value: request.loanCoin, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.string() },
          { name: "repayAmount", value: request.repayAmount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanRepayCollateralRateResponseSchema },
        errorFactory: CryptoLoans.CheckCollateralRepayRateUserDataError,
      },
      options,
    );
  }

  /**
   * Crypto Loan Adjust LTV (TRADE)
   *
   * @remarks
   * Weight(UID): 6000
   *
   * @returns LTV Adjust
   *
   * @throws {@link CryptoLoans.CryptoLoanAdjustLtvTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptoLoanAdjustLtvTrade(
    request: CryptoLoans.CryptoLoanAdjustLtvTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanAdjustLtvResponse, CryptoLoans.CryptoLoanAdjustLtvTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/loan/adjust/ltv"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "orderId", value: request.orderId, schema: s.int() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "direction", value: request.direction, schema: directionSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanAdjustLtvResponseSchema },
        errorFactory: CryptoLoans.CryptoLoanAdjustLtvTradeError,
      },
      options,
    );
  }

  /**
   * Crypto Loan Borrow (TRADE)
   *
   * @remarks
   * Weight(UID): 6000
   *
   * @returns Borrow Information
   *
   * @throws {@link CryptoLoans.CryptoLoanBorrowTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptoLoanBorrowTrade(
    request: CryptoLoans.CryptoLoanBorrowTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanBorrowResponse, CryptoLoans.CryptoLoanBorrowTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/loan/borrow"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "loanCoin", value: request.loanCoin, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.string() },
          { name: "loanTerm", value: request.loanTerm, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanAmount", value: request.loanAmount, schema: s.optional(s.float64()) },
          { name: "collateralAmount", value: request.collateralAmount, schema: s.optional(s.float64()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanBorrowResponseSchema },
        errorFactory: CryptoLoans.CryptoLoanBorrowTradeError,
      },
      options,
    );
  }

  /**
   * Crypto Loan Customize Margin Call (TRADE)
   *
   * @remarks
   * Customize margin call for ongoing orders only.
   *
   * Weight(UID): 6000
   *
   * @returns Collateral Assets Data
   *
   * @throws {@link CryptoLoans.CryptoLoanCustomizeMarginCallTradeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptoLoanCustomizeMarginCallTrade(
    request: CryptoLoans.CryptoLoanCustomizeMarginCallTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanCustomizeMarginCallResponse, CryptoLoans.CryptoLoanCustomizeMarginCallTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/loan/customize/margin_call"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "marginCall", value: request.marginCall, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanCustomizeMarginCallResponseSchema },
        errorFactory: CryptoLoans.CryptoLoanCustomizeMarginCallTradeError,
      },
      options,
    );
  }

  /**
   * Crypto Loan Repay (TRADE)
   *
   * @remarks
   * Weight(UID): 6000
   *
   * @returns Repayment Information
   *
   * @throws {@link CryptoLoans.CryptoLoanRepayTradeError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptoLoanRepayTrade(
    request: CryptoLoans.CryptoLoanRepayTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanRepayResponse, CryptoLoans.CryptoLoanRepayTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/loan/repay"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "orderId", value: request.orderId, schema: s.int() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "type", value: request.type, schema: s.optional(s.int()) },
          { name: "collateralReturn", value: request.collateralReturn, schema: s.optional(s.boolean()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanRepayResponseSchema },
        errorFactory: CryptoLoans.CryptoLoanRepayTradeError,
      },
      options,
    );
  }

  /**
   * Get Collateral Assets Data (USER_DATA)
   *
   * @remarks
   * Get LTV information and collateral limit of collateral assets. The collateral limit is shown in
   * USD value.
   *
   * Weight(IP): 400
   *
   * @returns Collateral Assets Data
   *
   * @throws {@link CryptoLoans.GetCollateralAssetsDataUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCollateralAssetsDataUserData(
    request: CryptoLoans.GetCollateralAssetsDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanCollateralDataResponse, CryptoLoans.GetCollateralAssetsDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/collateral/data"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LoanCollateralDataResponseSchema },
        errorFactory: CryptoLoans.GetCollateralAssetsDataUserDataError,
      },
      options,
    );
  }

  /**
   * Get Crypto Loans Borrow History (USER_DATA)
   *
   * @remarks
   * - If startTime and endTime are not sent, the recent 90-day data will be returned.
   * - The max interval between startTime and endTime is 180 days.
   *
   * Weight(IP): 400
   *
   * @returns Borrow History
   *
   * @throws {@link CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCryptoLoansBorrowHistoryUserData(
    request: CryptoLoans.GetCryptoLoansBorrowHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanBorrowHistoryResponse, CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/borrow/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: sapiV1LoanBorrowHistoryResponseSchema },
        errorFactory: CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Crypto Loans Income History (USER_DATA)
   *
   * @remarks
   * - If startTime and endTime are not sent, the recent 7-day data will be returned.
   * - The max interval between startTime and endTime is 30 days.
   *
   * Weight(UID): 6000
   *
   * @returns Loan History
   *
   * @throws {@link CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCryptoLoansIncomeHistoryUserData(
    request: CryptoLoans.GetCryptoLoansIncomeHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanIncomeResponse[], CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/income"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type9Schema)) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1LoanIncomeResponseSchema)) },
        errorFactory: CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Flexible Loan Assets Data (USER_DATA)
   *
   * @remarks
   * Get interest rate and borrow limit of flexible loanable assets. The borrow limit is shown in
   * USD value.
   *
   * Weight(IP): 400
   *
   * @returns Loan asset data
   *
   * @throws {@link CryptoLoans.GetFlexibleLoanAssetsDataUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFlexibleLoanAssetsDataUserData(
    request: CryptoLoans.GetFlexibleLoanAssetsDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2LoanFlexibleLoanableDataResponse, CryptoLoans.GetFlexibleLoanAssetsDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v2/loan/flexible/loanable/data"),
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
        success: { kind: "json", schema: sapiV2LoanFlexibleLoanableDataResponseSchema },
        errorFactory: CryptoLoans.GetFlexibleLoanAssetsDataUserDataError,
      },
      options,
    );
  }

  /**
   * Get Flexible Loan Collateral Assets Data (USER_DATA)
   *
   * @remarks
   * Get LTV information and collateral limit of flexible loan's collateral assets. The collateral
   * limit is shown in USD value.
   *
   * Weight(IP): 400
   *
   * @returns Loan asset data
   *
   * @throws {@link CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v2/loan/flexible/collateral/data"),
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
        success: { kind: "json", schema: sapiV2LoanFlexibleCollateralDataResponseSchema },
        errorFactory: CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataError,
      },
      options,
    );
  }

  /**
   * Get Loan LTV Adjustment History (USER_DATA)
   *
   * @remarks
   * If startTime and endTime are not sent, the recent 90-day data will be returned. The max
   * interval between startTime and endTime is 180 days.
   *
   * Weight(IP): 400
   *
   * @returns LTV Adjustment History
   *
   * @throws {@link CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/loan/ltv/adjustment/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: sapiV1LoanLtvAdjustmentHistoryResponseSchema },
        errorFactory: CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Loan Ongoing Orders (USER_DATA)
   *
   * @remarks
   * Weight(IP): 300
   *
   * @returns Ongoing Orders
   *
   * @throws {@link CryptoLoans.GetLoanOngoingOrdersUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLoanOngoingOrdersUserData(
    request: CryptoLoans.GetLoanOngoingOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanOngoingOrdersResponse, CryptoLoans.GetLoanOngoingOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/ongoing/orders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
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
        success: { kind: "json", schema: sapiV1LoanOngoingOrdersResponseSchema },
        errorFactory: CryptoLoans.GetLoanOngoingOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Get Loan Repayment History (USER_DATA)
   *
   * @remarks
   * If startTime and endTime are not sent, the recent 90-day data will be returned. The max
   * interval between startTime and endTime is 180 days.
   *
   * Weight(IP): 400
   *
   * @returns Loan Repayment History
   *
   * @throws {@link CryptoLoans.GetLoanRepaymentHistoryUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLoanRepaymentHistoryUserData(
    request: CryptoLoans.GetLoanRepaymentHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanRepayHistoryResponse, CryptoLoans.GetLoanRepaymentHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/repay/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: sapiV1LoanRepayHistoryResponseSchema },
        errorFactory: CryptoLoans.GetLoanRepaymentHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Loanable Assets Data (USER_DATA)
   *
   * @remarks
   * Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.
   *
   * Weight(IP): 400
   *
   * @returns Loanable Assets Data
   *
   * @throws {@link CryptoLoans.GetLoanableAssetsDataUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLoanableAssetsDataUserData(
    request: CryptoLoans.GetLoanableAssetsDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LoanLoanableDataResponse, CryptoLoans.GetLoanableAssetsDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/loan/loanable/data"),
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
        success: { kind: "json", schema: sapiV1LoanLoanableDataResponseSchema },
        errorFactory: CryptoLoans.GetLoanableAssetsDataUserDataError,
      },
      options,
    );
  }

  /**
   * Repay - Flexible Loan Repay (TRADE)
   *
   * @remarks
   * - repayAmount is mandatory even fullRepayment = FALSE
   *
   * Weight(IP): 6000
   *
   * @returns Loan repay
   *
   * @throws {@link CryptoLoans.RepayFlexibleLoanRepayTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  repayFlexibleLoanRepayTrade(
    request: CryptoLoans.RepayFlexibleLoanRepayTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2LoanFlexibleRepayResponse, CryptoLoans.RepayFlexibleLoanRepayTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v2/loan/flexible/repay"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "repayAmount", value: request.repayAmount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
          { name: "collateralReturn", value: request.collateralReturn, schema: s.optional(s.boolean()) },
          { name: "fullRepayment", value: request.fullRepayment, schema: s.optional(s.boolean()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2LoanFlexibleRepayResponseSchema },
        errorFactory: CryptoLoans.RepayFlexibleLoanRepayTradeError,
      },
      options,
    );
  }

  /**
   * Repay - Get Flexible Loan Repayment History (USER_DATA)
   *
   * @remarks
   * - If startTime and endTime are not sent, the recent 90-day data will be returned.
   * - The max interval between startTime and endTime is 180 days.
   *
   * Weight(IP): 400
   *
   * @returns Loan repay history
   *
   * @throws {@link CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v2/loan/flexible/repay/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "loanCoin", value: request.loanCoin, schema: s.optional(s.string()) },
          { name: "collateralCoin", value: request.collateralCoin, schema: s.optional(s.string()) },
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
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AdjustLtvFlexibleLoanAdjustLtvTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AdjustLtvFlexibleLoanAdjustLtvTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type BorrowFlexibleLoanBorrowTradeRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    /** Loan amount */
    loanAmount?: number;
    /** Coin used as collateral */
    collateralCoin?: string;
    collateralAmount?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class BorrowFlexibleLoanBorrowTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<BorrowFlexibleLoanBorrowTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type BorrowGetFlexibleLoanBorrowHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class BorrowGetFlexibleLoanBorrowHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<BorrowGetFlexibleLoanBorrowHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type BorrowGetFlexibleLoanOngoingOrdersUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class BorrowGetFlexibleLoanOngoingOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<BorrowGetFlexibleLoanOngoingOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CheckCollateralRepayRateUserDataRequest = {
    /** Coin loaned */
    loanCoin: string;
    /** Coin used as collateral */
    collateralCoin: string;
    /** repay amount of loanCoin */
    repayAmount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CheckCollateralRepayRateUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CheckCollateralRepayRateUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CryptoLoanAdjustLtvTradeRequest = {
    /** Order ID */
    orderId: number;
    /** Amount */
    amount: number;
    /** 'ADDITIONAL', 'REDUCED' */
    direction: Direction;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CryptoLoanAdjustLtvTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CryptoLoanAdjustLtvTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CryptoLoanBorrowTradeRequest = {
    /** Coin loaned */
    loanCoin: string;
    /** Coin used as collateral */
    collateralCoin: string;
    /** 7/14/30/90/180 days */
    loanTerm: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Loan amount */
    loanAmount?: number;
    collateralAmount?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CryptoLoanBorrowTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CryptoLoanBorrowTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CryptoLoanCustomizeMarginCallTradeRequest = {
    marginCall: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * Mandatory when collateralCoin is empty. Send either orderId or collateralCoin, if both
     * parameters are sent, take orderId only.
     */
    orderId?: number;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CryptoLoanCustomizeMarginCallTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CryptoLoanCustomizeMarginCallTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CryptoLoanRepayTradeRequest = {
    /** Order ID */
    orderId: number;
    /** Repayment Amount */
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Default: 1. 1 for 'repay with borrowed coin'; 2 for 'repay with collateral'. */
    type?: number;
    /**
     * Default: TRUE. TRUE: Return extra collateral to spot account; FALSE: Keep extra collateral in
     * the order.
     */
    collateralReturn?: boolean;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CryptoLoanRepayTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CryptoLoanRepayTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCollateralAssetsDataUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** Defaults to user's vip level */
    vipLevel?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetCollateralAssetsDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetCollateralAssetsDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCryptoLoansBorrowHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** orderId in POST /sapi/v1/loan/borrow */
    orderId?: number;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** default 10, max 100 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetCryptoLoansBorrowHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetCryptoLoansBorrowHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCryptoLoansIncomeHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    /**
     * All types will be returned by default.
     *   * `borrowIn`
     *   * `collateralSpent`
     *   * `repayAmount`
     *   * `collateralReturn` - Collateral return after repayment
     *   * `addCollateral`
     *   * `removeCollateral`
     *   * `collateralReturnAfterLiquidation`
     */
    type?: Type9;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** default 20, max 100 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetCryptoLoansIncomeHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetCryptoLoansIncomeHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleLoanAssetsDataUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFlexibleLoanAssetsDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFlexibleLoanAssetsDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleLoanCollateralAssetsDataUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFlexibleLoanCollateralAssetsDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFlexibleLoanCollateralAssetsDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanLtvAdjustmentHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order ID */
    orderId?: number;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** default 10, max 100 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetLoanLtvAdjustmentHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLoanLtvAdjustmentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanOngoingOrdersUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** orderId in POST /sapi/v1/loan/borrow */
    orderId?: number;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** Current querying page. Start from 1; default:1, max:1000 */
    current?: number;
    /** default 10, max 100 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetLoanOngoingOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLoanOngoingOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanRepaymentHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Order ID */
    orderId?: number;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** default 10, max 100 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetLoanRepaymentHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLoanRepaymentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLoanableAssetsDataUserDataRequest = {
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

  export class GetLoanableAssetsDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLoanableAssetsDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RepayFlexibleLoanRepayTradeRequest = {
    /** repay amount of loanCoin */
    repayAmount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /**
     * Default: TRUE. TRUE: Return extra collateral to earn account; FALSE: Keep extra collateral in
     * the order, and lower LTV.
     */
    collateralReturn?: boolean;
    /** Default: FALSE. TRUE: Full repayment; FALSE: Partial repayment, based on loanAmount */
    fullRepayment?: boolean;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RepayFlexibleLoanRepayTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RepayFlexibleLoanRepayTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RepayGetFlexibleLoanRepaymentHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin loaned */
    loanCoin?: string;
    /** Coin used as collateral */
    collateralCoin?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RepayGetFlexibleLoanRepaymentHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RepayGetFlexibleLoanRepaymentHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
