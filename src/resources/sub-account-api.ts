import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { fromAccountTypeSchema, type FromAccountType } from "../models/from-account-type.js";
import { isFreezeSchema, type IsFreeze } from "../models/is-freeze.js";
import {
  sapiV1CapitalDepositSubAddressResponseSchema,
  type SapiV1CapitalDepositSubAddressResponse,
} from "../models/sapi-v1-capital-deposit-sub-address-response.js";
import {
  sapiV1CapitalDepositSubHisrecResponseSchema,
  type SapiV1CapitalDepositSubHisrecResponse,
} from "../models/sapi-v1-capital-deposit-sub-hisrec-response.js";
import {
  sapiV1ManagedSubaccountAccountSnapshotResponseSchema,
  type SapiV1ManagedSubaccountAccountSnapshotResponse,
} from "../models/sapi-v1-managed-subaccount-account-snapshot-response.js";
import {
  sapiV1ManagedSubaccountAssetResponseSchema,
  type SapiV1ManagedSubaccountAssetResponse,
} from "../models/sapi-v1-managed-subaccount-asset-response.js";
import {
  sapiV1ManagedSubaccountDepositAddressResponseSchema,
  type SapiV1ManagedSubaccountDepositAddressResponse,
} from "../models/sapi-v1-managed-subaccount-deposit-address-response.js";
import {
  sapiV1ManagedSubaccountDepositResponseSchema,
  type SapiV1ManagedSubaccountDepositResponse,
} from "../models/sapi-v1-managed-subaccount-deposit-response.js";
import {
  sapiV1ManagedSubaccountFetchFutureAssetResponseSchema,
  type SapiV1ManagedSubaccountFetchFutureAssetResponse,
} from "../models/sapi-v1-managed-subaccount-fetch-future-asset-response.js";
import {
  sapiV1ManagedSubaccountInfoResponseSchema,
  type SapiV1ManagedSubaccountInfoResponse,
} from "../models/sapi-v1-managed-subaccount-info-response.js";
import {
  sapiV1ManagedSubaccountMarginAssetResponseSchema,
  type SapiV1ManagedSubaccountMarginAssetResponse,
} from "../models/sapi-v1-managed-subaccount-margin-asset-response.js";
import {
  sapiV1ManagedSubaccountQueryTransLogForInvestorResponseSchema,
  type SapiV1ManagedSubaccountQueryTransLogForInvestorResponse,
} from "../models/sapi-v1-managed-subaccount-query-trans-log-for-investor-response.js";
import {
  sapiV1ManagedSubaccountQueryTransLogForTradeParentResponseSchema,
  type SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse,
} from "../models/sapi-v1-managed-subaccount-query-trans-log-for-trade-parent-response.js";
import {
  sapiV1ManagedSubaccountQueryTransLogResponseSchema,
  type SapiV1ManagedSubaccountQueryTransLogResponse,
} from "../models/sapi-v1-managed-subaccount-query-trans-log-response.js";
import {
  sapiV1ManagedSubaccountWithdrawResponseSchema,
  type SapiV1ManagedSubaccountWithdrawResponse,
} from "../models/sapi-v1-managed-subaccount-withdraw-response.js";
import {
  sapiV1SubAccountBlvtEnableResponseSchema,
  type SapiV1SubAccountBlvtEnableResponse,
} from "../models/sapi-v1-sub-account-blvt-enable-response.js";
import {
  sapiV1SubAccountEoptionsEnableResponseSchema,
  type SapiV1SubAccountEoptionsEnableResponse,
} from "../models/sapi-v1-sub-account-eoptions-enable-response.js";
import {
  sapiV1SubAccountFuturesAccountResponseSchema,
  type SapiV1SubAccountFuturesAccountResponse,
} from "../models/sapi-v1-sub-account-futures-account-response.js";
import {
  sapiV1SubAccountFuturesAccountSummaryResponseSchema,
  type SapiV1SubAccountFuturesAccountSummaryResponse,
} from "../models/sapi-v1-sub-account-futures-account-summary-response.js";
import {
  sapiV1SubAccountFuturesEnableResponseSchema,
  type SapiV1SubAccountFuturesEnableResponse,
} from "../models/sapi-v1-sub-account-futures-enable-response.js";
import {
  sapiV1SubAccountFuturesInternalTransferResponseSchema,
  type SapiV1SubAccountFuturesInternalTransferResponse,
} from "../models/sapi-v1-sub-account-futures-internal-transfer-response.js";
import {
  sapiV1SubAccountFuturesInternalTransferResponse1Schema,
  type SapiV1SubAccountFuturesInternalTransferResponse1,
} from "../models/sapi-v1-sub-account-futures-internal-transfer-response1.js";
import {
  sapiV1SubAccountFuturesPositionRiskResponseSchema,
  type SapiV1SubAccountFuturesPositionRiskResponse,
} from "../models/sapi-v1-sub-account-futures-position-risk-response.js";
import {
  sapiV1SubAccountFuturesTransferResponseSchema,
  type SapiV1SubAccountFuturesTransferResponse,
} from "../models/sapi-v1-sub-account-futures-transfer-response.js";
import {
  sapiV1SubAccountListResponseSchema,
  type SapiV1SubAccountListResponse,
} from "../models/sapi-v1-sub-account-list-response.js";
import {
  sapiV1SubAccountMarginAccountResponseSchema,
  type SapiV1SubAccountMarginAccountResponse,
} from "../models/sapi-v1-sub-account-margin-account-response.js";
import {
  sapiV1SubAccountMarginAccountSummaryResponseSchema,
  type SapiV1SubAccountMarginAccountSummaryResponse,
} from "../models/sapi-v1-sub-account-margin-account-summary-response.js";
import {
  sapiV1SubAccountMarginEnableResponseSchema,
  type SapiV1SubAccountMarginEnableResponse,
} from "../models/sapi-v1-sub-account-margin-enable-response.js";
import {
  sapiV1SubAccountMarginTransferResponseSchema,
  type SapiV1SubAccountMarginTransferResponse,
} from "../models/sapi-v1-sub-account-margin-transfer-response.js";
import {
  sapiV1SubAccountSpotSummaryResponseSchema,
  type SapiV1SubAccountSpotSummaryResponse,
} from "../models/sapi-v1-sub-account-spot-summary-response.js";
import {
  sapiV1SubAccountStatusResponseSchema,
  type SapiV1SubAccountStatusResponse,
} from "../models/sapi-v1-sub-account-status-response.js";
import {
  sapiV1SubAccountSubAccountApiIpRestrictionIpListResponseSchema,
  type SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse,
} from "../models/sapi-v1-sub-account-sub-account-api-ip-restriction-ip-list-response.js";
import {
  sapiV1SubAccountSubAccountApiIpRestrictionResponseSchema,
  type SapiV1SubAccountSubAccountApiIpRestrictionResponse,
} from "../models/sapi-v1-sub-account-sub-account-api-ip-restriction-response.js";
import {
  sapiV1SubAccountSubTransferHistoryResponseSchema,
  type SapiV1SubAccountSubTransferHistoryResponse,
} from "../models/sapi-v1-sub-account-sub-transfer-history-response.js";
import {
  sapiV1SubAccountTransactionStatisticsResponseSchema,
  type SapiV1SubAccountTransactionStatisticsResponse,
} from "../models/sapi-v1-sub-account-transaction-statistics-response.js";
import {
  sapiV1SubAccountTransferSubToMasterResponseSchema,
  type SapiV1SubAccountTransferSubToMasterResponse,
} from "../models/sapi-v1-sub-account-transfer-sub-to-master-response.js";
import {
  sapiV1SubAccountTransferSubToSubResponseSchema,
  type SapiV1SubAccountTransferSubToSubResponse,
} from "../models/sapi-v1-sub-account-transfer-sub-to-sub-response.js";
import {
  sapiV1SubAccountTransferSubUserHistoryResponseSchema,
  type SapiV1SubAccountTransferSubUserHistoryResponse,
} from "../models/sapi-v1-sub-account-transfer-sub-user-history-response.js";
import {
  sapiV1SubAccountUniversalTransferResponseSchema,
  type SapiV1SubAccountUniversalTransferResponse,
} from "../models/sapi-v1-sub-account-universal-transfer-response.js";
import {
  sapiV1SubAccountUniversalTransferResponse1Schema,
  type SapiV1SubAccountUniversalTransferResponse1,
} from "../models/sapi-v1-sub-account-universal-transfer-response1.js";
import {
  sapiV1SubAccountVirtualSubAccountResponseSchema,
  type SapiV1SubAccountVirtualSubAccountResponse,
} from "../models/sapi-v1-sub-account-virtual-sub-account-response.js";
import {
  sapiV2SubAccountSubAccountApiIpRestrictionResponseSchema,
  type SapiV2SubAccountSubAccountApiIpRestrictionResponse,
} from "../models/sapi-v2-sub-account-sub-account-api-ip-restriction-response.js";
import {
  sapiV3SubAccountAssetsResponseSchema,
  type SapiV3SubAccountAssetsResponse,
} from "../models/sapi-v3-sub-account-assets-response.js";
import {
  sapiV4SubAccountAssetsResponseSchema,
  type SapiV4SubAccountAssetsResponse,
} from "../models/sapi-v4-sub-account-assets-response.js";
import { toAccountTypeSchema, type ToAccountType } from "../models/to-account-type.js";
import {
  transferFunctionAccountTypeSchema,
  type TransferFunctionAccountType,
} from "../models/transfer-function-account-type.js";
import { transfersSchema, type Transfers } from "../models/transfers.js";
import {
  sapiV2SubAccountFuturesAccountResponseSchema,
  type SapiV2SubAccountFuturesAccountResponse,
} from "../models/unions/sapi-v2-sub-account-futures-account-response.js";
import {
  sapiV2SubAccountFuturesAccountSummaryResponseSchema,
  type SapiV2SubAccountFuturesAccountSummaryResponse,
} from "../models/unions/sapi-v2-sub-account-futures-account-summary-response.js";
import {
  sapiV2SubAccountFuturesPositionRiskResponseSchema,
  type SapiV2SubAccountFuturesPositionRiskResponse,
} from "../models/unions/sapi-v2-sub-account-futures-position-risk-response.js";
import type { Servers } from "../servers.js";

