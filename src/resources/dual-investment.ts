import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { autoCompoundPlanSchema, type AutoCompoundPlan } from "../models/auto-compound-plan.js";
import { errorSchema, type Error } from "../models/error.js";
import { optionTypeSchema, type OptionType } from "../models/option-type.js";
import {
  sapiV1DciProductAccountsResponseSchema,
  type SapiV1DciProductAccountsResponse,
} from "../models/sapi-v1-dci-product-accounts-response.js";
import {
  sapiV1DciProductAutoCompoundEditStatusResponseSchema,
  type SapiV1DciProductAutoCompoundEditStatusResponse,
} from "../models/sapi-v1-dci-product-auto-compound-edit-status-response.js";
import {
  sapiV1DciProductListResponseSchema,
  type SapiV1DciProductListResponse,
} from "../models/sapi-v1-dci-product-list-response.js";
import {
  sapiV1DciProductPositionsResponseSchema,
  type SapiV1DciProductPositionsResponse,
} from "../models/sapi-v1-dci-product-positions-response.js";
import {
  sapiV1DciProductSubscribeResponseSchema,
  type SapiV1DciProductSubscribeResponse,
} from "../models/sapi-v1-dci-product-subscribe-response.js";
import { status2Schema, type Status2 } from "../models/status2.js";
import type { Servers } from "../servers.js";

export class DualInvestment {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  changeAutoCompoundStatusUserData(
    request: DualInvestment.ChangeAutoCompoundStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1DciProductAutoCompoundEditStatusResponse,
    DualInvestment.ChangeAutoCompoundStatusUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/dci/product/auto_compound/edit-status"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "positionId", value: request.positionId, schema: s.number() },
          { name: "autoCompoundPlan", value: request.autoCompoundPlan, schema: autoCompoundPlanSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1DciProductAutoCompoundEditStatusResponseSchema },
        errorFactory: DualInvestment.ChangeAutoCompoundStatusUserDataError,
      },
      options,
    );
  }

  checkDualInvestmentAccountsUserData(
    request: DualInvestment.CheckDualInvestmentAccountsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1DciProductAccountsResponse, DualInvestment.CheckDualInvestmentAccountsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/dci/product/accounts"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1DciProductAccountsResponseSchema },
        errorFactory: DualInvestment.CheckDualInvestmentAccountsUserDataError,
      },
      options,
    );
  }

  getDualInvestmentPositionsUserData(
    request: DualInvestment.GetDualInvestmentPositionsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1DciProductPositionsResponse, DualInvestment.GetDualInvestmentPositionsUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/dci/product/positions"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status2Schema)) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1DciProductPositionsResponseSchema },
        errorFactory: DualInvestment.GetDualInvestmentPositionsUserDataError,
      },
      options,
    );
  }

  getDualInvestmentProductListUserData(
    request: DualInvestment.GetDualInvestmentProductListUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1DciProductListResponse, DualInvestment.GetDualInvestmentProductListUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/dci/product/list"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "optionType", value: request.optionType, schema: optionTypeSchema },
          { name: "exercisedCoin", value: request.exercisedCoin, schema: s.string() },
          { name: "investCoin", value: request.investCoin, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1DciProductListResponseSchema },
        errorFactory: DualInvestment.GetDualInvestmentProductListUserDataError,
      },
      options,
    );
  }

  subscribeDualInvestmentProductsUserData(
    request: DualInvestment.SubscribeDualInvestmentProductsUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SapiV1DciProductSubscribeResponse,
    DualInvestment.SubscribeDualInvestmentProductsUserDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/dci/product/subscribe"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
          { name: "depositAmount", value: request.depositAmount, schema: s.number() },
          { name: "autoCompoundPlan", value: request.autoCompoundPlan, schema: autoCompoundPlanSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1DciProductSubscribeResponseSchema },
        errorFactory: DualInvestment.SubscribeDualInvestmentProductsUserDataError,
      },
      options,
    );
  }
}

export namespace DualInvestment {
  export type ChangeAutoCompoundStatusUserDataRequest = {
    positionId: number;
    autoCompoundPlan: AutoCompoundPlan;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class ChangeAutoCompoundStatusUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ChangeAutoCompoundStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CheckDualInvestmentAccountsUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CheckDualInvestmentAccountsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CheckDualInvestmentAccountsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetDualInvestmentPositionsUserDataRequest = {
    timestamp: number;
    signature: string;
    status?: Status2;
    pageSize?: string;
    pageIndex?: number;
    recvWindow?: number;
  };

  export class GetDualInvestmentPositionsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetDualInvestmentPositionsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetDualInvestmentProductListUserDataRequest = {
    optionType: OptionType;
    exercisedCoin: string;
    investCoin: string;
    timestamp: number;
    signature: string;
    pageSize?: string;
    pageIndex?: number;
    recvWindow?: number;
  };

  export class GetDualInvestmentProductListUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetDualInvestmentProductListUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeDualInvestmentProductsUserDataRequest = {
    id: string;
    orderId: string;
    depositAmount: number;
    autoCompoundPlan: AutoCompoundPlan;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class SubscribeDualInvestmentProductsUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SubscribeDualInvestmentProductsUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
