import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1PortfolioAccountResponseSchema,
  type SapiV1PortfolioAccountResponse,
} from "../models/sapi-v1-portfolio-account-response.js";
import {
  sapiV1PortfolioAssetCollectionResponseSchema,
  type SapiV1PortfolioAssetCollectionResponse,
} from "../models/sapi-v1-portfolio-asset-collection-response.js";
import {
  sapiV1PortfolioAssetIndexPriceResponseSchema,
  type SapiV1PortfolioAssetIndexPriceResponse,
} from "../models/sapi-v1-portfolio-asset-index-price-response.js";
import {
  sapiV1PortfolioAutoCollectionResponseSchema,
  type SapiV1PortfolioAutoCollectionResponse,
} from "../models/sapi-v1-portfolio-auto-collection-response.js";
import {
  sapiV1PortfolioBnbTransferResponseSchema,
  type SapiV1PortfolioBnbTransferResponse,
} from "../models/sapi-v1-portfolio-bnb-transfer-response.js";
import {
  sapiV1PortfolioCollateralRateResponseSchema,
  type SapiV1PortfolioCollateralRateResponse,
} from "../models/sapi-v1-portfolio-collateral-rate-response.js";
import {
  sapiV1PortfolioInterestHistoryResponseSchema,
  type SapiV1PortfolioInterestHistoryResponse,
} from "../models/sapi-v1-portfolio-interest-history-response.js";
import {
  sapiV1PortfolioMarginAssetLeverageResponseSchema,
  type SapiV1PortfolioMarginAssetLeverageResponse,
} from "../models/sapi-v1-portfolio-margin-asset-leverage-response.js";
import {
  sapiV1PortfolioPmLoanResponseSchema,
  type SapiV1PortfolioPmLoanResponse,
} from "../models/sapi-v1-portfolio-pm-loan-response.js";
import {
  sapiV1PortfolioRepayFuturesNegativeBalanceResponseSchema,
  type SapiV1PortfolioRepayFuturesNegativeBalanceResponse,
} from "../models/sapi-v1-portfolio-repay-futures-negative-balance-response.js";
import {
  sapiV1PortfolioRepayFuturesSwitchResponseSchema,
  type SapiV1PortfolioRepayFuturesSwitchResponse,
} from "../models/sapi-v1-portfolio-repay-futures-switch-response.js";
import {
  sapiV1PortfolioRepayFuturesSwitchResponse1Schema,
  type SapiV1PortfolioRepayFuturesSwitchResponse1,
} from "../models/sapi-v1-portfolio-repay-futures-switch-response1.js";
import {
  sapiV1PortfolioRepayResponseSchema,
  type SapiV1PortfolioRepayResponse,
} from "../models/sapi-v1-portfolio-repay-response.js";
import {
  sapiV2PortfolioCollateralRateResponseSchema,
  type SapiV2PortfolioCollateralRateResponse,
} from "../models/sapi-v2-portfolio-collateral-rate-response.js";
import { transferSideSchema, type TransferSide } from "../models/transfer-side.js";
import type { Servers } from "../servers.js";

