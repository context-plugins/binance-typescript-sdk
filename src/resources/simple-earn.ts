import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { redeemToSchema, type RedeemTo } from "../models/redeem-to.js";
import {
  sapiV1SimpleEarnAccountResponseSchema,
  type SapiV1SimpleEarnAccountResponse,
} from "../models/sapi-v1-simple-earn-account-response.js";
import {
  sapiV1SimpleEarnFlexibleHistoryCollateralRecordResponseSchema,
  type SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse,
} from "../models/sapi-v1-simple-earn-flexible-history-collateral-record-response.js";
import {
  sapiV1SimpleEarnFlexibleHistoryRateHistoryResponseSchema,
  type SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse,
} from "../models/sapi-v1-simple-earn-flexible-history-rate-history-response.js";
import {
  sapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponseSchema,
  type SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse,
} from "../models/sapi-v1-simple-earn-flexible-history-redemption-record-response.js";
import {
  sapiV1SimpleEarnFlexibleHistoryRewardsRecordResponseSchema,
  type SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse,
} from "../models/sapi-v1-simple-earn-flexible-history-rewards-record-response.js";
import {
  sapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponseSchema,
  type SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse,
} from "../models/sapi-v1-simple-earn-flexible-history-subscription-record-response.js";
import {
  sapiV1SimpleEarnFlexibleListResponseSchema,
  type SapiV1SimpleEarnFlexibleListResponse,
} from "../models/sapi-v1-simple-earn-flexible-list-response.js";
import {
  sapiV1SimpleEarnFlexiblePersonalLeftQuotaResponseSchema,
  type SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse,
} from "../models/sapi-v1-simple-earn-flexible-personal-left-quota-response.js";
import {
  sapiV1SimpleEarnFlexiblePositionResponseSchema,
  type SapiV1SimpleEarnFlexiblePositionResponse,
} from "../models/sapi-v1-simple-earn-flexible-position-response.js";
import {
  sapiV1SimpleEarnFlexibleRedeemResponseSchema,
  type SapiV1SimpleEarnFlexibleRedeemResponse,
} from "../models/sapi-v1-simple-earn-flexible-redeem-response.js";
import {
  sapiV1SimpleEarnFlexibleSetAutoSubscribeResponseSchema,
  type SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse,
} from "../models/sapi-v1-simple-earn-flexible-set-auto-subscribe-response.js";
import {
  sapiV1SimpleEarnFlexibleSubscribeResponseSchema,
  type SapiV1SimpleEarnFlexibleSubscribeResponse,
} from "../models/sapi-v1-simple-earn-flexible-subscribe-response.js";
import {
  sapiV1SimpleEarnFlexibleSubscriptionPreviewResponseSchema,
  type SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse,
} from "../models/sapi-v1-simple-earn-flexible-subscription-preview-response.js";
import {
  sapiV1SimpleEarnLockedHistoryRedemptionRecordResponseSchema,
  type SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse,
} from "../models/sapi-v1-simple-earn-locked-history-redemption-record-response.js";
import {
  sapiV1SimpleEarnLockedHistoryRewardsRecordResponseSchema,
  type SapiV1SimpleEarnLockedHistoryRewardsRecordResponse,
} from "../models/sapi-v1-simple-earn-locked-history-rewards-record-response.js";
import {
  sapiV1SimpleEarnLockedHistorySubscriptionRecordResponseSchema,
  type SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse,
} from "../models/sapi-v1-simple-earn-locked-history-subscription-record-response.js";
import {
  sapiV1SimpleEarnLockedListResponseSchema,
  type SapiV1SimpleEarnLockedListResponse,
} from "../models/sapi-v1-simple-earn-locked-list-response.js";
import {
  sapiV1SimpleEarnLockedPersonalLeftQuotaResponseSchema,
  type SapiV1SimpleEarnLockedPersonalLeftQuotaResponse,
} from "../models/sapi-v1-simple-earn-locked-personal-left-quota-response.js";
import {
  sapiV1SimpleEarnLockedPositionResponseSchema,
  type SapiV1SimpleEarnLockedPositionResponse,
} from "../models/sapi-v1-simple-earn-locked-position-response.js";
import {
  sapiV1SimpleEarnLockedRedeemResponseSchema,
  type SapiV1SimpleEarnLockedRedeemResponse,
} from "../models/sapi-v1-simple-earn-locked-redeem-response.js";
import {
  sapiV1SimpleEarnLockedSetAutoSubscribeResponseSchema,
  type SapiV1SimpleEarnLockedSetAutoSubscribeResponse,
} from "../models/sapi-v1-simple-earn-locked-set-auto-subscribe-response.js";
import {
  sapiV1SimpleEarnLockedSetRedeemOptionResponseSchema,
  type SapiV1SimpleEarnLockedSetRedeemOptionResponse,
} from "../models/sapi-v1-simple-earn-locked-set-redeem-option-response.js";
import {
  sapiV1SimpleEarnLockedSubscribeResponseSchema,
  type SapiV1SimpleEarnLockedSubscribeResponse,
} from "../models/sapi-v1-simple-earn-locked-subscribe-response.js";
import {
  sapiV1SimpleEarnLockedSubscriptionPreviewResponseSchema,
  type SapiV1SimpleEarnLockedSubscriptionPreviewResponse,
} from "../models/sapi-v1-simple-earn-locked-subscription-preview-response.js";
import type { Servers } from "../servers.js";

