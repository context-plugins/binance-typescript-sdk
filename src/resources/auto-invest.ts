import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { detail1Schema, type Detail1 } from "../models/detail1.js";
import { detail5Schema, type Detail5 } from "../models/detail5.js";
import { errorSchema, type Error } from "../models/error.js";
import { planTypeSchema, type PlanType } from "../models/plan-type.js";
import { planType1Schema, type PlanType1 } from "../models/plan-type1.js";
import {
  sapiV1LendingAutoInvestAllAssetResponseSchema,
  type SapiV1LendingAutoInvestAllAssetResponse,
} from "../models/sapi-v1-lending-auto-invest-all-asset-response.js";
import {
  sapiV1LendingAutoInvestHistoryListResponseSchema,
  type SapiV1LendingAutoInvestHistoryListResponse,
} from "../models/sapi-v1-lending-auto-invest-history-list-response.js";
import {
  sapiV1LendingAutoInvestIndexInfoResponseSchema,
  type SapiV1LendingAutoInvestIndexInfoResponse,
} from "../models/sapi-v1-lending-auto-invest-index-info-response.js";
import {
  sapiV1LendingAutoInvestIndexUserSummaryResponseSchema,
  type SapiV1LendingAutoInvestIndexUserSummaryResponse,
} from "../models/sapi-v1-lending-auto-invest-index-user-summary-response.js";
import {
  sapiV1LendingAutoInvestOneOffResponseSchema,
  type SapiV1LendingAutoInvestOneOffResponse,
} from "../models/sapi-v1-lending-auto-invest-one-off-response.js";
import {
  sapiV1LendingAutoInvestOneOffStatusResponseSchema,
  type SapiV1LendingAutoInvestOneOffStatusResponse,
} from "../models/sapi-v1-lending-auto-invest-one-off-status-response.js";
import {
  sapiV1LendingAutoInvestPlanAddResponseSchema,
  type SapiV1LendingAutoInvestPlanAddResponse,
} from "../models/sapi-v1-lending-auto-invest-plan-add-response.js";
import {
  sapiV1LendingAutoInvestPlanEditResponseSchema,
  type SapiV1LendingAutoInvestPlanEditResponse,
} from "../models/sapi-v1-lending-auto-invest-plan-edit-response.js";
import {
  sapiV1LendingAutoInvestPlanEditStatusResponseSchema,
  type SapiV1LendingAutoInvestPlanEditStatusResponse,
} from "../models/sapi-v1-lending-auto-invest-plan-edit-status-response.js";
import {
  sapiV1LendingAutoInvestPlanIdResponseSchema,
  type SapiV1LendingAutoInvestPlanIdResponse,
} from "../models/sapi-v1-lending-auto-invest-plan-id-response.js";
import {
  sapiV1LendingAutoInvestPlanListResponseSchema,
  type SapiV1LendingAutoInvestPlanListResponse,
} from "../models/sapi-v1-lending-auto-invest-plan-list-response.js";
import {
  sapiV1LendingAutoInvestRebalanceHistoryResponseSchema,
  type SapiV1LendingAutoInvestRebalanceHistoryResponse,
} from "../models/sapi-v1-lending-auto-invest-rebalance-history-response.js";
import {
  sapiV1LendingAutoInvestRedeemHistoryResponseSchema,
  type SapiV1LendingAutoInvestRedeemHistoryResponse,
} from "../models/sapi-v1-lending-auto-invest-redeem-history-response.js";
import {
  sapiV1LendingAutoInvestRedeemResponseSchema,
  type SapiV1LendingAutoInvestRedeemResponse,
} from "../models/sapi-v1-lending-auto-invest-redeem-response.js";
import {
  sapiV1LendingAutoInvestSourceAssetListResponseSchema,
  type SapiV1LendingAutoInvestSourceAssetListResponse,
} from "../models/sapi-v1-lending-auto-invest-source-asset-list-response.js";
import {
  sapiV1LendingAutoInvestTargetAssetListResponseSchema,
  type SapiV1LendingAutoInvestTargetAssetListResponse,
} from "../models/sapi-v1-lending-auto-invest-target-asset-list-response.js";
import {
  sapiV1LendingAutoInvestTargetAssetRoiListResponseSchema,
  type SapiV1LendingAutoInvestTargetAssetRoiListResponse,
} from "../models/sapi-v1-lending-auto-invest-target-asset-roi-list-response.js";
import { sourceTypeSchema, type SourceType } from "../models/source-type.js";
import { status1Schema, type Status1 } from "../models/status1.js";
import { subscriptionCycleSchema, type SubscriptionCycle } from "../models/subscription-cycle.js";
import {
  subscriptionStartWeekdaySchema,
  type SubscriptionStartWeekday,
} from "../models/subscription-start-weekday.js";
import type { Servers } from "../servers.js";