export class PortfolioMargin {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  bnbTransferUserData(
    request: PortfolioMargin.BnbTransferUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1PortfolioBnbTransferResponse, PortfolioMargin.BnbTransferUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/portfolio/bnb-transfer"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "transferSide", value: request.transferSide, schema: transferSideSchema },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioBnbTransferResponseSchema },
        errorFactory: PortfolioMargin.BnbTransferUserDataError,
      },
      options,
    );
  }

  changeAutoRepayFuturesStatusUserData(
    request: PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioRepayFuturesSwitchResponse,
    PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/portfolio/repay-futures-switch"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "autoRepay", value: request.autoRepay, schema: s.boolean() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioRepayFuturesSwitchResponseSchema },
        errorFactory: PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError,
      },
      options,
    );
  }

  fundAutoCollectionUserData(
    request: PortfolioMargin.FundAutoCollectionUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1PortfolioAutoCollectionResponse, PortfolioMargin.FundAutoCollectionUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/portfolio/auto-collection"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioAutoCollectionResponseSchema },
        errorFactory: PortfolioMargin.FundAutoCollectionUserDataError,
      },
      options,
    );
  }

  fundCollectionByAssetUserData(
    request: PortfolioMargin.FundCollectionByAssetUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1PortfolioAssetCollectionResponse, PortfolioMargin.FundCollectionByAssetUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/portfolio/asset-collection"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioAssetCollectionResponseSchema },
        errorFactory: PortfolioMargin.FundCollectionByAssetUserDataError,
      },
      options,
    );
  }

  getAutoRepayFuturesStatusUserData(
    request: PortfolioMargin.GetAutoRepayFuturesStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioRepayFuturesSwitchResponse1,
    PortfolioMargin.GetAutoRepayFuturesStatusUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/portfolio/repay-futures-switch"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioRepayFuturesSwitchResponse1Schema },
        errorFactory: PortfolioMargin.GetAutoRepayFuturesStatusUserDataError,
      },
      options,
    );
  }

  getPortfolioMarginAssetLeverageUserData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioMarginAssetLeverageResponse[],
    PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/portfolio/margin-asset-leverage"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1PortfolioMarginAssetLeverageResponseSchema)),
        },
        errorFactory: PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError,
      },
      options,
    );
  }

  portfolioMarginAccountUserData(
    request: PortfolioMargin.PortfolioMarginAccountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1PortfolioAccountResponse, PortfolioMargin.PortfolioMarginAccountUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/portfolio/account"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioAccountResponseSchema },
        errorFactory: PortfolioMargin.PortfolioMarginAccountUserDataError,
      },
      options,
    );
  }

  portfolioMarginBankruptcyLoanAmountUserData(
    request: PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioPmLoanResponse,
    PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/portfolio/pmLoan"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioPmLoanResponseSchema },
        errorFactory: PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError,
      },
      options,
    );
  }

  portfolioMarginBankruptcyLoanRepayUserData(
    request: PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioRepayResponse,
    PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/portfolio/repay"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioRepayResponseSchema },
        errorFactory: PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError,
      },
      options,
    );
  }

  portfolioMarginCollateralRateMarketData(
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioCollateralRateResponse[],
    PortfolioMargin.PortfolioMarginCollateralRateMarketDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/portfolio/collateralRate"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1PortfolioCollateralRateResponseSchema)) },
        errorFactory: PortfolioMargin.PortfolioMarginCollateralRateMarketDataError,
      },
      options,
    );
  }

  portfolioMarginProTieredCollateralRateUserData(
    request: PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV2PortfolioCollateralRateResponse[],
    PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v2/portfolio/collateralRate"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV2PortfolioCollateralRateResponseSchema)) },
        errorFactory: PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError,
      },
      options,
    );
  }

  queryClassicPortfolioMarginNegativeBalanceInterestHistoryUserData(
    request: PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioInterestHistoryResponse[],
    PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/portfolio/interest-history"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "asset", value: request.asset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "size", value: request.size, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1PortfolioInterestHistoryResponseSchema)),
        },
        errorFactory: PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError,
      },
      options,
    );
  }

  queryPortfolioMarginAssetIndexPriceMarketData(
    request: PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioAssetIndexPriceResponse[],
    PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/portfolio/asset-index-price"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "asset", value: request.asset, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => sapiV1PortfolioAssetIndexPriceResponseSchema)),
        },
        errorFactory: PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError,
      },
      options,
    );
  }

  repayFuturesNegativeBalanceUserData(
    request: PortfolioMargin.RepayFuturesNegativeBalanceUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1PortfolioRepayFuturesNegativeBalanceResponse,
    PortfolioMargin.RepayFuturesNegativeBalanceUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/portfolio/repay-futures-negative-balance"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1PortfolioRepayFuturesNegativeBalanceResponseSchema },
        errorFactory: PortfolioMargin.RepayFuturesNegativeBalanceUserDataError,
      },
      options,
    );
  }
}

export namespace PortfolioMargin {
  export type BnbTransferUserDataRequest = {
    transferSide: TransferSide;
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class BnbTransferUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<BnbTransferUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ChangeAutoRepayFuturesStatusUserDataRequest = {
    autoRepay: boolean;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class ChangeAutoRepayFuturesStatusUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ChangeAutoRepayFuturesStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FundAutoCollectionUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class FundAutoCollectionUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FundAutoCollectionUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FundCollectionByAssetUserDataRequest = {
    asset: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class FundCollectionByAssetUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FundCollectionByAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAutoRepayFuturesStatusUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class GetAutoRepayFuturesStatusUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAutoRepayFuturesStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetPortfolioMarginAssetLeverageUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetPortfolioMarginAssetLeverageUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PortfolioMarginAccountUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class PortfolioMarginAccountUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<PortfolioMarginAccountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PortfolioMarginBankruptcyLoanAmountUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class PortfolioMarginBankruptcyLoanAmountUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<PortfolioMarginBankruptcyLoanAmountUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PortfolioMarginBankruptcyLoanRepayUserDataRequest = {
    timestamp: number;
    signature: string;
    from?: string;
    recvWindow?: number;
  };

  export class PortfolioMarginBankruptcyLoanRepayUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<PortfolioMarginBankruptcyLoanRepayUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class PortfolioMarginCollateralRateMarketDataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<PortfolioMarginCollateralRateMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PortfolioMarginProTieredCollateralRateUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class PortfolioMarginProTieredCollateralRateUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<PortfolioMarginProTieredCollateralRateUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataRequest = {
    asset: string;
    timestamp: number;
    signature: string;
    startTime?: number;
    endTime?: number;
    size?: number;
    recvWindow?: number;
  };

  export class QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryPortfolioMarginAssetIndexPriceMarketDataRequest = {
    asset?: string;
  };

  export class QueryPortfolioMarginAssetIndexPriceMarketDataError extends ResponseError<
    Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<QueryPortfolioMarginAssetIndexPriceMarketDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RepayFuturesNegativeBalanceUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class RepayFuturesNegativeBalanceUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RepayFuturesNegativeBalanceUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
