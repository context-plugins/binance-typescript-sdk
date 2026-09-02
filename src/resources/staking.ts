import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  ethStakingAccountV2UserData(
    request: Staking.EthStakingAccountV2UserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2EthStakingAccountResponse, Staking.EthStakingAccountV2UserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/eth-staking/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2EthStakingAccountResponseSchema },
        errorFactory: Staking.EthStakingAccountV2UserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/eth-staking/eth/history/rewardsHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryRewardsHistoryResponseSchema },
        errorFactory: Staking.GetBethRewardsDistributionHistoryUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/eth-staking/eth/history/redemptionHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryRedemptionHistoryResponseSchema },
        errorFactory: Staking.GetEthRedemptionHistoryUserDataError,
      },
      options,
    );
  }

  getEthStakingHistoryUserData(
    request: Staking.GetEthStakingHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingEthHistoryStakingHistoryResponse, Staking.GetEthStakingHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/eth-staking/eth/history/stakingHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryStakingHistoryResponseSchema },
        errorFactory: Staking.GetEthStakingHistoryUserDataError,
      },
      options,
    );
  }

  getWbethRateHistoryUserData(
    request: Staking.GetWbethRateHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingEthHistoryRateHistoryResponse, Staking.GetWbethRateHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/eth-staking/eth/history/rateHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryRateHistoryResponseSchema },
        errorFactory: Staking.GetWbethRateHistoryUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/eth-staking/eth/history/wbethRewardsHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingEthHistoryWbethRewardsHistoryResponseSchema },
        errorFactory: Staking.GetWbethRewardsHistoryUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/eth-staking/wbeth/history/unwrapHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingWbethHistoryUnwrapHistoryResponseSchema },
        errorFactory: Staking.GetWbethUnwrapHistoryUserDataError,
      },
      options,
    );
  }

  getWbethWrapHistoryUserData(
    request: Staking.GetWbethWrapHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingWbethHistoryWrapHistoryResponse, Staking.GetWbethWrapHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/eth-staking/wbeth/history/wrapHistory"),
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
        success: { kind: "json", schema: sapiV1EthStakingWbethHistoryWrapHistoryResponseSchema },
        errorFactory: Staking.GetWbethWrapHistoryUserDataError,
      },
      options,
    );
  }

  getCurrentEthStakingQuotaUserData(
    request: Staking.GetCurrentEthStakingQuotaUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingEthQuotaResponse, Staking.GetCurrentEthStakingQuotaUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/eth-staking/eth/quota"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1EthStakingEthQuotaResponseSchema },
        errorFactory: Staking.GetCurrentEthStakingQuotaUserDataError,
      },
      options,
    );
  }

  redeemEthTrade(
    request: Staking.RedeemEthTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingEthRedeemResponse, Staking.RedeemEthTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/eth-staking/eth/redeem"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1EthStakingEthRedeemResponseSchema },
        errorFactory: Staking.RedeemEthTradeError,
      },
      options,
    );
  }

  subscribeEthStakingV2Trade(
    request: Staking.SubscribeEthStakingV2TradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV2EthStakingEthStakeResponse, Staking.SubscribeEthStakingV2TradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v2/eth-staking/eth/stake"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2EthStakingEthStakeResponseSchema },
        errorFactory: Staking.SubscribeEthStakingV2TradeError,
      },
      options,
    );
  }

  wrapBethTrade(
    request: Staking.WrapBethTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1EthStakingWbethWrapResponse, Staking.WrapBethTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/eth-staking/wbeth/wrap"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class EthStakingAccountV2UserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EthStakingAccountV2UserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBethRewardsDistributionHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetBethRewardsDistributionHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetBethRewardsDistributionHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetEthRedemptionHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetEthRedemptionHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetEthRedemptionHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetEthStakingHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetEthStakingHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetEthStakingHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWbethRateHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetWbethRateHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetWbethRateHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWbethRewardsHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetWbethRewardsHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetWbethRewardsHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWbethUnwrapHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetWbethUnwrapHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetWbethUnwrapHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWbethWrapHistoryUserDataRequest = {
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetWbethWrapHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetWbethWrapHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCurrentEthStakingQuotaUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetCurrentEthStakingQuotaUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetCurrentEthStakingQuotaUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemEthTradeRequest = {
    amount: number;
    timestamp: number;
    signature: string;
    asset?: string;
    recvWindow?: number;
  };

  export class RedeemEthTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RedeemEthTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeEthStakingV2TradeRequest = {
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SubscribeEthStakingV2TradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubscribeEthStakingV2TradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type WrapBethTradeRequest = {
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class WrapBethTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<WrapBethTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
