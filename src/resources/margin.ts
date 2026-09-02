import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

export class Margin {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adjustCrossMarginMaxLeverageUserData(
    request: Margin.AdjustCrossMarginMaxLeverageUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginMaxLeverageResponse, Margin.AdjustCrossMarginMaxLeverageUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/margin/max-leverage"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "maxLeverage", value: request.maxLeverage, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginMaxLeverageResponseSchema },
        errorFactory: Margin.AdjustCrossMarginMaxLeverageUserDataError,
      },
      options,
    );
  }

  crossMarginCollateralRatioMarketData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginCrossMarginCollateralRatioResponse[],
    Margin.CrossMarginCollateralRatioMarketDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/crossMarginCollateralRatio"),
        auth: this.#auth.apiKeyAuth,
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

  disableIsolatedMarginAccountTrade(
    request: Margin.DisableIsolatedMarginAccountTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedAccountResponse, Margin.DisableIsolatedMarginAccountTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/sapi/v1/margin/isolated/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginIsolatedAccountResponseSchema },
        errorFactory: Margin.DisableIsolatedMarginAccountTradeError,
      },
      options,
    );
  }

  enableIsolatedMarginAccountTrade(
    request: Margin.EnableIsolatedMarginAccountTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedAccountResponse, Margin.EnableIsolatedMarginAccountTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/margin/isolated/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginIsolatedAccountResponseSchema },
        errorFactory: Margin.EnableIsolatedMarginAccountTradeError,
      },
      options,
    );
  }

  getAllCrossMarginPairsMarketData(
    request: Margin.GetAllCrossMarginPairsMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAllPairsResponse[], Margin.GetAllCrossMarginPairsMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/allPairs"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginAllPairsResponseSchema)) },
        errorFactory: Margin.GetAllCrossMarginPairsMarketDataError,
      },
      options,
    );
  }

  getAllIsolatedMarginSymbolUserData(
    request: Margin.GetAllIsolatedMarginSymbolUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedAllPairsResponse[], Margin.GetAllIsolatedMarginSymbolUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/isolated/allPairs"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginIsolatedAllPairsResponseSchema)) },
        errorFactory: Margin.GetAllIsolatedMarginSymbolUserDataError,
      },
      options,
    );
  }

  getAllMarginAssetsMarketData(
    request: Margin.GetAllMarginAssetsMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAllAssetsResponse[], Margin.GetAllMarginAssetsMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/allAssets"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "asset", value: request.asset, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginAllAssetsResponseSchema)) },
        errorFactory: Margin.GetAllMarginAssetsMarketDataError,
      },
      options,
    );
  }

  getBnbBurnStatusUserData(
    request: Margin.GetBnbBurnStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<BnbBurnStatus, Margin.GetBnbBurnStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/bnbBurn"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bnbBurnStatusSchema },
        errorFactory: Margin.GetBnbBurnStatusUserDataError,
      },
      options,
    );
  }

  getCrossMarginTransferHistoryUserData(
    request: Margin.GetCrossMarginTransferHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginTransferResponse, Margin.GetCrossMarginTransferHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/transfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type2Schema)) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginTransferResponseSchema },
        errorFactory: Margin.GetCrossMarginTransferHistoryUserDataError,
      },
      options,
    );
  }

  getForceLiquidationRecordUserData(
    request: Margin.GetForceLiquidationRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginForceLiquidationRecResponse, Margin.GetForceLiquidationRecordUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/forceLiquidationRec"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginForceLiquidationRecResponseSchema },
        errorFactory: Margin.GetForceLiquidationRecordUserDataError,
      },
      options,
    );
  }

  getInterestHistoryUserData(
    request: Margin.GetInterestHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginInterestHistoryResponse, Margin.GetInterestHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/interestHistory"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "archived", value: request.archived, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginInterestHistoryResponseSchema },
        errorFactory: Margin.GetInterestHistoryUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/margin/exchange-small-liability"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
        url: this.#servers.default("/sapi/v1/margin/exchange-small-liability-history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginExchangeSmallLiabilityHistoryResponseSchema },
        errorFactory: Margin.GetSmallLiabilityExchangeHistoryUserDataError,
      },
      options,
    );
  }

  getSummaryOfMarginAccountUserData(
    request: Margin.GetSummaryOfMarginAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginTradeCoeffResponse, Margin.GetSummaryOfMarginAccountUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/tradeCoeff"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginTradeCoeffResponseSchema },
        errorFactory: Margin.GetSummaryOfMarginAccountUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/margin/next-hourly-interest-rate"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "assets", value: request.assets, schema: s.optional(s.string()) },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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

  getCrossOrIsolatedMarginCapitalFlowUserData(
    request: Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginCapitalFlowResponse[], Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/capital-flow"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type3Schema)) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginCapitalFlowResponseSchema)) },
        errorFactory: Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/margin/delist-schedule"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginDelistScheduleResponseSchema)) },
        errorFactory: Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError,
      },
      options,
    );
  }

  marginAccountCancelOcoTrade(
    request: Margin.MarginAccountCancelOcoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOcoOrder, Margin.MarginAccountCancelOcoTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/sapi/v1/margin/orderList"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "orderListId", value: request.orderListId, schema: s.optional(s.number()) },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marginOcoOrderSchema },
        errorFactory: Margin.MarginAccountCancelOcoTradeError,
      },
      options,
    );
  }

  marginAccountCancelOrderTrade(
    request: Margin.MarginAccountCancelOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOrder, Margin.MarginAccountCancelOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/sapi/v1/margin/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marginOrderSchema },
        errorFactory: Margin.MarginAccountCancelOrderTradeError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/margin/openOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginOpenOrdersResponseSchema)) },
        errorFactory: Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeError,
      },
      options,
    );
  }

  marginAccountNewOcoTrade(
    request: Margin.MarginAccountNewOcoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderOcoResponse, Margin.MarginAccountNewOcoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/margin/order/oco"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "quantity", value: request.quantity, schema: s.number() },
          { name: "price", value: request.price, schema: s.number() },
          { name: "stopPrice", value: request.stopPrice, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "listClientOrderId", value: request.listClientOrderId, schema: s.optional(s.string()) },
          { name: "limitClientOrderId", value: request.limitClientOrderId, schema: s.optional(s.string()) },
          { name: "limitIcebergQty", value: request.limitIcebergQty, schema: s.optional(s.number()) },
          { name: "stopClientOrderId", value: request.stopClientOrderId, schema: s.optional(s.string()) },
          { name: "stopLimitPrice", value: request.stopLimitPrice, schema: s.optional(s.number()) },
          { name: "stopIcebergQty", value: request.stopIcebergQty, schema: s.optional(s.number()) },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderOcoResponseSchema },
        errorFactory: Margin.MarginAccountNewOcoTradeError,
      },
      options,
    );
  }

  marginAccountNewOtoTrade(
    request: Margin.MarginAccountNewOtoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderOtoResponse, Margin.MarginAccountNewOtoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/margin/order/oto"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "workingType", value: request.workingType, schema: workingTypeSchema },
          { name: "workingSide", value: request.workingSide, schema: workingSideSchema },
          { name: "workingPrice", value: request.workingPrice, schema: s.number() },
          { name: "workingQuantity", value: request.workingQuantity, schema: s.number() },
          { name: "workingIcebergQty", value: request.workingIcebergQty, schema: s.number() },
          { name: "pendingType", value: request.pendingType, schema: pendingTypeSchema },
          { name: "pendingSide", value: request.pendingSide, schema: pendingSideSchema },
          { name: "pendingQuantity", value: request.pendingQuantity, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
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
          { name: "pendingPrice", value: request.pendingPrice, schema: s.optional(s.number()) },
          { name: "pendingStopPrice", value: request.pendingStopPrice, schema: s.optional(s.number()) },
          {
            name: "pendingTrailingDelta",
            value: request.pendingTrailingDelta,
            schema: s.optional(s.number()),
          },
          { name: "pendingIcebergQty", value: request.pendingIcebergQty, schema: s.optional(s.number()) },
          {
            name: "pendingTimeInForce",
            value: request.pendingTimeInForce,
            schema: s.optional(s.lazy(() => pendingTimeInForceSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderOtoResponseSchema },
        errorFactory: Margin.MarginAccountNewOtoTradeError,
      },
      options,
    );
  }

  marginAccountNewOtocoTrade(
    request: Margin.MarginAccountNewOtocoTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderOtocoResponse, Margin.MarginAccountNewOtocoTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/margin/order/otoco"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "workingType", value: request.workingType, schema: workingTypeSchema },
          { name: "workingSide", value: request.workingSide, schema: workingSideSchema },
          { name: "workingPrice", value: request.workingPrice, schema: s.number() },
          { name: "workingQuantity", value: request.workingQuantity, schema: s.number() },
          { name: "workingIcebergQty", value: request.workingIcebergQty, schema: s.number() },
          { name: "pendingSide", value: request.pendingSide, schema: pendingSideSchema },
          { name: "pendingQuantity", value: request.pendingQuantity, schema: s.number() },
          { name: "pendingAboveType", value: request.pendingAboveType, schema: pendingAboveTypeSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
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
          { name: "pendingAbovePrice", value: request.pendingAbovePrice, schema: s.optional(s.number()) },
          {
            name: "pendingAboveStopPrice",
            value: request.pendingAboveStopPrice,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingAboveTrailingDelta",
            value: request.pendingAboveTrailingDelta,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingAboveIcebergQty",
            value: request.pendingAboveIcebergQty,
            schema: s.optional(s.number()),
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
          { name: "pendingBelowPrice", value: request.pendingBelowPrice, schema: s.optional(s.number()) },
          {
            name: "pendingBelowStopPrice",
            value: request.pendingBelowStopPrice,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingBelowTrailingDelta",
            value: request.pendingBelowTrailingDelta,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingBelowIcebergQty",
            value: request.pendingBelowIcebergQty,
            schema: s.optional(s.number()),
          },
          {
            name: "pendingBelowTimeInForce",
            value: request.pendingBelowTimeInForce,
            schema: s.optional(s.lazy(() => pendingBelowTimeInForceSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderOtocoResponseSchema },
        errorFactory: Margin.MarginAccountNewOtocoTradeError,
      },
      options,
    );
  }

  marginAccountNewOrderTrade(
    request: Margin.MarginAccountNewOrderTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderResponse, Margin.MarginAccountNewOrderTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/margin/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "type", value: request.type, schema: type1Schema },
          { name: "quantity", value: request.quantity, schema: s.number() },
          { name: "autoRepayAtCancel", value: request.autoRepayAtCancel, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "quoteOrderQty", value: request.quoteOrderQty, schema: s.optional(s.number()) },
          { name: "price", value: request.price, schema: s.optional(s.number()) },
          { name: "stopPrice", value: request.stopPrice, schema: s.optional(s.number()) },
          { name: "newClientOrderId", value: request.newClientOrderId, schema: s.optional(s.string()) },
          { name: "icebergQty", value: request.icebergQty, schema: s.optional(s.number()) },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderResponseSchema },
        errorFactory: Margin.MarginAccountNewOrderTradeError,
      },
      options,
    );
  }

  marginInterestRateHistoryUserData(
    request: Margin.MarginInterestRateHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginInterestRateHistoryResponse[], Margin.MarginInterestRateHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/interestRateHistory"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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

  marginAccountBorrowRepayMargin(
    request: Margin.MarginAccountBorrowRepayMarginRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginBorrowRepayResponse, Margin.MarginAccountBorrowRepayMarginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/margin/borrow-repay"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "isIsolated", value: request.isIsolated, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "type", value: request.type, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginBorrowRepayResponseSchema },
        errorFactory: Margin.MarginAccountBorrowRepayMarginError,
      },
      options,
    );
  }

  marginManualLiquidationMargin(
    request: Margin.MarginManualLiquidationMarginRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginManualLiquidationResponse[], Margin.MarginManualLiquidationMarginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/margin/manual-liquidation"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "type", value: request.type, schema: type4Schema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginManualLiquidationResponseSchema)) },
        errorFactory: Margin.MarginManualLiquidationMarginError,
      },
      options,
    );
  }

  queryCrossMarginAccountDetailsUserData(
    request: Margin.QueryCrossMarginAccountDetailsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAccountResponse, Margin.QueryCrossMarginAccountDetailsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginAccountResponseSchema },
        errorFactory: Margin.QueryCrossMarginAccountDetailsUserDataError,
      },
      options,
    );
  }

  queryCrossMarginFeeDataUserData(
    request: Margin.QueryCrossMarginFeeDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginCrossMarginDataResponse[], Margin.QueryCrossMarginFeeDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/crossMarginData"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.number()) },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginCrossMarginDataResponseSchema)) },
        errorFactory: Margin.QueryCrossMarginFeeDataUserDataError,
      },
      options,
    );
  }

  queryCurrentMarginOrderCountUsageTrade(
    request: Margin.QueryCurrentMarginOrderCountUsageTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginRateLimitOrderResponse[], Margin.QueryCurrentMarginOrderCountUsageTradeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/rateLimit/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "isIsolated", value: request.isIsolated, schema: s.optional(s.string()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginRateLimitOrderResponseSchema)) },
        errorFactory: Margin.QueryCurrentMarginOrderCountUsageTradeError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/margin/isolated/accountLimit"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginIsolatedAccountLimitResponseSchema },
        errorFactory: Margin.QueryEnabledIsolatedMarginAccountLimitUserDataError,
      },
      options,
    );
  }

  queryIsolatedMarginAccountInfoUserData(
    request: Margin.QueryIsolatedMarginAccountInfoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<IsolatedMarginAccountInfo, Margin.QueryIsolatedMarginAccountInfoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/isolated/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: isolatedMarginAccountInfoSchema },
        errorFactory: Margin.QueryIsolatedMarginAccountInfoUserDataError,
      },
      options,
    );
  }

  queryIsolatedMarginFeeDataUserData(
    request: Margin.QueryIsolatedMarginFeeDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedMarginDataResponse[], Margin.QueryIsolatedMarginFeeDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/isolatedMarginData"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "vipLevel", value: request.vipLevel, schema: s.optional(s.number()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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

  queryIsolatedMarginTierDataUserData(
    request: Margin.QueryIsolatedMarginTierDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginIsolatedMarginTierResponse[], Margin.QueryIsolatedMarginTierDataUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/isolatedMarginTier"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tier", value: request.tier, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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

  queryLiabilityCoinLeverageBracketInCrossMarginProModeMarketData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MarginLeverageBracketResponse[],
    Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/leverageBracket"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginLeverageBracketResponseSchema)) },
        errorFactory: Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError,
      },
      options,
    );
  }

  queryMarginAccountSAllOrdersUserData(
    request: Margin.QueryMarginAccountSAllOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOrderDetail[], Margin.QueryMarginAccountSAllOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/allOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => marginOrderDetailSchema)) },
        errorFactory: Margin.QueryMarginAccountSAllOrdersUserDataError,
      },
      options,
    );
  }

  queryMarginAccountSOcoUserData(
    request: Margin.QueryMarginAccountSOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOrderListResponse, Margin.QueryMarginAccountSOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/orderList"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "orderListId", value: request.orderListId, schema: s.optional(s.number()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginOrderListResponseSchema },
        errorFactory: Margin.QueryMarginAccountSOcoUserDataError,
      },
      options,
    );
  }

  queryMarginAccountSOpenOcoUserData(
    request: Margin.QueryMarginAccountSOpenOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginOpenOrderListResponse[], Margin.QueryMarginAccountSOpenOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/openOrderList"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginOpenOrderListResponseSchema)) },
        errorFactory: Margin.QueryMarginAccountSOpenOcoUserDataError,
      },
      options,
    );
  }

  queryMarginAccountSOpenOrdersUserData(
    request: Margin.QueryMarginAccountSOpenOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOrderDetail[], Margin.QueryMarginAccountSOpenOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/openOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => marginOrderDetailSchema)) },
        errorFactory: Margin.QueryMarginAccountSOpenOrdersUserDataError,
      },
      options,
    );
  }

  queryMarginAccountSOrderUserData(
    request: Margin.QueryMarginAccountSOrderUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginOrderDetail, Margin.QueryMarginAccountSOrderUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/order"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "orderId", value: request.orderId, schema: s.optional(s.number()) },
          { name: "origClientOrderId", value: request.origClientOrderId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marginOrderDetailSchema },
        errorFactory: Margin.QueryMarginAccountSOrderUserDataError,
      },
      options,
    );
  }

  queryMarginAccountSTradeListUserData(
    request: Margin.QueryMarginAccountSTradeListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<MarginTrade[], Margin.QueryMarginAccountSTradeListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/myTrades"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => marginTradeSchema)) },
        errorFactory: Margin.QueryMarginAccountSTradeListUserDataError,
      },
      options,
    );
  }

  queryMarginAccountSAllOcoUserData(
    request: Margin.QueryMarginAccountSAllOcoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAllOrderListResponse[], Margin.QueryMarginAccountSAllOcoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/allOrderList"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "isIsolated",
            value: request.isIsolated,
            schema: s.optional(s.lazy(() => isIsolatedSchema)),
          },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1MarginAllOrderListResponseSchema)) },
        errorFactory: Margin.QueryMarginAccountSAllOcoUserDataError,
      },
      options,
    );
  }

  queryMarginAvailableInventoryUserData(
    request: Margin.QueryMarginAvailableInventoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginAvailableInventoryResponse, Margin.QueryMarginAvailableInventoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/available-inventory"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "type", value: request.type, schema: type4Schema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginAvailableInventoryResponseSchema },
        errorFactory: Margin.QueryMarginAvailableInventoryUserDataError,
      },
      options,
    );
  }

  queryMarginPriceIndexMarketData(
    request: Margin.QueryMarginPriceIndexMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginPriceIndexResponse, Margin.QueryMarginPriceIndexMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/priceIndex"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginPriceIndexResponseSchema },
        errorFactory: Margin.QueryMarginPriceIndexMarketDataError,
      },
      options,
    );
  }

  queryMaxBorrowUserData(
    request: Margin.QueryMaxBorrowUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginMaxBorrowableResponse, Margin.QueryMaxBorrowUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/maxBorrowable"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginMaxBorrowableResponseSchema },
        errorFactory: Margin.QueryMaxBorrowUserDataError,
      },
      options,
    );
  }

  queryMaxTransferOutAmountUserData(
    request: Margin.QueryMaxTransferOutAmountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MarginMaxTransferableResponse, Margin.QueryMaxTransferOutAmountUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/margin/maxTransferable"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginMaxTransferableResponseSchema },
        errorFactory: Margin.QueryMaxTransferOutAmountUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/margin/borrow-repay"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "type", value: request.type, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "isolatedSymbol", value: request.isolatedSymbol, schema: s.optional(s.string()) },
          { name: "txId", value: request.txId, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MarginBorrowRepayResponse1Schema },
        errorFactory: Margin.QueryBorrowRepayRecordsInMarginAccountUserDataError,
      },
      options,
    );
  }

  toggleBnbBurnOnSpotTradeAndMarginInterestUserData(
    request: Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<BnbBurnStatus, Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/bnbBurn"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    maxLeverage: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class AdjustCrossMarginMaxLeverageUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AdjustCrossMarginMaxLeverageUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class CrossMarginCollateralRatioMarketDataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<CrossMarginCollateralRatioMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DisableIsolatedMarginAccountTradeRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class DisableIsolatedMarginAccountTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DisableIsolatedMarginAccountTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableIsolatedMarginAccountTradeRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class EnableIsolatedMarginAccountTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EnableIsolatedMarginAccountTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllCrossMarginPairsMarketDataRequest = {
    symbol: string;
  };

  export class GetAllCrossMarginPairsMarketDataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetAllCrossMarginPairsMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllIsolatedMarginSymbolUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetAllIsolatedMarginSymbolUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAllIsolatedMarginSymbolUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllMarginAssetsMarketDataRequest = {
    asset: string;
  };

  export class GetAllMarginAssetsMarketDataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetAllMarginAssetsMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBnbBurnStatusUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetBnbBurnStatusUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetBnbBurnStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCrossMarginTransferHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    type?: Type2;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    isolatedSymbol?: string;
    recvWindow?: number;
  };

  export class GetCrossMarginTransferHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetCrossMarginTransferHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetForceLiquidationRecordUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    isolatedSymbol?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetForceLiquidationRecordUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetForceLiquidationRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInterestHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    isolatedSymbol?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    archived?: string;
    recvWindow?: number;
  };

  export class GetInterestHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetInterestHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSmallLiabilityExchangeCoinListUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetSmallLiabilityExchangeCoinListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetSmallLiabilityExchangeCoinListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSmallLiabilityExchangeHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    current?: number;
    size?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
  };

  export class GetSmallLiabilityExchangeHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetSmallLiabilityExchangeHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSummaryOfMarginAccountUserDataRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetSummaryOfMarginAccountUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetSummaryOfMarginAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAFutureHourlyInterestRateUserDataRequest = {
    timestamp: number;
    signature: string;
    assets?: string;
    isIsolated?: IsIsolated;
    recvWindow?: number;
  };

  export class GetAFutureHourlyInterestRateUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAFutureHourlyInterestRateUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCrossOrIsolatedMarginCapitalFlowUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    symbol?: string;
    type?: Type3;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class GetCrossOrIsolatedMarginCapitalFlowUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetCrossOrIsolatedMarginCapitalFlowUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountCancelOcoTradeRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    orderListId?: number;
    listClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
  };

  export class MarginAccountCancelOcoTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginAccountCancelOcoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountCancelOrderTradeRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    orderId?: number;
    origClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
  };

  export class MarginAccountCancelOrderTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginAccountCancelOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountCancelAllOpenOrdersOnASymbolTradeRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    recvWindow?: number;
  };

  export class MarginAccountCancelAllOpenOrdersOnASymbolTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginAccountCancelAllOpenOrdersOnASymbolTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountNewOcoTradeRequest = {
    symbol: string;
    side: Side;
    quantity: number;
    price: number;
    stopPrice: number;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    listClientOrderId?: string;
    limitClientOrderId?: string;
    limitIcebergQty?: number;
    stopClientOrderId?: string;
    stopLimitPrice?: number;
    stopIcebergQty?: number;
    stopLimitTimeInForce?: StopLimitTimeInForce;
    newOrderRespType?: NewOrderRespType;
    sideEffectType?: SideEffectType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
  };

  export class MarginAccountNewOcoTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginAccountNewOcoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountNewOtoTradeRequest = {
    symbol: string;
    workingType: WorkingType;
    workingSide: WorkingSide;
    workingPrice: number;
    workingQuantity: number;
    workingIcebergQty: number;
    pendingType: PendingType;
    pendingSide: PendingSide;
    pendingQuantity: number;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    listClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    sideEffectType?: SideEffectType1;
    selfTradePreventionMode?: SelfTradePreventionMode;
    autoRepayAtCancel?: boolean;
    workingClientOrderId?: string;
    workingTimeInForce?: WorkingTimeInForce;
    pendingClientOrderId?: string;
    pendingPrice?: number;
    pendingStopPrice?: number;
    pendingTrailingDelta?: number;
    pendingIcebergQty?: number;
    pendingTimeInForce?: PendingTimeInForce;
  };

  export class MarginAccountNewOtoTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginAccountNewOtoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountNewOtocoTradeRequest = {
    symbol: string;
    workingType: WorkingType;
    workingSide: WorkingSide;
    workingPrice: number;
    workingQuantity: number;
    workingIcebergQty: number;
    pendingSide: PendingSide;
    pendingQuantity: number;
    pendingAboveType: PendingAboveType;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    sideEffectType?: SideEffectType1;
    autoRepayAtCancel?: boolean;
    listClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    workingClientOrderId?: string;
    workingTimeInForce?: WorkingTimeInForce;
    pendingAboveClientOrderId?: string;
    pendingAbovePrice?: number;
    pendingAboveStopPrice?: number;
    pendingAboveTrailingDelta?: number;
    pendingAboveIcebergQty?: number;
    pendingAboveTimeInForce?: PendingAboveTimeInForce;
    pendingBelowType?: PendingBelowType;
    pendingBelowClientOrderId?: string;
    pendingBelowPrice?: number;
    pendingBelowStopPrice?: number;
    pendingBelowTrailingDelta?: number;
    pendingBelowIcebergQty?: number;
    pendingBelowTimeInForce?: PendingBelowTimeInForce;
  };

  export class MarginAccountNewOtocoTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginAccountNewOtocoTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountNewOrderTradeRequest = {
    symbol: string;
    side: Side;
    type: Type1;
    quantity: number;
    autoRepayAtCancel: boolean;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    quoteOrderQty?: number;
    price?: number;
    stopPrice?: number;
    newClientOrderId?: string;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    sideEffectType?: SideEffectType;
    timeInForce?: TimeInForce;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
  };

  export class MarginAccountNewOrderTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginAccountNewOrderTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginInterestRateHistoryUserDataRequest = {
    asset: string;
    timestamp: number;
    signature: string;
    vipLevel?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
  };

  export class MarginInterestRateHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginInterestRateHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginAccountBorrowRepayMarginRequest = {
    asset: string;
    isIsolated: string;
    symbol: string;
    amount: number;
    type: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class MarginAccountBorrowRepayMarginError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<MarginAccountBorrowRepayMarginError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginManualLiquidationMarginRequest = {
    type: Type4;
    timestamp: number;
    signature: string;
    symbol?: string;
  };

  export class MarginManualLiquidationMarginError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginManualLiquidationMarginError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCrossMarginAccountDetailsUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryCrossMarginAccountDetailsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryCrossMarginAccountDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCrossMarginFeeDataUserDataRequest = {
    timestamp: number;
    signature: string;
    vipLevel?: number;
    coin?: string;
    recvWindow?: number;
  };

  export class QueryCrossMarginFeeDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryCrossMarginFeeDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryCurrentMarginOrderCountUsageTradeRequest = {
    timestamp: number;
    signature: string;
    isIsolated?: string;
    symbol?: string;
    recvWindow?: number;
  };

  export class QueryCurrentMarginOrderCountUsageTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryCurrentMarginOrderCountUsageTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryEnabledIsolatedMarginAccountLimitUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryEnabledIsolatedMarginAccountLimitUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryEnabledIsolatedMarginAccountLimitUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIsolatedMarginAccountInfoUserDataRequest = {
    timestamp: number;
    signature: string;
    symbols?: string;
    recvWindow?: number;
  };

  export class QueryIsolatedMarginAccountInfoUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryIsolatedMarginAccountInfoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIsolatedMarginFeeDataUserDataRequest = {
    timestamp: number;
    signature: string;
    vipLevel?: number;
    symbol?: string;
    recvWindow?: number;
  };

  export class QueryIsolatedMarginFeeDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryIsolatedMarginFeeDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIsolatedMarginTierDataUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    tier?: string;
    recvWindow?: number;
  };

  export class QueryIsolatedMarginTierDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryIsolatedMarginTierDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError extends ResponseError<
    Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSAllOrdersUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QueryMarginAccountSAllOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMarginAccountSAllOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSOcoUserDataRequest = {
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    symbol?: string;
    orderListId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
  };

  export class QueryMarginAccountSOcoUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMarginAccountSOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSOpenOcoUserDataRequest = {
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    symbol?: string;
    recvWindow?: number;
  };

  export class QueryMarginAccountSOpenOcoUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMarginAccountSOpenOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSOpenOrdersUserDataRequest = {
    timestamp: number;
    signature: string;
    symbol?: string;
    isIsolated?: IsIsolated;
    recvWindow?: number;
  };

  export class QueryMarginAccountSOpenOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMarginAccountSOpenOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSOrderUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    orderId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
  };

  export class QueryMarginAccountSOrderUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMarginAccountSOrderUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSTradeListUserDataRequest = {
    symbol: string;
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QueryMarginAccountSTradeListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMarginAccountSTradeListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAccountSAllOcoUserDataRequest = {
    timestamp: number;
    signature: string;
    isIsolated?: IsIsolated;
    symbol?: string;
    fromId?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QueryMarginAccountSAllOcoUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMarginAccountSAllOcoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginAvailableInventoryUserDataRequest = {
    type: Type4;
    timestamp: number;
    signature: string;
  };

  export class QueryMarginAvailableInventoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMarginAvailableInventoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMarginPriceIndexMarketDataRequest = {
    symbol: string;
  };

  export class QueryMarginPriceIndexMarketDataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<QueryMarginPriceIndexMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMaxBorrowUserDataRequest = {
    asset: string;
    timestamp: number;
    signature: string;
    isolatedSymbol?: string;
    recvWindow?: number;
  };

  export class QueryMaxBorrowUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMaxBorrowUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryMaxTransferOutAmountUserDataRequest = {
    asset: string;
    timestamp: number;
    signature: string;
    isolatedSymbol?: string;
    recvWindow?: number;
  };

  export class QueryMaxTransferOutAmountUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryMaxTransferOutAmountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryBorrowRepayRecordsInMarginAccountUserDataRequest = {
    asset: string;
    type: string;
    timestamp: number;
    signature: string;
    isolatedSymbol?: string;
    txId?: number;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class QueryBorrowRepayRecordsInMarginAccountUserDataError extends ResponseError<
    Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<QueryBorrowRepayRecordsInMarginAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataRequest = {
    timestamp: number;
    signature: string;
    spotBnbBurn?: SpotBnbBurn;
    interestBnbBurn?: InterestBnbBurn;
    recvWindow?: number;
  };

  export class ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
