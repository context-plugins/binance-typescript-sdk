import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1MiningHashTransferConfigCancelResponseSchema,
  type SapiV1MiningHashTransferConfigCancelResponse,
} from "../models/sapi-v1-mining-hash-transfer-config-cancel-response.js";
import {
  sapiV1MiningHashTransferConfigDetailsListResponseSchema,
  type SapiV1MiningHashTransferConfigDetailsListResponse,
} from "../models/sapi-v1-mining-hash-transfer-config-details-list-response.js";
import {
  sapiV1MiningHashTransferConfigResponseSchema,
  type SapiV1MiningHashTransferConfigResponse,
} from "../models/sapi-v1-mining-hash-transfer-config-response.js";
import {
  sapiV1MiningHashTransferProfitDetailsResponseSchema,
  type SapiV1MiningHashTransferProfitDetailsResponse,
} from "../models/sapi-v1-mining-hash-transfer-profit-details-response.js";
import {
  sapiV1MiningPaymentListResponseSchema,
  type SapiV1MiningPaymentListResponse,
} from "../models/sapi-v1-mining-payment-list-response.js";
import {
  sapiV1MiningPaymentOtherResponseSchema,
  type SapiV1MiningPaymentOtherResponse,
} from "../models/sapi-v1-mining-payment-other-response.js";
import {
  sapiV1MiningPaymentUidResponseSchema,
  type SapiV1MiningPaymentUidResponse,
} from "../models/sapi-v1-mining-payment-uid-response.js";
import {
  sapiV1MiningPubAlgoListResponseSchema,
  type SapiV1MiningPubAlgoListResponse,
} from "../models/sapi-v1-mining-pub-algo-list-response.js";
import {
  sapiV1MiningPubCoinListResponseSchema,
  type SapiV1MiningPubCoinListResponse,
} from "../models/sapi-v1-mining-pub-coin-list-response.js";
import {
  sapiV1MiningStatisticsUserListResponseSchema,
  type SapiV1MiningStatisticsUserListResponse,
} from "../models/sapi-v1-mining-statistics-user-list-response.js";
import {
  sapiV1MiningStatisticsUserStatusResponseSchema,
  type SapiV1MiningStatisticsUserStatusResponse,
} from "../models/sapi-v1-mining-statistics-user-status-response.js";
import {
  sapiV1MiningWorkerDetailResponseSchema,
  type SapiV1MiningWorkerDetailResponse,
} from "../models/sapi-v1-mining-worker-detail-response.js";
import {
  sapiV1MiningWorkerListResponseSchema,
  type SapiV1MiningWorkerListResponse,
} from "../models/sapi-v1-mining-worker-list-response.js";
import type { Servers } from "../servers.js";

export class Mining {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  accountListUserData(
    request: Mining.AccountListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningStatisticsUserListResponse, Mining.AccountListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/statistics/user/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningStatisticsUserListResponseSchema },
        errorFactory: Mining.AccountListUserDataError,
      },
      options,
    );
  }

  acquiringAlgorithmMarketData(
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPubAlgoListResponse, Mining.AcquiringAlgorithmMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/pub/algoList"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPubAlgoListResponseSchema },
        errorFactory: Mining.AcquiringAlgorithmMarketDataError,
      },
      options,
    );
  }

  acquiringCoinNameMarketData(
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPubCoinListResponse, Mining.AcquiringCoinNameMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/pub/coinList"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPubCoinListResponseSchema },
        errorFactory: Mining.AcquiringCoinNameMarketDataError,
      },
      options,
    );
  }

  cancelHashrateResaleConfigurationUserData(
    request: Mining.CancelHashrateResaleConfigurationUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1MiningHashTransferConfigCancelResponse,
    Mining.CancelHashrateResaleConfigurationUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/mining/hash-transfer/config/cancel"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "configId", value: request.configId, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningHashTransferConfigCancelResponseSchema },
        errorFactory: Mining.CancelHashrateResaleConfigurationUserDataError,
      },
      options,
    );
  }

  earningsListUserData(
    request: Mining.EarningsListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPaymentListResponse, Mining.EarningsListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/payment/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPaymentListResponseSchema },
        errorFactory: Mining.EarningsListUserDataError,
      },
      options,
    );
  }

  extraBonusListUserData(
    request: Mining.ExtraBonusListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPaymentOtherResponse, Mining.ExtraBonusListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/payment/other"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPaymentOtherResponseSchema },
        errorFactory: Mining.ExtraBonusListUserDataError,
      },
      options,
    );
  }

  hashrateResaleDetailsUserData(
    request: Mining.HashrateResaleDetailsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningHashTransferProfitDetailsResponse, Mining.HashrateResaleDetailsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/hash-transfer/profit/details"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "configId", value: request.configId, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningHashTransferProfitDetailsResponseSchema },
        errorFactory: Mining.HashrateResaleDetailsUserDataError,
      },
      options,
    );
  }

  hashrateResaleListUserData(
    request: Mining.HashrateResaleListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningHashTransferConfigDetailsListResponse, Mining.HashrateResaleListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/hash-transfer/config/details/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningHashTransferConfigDetailsListResponseSchema },
        errorFactory: Mining.HashrateResaleListUserDataError,
      },
      options,
    );
  }

  hashrateResaleRequestUserData(
    request: Mining.HashrateResaleRequestUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningHashTransferConfigResponse, Mining.HashrateResaleRequestUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/mining/hash-transfer/config"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "toPoolUser", value: request.toPoolUser, schema: s.string() },
          { name: "hashRate", value: request.hashRate, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningHashTransferConfigResponseSchema },
        errorFactory: Mining.HashrateResaleRequestUserDataError,
      },
      options,
    );
  }

  miningAccountEarningUserData(
    request: Mining.MiningAccountEarningUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPaymentUidResponse, Mining.MiningAccountEarningUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/payment/uid"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPaymentUidResponseSchema },
        errorFactory: Mining.MiningAccountEarningUserDataError,
      },
      options,
    );
  }

  requestForDetailMinerListUserData(
    request: Mining.RequestForDetailMinerListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningWorkerDetailResponse, Mining.RequestForDetailMinerListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/worker/detail"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "workerName", value: request.workerName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningWorkerDetailResponseSchema },
        errorFactory: Mining.RequestForDetailMinerListUserDataError,
      },
      options,
    );
  }

  requestForMinerListUserData(
    request: Mining.RequestForMinerListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningWorkerListResponse, Mining.RequestForMinerListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/worker/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.number()) },
          { name: "sortColumn", value: request.sortColumn, schema: s.optional(s.number()) },
          { name: "workerStatus", value: request.workerStatus, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningWorkerListResponseSchema },
        errorFactory: Mining.RequestForMinerListUserDataError,
      },
      options,
    );
  }

  statisticListUserData(
    request: Mining.StatisticListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningStatisticsUserStatusResponse, Mining.StatisticListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/mining/statistics/user/status"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningStatisticsUserStatusResponseSchema },
        errorFactory: Mining.StatisticListUserDataError,
      },
      options,
    );
  }
}

