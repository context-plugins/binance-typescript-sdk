import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bnbBurnStatusSchema, type BnbBurnStatus } from "../models/bnb-burn-status.js";
import { errorSchema, type Error } from "../models/error.js";
import { interestBnbBurnSchema, type InterestBnbBurn } from "../models/interest-bnb-burn.js";
import { isIsolatedSchema, type IsIsolated } from "../models/is-isolated.js";
import {
  isolatedMarginAccountInfoSchema,
  type IsolatedMarginAccountInfo,
} from "../models/isolated-margin-account-info.js";
import { marginOcoOrderSchema, type MarginOcoOrder } from "../models/margin-oco-order.js";
import { marginOrderDetailSchema, type MarginOrderDetail } from "../models/margin-order-detail.js";
import { marginOrderSchema, type MarginOrder } from "../models/margin-order.js";
import { marginTradeSchema, type MarginTrade } from "../models/margin-trade.js";
import { newOrderRespTypeSchema, type NewOrderRespType } from "../models/new-order-resp-type.js";
import {
  pendingAboveTimeInForceSchema,
  type PendingAboveTimeInForce,
} from "../models/pending-above-time-in-force.js";
import { pendingAboveTypeSchema, type PendingAboveType } from "../models/pending-above-type.js";
import {
  pendingBelowTimeInForceSchema,
  type PendingBelowTimeInForce,
} from "../models/pending-below-time-in-force.js";
import { pendingBelowTypeSchema, type PendingBelowType } from "../models/pending-below-type.js";
import { pendingSideSchema, type PendingSide } from "../models/pending-side.js";
import { pendingTimeInForceSchema, type PendingTimeInForce } from "../models/pending-time-in-force.js";
import { pendingTypeSchema, type PendingType } from "../models/pending-type.js";
import {
  sapiV1MarginAccountResponseSchema,
  type SapiV1MarginAccountResponse,
} from "../models/sapi-v1-margin-account-response.js";
import {
  sapiV1MarginAllAssetsResponseSchema,
  type SapiV1MarginAllAssetsResponse,
} from "../models/sapi-v1-margin-all-assets-response.js";
import {
  sapiV1MarginAllOrderListResponseSchema,
  type SapiV1MarginAllOrderListResponse,
} from "../models/sapi-v1-margin-all-order-list-response.js";
import {
  sapiV1MarginAllPairsResponseSchema,
  type SapiV1MarginAllPairsResponse,
} from "../models/sapi-v1-margin-all-pairs-response.js";
import {
  sapiV1MarginAvailableInventoryResponseSchema,
  type SapiV1MarginAvailableInventoryResponse,
} from "../models/sapi-v1-margin-available-inventory-response.js";
import {
  sapiV1MarginBorrowRepayResponseSchema,
  type SapiV1MarginBorrowRepayResponse,
} from "../models/sapi-v1-margin-borrow-repay-response.js";
import {
  sapiV1MarginBorrowRepayResponse1Schema,
  type SapiV1MarginBorrowRepayResponse1,
} from "../models/sapi-v1-margin-borrow-repay-response1.js";
import {
  sapiV1MarginCapitalFlowResponseSchema,
  type SapiV1MarginCapitalFlowResponse,
} from "../models/sapi-v1-margin-capital-flow-response.js";
import {
  sapiV1MarginCrossMarginCollateralRatioResponseSchema,
  type SapiV1MarginCrossMarginCollateralRatioResponse,
} from "../models/sapi-v1-margin-cross-margin-collateral-ratio-response.js";
import {
  sapiV1MarginCrossMarginDataResponseSchema,
  type SapiV1MarginCrossMarginDataResponse,
} from "../models/sapi-v1-margin-cross-margin-data-response.js";
import {
  sapiV1MarginDelistScheduleResponseSchema,
  type SapiV1MarginDelistScheduleResponse,
} from "../models/sapi-v1-margin-delist-schedule-response.js";
import {
  sapiV1MarginExchangeSmallLiabilityHistoryResponseSchema,
  type SapiV1MarginExchangeSmallLiabilityHistoryResponse,
} from "../models/sapi-v1-margin-exchange-small-liability-history-response.js";
import {
  sapiV1MarginExchangeSmallLiabilityResponseSchema,
  type SapiV1MarginExchangeSmallLiabilityResponse,
} from "../models/sapi-v1-margin-exchange-small-liability-response.js";
import {
  sapiV1MarginForceLiquidationRecResponseSchema,
  type SapiV1MarginForceLiquidationRecResponse,
} from "../models/sapi-v1-margin-force-liquidation-rec-response.js";
import {
  sapiV1MarginInterestHistoryResponseSchema,
  type SapiV1MarginInterestHistoryResponse,
} from "../models/sapi-v1-margin-interest-history-response.js";
import {
  sapiV1MarginInterestRateHistoryResponseSchema,
  type SapiV1MarginInterestRateHistoryResponse,
} from "../models/sapi-v1-margin-interest-rate-history-response.js";
import {
  sapiV1MarginIsolatedAccountLimitResponseSchema,
  type SapiV1MarginIsolatedAccountLimitResponse,
} from "../models/sapi-v1-margin-isolated-account-limit-response.js";
import {
  sapiV1MarginIsolatedAccountResponseSchema,
  type SapiV1MarginIsolatedAccountResponse,
} from "../models/sapi-v1-margin-isolated-account-response.js";
import {
  sapiV1MarginIsolatedAllPairsResponseSchema,
  type SapiV1MarginIsolatedAllPairsResponse,
} from "../models/sapi-v1-margin-isolated-all-pairs-response.js";
import {
  sapiV1MarginIsolatedMarginDataResponseSchema,
  type SapiV1MarginIsolatedMarginDataResponse,
} from "../models/sapi-v1-margin-isolated-margin-data-response.js";
import {
  sapiV1MarginIsolatedMarginTierResponseSchema,
  type SapiV1MarginIsolatedMarginTierResponse,
} from "../models/sapi-v1-margin-isolated-margin-tier-response.js";
import {
  sapiV1MarginLeverageBracketResponseSchema,
  type SapiV1MarginLeverageBracketResponse,
} from "../models/sapi-v1-margin-leverage-bracket-response.js";
import {
  sapiV1MarginManualLiquidationResponseSchema,
  type SapiV1MarginManualLiquidationResponse,
} from "../models/sapi-v1-margin-manual-liquidation-response.js";
import {
  sapiV1MarginMaxBorrowableResponseSchema,
  type SapiV1MarginMaxBorrowableResponse,
} from "../models/sapi-v1-margin-max-borrowable-response.js";
import {
  sapiV1MarginMaxLeverageResponseSchema,
  type SapiV1MarginMaxLeverageResponse,
} from "../models/sapi-v1-margin-max-leverage-response.js";
import {
  sapiV1MarginMaxTransferableResponseSchema,
  type SapiV1MarginMaxTransferableResponse,
} from "../models/sapi-v1-margin-max-transferable-response.js";
import {
  sapiV1MarginNextHourlyInterestRateResponseSchema,
  type SapiV1MarginNextHourlyInterestRateResponse,
} from "../models/sapi-v1-margin-next-hourly-interest-rate-response.js";
import {
  sapiV1MarginOpenOrderListResponseSchema,
  type SapiV1MarginOpenOrderListResponse,
} from "../models/sapi-v1-margin-open-order-list-response.js";
import {
  sapiV1MarginOrderListResponseSchema,
  type SapiV1MarginOrderListResponse,
} from "../models/sapi-v1-margin-order-list-response.js";
import {
  sapiV1MarginOrderOcoResponseSchema,
  type SapiV1MarginOrderOcoResponse,
} from "../models/sapi-v1-margin-order-oco-response.js";
import {
  sapiV1MarginOrderOtoResponseSchema,
  type SapiV1MarginOrderOtoResponse,
} from "../models/sapi-v1-margin-order-oto-response.js";
import {
  sapiV1MarginOrderOtocoResponseSchema,
  type SapiV1MarginOrderOtocoResponse,
} from "../models/sapi-v1-margin-order-otoco-response.js";
import {
  sapiV1MarginPriceIndexResponseSchema,
  type SapiV1MarginPriceIndexResponse,
} from "../models/sapi-v1-margin-price-index-response.js";
import {
  sapiV1MarginRateLimitOrderResponseSchema,
  type SapiV1MarginRateLimitOrderResponse,
} from "../models/sapi-v1-margin-rate-limit-order-response.js";
import {
  sapiV1MarginTradeCoeffResponseSchema,
  type SapiV1MarginTradeCoeffResponse,
} from "../models/sapi-v1-margin-trade-coeff-response.js";
import {
  sapiV1MarginTransferResponseSchema,
  type SapiV1MarginTransferResponse,
} from "../models/sapi-v1-margin-transfer-response.js";
import {
  selfTradePreventionModeSchema,
  type SelfTradePreventionMode,
} from "../models/self-trade-prevention-mode.js";
import { sideEffectTypeSchema, type SideEffectType } from "../models/side-effect-type.js";
import { sideEffectType1Schema, type SideEffectType1 } from "../models/side-effect-type1.js";
import { sideSchema, type Side } from "../models/side.js";
import { spotBnbBurnSchema, type SpotBnbBurn } from "../models/spot-bnb-burn.js";
import { stopLimitTimeInForceSchema, type StopLimitTimeInForce } from "../models/stop-limit-time-in-force.js";
import { timeInForceSchema, type TimeInForce } from "../models/time-in-force.js";
import { type1Schema, type Type1 } from "../models/type1.js";
import { type2Schema, type Type2 } from "../models/type2.js";
import { type3Schema, type Type3 } from "../models/type3.js";
import { type4Schema, type Type4 } from "../models/type4.js";
import {
  sapiV1MarginOpenOrdersResponseSchema,
  type SapiV1MarginOpenOrdersResponse,
} from "../models/unions/sapi-v1-margin-open-orders-response.js";
import {
  sapiV1MarginOrderResponseSchema,
  type SapiV1MarginOrderResponse,
} from "../models/unions/sapi-v1-margin-order-response.js";
import { workingSideSchema, type WorkingSide } from "../models/working-side.js";
import { workingTimeInForceSchema, type WorkingTimeInForce } from "../models/working-time-in-force.js";
import { workingTypeSchema, type WorkingType } from "../models/working-type.js";
import type { Servers } from "../servers.js";

