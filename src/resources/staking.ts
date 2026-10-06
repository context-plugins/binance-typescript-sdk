import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1EthStakingEthHistoryRateHistoryResponseSchema,
  type SapiV1EthStakingEthHistoryRateHistoryResponse,
} from "../models/sapi-v1-eth-staking-eth-history-rate-history-response.js";
import {
  sapiV1EthStakingEthHistoryRedemptionHistoryResponseSchema,
  type SapiV1EthStakingEthHistoryRedemptionHistoryResponse,
} from "../models/sapi-v1-eth-staking-eth-history-redemption-history-response.js";
import {
  sapiV1EthStakingEthHistoryRewardsHistoryResponseSchema,
  type SapiV1EthStakingEthHistoryRewardsHistoryResponse,
} from "../models/sapi-v1-eth-staking-eth-history-rewards-history-response.js";
import {
  sapiV1EthStakingEthHistoryStakingHistoryResponseSchema,
  type SapiV1EthStakingEthHistoryStakingHistoryResponse,
} from "../models/sapi-v1-eth-staking-eth-history-staking-history-response.js";
import {
  sapiV1EthStakingEthHistoryWbethRewardsHistoryResponseSchema,
  type SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse,
} from "../models/sapi-v1-eth-staking-eth-history-wbeth-rewards-history-response.js";
import {
  sapiV1EthStakingEthQuotaResponseSchema,
  type SapiV1EthStakingEthQuotaResponse,
} from "../models/sapi-v1-eth-staking-eth-quota-response.js";
import {
  sapiV1EthStakingEthRedeemResponseSchema,
  type SapiV1EthStakingEthRedeemResponse,
} from "../models/sapi-v1-eth-staking-eth-redeem-response.js";
import {
  sapiV1EthStakingWbethHistoryUnwrapHistoryResponseSchema,
  type SapiV1EthStakingWbethHistoryUnwrapHistoryResponse,
} from "../models/sapi-v1-eth-staking-wbeth-history-unwrap-history-response.js";
import {
  sapiV1EthStakingWbethHistoryWrapHistoryResponseSchema,
  type SapiV1EthStakingWbethHistoryWrapHistoryResponse,
} from "../models/sapi-v1-eth-staking-wbeth-history-wrap-history-response.js";
import {
  sapiV1EthStakingWbethWrapResponseSchema,
  type SapiV1EthStakingWbethWrapResponse,
} from "../models/sapi-v1-eth-staking-wbeth-wrap-response.js";
import {
  sapiV2EthStakingAccountResponseSchema,
  type SapiV2EthStakingAccountResponse,
} from "../models/sapi-v2-eth-staking-account-response.js";
import {
  sapiV2EthStakingEthStakeResponseSchema,
  type SapiV2EthStakingEthStakeResponse,
} from "../models/sapi-v2-eth-staking-eth-stake-response.js";
import type { Servers } from "../servers.js";

export class Staking {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ETH Staking account V2(USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns ETH Staking account
   *
   * @throws {@link Staking.EthStakingAccountV2UserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ethStakingAccountV2UserData(
    request: Staking.EthStakingAccountV2UserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2EthStakingAccountResponse, Staking.EthStakingAccountV2UserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v2/eth-staking/account"),
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
        success: { kind: "json", schema: sapiV2EthStakingAccountResponseSchema },
        errorFactory: Staking.EthStakingAccountV2UserDataError,
      },
      options,
    );
  }

