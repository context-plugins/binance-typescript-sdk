import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1PortfolioAccountResponseSchema,
  type SapiV1PortfolioAccountResponse,
} from "../models/sapi-v1-portfolio-account-response.js";
import {
  sapiV1PortfolioAssetCollectionResponseSchema,
  type SapiV1PortfolioAssetCollectionResponse,
} from "../models/sapi-v1-portfolio-asset-collection-response.js";
import {
  sapiV1PortfolioAssetIndexPriceResponseSchema,
  type SapiV1PortfolioAssetIndexPriceResponse,
} from "../models/sapi-v1-portfolio-asset-index-price-response.js";
import {
  sapiV1PortfolioAutoCollectionResponseSchema,
  type SapiV1PortfolioAutoCollectionResponse,
} from "../models/sapi-v1-portfolio-auto-collection-response.js";
import {
  sapiV1PortfolioBnbTransferResponseSchema,
  type SapiV1PortfolioBnbTransferResponse,
} from "../models/sapi-v1-portfolio-bnb-transfer-response.js";
import {
  sapiV1PortfolioCollateralRateResponseSchema,
  type SapiV1PortfolioCollateralRateResponse,
} from "../models/sapi-v1-portfolio-collateral-rate-response.js";
import {
  sapiV1PortfolioInterestHistoryResponseSchema,
  type SapiV1PortfolioInterestHistoryResponse,
} from "../models/sapi-v1-portfolio-interest-history-response.js";
import {
  sapiV1PortfolioMarginAssetLeverageResponseSchema,
  type SapiV1PortfolioMarginAssetLeverageResponse,
} from "../models/sapi-v1-portfolio-margin-asset-leverage-response.js";
import {
  sapiV1PortfolioPmLoanResponseSchema,
  type SapiV1PortfolioPmLoanResponse,
} from "../models/sapi-v1-portfolio-pm-loan-response.js";
import {
  sapiV1PortfolioRepayFuturesNegativeBalanceResponseSchema,
  type SapiV1PortfolioRepayFuturesNegativeBalanceResponse,
} from "../models/sapi-v1-portfolio-repay-futures-negative-balance-response.js";
import {
  sapiV1PortfolioRepayFuturesSwitchResponseSchema,
  type SapiV1PortfolioRepayFuturesSwitchResponse,
} from "../models/sapi-v1-portfolio-repay-futures-switch-response.js";
import {
  sapiV1PortfolioRepayFuturesSwitchResponse1Schema,
  type SapiV1PortfolioRepayFuturesSwitchResponse1,
} from "../models/sapi-v1-portfolio-repay-futures-switch-response1.js";
import {
  sapiV1PortfolioRepayResponseSchema,
  type SapiV1PortfolioRepayResponse,
} from "../models/sapi-v1-portfolio-repay-response.js";
import {
  sapiV2PortfolioCollateralRateResponseSchema,
  type SapiV2PortfolioCollateralRateResponse,
} from "../models/sapi-v2-portfolio-collateral-rate-response.js";
import { transferSideSchema, type TransferSide } from "../models/transfer-side.js";
import type { Servers } from "../servers.js";

/**
 * Portfolio Margin Endpoints
 */