/**
 * Margin Account/Trade
 */
export class Margin {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Adjust cross margin max leverage (USER_DATA)
   *
   * @remarks
   * Adjust cross margin max leverage
   *
   * Weight(UID): 3000
   *
   * @returns Adjust result
   *
   * @throws {@link Margin.AdjustCrossMarginMaxLeverageUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adjustCrossMarginMaxLeverageUserData(
    request: Margin.AdjustCrossMarginMaxLeverageUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginMaxLeverageResponse, Margin.AdjustCrossMarginMaxLeverageUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/margin/max-leverage"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "maxLeverage", value: request.maxLeverage, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginMaxLeverageResponseSchema },
        errorFactory: Margin.AdjustCrossMarginMaxLeverageUserDataError,
      },
      options,
    );
  }

  /**
   * Cross margin collateral ratio (MARKET_DATA)
   *
   * @remarks
   *
   * Weight(IP): 100
   *
   * @returns Margin collateral ratio
   *
   * @throws {@link Margin.CrossMarginCollateralRatioMarketDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  crossMarginCollateralRatioMarketData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginCrossMarginCollateralRatioResponse[],
    Margin.CrossMarginCollateralRatioMarketDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/crossMarginCollateralRatio"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1MarginCrossMarginCollateralRatioResponseSchema)),
        },
        errorFactory: Margin.CrossMarginCollateralRatioMarketDataError,
      },
      options,
    );
  }

  /**
   * Disable Isolated Margin Account (TRADE)
   *
   * @remarks
   * Disable isolated margin account for a specific symbol. Each trading pair can only be
   * deactivated once every 24 hours .
   *
   * Weight(UID): 300
   *
   * @returns Isolated Margin Account status
   *
   * @throws {@link Margin.DisableIsolatedMarginAccountTradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableIsolatedMarginAccountTrade(
    request: Margin.DisableIsolatedMarginAccountTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedAccountResponse, Margin.DisableIsolatedMarginAccountTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sapi/v1/margin/isolated/account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginIsolatedAccountResponseSchema },
        errorFactory: Margin.DisableIsolatedMarginAccountTradeError,
      },
      options,
    );
  }

  /**
   * Enable Isolated Margin Account (TRADE)
   *
   * @remarks
   * Enable isolated margin account for a specific symbol.
   *
   * Weight(UID): 300
   *
   * @returns Isolated Margin Account status
   *
   * @throws {@link Margin.EnableIsolatedMarginAccountTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableIsolatedMarginAccountTrade(
    request: Margin.EnableIsolatedMarginAccountTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedAccountResponse, Margin.EnableIsolatedMarginAccountTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/margin/isolated/account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginIsolatedAccountResponseSchema },
        errorFactory: Margin.EnableIsolatedMarginAccountTradeError,
      },
      options,
    );
  }

  /**
   * Get All Cross Margin Pairs (MARKET_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Margin pairs
   *
   * @throws {@link Margin.GetAllCrossMarginPairsMarketDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllCrossMarginPairsMarketData(
    request: Margin.GetAllCrossMarginPairsMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAllPairsResponse[], Margin.GetAllCrossMarginPairsMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/allPairs"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginAllPairsResponseSchema)) },
        errorFactory: Margin.GetAllCrossMarginPairsMarketDataError,
      },
      options,
    );
  }

  /**
   * Get All Isolated Margin Symbol(USER_DATA)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns All Isolated Margin Symbols
   *
   * @throws {@link Margin.GetAllIsolatedMarginSymbolUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllIsolatedMarginSymbolUserData(
    request: Margin.GetAllIsolatedMarginSymbolUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedAllPairsResponse[], Margin.GetAllIsolatedMarginSymbolUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/isolated/allPairs"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginIsolatedAllPairsResponseSchema)) },
        errorFactory: Margin.GetAllIsolatedMarginSymbolUserDataError,
      },
      options,
    );
  }

  /**
   * Get All Margin Assets (MARKET_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Assets details
   *
   * @throws {@link Margin.GetAllMarginAssetsMarketDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllMarginAssetsMarketData(
    request: Margin.GetAllMarginAssetsMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAllAssetsResponse[], Margin.GetAllMarginAssetsMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/allAssets"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "asset", value: request.asset, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginAllAssetsResponseSchema)) },
        errorFactory: Margin.GetAllMarginAssetsMarketDataError,
      },
      options,
    );
  }

  /**
   * Get BNB Burn Status(USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Status on BNB to pay for trading fees
   *
   * @throws {@link Margin.GetBnbBurnStatusUserDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBnbBurnStatusUserData(
    request: Margin.GetBnbBurnStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<BnbBurnStatus, Margin.GetBnbBurnStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/bnbBurn"),
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
        success: { kind: "json", schema: bnbBurnStatusSchema },
        errorFactory: Margin.GetBnbBurnStatusUserDataError,
      },
      options,
    );
  }

  /**
   * Get Cross Margin Transfer History (USER_DATA)
   *
   * @remarks
   * - Response in descending order
   * - Returns data for last 7 days by default
   * - Set `archived` to `true` to query data from 6 months ago
   *
   * Weight(IP): 1
   *
   * @returns Margin account transfer history, response in descending order
   *
   * @throws {@link Margin.GetCrossMarginTransferHistoryUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCrossMarginTransferHistoryUserData(
    request: Margin.GetCrossMarginTransferHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginTransferResponse, Margin.GetCrossMarginTransferHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/transfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type2Schema)) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginTransferResponseSchema },
        errorFactory: Margin.GetCrossMarginTransferHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Force Liquidation Record (USER_DATA)
   *
   * @remarks
   * - Response in descending order
   *
   * Weight(IP): 1
   *
   * @returns Force Liquidation History, response in descending order
   *
   * @throws {@link Margin.GetForceLiquidationRecordUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getForceLiquidationRecordUserData(
    request: Margin.GetForceLiquidationRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginForceLiquidationRecResponse, Margin.GetForceLiquidationRecordUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/forceLiquidationRec"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginForceLiquidationRecResponseSchema },
        errorFactory: Margin.GetForceLiquidationRecordUserDataError,
      },
      options,
    );
  }

  /**
   * Get Interest History (USER_DATA)
   *
   * @remarks
   * - Response in descending order
   * - If `isolatedSymbol` is not sent, crossed margin data will be returned
   * - Set `archived` to `true` to query data from 6 months ago
   * - `type` in response has 4 enums:
   *   - `PERIODIC` interest charged per hour
   *   - `ON_BORROW` first interest charged on borrow
   *   - `PERIODIC_CONVERTED` interest charged per hour converted into BNB
   *   - `ON_BORROW_CONVERTED` first interest charged on borrow converted into BNB
   *
   * Weight(IP): 1
   *
   * @returns Interest History, response in descending order
   *
   * @throws {@link Margin.GetInterestHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInterestHistoryUserData(
    request: Margin.GetInterestHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginInterestHistoryResponse, Margin.GetInterestHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/interestHistory"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "archived", value: request.archived, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginInterestHistoryResponseSchema },
        errorFactory: Margin.GetInterestHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Small Liability Exchange Coin List (USER_DATA)
   *
   * @remarks
   * Query the coins which can be small liability exchange
   *
   * Weight(UID): 100
   *
   * @returns coin list
   *
   * @throws {@link Margin.GetSmallLiabilityExchangeCoinListUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSmallLiabilityExchangeCoinListUserData(
    request: Margin.GetSmallLiabilityExchangeCoinListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginExchangeSmallLiabilityResponse[],
    Margin.GetSmallLiabilityExchangeCoinListUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/exchange-small-liability"),
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
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1MarginExchangeSmallLiabilityResponseSchema)),
        },
        errorFactory: Margin.GetSmallLiabilityExchangeCoinListUserDataError,
      },
      options,
    );
  }

  /**
   * Get Small Liability Exchange History (USER_DATA)
   *
   * @remarks
   * Get Small liability Exchange History
   *
   * Weight(UID): 100
   *
   * @returns coin list
   *
   * @throws {@link Margin.GetSmallLiabilityExchangeHistoryUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSmallLiabilityExchangeHistoryUserData(
    request: Margin.GetSmallLiabilityExchangeHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginExchangeSmallLiabilityHistoryResponse,
    Margin.GetSmallLiabilityExchangeHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/exchange-small-liability-history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginExchangeSmallLiabilityHistoryResponseSchema },
        errorFactory: Margin.GetSmallLiabilityExchangeHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Summary of Margin account (USER_DATA)
   *
   * @remarks
   * Get personal margin level information
   *
   * Weight(IP): 10
   *
   * @returns Summary of Margin Account
   *
   * @throws {@link Margin.GetSummaryOfMarginAccountUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSummaryOfMarginAccountUserData(
    request: Margin.GetSummaryOfMarginAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginTradeCoeffResponse, Margin.GetSummaryOfMarginAccountUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/tradeCoeff"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginTradeCoeffResponseSchema },
        errorFactory: Margin.GetSummaryOfMarginAccountUserDataError,
      },
      options,
    );
  }

  /**
   * Get a future hourly interest rate (USER_DATA)
   *
   * @remarks
   * Get user the next hourly estimate interest
   *
   * Weight(UID): 100
   *
   * @returns hourly interest
   *
   * @throws {@link Margin.GetAFutureHourlyInterestRateUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAFutureHourlyInterestRateUserData(
    request: Margin.GetAFutureHourlyInterestRateUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginNextHourlyInterestRateResponse[],
    Margin.GetAFutureHourlyInterestRateUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/next-hourly-interest-rate"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "assets", value: request.assets, schema: s.optional(s.string()) },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1MarginNextHourlyInterestRateResponseSchema)),
        },
        errorFactory: Margin.GetAFutureHourlyInterestRateUserDataError,
      },
      options,
    );
  }

  /**
   * Get cross or isolated margin capital flow(USER_DATA)
   *
   * @remarks
   * Get cross or isolated margin capital flow
   *
   * Weight(IP): 100
   *
   * @returns Margin capital flow
   *
   * @throws {@link Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCrossOrIsolatedMarginCapitalFlowUserData(
    request: Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginCapitalFlowResponse[], Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/capital-flow"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type3Schema)) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginCapitalFlowResponseSchema)) },
        errorFactory: Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError,
      },
      options,
    );
  }

  /**
   * Get tokens or symbols delist schedule for cross margin and isolated margin (MARKET_DATA)
   *
   * @remarks
   * Get tokens or symbols delist schedule for cross margin and isolated margin
   *
   * Weight(IP): 100
   *
   * @returns tokens or symbols delist schedule
   *
   * @throws {@link
   * Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketData(
    request: Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginDelistScheduleResponse[],
    Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/delist-schedule"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginDelistScheduleResponseSchema)) },
        errorFactory: Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError,
      },
      options,
    );
  }

  /**
   * Margin Account Cancel OCO (TRADE)
   *
   * @remarks
   * Cancel an entire Order List for a margin account
   *
   * - Canceling an individual leg will cancel the entire OCO
   * - Either `orderListId` or `listClientOrderId` must be provided
   *
   * Weight(UID): 1
   *
   * @returns Margin OCO details
   *
   * @throws {@link Margin.MarginAccountCancelOcoTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginAccountCancelOcoTrade(
    request: Margin.MarginAccountCancelOcoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOcoOrder, Margin.MarginAccountCancelOcoTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sapi/v1/margin/orderList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "orderListId", value: request.orderListId, schema: s.optional(s.int()) },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marginOcoOrderSchema },
        errorFactory: Margin.MarginAccountCancelOcoTradeError,
      },
      options,
    );
  }

  /**
   * Margin Account Cancel Order (TRADE)
   *
   * @remarks
   * Cancel an active order for margin account.
   *
   * Either `orderId` or `origClientOrderId` must be sent.
   *
   * Weight(IP): 10
   *
   * @returns Cancelled margin order details
   *
   * @throws {@link Margin.MarginAccountCancelOrderTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginAccountCancelOrderTrade(
    request: Margin.MarginAccountCancelOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOrder, Margin.MarginAccountCancelOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sapi/v1/margin/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marginOrderSchema },
        errorFactory: Margin.MarginAccountCancelOrderTradeError,
      },
      options,
    );
  }

  /**
   * Margin Account Cancel all Open Orders on a Symbol (TRADE)
   *
   * @remarks
   * - Cancels all active orders on a symbol for margin account.
   * - This includes OCO orders.
   *
   * Weight(IP): 1
   *
   * @returns Cancelled margin orders
   *
   * @throws {@link Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginAccountCancelAllOpenOrdersOnASymbolTrade(
    request: Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginOpenOrdersResponse[],
    Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sapi/v1/margin/openOrders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginOpenOrdersResponseSchema)) },
        errorFactory: Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeError,
      },
      options,
    );
  }

  /**
   * Margin Account New OCO (TRADE)
   *
   * @remarks
   * Send in a new OCO for a margin account
   *
   * - Price Restrictions:
   *   - SELL: Limit Price > Last Price > Stop Price
   *   - BUY: Limit Price < Last Price < Stop Price
   * - Quantity Restrictions:
   *   - Both legs must have the same quantity
   *   - ICEBERG quantities however do not have to be the same.
   * - Order Rate Limit
   *   - OCO counts as 2 orders against the order rate limit.
   *
   * Weight(UID): 6
   *
   * @returns New Margin OCO details
   *
   * @throws {@link Margin.MarginAccountNewOcoTradeError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginAccountNewOcoTrade(
    request: Margin.MarginAccountNewOcoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderOcoResponse, Margin.MarginAccountNewOcoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/margin/order/oco"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.float64() },
          { name: "price", value: request.price, schema: s.float64() },
          { name: "stopPrice", value: request.stopPrice, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          { name: "limitClientOrderId", value: request.limitClientOrderId, schema: s.optional(s.string()) },
          { name: "limitIcebergQty", value: request.limitIcebergQty, schema: s.optional(s.float64()) },
          { name: "stopClientOrderId", value: request.stopClientOrderId, schema: s.optional(s.string()) },
          { name: "stopLimitPrice", value: request.stopLimitPrice, schema: s.optional(s.float64()) },
          { name: "stopIcebergQty", value: request.stopIcebergQty, schema: s.optional(s.float64()) },
          {
            name: "stopLimitTimeInForce",
            value: request.stopLimitTimeInForce,
            schema: s.optional(s.lazy(() => stopLimitTimeInForceSchema)),
          },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "sideEffectType",
            value: request.sideEffectType,
            schema: s.optional(s.lazy(() => sideEffectTypeSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderOcoResponseSchema },
        errorFactory: Margin.MarginAccountNewOcoTradeError,
      },
      options,
    );
  }

  /**
   * Margin Account New OTO (TRADE)
   *
   * @remarks
   * Post a new `OTO` order for margin account:
   * - An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders
   * - The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially,
   *   only the working order goes on the order book.
   * - The second order is called the pending order. It can be any order type except for `MARKET`
   *   orders using parameter `quoteOrderQty`. The pending order is only placed on the order book
   *   when the working order gets fully filled.
   * - If either the working order or the pending order is cancelled individually, the other order
   *   in the order list will also be canceled or expired.
   * - When the order list is placed, if the working order gets immediately fully filled, the
   *   placement response will show the working order as `FILLED` but the pending order will still
   *   appear as `PENDING_NEW`. You need to query the status of the pending order again to see its
   *   updated status.
   * - OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and
   *   `MAX_NUM_ORDERS` filter.
   *
   * Weight(UID): 6
   *
   * @returns OTO order
   *
   * @throws {@link Margin.MarginAccountNewOtoTradeError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginAccountNewOtoTrade(
    request: Margin.MarginAccountNewOtoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderOtoResponse, Margin.MarginAccountNewOtoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/margin/order/oto"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "workingType", value: request.workingType, schema: workingTypeSchema },
          { name: "workingSide", value: request.workingSide, schema: workingSideSchema },
          { name: "workingPrice", value: request.workingPrice, schema: s.float64() },
          { name: "workingQuantity", value: request.workingQuantity, schema: s.float64() },
          { name: "workingIcebergQty", value: request.workingIcebergQty, schema: s.float64() },
          { name: "pendingType", value: request.pendingType, schema: pendingTypeSchema },
          { name: "pendingSide", value: request.pendingSide, schema: pendingSideSchema },
          { name: "pendingQuantity", value: request.pendingQuantity, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "sideEffectType",
            value: request.sideEffectType,
            schema: s.optional(s.lazy(() => sideEffectType1Schema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          { name: "autoRepayAtCancel", value: request.autoRepayAtCancel, schema: s.optional(s.boolean()) },
          {
            name: "workingClientOrderId",
            value: request.workingClientOrderId,
            schema: s.optional(s.string()),
          },
          {
            name: "workingTimeInForce",
            value: request.workingTimeInForce,
            schema: s.optional(s.lazy(() => workingTimeInForceSchema)),
          },
          {
            name: "pendingClientOrderId",
            value: request.pendingClientOrderId,
            schema: s.optional(s.string()),
          },
          { name: "pendingPrice", value: request.pendingPrice, schema: s.optional(s.float64()) },
          { name: "pendingStopPrice", value: request.pendingStopPrice, schema: s.optional(s.float64()) },
          {
            name: "pendingTrailingDelta",
            value: request.pendingTrailingDelta,
            schema: s.optional(s.float64()),
          },
          { name: "pendingIcebergQty", value: request.pendingIcebergQty, schema: s.optional(s.float64()) },
          {
            name: "pendingTimeInForce",
            value: request.pendingTimeInForce,
            schema: s.optional(s.lazy(() => pendingTimeInForceSchema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderOtoResponseSchema },
        errorFactory: Margin.MarginAccountNewOtoTradeError,
      },
      options,
    );
  }

  /**
   * Margin Account New OTOCO (TRADE)
   *
   * @remarks
   * Post a new `OTOCO` order for margin account:
   * - An `OTOCO` (One-Triggers-the-Other-Cancel-the-Other) is an order list comprised of 3 orders
   * - The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially,
   *   only the working order goes on the order book.
   *   - The behavior of the working order is the same as the `OTO`.
   * - `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The
   *   pending orders are only placed on the order book when the working order gets fully filled.
   *   - The rules of the pending above and pending below follow the same rules as the Order List
   *     `OCO`.
   * - OTOCOs add 3 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and
   *   `MAX_NUM_ORDERS` filter.
   *
   * Weight(UID): 6
   *
   * @returns OTOCO order
   *
   * @throws {@link Margin.MarginAccountNewOtocoTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginAccountNewOtocoTrade(
    request: Margin.MarginAccountNewOtocoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderOtocoResponse, Margin.MarginAccountNewOtocoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/margin/order/otoco"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "workingType", value: request.workingType, schema: workingTypeSchema },
          { name: "workingSide", value: request.workingSide, schema: workingSideSchema },
          { name: "workingPrice", value: request.workingPrice, schema: s.float64() },
          { name: "workingQuantity", value: request.workingQuantity, schema: s.float64() },
          { name: "workingIcebergQty", value: request.workingIcebergQty, schema: s.float64() },
          { name: "pendingSide", value: request.pendingSide, schema: pendingSideSchema },
          { name: "pendingQuantity", value: request.pendingQuantity, schema: s.float64() },
          { name: "pendingAboveType", value: request.pendingAboveType, schema: pendingAboveTypeSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          {
            name: "sideEffectType",
            value: request.sideEffectType,
            schema: s.optional(s.lazy(() => sideEffectType1Schema)),
          },
          { name: "autoRepayAtCancel", value: request.autoRepayAtCancel, schema: s.optional(s.boolean()) },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          {
            name: "workingClientOrderId",
            value: request.workingClientOrderId,
            schema: s.optional(s.string()),
          },
          {
            name: "workingTimeInForce",
            value: request.workingTimeInForce,
            schema: s.optional(s.lazy(() => workingTimeInForceSchema)),
          },
          {
            name: "pendingAboveClientOrderId",
            value: request.pendingAboveClientOrderId,
            schema: s.optional(s.string()),
          },
          { name: "pendingAbovePrice", value: request.pendingAbovePrice, schema: s.optional(s.float64()) },
          {
            name: "pendingAboveStopPrice",
            value: request.pendingAboveStopPrice,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingAboveTrailingDelta",
            value: request.pendingAboveTrailingDelta,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingAboveIcebergQty",
            value: request.pendingAboveIcebergQty,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingAboveTimeInForce",
            value: request.pendingAboveTimeInForce,
            schema: s.optional(s.lazy(() => pendingAboveTimeInForceSchema)),
          },
          {
            name: "pendingBelowType",
            value: request.pendingBelowType,
            schema: s.optional(s.lazy(() => pendingBelowTypeSchema)),
          },
          {
            name: "pendingBelowClientOrderId",
            value: request.pendingBelowClientOrderId,
            schema: s.optional(s.string()),
          },
          { name: "pendingBelowPrice", value: request.pendingBelowPrice, schema: s.optional(s.float64()) },
          {
            name: "pendingBelowStopPrice",
            value: request.pendingBelowStopPrice,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingBelowTrailingDelta",
            value: request.pendingBelowTrailingDelta,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingBelowIcebergQty",
            value: request.pendingBelowIcebergQty,
            schema: s.optional(s.float64()),
          },
          {
            name: "pendingBelowTimeInForce",
            value: request.pendingBelowTimeInForce,
            schema: s.optional(s.lazy(() => pendingBelowTimeInForceSchema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderOtocoResponseSchema },
        errorFactory: Margin.MarginAccountNewOtocoTradeError,
      },
      options,
    );
  }

  /**
   * Margin Account New Order (TRADE)
   *
   * @remarks
   * Post a new order for margin account.
   *
   * Weight(UID): 6
   *
   * @returns Margin order info
   *
   * @throws {@link Margin.MarginAccountNewOrderTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginAccountNewOrderTrade(
    request: Margin.MarginAccountNewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderResponse, Margin.MarginAccountNewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/margin/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "quantity", value: request.quantity, schema: s.float64() },
          { name: "autoRepayAtCancel", value: request.autoRepayAtCancel, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "quoteOrderQty", value: request.quoteOrderQty, schema: s.optional(s.float64()) },
          { name: "price", value: request.price, schema: s.optional(s.float64()) },
          { name: "stopPrice", value: request.stopPrice, schema: s.optional(s.float64()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.float64()) },
          {
            name: "newOrderRespType",
            value: request.newOrderRespType,
            schema: s.optional(s.lazy(() => newOrderRespTypeSchema)),
          },
          {
            name: "sideEffectType",
            value: request.sideEffectType,
            schema: s.optional(s.lazy(() => sideEffectTypeSchema)),
          },
          {
            name: "timeInForce",
            value: request.timeInForce,
            schema: s.optional(s.lazy(() => timeInForceSchema)),
          },
          {
            name: "selfTradePreventionMode",
            value: request.selfTradePreventionMode,
            schema: s.optional(s.lazy(() => selfTradePreventionModeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderResponseSchema },
        errorFactory: Margin.MarginAccountNewOrderTradeError,
      },
      options,
    );
  }

  /**
   * Margin Interest Rate History (USER_DATA)
   *
   * @remarks
   * The max interval between startTime and endTime is 30 days.
   *
   * Weight(IP): 1
   *
   * @returns Margin Interest Rate History
   *
   * @throws {@link Margin.MarginInterestRateHistoryUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginInterestRateHistoryUserData(
    request: Margin.MarginInterestRateHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginInterestRateHistoryResponse[], Margin.MarginInterestRateHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/interestRateHistory"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1MarginInterestRateHistoryResponseSchema)),
        },
        errorFactory: Margin.MarginInterestRateHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Margin account borrow/repay(MARGIN)
   *
   * @remarks
   * Margin account borrow/repay(MARGIN)
   *
   * Weight(UID): 3000
   *
   * @returns Margin account borrow/repay
   *
   * @throws {@link Margin.MarginAccountBorrowRepayMarginError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginAccountBorrowRepayMargin(
    request: Margin.MarginAccountBorrowRepayMarginRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginBorrowRepayResponse, Margin.MarginAccountBorrowRepayMarginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/margin/borrow-repay"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "isIsolated", value: request.isIsolated, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "type", value: request.type, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginBorrowRepayResponseSchema },
        errorFactory: Margin.MarginAccountBorrowRepayMarginError,
      },
      options,
    );
  }

  /**
   * Margin manual liquidation(MARGIN)
   *
   * @remarks
   * Margin manual liquidation
   *
   * Weight(UID): 3000
   *
   * @returns Margin manual liquidation
   *
   * @throws {@link Margin.MarginManualLiquidationMarginError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marginManualLiquidationMargin(
    request: Margin.MarginManualLiquidationMarginRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginManualLiquidationResponse[], Margin.MarginManualLiquidationMarginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/margin/manual-liquidation"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: type4Schema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginManualLiquidationResponseSchema)) },
        errorFactory: Margin.MarginManualLiquidationMarginError,
      },
      options,
    );
  }

  /**
   * Query Cross Margin Account Details (USER_DATA)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns Margin account details
   *
   * @throws {@link Margin.QueryCrossMarginAccountDetailsUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryCrossMarginAccountDetailsUserData(
    request: Margin.QueryCrossMarginAccountDetailsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAccountResponse, Margin.QueryCrossMarginAccountDetailsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/account"),
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
        success: { kind: "json", schema: sapiV1MarginAccountResponseSchema },
        errorFactory: Margin.QueryCrossMarginAccountDetailsUserDataError,
      },
      options,
    );
  }

  /**
   * Query Cross Margin Fee Data (USER_DATA)
   *
   * @remarks
   * Get cross margin fee data collection with any vip level or user's current specific data as
   * https://www.binance.com/en/margin-fee
   *
   * Weight(IP): 1 when coin is specified; 5 when the coin parameter is omitted
   *
   * @returns Cross Margin Fee Data
   *
   * @throws {@link Margin.QueryCrossMarginFeeDataUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryCrossMarginFeeDataUserData(
    request: Margin.QueryCrossMarginFeeDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginCrossMarginDataResponse[], Margin.QueryCrossMarginFeeDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/crossMarginData"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.int()) },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginCrossMarginDataResponseSchema)) },
        errorFactory: Margin.QueryCrossMarginFeeDataUserDataError,
      },
      options,
    );
  }

  /**
   * Query Current Margin Order Count Usage (TRADE)
   *
   * @remarks
   * Displays the user's current margin order count usage for all intervals.
   *
   * Weight(IP): 20
   *
   * @returns Usage.
   *
   * @throws {@link Margin.QueryCurrentMarginOrderCountUsageTradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryCurrentMarginOrderCountUsageTrade(
    request: Margin.QueryCurrentMarginOrderCountUsageTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginRateLimitOrderResponse[], Margin.QueryCurrentMarginOrderCountUsageTradeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/rateLimit/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "isIsolated", value: request.isIsolated, schema: s.optional(s.string()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginRateLimitOrderResponseSchema)) },
        errorFactory: Margin.QueryCurrentMarginOrderCountUsageTradeError,
      },
      options,
    );
  }

  /**
   * Query Enabled Isolated Margin Account Limit (USER_DATA)
   *
   * @remarks
   * Query enabled isolated margin account limit.
   *
   * Weight(IP): 1
   *
   * @returns Number of enabled Isolated Margin Account and its limit
   *
   * @throws {@link Margin.QueryEnabledIsolatedMarginAccountLimitUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryEnabledIsolatedMarginAccountLimitUserData(
    request: Margin.QueryEnabledIsolatedMarginAccountLimitUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginIsolatedAccountLimitResponse,
    Margin.QueryEnabledIsolatedMarginAccountLimitUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/isolated/accountLimit"),
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
        success: { kind: "json", schema: sapiV1MarginIsolatedAccountLimitResponseSchema },
        errorFactory: Margin.QueryEnabledIsolatedMarginAccountLimitUserDataError,
      },
      options,
    );
  }

  /**
   * Query Isolated Margin Account Info (USER_DATA)
   *
   * @remarks
   * - If "symbols" is not sent, all isolated assets will be returned.
   * - If "symbols" is sent, only the isolated assets of the sent symbols will be returned.
   *
   * Weight(IP): 10
   *
   * @returns Isolated Margin Account Info when "symbols" is not sent
   *
   * @throws {@link Margin.QueryIsolatedMarginAccountInfoUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryIsolatedMarginAccountInfoUserData(
    request: Margin.QueryIsolatedMarginAccountInfoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<IsolatedMarginAccountInfo, Margin.QueryIsolatedMarginAccountInfoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/isolated/account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: isolatedMarginAccountInfoSchema },
        errorFactory: Margin.QueryIsolatedMarginAccountInfoUserDataError,
      },
      options,
    );
  }

  /**
   * Query Isolated Margin Fee Data (USER_DATA)
   *
   * @remarks
   * Get isolated margin fee data collection with any vip level or user's current specific data as
   * https://www.binance.com/en/margin-fee
   *
   * Weight(IP): 1 when a single is specified; 10 when the symbol parameter is omitted
   *
   * @returns Isolated Margin Fee Data
   *
   * @throws {@link Margin.QueryIsolatedMarginFeeDataUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryIsolatedMarginFeeDataUserData(
    request: Margin.QueryIsolatedMarginFeeDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedMarginDataResponse[], Margin.QueryIsolatedMarginFeeDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/isolatedMarginData"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.int()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1MarginIsolatedMarginDataResponseSchema)),
        },
        errorFactory: Margin.QueryIsolatedMarginFeeDataUserDataError,
      },
      options,
    );
  }

  /**
   * Query Isolated Margin Tier Data (USER_DATA)
   *
   * @remarks
   * Get isolated margin tier data collection with any tier as
   * https://www.binance.com/en/margin-data
   *
   * Weight(IP): 1
   *
   * @returns Isolated Margin Tier Data
   *
   * @throws {@link Margin.QueryIsolatedMarginTierDataUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryIsolatedMarginTierDataUserData(
    request: Margin.QueryIsolatedMarginTierDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedMarginTierResponse[], Margin.QueryIsolatedMarginTierDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/isolatedMarginTier"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tier", value: request.tier, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1MarginIsolatedMarginTierResponseSchema)),
        },
        errorFactory: Margin.QueryIsolatedMarginTierDataUserDataError,
      },
      options,
    );
  }

  /**
   * Query Liability Coin Leverage Bracket in Cross Margin Pro Mode (MARKET_DATA)
   *
   * @remarks
   * Liability Coin Leverage Bracket in Cross Margin Pro Mode
   *
   * Weight(IP): 1
   *
   * @returns Leverage info
   *
   * @throws {@link Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryLiabilityCoinLeverageBracketInCrossMarginProModeMarketData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginLeverageBracketResponse[],
    Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/leverageBracket"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginLeverageBracketResponseSchema)) },
        errorFactory: Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError,
      },
      options,
    );
  }

  /**
   * Query Margin Account's All Orders (USER_DATA)
   *
   * @remarks
   * - If `orderId` is set, it will get orders >= that orderId. Otherwise most recent orders are
   *   returned.
   * - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not
   *   available at this time.
   *
   * Weight(IP): 200
   *
   * Request Limit: 60 times/min per IP
   *
   * @returns Margin order list
   *
   * @throws {@link Margin.QueryMarginAccountSAllOrdersUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMarginAccountSAllOrdersUserData(
    request: Margin.QueryMarginAccountSAllOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOrderDetail[], Margin.QueryMarginAccountSAllOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/allOrders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => marginOrderDetailSchema)) },
        errorFactory: Margin.QueryMarginAccountSAllOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Query Margin Account's OCO (USER_DATA)
   *
   * @remarks
   * Retrieves a specific OCO based on provided optional parameters
   *
   * - Either `orderListId` or `origClientOrderId` must be provided
   *
   * Weight(IP): 10
   *
   * @returns Margin OCO details
   *
   * @throws {@link Margin.QueryMarginAccountSOcoUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMarginAccountSOcoUserData(
    request: Margin.QueryMarginAccountSOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderListResponse, Margin.QueryMarginAccountSOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/orderList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "orderListId", value: request.orderListId, schema: s.optional(s.int()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderListResponseSchema },
        errorFactory: Margin.QueryMarginAccountSOcoUserDataError,
      },
      options,
    );
  }

  /**
   * Query Margin Account's Open OCO (USER_DATA)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns List of Open Margin OCO orders
   *
   * @throws {@link Margin.QueryMarginAccountSOpenOcoUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMarginAccountSOpenOcoUserData(
    request: Margin.QueryMarginAccountSOpenOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOpenOrderListResponse[], Margin.QueryMarginAccountSOpenOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/openOrderList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginOpenOrderListResponseSchema)) },
        errorFactory: Margin.QueryMarginAccountSOpenOcoUserDataError,
      },
      options,
    );
  }

  /**
   * Query Margin Account's Open Orders (USER_DATA)
   *
   * @remarks
   * - If the `symbol` is not sent, orders for all symbols will be returned in an array.
   * - When all symbols are returned, the number of requests counted against the rate limiter is
   *   equal to the number of symbols currently trading on the exchange
   * - If isIsolated ="TRUE", symbol must be sent.
   *
   * Weight(IP): 10
   *
   * @returns Margin open orders list
   *
   * @throws {@link Margin.QueryMarginAccountSOpenOrdersUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMarginAccountSOpenOrdersUserData(
    request: Margin.QueryMarginAccountSOpenOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOrderDetail[], Margin.QueryMarginAccountSOpenOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/openOrders"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => marginOrderDetailSchema)) },
        errorFactory: Margin.QueryMarginAccountSOpenOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Query Margin Account's Order (USER_DATA)
   *
   * @remarks
   * - Either `orderId` or `origClientOrderId` must be sent.
   * - For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not
   *   available at this time.
   *
   * Weight(IP): 10
   *
   * @returns Interest History, response in descending order
   *
   * @throws {@link Margin.QueryMarginAccountSOrderUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMarginAccountSOrderUserData(
    request: Margin.QueryMarginAccountSOrderUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOrderDetail, Margin.QueryMarginAccountSOrderUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/order"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "orderId", value: request.orderId, schema: s.optional(s.int()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marginOrderDetailSchema },
        errorFactory: Margin.QueryMarginAccountSOrderUserDataError,
      },
      options,
    );
  }

  /**
   * Query Margin Account's Trade List (USER_DATA)
   *
   * @remarks
   * - If `fromId` is set, it will get orders >= that `fromId`. Otherwise most recent trades are
   *   returned.
   *
   * Weight(IP): 10
   *
   * @returns List of margin trades
   *
   * @throws {@link Margin.QueryMarginAccountSTradeListUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMarginAccountSTradeListUserData(
    request: Margin.QueryMarginAccountSTradeListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginTrade[], Margin.QueryMarginAccountSTradeListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/myTrades"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => marginTradeSchema)) },
        errorFactory: Margin.QueryMarginAccountSTradeListUserDataError,
      },
      options,
    );
  }

  /**
   * Query Margin Account's all OCO (USER_DATA)
   *
   * @remarks
   * Retrieves all OCO for a specific margin account based on provided optional parameters
   *
   * Weight(IP): 200
   *
   * @returns List of Margin OCO orders
   *
   * @throws {@link Margin.QueryMarginAccountSAllOcoUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMarginAccountSAllOcoUserData(
    request: Margin.QueryMarginAccountSAllOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAllOrderListResponse[], Margin.QueryMarginAccountSAllOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/allOrderList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginAllOrderListResponseSchema)) },
        errorFactory: Margin.QueryMarginAccountSAllOcoUserDataError,
      },
      options,
    );
  }

  /**
   * Query Margin Available Inventory (USER_DATA)
   *
   * @remarks
   * Margin available Inventory query
   *
   * Weight(UID): 50
   *
   * @returns Margin available Inventory
   *
   * @throws {@link Margin.QueryMarginAvailableInventoryUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMarginAvailableInventoryUserData(
    request: Margin.QueryMarginAvailableInventoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAvailableInventoryResponse, Margin.QueryMarginAvailableInventoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/available-inventory"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: type4Schema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginAvailableInventoryResponseSchema },
        errorFactory: Margin.QueryMarginAvailableInventoryUserDataError,
      },
      options,
    );
  }

  /**
   * Query Margin PriceIndex (MARKET_DATA)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns Price index
   *
   * @throws {@link Margin.QueryMarginPriceIndexMarketDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMarginPriceIndexMarketData(
    request: Margin.QueryMarginPriceIndexMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginPriceIndexResponse, Margin.QueryMarginPriceIndexMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/priceIndex"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginPriceIndexResponseSchema },
        errorFactory: Margin.QueryMarginPriceIndexMarketDataError,
      },
      options,
    );
  }

  /**
   * Query Max Borrow (USER_DATA)
   *
   * @remarks
   * - If `isolatedSymbol` is not sent, crossed margin data will be sent.
   * - `borrowLimit` is also available from https://www.binance.com/en/margin-fee
   *
   * Weight(IP): 50
   *
   * @returns Details on max borrow amount
   *
   * @throws {@link Margin.QueryMaxBorrowUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMaxBorrowUserData(
    request: Margin.QueryMaxBorrowUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginMaxBorrowableResponse, Margin.QueryMaxBorrowUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/maxBorrowable"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginMaxBorrowableResponseSchema },
        errorFactory: Margin.QueryMaxBorrowUserDataError,
      },
      options,
    );
  }

  /**
   * Query Max Transfer-Out Amount (USER_DATA)
   *
   * @remarks
   * - If `isolatedSymbol` is not sent, crossed margin data will be sent.
   *
   * Weight(IP): 50
   *
   * @returns Details on max transferable amount
   *
   * @throws {@link Margin.QueryMaxTransferOutAmountUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMaxTransferOutAmountUserData(
    request: Margin.QueryMaxTransferOutAmountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginMaxTransferableResponse, Margin.QueryMaxTransferOutAmountUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/maxTransferable"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginMaxTransferableResponseSchema },
        errorFactory: Margin.QueryMaxTransferOutAmountUserDataError,
      },
      options,
    );
  }

  /**
   * Query borrow/repay records in Margin account(USER_DATA)
   *
   * @remarks
   * Query borrow/repay records in Margin account
   *
   * - txId or startTime must be sent. txId takes precedence. Response in descending order
   * - If an asset is sent, data within 30 days before endTime; If an asset is not sent, data within
   *   7 days before endTime
   * - If neither startTime nor endTime is sent, the recent 7-day data will be returned.
   * - startTime set as endTime - 7 days by default, endTime set as current time by default
   *
   * Weight(IP): 10
   *
   * @returns Margin account borrow/repay
   *
   * @throws {@link Margin.QueryBorrowRepayRecordsInMarginAccountUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryBorrowRepayRecordsInMarginAccountUserData(
    request: Margin.QueryBorrowRepayRecordsInMarginAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginBorrowRepayResponse1,
    Margin.QueryBorrowRepayRecordsInMarginAccountUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/margin/borrow-repay"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "type", value: request.type, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "txId", value: request.txId, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginBorrowRepayResponse1Schema },
        errorFactory: Margin.QueryBorrowRepayRecordsInMarginAccountUserDataError,
      },
      options,
    );
  }

  /**
   * Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA)
   *
   * @remarks
   * - "spotBNBBurn" and "interestBNBBurn" should be sent at least one.
   *
   * Weight(IP): 1
   *
   * @returns Status on BNB to pay for trading fees
   *
   * @throws {@link Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toggleBnbBurnOnSpotTradeAndMarginInterestUserData(
    request: Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<BnbBurnStatus, Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/bnbBurn"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "spotBNBBurn",
            value: request.spotBnbBurn,
            schema: s.optional(s.lazy(() => spotBnbBurnSchema)),
          },
          {
            name: "interestBNBBurn",
            value: request.interestBnbBurn,
            schema: s.optional(s.lazy(() => interestBnbBurnSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bnbBurnStatusSchema },
        errorFactory: Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError,
      },
      options,
    );
  }
}

export namespace Margin {
  export type AdjustCrossMarginMaxLeverageUserDataRequest = {
    /** Can only adjust 3 or 5 */
    maxLeverage: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AdjustCrossMarginMaxLeverageUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AdjustCrossMarginMaxLeverageUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class CrossMarginCollateralRatioMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<CrossMarginCollateralRatioMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DisableIsolatedMarginAccountTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DisableIsolatedMarginAccountTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DisableIsolatedMarginAccountTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableIsolatedMarginAccountTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class EnableIsolatedMarginAccountTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EnableIsolatedMarginAccountTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllCrossMarginPairsMarketDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
  };

  export class GetAllCrossMarginPairsMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetAllCrossMarginPairsMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllIsolatedMarginSymbolUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetAllIsolatedMarginSymbolUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetAllIsolatedMarginSymbolUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllMarginAssetsMarketDataRequest = {
    asset: string;
  };

  export class GetAllMarginAssetsMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetAllMarginAssetsMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBnbBurnStatusUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetBnbBurnStatusUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetBnbBurnStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCrossMarginTransferHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    type?: Type2;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** Isolated symbol */
    isolatedSymbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetCrossMarginTransferHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetCrossMarginTransferHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetForceLiquidationRecordUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Isolated symbol */
    isolatedSymbol?: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetForceLiquidationRecordUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetForceLiquidationRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInterestHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    /** Isolated symbol */
    isolatedSymbol?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** Default: false. Set to true for archived data from 6 months ago */
    archived?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetInterestHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetInterestHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSmallLiabilityExchangeCoinListUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetSmallLiabilityExchangeCoinListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetSmallLiabilityExchangeCoinListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSmallLiabilityExchangeHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetSmallLiabilityExchangeHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetSmallLiabilityExchangeHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSummaryOfMarginAccountUserDataRequest = {
    /** Email Address */
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetSummaryOfMarginAccountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetSummaryOfMarginAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAFutureHourlyInterestRateUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** List of assets, separated by commas, up to 20 */
    assets?: string;
    /** for isolated margin or not, "TRUE", "FALSE" */
    isIsolated?: IsIsolated;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetAFutureHourlyInterestRateUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetAFutureHourlyInterestRateUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCrossOrIsolatedMarginCapitalFlowUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    /** Required when querying isolated data */
    symbol?: string;
    type?: Type3;
    /** Only supports querying the data of the last 90 days */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /**
     * If fromId is set, the data with id > fromId will be returned. Otherwise the latest data will
     * be returned
     */
    fromId?: number;
    /** The number of data items returned each time is limited. Default 500; Max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetCrossOrIsolatedMarginCapitalFlowUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetCrossOrIsolatedMarginCapitalFlowUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError> =
      [
        { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
        { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      ];
  }

  export type MarginAccountCancelOcoTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** Order list id */
    orderListId?: number;
    /** A unique Id for the entire orderList */
    listClientOrderId?: string;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class MarginAccountCancelOcoTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginAccountCancelOcoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountCancelOrderTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** Order id */
    orderId?: number;
    /** Order id from client */
    origClientOrderId?: string;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class MarginAccountCancelOrderTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginAccountCancelOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountCancelAllOpenOrdersOnASymbolTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class MarginAccountCancelAllOpenOrdersOnASymbolTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginAccountCancelAllOpenOrdersOnASymbolTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountNewOcoTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    quantity: number;
    /** Order price */
    price: number;
    stopPrice: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** A unique Id for the entire orderList */
    listClientOrderId?: string;
    /** A unique Id for the limit order */
    limitClientOrderId?: string;
    limitIcebergQty?: number;
    /** A unique Id for the stop loss/stop loss limit leg */
    stopClientOrderId?: string;
    /** If provided, stopLimitTimeInForce is required. */
    stopLimitPrice?: number;
    stopIcebergQty?: number;
    stopLimitTimeInForce?: StopLimitTimeInForce;
    /** Set the response JSON. */
    newOrderRespType?: NewOrderRespType;
    /** Default `NO_SIDE_EFFECT` */
    sideEffectType?: SideEffectType;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class MarginAccountNewOcoTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginAccountNewOcoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountNewOtoTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** Supported values: LIMIT,LIMIT_MAKER */
    workingType: WorkingType;
    /** BUY,SELL */
    workingSide: WorkingSide;
    workingPrice: number;
    /** Sets the quantity for the working order. */
    workingQuantity: number;
    /** This can only be used if workingTimeInForce is GTC. */
    workingIcebergQty: number;
    /**
     * Supported values: Order Types Note that MARKET orders using quoteOrderQty are not supported.
     */
    pendingType: PendingType;
    /** BUY,SELL */
    pendingSide: PendingSide;
    /** Sets the quantity for the pending order. */
    pendingQuantity: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /**
     * Arbitrary unique ID among open order lists. Automatically generated if not sent. A new order
     * list with the same `listClientOrderId` is accepted only when the previous one is filled or
     * completely expired. `listClientOrderId` is distinct from the `workingClientOrderId` and the
     * `pendingClientOrderId`.
     */
    listClientOrderId?: string;
    /** Set the response JSON. */
    newOrderRespType?: NewOrderRespType;
    /** Default `NO_SIDE_EFFECT` */
    sideEffectType?: SideEffectType1;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /**
     * Only when MARGIN_BUY order takes effect, true means that the debt generated by the order
     * needs to be repay after the order is cancelled. The default is true
     */
    autoRepayAtCancel?: boolean;
    /**
     * Arbitrary unique ID among open orders for the working order. Automatically generated if not
     * sent.
     */
    workingClientOrderId?: string;
    /** GTC, IOC, FOK */
    workingTimeInForce?: WorkingTimeInForce;
    /**
     * Arbitrary unique ID among open orders for the pending order. Automatically generated if not
     * sent.
     */
    pendingClientOrderId?: string;
    pendingPrice?: number;
    pendingStopPrice?: number;
    pendingTrailingDelta?: number;
    /** This can only be used if pendingTimeInForce is GTC. */
    pendingIcebergQty?: number;
    /** GTC, IOC, FOK */
    pendingTimeInForce?: PendingTimeInForce;
  };

  export class MarginAccountNewOtoTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginAccountNewOtoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountNewOtocoTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** Supported values: LIMIT,LIMIT_MAKER */
    workingType: WorkingType;
    /** BUY,SELL */
    workingSide: WorkingSide;
    workingPrice: number;
    /** Sets the quantity for the working order. */
    workingQuantity: number;
    /** This can only be used if workingTimeInForce is GTC. */
    workingIcebergQty: number;
    /** BUY,SELL */
    pendingSide: PendingSide;
    /** Sets the quantity for the pending order. */
    pendingQuantity: number;
    /** Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT */
    pendingAboveType: PendingAboveType;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** Default `NO_SIDE_EFFECT` */
    sideEffectType?: SideEffectType1;
    /**
     * Only when MARGIN_BUY order takes effect, true means that the debt generated by the order
     * needs to be repay after the order is cancelled. The default is true
     */
    autoRepayAtCancel?: boolean;
    /**
     * Arbitrary unique ID among open order lists. Automatically generated if not sent. A new order
     * list with the same `listClientOrderId` is accepted only when the previous one is filled or
     * completely expired. `listClientOrderId` is distinct from the `workingClientOrderId` and the
     * `pendingClientOrderId`.
     */
    listClientOrderId?: string;
    /** Set the response JSON. */
    newOrderRespType?: NewOrderRespType;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /**
     * Arbitrary unique ID among open orders for the working order. Automatically generated if not
     * sent.
     */
    workingClientOrderId?: string;
    /** GTC, IOC, FOK */
    workingTimeInForce?: WorkingTimeInForce;
    /**
     * Arbitrary unique ID among open orders for the pending above order. Automatically generated if
     * not sent.
     */
    pendingAboveClientOrderId?: string;
    pendingAbovePrice?: number;
    pendingAboveStopPrice?: number;
    pendingAboveTrailingDelta?: number;
    /** This can only be used if pendingAboveTimeInForce is GTC. */
    pendingAboveIcebergQty?: number;
    pendingAboveTimeInForce?: PendingAboveTimeInForce;
    /** Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT */
    pendingBelowType?: PendingBelowType;
    /**
     * Arbitrary unique ID among open orders for the pending below order. Automatically generated if
     * not sent.
     */
    pendingBelowClientOrderId?: string;
    pendingBelowPrice?: number;
    pendingBelowStopPrice?: number;
    pendingBelowTrailingDelta?: number;
    /** This can only be used if pendingBelowTimeInForce is GTC. */
    pendingBelowIcebergQty?: number;
    pendingBelowTimeInForce?: PendingBelowTimeInForce;
  };

  export class MarginAccountNewOtocoTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginAccountNewOtocoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountNewOrderTradeRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    side: Side;
    /** Order type */
    type: Type1;
    quantity: number;
    autoRepayAtCancel: boolean;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** Quote quantity */
    quoteOrderQty?: number;
    /** Order price */
    price?: number;
    /** Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
    stopPrice?: number;
    /** Used to uniquely identify this cancel. Automatically generated by default */
    newClientOrderId?: string;
    /** Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. */
    icebergQty?: number;
    /** Set the response JSON. */
    newOrderRespType?: NewOrderRespType;
    /** Default `NO_SIDE_EFFECT` */
    sideEffectType?: SideEffectType;
    /** Order time in force */
    timeInForce?: TimeInForce;
    /**
     * The allowed enums is dependent on what is configured on the symbol. The possible supported
     * values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     */
    selfTradePreventionMode?: SelfTradePreventionMode;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class MarginAccountNewOrderTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginAccountNewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginInterestRateHistoryUserDataRequest = {
    asset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Defaults to user's vip level */
    vipLevel?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class MarginInterestRateHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginInterestRateHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountBorrowRepayMarginRequest = {
    asset: string;
    /** TRUE for isolated margin, FALSE for crossed margin */
    isIsolated: string;
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    amount: number;
    /** BORROW or REPAY */
    type: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class MarginAccountBorrowRepayMarginError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<MarginAccountBorrowRepayMarginError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginManualLiquidationMarginRequest = {
    type: Type4;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    symbol?: string;
  };

  export class MarginManualLiquidationMarginError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginManualLiquidationMarginError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCrossMarginAccountDetailsUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryCrossMarginAccountDetailsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryCrossMarginAccountDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCrossMarginFeeDataUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Defaults to user's vip level */
    vipLevel?: number;
    /** Coin name */
    coin?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryCrossMarginFeeDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryCrossMarginFeeDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCurrentMarginOrderCountUsageTradeRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: string;
    /** isolated symbol, mandatory for isolated margin */
    symbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryCurrentMarginOrderCountUsageTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryCurrentMarginOrderCountUsageTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryEnabledIsolatedMarginAccountLimitUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryEnabledIsolatedMarginAccountLimitUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryEnabledIsolatedMarginAccountLimitUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIsolatedMarginAccountInfoUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Max 5 symbols can be sent; separated by ',' */
    symbols?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryIsolatedMarginAccountInfoUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryIsolatedMarginAccountInfoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIsolatedMarginFeeDataUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Defaults to user's vip level */
    vipLevel?: number;
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryIsolatedMarginFeeDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryIsolatedMarginFeeDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIsolatedMarginTierDataUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** All margin tier data will be returned if tier is omitted */
    tier?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryIsolatedMarginTierDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryIsolatedMarginTierDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError> =
      [{ on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } }];
  }

  export type QueryMarginAccountSAllOrdersUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** Order id */
    orderId?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryMarginAccountSAllOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMarginAccountSAllOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSOcoUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** Mandatory for isolated margin, not supported for cross margin */
    symbol?: string;
    /** Order list id */
    orderListId?: number;
    /** Order id from client */
    origClientOrderId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryMarginAccountSOcoUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMarginAccountSOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSOpenOcoUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** Mandatory for isolated margin, not supported for cross margin */
    symbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryMarginAccountSOpenOcoUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMarginAccountSOpenOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSOpenOrdersUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryMarginAccountSOpenOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMarginAccountSOpenOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSOrderUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** Order id */
    orderId?: number;
    /** Order id from client */
    origClientOrderId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryMarginAccountSOrderUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMarginAccountSOrderUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSTradeListUserDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Trade id to fetch from. Default gets most recent trades. */
    fromId?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryMarginAccountSTradeListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMarginAccountSTradeListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSAllOcoUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * * `TRUE` - For isolated margin
     * * `FALSE` - Default, not for isolated margin
     */
    isIsolated?: IsIsolated;
    /** Mandatory for isolated margin, not supported for cross margin */
    symbol?: string;
    /** If supplied, neither `startTime` or `endTime` can be provided */
    fromId?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default Value: 500; Max Value: 1000 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryMarginAccountSAllOcoUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMarginAccountSAllOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAvailableInventoryUserDataRequest = {
    type: Type4;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
  };

  export class QueryMarginAvailableInventoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMarginAvailableInventoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginPriceIndexMarketDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
  };

  export class QueryMarginPriceIndexMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<QueryMarginPriceIndexMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMaxBorrowUserDataRequest = {
    asset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Isolated symbol */
    isolatedSymbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryMaxBorrowUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMaxBorrowUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMaxTransferOutAmountUserDataRequest = {
    asset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Isolated symbol */
    isolatedSymbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryMaxTransferOutAmountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryMaxTransferOutAmountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryBorrowRepayRecordsInMarginAccountUserDataRequest = {
    asset: string;
    /** BORROW or REPAY */
    type: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Isolated symbol */
    isolatedSymbol?: string;
    /** tranId in POST /sapi/v1/margin/loan */
    txId?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryBorrowRepayRecordsInMarginAccountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<QueryBorrowRepayRecordsInMarginAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Determines whether to use BNB to pay for trading fees on SPOT */
    spotBnbBurn?: SpotBnbBurn;
    /** Determines whether to use BNB to pay for margin loan's interest */
    interestBnbBurn?: InterestBnbBurn;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