export class SubAccountApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAVirtualSubAccountForMasterAccount(
    request: SubAccountApi.CreateAVirtualSubAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountVirtualSubAccountResponse,
    SubAccountApi.CreateAVirtualSubAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/virtualSubAccount"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "subAccountString", value: request.subAccountString, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountVirtualSubAccountResponseSchema },
        errorFactory: SubAccountApi.CreateAVirtualSubAccountForMasterAccountError,
      },
      options,
    );
  }

  deleteIpListForASubAccountApiKeyForMasterAccount(
    request: SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse,
    SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "subAccountApiKey", value: request.subAccountApiKey, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "ipAddress", value: request.ipAddress, schema: s.optional(s.string()) },
          { name: "thirdPartyName", value: request.thirdPartyName, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountSubAccountApiIpRestrictionIpListResponseSchema },
        errorFactory: SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountError,
      },
      options,
    );
  }

  depositAssetsIntoTheManagedSubAccountForInvestorMasterAccount(
    request: SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountDepositResponse,
    SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/managed-subaccount/deposit"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "toEmail", value: request.toEmail, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountDepositResponseSchema },
        errorFactory: SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError,
      },
      options,
    );
  }

  detailOnSubAccountSFuturesAccountForMasterAccount(
    request: SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountFuturesAccountResponse,
    SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/futures/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesAccountResponseSchema },
        errorFactory: SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountError,
      },
      options,
    );
  }

  detailOnSubAccountSFuturesAccountV2ForMasterAccount(
    request: SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2SubAccountFuturesAccountResponse,
    SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/sub-account/futures/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "futuresType", value: request.futuresType, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2SubAccountFuturesAccountResponseSchema },
        errorFactory: SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountError,
      },
      options,
    );
  }

  detailOnSubAccountSMarginAccountForMasterAccount(
    request: SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountMarginAccountResponse,
    SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/margin/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountMarginAccountResponseSchema },
        errorFactory: SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountError,
      },
      options,
    );
  }

  enableFuturesForSubAccountForMasterAccount(
    request: SubAccountApi.EnableFuturesForSubAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountFuturesEnableResponse,
    SubAccountApi.EnableFuturesForSubAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/futures/enable"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesEnableResponseSchema },
        errorFactory: SubAccountApi.EnableFuturesForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  enableLeverageTokenForSubAccountForMasterAccount(
    request: SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountBlvtEnableResponse,
    SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/blvt/enable"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "enableBlvt", value: request.enableBlvt, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountBlvtEnableResponseSchema },
        errorFactory: SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  enableMarginForSubAccountForMasterAccount(
    request: SubAccountApi.EnableMarginForSubAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountMarginEnableResponse,
    SubAccountApi.EnableMarginForSubAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/margin/enable"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountMarginEnableResponseSchema },
        errorFactory: SubAccountApi.EnableMarginForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  enableOptionsForSubAccountForMasterAccountUserData(
    request: SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountEoptionsEnableResponse,
    SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/eoptions/enable"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountEoptionsEnableResponseSchema },
        errorFactory: SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataError,
      },
      options,
    );
  }

  futuresPositionRiskOfSubAccountForMasterAccount(
    request: SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountFuturesPositionRiskResponse[],
    SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/futures/positionRisk"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1SubAccountFuturesPositionRiskResponseSchema)),
        },
        errorFactory: SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountError,
      },
      options,
    );
  }

  futuresPositionRiskOfSubAccountV2ForMasterAccount(
    request: SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2SubAccountFuturesPositionRiskResponse,
    SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/sub-account/futures/positionRisk"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "futuresType", value: request.futuresType, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2SubAccountFuturesPositionRiskResponseSchema },
        errorFactory: SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountError,
      },
      options,
    );
  }

  getIpRestrictionForASubAccountApiKeyForMasterAccount(
    request: SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountSubAccountApiIpRestrictionResponse,
    SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/subAccountApi/ipRestriction"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "subAccountApiKey", value: request.subAccountApiKey, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountSubAccountApiIpRestrictionResponseSchema },
        errorFactory: SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountError,
      },
      options,
    );
  }

  getManagedSubAccountDepositAddressForInvestorMasterAccount(
    request: SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountDepositAddressResponse,
    SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/managed-subaccount/deposit/address"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountDepositAddressResponseSchema },
        errorFactory: SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountError,
      },
      options,
    );
  }

  managedSubAccountAssetDetailsForInvestorMasterAccount(
    request: SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountAssetResponse[],
    SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/managed-subaccount/asset"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1ManagedSubaccountAssetResponseSchema)) },
        errorFactory: SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountError,
      },
      options,
    );
  }

  managedSubAccountSnapshotForInvestorMasterAccount(
    request: SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountAccountSnapshotResponse,
    SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/managed-subaccount/accountSnapshot"),
        auth: noneAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "type", value: request.type, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountAccountSnapshotResponseSchema },
        errorFactory: SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountError,
      },
      options,
    );
  }

  marginTransferForSubAccountForMasterAccount(
    request: SubAccountApi.MarginTransferForSubAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountMarginTransferResponse,
    SubAccountApi.MarginTransferForSubAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/margin/transfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "type", value: request.type, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountMarginTransferResponseSchema },
        errorFactory: SubAccountApi.MarginTransferForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  queryManagedSubAccountTransferLogForInvestorMasterAccount(
    request: SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountQueryTransLogForInvestorResponse,
    SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/managed-subaccount/queryTransLogForInvestor"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "transfers", value: request.transfers, schema: s.optional(s.string()) },
          {
            name: "transferFunctionAccountType",
            value: request.transferFunctionAccountType,
            schema: s.optional(s.string()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountQueryTransLogForInvestorResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountError,
      },
      options,
    );
  }

  queryManagedSubAccountTransferLogForTradingTeamMasterAccount(
    request: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse,
    SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/managed-subaccount/queryTransLogForTradeParent"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "transfers", value: request.transfers, schema: s.optional(s.string()) },
          {
            name: "transferFunctionAccountType",
            value: request.transferFunctionAccountType,
            schema: s.optional(s.string()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountQueryTransLogForTradeParentResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError,
      },
      options,
    );
  }

  queryManagedSubAccountTransferLogForTradingTeamSubAccountUserData(
    request: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountQueryTransLogResponse,
    SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/managed-subaccount/query-trans-log"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "transfers", value: request.transfers, schema: transfersSchema },
          {
            name: "transferFunctionAccountType",
            value: request.transferFunctionAccountType,
            schema: transferFunctionAccountTypeSchema,
          },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountQueryTransLogResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError,
      },
      options,
    );
  }

  queryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccount(
    request: SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountFetchFutureAssetResponse,
    SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/managed-subaccount/fetch-future-asset"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountFetchFutureAssetResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError,
      },
      options,
    );
  }

  queryManagedSubAccountListForInvestor(
    request: SubAccountApi.QueryManagedSubAccountListForInvestorRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountInfoResponse,
    SubAccountApi.QueryManagedSubAccountListForInvestorError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/managed-subaccount/info"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountInfoResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountListForInvestorError,
      },
      options,
    );
  }

  queryManagedSubAccountMarginAssetDetailsForInvestorMasterAccount(
    request: SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountMarginAssetResponse,
    SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/managed-subaccount/marginAsset"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountMarginAssetResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError,
      },
      options,
    );
  }

  querySubAccountAssetsForMasterAccount(
    request: SubAccountApi.QuerySubAccountAssetsForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV4SubAccountAssetsResponse, SubAccountApi.QuerySubAccountAssetsForMasterAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v4/sub-account/assets"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV4SubAccountAssetsResponseSchema },
        errorFactory: SubAccountApi.QuerySubAccountAssetsForMasterAccountError,
      },
      options,
    );
  }

  querySubAccountListForMasterAccount(
    request: SubAccountApi.QuerySubAccountListForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SubAccountListResponse, SubAccountApi.QuerySubAccountListForMasterAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "isFreeze", value: request.isFreeze, schema: s.optional(s.lazy(() => isFreezeSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountListResponseSchema },
        errorFactory: SubAccountApi.QuerySubAccountListForMasterAccountError,
      },
      options,
    );
  }

  querySubAccountTransactionStatisticsForMasterAccount(
    request: SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountTransactionStatisticsResponse,
    SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/transaction-statistics"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountTransactionStatisticsResponseSchema },
        errorFactory: SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountError,
      },
      options,
    );
  }

  subAccountAssetsForMasterAccount(
    request: SubAccountApi.SubAccountAssetsForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV3SubAccountAssetsResponse, SubAccountApi.SubAccountAssetsForMasterAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v3/sub-account/assets"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV3SubAccountAssetsResponseSchema },
        errorFactory: SubAccountApi.SubAccountAssetsForMasterAccountError,
      },
      options,
    );
  }

  subAccountDepositHistoryForMasterAccount(
    request: SubAccountApi.SubAccountDepositHistoryForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1CapitalDepositSubHisrecResponse[],
    SubAccountApi.SubAccountDepositHistoryForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/capital/deposit/subHisrec"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1CapitalDepositSubHisrecResponseSchema)) },
        errorFactory: SubAccountApi.SubAccountDepositHistoryForMasterAccountError,
      },
      options,
    );
  }

  subAccountFuturesAssetTransferForMasterAccount(
    request: SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountFuturesInternalTransferResponse1,
    SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/futures/internalTransfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "fromEmail", value: request.fromEmail, schema: s.string() },
          { name: "toEmail", value: request.toEmail, schema: s.string() },
          { name: "futuresType", value: request.futuresType, schema: s.number() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesInternalTransferResponse1Schema },
        errorFactory: SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountError,
      },
      options,
    );
  }

  subAccountFuturesAssetTransferHistoryForMasterAccount(
    request: SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountFuturesInternalTransferResponse,
    SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/futures/internalTransfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "futuresType", value: request.futuresType, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesInternalTransferResponseSchema },
        errorFactory: SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountError,
      },
      options,
    );
  }

  subAccountSpotAssetTransferHistoryForMasterAccount(
    request: SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountSubTransferHistoryResponse[],
    SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/sub/transfer/history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromEmail", value: request.fromEmail, schema: s.optional(s.string()) },
          { name: "toEmail", value: request.toEmail, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1SubAccountSubTransferHistoryResponseSchema)),
        },
        errorFactory: SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountError,
      },
      options,
    );
  }

  subAccountSpotAssetsSummaryForMasterAccount(
    request: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountSpotSummaryResponse,
    SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/spotSummary"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountSpotSummaryResponseSchema },
        errorFactory: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountError,
      },
      options,
    );
  }

  subAccountSpotAssetsSummaryForMasterAccount2(
    request: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Request,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1CapitalDepositSubAddressResponse,
    SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Error
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/capital/deposit/subAddress"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1CapitalDepositSubAddressResponseSchema },
        errorFactory: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Error,
      },
      options,
    );
  }

  subAccountTransferHistoryForSubAccount(
    request: SubAccountApi.SubAccountTransferHistoryForSubAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountTransferSubUserHistoryResponse[],
    SubAccountApi.SubAccountTransferHistoryForSubAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/transfer/subUserHistory"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1SubAccountTransferSubUserHistoryResponseSchema)),
        },
        errorFactory: SubAccountApi.SubAccountTransferHistoryForSubAccountError,
      },
      options,
    );
  }

  subAccountSStatusOnMarginFuturesForMasterAccount(
    request: SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountStatusResponse[],
    SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/status"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1SubAccountStatusResponseSchema)) },
        errorFactory: SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountError,
      },
      options,
    );
  }

  summaryOfSubAccountSFuturesAccountForMasterAccount(
    request: SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountFuturesAccountSummaryResponse,
    SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/futures/accountSummary"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesAccountSummaryResponseSchema },
        errorFactory: SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountError,
      },
      options,
    );
  }

  summaryOfSubAccountSFuturesAccountV2ForMasterAccount(
    request: SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2SubAccountFuturesAccountSummaryResponse,
    SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/sub-account/futures/accountSummary"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "futuresType", value: request.futuresType, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2SubAccountFuturesAccountSummaryResponseSchema },
        errorFactory: SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError,
      },
      options,
    );
  }

  summaryOfSubAccountSMarginAccountForMasterAccount(
    request: SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountMarginAccountSummaryResponse,
    SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/margin/accountSummary"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountMarginAccountSummaryResponseSchema },
        errorFactory: SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountError,
      },
      options,
    );
  }

  transferForSubAccountForMasterAccount(
    request: SubAccountApi.TransferForSubAccountForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountFuturesTransferResponse,
    SubAccountApi.TransferForSubAccountForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/futures/transfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "type", value: request.type, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesTransferResponseSchema },
        errorFactory: SubAccountApi.TransferForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  transferToMasterForSubAccount(
    request: SubAccountApi.TransferToMasterForSubAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountTransferSubToMasterResponse,
    SubAccountApi.TransferToMasterForSubAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/transfer/subToMaster"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountTransferSubToMasterResponseSchema },
        errorFactory: SubAccountApi.TransferToMasterForSubAccountError,
      },
      options,
    );
  }

  transferToSubAccountOfSameMasterForSubAccount(
    request: SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountTransferSubToSubResponse,
    SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/transfer/subToSub"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "toEmail", value: request.toEmail, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountTransferSubToSubResponseSchema },
        errorFactory: SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountError,
      },
      options,
    );
  }

  universalTransferForMasterAccount(
    request: SubAccountApi.UniversalTransferForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountUniversalTransferResponse1,
    SubAccountApi.UniversalTransferForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/sub-account/universalTransfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "fromAccountType", value: request.fromAccountType, schema: fromAccountTypeSchema },
          { name: "toAccountType", value: request.toAccountType, schema: toAccountTypeSchema },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromEmail", value: request.fromEmail, schema: s.optional(s.string()) },
          { name: "toEmail", value: request.toEmail, schema: s.optional(s.string()) },
          { name: "clientTranId", value: request.clientTranId, schema: s.optional(s.string()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountUniversalTransferResponse1Schema },
        errorFactory: SubAccountApi.UniversalTransferForMasterAccountError,
      },
      options,
    );
  }

  universalTransferHistoryForMasterAccount(
    request: SubAccountApi.UniversalTransferHistoryForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1SubAccountUniversalTransferResponse[],
    SubAccountApi.UniversalTransferHistoryForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/sub-account/universalTransfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromEmail", value: request.fromEmail, schema: s.optional(s.string()) },
          { name: "toEmail", value: request.toEmail, schema: s.optional(s.string()) },
          { name: "clientTranId", value: request.clientTranId, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1SubAccountUniversalTransferResponseSchema)),
        },
        errorFactory: SubAccountApi.UniversalTransferHistoryForMasterAccountError,
      },
      options,
    );
  }

  updateIpRestrictionForSubAccountApiKeyForMasterAccount(
    request: SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2SubAccountSubAccountApiIpRestrictionResponse,
    SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v2/sub-account/subAccountApi/ipRestriction"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "subAccountApiKey", value: request.subAccountApiKey, schema: s.string() },
          { name: "status", value: request.status, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "thirdPartyName", value: request.thirdPartyName, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2SubAccountSubAccountApiIpRestrictionResponseSchema },
        errorFactory: SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError,
      },
      options,
    );
  }

  withdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccount(
    request: SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1ManagedSubaccountWithdrawResponse,
    SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/managed-subaccount/withdraw"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "fromEmail", value: request.fromEmail, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "transferDate", value: request.transferDate, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountWithdrawResponseSchema },
        errorFactory: SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError,
      },
      options,
    );
  }
}

