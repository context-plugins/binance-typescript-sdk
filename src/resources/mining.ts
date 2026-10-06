import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Mining Endpoints
 */
export class Mining {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Account List (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns List of mining accounts
   *
   * @throws {@link Mining.AccountListUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountListUserData(
    request: Mining.AccountListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningStatisticsUserListResponse, Mining.AccountListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/statistics/user/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningStatisticsUserListResponseSchema },
        errorFactory: Mining.AccountListUserDataError,
      },
      options,
    );
  }

  /**
   * Acquiring Algorithm (MARKET_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Algorithm information
   *
   * @throws {@link Mining.AcquiringAlgorithmMarketDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acquiringAlgorithmMarketData(
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPubAlgoListResponse, Mining.AcquiringAlgorithmMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/pub/algoList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPubAlgoListResponseSchema },
        errorFactory: Mining.AcquiringAlgorithmMarketDataError,
      },
      options,
    );
  }

  /**
   * Acquiring CoinName (MARKET_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Coin information
   *
   * @throws {@link Mining.AcquiringCoinNameMarketDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acquiringCoinNameMarketData(
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPubCoinListResponse, Mining.AcquiringCoinNameMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/pub/coinList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPubCoinListResponseSchema },
        errorFactory: Mining.AcquiringCoinNameMarketDataError,
      },
      options,
    );
  }

  /**
   * Cancel Hashrate Resale configuration (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns Success flag
   *
   * @throws {@link Mining.CancelHashrateResaleConfigurationUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/mining/hash-transfer/config/cancel"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "configId", value: request.configId, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningHashTransferConfigCancelResponseSchema },
        errorFactory: Mining.CancelHashrateResaleConfigurationUserDataError,
      },
      options,
    );
  }

  /**
   * Earnings List (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns List of earnings
   *
   * @throws {@link Mining.EarningsListUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  earningsListUserData(
    request: Mining.EarningsListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPaymentListResponse, Mining.EarningsListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/payment/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPaymentListResponseSchema },
        errorFactory: Mining.EarningsListUserDataError,
      },
      options,
    );
  }

  /**
   * Extra Bonus List (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns List of extra bonuses
   *
   * @throws {@link Mining.ExtraBonusListUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  extraBonusListUserData(
    request: Mining.ExtraBonusListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPaymentOtherResponse, Mining.ExtraBonusListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/payment/other"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPaymentOtherResponseSchema },
        errorFactory: Mining.ExtraBonusListUserDataError,
      },
      options,
    );
  }

  /**
   * Hashrate Resale Details (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns List of hashrate resale details
   *
   * @throws {@link Mining.HashrateResaleDetailsUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hashrateResaleDetailsUserData(
    request: Mining.HashrateResaleDetailsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningHashTransferProfitDetailsResponse, Mining.HashrateResaleDetailsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/hash-transfer/profit/details"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "configId", value: request.configId, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningHashTransferProfitDetailsResponseSchema },
        errorFactory: Mining.HashrateResaleDetailsUserDataError,
      },
      options,
    );
  }

  /**
   * Hashrate Resale List (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns List of hashrate resales
   *
   * @throws {@link Mining.HashrateResaleListUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hashrateResaleListUserData(
    request: Mining.HashrateResaleListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningHashTransferConfigDetailsListResponse, Mining.HashrateResaleListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/hash-transfer/config/details/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningHashTransferConfigDetailsListResponseSchema },
        errorFactory: Mining.HashrateResaleListUserDataError,
      },
      options,
    );
  }

  /**
   * Hashrate Resale Request (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns Mining Account Id
   *
   * @throws {@link Mining.HashrateResaleRequestUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hashrateResaleRequestUserData(
    request: Mining.HashrateResaleRequestUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningHashTransferConfigResponse, Mining.HashrateResaleRequestUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/mining/hash-transfer/config"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "toPoolUser", value: request.toPoolUser, schema: s.string() },
          { name: "hashRate", value: request.hashRate, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningHashTransferConfigResponseSchema },
        errorFactory: Mining.HashrateResaleRequestUserDataError,
      },
      options,
    );
  }

  /**
   * Mining Account Earning (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns Mining account earnings
   *
   * @throws {@link Mining.MiningAccountEarningUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miningAccountEarningUserData(
    request: Mining.MiningAccountEarningUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningPaymentUidResponse, Mining.MiningAccountEarningUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/payment/uid"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningPaymentUidResponseSchema },
        errorFactory: Mining.MiningAccountEarningUserDataError,
      },
      options,
    );
  }

  /**
   * Request for Detail Miner List (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns List of workers' hashrates'
   *
   * @throws {@link Mining.RequestForDetailMinerListUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  requestForDetailMinerListUserData(
    request: Mining.RequestForDetailMinerListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningWorkerDetailResponse, Mining.RequestForDetailMinerListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/worker/detail"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "workerName", value: request.workerName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningWorkerDetailResponseSchema },
        errorFactory: Mining.RequestForDetailMinerListUserDataError,
      },
      options,
    );
  }

  /**
   * Request for Miner List (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns List of workers
   *
   * @throws {@link Mining.RequestForMinerListUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  requestForMinerListUserData(
    request: Mining.RequestForMinerListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningWorkerListResponse, Mining.RequestForMinerListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/worker/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.int()) },
          { name: "sortColumn", value: request.sortColumn, schema: s.optional(s.int()) },
          { name: "workerStatus", value: request.workerStatus, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1MiningWorkerListResponseSchema },
        errorFactory: Mining.RequestForMinerListUserDataError,
      },
      options,
    );
  }

  /**
   * Statistic List (USER_DATA)
   *
   * @remarks
   * Weight(IP): 5
   *
   * @returns Mining account statistics
   *
   * @throws {@link Mining.StatisticListUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  statisticListUserData(
    request: Mining.StatisticListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1MiningStatisticsUserStatusResponse, Mining.StatisticListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/mining/statistics/user/status"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "algo", value: request.algo, schema: s.string() },
          { name: "userName", value: request.userName, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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
    /** Algorithm(sha256) */
    algo: string;
    /** Mining Account */
    userName: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AccountListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AccountListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class AcquiringAlgorithmMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<AcquiringAlgorithmMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class AcquiringCoinNameMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<AcquiringCoinNameMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelHashrateResaleConfigurationUserDataRequest = {
    /** Mining ID */
    configId: string;
    /** Mining Account */
    userName: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CancelHashrateResaleConfigurationUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CancelHashrateResaleConfigurationUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EarningsListUserDataRequest = {
    /** Algorithm(sha256) */
    algo: string;
    /** Mining Account */
    userName: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin name */
    coin?: string;
    /** Search date, millisecond timestamp, while empty query all */
    startDate?: string;
    /** Search date, millisecond timestamp, while empty query all */
    endDate?: string;
    /** Page number, default is first page, start form 1 */
    pageIndex?: number;
    /** Number of pages, minimum 10, maximum 200 */
    pageSize?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class EarningsListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EarningsListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ExtraBonusListUserDataRequest = {
    /** Algorithm(sha256) */
    algo: string;
    /** Mining Account */
    userName: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin name */
    coin?: string;
    /** Search date, millisecond timestamp, while empty query all */
    startDate?: string;
    /** Search date, millisecond timestamp, while empty query all */
    endDate?: string;
    /** Page number, default is first page, start form 1 */
    pageIndex?: number;
    /** Number of pages, minimum 10, maximum 200 */
    pageSize?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class ExtraBonusListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ExtraBonusListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type HashrateResaleDetailsUserDataRequest = {
    /** Mining ID */
    configId: string;
    /** Mining Account */
    userName: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Page number, default is first page, start form 1 */
    pageIndex?: number;
    /** Number of pages, minimum 10, maximum 200 */
    pageSize?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class HashrateResaleDetailsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<HashrateResaleDetailsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type HashrateResaleListUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Page number, default is first page, start form 1 */
    pageIndex?: number;
    /** Number of pages, minimum 10, maximum 200 */
    pageSize?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class HashrateResaleListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<HashrateResaleListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type HashrateResaleRequestUserDataRequest = {
    /** Mining Account */
    userName: string;
    /** Algorithm(sha256) */
    algo: string;
    /** Mining Account */
    toPoolUser: string;
    /**
     * Resale hashrate h/s must be transferred (BTC is greater than 500000000000 ETH is greater than
     * 500000)
     */
    hashRate: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Search date, millisecond timestamp, while empty query all */
    startDate?: string;
    /** Search date, millisecond timestamp, while empty query all */
    endDate?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class HashrateResaleRequestUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<HashrateResaleRequestUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MiningAccountEarningUserDataRequest = {
    /** Algorithm(sha256) */
    algo: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Search date, millisecond timestamp, while empty query all */
    startDate?: string;
    /** Search date, millisecond timestamp, while empty query all */
    endDate?: string;
    /** Page number, default is first page, start form 1 */
    pageIndex?: number;
    /** Number of pages, minimum 10, maximum 200 */
    pageSize?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class MiningAccountEarningUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MiningAccountEarningUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RequestForDetailMinerListUserDataRequest = {
    /** Algorithm(sha256) */
    algo: string;
    /** Mining Account */
    userName: string;
    /** Miner’s name */
    workerName: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RequestForDetailMinerListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RequestForDetailMinerListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RequestForMinerListUserDataRequest = {
    /** Algorithm(sha256) */
    algo: string;
    /** Mining Account */
    userName: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Page number, default is first page, start form 1 */
    pageIndex?: number;
    /** sort sequence(default=0)0 positive sequence, 1 negative sequence */
    sort?: number;
    /**
     * Sort by( default 1): 1: miner name, 2: real-time computing power, 3: daily average computing
     * power, 4: real-time rejection rate, 5: last submission time
     */
    sortColumn?: number;
    /** miners status(default=0)0 all, 1 valid, 2 invalid, 3 failure */
    workerStatus?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RequestForMinerListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RequestForMinerListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StatisticListUserDataRequest = {
    /** Algorithm(sha256) */
    algo: string;
    /** Mining Account */
    userName: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class StatisticListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<StatisticListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