/**
 * Auto-Invest Endpoints
 */
export class AutoInvest {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Change Plan Status
   *
   * @remarks
   * Change Plan Status
   *
   * Weight(IP): 1
   *
   * @returns Plan result
   *
   * @throws {@link AutoInvest.ChangePlanStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changePlanStatus(
    request: AutoInvest.ChangePlanStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanEditStatusResponse, AutoInvest.ChangePlanStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/plan/edit-status"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "planId", value: request.planId, schema: s.int() },
          { name: "status", value: request.status, schema: status1Schema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanEditStatusResponseSchema },
        errorFactory: AutoInvest.ChangePlanStatusError,
      },
      options,
    );
  }

  /**
   * Get list of plans
   *
   * @remarks
   * Query plan lists
   *
   * Weight(IP): 1
   *
   * @returns Plan result
   *
   * @throws {@link AutoInvest.GetListOfPlansError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListOfPlans(
    request: AutoInvest.GetListOfPlansRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanListResponse, AutoInvest.GetListOfPlansError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/plan/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "planType", value: request.planType, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanListResponseSchema },
        errorFactory: AutoInvest.GetListOfPlansError,
      },
      options,
    );
  }

  /**
   * Get target asset ROI data (USER_DATA)
   *
   * @remarks
   * ROI return list for target asset
   *
   * Weight(IP): 1
   *
   * @returns Target asset list
   *
   * @throws {@link AutoInvest.GetTargetAssetRoiDataUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTargetAssetRoiDataUserData(
    request: AutoInvest.GetTargetAssetRoiDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingAutoInvestTargetAssetRoiListResponse[],
    AutoInvest.GetTargetAssetRoiDataUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/target-asset/roi/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "targetAsset", value: request.targetAsset, schema: s.string() },
          { name: "hisRoiType", value: request.hisRoiType, schema: s.string() },
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
          schema: s.array(s.lazy(() => sapiV1LendingAutoInvestTargetAssetRoiListResponseSchema)),
        },
        errorFactory: AutoInvest.GetTargetAssetRoiDataUserDataError,
      },
      options,
    );
  }

  /**
   * Get target asset list (USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Target asset list
   *
   * @throws {@link AutoInvest.GetTargetAssetListUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTargetAssetListUserData(
    request: AutoInvest.GetTargetAssetListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestTargetAssetListResponse, AutoInvest.GetTargetAssetListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/target-asset/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "targetAsset", value: request.targetAsset, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestTargetAssetListResponseSchema },
        errorFactory: AutoInvest.GetTargetAssetListUserDataError,
      },
      options,
    );
  }

  /**
   * Index Linked Plan Rebalance Details (USER_DATA)
   *
   * @remarks
   * Get the history of Index Linked Plan Redemption transactions
   *
   * Max 30 day difference between startTime and endTime If no startTime and endTime, default to
   * show past 30 day records
   *
   * Weight(IP): 1
   *
   * @returns Rebalance Details
   *
   * @throws {@link AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  indexLinkedPlanRebalanceDetailsUserData(
    request: AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingAutoInvestRebalanceHistoryResponse[],
    AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/rebalance/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
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
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1LendingAutoInvestRebalanceHistoryResponseSchema)),
        },
        errorFactory: AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataError,
      },
      options,
    );
  }

  /**
   * Index Linked Plan Redemption (TRADE)
   *
   * @remarks
   * To redeem index-Linked plan holdings
   *
   * Weight(IP): 1
   *
   * @returns Redemption result
   *
   * @throws {@link AutoInvest.IndexLinkedPlanRedemptionTradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  indexLinkedPlanRedemptionTrade(
    request: AutoInvest.IndexLinkedPlanRedemptionTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestRedeemResponse, AutoInvest.IndexLinkedPlanRedemptionTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/redeem"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "indexId", value: request.indexId, schema: s.int() },
          { name: "redemptionPercentage", value: request.redemptionPercentage, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestRedeemResponseSchema },
        errorFactory: AutoInvest.IndexLinkedPlanRedemptionTradeError,
      },
      options,
    );
  }

  /**
   * Index Linked Plan Redemption History (USER_DATA)
   *
   * @remarks
   * Get the history of Index Linked Plan Redemption transactions
   *
   * Max 30 day difference between startTime and endTime If no startTime and endTime, default to
   * show past 30 day records
   *
   * Weight(IP): 1
   *
   * @returns Redemption history
   *
   * @throws {@link AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  indexLinkedPlanRedemptionHistoryUserData(
    request: AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingAutoInvestRedeemHistoryResponse[],
    AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/redeem/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "requestId", value: request.requestId, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1LendingAutoInvestRedeemHistoryResponseSchema)),
        },
        errorFactory: AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Investment plan adjustment
   *
   * @remarks
   * Query Source Asset to be used for investment
   *
   * Weight(IP): 1
   *
   * @returns Plan result
   *
   * @throws {@link AutoInvest.InvestmentPlanAdjustmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  investmentPlanAdjustment(
    request: AutoInvest.InvestmentPlanAdjustmentRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanEditResponse, AutoInvest.InvestmentPlanAdjustmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/plan/edit"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "planId", value: request.planId, schema: s.int() },
          { name: "subscriptionAmount", value: request.subscriptionAmount, schema: s.float64() },
          { name: "subscriptionCycle", value: request.subscriptionCycle, schema: subscriptionCycleSchema },
          { name: "subscriptionStartTime", value: request.subscriptionStartTime, schema: s.int() },
          { name: "sourceAsset", value: request.sourceAsset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "subscriptionStartDay", value: request.subscriptionStartDay, schema: s.optional(s.int()) },
          {
            name: "subscriptionStartWeekday",
            value: request.subscriptionStartWeekday,
            schema: s.optional(s.lazy(() => subscriptionStartWeekdaySchema)),
          },
          {
            name: "flexibleAllowedToUse",
            value: request.flexibleAllowedToUse,
            schema: s.optional(s.boolean()),
          },
          {
            name: "details",
            value: request.details,
            schema: s.optional(s.array(s.lazy(() => detail1Schema))),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanEditResponseSchema },
        errorFactory: AutoInvest.InvestmentPlanAdjustmentError,
      },
      options,
    );
  }

  /**
   * Investment plan creation (USER_DATA)
   *
   * @remarks
   * Post an investment plan creation
   *
   * Weight(IP): 1
   *
   * @returns Plan result
   *
   * @throws {@link AutoInvest.InvestmentPlanCreationUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  investmentPlanCreationUserData(
    request: AutoInvest.InvestmentPlanCreationUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanAddResponse, AutoInvest.InvestmentPlanCreationUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/plan/add"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "sourceType", value: request.sourceType, schema: sourceTypeSchema },
          { name: "planType", value: request.planType, schema: planTypeSchema },
          { name: "subscriptionAmount", value: request.subscriptionAmount, schema: s.float64() },
          { name: "subscriptionCycle", value: request.subscriptionCycle, schema: subscriptionCycleSchema },
          { name: "subscriptionStartTime", value: request.subscriptionStartTime, schema: s.int() },
          { name: "sourceAsset", value: request.sourceAsset, schema: s.string() },
          { name: "details", value: request.details, schema: s.array(s.lazy(() => detail1Schema)) },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "IndexId", value: request.indexId, schema: s.optional(s.int()) },
          { name: "subscriptionStartDay", value: request.subscriptionStartDay, schema: s.optional(s.int()) },
          {
            name: "subscriptionStartWeekday",
            value: request.subscriptionStartWeekday,
            schema: s.optional(s.lazy(() => subscriptionStartWeekdaySchema)),
          },
          {
            name: "flexibleAllowedToUse",
            value: request.flexibleAllowedToUse,
            schema: s.optional(s.boolean()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanAddResponseSchema },
        errorFactory: AutoInvest.InvestmentPlanCreationUserDataError,
      },
      options,
    );
  }

  /**
   * One Time Transaction(TRADE)
   *
   * @remarks
   * One time transaction
   *
   * Weight(IP): 1
   *
   * @returns transaction result
   *
   * @throws {@link AutoInvest.OneTimeTransactionTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oneTimeTransactionTrade(
    request: AutoInvest.OneTimeTransactionTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestOneOffResponse, AutoInvest.OneTimeTransactionTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/one-off"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "sourceType", value: request.sourceType, schema: s.string() },
          { name: "subscriptionAmount", value: request.subscriptionAmount, schema: s.float64() },
          { name: "sourceAsset", value: request.sourceAsset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          {
            name: "flexibleAllowedToUse",
            value: request.flexibleAllowedToUse,
            schema: s.optional(s.boolean()),
          },
          { name: "planId", value: request.planId, schema: s.optional(s.int()) },
          { name: "indexId", value: request.indexId, schema: s.optional(s.int()) },
          {
            name: "details",
            value: request.details,
            schema: s.optional(s.array(s.lazy(() => detail5Schema))),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestOneOffResponseSchema },
        errorFactory: AutoInvest.OneTimeTransactionTradeError,
      },
      options,
    );
  }

  /**
   * Query Index Details(USER_DATA)
   *
   * @remarks
   * Query index details
   *
   * Weight(IP): 1
   *
   * @returns Index result
   *
   * @throws {@link AutoInvest.QueryIndexDetailsUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryIndexDetailsUserData(
    request: AutoInvest.QueryIndexDetailsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestIndexInfoResponse, AutoInvest.QueryIndexDetailsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/index/info"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "indexId", value: request.indexId, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestIndexInfoResponseSchema },
        errorFactory: AutoInvest.QueryIndexDetailsUserDataError,
      },
      options,
    );
  }

  /**
   * Query Index Linked Plan Position Details(USER_DATA)
   *
   * @remarks
   * Details on users Index-Linked plan position details
   *
   * Weight(IP): 1
   *
   * @returns Position Details
   *
   * @throws {@link AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryIndexLinkedPlanPositionDetailsUserData(
    request: AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingAutoInvestIndexUserSummaryResponse,
    AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/index/user-summary"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "indexId", value: request.indexId, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestIndexUserSummaryResponseSchema },
        errorFactory: AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataError,
      },
      options,
    );
  }

  /**
   * Query One-Time Transaction Status (USER_DATA)
   *
   * @remarks
   * Transaction status for one-time transaction
   *
   * Weight(IP): 1
   *
   * @returns transaction result
   *
   * @throws {@link AutoInvest.QueryOneTimeTransactionStatusUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryOneTimeTransactionStatusUserData(
    request: AutoInvest.QueryOneTimeTransactionStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingAutoInvestOneOffStatusResponse,
    AutoInvest.QueryOneTimeTransactionStatusUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/one-off/status"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "transactionId", value: request.transactionId, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestOneOffStatusResponseSchema },
        errorFactory: AutoInvest.QueryOneTimeTransactionStatusUserDataError,
      },
      options,
    );
  }

  /**
   * Query all source asset and target asset (USER_DATA)
   *
   * @remarks
   * Query all source assets and target assets
   *
   * Weight(IP): 1
   *
   * @returns Target asset
   *
   * @throws {@link AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryAllSourceAssetAndTargetAssetUserData(
    request: AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingAutoInvestAllAssetResponse,
    AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/all/asset"),
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
        success: { kind: "json", schema: sapiV1LendingAutoInvestAllAssetResponseSchema },
        errorFactory: AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataError,
      },
      options,
    );
  }

  /**
   * Query holding details of the plan
   *
   * @remarks
   * Query holding details of the plan
   *
   * Weight(IP): 1
   *
   * @returns Plan result
   *
   * @throws {@link AutoInvest.QueryHoldingDetailsOfThePlanError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryHoldingDetailsOfThePlan(
    request: AutoInvest.QueryHoldingDetailsOfThePlanRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanIdResponse, AutoInvest.QueryHoldingDetailsOfThePlanError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/plan/id"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "planId", value: request.planId, schema: s.optional(s.int()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanIdResponseSchema },
        errorFactory: AutoInvest.QueryHoldingDetailsOfThePlanError,
      },
      options,
    );
  }

  /**
   * Query source asset list (USER_DATA)
   *
   * @remarks
   * Query Source Asset to be used for investment
   *
   * Weight(IP): 1
   *
   * @returns Asset list
   *
   * @throws {@link AutoInvest.QuerySourceAssetListUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  querySourceAssetListUserData(
    request: AutoInvest.QuerySourceAssetListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingAutoInvestSourceAssetListResponse,
    AutoInvest.QuerySourceAssetListUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/source-asset/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "usageType", value: request.usageType, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "targetAsset", value: request.targetAsset, schema: s.optional(s.string()) },
          { name: "indexId", value: request.indexId, schema: s.optional(s.int()) },
          {
            name: "flexibleAllowedToUse",
            value: request.flexibleAllowedToUse,
            schema: s.optional(s.boolean()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestSourceAssetListResponseSchema },
        errorFactory: AutoInvest.QuerySourceAssetListUserDataError,
      },
      options,
    );
  }

  /**
   * Query subscription transaction history
   *
   * @remarks
   * Query subscription transaction history of a plan
   *
   * Weight(IP): 1
   *
   * @returns Plan result
   *
   * @throws {@link AutoInvest.QuerySubscriptionTransactionHistoryError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  querySubscriptionTransactionHistory(
    request: AutoInvest.QuerySubscriptionTransactionHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1LendingAutoInvestHistoryListResponse[],
    AutoInvest.QuerySubscriptionTransactionHistoryError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/lending/auto-invest/history/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "planId", value: request.planId, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "targetAsset", value: request.targetAsset, schema: s.optional(s.int()) },
          { name: "planType", value: request.planType, schema: s.optional(s.lazy(() => planType1Schema)) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1LendingAutoInvestHistoryListResponseSchema)),
        },
        errorFactory: AutoInvest.QuerySubscriptionTransactionHistoryError,
      },
      options,
    );
  }
}

export namespace AutoInvest {
  export type ChangePlanStatusRequest = {
    planId: number;
    status: Status1;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class ChangePlanStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ChangePlanStatusError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetListOfPlansRequest = {
    planType: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetListOfPlansError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetListOfPlansError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetTargetAssetRoiDataUserDataRequest = {
    targetAsset: string;
    hisRoiType: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetTargetAssetRoiDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetTargetAssetRoiDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetTargetAssetListUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    targetAsset?: string;
    /** Default:10 Max:100 */
    size?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetTargetAssetListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetTargetAssetListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IndexLinkedPlanRebalanceDetailsUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
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

  export class IndexLinkedPlanRebalanceDetailsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<IndexLinkedPlanRebalanceDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IndexLinkedPlanRedemptionTradeRequest = {
    /** PORTFOLIO plan's Id */
    indexId: number;
    /** user redeem percentage,10/20/100. */
    redemptionPercentage: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** sourceType + unique, transactionId and requestId cannot be empty at the same time */
    requestId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class IndexLinkedPlanRedemptionTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<IndexLinkedPlanRedemptionTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IndexLinkedPlanRedemptionHistoryUserDataRequest = {
    requestId: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    asset?: string;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class IndexLinkedPlanRedemptionHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<IndexLinkedPlanRedemptionHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type InvestmentPlanAdjustmentRequest = {
    planId: number;
    subscriptionAmount: number;
    subscriptionCycle: SubscriptionCycle;
    subscriptionStartTime: number;
    sourceAsset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    subscriptionStartDay?: number;
    subscriptionStartWeekday?: SubscriptionStartWeekday;
    flexibleAllowedToUse?: boolean;
    details?: Detail1[];
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class InvestmentPlanAdjustmentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<InvestmentPlanAdjustmentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type InvestmentPlanCreationUserDataRequest = {
    sourceType: SourceType;
    planType: PlanType;
    subscriptionAmount: number;
    subscriptionCycle: SubscriptionCycle;
    subscriptionStartTime: number;
    sourceAsset: string;
    details: Detail1[];
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    requestId?: string;
    indexId?: number;
    subscriptionStartDay?: number;
    subscriptionStartWeekday?: SubscriptionStartWeekday;
    flexibleAllowedToUse?: boolean;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class InvestmentPlanCreationUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<InvestmentPlanCreationUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type OneTimeTransactionTradeRequest = {
    sourceType: string;
    subscriptionAmount: number;
    sourceAsset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    requestId?: string;
    flexibleAllowedToUse?: boolean;
    planId?: number;
    indexId?: number;
    details?: Detail5[];
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class OneTimeTransactionTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<OneTimeTransactionTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIndexDetailsUserDataRequest = {
    indexId: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryIndexDetailsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryIndexDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIndexLinkedPlanPositionDetailsUserDataRequest = {
    indexId: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryIndexLinkedPlanPositionDetailsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryIndexLinkedPlanPositionDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOneTimeTransactionStatusUserDataRequest = {
    transactionId: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    requestId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryOneTimeTransactionStatusUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryOneTimeTransactionStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryAllSourceAssetAndTargetAssetUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryAllSourceAssetAndTargetAssetUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryAllSourceAssetAndTargetAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryHoldingDetailsOfThePlanRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    planId?: number;
    requestId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryHoldingDetailsOfThePlanError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryHoldingDetailsOfThePlanError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySourceAssetListUserDataRequest = {
    usageType: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    targetAsset?: string;
    indexId?: number;
    flexibleAllowedToUse?: boolean;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QuerySourceAssetListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QuerySourceAssetListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubscriptionTransactionHistoryRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    planId?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    targetAsset?: number;
    planType?: PlanType1;
    /** Default:10 Max:100 */
    size?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QuerySubscriptionTransactionHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QuerySubscriptionTransactionHistoryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
