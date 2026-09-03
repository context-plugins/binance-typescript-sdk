import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { expiredTypeSchema, type ExpiredType } from "../models/expired-type.js";
import {
  sapiV1ConvertAcceptQuoteResponseSchema,
  type SapiV1ConvertAcceptQuoteResponse,
} from "../models/sapi-v1-convert-accept-quote-response.js";
import {
  sapiV1ConvertAssetInfoResponseSchema,
  type SapiV1ConvertAssetInfoResponse,
} from "../models/sapi-v1-convert-asset-info-response.js";
import {
  sapiV1ConvertExchangeInfoResponseSchema,
  type SapiV1ConvertExchangeInfoResponse,
} from "../models/sapi-v1-convert-exchange-info-response.js";
import {
  sapiV1ConvertGetQuoteResponseSchema,
  type SapiV1ConvertGetQuoteResponse,
} from "../models/sapi-v1-convert-get-quote-response.js";
import {
  sapiV1ConvertLimitCancelOrderResponseSchema,
  type SapiV1ConvertLimitCancelOrderResponse,
} from "../models/sapi-v1-convert-limit-cancel-order-response.js";
import {
  sapiV1ConvertLimitPlaceOrderResponseSchema,
  type SapiV1ConvertLimitPlaceOrderResponse,
} from "../models/sapi-v1-convert-limit-place-order-response.js";
import {
  sapiV1ConvertLimitQueryOpenOrdersResponseSchema,
  type SapiV1ConvertLimitQueryOpenOrdersResponse,
} from "../models/sapi-v1-convert-limit-query-open-orders-response.js";
import {
  sapiV1ConvertOrderStatusResponseSchema,
  type SapiV1ConvertOrderStatusResponse,
} from "../models/sapi-v1-convert-order-status-response.js";
import {
  sapiV1ConvertTradeFlowResponseSchema,
  type SapiV1ConvertTradeFlowResponse,
} from "../models/sapi-v1-convert-trade-flow-response.js";
import { sideSchema, type Side } from "../models/side.js";
import { walletTypeSchema, type WalletType } from "../models/wallet-type.js";
import type { Servers } from "../servers.js";

