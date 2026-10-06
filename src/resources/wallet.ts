import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { accountTypeSchema, type AccountType } from "../models/account-type.js";
import { accountType3Schema, type AccountType3 } from "../models/account-type3.js";
import { errorSchema, type Error } from "../models/error.js";
import { needBtcValuationSchema, type NeedBtcValuation } from "../models/need-btc-valuation.js";
import {
  sapiV1AccountApiRestrictionsResponseSchema,
  type SapiV1AccountApiRestrictionsResponse,
} from "../models/sapi-v1-account-api-restrictions-response.js";
import {
  sapiV1AccountApiTradingStatusResponseSchema,
  type SapiV1AccountApiTradingStatusResponse,
} from "../models/sapi-v1-account-api-trading-status-response.js";
import {
  sapiV1AccountInfoResponseSchema,
  type SapiV1AccountInfoResponse,
} from "../models/sapi-v1-account-info-response.js";
import {
  sapiV1AccountStatusResponseSchema,
  type SapiV1AccountStatusResponse,
} from "../models/sapi-v1-account-status-response.js";
import {
  sapiV1AssetAssetDetailResponseSchema,
  type SapiV1AssetAssetDetailResponse,
} from "../models/sapi-v1-asset-asset-detail-response.js";
import {
  sapiV1AssetAssetDividendResponseSchema,
  type SapiV1AssetAssetDividendResponse,
} from "../models/sapi-v1-asset-asset-dividend-response.js";
import {
  sapiV1AssetConvertTransferQueryByPageResponseSchema,
  type SapiV1AssetConvertTransferQueryByPageResponse,
} from "../models/sapi-v1-asset-convert-transfer-query-by-page-response.js";
import {
  sapiV1AssetConvertTransferResponseSchema,
  type SapiV1AssetConvertTransferResponse,
} from "../models/sapi-v1-asset-convert-transfer-response.js";
import {
  sapiV1AssetCustodyTransferHistoryResponseSchema,
  type SapiV1AssetCustodyTransferHistoryResponse,
} from "../models/sapi-v1-asset-custody-transfer-history-response.js";
import {
  sapiV1AssetDribbletResponseSchema,
  type SapiV1AssetDribbletResponse,
} from "../models/sapi-v1-asset-dribblet-response.js";
import {
  sapiV1AssetDustBtcResponseSchema,
  type SapiV1AssetDustBtcResponse,
} from "../models/sapi-v1-asset-dust-btc-response.js";
import {
  sapiV1AssetDustResponseSchema,
  type SapiV1AssetDustResponse,
} from "../models/sapi-v1-asset-dust-response.js";
import {
  sapiV1AssetGetFundingAssetResponseSchema,
  type SapiV1AssetGetFundingAssetResponse,
} from "../models/sapi-v1-asset-get-funding-asset-response.js";
import {
  sapiV1AssetLedgerTransferCloudMiningQueryByPageResponseSchema,
  type SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse,
} from "../models/sapi-v1-asset-ledger-transfer-cloud-mining-query-by-page-response.js";
import {
  sapiV1AssetTradeFeeResponseSchema,
  type SapiV1AssetTradeFeeResponse,
} from "../models/sapi-v1-asset-trade-fee-response.js";
import {
  sapiV1AssetTransferResponseSchema,
  type SapiV1AssetTransferResponse,
} from "../models/sapi-v1-asset-transfer-response.js";
import {
  sapiV1AssetTransferResponse1Schema,
  type SapiV1AssetTransferResponse1,
} from "../models/sapi-v1-asset-transfer-response1.js";
import {
  sapiV1AssetWalletBalanceResponseSchema,
  type SapiV1AssetWalletBalanceResponse,
} from "../models/sapi-v1-asset-wallet-balance-response.js";
import {
  sapiV1CapitalConfigGetallResponseSchema,
  type SapiV1CapitalConfigGetallResponse,
} from "../models/sapi-v1-capital-config-getall-response.js";
import {
  sapiV1CapitalContractConvertibleCoinsResponseSchema,
  type SapiV1CapitalContractConvertibleCoinsResponse,
} from "../models/sapi-v1-capital-contract-convertible-coins-response.js";
import {
  sapiV1CapitalDepositAddressListResponseSchema,
  type SapiV1CapitalDepositAddressListResponse,
} from "../models/sapi-v1-capital-deposit-address-list-response.js";
import {
  sapiV1CapitalDepositAddressResponseSchema,
  type SapiV1CapitalDepositAddressResponse,
} from "../models/sapi-v1-capital-deposit-address-response.js";
import {
  sapiV1CapitalDepositCreditApplyResponseSchema,
  type SapiV1CapitalDepositCreditApplyResponse,
} from "../models/sapi-v1-capital-deposit-credit-apply-response.js";
import {
  sapiV1CapitalDepositHisrecResponseSchema,
  type SapiV1CapitalDepositHisrecResponse,
} from "../models/sapi-v1-capital-deposit-hisrec-response.js";
import {
  sapiV1CapitalWithdrawAddressListResponseSchema,
  type SapiV1CapitalWithdrawAddressListResponse,
} from "../models/sapi-v1-capital-withdraw-address-list-response.js";
import {
  sapiV1CapitalWithdrawApplyResponseSchema,
  type SapiV1CapitalWithdrawApplyResponse,
} from "../models/sapi-v1-capital-withdraw-apply-response.js";
import {
  sapiV1CapitalWithdrawHistoryResponseSchema,
  type SapiV1CapitalWithdrawHistoryResponse,
} from "../models/sapi-v1-capital-withdraw-history-response.js";
import {
  sapiV1SpotDelistScheduleResponseSchema,
  type SapiV1SpotDelistScheduleResponse,
} from "../models/sapi-v1-spot-delist-schedule-response.js";
import {
  sapiV1SystemStatusResponseSchema,
  type SapiV1SystemStatusResponse,
} from "../models/sapi-v1-system-status-response.js";
import {
  sapiV3AssetGetUserAssetResponseSchema,
  type SapiV3AssetGetUserAssetResponse,
} from "../models/sapi-v3-asset-get-user-asset-response.js";
import { type6Schema, type Type6 } from "../models/type6.js";
import { type7Schema, type Type7 } from "../models/type7.js";
import {
  sapiV1AccountSnapshotResponseSchema,
  type SapiV1AccountSnapshotResponse,
} from "../models/unions/sapi-v1-account-snapshot-response.js";
import type { Servers } from "../servers.js";