export class PortfolioMargin {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BNB Transfer (USER_DATA)
   *
   * @remarks
   * BNB transfer can be between Margin Account and USDM Account
   *
   * Weight(IP): 1500
   *
   * @returns Result
   *
   * @throws {@link PortfolioMargin.BnbTransferUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bnbTransferUserData(
    request: PortfolioMargin.BnbTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1PortfolioBnbTransferResponse, PortfolioMargin.BnbTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/bnb-transfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "transferSide", value: request.transferSide, schema: transferSideSchema },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioBnbTransferResponseSchema },
        errorFactory: PortfolioMargin.BnbTransferUserDataError,
      },
      options,
    );
  }

  /**
   * Change Auto-repay-futures Status (USER_DATA)
   *
   * @remarks
   * Change Auto-repay-futures Status
   *
   * Weight(IP): 1500
   *
   * @returns Result
   *
   * @throws {@link PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changeAutoRepayFuturesStatusUserData(
    request: PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioRepayFuturesSwitchResponse,
    PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/repay-futures-switch"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "autoRepay", value: request.autoRepay, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioRepayFuturesSwitchResponseSchema },
        errorFactory: PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError,
      },
      options,
    );
  }

  /**
   * Fund Auto-collection (USER_DATA)
   *
   * @remarks
   * Transfers all assets from Futures Account to Margin account
   *
   * Weight(IP): 1500
   *
   * @returns Result
   *
   * @throws {@link PortfolioMargin.FundAutoCollectionUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fundAutoCollectionUserData(
    request: PortfolioMargin.FundAutoCollectionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1PortfolioAutoCollectionResponse, PortfolioMargin.FundAutoCollectionUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/auto-collection"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioAutoCollectionResponseSchema },
        errorFactory: PortfolioMargin.FundAutoCollectionUserDataError,
      },
      options,
    );
  }

  /**
   * Fund Collection by Asset (USER_DATA)
   *
   * @remarks
   * Transfers specific asset from Futures Account to Margin account
   *
   * Weight(IP): 60
   *
   * @returns Result
   *
   * @throws {@link PortfolioMargin.FundCollectionByAssetUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fundCollectionByAssetUserData(
    request: PortfolioMargin.FundCollectionByAssetUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1PortfolioAssetCollectionResponse, PortfolioMargin.FundCollectionByAssetUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/asset-collection"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioAssetCollectionResponseSchema },
        errorFactory: PortfolioMargin.FundCollectionByAssetUserDataError,
      },
      options,
    );
  }

  /**
   * Get Auto-repay-futures Status (USER_DATA)
   *
   * @remarks
   * Query Auto-repay-futures Status
   *
   * Weight(IP): 30
   *
   * @returns Result
   *
   * @throws {@link PortfolioMargin.GetAutoRepayFuturesStatusUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAutoRepayFuturesStatusUserData(
    request: PortfolioMargin.GetAutoRepayFuturesStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioRepayFuturesSwitchResponse1,
    PortfolioMargin.GetAutoRepayFuturesStatusUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/repay-futures-switch"),
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
        success: { kind: "json", schema: sapiV1PortfolioRepayFuturesSwitchResponse1Schema },
        errorFactory: PortfolioMargin.GetAutoRepayFuturesStatusUserDataError,
      },
      options,
    );
  }

  /**
   * Get Portfolio Margin Asset Leverage (USER_DATA)
   *
   * @remarks
   * Weight(IP): 50
   *
   * @returns Classic Portfolio Margin Collateral Rate
   *
   * @throws {@link PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPortfolioMarginAssetLeverageUserData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioMarginAssetLeverageResponse[],
    PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/margin-asset-leverage"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1PortfolioMarginAssetLeverageResponseSchema)),
        },
        errorFactory: PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError,
      },
      options,
    );
  }

  /**
   * Portfolio Margin Account (USER_DATA)
   *
   * @remarks
   * Get the account info
   *
   * 'Weight(IP): 1'
   *
   * @returns Portfolio account.
   *
   * @throws {@link PortfolioMargin.PortfolioMarginAccountUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  portfolioMarginAccountUserData(
    request: PortfolioMargin.PortfolioMarginAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1PortfolioAccountResponse, PortfolioMargin.PortfolioMarginAccountUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/account"),
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
        success: { kind: "json", schema: sapiV1PortfolioAccountResponseSchema },
        errorFactory: PortfolioMargin.PortfolioMarginAccountUserDataError,
      },
      options,
    );
  }

  /**
   * Portfolio Margin Bankruptcy Loan Amount (USER_DATA)
   *
   * @remarks
   * Query Portfolio Margin Bankruptcy Loan Amount.
   *
   * Weight(UID): 500
   *
   * @returns Portfolio Margin Bankruptcy Loan Amount.
   *
   * @throws {@link PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  portfolioMarginBankruptcyLoanAmountUserData(
    request: PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioPmLoanResponse,
    PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/pmLoan"),
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
        success: { kind: "json", schema: sapiV1PortfolioPmLoanResponseSchema },
        errorFactory: PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError,
      },
      options,
    );
  }

  /**
   * Portfolio Margin Bankruptcy Loan Repay (USER_DATA)
   *
   * @remarks
   * Repay Portfolio Margin Bankruptcy Loan.
   *
   * Weight(UID): 3000
   *
   * @returns Transaction.
   *
   * @throws {@link PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  portfolioMarginBankruptcyLoanRepayUserData(
    request: PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioRepayResponse,
    PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/repay"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioRepayResponseSchema },
        errorFactory: PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError,
      },
      options,
    );
  }

  /**
   * Portfolio Margin Collateral Rate (MARKET_DATA)
   *
   * @remarks
   * Portfolio Margin Collateral Rate.
   *
   * Weight(IP): 50
   *
   * @returns Portfolio Margin Collateral Rate.
   *
   * @throws {@link PortfolioMargin.PortfolioMarginCollateralRateMarketDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  portfolioMarginCollateralRateMarketData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioCollateralRateResponse[],
    PortfolioMargin.PortfolioMarginCollateralRateMarketDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/collateralRate"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1PortfolioCollateralRateResponseSchema)) },
        errorFactory: PortfolioMargin.PortfolioMarginCollateralRateMarketDataError,
      },
      options,
    );
  }

  /**
   * Portfolio Margin Pro Tiered Collateral Rate(USER_DATA)
   *
   * @remarks
   * Portfolio Margin PRO Tiered Collateral Rate
   *
   * Weight(IP): 50
   *
   * @returns Portfolio Margin Collateral Rate.
   *
   * @throws {@link PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  portfolioMarginProTieredCollateralRateUserData(
    request: PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2PortfolioCollateralRateResponse[],
    PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v2/portfolio/collateralRate"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV2PortfolioCollateralRateResponseSchema)) },
        errorFactory: PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError,
      },
      options,
    );
  }

  /**
   * Query Classic Portfolio Margin Negative Balance Interest History (USER_DATA)
   *
   * @remarks
   * Query interest history of negative balance for portfolio margin.
   *
   * Weight(IP): 50
   *
   * @returns Balance interest history
   *
   * @throws {@link
   * PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryClassicPortfolioMarginNegativeBalanceInterestHistoryUserData(
    request: PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioInterestHistoryResponse[],
    PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/interest-history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1PortfolioInterestHistoryResponseSchema)),
        },
        errorFactory: PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Query Portfolio Margin Asset Index Price (MARKET_DATA)
   *
   * @remarks
   * Query Portfolio Margin Asset Index Price
   *
   * Weight(IP):
   * - 1 if send asset
   * - 50 if not send asset
   *
   * @returns asset price index
   *
   * @throws {@link PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryPortfolioMarginAssetIndexPriceMarketData(
    request: PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioAssetIndexPriceResponse[],
    PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/asset-index-price"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "asset", value: request.asset, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1PortfolioAssetIndexPriceResponseSchema)),
        },
        errorFactory: PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError,
      },
      options,
    );
  }

  /**
   * Repay futures Negative Balance (USER_DATA)
   *
   * @remarks
   * Repay futures Negative Balance
   *
   * Weight(IP): 1500
   *
   * @returns Result
   *
   * @throws {@link PortfolioMargin.RepayFuturesNegativeBalanceUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  repayFuturesNegativeBalanceUserData(
    request: PortfolioMargin.RepayFuturesNegativeBalanceUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioRepayFuturesNegativeBalanceResponse,
    PortfolioMargin.RepayFuturesNegativeBalanceUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/portfolio/repay-futures-negative-balance"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioRepayFuturesNegativeBalanceResponseSchema },
        errorFactory: PortfolioMargin.RepayFuturesNegativeBalanceUserDataError,
      },
      options,
    );
  }
}

export namespace PortfolioMargin {
  export type BnbTransferUserDataRequest = {
    transferSide: TransferSide;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class BnbTransferUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<BnbTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ChangeAutoRepayFuturesStatusUserDataRequest = {
    autoRepay: boolean;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class ChangeAutoRepayFuturesStatusUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ChangeAutoRepayFuturesStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FundAutoCollectionUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FundAutoCollectionUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FundAutoCollectionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FundCollectionByAssetUserDataRequest = {
    asset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FundCollectionByAssetUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FundCollectionByAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAutoRepayFuturesStatusUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetAutoRepayFuturesStatusUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetAutoRepayFuturesStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetPortfolioMarginAssetLeverageUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetPortfolioMarginAssetLeverageUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PortfolioMarginAccountUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class PortfolioMarginAccountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<PortfolioMarginAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PortfolioMarginBankruptcyLoanAmountUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class PortfolioMarginBankruptcyLoanAmountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<PortfolioMarginBankruptcyLoanAmountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PortfolioMarginBankruptcyLoanRepayUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    from?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class PortfolioMarginBankruptcyLoanRepayUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<PortfolioMarginBankruptcyLoanRepayUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class PortfolioMarginCollateralRateMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<PortfolioMarginCollateralRateMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PortfolioMarginProTieredCollateralRateUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class PortfolioMarginProTieredCollateralRateUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<PortfolioMarginProTieredCollateralRateUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataRequest = {
    asset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError> =
      [
        { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
        { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      ];
  }

  export type QueryPortfolioMarginAssetIndexPriceMarketDataRequest = {
    asset?: string;
  };

  export class QueryPortfolioMarginAssetIndexPriceMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<QueryPortfolioMarginAssetIndexPriceMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RepayFuturesNegativeBalanceUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RepayFuturesNegativeBalanceUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RepayFuturesNegativeBalanceUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
