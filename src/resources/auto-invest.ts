import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

export class AutoInvest {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  changePlanStatus(
    request: AutoInvest.ChangePlanStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanEditStatusResponse, AutoInvest.ChangePlanStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/lending/auto-invest/plan/edit-status"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "planId", value: request.planId, schema: s.number() },
          { name: "status", value: request.status, schema: status1Schema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanEditStatusResponseSchema },
        errorFactory: AutoInvest.ChangePlanStatusError,
      },
      options,
    );
  }

  getListOfPlans(
    request: AutoInvest.GetListOfPlansRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanListResponse, AutoInvest.GetListOfPlansError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/lending/auto-invest/plan/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "planType", value: request.planType, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanListResponseSchema },
        errorFactory: AutoInvest.GetListOfPlansError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/lending/auto-invest/target-asset/roi/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "targetAsset", value: request.targetAsset, schema: s.string() },
          { name: "hisRoiType", value: request.hisRoiType, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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

  getTargetAssetListUserData(
    request: AutoInvest.GetTargetAssetListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestTargetAssetListResponse, AutoInvest.GetTargetAssetListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/lending/auto-invest/target-asset/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "targetAsset", value: request.targetAsset, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestTargetAssetListResponseSchema },
        errorFactory: AutoInvest.GetTargetAssetListUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/lending/auto-invest/rebalance/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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

  indexLinkedPlanRedemptionTrade(
    request: AutoInvest.IndexLinkedPlanRedemptionTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestRedeemResponse, AutoInvest.IndexLinkedPlanRedemptionTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/lending/auto-invest/redeem"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "indexId", value: request.indexId, schema: s.number() },
          { name: "redemptionPercentage", value: request.redemptionPercentage, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestRedeemResponseSchema },
        errorFactory: AutoInvest.IndexLinkedPlanRedemptionTradeError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/lending/auto-invest/redeem/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "requestId", value: request.requestId, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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

  investmentPlanAdjustment(
    request: AutoInvest.InvestmentPlanAdjustmentRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanEditResponse, AutoInvest.InvestmentPlanAdjustmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/lending/auto-invest/plan/edit"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "planId", value: request.planId, schema: s.number() },
          { name: "subscriptionAmount", value: request.subscriptionAmount, schema: s.number() },
          { name: "subscriptionCycle", value: request.subscriptionCycle, schema: subscriptionCycleSchema },
          { name: "subscriptionStartTime", value: request.subscriptionStartTime, schema: s.number() },
          { name: "sourceAsset", value: request.sourceAsset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "subscriptionStartDay",
            value: request.subscriptionStartDay,
            schema: s.optional(s.number()),
          },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanEditResponseSchema },
        errorFactory: AutoInvest.InvestmentPlanAdjustmentError,
      },
      options,
    );
  }

  investmentPlanCreationUserData(
    request: AutoInvest.InvestmentPlanCreationUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanAddResponse, AutoInvest.InvestmentPlanCreationUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/lending/auto-invest/plan/add"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "sourceType", value: request.sourceType, schema: sourceTypeSchema },
          { name: "planType", value: request.planType, schema: planTypeSchema },
          { name: "subscriptionAmount", value: request.subscriptionAmount, schema: s.number() },
          { name: "subscriptionCycle", value: request.subscriptionCycle, schema: subscriptionCycleSchema },
          { name: "subscriptionStartTime", value: request.subscriptionStartTime, schema: s.number() },
          { name: "sourceAsset", value: request.sourceAsset, schema: s.string() },
          { name: "details", value: request.details, schema: s.array(s.lazy(() => detail1Schema)) },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "IndexId", value: request.indexId, schema: s.optional(s.number()) },
          {
            name: "subscriptionStartDay",
            value: request.subscriptionStartDay,
            schema: s.optional(s.number()),
          },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanAddResponseSchema },
        errorFactory: AutoInvest.InvestmentPlanCreationUserDataError,
      },
      options,
    );
  }

  oneTimeTransactionTrade(
    request: AutoInvest.OneTimeTransactionTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestOneOffResponse, AutoInvest.OneTimeTransactionTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/lending/auto-invest/one-off"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "sourceType", value: request.sourceType, schema: s.string() },
          { name: "subscriptionAmount", value: request.subscriptionAmount, schema: s.number() },
          { name: "sourceAsset", value: request.sourceAsset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          {
            name: "flexibleAllowedToUse",
            value: request.flexibleAllowedToUse,
            schema: s.optional(s.boolean()),
          },
          { name: "planId", value: request.planId, schema: s.optional(s.number()) },
          { name: "indexId", value: request.indexId, schema: s.optional(s.number()) },
          {
            name: "details",
            value: request.details,
            schema: s.optional(s.array(s.lazy(() => detail5Schema))),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestOneOffResponseSchema },
        errorFactory: AutoInvest.OneTimeTransactionTradeError,
      },
      options,
    );
  }

  queryIndexDetailsUserData(
    request: AutoInvest.QueryIndexDetailsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestIndexInfoResponse, AutoInvest.QueryIndexDetailsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/lending/auto-invest/index/info"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "indexId", value: request.indexId, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestIndexInfoResponseSchema },
        errorFactory: AutoInvest.QueryIndexDetailsUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/lending/auto-invest/index/user-summary"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "indexId", value: request.indexId, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestIndexUserSummaryResponseSchema },
        errorFactory: AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/lending/auto-invest/one-off/status"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "transactionId", value: request.transactionId, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestOneOffStatusResponseSchema },
        errorFactory: AutoInvest.QueryOneTimeTransactionStatusUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/lending/auto-invest/all/asset"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestAllAssetResponseSchema },
        errorFactory: AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataError,
      },
      options,
    );
  }

  queryHoldingDetailsOfThePlan(
    request: AutoInvest.QueryHoldingDetailsOfThePlanRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1LendingAutoInvestPlanIdResponse, AutoInvest.QueryHoldingDetailsOfThePlanError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/lending/auto-invest/plan/id"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "planId", value: request.planId, schema: s.optional(s.number()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestPlanIdResponseSchema },
        errorFactory: AutoInvest.QueryHoldingDetailsOfThePlanError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/lending/auto-invest/source-asset/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "usageType", value: request.usageType, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "targetAsset", value: request.targetAsset, schema: s.optional(s.string()) },
          { name: "indexId", value: request.indexId, schema: s.optional(s.number()) },
          {
            name: "flexibleAllowedToUse",
            value: request.flexibleAllowedToUse,
            schema: s.optional(s.boolean()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1LendingAutoInvestSourceAssetListResponseSchema },
        errorFactory: AutoInvest.QuerySourceAssetListUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/lending/auto-invest/history/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "planId", value: request.planId, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "targetAsset", value: request.targetAsset, schema: s.optional(s.number()) },
          { name: "planType", value: request.planType, schema: s.optional(s.lazy(() => planType1Schema)) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class ChangePlanStatusError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ChangePlanStatusError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetListOfPlansRequest = {
    planType: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetListOfPlansError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetListOfPlansError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetTargetAssetRoiDataUserDataRequest = {
    targetAsset: string;
    hisRoiType: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetTargetAssetRoiDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetTargetAssetRoiDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetTargetAssetListUserDataRequest = {
    timestamp: number;
    signature: string;
    targetAsset?: string;
    size?: number;
    current?: number;
    recvWindow?: number;
  };

  export class GetTargetAssetListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetTargetAssetListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IndexLinkedPlanRebalanceDetailsUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class IndexLinkedPlanRebalanceDetailsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<IndexLinkedPlanRebalanceDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IndexLinkedPlanRedemptionTradeRequest = {
    indexId: number;
    redemptionPercentage: number;
    timestamp: number;
    signature: string;
    requestId?: string;
    recvWindow?: number;
  };

  export class IndexLinkedPlanRedemptionTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<IndexLinkedPlanRedemptionTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IndexLinkedPlanRedemptionHistoryUserDataRequest = {
    requestId: number;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    asset?: string;
    size?: number;
    recvWindow?: number;
  };

  export class IndexLinkedPlanRedemptionHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
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
    timestamp: number;
    signature: string;
    subscriptionStartDay?: number;
    subscriptionStartWeekday?: SubscriptionStartWeekday;
    flexibleAllowedToUse?: boolean;
    details?: Detail1[];
    recvWindow?: number;
  };

  export class InvestmentPlanAdjustmentError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
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
    timestamp: number;
    signature: string;
    requestId?: string;
    indexId?: number;
    subscriptionStartDay?: number;
    subscriptionStartWeekday?: SubscriptionStartWeekday;
    flexibleAllowedToUse?: boolean;
    recvWindow?: number;
  };

  export class InvestmentPlanCreationUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<InvestmentPlanCreationUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type OneTimeTransactionTradeRequest = {
    sourceType: string;
    subscriptionAmount: number;
    sourceAsset: string;
    timestamp: number;
    signature: string;
    requestId?: string;
    flexibleAllowedToUse?: boolean;
    planId?: number;
    indexId?: number;
    details?: Detail5[];
    recvWindow?: number;
  };

  export class OneTimeTransactionTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<OneTimeTransactionTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIndexDetailsUserDataRequest = {
    indexId: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryIndexDetailsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryIndexDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryIndexLinkedPlanPositionDetailsUserDataRequest = {
    indexId: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryIndexLinkedPlanPositionDetailsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryIndexLinkedPlanPositionDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOneTimeTransactionStatusUserDataRequest = {
    transactionId: number;
    timestamp: number;
    signature: string;
    requestId?: string;
    recvWindow?: number;
  };

  export class QueryOneTimeTransactionStatusUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryOneTimeTransactionStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryAllSourceAssetAndTargetAssetUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryAllSourceAssetAndTargetAssetUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryAllSourceAssetAndTargetAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryHoldingDetailsOfThePlanRequest = {
    timestamp: number;
    signature: string;
    planId?: number;
    requestId?: string;
    recvWindow?: number;
  };

  export class QueryHoldingDetailsOfThePlanError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryHoldingDetailsOfThePlanError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySourceAssetListUserDataRequest = {
    usageType: string;
    timestamp: number;
    signature: string;
    targetAsset?: string;
    indexId?: number;
    flexibleAllowedToUse?: boolean;
    recvWindow?: number;
  };

  export class QuerySourceAssetListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QuerySourceAssetListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubscriptionTransactionHistoryRequest = {
    timestamp: number;
    signature: string;
    planId?: number;
    startTime?: number;
    endTime?: number;
    targetAsset?: number;
    planType?: PlanType1;
    size?: number;
    current?: number;
    recvWindow?: number;
  };

  export class QuerySubscriptionTransactionHistoryError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QuerySubscriptionTransactionHistoryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