/**
 * Wallet Endpoints
 */
export class Wallet {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Account API Trading Status (USER_DATA)
   *
   * @remarks
   * Fetch account API trading status with details.
   *
   * Weight(IP): 1
   *
   * @returns Account API trading status
   *
   * @throws {@link Wallet.AccountApiTradingStatusUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountApiTradingStatusUserData(
    request: Wallet.AccountApiTradingStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountApiTradingStatusResponse, Wallet.AccountApiTradingStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/account/apiTradingStatus"),
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
        success: { kind: "json", schema: sapiV1AccountApiTradingStatusResponseSchema },
        errorFactory: Wallet.AccountApiTradingStatusUserDataError,
      },
      options,
    );
  }

  /**
   * Account Status (USER_DATA)
   *
   * @remarks
   * Fetch account status detail.
   *
   * Weight(IP): 1
   *
   * @returns OK
   *
   * @throws {@link Wallet.AccountStatusUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountStatusUserData(
    request: Wallet.AccountStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountStatusResponse, Wallet.AccountStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/account/status"),
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
        success: { kind: "json", schema: sapiV1AccountStatusResponseSchema },
        errorFactory: Wallet.AccountStatusUserDataError,
      },
      options,
    );
  }

  /**
   * Account info (USER_DATA)
   *
   * @remarks
   * Fetch account info detail.
   *
   * Weight(IP): 1
   *
   * @returns Account info detail
   *
   * @throws {@link Wallet.AccountInfoUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountInfoUserData(
    request: Wallet.AccountInfoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountInfoResponse, Wallet.AccountInfoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/account/info"),
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
        success: { kind: "json", schema: sapiV1AccountInfoResponseSchema },
        errorFactory: Wallet.AccountInfoUserDataError,
      },
      options,
    );
  }

  /**
   * All Coins' Information (USER_DATA)
   *
   * @remarks
   * Get information of coins (available for deposit and withdraw) for user.
   *
   * Weight(IP): 10
   *
   * @returns All coins details information
   *
   * @throws {@link Wallet.AllCoinsInformationUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  allCoinsInformationUserData(
    request: Wallet.AllCoinsInformationUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalConfigGetallResponse[], Wallet.AllCoinsInformationUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/capital/config/getall"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1CapitalConfigGetallResponseSchema)) },
        errorFactory: Wallet.AllCoinsInformationUserDataError,
      },
      options,
    );
  }

  /**
   * Asset Detail (USER_DATA)
   *
   * @remarks
   * Fetch details of assets supported on Binance.
   *
   * - Please get network and other deposit or withdraw details from `GET
   *   /sapi/v1/capital/config/getall`.
   *
   * Weight(IP): 1
   *
   * @returns Asset detail
   *
   * @throws {@link Wallet.AssetDetailUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetDetailUserData(
    request: Wallet.AssetDetailUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetAssetDetailResponse, Wallet.AssetDetailUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/asset/assetDetail"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetAssetDetailResponseSchema },
        errorFactory: Wallet.AssetDetailUserDataError,
      },
      options,
    );
  }

  /**
   * Asset Dividend Record (USER_DATA)
   *
   * @remarks
   * Query asset Dividend Record
   *
   * Weight(IP): 10
   *
   * @returns Records of asset devidend
   *
   * @throws {@link Wallet.AssetDividendRecordUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetDividendRecordUserData(
    request: Wallet.AssetDividendRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetAssetDividendResponse, Wallet.AssetDividendRecordUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/asset/assetDividend"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetAssetDividendResponseSchema },
        errorFactory: Wallet.AssetDividendRecordUserDataError,
      },
      options,
    );
  }

  /**
   * Convert Transfer (USER_DATA)
   *
   * @remarks
   * Convert transfer, convert between BUSD and stablecoins. If the clientId has been used before,
   * will not do the convert transfer, the original transfer will be returned.
   *
   * Weight(UID): 5
   *
   * @returns Conversion Information
   *
   * @throws {@link Wallet.ConvertTransferUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  convertTransferUserData(
    request: Wallet.ConvertTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetConvertTransferResponse, Wallet.ConvertTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/asset/convert-transfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "clientTranId", value: request.clientTranId, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "targetAsset", value: request.targetAsset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetConvertTransferResponseSchema },
        errorFactory: Wallet.ConvertTransferUserDataError,
      },
      options,
    );
  }

  /**
   * Daily Account Snapshot (USER_DATA)
   *
   * @remarks
   * - The query time period must be less than 30 days
   * - Support query within the last one month only
   * - If startTimeand endTime not sent, return records of the last 7 days by default
   *
   * Weight(IP): 2400
   *
   * @returns Account Snapshot
   *
   * @throws {@link Wallet.DailyAccountSnapshotUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dailyAccountSnapshotUserData(
    request: Wallet.DailyAccountSnapshotUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountSnapshotResponse, Wallet.DailyAccountSnapshotUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/accountSnapshot"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: type6Schema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 7) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AccountSnapshotResponseSchema },
        errorFactory: Wallet.DailyAccountSnapshotUserDataError,
      },
      options,
    );
  }

  /**
   * Deposit Address (supporting network) (USER_DATA)
   *
   * @remarks
   * Fetch deposit address with network.
   *
   * - If network is not send, return with default network of the coin.
   * - You can get network and isDefault in networkList in the response of Get
   *   /sapi/v1/capital/config/getall (HMAC SHA256).
   *
   * Weight(IP): 10
   *
   * @returns Deposit address info
   *
   * @throws {@link Wallet.DepositAddressSupportingNetworkUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  depositAddressSupportingNetworkUserData(
    request: Wallet.DepositAddressSupportingNetworkUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalDepositAddressResponse, Wallet.DepositAddressSupportingNetworkUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/capital/deposit/address"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CapitalDepositAddressResponseSchema },
        errorFactory: Wallet.DepositAddressSupportingNetworkUserDataError,
      },
      options,
    );
  }

  /**
   * Deposit History(supporting network) (USER_DATA)
   *
   * @remarks
   * Fetch deposit history.
   *
   * - Please notice the default `startTime` and `endTime` to make sure that time interval is within
   *   0-90 days.
   * - If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be
   *   less than 90 days.
   *
   * Weight(IP): 1
   *
   * @returns List of deposits
   *
   * @throws {@link Wallet.DepositHistorySupportingNetworkUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  depositHistorySupportingNetworkUserData(
    request: Wallet.DepositHistorySupportingNetworkUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalDepositHisrecResponse[], Wallet.DepositHistorySupportingNetworkUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/capital/deposit/hisrec"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1CapitalDepositHisrecResponseSchema)) },
        errorFactory: Wallet.DepositHistorySupportingNetworkUserDataError,
      },
      options,
    );
  }

  /**
   * Disable Fast Withdraw Switch (USER_DATA)
   *
   * @remarks
   * - This request will disable fastwithdraw switch under your account.
   * - You need to enable "trade" option for the api key which requests this endpoint.
   *
   * Weight(IP): 1
   *
   * @returns OK
   *
   * @throws {@link Wallet.DisableFastWithdrawSwitchUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableFastWithdrawSwitchUserData(
    request: Wallet.DisableFastWithdrawSwitchUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Wallet.DisableFastWithdrawSwitchUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/account/disableFastWithdrawSwitch"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Wallet.DisableFastWithdrawSwitchUserDataError,
      },
      options,
    );
  }

  /**
   * Dust Transfer (USER_DATA)
   *
   * @remarks
   * Convert dust assets to BNB.
   *
   * Weight(UID): 10
   *
   * @returns Dust log records
   *
   * @throws {@link Wallet.DustTransferUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dustTransferUserData(
    request: Wallet.DustTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetDustResponse, Wallet.DustTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/asset/dust"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.array(s.string()) },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "accountType",
            value: request.accountType,
            schema: s.optional(s.lazy(() => accountTypeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetDustResponseSchema },
        errorFactory: Wallet.DustTransferUserDataError,
      },
      options,
    );
  }

  /**
   * DustLog(USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Dust log records
   *
   * @throws {@link Wallet.DustLogUserDataError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dustLogUserData(
    request: Wallet.DustLogUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetDribbletResponse, Wallet.DustLogUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/asset/dribblet"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "accountType",
            value: request.accountType,
            schema: s.optional(s.lazy(() => accountTypeSchema)),
          },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetDribbletResponseSchema },
        errorFactory: Wallet.DustLogUserDataError,
      },
      options,
    );
  }

  /**
   * Enable Fast Withdraw Switch (USER_DATA)
   *
   * @remarks
   * - This request will enable fastwithdraw switch under your account. You need to enable "trade"
   *   option for the api key which requests this endpoint.
   * - When Fast Withdraw Switch is on, transferring funds to a Binance account will be done
   *   instantly. There is no on-chain transaction, no transaction ID and no withdrawal fee.
   *
   * Weight(IP): 1
   *
   * @returns OK
   *
   * @throws {@link Wallet.EnableFastWithdrawSwitchUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableFastWithdrawSwitchUserData(
    request: Wallet.EnableFastWithdrawSwitchUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Wallet.EnableFastWithdrawSwitchUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/account/enableFastWithdrawSwitch"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Wallet.EnableFastWithdrawSwitchUserDataError,
      },
      options,
    );
  }

  /**
   * Fetch deposit address list with network (USER_DATA)
   *
   * @remarks
   * Fetch deposit address list with network.
   *
   * Weight(IP): 10
   *
   * @returns Coin address
   *
   * @throws {@link Wallet.FetchDepositAddressListWithNetworkUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchDepositAddressListWithNetworkUserData(
    request: Wallet.FetchDepositAddressListWithNetworkUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1CapitalDepositAddressListResponse[],
    Wallet.FetchDepositAddressListWithNetworkUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/capital/deposit/address/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1CapitalDepositAddressListResponseSchema)),
        },
        errorFactory: Wallet.FetchDepositAddressListWithNetworkUserDataError,
      },
      options,
    );
  }

  /**
   * Fetch withdraw address list (USER_DATA)
   *
   * @remarks
   * Fetch withdraw address list
   *
   * Weight(IP): 10
   *
   * @returns Withdraw address list
   *
   * @throws {@link Wallet.FetchWithdrawAddressListUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchWithdrawAddressListUserData(
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalWithdrawAddressListResponse[], Wallet.FetchWithdrawAddressListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/capital/withdraw/address/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1CapitalWithdrawAddressListResponseSchema)),
        },
        errorFactory: Wallet.FetchWithdrawAddressListUserDataError,
      },
      options,
    );
  }

  /**
   * Funding Wallet (USER_DATA)
   *
   * @remarks
   * - Currently supports querying the following business assets：Binance Pay, Binance Card, Binance
   *   Gift Card, Stock Token
   *
   * Weight(IP): 1
   *
   * @returns Funding asset detail
   *
   * @throws {@link Wallet.FundingWalletUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fundingWalletUserData(
    request: Wallet.FundingWalletUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetGetFundingAssetResponse[], Wallet.FundingWalletUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/asset/get-funding-asset"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          {
            name: "needBtcValuation",
            value: request.needBtcValuation,
            schema: s.optional(s.lazy(() => needBtcValuationSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1AssetGetFundingAssetResponseSchema)) },
        errorFactory: Wallet.FundingWalletUserDataError,
      },
      options,
    );
  }

  /**
   * Get API Key Permission (USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns API Key permissions
   *
   * @throws {@link Wallet.GetApiKeyPermissionUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiKeyPermissionUserData(
    request: Wallet.GetApiKeyPermissionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountApiRestrictionsResponse, Wallet.GetApiKeyPermissionUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/account/apiRestrictions"),
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
        success: { kind: "json", schema: sapiV1AccountApiRestrictionsResponseSchema },
        errorFactory: Wallet.GetApiKeyPermissionUserDataError,
      },
      options,
    );
  }

  /**
   * Get Assets That Can Be Converted Into BNB (USER_DATA)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Account assets available to be converted to BNB
   *
   * @throws {@link Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAssetsThatCanBeConvertedIntoBnbUserData(
    request: Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetDustBtcResponse, Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/asset/dust-btc"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "accountType",
            value: request.accountType,
            schema: s.optional(s.lazy(() => accountTypeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetDustBtcResponseSchema },
        errorFactory: Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError,
      },
      options,
    );
  }

  /**
   * Get Cloud-Mining payment and refund history (USER_DATA)
   *
   * @remarks
   * The query of Cloud-Mining payment and refund history
   *
   * Weight(UID): 600
   *
   * @returns Cloud Mining Payment and Refund History
   *
   * @throws {@link Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudMiningPaymentAndRefundHistoryUserData(
    request: Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse,
    Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "startTime", value: request.startTime, schema: s.int() },
          { name: "endTime", value: request.endTime, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tranId", value: request.tranId, schema: s.optional(s.int()) },
          { name: "clientTranId", value: request.clientTranId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetLedgerTransferCloudMiningQueryByPageResponseSchema },
        errorFactory: Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Get symbols delist schedule for spot (MARKET_DATA)
   *
   * @remarks
   * Get symbols delist schedule for spot
   *
   * Weight(IP): 100
   *
   * @returns Symbols delist schedule
   *
   * @throws {@link Wallet.GetSymbolsDelistScheduleForSpotMarketDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSymbolsDelistScheduleForSpotMarketData(
    request: Wallet.GetSymbolsDelistScheduleForSpotMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SpotDelistScheduleResponse[], Wallet.GetSymbolsDelistScheduleForSpotMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/spot/delist-schedule"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1SpotDelistScheduleResponseSchema)) },
        errorFactory: Wallet.GetSymbolsDelistScheduleForSpotMarketDataError,
      },
      options,
    );
  }

  /**
   * One click arrival deposit apply (USER_DATA)
   *
   * @remarks
   * Apply deposit credit for expired address (One click arrival)
   *
   * Weight(IP): 1
   *
   * @returns deposit result
   *
   * @throws {@link Wallet.OneClickArrivalDepositApplyUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oneClickArrivalDepositApplyUserData(
    request: Wallet.OneClickArrivalDepositApplyUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalDepositCreditApplyResponse, Wallet.OneClickArrivalDepositApplyUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/capital/deposit/credit-apply"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "depositId", value: request.depositId, schema: s.optional(s.int()) },
          { name: "txId", value: request.txId, schema: s.optional(s.string()) },
          { name: "subAccountId", value: request.subAccountId, schema: s.optional(s.int()) },
          { name: "subUserId", value: request.subUserId, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CapitalDepositCreditApplyResponseSchema },
        errorFactory: Wallet.OneClickArrivalDepositApplyUserDataError,
      },
      options,
    );
  }

  /**
   * Query Convert Transfer (USER_DATA)
   *
   * @remarks
   * Weight(UID): 5
   *
   * @returns Query Convert Transfer
   *
   * @throws {@link Wallet.QueryConvertTransferUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryConvertTransferUserData(
    request: Wallet.QueryConvertTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetConvertTransferQueryByPageResponse, Wallet.QueryConvertTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/asset/convert-transfer/queryByPage"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "startTime", value: request.startTime, schema: s.int() },
          { name: "endTime", value: request.endTime, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tranId", value: request.tranId, schema: s.optional(s.int()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          {
            name: "accountType",
            value: request.accountType,
            schema: s.optional(s.lazy(() => accountType3Schema)),
          },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetConvertTransferQueryByPageResponseSchema },
        errorFactory: Wallet.QueryConvertTransferUserDataError,
      },
      options,
    );
  }

  /**
   * Query User Delegation History(For Master Account) (USER_DATA)
   *
   * @remarks
   * Query User Delegation History
   *
   * Weight(IP): 60
   *
   * @returns Delegation History
   *
   * @throws {@link Wallet.QueryUserDelegationHistoryForMasterAccountUserDataError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryUserDelegationHistoryForMasterAccountUserData(
    request: Wallet.QueryUserDelegationHistoryForMasterAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1AssetCustodyTransferHistoryResponse,
    Wallet.QueryUserDelegationHistoryForMasterAccountUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/asset/custody/transfer-history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.int() },
          { name: "endTime", value: request.endTime, schema: s.int() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetCustodyTransferHistoryResponseSchema },
        errorFactory: Wallet.QueryUserDelegationHistoryForMasterAccountUserDataError,
      },
      options,
    );
  }

  /**
   * Query User Universal Transfer History (USER_DATA)
   *
   * @remarks
   * - `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and
   *   ISOLATEDMARGIN_ISOLATEDMARGIN
   * - `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
   * - Support query within the last 6 months only
   * - If `startTime` and `endTime` not sent, return records of the last 7 days by default
   *
   * Weight(IP): 1
   *
   * @returns Universal transfer history
   *
   * @throws {@link Wallet.QueryUserUniversalTransferHistoryUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryUserUniversalTransferHistoryUserData(
    request: Wallet.QueryUserUniversalTransferHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetTransferResponse, Wallet.QueryUserUniversalTransferHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/asset/transfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: type7Schema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "current", value: request.current, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "fromSymbol", value: request.fromSymbol, schema: s.optional(s.string()) },
          { name: "toSymbol", value: request.toSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetTransferResponseSchema },
        errorFactory: Wallet.QueryUserUniversalTransferHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * Query User Wallet Balance (USER_DATA)
   *
   * @remarks
   * Query User Wallet Balance
   *
   * Weight(IP): 60
   *
   * @returns wallet balance
   *
   * @throws {@link Wallet.QueryUserWalletBalanceUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryUserWalletBalanceUserData(
    request: Wallet.QueryUserWalletBalanceUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetWalletBalanceResponse[], Wallet.QueryUserWalletBalanceUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/asset/wallet/balance"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1AssetWalletBalanceResponseSchema)) },
        errorFactory: Wallet.QueryUserWalletBalanceUserDataError,
      },
      options,
    );
  }

  /**
   * Query auto-converting stable coins (USER_DATA)
   *
   * @remarks
   * Get a user's auto-conversion settings in deposit/withdrawal
   *
   * Weight(UID): 600'
   *
   * @returns User's auto-conversion settings i
   *
   * @throws {@link Wallet.QueryAutoConvertingStableCoinsUserDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryAutoConvertingStableCoinsUserData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1CapitalContractConvertibleCoinsResponse,
    Wallet.QueryAutoConvertingStableCoinsUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/capital/contract/convertible-coins"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CapitalContractConvertibleCoinsResponseSchema },
        errorFactory: Wallet.QueryAutoConvertingStableCoinsUserDataError,
      },
      options,
    );
  }

  /**
   * Switch on/off BUSD and stable coins conversion (USER_DATA) (USER_DATA)
   *
   * @remarks
   * User can use it to turn on or turn off the BUSD auto-conversion from/to a specific stable coin.
   *
   * Weight(UID): 600'
   *
   * @returns OK
   *
   * @throws {@link Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  switchOnOffBusdAndStableCoinsConversionUserDataUserData(
    request: Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/capital/contract/convertible-coins"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "enable", value: request.enable, schema: s.boolean() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError,
      },
      options,
    );
  }

  /**
   * System Status (System)
   *
   * @remarks
   * Fetch system status.
   *
   * Weight(IP): 1
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  systemStatusSystem(options?: RequestOptions): ApiPromise<SapiV1SystemStatusResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/system/status"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SystemStatusResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Trade Fee (USER_DATA)
   *
   * @remarks
   * Fetch trade fee
   *
   * Weight(IP): 1
   *
   * @returns Trade fee info per symbol
   *
   * @throws {@link Wallet.TradeFeeUserDataError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tradeFeeUserData(
    request: Wallet.TradeFeeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetTradeFeeResponse[], Wallet.TradeFeeUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/asset/tradeFee"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1AssetTradeFeeResponseSchema)) },
        errorFactory: Wallet.TradeFeeUserDataError,
      },
      options,
    );
  }

  /**
   * User Asset (USER_DATA)
   *
   * @remarks
   * Get user assets, just for positive data.
   *
   * Weight(IP): 5
   *
   * @returns User assets
   *
   * @throws {@link Wallet.UserAssetUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userAssetUserData(
    request: Wallet.UserAssetUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV3AssetGetUserAssetResponse[], Wallet.UserAssetUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v3/asset/getUserAsset"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          {
            name: "needBtcValuation",
            value: request.needBtcValuation,
            schema: s.optional(s.lazy(() => needBtcValuationSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV3AssetGetUserAssetResponseSchema)) },
        errorFactory: Wallet.UserAssetUserDataError,
      },
      options,
    );
  }

  /**
   * User Universal Transfer (USER_DATA)
   *
   * @remarks
   * You need to enable `Permits Universal Transfer` option for the api key which requests this
   * endpoint.
   *
   * - `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and
   *   ISOLATEDMARGIN_ISOLATEDMARGIN
   * - `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
   *
   * ENUM of transfer types:
   *   - MAIN_UMFUTURE Spot account transfer to USDⓈ-M Futures account
   *   - MAIN_CMFUTURE Spot account transfer to COIN-M Futures account
   *   - MAIN_MARGIN Spot account transfer to Margin(cross)account
   *   - UMFUTURE_MAIN USDⓈ-M Futures account transfer to Spot account
   *   - UMFUTURE_MARGIN USDⓈ-M Futures account transfer to Margin(cross)account
   *   - CMFUTURE_MAIN COIN-M Futures account transfer to Spot account
   *   - CMFUTURE_MARGIN COIN-M Futures account transfer to Margin(cross) account
   *   - MARGIN_MAIN Margin(cross)account transfer to Spot account
   *   - MARGIN_UMFUTURE Margin(cross)account transfer to USDⓈ-M Futures
   *   - MARGIN_CMFUTURE Margin(cross)account transfer to COIN-M Futures
   *   - ISOLATEDMARGIN_MARGIN Isolated margin account transfer to Margin(cross) account
   *   - MARGIN_ISOLATEDMARGIN Margin(cross) account transfer to Isolated margin account
   *   - ISOLATEDMARGIN_ISOLATEDMARGIN Isolated margin account transfer to Isolated margin account
   *   - MAIN_FUNDING Spot account transfer to Funding account
   *   - FUNDING_MAIN Funding account transfer to Spot account
   *   - FUNDING_UMFUTURE Funding account transfer to UMFUTURE account
   *   - UMFUTURE_FUNDING UMFUTURE account transfer to Funding account
   *   - MARGIN_FUNDING MARGIN account transfer to Funding account
   *   - FUNDING_MARGIN Funding account transfer to Margin account
   *   - FUNDING_CMFUTURE Funding account transfer to CMFUTURE account
   *   - CMFUTURE_FUNDING CMFUTURE account transfer to Funding account
   *   - MAIN_OPTION Spot account transfer to Options account
   *   - OPTION_MAIN Options account transfer to Spot account
   *   - UMFUTURE_OPTION USDⓈ-M Futures account transfer to Options account
   *   - OPTION_UMFUTURE Options account transfer to USDⓈ-M Futures account
   *   - MARGIN_OPTION Margin(cross)account transfer to Options account
   *   - OPTION_MARGIN Options account transfer to Margin(cross)account
   *   - FUNDING_OPTION Funding account transfer to Options account
   *   - OPTION_FUNDING Options account transfer to Funding account
   *   - MAIN_PORTFOLIO_MARGIN Spot account transfer to Portfolio Margin account
   *   - PORTFOLIO_MARGIN_MAIN Portfolio Margin account transfer to Spot account
   *   - MAIN_ISOLATED_MARGIN Spot account transfer to Isolated margin account
   *   - ISOLATED_MARGIN_MAIN Isolated margin account transfer to Spot account
   *
   * Weight(IP): 1
   *
   * @returns Transfer id
   *
   * @throws {@link Wallet.UserUniversalTransferUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userUniversalTransferUserData(
    request: Wallet.UserUniversalTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetTransferResponse1, Wallet.UserUniversalTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/asset/transfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: type7Schema },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromSymbol", value: request.fromSymbol, schema: s.optional(s.string()) },
          { name: "toSymbol", value: request.toSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetTransferResponse1Schema },
        errorFactory: Wallet.UserUniversalTransferUserDataError,
      },
      options,
    );
  }

  /**
   * Withdraw (USER_DATA)
   *
   * @remarks
   * Submit a withdraw request.
   *
   * - If `network` not send, return with default network of the coin.
   * - You can get `network` and `isDefault` in `networkList` of a coin in the response of `Get
   *   /sapi/v1/capital/config/getall (HMAC SHA256)`.
   *
   * Weight(IP): 1
   *
   * @returns Transafer Id
   *
   * @throws {@link Wallet.WithdrawUserDataError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  withdrawUserData(
    request: Wallet.WithdrawUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalWithdrawApplyResponse, Wallet.WithdrawUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/capital/withdraw/apply"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "address", value: request.address, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "withdrawOrderId", value: request.withdrawOrderId, schema: s.optional(s.string()) },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
          { name: "addressTag", value: request.addressTag, schema: s.optional(s.string()) },
          {
            name: "transactionFeeFlag",
            value: request.transactionFeeFlag,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "walletType", value: request.walletType, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CapitalWithdrawApplyResponseSchema },
        errorFactory: Wallet.WithdrawUserDataError,
      },
      options,
    );
  }

  /**
   * Withdraw History (supporting network) (USER_DATA)
   *
   * @remarks
   * Fetch withdraw history.
   *
   * This endpoint specifically uses per second UID rate limit, user's total second level IP rate
   * limit is 180000/second. Response from the endpoint contains header key
   * X-SAPI-USED-UID-WEIGHT-1S, which defines weight used by the current IP.
   *
   * - `network` may not be in the response for old withdraw.
   * - Please notice the default `startTime` and `endTime` to make sure that time interval is within
   *   0-90 days.
   * - If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be
   *   less than 90 days
   * - If withdrawOrderId is sent, time between startTime and endTime must be less than 7 days.
   * - If withdrawOrderId is sent, startTime and endTime are not sent, will return last 7 days
   *   records by default.
   *
   * Weight(UID): 18000 Request Limit: 10 requests per second
   *
   * @returns List of withdraw history
   *
   * @throws {@link Wallet.WithdrawHistorySupportingNetworkUserDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  withdrawHistorySupportingNetworkUserData(
    request: Wallet.WithdrawHistorySupportingNetworkUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1CapitalWithdrawHistoryResponse[],
    Wallet.WithdrawHistorySupportingNetworkUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/capital/withdraw/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "withdrawOrderId", value: request.withdrawOrderId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1CapitalWithdrawHistoryResponseSchema)) },
        errorFactory: Wallet.WithdrawHistorySupportingNetworkUserDataError,
      },
      options,
    );
  }
}

export namespace Wallet {
  export type AccountApiTradingStatusUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AccountApiTradingStatusUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AccountApiTradingStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AccountStatusUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AccountStatusUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AccountStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AccountInfoUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AccountInfoUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AccountInfoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AllCoinsInformationUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AllCoinsInformationUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AllCoinsInformationUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AssetDetailUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AssetDetailUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AssetDetailUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AssetDividendRecordUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** @default 20 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AssetDividendRecordUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AssetDividendRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ConvertTransferUserDataRequest = {
    /** The unique flag, the min length is 20 */
    clientTranId: string;
    asset: string;
    amount: number;
    /** Target asset you want to convert */
    targetAsset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class ConvertTransferUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ConvertTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DailyAccountSnapshotUserDataRequest = {
    type: Type6;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** @default 7 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DailyAccountSnapshotUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DailyAccountSnapshotUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DepositAddressSupportingNetworkUserDataRequest = {
    /** Coin name */
    coin: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    network?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DepositAddressSupportingNetworkUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DepositAddressSupportingNetworkUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DepositHistorySupportingNetworkUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin name */
    coin?: string;
    /**
     * * `0` - pending
     * * `6` - credited but cannot withdraw
     * * `1` - success
     */
    status?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    offset?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DepositHistorySupportingNetworkUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DepositHistorySupportingNetworkUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DisableFastWithdrawSwitchUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DisableFastWithdrawSwitchUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DisableFastWithdrawSwitchUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DustTransferUserDataRequest = {
    /** The asset being converted. For example, asset=BTC&asset=USDT */
    asset: string[];
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** SPOT or MARGIN, default SPOT */
    accountType?: AccountType;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DustTransferUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DustTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DustLogUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** SPOT or MARGIN, default SPOT */
    accountType?: AccountType;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DustLogUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DustLogUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableFastWithdrawSwitchUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class EnableFastWithdrawSwitchUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EnableFastWithdrawSwitchUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchDepositAddressListWithNetworkUserDataRequest = {
    coin: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    network?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FetchDepositAddressListWithNetworkUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FetchDepositAddressListWithNetworkUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class FetchWithdrawAddressListUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FetchWithdrawAddressListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FundingWalletUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    needBtcValuation?: NeedBtcValuation;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FundingWalletUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FundingWalletUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiKeyPermissionUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetApiKeyPermissionUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetApiKeyPermissionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAssetsThatCanBeConvertedIntoBnbUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** SPOT or MARGIN, default SPOT */
    accountType?: AccountType;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetAssetsThatCanBeConvertedIntoBnbUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetAssetsThatCanBeConvertedIntoBnbUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCloudMiningPaymentAndRefundHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    startTime: number;
    /** UTC timestamp in ms */
    endTime: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The transaction id */
    tranId?: number;
    /** The unique flag */
    clientTranId?: string;
    /** If it is blank, we will query all assets */
    asset?: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetCloudMiningPaymentAndRefundHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetCloudMiningPaymentAndRefundHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSymbolsDelistScheduleForSpotMarketDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetSymbolsDelistScheduleForSpotMarketDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetSymbolsDelistScheduleForSpotMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type OneClickArrivalDepositApplyUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Deposit record Id, priority use */
    depositId?: number;
    /** Deposit txId, used when depositId is not specified */
    txId?: string;
    subAccountId?: number;
    subUserId?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class OneClickArrivalDepositApplyUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<OneClickArrivalDepositApplyUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryConvertTransferUserDataRequest = {
    /** UTC timestamp in ms */
    startTime: number;
    /** UTC timestamp in ms */
    endTime: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The transaction id */
    tranId?: number;
    /** If it is blank, we will match deducted asset and target asset. */
    asset?: string;
    /**
     * MAIN: main account. CARD: funding account. If it is blank, we will query spot and card
     * wallet, otherwise, we just query the corresponding wallet
     */
    accountType?: AccountType3;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryConvertTransferUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryConvertTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryUserDelegationHistoryForMasterAccountUserDataRequest = {
    email: string;
    startTime: number;
    endTime: number;
    asset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    type?: string;
    /** Current querying page. Start from 1. Default:1 */
    current?: number;
    /** Default:10 Max:100 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryUserDelegationHistoryForMasterAccountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryUserDelegationHistoryForMasterAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryUserUniversalTransferHistoryUserDataRequest = {
    /** Universal transfer type */
    type: Type7;
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
    /** Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN */
    fromSymbol?: string;
    /** Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN */
    toSymbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryUserUniversalTransferHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryUserUniversalTransferHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryUserWalletBalanceUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryUserWalletBalanceUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryUserWalletBalanceUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class QueryAutoConvertingStableCoinsUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryAutoConvertingStableCoinsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataRequest = {
    /** Must be USDC, USDP or TUSD */
    coin: string;
    /** true: turn on the auto-conversion. false: turn off the auto-conversion */
    enable: boolean;
  };

  export class SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TradeFeeUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class TradeFeeUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<TradeFeeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UserAssetUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    needBtcValuation?: NeedBtcValuation;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class UserAssetUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<UserAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UserUniversalTransferUserDataRequest = {
    /** Universal transfer type */
    type: Type7;
    asset: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN */
    fromSymbol?: string;
    /** Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN */
    toSymbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class UserUniversalTransferUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<UserUniversalTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type WithdrawUserDataRequest = {
    /** Coin name */
    coin: string;
    address: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Client id for withdraw */
    withdrawOrderId?: string;
    network?: string;
    /** Secondary address identifier for coins like XRP,XMR etc. */
    addressTag?: string;
    /**
     * When making internal transfer
     * - `true` -> returning the fee to the destination account;
     * - `false` -> returning the fee back to the departure account.
     *
     * @default false
     */
    transactionFeeFlag?: boolean;
    name?: string;
    /** The wallet type for withdraw，0-Spot wallet, 1- Funding wallet. Default is Spot wallet */
    walletType?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class WithdrawUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<WithdrawUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type WithdrawHistorySupportingNetworkUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin name */
    coin?: string;
    withdrawOrderId?: string;
    /**
     * * `0` - Email Sent
     * * `1` - Cancelled
     * * `2` - Awaiting Approval
     * * `3` - Rejected
     * * `4` - Processing
     * * `5` - Failure
     * * `6` - Completed
     */
    status?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    offset?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class WithdrawHistorySupportingNetworkUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<WithdrawHistorySupportingNetworkUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