export namespace SubAccountApi {
  export type CreateAVirtualSubAccountForMasterAccountRequest = {
    subAccountString: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CreateAVirtualSubAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CreateAVirtualSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteIpListForASubAccountApiKeyForMasterAccountRequest = {
    email: string;
    subAccountApiKey: string;
    timestamp: number;
    signature: string;
    ipAddress?: string;
    thirdPartyName?: string;
    recvWindow?: number;
  };

  export class DeleteIpListForASubAccountApiKeyForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteIpListForASubAccountApiKeyForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountRequest = {
    toEmail: string;
    asset: string;
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DetailOnSubAccountSFuturesAccountForMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class DetailOnSubAccountSFuturesAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DetailOnSubAccountSFuturesAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DetailOnSubAccountSFuturesAccountV2ForMasterAccountRequest = {
    email: string;
    futuresType: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class DetailOnSubAccountSFuturesAccountV2ForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DetailOnSubAccountSFuturesAccountV2ForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DetailOnSubAccountSMarginAccountForMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class DetailOnSubAccountSMarginAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DetailOnSubAccountSMarginAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableFuturesForSubAccountForMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class EnableFuturesForSubAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EnableFuturesForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableLeverageTokenForSubAccountForMasterAccountRequest = {
    email: string;
    enableBlvt: boolean;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class EnableLeverageTokenForSubAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EnableLeverageTokenForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableMarginForSubAccountForMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class EnableMarginForSubAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EnableMarginForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableOptionsForSubAccountForMasterAccountUserDataRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class EnableOptionsForSubAccountForMasterAccountUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EnableOptionsForSubAccountForMasterAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FuturesPositionRiskOfSubAccountForMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class FuturesPositionRiskOfSubAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FuturesPositionRiskOfSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FuturesPositionRiskOfSubAccountV2ForMasterAccountRequest = {
    email: string;
    futuresType: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class FuturesPositionRiskOfSubAccountV2ForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FuturesPositionRiskOfSubAccountV2ForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetIpRestrictionForASubAccountApiKeyForMasterAccountRequest = {
    email: string;
    subAccountApiKey: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetIpRestrictionForASubAccountApiKeyForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetIpRestrictionForASubAccountApiKeyForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetManagedSubAccountDepositAddressForInvestorMasterAccountRequest = {
    email: string;
    coin: string;
    timestamp: number;
    signature: string;
    network?: string;
    recvWindow?: number;
  };

  export class GetManagedSubAccountDepositAddressForInvestorMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetManagedSubAccountDepositAddressForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ManagedSubAccountAssetDetailsForInvestorMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class ManagedSubAccountAssetDetailsForInvestorMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ManagedSubAccountAssetDetailsForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ManagedSubAccountSnapshotForInvestorMasterAccountRequest = {
    email: string;
    type: string;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class ManagedSubAccountSnapshotForInvestorMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ManagedSubAccountSnapshotForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginTransferForSubAccountForMasterAccountRequest = {
    email: string;
    asset: string;
    amount: number;
    type: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class MarginTransferForSubAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<MarginTransferForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryManagedSubAccountTransferLogForInvestorMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    transfers?: string;
    transferFunctionAccountType?: string;
    recvWindow?: number;
  };

  export class QueryManagedSubAccountTransferLogForInvestorMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryManagedSubAccountTransferLogForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryManagedSubAccountTransferLogForTradingTeamMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    transfers?: string;
    transferFunctionAccountType?: string;
    recvWindow?: number;
  };

  export class QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataRequest = {
    transfers: Transfers;
    transferFunctionAccountType: TransferFunctionAccountType;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryManagedSubAccountListForInvestorRequest = {
    email: string;
    timestamp: number;
    signature: string;
    page?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QueryManagedSubAccountListForInvestorError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryManagedSubAccountListForInvestorError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubAccountAssetsForMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QuerySubAccountAssetsForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QuerySubAccountAssetsForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubAccountListForMasterAccountRequest = {
    timestamp: number;
    signature: string;
    email?: string;
    isFreeze?: IsFreeze;
    page?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class QuerySubAccountListForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QuerySubAccountListForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubAccountTransactionStatisticsForMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QuerySubAccountTransactionStatisticsForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QuerySubAccountTransactionStatisticsForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountAssetsForMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SubAccountAssetsForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubAccountAssetsForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountDepositHistoryForMasterAccountRequest = {
    email: string;
    timestamp: number;
    signature: string;
    coin?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    offset?: number;
    recvWindow?: number;
  };

  export class SubAccountDepositHistoryForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubAccountDepositHistoryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountFuturesAssetTransferForMasterAccountRequest = {
    fromEmail: string;
    toEmail: string;
    futuresType: number;
    asset: string;
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SubAccountFuturesAssetTransferForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubAccountFuturesAssetTransferForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountFuturesAssetTransferHistoryForMasterAccountRequest = {
    email: string;
    futuresType: number;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class SubAccountFuturesAssetTransferHistoryForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubAccountFuturesAssetTransferHistoryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountSpotAssetTransferHistoryForMasterAccountRequest = {
    timestamp: number;
    signature: string;
    fromEmail?: string;
    toEmail?: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class SubAccountSpotAssetTransferHistoryForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubAccountSpotAssetTransferHistoryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountSpotAssetsSummaryForMasterAccountRequest = {
    timestamp: number;
    signature: string;
    email?: string;
    page?: number;
    size?: number;
    recvWindow?: number;
  };

  export class SubAccountSpotAssetsSummaryForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubAccountSpotAssetsSummaryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountSpotAssetsSummaryForMasterAccount2Request = {
    email: string;
    coin: string;
    timestamp: number;
    signature: string;
    network?: string;
    recvWindow?: number;
  };

  export class SubAccountSpotAssetsSummaryForMasterAccount2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubAccountSpotAssetsSummaryForMasterAccount2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountTransferHistoryForSubAccountRequest = {
    timestamp: number;
    signature: string;
    asset?: string;
    type?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class SubAccountTransferHistoryForSubAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubAccountTransferHistoryForSubAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountSStatusOnMarginFuturesForMasterAccountRequest = {
    timestamp: number;
    signature: string;
    email?: string;
    recvWindow?: number;
  };

  export class SubAccountSStatusOnMarginFuturesForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubAccountSStatusOnMarginFuturesForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SummaryOfSubAccountSFuturesAccountForMasterAccountRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SummaryOfSubAccountSFuturesAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SummaryOfSubAccountSFuturesAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SummaryOfSubAccountSFuturesAccountV2ForMasterAccountRequest = {
    futuresType: number;
    timestamp: number;
    signature: string;
    page?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SummaryOfSubAccountSMarginAccountForMasterAccountRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SummaryOfSubAccountSMarginAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SummaryOfSubAccountSMarginAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TransferForSubAccountForMasterAccountRequest = {
    email: string;
    asset: string;
    amount: number;
    type: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class TransferForSubAccountForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<TransferForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TransferToMasterForSubAccountRequest = {
    asset: string;
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class TransferToMasterForSubAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<TransferToMasterForSubAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TransferToSubAccountOfSameMasterForSubAccountRequest = {
    toEmail: string;
    asset: string;
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class TransferToSubAccountOfSameMasterForSubAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<TransferToSubAccountOfSameMasterForSubAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UniversalTransferForMasterAccountRequest = {
    fromAccountType: FromAccountType;
    toAccountType: ToAccountType;
    asset: string;
    amount: number;
    timestamp: number;
    signature: string;
    fromEmail?: string;
    toEmail?: string;
    clientTranId?: string;
    symbol?: string;
    recvWindow?: number;
  };

  export class UniversalTransferForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<UniversalTransferForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UniversalTransferHistoryForMasterAccountRequest = {
    timestamp: number;
    signature: string;
    fromEmail?: string;
    toEmail?: string;
    clientTranId?: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
  };

  export class UniversalTransferHistoryForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<UniversalTransferHistoryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateIpRestrictionForSubAccountApiKeyForMasterAccountRequest = {
    email: string;
    subAccountApiKey: string;
    status: string;
    timestamp: number;
    signature: string;
    thirdPartyName?: string;
    recvWindow?: number;
  };

  export class UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountRequest = {
    fromEmail: string;
    asset: string;
    amount: number;
    timestamp: number;
    signature: string;
    transferDate?: number;
    recvWindow?: number;
  };

  export class WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