export namespace Mining {
  export type AccountListUserDataRequest = {
    algo: string;
    userName: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class AccountListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AccountListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class AcquiringAlgorithmMarketDataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<AcquiringAlgorithmMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class AcquiringCoinNameMarketDataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<AcquiringCoinNameMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelHashrateResaleConfigurationUserDataRequest = {
    configId: string;
    userName: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CancelHashrateResaleConfigurationUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CancelHashrateResaleConfigurationUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EarningsListUserDataRequest = {
    algo: string;
    userName: string;
    timestamp: number;
    signature: string;
    coin?: string;
    startDate?: string;
    endDate?: string;
    pageIndex?: number;
    pageSize?: string;
    recvWindow?: number;
  };

  export class EarningsListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EarningsListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ExtraBonusListUserDataRequest = {
    algo: string;
    userName: string;
    timestamp: number;
    signature: string;
    coin?: string;
    startDate?: string;
    endDate?: string;
    pageIndex?: number;
    pageSize?: string;
    recvWindow?: number;
  };

  export class ExtraBonusListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ExtraBonusListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type HashrateResaleDetailsUserDataRequest = {
    configId: string;
    userName: string;
    timestamp: number;
    signature: string;
    pageIndex?: number;
    pageSize?: string;
    recvWindow?: number;
  };

  export class HashrateResaleDetailsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<HashrateResaleDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type HashrateResaleListUserDataRequest = {
    timestamp: number;
    signature: string;
    pageIndex?: number;
    pageSize?: string;
    recvWindow?: number;
  };

  export class HashrateResaleListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<HashrateResaleListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type HashrateResaleRequestUserDataRequest = {
    userName: string;
    algo: string;
    toPoolUser: string;
    hashRate: string;
    timestamp: number;
    signature: string;
    startDate?: string;
    endDate?: string;
    recvWindow?: number;
  };

  export class HashrateResaleRequestUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<HashrateResaleRequestUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MiningAccountEarningUserDataRequest = {
    algo: string;
    timestamp: number;
    signature: string;
    startDate?: string;
    endDate?: string;
    pageIndex?: number;
    pageSize?: string;
    recvWindow?: number;
  };

  export class MiningAccountEarningUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MiningAccountEarningUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RequestForDetailMinerListUserDataRequest = {
    algo: string;
    userName: string;
    workerName: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class RequestForDetailMinerListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RequestForDetailMinerListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RequestForMinerListUserDataRequest = {
    algo: string;
    userName: string;
    timestamp: number;
    signature: string;
    pageIndex?: number;
    sort?: number;
    sortColumn?: number;
    workerStatus?: number;
    recvWindow?: number;
  };

  export class RequestForMinerListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RequestForMinerListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StatisticListUserDataRequest = {
    algo: string;
    userName: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class StatisticListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<StatisticListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