export class SimpleEarn {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCollateralRecordUserData(
    request: SimpleEarn.GetCollateralRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse,
    SimpleEarn.GetCollateralRecordUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/history/collateralRecord"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistoryCollateralRecordResponseSchema },
        errorFactory: SimpleEarn.GetCollateralRecordUserDataError,
      },
      options,
    );
  }

  getFlexiblePersonalLeftQuotaUserData(
    request: SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse,
    SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/personalLeftQuota"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexiblePersonalLeftQuotaResponseSchema },
        errorFactory: SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataError,
      },
      options,
    );
  }

  getFlexibleProductPositionUserData(
    request: SimpleEarn.GetFlexibleProductPositionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnFlexiblePositionResponse,
    SimpleEarn.GetFlexibleProductPositionUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/position"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexiblePositionResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleProductPositionUserDataError,
      },
      options,
    );
  }

  getFlexibleRedemptionRecordUserData(
    request: SimpleEarn.GetFlexibleRedemptionRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse,
    SimpleEarn.GetFlexibleRedemptionRecordUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/history/redemptionRecord"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "redeemId", value: request.redeemId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleRedemptionRecordUserDataError,
      },
      options,
    );
  }

  getFlexibleRewardsHistoryUserData(
    request: SimpleEarn.GetFlexibleRewardsHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse,
    SimpleEarn.GetFlexibleRewardsHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/history/rewardsRecord"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "type", value: request.type, schema: s.string() },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistoryRewardsRecordResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleRewardsHistoryUserDataError,
      },
      options,
    );
  }

  getFlexibleSubscriptionPreviewUserData(
    request: SimpleEarn.GetFlexibleSubscriptionPreviewUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse,
    SimpleEarn.GetFlexibleSubscriptionPreviewUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/subscriptionPreview"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleSubscriptionPreviewResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleSubscriptionPreviewUserDataError,
      },
      options,
    );
  }

  getFlexibleSubscriptionRecordUserData(
    request: SimpleEarn.GetFlexibleSubscriptionRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse,
    SimpleEarn.GetFlexibleSubscriptionRecordUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/history/subscriptionRecord"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "purchaseId", value: request.purchaseId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleSubscriptionRecordUserDataError,
      },
      options,
    );
  }

  getLockedPersonalLeftQuotaUserData(
    request: SimpleEarn.GetLockedPersonalLeftQuotaUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnLockedPersonalLeftQuotaResponse,
    SimpleEarn.GetLockedPersonalLeftQuotaUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/personalLeftQuota"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedPersonalLeftQuotaResponseSchema },
        errorFactory: SimpleEarn.GetLockedPersonalLeftQuotaUserDataError,
      },
      options,
    );
  }

  getLockedProductPositionUserData(
    request: SimpleEarn.GetLockedProductPositionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnLockedPositionResponse, SimpleEarn.GetLockedProductPositionUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/position"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "positionId", value: request.positionId, schema: s.optional(s.string()) },
          { name: "projectId", value: request.projectId, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedPositionResponseSchema },
        errorFactory: SimpleEarn.GetLockedProductPositionUserDataError,
      },
      options,
    );
  }

  getLockedRedemptionRecordUserData(
    request: SimpleEarn.GetLockedRedemptionRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse,
    SimpleEarn.GetLockedRedemptionRecordUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/history/redemptionRecord"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "positionId", value: request.positionId, schema: s.optional(s.string()) },
          { name: "redeemId", value: request.redeemId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedHistoryRedemptionRecordResponseSchema },
        errorFactory: SimpleEarn.GetLockedRedemptionRecordUserDataError,
      },
      options,
    );
  }

  getLockedRewardsHistoryUserData(
    request: SimpleEarn.GetLockedRewardsHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnLockedHistoryRewardsRecordResponse,
    SimpleEarn.GetLockedRewardsHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/history/rewardsRecord"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "positionId", value: request.positionId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedHistoryRewardsRecordResponseSchema },
        errorFactory: SimpleEarn.GetLockedRewardsHistoryUserDataError,
      },
      options,
    );
  }

  getLockedSubscriptionPreviewUserData(
    request: SimpleEarn.GetLockedSubscriptionPreviewUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnLockedSubscriptionPreviewResponse[],
    SimpleEarn.GetLockedSubscriptionPreviewUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/subscriptionPreview"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.optional(s.boolean()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1SimpleEarnLockedSubscriptionPreviewResponseSchema)),
        },
        errorFactory: SimpleEarn.GetLockedSubscriptionPreviewUserDataError,
      },
      options,
    );
  }

  getLockedSubscriptionRecordUserData(
    request: SimpleEarn.GetLockedSubscriptionRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse,
    SimpleEarn.GetLockedSubscriptionRecordUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/history/subscriptionRecord"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "purchaseId", value: request.purchaseId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedHistorySubscriptionRecordResponseSchema },
        errorFactory: SimpleEarn.GetLockedSubscriptionRecordUserDataError,
      },
      options,
    );
  }

  getRateHistoryUserData(
    request: SimpleEarn.GetRateHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse, SimpleEarn.GetRateHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/history/rateHistory"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
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
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistoryRateHistoryResponseSchema },
        errorFactory: SimpleEarn.GetRateHistoryUserDataError,
      },
      options,
    );
  }

  getSimpleEarnFlexibleProductListUserData(
    request: SimpleEarn.GetSimpleEarnFlexibleProductListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnFlexibleListResponse,
    SimpleEarn.GetSimpleEarnFlexibleProductListUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleListResponseSchema },
        errorFactory: SimpleEarn.GetSimpleEarnFlexibleProductListUserDataError,
      },
      options,
    );
  }

  getSimpleEarnLockedProductListUserData(
    request: SimpleEarn.GetSimpleEarnLockedProductListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnLockedListResponse, SimpleEarn.GetSimpleEarnLockedProductListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedListResponseSchema },
        errorFactory: SimpleEarn.GetSimpleEarnLockedProductListUserDataError,
      },
      options,
    );
  }

  redeemFlexibleProductTrade(
    request: SimpleEarn.RedeemFlexibleProductTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnFlexibleRedeemResponse, SimpleEarn.RedeemFlexibleProductTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/redeem"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "redeemAll", value: request.redeemAll, schema: s.optional(s.boolean()) },
          { name: "amount", value: request.amount, schema: s.optional(s.number()) },
          { name: "destAccount", value: request.destAccount, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleRedeemResponseSchema },
        errorFactory: SimpleEarn.RedeemFlexibleProductTradeError,
      },
      options,
    );
  }

  redeemLockedProductTrade(
    request: SimpleEarn.RedeemLockedProductTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnLockedRedeemResponse, SimpleEarn.RedeemLockedProductTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/redeem"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "positionId", value: request.positionId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedRedeemResponseSchema },
        errorFactory: SimpleEarn.RedeemLockedProductTradeError,
      },
      options,
    );
  }

  setFlexibleAutoSubscribeUserData(
    request: SimpleEarn.SetFlexibleAutoSubscribeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse,
    SimpleEarn.SetFlexibleAutoSubscribeUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/setAutoSubscribe"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleSetAutoSubscribeResponseSchema },
        errorFactory: SimpleEarn.SetFlexibleAutoSubscribeUserDataError,
      },
      options,
    );
  }

  setLockedAutoSubscribeUserData(
    request: SimpleEarn.SetLockedAutoSubscribeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnLockedSetAutoSubscribeResponse,
    SimpleEarn.SetLockedAutoSubscribeUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/setAutoSubscribe"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "positionId", value: request.positionId, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedSetAutoSubscribeResponseSchema },
        errorFactory: SimpleEarn.SetLockedAutoSubscribeUserDataError,
      },
      options,
    );
  }

  setLockedProductRedeemOptionUserData(
    request: SimpleEarn.SetLockedProductRedeemOptionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SimpleEarnLockedSetRedeemOptionResponse,
    SimpleEarn.SetLockedProductRedeemOptionUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/setRedeemOption"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "positionId", value: request.positionId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "redeemTo", value: request.redeemTo, schema: s.optional(s.lazy(() => redeemToSchema)) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedSetRedeemOptionResponseSchema },
        errorFactory: SimpleEarn.SetLockedProductRedeemOptionUserDataError,
      },
      options,
    );
  }

  simpleAccountUserData(
    request: SimpleEarn.SimpleAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnAccountResponse, SimpleEarn.SimpleAccountUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/simple-earn/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnAccountResponseSchema },
        errorFactory: SimpleEarn.SimpleAccountUserDataError,
      },
      options,
    );
  }

  subscribeFlexibleProductTrade(
    request: SimpleEarn.SubscribeFlexibleProductTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnFlexibleSubscribeResponse, SimpleEarn.SubscribeFlexibleProductTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/simple-earn/flexible/subscribe"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.optional(s.boolean()) },
          { name: "sourceAccount", value: request.sourceAccount, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleSubscribeResponseSchema },
        errorFactory: SimpleEarn.SubscribeFlexibleProductTradeError,
      },
      options,
    );
  }

  subscribeLockedProductTrade(
    request: SimpleEarn.SubscribeLockedProductTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnLockedSubscribeResponse, SimpleEarn.SubscribeLockedProductTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/simple-earn/locked/subscribe"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.optional(s.boolean()) },
          { name: "sourceAccount", value: request.sourceAccount, schema: s.optional(s.string()) },
          { name: "redeemTo", value: request.redeemTo, schema: s.optional(s.lazy(() => redeemToSchema)) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedSubscribeResponseSchema },
        errorFactory: SimpleEarn.SubscribeLockedProductTradeError,
      },
      options,
    );
  }
}

