import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Simple Earn Endpoints
 */
export class SimpleEarn {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Collateral Record (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Collateral Record
   *
   * @throws {@link SimpleEarn.GetCollateralRecordUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/history/collateralRecord"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistoryCollateralRecordResponseSchema },
        errorFactory: SimpleEarn.GetCollateralRecordUserDataError,
      },
      options,
    );
  }

  /**
   * Get Flexible Personal Left Quota (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Flexible Personal Left Quota
   *
   * @throws {@link SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/personalLeftQuota"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexiblePersonalLeftQuotaResponseSchema },
        errorFactory: SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataError,
      },
      options,
    );
  }

  /**
   * Get Flexible Product Position (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Flexible Product Position
   *
   * @throws {@link SimpleEarn.GetFlexibleProductPositionUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/position"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexiblePositionResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleProductPositionUserDataError,
      },
      options,
    );
  }

  /**
   * Get Flexible Redemption Record (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Flexible Redemption Record
   *
   * @throws {@link SimpleEarn.GetFlexibleRedemptionRecordUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/history/redemptionRecord"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "redeemId", value: request.redeemId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleRedemptionRecordUserDataError,
      },
      options,
    );
  }

  /**
   * Get Flexible Rewards History (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Flexible Rewards History
   *
   * @throws {@link SimpleEarn.GetFlexibleRewardsHistoryUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/history/rewardsRecord"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.string() },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistoryRewardsRecordResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleRewardsHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Flexible Subscription Preview (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Flexible Subscription Preview
   *
   * @throws {@link SimpleEarn.GetFlexibleSubscriptionPreviewUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/subscriptionPreview"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleSubscriptionPreviewResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleSubscriptionPreviewUserDataError,
      },
      options,
    );
  }

  /**
   * Get Flexible Subscription Record (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Flexible Product Position
   *
   * @throws {@link SimpleEarn.GetFlexibleSubscriptionRecordUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/history/subscriptionRecord"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "purchaseId", value: request.purchaseId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponseSchema },
        errorFactory: SimpleEarn.GetFlexibleSubscriptionRecordUserDataError,
      },
      options,
    );
  }

  /**
   * Get Locked Personal Left Quota (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Locked Personal Left Quota
   *
   * @throws {@link SimpleEarn.GetLockedPersonalLeftQuotaUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/personalLeftQuota"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedPersonalLeftQuotaResponseSchema },
        errorFactory: SimpleEarn.GetLockedPersonalLeftQuotaUserDataError,
      },
      options,
    );
  }

  /**
   * Get Locked Product Position (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Locked Product Position
   *
   * @throws {@link SimpleEarn.GetLockedProductPositionUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLockedProductPositionUserData(
    request: SimpleEarn.GetLockedProductPositionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnLockedPositionResponse, SimpleEarn.GetLockedProductPositionUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/position"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "positionId", value: request.positionId, schema: s.optional(s.string()) },
          { name: "projectId", value: request.projectId, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedPositionResponseSchema },
        errorFactory: SimpleEarn.GetLockedProductPositionUserDataError,
      },
      options,
    );
  }

  /**
   * Get Locked Redemption Record (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Locked Redemption Record
   *
   * @throws {@link SimpleEarn.GetLockedRedemptionRecordUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/history/redemptionRecord"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "positionId", value: request.positionId, schema: s.optional(s.string()) },
          { name: "redeemId", value: request.redeemId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: sapiV1SimpleEarnLockedHistoryRedemptionRecordResponseSchema },
        errorFactory: SimpleEarn.GetLockedRedemptionRecordUserDataError,
      },
      options,
    );
  }

  /**
   * Get Locked Rewards History (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Locked Rewards History
   *
   * @throws {@link SimpleEarn.GetLockedRewardsHistoryUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/history/rewardsRecord"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "positionId", value: request.positionId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedHistoryRewardsRecordResponseSchema },
        errorFactory: SimpleEarn.GetLockedRewardsHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Locked Subscription Preview (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Locked Product Subscription Response
   *
   * @throws {@link SimpleEarn.GetLockedSubscriptionPreviewUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/subscriptionPreview"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.optional(s.boolean()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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

  /**
   * Get Locked Subscription Record (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Locked Subscription Record
   *
   * @throws {@link SimpleEarn.GetLockedSubscriptionRecordUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/history/subscriptionRecord"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "purchaseId", value: request.purchaseId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: sapiV1SimpleEarnLockedHistorySubscriptionRecordResponseSchema },
        errorFactory: SimpleEarn.GetLockedSubscriptionRecordUserDataError,
      },
      options,
    );
  }

  /**
   * Get Rate History (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Rate History
   *
   * @throws {@link SimpleEarn.GetRateHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRateHistoryUserData(
    request: SimpleEarn.GetRateHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse, SimpleEarn.GetRateHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/history/rateHistory"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
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
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleHistoryRateHistoryResponseSchema },
        errorFactory: SimpleEarn.GetRateHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get Simple Earn Flexible Product List (USER_DATA)
   *
   * @remarks
   * Get available Simple Earn flexible product list
   *
   * Weight(IP): 150
   *
   * @returns Simple Earn Flexible Product List
   *
   * @throws {@link SimpleEarn.GetSimpleEarnFlexibleProductListUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleListResponseSchema },
        errorFactory: SimpleEarn.GetSimpleEarnFlexibleProductListUserDataError,
      },
      options,
    );
  }

  /**
   * Get Simple Earn Locked Product List (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Simple Earn Locked Product List
   *
   * @throws {@link SimpleEarn.GetSimpleEarnLockedProductListUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSimpleEarnLockedProductListUserData(
    request: SimpleEarn.GetSimpleEarnLockedProductListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnLockedListResponse, SimpleEarn.GetSimpleEarnLockedProductListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedListResponseSchema },
        errorFactory: SimpleEarn.GetSimpleEarnLockedProductListUserDataError,
      },
      options,
    );
  }

  /**
   * Redeem Flexible Product (TRADE)
   *
   * @remarks
   * Weight(IP): 1
   *
   * Rate Limit: 1/3s per account
   *
   * @returns Redeem Flexible Product
   *
   * @throws {@link SimpleEarn.RedeemFlexibleProductTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redeemFlexibleProductTrade(
    request: SimpleEarn.RedeemFlexibleProductTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnFlexibleRedeemResponse, SimpleEarn.RedeemFlexibleProductTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/redeem"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "redeemAll", value: request.redeemAll, schema: s.optional(s.boolean()) },
          { name: "amount", value: request.amount, schema: s.optional(s.float64()) },
          { name: "destAccount", value: request.destAccount, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleRedeemResponseSchema },
        errorFactory: SimpleEarn.RedeemFlexibleProductTradeError,
      },
      options,
    );
  }

  /**
   * Redeem Locked Product (TRADE)
   *
   * @remarks
   * Weight(IP): 1
   *
   * Rate Limit: 1/3s per account
   *
   * @returns Redeem Locked Product
   *
   * @throws {@link SimpleEarn.RedeemLockedProductTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redeemLockedProductTrade(
    request: SimpleEarn.RedeemLockedProductTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnLockedRedeemResponse, SimpleEarn.RedeemLockedProductTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/redeem"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "positionId", value: request.positionId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedRedeemResponseSchema },
        errorFactory: SimpleEarn.RedeemLockedProductTradeError,
      },
      options,
    );
  }

  /**
   * Set Flexible Auto Subscribe (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Flexible Product Subscription Response
   *
   * @throws {@link SimpleEarn.SetFlexibleAutoSubscribeUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/setAutoSubscribe"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleSetAutoSubscribeResponseSchema },
        errorFactory: SimpleEarn.SetFlexibleAutoSubscribeUserDataError,
      },
      options,
    );
  }

  /**
   * Set Locked Auto Subscribe (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Locked Auto Subscribe
   *
   * @throws {@link SimpleEarn.SetLockedAutoSubscribeUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/setAutoSubscribe"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "positionId", value: request.positionId, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedSetAutoSubscribeResponseSchema },
        errorFactory: SimpleEarn.SetLockedAutoSubscribeUserDataError,
      },
      options,
    );
  }

  /**
   * Set Locked Product Redeem Option(USER_DATA)
   *
   * @remarks
   * Set redeem option for Locked product
   *
   * Weight(IP): 50
   *
   * @returns Locked Product Redeem Option
   *
   * @throws {@link SimpleEarn.SetLockedProductRedeemOptionUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/setRedeemOption"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "positionId", value: request.positionId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "redeemTo", value: request.redeemTo, schema: s.optional(s.lazy(() => redeemToSchema)) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnLockedSetRedeemOptionResponseSchema },
        errorFactory: SimpleEarn.SetLockedProductRedeemOptionUserDataError,
      },
      options,
    );
  }

  /**
   * Simple Account (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Account Information
   *
   * @throws {@link SimpleEarn.SimpleAccountUserDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  simpleAccountUserData(
    request: SimpleEarn.SimpleAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnAccountResponse, SimpleEarn.SimpleAccountUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/account"),
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
        success: { kind: "json", schema: sapiV1SimpleEarnAccountResponseSchema },
        errorFactory: SimpleEarn.SimpleAccountUserDataError,
      },
      options,
    );
  }

  /**
   * Subscribe Flexible Product (TRADE)
   *
   * @remarks
   * Weight(IP): 1
   *
   * Rate Limit: 1/3s per account
   *
   * @returns Flexible Product Subscription Response
   *
   * @throws {@link SimpleEarn.SubscribeFlexibleProductTradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeFlexibleProductTrade(
    request: SimpleEarn.SubscribeFlexibleProductTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnFlexibleSubscribeResponse, SimpleEarn.SubscribeFlexibleProductTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/flexible/subscribe"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "productId", value: request.productId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.optional(s.boolean()) },
          { name: "sourceAccount", value: request.sourceAccount, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SimpleEarnFlexibleSubscribeResponseSchema },
        errorFactory: SimpleEarn.SubscribeFlexibleProductTradeError,
      },
      options,
    );
  }

  /**
   * Subscribe Locked Product (TRADE)
   *
   * @remarks
   * Weight(IP): 1
   *
   * Rate Limit: 1/3s per account
   *
   * @returns Locked Product Subscription Response
   *
   * @throws {@link SimpleEarn.SubscribeLockedProductTradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeLockedProductTrade(
    request: SimpleEarn.SubscribeLockedProductTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SimpleEarnLockedSubscribeResponse, SimpleEarn.SubscribeLockedProductTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/simple-earn/locked/subscribe"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "autoSubscribe", value: request.autoSubscribe, schema: s.optional(s.boolean()) },
          { name: "sourceAccount", value: request.sourceAccount, schema: s.optional(s.string()) },
          { name: "redeemTo", value: request.redeemTo, schema: s.optional(s.lazy(() => redeemToSchema)) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    productId?: string;
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

  export class GetCollateralRecordUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetCollateralRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexiblePersonalLeftQuotaUserDataRequest = {
    productId: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFlexiblePersonalLeftQuotaUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFlexiblePersonalLeftQuotaUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleProductPositionUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    productId?: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFlexibleProductPositionUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFlexibleProductPositionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleRedemptionRecordUserDataRequest = {
    productId?: string;
    redeemId?: string;
    asset?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
  };

  export class GetFlexibleRedemptionRecordUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFlexibleRedemptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleRewardsHistoryUserDataRequest = {
    /** "BONUS", "REALTIME", "REWARDS" */
    type: string;
    productId?: string;
    asset?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
  };

  export class GetFlexibleRewardsHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFlexibleRewardsHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleSubscriptionPreviewUserDataRequest = {
    productId: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetFlexibleSubscriptionPreviewUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFlexibleSubscriptionPreviewUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFlexibleSubscriptionRecordUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    productId?: string;
    purchaseId?: string;
    asset?: string;
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

  export class GetFlexibleSubscriptionRecordUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetFlexibleSubscriptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedPersonalLeftQuotaUserDataRequest = {
    projectId: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetLockedPersonalLeftQuotaUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLockedPersonalLeftQuotaUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedProductPositionUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    positionId?: string;
    projectId?: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetLockedProductPositionUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLockedProductPositionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedRedemptionRecordUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    positionId?: string;
    redeemId?: string;
    asset?: string;
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

  export class GetLockedRedemptionRecordUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLockedRedemptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedRewardsHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    positionId?: string;
    asset?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetLockedRewardsHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLockedRewardsHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedSubscriptionPreviewUserDataRequest = {
    projectId: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** true or false, default true. */
    autoSubscribe?: boolean;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetLockedSubscriptionPreviewUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLockedSubscriptionPreviewUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLockedSubscriptionRecordUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    purchaseId?: string;
    asset?: string;
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

  export class GetLockedSubscriptionRecordUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLockedSubscriptionRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRateHistoryUserDataRequest = {
    productId: string;
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

  export class GetRateHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetRateHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSimpleEarnFlexibleProductListUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetSimpleEarnFlexibleProductListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetSimpleEarnFlexibleProductListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSimpleEarnLockedProductListUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetSimpleEarnLockedProductListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetSimpleEarnLockedProductListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemFlexibleProductTradeRequest = {
    productId: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** true or false, default to false */
    redeemAll?: boolean;
    /** if redeemAll is false, amount is mandatory */
    amount?: number;
    /** SPOT,FUND,ALL, default SPOT */
    destAccount?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RedeemFlexibleProductTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RedeemFlexibleProductTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemLockedProductTradeRequest = {
    /** 1234 */
    positionId: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RedeemLockedProductTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RedeemLockedProductTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetFlexibleAutoSubscribeUserDataRequest = {
    productId: string;
    /** true or false */
    autoSubscribe: boolean;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SetFlexibleAutoSubscribeUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SetFlexibleAutoSubscribeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLockedAutoSubscribeUserDataRequest = {
    positionId: string;
    /** true or false */
    autoSubscribe: boolean;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SetLockedAutoSubscribeUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SetLockedAutoSubscribeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLockedProductRedeemOptionUserDataRequest = {
    positionId: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** SPOT,FLEXIBLE, default FLEXIBLE */
    redeemTo?: RedeemTo;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SetLockedProductRedeemOptionUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SetLockedProductRedeemOptionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SimpleAccountUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SimpleAccountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SimpleAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeFlexibleProductTradeRequest = {
    productId: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** true or false, default true. */
    autoSubscribe?: boolean;
    /** SPOT,FUND,ALL, default SPOT */
    sourceAccount?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubscribeFlexibleProductTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubscribeFlexibleProductTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeLockedProductTradeRequest = {
    projectId: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** true or false, default true. */
    autoSubscribe?: boolean;
    /** SPOT,FUND,ALL, default SPOT */
    sourceAccount?: string;
    /** SPOT,FLEXIBLE, default FLEXIBLE */
    redeemTo?: RedeemTo;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubscribeLockedProductTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubscribeLockedProductTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
