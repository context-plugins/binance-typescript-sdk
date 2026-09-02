import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, noneAuth, s } from "../core/index.js";
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

export class Wallet {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  accountApiTradingStatusUserData(
    request: Wallet.AccountApiTradingStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountApiTradingStatusResponse, Wallet.AccountApiTradingStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/account/apiTradingStatus"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AccountApiTradingStatusResponseSchema },
        errorFactory: Wallet.AccountApiTradingStatusUserDataError,
      },
      options,
    );
  }

  accountStatusUserData(
    request: Wallet.AccountStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountStatusResponse, Wallet.AccountStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/account/status"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AccountStatusResponseSchema },
        errorFactory: Wallet.AccountStatusUserDataError,
      },
      options,
    );
  }

  accountInfoUserData(
    request: Wallet.AccountInfoUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountInfoResponse, Wallet.AccountInfoUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/account/info"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AccountInfoResponseSchema },
        errorFactory: Wallet.AccountInfoUserDataError,
      },
      options,
    );
  }

  allCoinsInformationUserData(
    request: Wallet.AllCoinsInformationUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalConfigGetallResponse[], Wallet.AllCoinsInformationUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/capital/config/getall"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1CapitalConfigGetallResponseSchema)) },
        errorFactory: Wallet.AllCoinsInformationUserDataError,
      },
      options,
    );
  }

  assetDetailUserData(
    request: Wallet.AssetDetailUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetAssetDetailResponse, Wallet.AssetDetailUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/asset/assetDetail"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetAssetDetailResponseSchema },
        errorFactory: Wallet.AssetDetailUserDataError,
      },
      options,
    );
  }

  assetDividendRecordUserData(
    request: Wallet.AssetDividendRecordUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetAssetDividendResponse, Wallet.AssetDividendRecordUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/asset/assetDividend"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 20) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetAssetDividendResponseSchema },
        errorFactory: Wallet.AssetDividendRecordUserDataError,
      },
      options,
    );
  }

  convertTransferUserData(
    request: Wallet.ConvertTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetConvertTransferResponse, Wallet.ConvertTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/asset/convert-transfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "clientTranId", value: request.clientTranId, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "targetAsset", value: request.targetAsset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetConvertTransferResponseSchema },
        errorFactory: Wallet.ConvertTransferUserDataError,
      },
      options,
    );
  }

  dailyAccountSnapshotUserData(
    request: Wallet.DailyAccountSnapshotUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountSnapshotResponse, Wallet.DailyAccountSnapshotUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/accountSnapshot"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "type", value: request.type, schema: type6Schema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 7) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AccountSnapshotResponseSchema },
        errorFactory: Wallet.DailyAccountSnapshotUserDataError,
      },
      options,
    );
  }

  depositAddressSupportingNetworkUserData(
    request: Wallet.DepositAddressSupportingNetworkUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalDepositAddressResponse, Wallet.DepositAddressSupportingNetworkUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/capital/deposit/address"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CapitalDepositAddressResponseSchema },
        errorFactory: Wallet.DepositAddressSupportingNetworkUserDataError,
      },
      options,
    );
  }

  depositHistorySupportingNetworkUserData(
    request: Wallet.DepositHistorySupportingNetworkUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalDepositHisrecResponse[], Wallet.DepositHistorySupportingNetworkUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/capital/deposit/hisrec"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1CapitalDepositHisrecResponseSchema)) },
        errorFactory: Wallet.DepositHistorySupportingNetworkUserDataError,
      },
      options,
    );
  }

  disableFastWithdrawSwitchUserData(
    request: Wallet.DisableFastWithdrawSwitchUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Wallet.DisableFastWithdrawSwitchUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/account/disableFastWithdrawSwitch"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Wallet.DisableFastWithdrawSwitchUserDataError,
      },
      options,
    );
  }

  dustTransferUserData(
    request: Wallet.DustTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetDustResponse, Wallet.DustTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/asset/dust"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.array(s.string()) },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "accountType",
            value: request.accountType,
            schema: s.optional(s.lazy(() => accountTypeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetDustResponseSchema },
        errorFactory: Wallet.DustTransferUserDataError,
      },
      options,
    );
  }

  dustLogUserData(
    request: Wallet.DustLogUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetDribbletResponse, Wallet.DustLogUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/asset/dribblet"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "accountType",
            value: request.accountType,
            schema: s.optional(s.lazy(() => accountTypeSchema)),
          },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetDribbletResponseSchema },
        errorFactory: Wallet.DustLogUserDataError,
      },
      options,
    );
  }

  enableFastWithdrawSwitchUserData(
    request: Wallet.EnableFastWithdrawSwitchUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Wallet.EnableFastWithdrawSwitchUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/account/enableFastWithdrawSwitch"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Wallet.EnableFastWithdrawSwitchUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/capital/deposit/address/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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

  fetchWithdrawAddressListUserData(
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalWithdrawAddressListResponse[], Wallet.FetchWithdrawAddressListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/capital/withdraw/address/list"),
        auth: this.#auth.apiKeyAuth,
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

  fundingWalletUserData(
    request: Wallet.FundingWalletUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetGetFundingAssetResponse[], Wallet.FundingWalletUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/asset/get-funding-asset"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          {
            name: "needBtcValuation",
            value: request.needBtcValuation,
            schema: s.optional(s.lazy(() => needBtcValuationSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1AssetGetFundingAssetResponseSchema)) },
        errorFactory: Wallet.FundingWalletUserDataError,
      },
      options,
    );
  }

  getApiKeyPermissionUserData(
    request: Wallet.GetApiKeyPermissionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AccountApiRestrictionsResponse, Wallet.GetApiKeyPermissionUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/account/apiRestrictions"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AccountApiRestrictionsResponseSchema },
        errorFactory: Wallet.GetApiKeyPermissionUserDataError,
      },
      options,
    );
  }

  getAssetsThatCanBeConvertedIntoBnbUserData(
    request: Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetDustBtcResponse, Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/asset/dust-btc"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          {
            name: "accountType",
            value: request.accountType,
            schema: s.optional(s.lazy(() => accountTypeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetDustBtcResponseSchema },
        errorFactory: Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "startTime", value: request.startTime, schema: s.number() },
          { name: "endTime", value: request.endTime, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tranId", value: request.tranId, schema: s.optional(s.number()) },
          { name: "clientTranId", value: request.clientTranId, schema: s.optional(s.string()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetLedgerTransferCloudMiningQueryByPageResponseSchema },
        errorFactory: Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataError,
      },
      options,
    );
  }

  getSymbolsDelistScheduleForSpotMarketData(
    request: Wallet.GetSymbolsDelistScheduleForSpotMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SpotDelistScheduleResponse[], Wallet.GetSymbolsDelistScheduleForSpotMarketDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/spot/delist-schedule"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1SpotDelistScheduleResponseSchema)) },
        errorFactory: Wallet.GetSymbolsDelistScheduleForSpotMarketDataError,
      },
      options,
    );
  }

  oneClickArrivalDepositApplyUserData(
    request: Wallet.OneClickArrivalDepositApplyUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalDepositCreditApplyResponse, Wallet.OneClickArrivalDepositApplyUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/capital/deposit/credit-apply"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "depositId", value: request.depositId, schema: s.optional(s.number()) },
          { name: "txId", value: request.txId, schema: s.optional(s.string()) },
          { name: "subAccountId", value: request.subAccountId, schema: s.optional(s.number()) },
          { name: "subUserId", value: request.subUserId, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CapitalDepositCreditApplyResponseSchema },
        errorFactory: Wallet.OneClickArrivalDepositApplyUserDataError,
      },
      options,
    );
  }

  queryConvertTransferUserData(
    request: Wallet.QueryConvertTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetConvertTransferQueryByPageResponse, Wallet.QueryConvertTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/asset/convert-transfer/queryByPage"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "startTime", value: request.startTime, schema: s.number() },
          { name: "endTime", value: request.endTime, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "tranId", value: request.tranId, schema: s.optional(s.number()) },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          {
            name: "accountType",
            value: request.accountType,
            schema: s.optional(s.lazy(() => accountType3Schema)),
          },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetConvertTransferQueryByPageResponseSchema },
        errorFactory: Wallet.QueryConvertTransferUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/asset/custody/transfer-history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.number() },
          { name: "endTime", value: request.endTime, schema: s.number() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetCustodyTransferHistoryResponseSchema },
        errorFactory: Wallet.QueryUserDelegationHistoryForMasterAccountUserDataError,
      },
      options,
    );
  }

  queryUserUniversalTransferHistoryUserData(
    request: Wallet.QueryUserUniversalTransferHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetTransferResponse, Wallet.QueryUserUniversalTransferHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/asset/transfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "type", value: request.type, schema: type7Schema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "current", value: request.current, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "fromSymbol", value: request.fromSymbol, schema: s.optional(s.string()) },
          { name: "toSymbol", value: request.toSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetTransferResponseSchema },
        errorFactory: Wallet.QueryUserUniversalTransferHistoryUserDataError,
      },
      options,
    );
  }

  queryUserWalletBalanceUserData(
    request: Wallet.QueryUserWalletBalanceUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetWalletBalanceResponse[], Wallet.QueryUserWalletBalanceUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/asset/wallet/balance"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1AssetWalletBalanceResponseSchema)) },
        errorFactory: Wallet.QueryUserWalletBalanceUserDataError,
      },
      options,
    );
  }

  queryAutoConvertingStableCoinsUserData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1CapitalContractConvertibleCoinsResponse,
    Wallet.QueryAutoConvertingStableCoinsUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/capital/contract/convertible-coins"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CapitalContractConvertibleCoinsResponseSchema },
        errorFactory: Wallet.QueryAutoConvertingStableCoinsUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/capital/contract/convertible-coins"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "enable", value: request.enable, schema: s.boolean() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError,
      },
      options,
    );
  }

  systemStatusSystem(options?: RequestOptions): ApiPromise<SapiV1SystemStatusResponse, ResponseError> {
    return this.#rawClient.execute<SapiV1SystemStatusResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/system/status"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SystemStatusResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  tradeFeeUserData(
    request: Wallet.TradeFeeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetTradeFeeResponse[], Wallet.TradeFeeUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/asset/tradeFee"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1AssetTradeFeeResponseSchema)) },
        errorFactory: Wallet.TradeFeeUserDataError,
      },
      options,
    );
  }

  userAssetUserData(
    request: Wallet.UserAssetUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV3AssetGetUserAssetResponse[], Wallet.UserAssetUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v3/asset/getUserAsset"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          {
            name: "needBtcValuation",
            value: request.needBtcValuation,
            schema: s.optional(s.lazy(() => needBtcValuationSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV3AssetGetUserAssetResponseSchema)) },
        errorFactory: Wallet.UserAssetUserDataError,
      },
      options,
    );
  }

  userUniversalTransferUserData(
    request: Wallet.UserUniversalTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1AssetTransferResponse1, Wallet.UserUniversalTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/asset/transfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "type", value: request.type, schema: type7Schema },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromSymbol", value: request.fromSymbol, schema: s.optional(s.string()) },
          { name: "toSymbol", value: request.toSymbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1AssetTransferResponse1Schema },
        errorFactory: Wallet.UserUniversalTransferUserDataError,
      },
      options,
    );
  }

  withdrawUserData(
    request: Wallet.WithdrawUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1CapitalWithdrawApplyResponse, Wallet.WithdrawUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/capital/withdraw/apply"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "address", value: request.address, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
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
          { name: "walletType", value: request.walletType, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CapitalWithdrawApplyResponseSchema },
        errorFactory: Wallet.WithdrawUserDataError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/sapi/v1/capital/withdraw/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "withdrawOrderId", value: request.withdrawOrderId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
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
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class AccountApiTradingStatusUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AccountApiTradingStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AccountStatusUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class AccountStatusUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AccountStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AccountInfoUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class AccountInfoUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AccountInfoUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AllCoinsInformationUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class AllCoinsInformationUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AllCoinsInformationUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AssetDetailUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    recvWindow?: number;
  };

  export class AssetDetailUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AssetDetailUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AssetDividendRecordUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class AssetDividendRecordUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AssetDividendRecordUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ConvertTransferUserDataRequest = {
    clientTranId: string;
    asset: string;
    amount: number;
    targetAsset: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class ConvertTransferUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ConvertTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DailyAccountSnapshotUserDataRequest = {
    type: Type6;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class DailyAccountSnapshotUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DailyAccountSnapshotUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DepositAddressSupportingNetworkUserDataRequest = {
    coin: string;
    timestamp: number;
    signature: string;
    network?: string;
    recvWindow?: number;
  };

  export class DepositAddressSupportingNetworkUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DepositAddressSupportingNetworkUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DepositHistorySupportingNetworkUserDataRequest = {
    timestamp: number;
    signature: string;
    coin?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    offset?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class DepositHistorySupportingNetworkUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DepositHistorySupportingNetworkUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DisableFastWithdrawSwitchUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class DisableFastWithdrawSwitchUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DisableFastWithdrawSwitchUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DustTransferUserDataRequest = {
    asset: string[];
    timestamp: number;
    signature: string;
    accountType?: AccountType;
    recvWindow?: number;
  };

  export class DustTransferUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DustTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DustLogUserDataRequest = {
    timestamp: number;
    signature: string;
    accountType?: AccountType;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
  };

  export class DustLogUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DustLogUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableFastWithdrawSwitchUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class EnableFastWithdrawSwitchUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EnableFastWithdrawSwitchUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchDepositAddressListWithNetworkUserDataRequest = {
    coin: string;
    timestamp: number;
    signature: string;
    network?: string;
    recvWindow?: number;
  };

  export class FetchDepositAddressListWithNetworkUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FetchDepositAddressListWithNetworkUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class FetchWithdrawAddressListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FetchWithdrawAddressListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FundingWalletUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    needBtcValuation?: NeedBtcValuation;
    recvWindow?: number;
  };

  export class FundingWalletUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FundingWalletUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiKeyPermissionUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetApiKeyPermissionUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetApiKeyPermissionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAssetsThatCanBeConvertedIntoBnbUserDataRequest = {
    timestamp: number;
    signature: string;
    accountType?: AccountType;
    recvWindow?: number;
  };

  export class GetAssetsThatCanBeConvertedIntoBnbUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAssetsThatCanBeConvertedIntoBnbUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCloudMiningPaymentAndRefundHistoryUserDataRequest = {
    startTime: number;
    endTime: number;
    timestamp: number;
    signature: string;
    tranId?: number;
    clientTranId?: string;
    asset?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class GetCloudMiningPaymentAndRefundHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetCloudMiningPaymentAndRefundHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSymbolsDelistScheduleForSpotMarketDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetSymbolsDelistScheduleForSpotMarketDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetSymbolsDelistScheduleForSpotMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type OneClickArrivalDepositApplyUserDataRequest = {
    timestamp: number;
    signature: string;
    depositId?: number;
    txId?: string;
    subAccountId?: number;
    subUserId?: number;
    recvWindow?: number;
  };

  export class OneClickArrivalDepositApplyUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<OneClickArrivalDepositApplyUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryConvertTransferUserDataRequest = {
    startTime: number;
    endTime: number;
    timestamp: number;
    signature: string;
    tranId?: number;
    asset?: string;
    accountType?: AccountType3;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class QueryConvertTransferUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
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
    timestamp: number;
    signature: string;
    type?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
  };

  export class QueryUserDelegationHistoryForMasterAccountUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryUserDelegationHistoryForMasterAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryUserUniversalTransferHistoryUserDataRequest = {
    type: Type7;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    fromSymbol?: string;
    toSymbol?: string;
    recvWindow?: number;
  };

  export class QueryUserUniversalTransferHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryUserUniversalTransferHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryUserWalletBalanceUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryUserWalletBalanceUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryUserWalletBalanceUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class QueryAutoConvertingStableCoinsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryAutoConvertingStableCoinsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataRequest = {
    coin: string;
    enable: boolean;
  };

  export class SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TradeFeeUserDataRequest = {
    timestamp: number;
    signature: string;
    symbol?: string;
    recvWindow?: number;
  };

  export class TradeFeeUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<TradeFeeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UserAssetUserDataRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    needBtcValuation?: NeedBtcValuation;
    recvWindow?: number;
  };

  export class UserAssetUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<UserAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UserUniversalTransferUserDataRequest = {
    type: Type7;
    asset: string;
    amount: number;
    timestamp: number;
    signature: string;
    fromSymbol?: string;
    toSymbol?: string;
    recvWindow?: number;
  };

  export class UserUniversalTransferUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<UserUniversalTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type WithdrawUserDataRequest = {
    coin: string;
    address: string;
    amount: number;
    timestamp: number;
    signature: string;
    withdrawOrderId?: string;
    network?: string;
    addressTag?: string;
    transactionFeeFlag?: boolean;
    name?: string;
    walletType?: number;
    recvWindow?: number;
  };

  export class WithdrawUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<WithdrawUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type WithdrawHistorySupportingNetworkUserDataRequest = {
    timestamp: number;
    signature: string;
    coin?: string;
    withdrawOrderId?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    offset?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class WithdrawHistorySupportingNetworkUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<WithdrawHistorySupportingNetworkUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
