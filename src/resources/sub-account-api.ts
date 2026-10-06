import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Sub-account Endpoints
 */
export class SubAccountApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Virtual Sub-account(For Master Account)
   *
   * @remarks
   * - This request will generate a virtual sub account under your master account.
   * - You need to enable "trade" option for the api key which requests this endpoint.
   *
   * Weight(IP): 1
   *
   * @returns Return the created virtual email
   *
   * @throws {@link SubAccountApi.CreateAVirtualSubAccountForMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/virtualSubAccount"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "subAccountString", value: request.subAccountString, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountVirtualSubAccountResponseSchema },
        errorFactory: SubAccountApi.CreateAVirtualSubAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Delete IP List for a Sub-account API Key (For Master Account)
   *
   * @remarks
   * Weight(UID): 3000
   *
   * @returns Delete IP information
   *
   * @throws {@link SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "subAccountApiKey", value: request.subAccountApiKey, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "ipAddress", value: request.ipAddress, schema: s.optional(s.string()) },
          { name: "thirdPartyName", value: request.thirdPartyName, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountSubAccountApiIpRestrictionIpListResponseSchema },
        errorFactory: SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Deposit assets into the managed sub-account(For Investor Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Transfer id
   *
   * @throws {@link
   * SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/deposit"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "toEmail", value: request.toEmail, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountDepositResponseSchema },
        errorFactory: SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError,
      },
      options,
    );
  }

  /**
   * Detail on Sub-account's Futures Account (For Master Account)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns Futures account details
   *
   * @throws {@link SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/futures/account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesAccountResponseSchema },
        errorFactory: SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Detail on Sub-account's Futures Account V2 (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns USDT or COIN Margined Futures Details
   *
   * @throws {@link SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v2/sub-account/futures/account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "futuresType", value: request.futuresType, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2SubAccountFuturesAccountResponseSchema },
        errorFactory: SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Detail on Sub-account's Margin Account (For Master Account)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns Margin sub-account details
   *
   * @throws {@link SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/margin/account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountMarginAccountResponseSchema },
        errorFactory: SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Enable Futures for Sub-account (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Futures status
   *
   * @throws {@link SubAccountApi.EnableFuturesForSubAccountForMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/futures/enable"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesEnableResponseSchema },
        errorFactory: SubAccountApi.EnableFuturesForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Enable Leverage Token for Sub-account (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns BLVT status
   *
   * @throws {@link SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/blvt/enable"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "enableBlvt", value: request.enableBlvt, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountBlvtEnableResponseSchema },
        errorFactory: SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Enable Margin for Sub-account (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Margin status
   *
   * @throws {@link SubAccountApi.EnableMarginForSubAccountForMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/margin/enable"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountMarginEnableResponseSchema },
        errorFactory: SubAccountApi.EnableMarginForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Enable Options for Sub-account (For Master Account)(USER_DATA)
   *
   * @remarks
   * Enable Options for Sub-account (For Master Account).
   *
   * Weight(IP): 1
   *
   * @returns Sub account EOptions status
   *
   * @throws {@link SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/eoptions/enable"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountEoptionsEnableResponseSchema },
        errorFactory: SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataError,
      },
      options,
    );
  }

  /**
   * Futures Position-Risk of Sub-account (For Master Account)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns Futures account summary
   *
   * @throws {@link SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/futures/positionRisk"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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

  /**
   * Futures Position-Risk of Sub-account V2 (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns USDT or COIN Margined Futures Position Risk
   *
   * @throws {@link SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v2/sub-account/futures/positionRisk"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "futuresType", value: request.futuresType, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2SubAccountFuturesPositionRiskResponseSchema },
        errorFactory: SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Get IP Restriction for a Sub-account API Key (For Master Account)
   *
   * @remarks
   * Weight(UID): 3000
   *
   * @returns IP Restriction information
   *
   * @throws {@link SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/subAccountApi/ipRestriction"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "subAccountApiKey", value: request.subAccountApiKey, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountSubAccountApiIpRestrictionResponseSchema },
        errorFactory: SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Get Managed Sub-account Deposit Address (For Investor Master Account)
   *
   * @remarks
   * Get investor's managed sub-account deposit address
   *
   * Weight(UID): 1
   *
   * @returns Managed sub deposit address
   *
   * @throws {@link SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/deposit/address"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
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
        success: { kind: "json", schema: sapiV1ManagedSubaccountDepositAddressResponseSchema },
        errorFactory: SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountError,
      },
      options,
    );
  }

  /**
   * Managed sub-account asset details(For Investor Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns List of asset details
   *
   * @throws {@link SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/asset"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1ManagedSubaccountAssetResponseSchema)) },
        errorFactory: SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountError,
      },
      options,
    );
  }

  /**
   * Managed sub-account snapshot (For Investor Master Account)
   *
   * @remarks
   * - The query time period must be less then 30 days
   * - Support query within the last one month only
   * - If `startTime` and `endTime` not sent, return records of the last 7 days by default
   *
   * Weight(IP): 2400
   *
   * @returns Sub-account spot snapshot
   *
   * @throws {@link SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/accountSnapshot"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "type", value: request.type, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountAccountSnapshotResponseSchema },
        errorFactory: SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountError,
      },
      options,
    );
  }

  /**
   * Margin Transfer for Sub-account (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Transfer id
   *
   * @throws {@link SubAccountApi.MarginTransferForSubAccountForMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/margin/transfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "type", value: request.type, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountMarginTransferResponseSchema },
        errorFactory: SubAccountApi.MarginTransferForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Query Managed Sub Account Transfer Log (For Investor Master Account)
   *
   * @remarks
   * Investor can use this api to query managed sub account transfer log. This endpoint is available
   * for investor of Managed Sub-Account. A Managed Sub-Account is an account type for investors who
   * value flexibility in asset allocation and account application, while delegating trades to a
   * professional trading team.
   *
   * Weight(IP): 1
   *
   * @returns Managed sub account transfer logs (for invest account)
   *
   * @throws {@link SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/queryTransLogForInvestor"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "transfers", value: request.transfers, schema: s.optional(s.string()) },
          {
            name: "transferFunctionAccountType",
            value: request.transferFunctionAccountType,
            schema: s.optional(s.string()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountQueryTransLogForInvestorResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountError,
      },
      options,
    );
  }

  /**
   * Query Managed Sub Account Transfer Log (For Trading Team Master Account)
   *
   * @remarks
   * Trading team can use this api to query managed sub account transfer log. This endpoint is
   * available for trading team of Managed Sub-Account. A Managed Sub-Account is an account type for
   * investors who value flexibility in asset allocation and account application, while delegating
   * trades to a professional trading team
   *
   * Weight(IP): 60
   *
   * @returns Managed sub account transfer logs (for trading team)
   *
   * @throws {@link SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/queryTransLogForTradeParent"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "transfers", value: request.transfers, schema: s.optional(s.string()) },
          {
            name: "transferFunctionAccountType",
            value: request.transferFunctionAccountType,
            schema: s.optional(s.string()),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountQueryTransLogForTradeParentResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError,
      },
      options,
    );
  }

  /**
   * Query Managed Sub Account Transfer Log (For Trading Team Sub Account)(USER_DATA)
   *
   * @remarks
   * Query Managed Sub Account Transfer Log (For Trading Team Sub Account)
   *
   * Weight(UID): 60
   *
   * @returns Managed sub deposit address
   *
   * @throws {@link
   * SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/query-trans-log"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "transfers", value: request.transfers, schema: transfersSchema },
          {
            name: "transferFunctionAccountType",
            value: request.transferFunctionAccountType,
            schema: transferFunctionAccountTypeSchema,
          },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountQueryTransLogResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError,
      },
      options,
    );
  }

  /**
   * Query Managed Sub-account Futures Asset Details (For Investor Master Account)
   *
   * @remarks
   * Investor can use this api to query managed sub account futures asset details
   *
   * @returns Sub account futures assset details
   *
   * @throws {@link
   * SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/fetch-future-asset"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountFetchFutureAssetResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError,
      },
      options,
    );
  }

  /**
   * Query Managed Sub-account List (For Investor)
   *
   * @remarks
   * Get investor's managed sub-account list.
   *
   * Weight(UID): 60
   *
   * @returns Managed sub account list
   *
   * @throws {@link SubAccountApi.QueryManagedSubAccountListForInvestorError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/info"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountInfoResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountListForInvestorError,
      },
      options,
    );
  }

  /**
   * Query Managed Sub-account Margin Asset Details (For Investor Master Account)
   *
   * @remarks
   * Investor can use this api to query managed sub account margin asset details
   *
   * @returns Sub account margin assset details
   *
   * @throws {@link
   * SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/marginAsset"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ManagedSubaccountMarginAssetResponseSchema },
        errorFactory: SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError,
      },
      options,
    );
  }

  /**
   * Query Sub-account Assets (For Master Account)
   *
   * @remarks
   * Fetch sub-account assets
   *
   * Weight(UID): 60
   *
   * @returns Sub account balances
   *
   * @throws {@link SubAccountApi.QuerySubAccountAssetsForMasterAccountError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  querySubAccountAssetsForMasterAccount(
    request: SubAccountApi.QuerySubAccountAssetsForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV4SubAccountAssetsResponse, SubAccountApi.QuerySubAccountAssetsForMasterAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v4/sub-account/assets"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV4SubAccountAssetsResponseSchema },
        errorFactory: SubAccountApi.QuerySubAccountAssetsForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Query Sub-account List (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns List of sub-accounts
   *
   * @throws {@link SubAccountApi.QuerySubAccountListForMasterAccountError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  querySubAccountListForMasterAccount(
    request: SubAccountApi.QuerySubAccountListForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1SubAccountListResponse, SubAccountApi.QuerySubAccountListForMasterAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "isFreeze", value: request.isFreeze, schema: s.optional(s.lazy(() => isFreezeSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountListResponseSchema },
        errorFactory: SubAccountApi.QuerySubAccountListForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Query Sub-account Transaction Statistics (For Master Account)
   *
   * @remarks
   * Query Sub-account Transaction statistics (For Master Account).
   *
   * Weight(UID): 60
   *
   * @returns Sub account transaction statistics
   *
   * @throws {@link SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/transaction-statistics"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountTransactionStatisticsResponseSchema },
        errorFactory: SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Sub-account Assets (For Master Account)
   *
   * @remarks
   * Fetch sub-account assets
   *
   * Weight(IP): 1
   *
   * @returns List of assets balances
   *
   * @throws {@link SubAccountApi.SubAccountAssetsForMasterAccountError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subAccountAssetsForMasterAccount(
    request: SubAccountApi.SubAccountAssetsForMasterAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV3SubAccountAssetsResponse, SubAccountApi.SubAccountAssetsForMasterAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v3/sub-account/assets"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV3SubAccountAssetsResponseSchema },
        errorFactory: SubAccountApi.SubAccountAssetsForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Sub-account Deposit History (For Master Account)
   *
   * @remarks
   * Fetch sub-account deposit history
   *
   * Weight(IP): 1
   *
   * @returns Sub-account deposit history
   *
   * @throws {@link SubAccountApi.SubAccountDepositHistoryForMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/capital/deposit/subHisrec"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "coin", value: request.coin, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1CapitalDepositSubHisrecResponseSchema)) },
        errorFactory: SubAccountApi.SubAccountDepositHistoryForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Sub-account Futures Asset Transfer (For Master Account)
   *
   * @remarks
   * - Master account can transfer max 2000 times a minute
   *
   * Weight(IP): 1
   *
   * @returns Futures Asset Transfer Info
   *
   * @throws {@link SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/futures/internalTransfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "fromEmail", value: request.fromEmail, schema: s.string() },
          { name: "toEmail", value: request.toEmail, schema: s.string() },
          { name: "futuresType", value: request.futuresType, schema: s.int() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesInternalTransferResponse1Schema },
        errorFactory: SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Sub-account Futures Asset Transfer History (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Sub-account Futures Asset Transfer History
   *
   * @throws {@link SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/futures/internalTransfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "futuresType", value: request.futuresType, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesInternalTransferResponseSchema },
        errorFactory: SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Sub-account Spot Asset Transfer History (For Master Account)
   *
   * @remarks
   * - fromEmail and toEmail cannot be sent at the same time.
   * - Return fromEmail equal master account email by default.
   *
   * Weight(IP): 1
   *
   * @returns Sub-account Spot Asset Transfer History
   *
   * @throws {@link SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/sub/transfer/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromEmail", value: request.fromEmail, schema: s.optional(s.string()) },
          { name: "toEmail", value: request.toEmail, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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

  /**
   * Sub-account Spot Assets Summary (For Master Account)
   *
   * @remarks
   * Get BTC valued asset summary of subaccounts.
   *
   * Weight(IP): 1
   *
   * @returns Summary of Sub-account Spot Assets
   *
   * @throws {@link SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/spotSummary"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountSpotSummaryResponseSchema },
        errorFactory: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Sub-account Spot Assets Summary (For Master Account)
   *
   * @remarks
   * Fetch sub-account deposit address
   *
   * Weight(IP): 1
   *
   * @returns Deposit address info
   *
   * @throws {@link SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/capital/deposit/subAddress"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
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
        success: { kind: "json", schema: sapiV1CapitalDepositSubAddressResponseSchema },
        errorFactory: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Error,
      },
      options,
    );
  }

  /**
   * Sub-account Transfer History (For Sub-account)
   *
   * @remarks
   * - If `type` is not sent, the records of type 2: transfer out will be returned by default.
   * - If `startTime` and `endTime` are not sent, the recent 30-day data will be returned.
   *
   * Weight(IP): 1
   *
   * @returns Transfer id
   *
   * @throws {@link SubAccountApi.SubAccountTransferHistoryForSubAccountError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/transfer/subUserHistory"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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

  /**
   * Sub-account's Status on Margin/Futures (For Master Account)
   *
   * @remarks
   * - If no `email` sent, all sub-accounts' information will be returned.
   *
   * Weight(IP): 10
   *
   * @returns Status on Margin/Futures
   *
   * @throws {@link SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/status"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1SubAccountStatusResponseSchema)) },
        errorFactory: SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Summary of Sub-account's Futures Account (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Futures account summary
   *
   * @throws {@link SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/futures/accountSummary"),
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
        success: { kind: "json", schema: sapiV1SubAccountFuturesAccountSummaryResponseSchema },
        errorFactory: SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Summary of Sub-account's Futures Account V2 (For Master Account)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns USDT or COIN Margined Futures Summary
   *
   * @throws {@link SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v2/sub-account/futures/accountSummary"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "futuresType", value: request.futuresType, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2SubAccountFuturesAccountSummaryResponseSchema },
        errorFactory: SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Summary of Sub-account's Margin Account (For Master Account)
   *
   * @remarks
   * Weight(IP): 10
   *
   * @returns Margin sub-account details
   *
   * @throws {@link SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/margin/accountSummary"),
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
        success: { kind: "json", schema: sapiV1SubAccountMarginAccountSummaryResponseSchema },
        errorFactory: SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Transfer for Sub-account (For Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Transfer id
   *
   * @throws {@link SubAccountApi.TransferForSubAccountForMasterAccountError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/futures/transfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "type", value: request.type, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountFuturesTransferResponseSchema },
        errorFactory: SubAccountApi.TransferForSubAccountForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Transfer to Master (For Sub-account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Transfer id
   *
   * @throws {@link SubAccountApi.TransferToMasterForSubAccountError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/transfer/subToMaster"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountTransferSubToMasterResponseSchema },
        errorFactory: SubAccountApi.TransferToMasterForSubAccountError,
      },
      options,
    );
  }

  /**
   * Transfer to Sub-account of Same Master (For Sub-account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Transfer id
   *
   * @throws {@link SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/transfer/subToSub"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "toEmail", value: request.toEmail, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountTransferSubToSubResponseSchema },
        errorFactory: SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountError,
      },
      options,
    );
  }

  /**
   * Universal Transfer (For Master Account)
   *
   * @remarks
   * - You need to enable "internal transfer" option for the api key which requests this endpoint.
   * - Transfer from master account by default if fromEmail is not sent.
   * - Transfer to master account by default if toEmail is not sent.
   * - Supported transfer scenarios:
   *   - Master account SPOT transfer to sub-account
   *     SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN
   *   - Sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN transfer to master
   *     account SPOT
   *   - Transfer between two sub-account SPOT accounts
   *
   * Weight(IP): 1
   *
   * @returns Transfer id
   *
   * @throws {@link SubAccountApi.UniversalTransferForMasterAccountError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/universalTransfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "fromAccountType", value: request.fromAccountType, schema: fromAccountTypeSchema },
          { name: "toAccountType", value: request.toAccountType, schema: toAccountTypeSchema },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromEmail", value: request.fromEmail, schema: s.optional(s.string()) },
          { name: "toEmail", value: request.toEmail, schema: s.optional(s.string()) },
          { name: "clientTranId", value: request.clientTranId, schema: s.optional(s.string()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1SubAccountUniversalTransferResponse1Schema },
        errorFactory: SubAccountApi.UniversalTransferForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Universal Transfer History (For Master Account)
   *
   * @remarks
   * - `fromEmail` and `toEmail` cannot be sent at the same time.
   * - Return `fromEmail` equal master account email by default.
   * - The query time period must be less then 30 days.
   * - If startTime and endTime not sent, return records of the last 30 days by default.
   *
   * Weight(IP): 1
   *
   * @returns Transfer History
   *
   * @throws {@link SubAccountApi.UniversalTransferHistoryForMasterAccountError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/sub-account/universalTransfer"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromEmail", value: request.fromEmail, schema: s.optional(s.string()) },
          { name: "toEmail", value: request.toEmail, schema: s.optional(s.string()) },
          { name: "clientTranId", value: request.clientTranId, schema: s.optional(s.string()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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

  /**
   * Update IP Restriction for Sub-Account API key (For Master Account)
   *
   * @remarks
   * Update IP Restriction for Sub-Account API key
   *
   * Weight(UID): 3000
   *
   * @returns Update IP Restriction
   *
   * @throws {@link SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v2/sub-account/subAccountApi/ipRestriction"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "subAccountApiKey", value: request.subAccountApiKey, schema: s.string() },
          { name: "status", value: request.status, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "thirdPartyName", value: request.thirdPartyName, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV2SubAccountSubAccountApiIpRestrictionResponseSchema },
        errorFactory: SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError,
      },
      options,
    );
  }

  /**
   * Withdrawl assets from the managed sub-account(For Investor Master Account)
   *
   * @remarks
   * Weight(IP): 1
   *
   * @returns Transfer id
   *
   * @throws {@link
   * SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sapi/v1/managed-subaccount/withdraw"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "fromEmail", value: request.fromEmail, schema: s.string() },
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "transferDate", value: request.transferDate, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /**
     * Please input a string. We will create a virtual email using that string for you to register
     */
    subAccountString: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CreateAVirtualSubAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CreateAVirtualSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteIpListForASubAccountApiKeyForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    subAccountApiKey: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Can be added in batches, separated by commas */
    ipAddress?: string;
    /** third party IP list name */
    thirdPartyName?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DeleteIpListForASubAccountApiKeyForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DeleteIpListForASubAccountApiKeyForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountRequest = {
    /** Recipient email */
    toEmail: string;
    asset: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError> =
      [
        { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
        { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      ];
  }

  export type DetailOnSubAccountSFuturesAccountForMasterAccountRequest = {
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DetailOnSubAccountSFuturesAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DetailOnSubAccountSFuturesAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DetailOnSubAccountSFuturesAccountV2ForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /**
     * * `1` - USDT Margined Futures
     * * `2` - COIN Margined Futures
     */
    futuresType: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DetailOnSubAccountSFuturesAccountV2ForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DetailOnSubAccountSFuturesAccountV2ForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DetailOnSubAccountSMarginAccountForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class DetailOnSubAccountSMarginAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DetailOnSubAccountSMarginAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableFuturesForSubAccountForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class EnableFuturesForSubAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EnableFuturesForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableLeverageTokenForSubAccountForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** Only true for now */
    enableBlvt: boolean;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class EnableLeverageTokenForSubAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EnableLeverageTokenForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableMarginForSubAccountForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class EnableMarginForSubAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EnableMarginForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableOptionsForSubAccountForMasterAccountUserDataRequest = {
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class EnableOptionsForSubAccountForMasterAccountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EnableOptionsForSubAccountForMasterAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FuturesPositionRiskOfSubAccountForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FuturesPositionRiskOfSubAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FuturesPositionRiskOfSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FuturesPositionRiskOfSubAccountV2ForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /**
     * * `1` - USDT Margined Futures
     * * `2` - COIN Margined Futures
     */
    futuresType: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FuturesPositionRiskOfSubAccountV2ForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FuturesPositionRiskOfSubAccountV2ForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetIpRestrictionForASubAccountApiKeyForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    subAccountApiKey: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetIpRestrictionForASubAccountApiKeyForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetIpRestrictionForASubAccountApiKeyForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetManagedSubAccountDepositAddressForInvestorMasterAccountRequest = {
    email: string;
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

  export class GetManagedSubAccountDepositAddressForInvestorMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetManagedSubAccountDepositAddressForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ManagedSubAccountAssetDetailsForInvestorMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class ManagedSubAccountAssetDetailsForInvestorMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ManagedSubAccountAssetDetailsForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ManagedSubAccountSnapshotForInvestorMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** "SPOT", "MARGIN"(cross), "FUTURES"(UM) */
    type: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** min 7, max 30, default 7 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class ManagedSubAccountSnapshotForInvestorMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ManagedSubAccountSnapshotForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MarginTransferForSubAccountForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    asset: string;
    amount: number;
    /**
     * * `1` - transfer from subaccount's spot account to margin account
     * * `2` - transfer from subaccount's margin account to its spot account
     */
    type: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class MarginTransferForSubAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<MarginTransferForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryManagedSubAccountTransferLogForInvestorMasterAccountRequest = {
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 1 */
    page?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** Transfer Direction (FROM/TO) */
    transfers?: string;
    /** Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE) */
    transferFunctionAccountType?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryManagedSubAccountTransferLogForInvestorMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryManagedSubAccountTransferLogForInvestorMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryManagedSubAccountTransferLogForTradingTeamMasterAccountRequest = {
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 1 */
    page?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** Transfer Direction (FROM/TO) */
    transfers?: string;
    /** Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE) */
    transferFunctionAccountType?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError> =
      [
        { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
        { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      ];
  }

  export type QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataRequest = {
    /** Transfer Direction */
    transfers: Transfers;
    /** Transfer function account type */
    transferFunctionAccountType: TransferFunctionAccountType;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 1 */
    page?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError> =
      [
        { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
        { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      ];
  }

  export type QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountRequest = {
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError> =
      [
        { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
        { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      ];
  }

  export type QueryManagedSubAccountListForInvestorRequest = {
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Default 1 */
    page?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryManagedSubAccountListForInvestorError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryManagedSubAccountListForInvestorError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountRequest = {
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError> =
      [
        { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
        { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      ];
  }

  export type QuerySubAccountAssetsForMasterAccountRequest = {
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QuerySubAccountAssetsForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QuerySubAccountAssetsForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubAccountListForMasterAccountRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Sub-account email */
    email?: string;
    isFreeze?: IsFreeze;
    /** Default 1 */
    page?: number;
    /** Default 1; max 200 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QuerySubAccountListForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QuerySubAccountListForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QuerySubAccountTransactionStatisticsForMasterAccountRequest = {
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QuerySubAccountTransactionStatisticsForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QuerySubAccountTransactionStatisticsForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountAssetsForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubAccountAssetsForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubAccountAssetsForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountDepositHistoryForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Coin name */
    coin?: string;
    /** 0(0:pending,6: credited but cannot withdraw, 1:success) */
    status?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    limit?: number;
    offset?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubAccountDepositHistoryForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubAccountDepositHistoryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountFuturesAssetTransferForMasterAccountRequest = {
    /** Sender email */
    fromEmail: string;
    /** Recipient email */
    toEmail: string;
    /** 1:USDT-margined Futures,2: Coin-margined Futures */
    futuresType: number;
    asset: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubAccountFuturesAssetTransferForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubAccountFuturesAssetTransferForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountFuturesAssetTransferHistoryForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    /** 1:USDT-margined Futures, 2: Coin-margined Futures */
    futuresType: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 1 */
    page?: number;
    /** Default value: 50, Max value: 500 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubAccountFuturesAssetTransferHistoryForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubAccountFuturesAssetTransferHistoryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountSpotAssetTransferHistoryForMasterAccountRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Sub-account email */
    fromEmail?: string;
    /** Sub-account email */
    toEmail?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 1 */
    page?: number;
    /** Default 1 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubAccountSpotAssetTransferHistoryForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubAccountSpotAssetTransferHistoryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountSpotAssetsSummaryForMasterAccountRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Sub-account email */
    email?: string;
    /** Default 1 */
    page?: number;
    /** Default:10 Max:20 */
    size?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubAccountSpotAssetsSummaryForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubAccountSpotAssetsSummaryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountSpotAssetsSummaryForMasterAccount2Request = {
    /** Sub-account email */
    email: string;
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

  export class SubAccountSpotAssetsSummaryForMasterAccount2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubAccountSpotAssetsSummaryForMasterAccount2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountTransferHistoryForSubAccountRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    asset?: string;
    /**
     * * `1` - transfer in
     * * `2` - transfer out
     */
    type?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 500; max 1000. */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubAccountTransferHistoryForSubAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubAccountTransferHistoryForSubAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubAccountSStatusOnMarginFuturesForMasterAccountRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Sub-account email */
    email?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SubAccountSStatusOnMarginFuturesForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SubAccountSStatusOnMarginFuturesForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SummaryOfSubAccountSFuturesAccountForMasterAccountRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SummaryOfSubAccountSFuturesAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SummaryOfSubAccountSFuturesAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SummaryOfSubAccountSFuturesAccountV2ForMasterAccountRequest = {
    /**
     * * `1` - USDT Margined Futures
     * * `2` - COIN Margined Futures
     */
    futuresType: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Default 1 */
    page?: number;
    /** Default 10, Max 20 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SummaryOfSubAccountSMarginAccountForMasterAccountRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SummaryOfSubAccountSMarginAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SummaryOfSubAccountSMarginAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TransferForSubAccountForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    asset: string;
    amount: number;
    /**
     * * `1` - transfer from subaccount's spot account to its USDT-margined futures account
     * * `2` - transfer from subaccount's USDT-margined futures account to its spot account
     * * `3` - transfer from subaccount's spot account to its COIN-margined futures account
     * * `4` - transfer from subaccount's COIN-margined futures account to its spot account
     */
    type: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class TransferForSubAccountForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<TransferForSubAccountForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TransferToMasterForSubAccountRequest = {
    asset: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class TransferToMasterForSubAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<TransferToMasterForSubAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TransferToSubAccountOfSameMasterForSubAccountRequest = {
    /** Recipient email */
    toEmail: string;
    asset: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class TransferToSubAccountOfSameMasterForSubAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

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
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Sub-account email */
    fromEmail?: string;
    /** Sub-account email */
    toEmail?: string;
    clientTranId?: string;
    /** Only supported under ISOLATED_MARGIN type */
    symbol?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class UniversalTransferForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<UniversalTransferForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UniversalTransferHistoryForMasterAccountRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Sub-account email */
    fromEmail?: string;
    /** Sub-account email */
    toEmail?: string;
    clientTranId?: string;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 1 */
    page?: number;
    /** Default 500, Max 500 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class UniversalTransferHistoryForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<UniversalTransferHistoryForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateIpRestrictionForSubAccountApiKeyForMasterAccountRequest = {
    /** Sub-account email */
    email: string;
    subAccountApiKey: string;
    /**
     * IP Restriction status. 1 = IP Unrestricted. 2 = Restrict access to trusted IPs only. 3 =
     * Restrict access to users' trusted third party IPs only
     */
    status: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** third party IP list name */
    thirdPartyName?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountRequest = {
    /** Sender email */
    fromEmail: string;
    asset: string;
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * Withdrawals is automatically occur on the transfer date(UTC0). If a date is not selected, the
     * withdrawal occurs right now
     */
    transferDate?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError> =
      [
        { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
        { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      ];
  }
}