export class Convert {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  acceptQuoteTrade(
    request: Convert.AcceptQuoteTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertAcceptQuoteResponse, Convert.AcceptQuoteTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/convert/acceptQuote"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "quoteId", value: request.quoteId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertAcceptQuoteResponseSchema },
        errorFactory: Convert.AcceptQuoteTradeError,
      },
      options,
    );
  }

  cancelLimitOrderUserData(
    request: Convert.CancelLimitOrderUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertLimitCancelOrderResponse, Convert.CancelLimitOrderUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/convert/limit/cancelOrder"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "orderId", value: request.orderId, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertLimitCancelOrderResponseSchema },
        errorFactory: Convert.CancelLimitOrderUserDataError,
      },
      options,
    );
  }

  getConvertTradeHistoryUserData(
    request: Convert.GetConvertTradeHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertTradeFlowResponse, Convert.GetConvertTradeHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/convert/tradeFlow"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "startTime", value: request.startTime, schema: s.number() },
          { name: "endTime", value: request.endTime, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertTradeFlowResponseSchema },
        errorFactory: Convert.GetConvertTradeHistoryUserDataError,
      },
      options,
    );
  }

  listAllConvertPairs(
    request: Convert.ListAllConvertPairsRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertExchangeInfoResponse[], Convert.ListAllConvertPairsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/convert/exchangeInfo"),
        auth: noneAuth,
        query: [
          { name: "fromAsset", value: request.fromAsset, schema: s.optional(s.string()) },
          { name: "toAsset", value: request.toAsset, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1ConvertExchangeInfoResponseSchema)) },
        errorFactory: Convert.ListAllConvertPairsError,
      },
      options,
    );
  }

  orderStatusUserData(
    request: Convert.OrderStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertOrderStatusResponse, Convert.OrderStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/convert/orderStatus"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.string()) },
          { name: "quoteId", value: request.quoteId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertOrderStatusResponseSchema },
        errorFactory: Convert.OrderStatusUserDataError,
      },
      options,
    );
  }

  placeLimitOrderUserData(
    request: Convert.PlaceLimitOrderUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertLimitPlaceOrderResponse, Convert.PlaceLimitOrderUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/convert/limit/placeOrder"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "baseAsset", value: request.baseAsset, schema: s.string() },
          { name: "quoteAsset", value: request.quoteAsset, schema: s.string() },
          { name: "limitPrice", value: request.limitPrice, schema: s.number() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "baseAmount", value: request.baseAmount, schema: s.optional(s.number()) },
          { name: "quoteAmount", value: request.quoteAmount, schema: s.optional(s.number()) },
          {
            name: "walletType",
            value: request.walletType,
            schema: s.optional(s.lazy(() => walletTypeSchema)),
          },
          {
            name: "expiredType",
            value: request.expiredType,
            schema: s.optional(s.lazy(() => expiredTypeSchema)),
          },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertLimitPlaceOrderResponseSchema },
        errorFactory: Convert.PlaceLimitOrderUserDataError,
      },
      options,
    );
  }

  queryLimitOpenOrdersUserData(
    request: Convert.QueryLimitOpenOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertLimitQueryOpenOrdersResponse, Convert.QueryLimitOpenOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/convert/limit/queryOpenOrders"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertLimitQueryOpenOrdersResponseSchema },
        errorFactory: Convert.QueryLimitOpenOrdersUserDataError,
      },
      options,
    );
  }

  queryOrderQuantityPrecisionPerAssetUserData(
    request: Convert.QueryOrderQuantityPrecisionPerAssetUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertAssetInfoResponse[], Convert.QueryOrderQuantityPrecisionPerAssetUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/convert/assetInfo"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1ConvertAssetInfoResponseSchema)) },
        errorFactory: Convert.QueryOrderQuantityPrecisionPerAssetUserDataError,
      },
      options,
    );
  }

  sendQuoteRequestUserData(
    request: Convert.SendQuoteRequestUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertGetQuoteResponse, Convert.SendQuoteRequestUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/convert/getQuote"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "fromAsset", value: request.fromAsset, schema: s.string() },
          { name: "toAsset", value: request.toAsset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromAmount", value: request.fromAmount, schema: s.optional(s.number()) },
          { name: "toAmount", value: request.toAmount, schema: s.optional(s.number()) },
          { name: "validTime", value: request.validTime, schema: s.optional(s.string()) },
          { name: "walletType", value: request.walletType, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertGetQuoteResponseSchema },
        errorFactory: Convert.SendQuoteRequestUserDataError,
      },
      options,
    );
  }
}

export namespace Convert {
  export type AcceptQuoteTradeRequest = {
    quoteId: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class AcceptQuoteTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AcceptQuoteTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelLimitOrderUserDataRequest = {
    orderId: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CancelLimitOrderUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CancelLimitOrderUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetConvertTradeHistoryUserDataRequest = {
    startTime: number;
    endTime: number;
    timestamp: number;
    signature: string;
    limit?: number;
    recvWindow?: number;
  };

  export class GetConvertTradeHistoryUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetConvertTradeHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAllConvertPairsRequest = {
    fromAsset?: string;
    toAsset?: string;
  };

  export class ListAllConvertPairsError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ListAllConvertPairsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type OrderStatusUserDataRequest = {
    timestamp: number;
    signature: string;
    orderId?: string;
    quoteId?: string;
    recvWindow?: number;
  };

  export class OrderStatusUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<OrderStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PlaceLimitOrderUserDataRequest = {
    baseAsset: string;
    quoteAsset: string;
    limitPrice: number;
    side: Side;
    timestamp: number;
    signature: string;
    baseAmount?: number;
    quoteAmount?: number;
    walletType?: WalletType;
    expiredType?: ExpiredType;
    recvWindow?: number;
  };

  export class PlaceLimitOrderUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<PlaceLimitOrderUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryLimitOpenOrdersUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryLimitOpenOrdersUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryLimitOpenOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOrderQuantityPrecisionPerAssetUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class QueryOrderQuantityPrecisionPerAssetUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<QueryOrderQuantityPrecisionPerAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SendQuoteRequestUserDataRequest = {
    fromAsset: string;
    toAsset: string;
    timestamp: number;
    signature: string;
    fromAmount?: number;
    toAmount?: number;
    validTime?: string;
    walletType?: string;
    recvWindow?: number;
  };

  export class SendQuoteRequestUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SendQuoteRequestUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