export namespace SimpleEarn {
  export type GetCollateralRecordUserDataRequest = {
    timestamp: number;
    signature: string;
    productId?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetCollateralRecordUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetCollateralRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexiblePersonalLeftQuotaUserDataRequest = {
    productId: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetFlexiblePersonalLeftQuotaUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFlexiblePersonalLeftQuotaUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleProductPositionUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    productId?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetFlexibleProductPositionUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFlexibleProductPositionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleRedemptionRecordUserDataRequest = {
    productId?: string;
    redeemId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
  };

  export class GetFlexibleRedemptionRecordUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFlexibleRedemptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleRewardsHistoryUserDataRequest = {
    type: string;
    productId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
  };

  export class GetFlexibleRewardsHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFlexibleRewardsHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleSubscriptionPreviewUserDataRequest = {
    productId: string;
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetFlexibleSubscriptionPreviewUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFlexibleSubscriptionPreviewUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleSubscriptionRecordUserDataRequest = {
    timestamp: number;
    signature: string;
    productId?: string;
    purchaseId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetFlexibleSubscriptionRecordUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetFlexibleSubscriptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedPersonalLeftQuotaUserDataRequest = {
    projectId: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetLockedPersonalLeftQuotaUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLockedPersonalLeftQuotaUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedProductPositionUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    positionId?: string;
    projectId?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetLockedProductPositionUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLockedProductPositionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedRedemptionRecordUserDataRequest = {
    timestamp: number;
    signature: string;
    positionId?: string;
    redeemId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetLockedRedemptionRecordUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLockedRedemptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedRewardsHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    positionId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetLockedRewardsHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLockedRewardsHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedSubscriptionPreviewUserDataRequest = {
    projectId: string;
    amount: number;
    timestamp: number;
    signature: string;
    autoSubscribe?: boolean;
    recvWindow?: number;
  };

  export class GetLockedSubscriptionPreviewUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLockedSubscriptionPreviewUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedSubscriptionRecordUserDataRequest = {
    timestamp: number;
    signature: string;
    purchaseId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetLockedSubscriptionRecordUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLockedSubscriptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRateHistoryUserDataRequest = {
    productId: string;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetRateHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetRateHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSimpleEarnFlexibleProductListUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetSimpleEarnFlexibleProductListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetSimpleEarnFlexibleProductListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSimpleEarnLockedProductListUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetSimpleEarnLockedProductListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetSimpleEarnLockedProductListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemFlexibleProductTradeRequest = {
    productId: string;
    timestamp: number;
    signature: string;
    redeemAll?: boolean;
    amount?: number;
    destAccount?: string;
    recvWindow?: number;
  };

  export class RedeemFlexibleProductTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RedeemFlexibleProductTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemLockedProductTradeRequest = {
    positionId: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class RedeemLockedProductTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RedeemLockedProductTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetFlexibleAutoSubscribeUserDataRequest = {
    productId: string;
    autoSubscribe: boolean;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SetFlexibleAutoSubscribeUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SetFlexibleAutoSubscribeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLockedAutoSubscribeUserDataRequest = {
    positionId: string;
    autoSubscribe: boolean;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SetLockedAutoSubscribeUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SetLockedAutoSubscribeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLockedProductRedeemOptionUserDataRequest = {
    positionId: string;
    timestamp: number;
    signature: string;
    redeemTo?: RedeemTo;
    recvWindow?: number;
  };

  export class SetLockedProductRedeemOptionUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SetLockedProductRedeemOptionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SimpleAccountUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SimpleAccountUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SimpleAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeFlexibleProductTradeRequest = {
    productId: string;
    amount: number;
    timestamp: number;
    signature: string;
    autoSubscribe?: boolean;
    sourceAccount?: string;
    recvWindow?: number;
  };

  export class SubscribeFlexibleProductTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubscribeFlexibleProductTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeLockedProductTradeRequest = {
    projectId: string;
    amount: number;
    timestamp: number;
    signature: string;
    autoSubscribe?: boolean;
    sourceAccount?: string;
    redeemTo?: RedeemTo;
    recvWindow?: number;
  };

  export class SubscribeLockedProductTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubscribeLockedProductTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