  /**
   * Get BETH rewards distribution history(USER_DATA)
   *
   * @remarks
   * - The time between startTime and endTime cannot be longer than 3 months.
   * - If startTime and endTime are both not sent, then the last 30 days' data will be returned.
   * - If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime
   *   will be returned.
   * - If endTime is sent but startTime is not sent, the 30 days' data before endTime will be
   *   returned.
   *
   * Weight(IP): 150
   *
   * @returns BETH rewards distribution history
   *
   * @throws {@link Staking.GetBethRewardsDistributionHistoryUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBethRewardsDistributionHistoryUserData(
    request: Staking.GetBethRewardsDistributionHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1EthStakingEthHistoryRewardsHistoryResponse,
    Staking.GetBethRewardsDistributionHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/eth/history/rewardsHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryRewardsHistoryResponseSchema },
        errorFactory: Staking.GetBethRewardsDistributionHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get ETH redemption history (USER_DATA)
   *
   * @remarks
   * - The time between startTime and endTime cannot be longer than 3 months.
   * - If startTime and endTime are both not sent, then the last 30 days' data will be returned.
   * - If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime
   *   will be returned.
   * - If endTime is sent but startTime is not sent, the 30 days' data before endTime will be
   *   returned.
   *
   * Weight(IP): 150
   *
   * @returns ETH redemption history
   *
   * @throws {@link Staking.GetEthRedemptionHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEthRedemptionHistoryUserData(
    request: Staking.GetEthRedemptionHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1EthStakingEthHistoryRedemptionHistoryResponse,
    Staking.GetEthRedemptionHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/eth/history/redemptionHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryRedemptionHistoryResponseSchema },
        errorFactory: Staking.GetEthRedemptionHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get ETH staking history (USER_DATA)
   *
   * @remarks
   * - The time between startTime and endTime cannot be longer than 3 months.
   * - If startTime and endTime are both not sent, then the last 30 days' data will be returned.
   * - If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime
   *   will be returned.
   * - If endTime is sent but startTime is not sent, the 30 days' data before endTime will be
   *   returned.
   *
   * Weight(IP): 150
   *
   * @returns ETH staking history
   *
   * @throws {@link Staking.GetEthStakingHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEthStakingHistoryUserData(
    request: Staking.GetEthStakingHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingEthHistoryStakingHistoryResponse, Staking.GetEthStakingHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/eth/history/stakingHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryStakingHistoryResponseSchema },
        errorFactory: Staking.GetEthStakingHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get WBETH Rate History (USER_DATA)
   *
   * @remarks
   * - The time between startTime and endTime cannot be longer than 3 months.
   * - If startTime and endTime are both not sent, then the last 30 days' data will be returned.
   * - If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime
   *   will be returned.
   * - If endTime is sent but startTime is not sent, the 30 days' data before endTime will be
   *   returned.
   *
   * Weight(IP): 150
   *
   * @returns WBETH Rate History
   *
   * @throws {@link Staking.GetWbethRateHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWbethRateHistoryUserData(
    request: Staking.GetWbethRateHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingEthHistoryRateHistoryResponse, Staking.GetWbethRateHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/eth/history/rateHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryRateHistoryResponseSchema },
        errorFactory: Staking.GetWbethRateHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get WBETH rewards history(USER_DATA)
   *
   * @remarks
   * - The time between startTime and endTime cannot be longer than 3 months.
   * - If startTime and endTime are both not sent, then the last 30 days' data will be returned.
   * - If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime
   *   will be returned.
   * - If endTime is sent but startTime is not sent, the 30 days' data before endTime will be
   *   returned.
   *
   * Weight(IP): 150
   *
   * @returns WBETH rewards history
   *
   * @throws {@link Staking.GetWbethRewardsHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWbethRewardsHistoryUserData(
    request: Staking.GetWbethRewardsHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse,
    Staking.GetWbethRewardsHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/eth/history/wbethRewardsHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryWbethRewardsHistoryResponseSchema },
        errorFactory: Staking.GetWbethRewardsHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get WBETH unwrap history (USER_DATA)
   *
   * @remarks
   * - The time between startTime and endTime cannot be longer than 3 months.
   * - If startTime and endTime are both not sent, then the last 30 days' data will be returned.
   * - If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime
   *   will be returned.
   * - If endTime is sent but startTime is not sent, the 30 days' data before endTime will be
   *   returned.
   *
   * Weight(IP): 150
   *
   * @returns WBETH unwrap history
   *
   * @throws {@link Staking.GetWbethUnwrapHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWbethUnwrapHistoryUserData(
    request: Staking.GetWbethUnwrapHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1EthStakingWbethHistoryUnwrapHistoryResponse,
    Staking.GetWbethUnwrapHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/wbeth/history/unwrapHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingWbethHistoryUnwrapHistoryResponseSchema },
        errorFactory: Staking.GetWbethUnwrapHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get WBETH wrap history (USER_DATA)
   *
   * @remarks
   * - The time between startTime and endTime cannot be longer than 3 months.
   * - If startTime and endTime are both not sent, then the last 30 days' data will be returned.
   * - If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime
   *   will be returned.
   * - If endTime is sent but startTime is not sent, the 30 days' data before endTime will be
   *   returned.
   *
   * Weight(IP): 150
   *
   * @returns WBETH wrap history
   *
   * @throws {@link Staking.GetWbethWrapHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWbethWrapHistoryUserData(
    request: Staking.GetWbethWrapHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingWbethHistoryWrapHistoryResponse, Staking.GetWbethWrapHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/wbeth/history/wrapHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingWbethHistoryWrapHistoryResponseSchema },
        errorFactory: Staking.GetWbethWrapHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get current ETH staking quota (USER_DATA)
   *
   * @remarks
   * Weight(IP): 150
   *
   * @returns Eth staking quota
   *
   * @throws {@link Staking.GetCurrentEthStakingQuotaUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentEthStakingQuotaUserData(
    request: Staking.GetCurrentEthStakingQuotaUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingEthQuotaResponse, Staking.GetCurrentEthStakingQuotaUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/eth/quota"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthQuotaResponseSchema },
        errorFactory: Staking.GetCurrentEthStakingQuotaUserDataError,
      },
      options,
    );
  }

  /**
   * Redeem ETH (TRADE)
   *
   * @remarks
   * Redeem WBETH or BETH and get ETH
   *
   * - You need to open Enable Spot & Margin Trading permission for the API Key which requests this
   *   endpoint.
   *
   * Weight(IP): 150
   *
   * @returns Returned ETH
   *
   * @throws {@link Staking.RedeemEthTradeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redeemEthTrade(
    request: Staking.RedeemEthTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingEthRedeemResponse, Staking.RedeemEthTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/eth/redeem"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1EthStakingEthRedeemResponseSchema },
        errorFactory: Staking.RedeemEthTradeError,
      },
      options,
    );
  }

  /**
   * Subscribe ETH Staking V2(TRADE)
   *
   * @remarks
   * Stake ETH to get WBETH
   *
   * - You need to open Enable Spot & Margin Trading permission for the API Key which requests this
   *   endpoint.
   *
   * Weight(IP): 150
   *
   * @returns Subscribed WBETH
   *
   * @throws {@link Staking.SubscribeEthStakingV2TradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeEthStakingV2Trade(
    request: Staking.SubscribeEthStakingV2TradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2EthStakingEthStakeResponse, Staking.SubscribeEthStakingV2TradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v2/eth-staking/eth/stake"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2EthStakingEthStakeResponseSchema },
        errorFactory: Staking.SubscribeEthStakingV2TradeError,
      },
      options,
    );
  }

  /**
   * Wrap BETH(TRADE)
   *
   * @remarks
   * - You need to open Enable Spot & Margin Trading permission for the API Key which requests this
   *   endpoint.
   *
   * Weight(IP): 150
   *
   * @returns Wrap BETH
   *
   * @throws {@link Staking.WrapBethTradeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wrapBethTrade(
    request: Staking.WrapBethTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingWbethWrapResponse, Staking.WrapBethTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/eth-staking/wbeth/wrap"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1EthStakingWbethWrapResponseSchema },
        errorFactory: Staking.WrapBethTradeError,
      },
      options,
    );
  }
}

export namespace Staking {
  export type EthStakingAccountV2UserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class EthStakingAccountV2UserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EthStakingAccountV2UserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBethRewardsDistributionHistoryUserDataRequest = {
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

  export class GetBethRewardsDistributionHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetBethRewardsDistributionHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetEthRedemptionHistoryUserDataRequest = {
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

  export class GetEthRedemptionHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetEthRedemptionHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetEthStakingHistoryUserDataRequest = {
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

  export class GetEthStakingHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetEthStakingHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWbethRateHistoryUserDataRequest = {
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

  export class GetWbethRateHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetWbethRateHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWbethRewardsHistoryUserDataRequest = {
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

  export class GetWbethRewardsHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetWbethRewardsHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWbethUnwrapHistoryUserDataRequest = {
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

  export class GetWbethUnwrapHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetWbethUnwrapHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWbethWrapHistoryUserDataRequest = {
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

  export class GetWbethWrapHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetWbethWrapHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCurrentEthStakingQuotaUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetCurrentEthStakingQuotaUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetCurrentEthStakingQuotaUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemEthTradeRequest = {
    /** Amount in BETH, limit 8 decimals */
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** WBETH or BETH, default to BETH */
    asset?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RedeemEthTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RedeemEthTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeEthStakingV2TradeRequest = {
    /** Amount in ETH, limit 4 decimals */
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubscribeEthStakingV2TradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubscribeEthStakingV2TradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type WrapBethTradeRequest = {
    /** Amount in BETH, limit 4 decimals */
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class WrapBethTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<WrapBethTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
