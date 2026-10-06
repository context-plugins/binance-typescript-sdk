import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Convert Endpoints
 */
export class Convert {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Accept Quote (TRADE)
   *
   * @remarks
   * Accept the offered quote by quote ID.
   *
   * Weight(UID): 500
   *
   * @returns Accept Quote
   *
   * @throws {@link Convert.AcceptQuoteTradeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acceptQuoteTrade(
    request: Convert.AcceptQuoteTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertAcceptQuoteResponse, Convert.AcceptQuoteTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/convert/acceptQuote"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "quoteId", value: request.quoteId, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertAcceptQuoteResponseSchema },
        errorFactory: Convert.AcceptQuoteTradeError,
      },
      options,
    );
  }

  /**
   * Cancel limit order (USER_DATA)
   *
   * @remarks
   * Enable users to cancel a limit order
   *
   * Weight(UID): 200
   *
   * @returns Cancel Order
   *
   * @throws {@link Convert.CancelLimitOrderUserDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelLimitOrderUserData(
    request: Convert.CancelLimitOrderUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertLimitCancelOrderResponse, Convert.CancelLimitOrderUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/convert/limit/cancelOrder"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "orderId", value: request.orderId, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertLimitCancelOrderResponseSchema },
        errorFactory: Convert.CancelLimitOrderUserDataError,
      },
      options,
    );
  }

  /**
   * Get Convert Trade History (USER_DATA)
   *
   * @remarks
   * - The max interval between startTime and endTime is 30 days.
   *
   * Weight(UID): 3000
   *
   * @returns Convert Trade History
   *
   * @throws {@link Convert.GetConvertTradeHistoryUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConvertTradeHistoryUserData(
    request: Convert.GetConvertTradeHistoryUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertTradeFlowResponse, Convert.GetConvertTradeHistoryUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/convert/tradeFlow"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "startTime", value: request.startTime, schema: s.int() },
          { name: "endTime", value: request.endTime, schema: s.int() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertTradeFlowResponseSchema },
        errorFactory: Convert.GetConvertTradeHistoryUserDataError,
      },
      options,
    );
  }

  /**
   * List All Convert Pairs
   *
   * @remarks
   * Query for all convertible token pairs and the tokens’ respective upper/lower limits
   *
   * Weight(IP): 3000
   *
   * @returns List Convert Pairs
   *
   * @throws {@link Convert.ListAllConvertPairsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAllConvertPairs(
    request: Convert.ListAllConvertPairsRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertExchangeInfoResponse[], Convert.ListAllConvertPairsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/convert/exchangeInfo"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "fromAsset", value: request.fromAsset, schema: s.optional(s.string()) },
          { name: "toAsset", value: request.toAsset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1ConvertExchangeInfoResponseSchema)) },
        errorFactory: Convert.ListAllConvertPairsError,
      },
      options,
    );
  }

  /**
   * Order status (USER_DATA)
   *
   * @remarks
   * Query order status by order ID.
   *
   * Weight(UID): 100
   *
   * @returns Order Status
   *
   * @throws {@link Convert.OrderStatusUserDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  orderStatusUserData(
    request: Convert.OrderStatusUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertOrderStatusResponse, Convert.OrderStatusUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/convert/orderStatus"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.optional(s.string()) },
          { name: "quoteId", value: request.quoteId, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertOrderStatusResponseSchema },
        errorFactory: Convert.OrderStatusUserDataError,
      },
      options,
    );
  }

  /**
   * Place limit order (USER_DATA)
   *
   * @remarks
   * Enable users to place a limit order
   *
   * - baseAsset or quoteAsset can be determined via exchangeInfo endpoint.
   * - Limit price is defined from baseAsset to quoteAsset.
   * - Either baseAmount or quoteAmount is used.
   *
   * Weight(UID): 500
   *
   * @throws {@link Convert.PlaceLimitOrderUserDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  placeLimitOrderUserData(
    request: Convert.PlaceLimitOrderUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertLimitPlaceOrderResponse, Convert.PlaceLimitOrderUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/convert/limit/placeOrder"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "baseAsset", value: request.baseAsset, schema: s.string() },
          { name: "quoteAsset", value: request.quoteAsset, schema: s.string() },
          { name: "limitPrice", value: request.limitPrice, schema: s.float64() },
          { name: "side", value: request.side, schema: sideSchema },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "baseAmount", value: request.baseAmount, schema: s.optional(s.float64()) },
          { name: "quoteAmount", value: request.quoteAmount, schema: s.optional(s.float64()) },
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
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1ConvertLimitPlaceOrderResponseSchema },
        errorFactory: Convert.PlaceLimitOrderUserDataError,
      },
      options,
    );
  }

  /**
   * Query limit open orders (USER_DATA)
   *
   * @remarks
   * Enable users to query for all existing limit orders
   *
   * Weight(UID): 3000
   *
   * @returns All existing limit orders
   *
   * @throws {@link Convert.QueryLimitOpenOrdersUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryLimitOpenOrdersUserData(
    request: Convert.QueryLimitOpenOrdersUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertLimitQueryOpenOrdersResponse, Convert.QueryLimitOpenOrdersUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/convert/limit/queryOpenOrders"),
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
        success: { kind: "json", schema: sapiV1ConvertLimitQueryOpenOrdersResponseSchema },
        errorFactory: Convert.QueryLimitOpenOrdersUserDataError,
      },
      options,
    );
  }

  /**
   * Query order quantity precision per asset (USER_DATA)
   *
   * @remarks
   * Query for supported asset precision information
   *
   * Weight(IP): 100
   *
   * @returns Asset Precision Information
   *
   * @throws {@link Convert.QueryOrderQuantityPrecisionPerAssetUserDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryOrderQuantityPrecisionPerAssetUserData(
    request: Convert.QueryOrderQuantityPrecisionPerAssetUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertAssetInfoResponse[], Convert.QueryOrderQuantityPrecisionPerAssetUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/convert/assetInfo"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => sapiV1ConvertAssetInfoResponseSchema)) },
        errorFactory: Convert.QueryOrderQuantityPrecisionPerAssetUserDataError,
      },
      options,
    );
  }

  /**
   * Send quote request (USER_DATA)
   *
   * @remarks
   * Request a quote for the requested token pairs
   *
   * Weight(UID): 200
   *
   * @returns Quote Request
   *
   * @throws {@link Convert.SendQuoteRequestUserDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendQuoteRequestUserData(
    request: Convert.SendQuoteRequestUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1ConvertGetQuoteResponse, Convert.SendQuoteRequestUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/convert/getQuote"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "fromAsset", value: request.fromAsset, schema: s.string() },
          { name: "toAsset", value: request.toAsset, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "fromAmount", value: request.fromAmount, schema: s.optional(s.float64()) },
          { name: "toAmount", value: request.toAmount, schema: s.optional(s.float64()) },
          { name: "validTime", value: request.validTime, schema: s.optional(s.string()) },
          { name: "walletType", value: request.walletType, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class AcceptQuoteTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AcceptQuoteTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelLimitOrderUserDataRequest = {
    orderId: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CancelLimitOrderUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CancelLimitOrderUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetConvertTradeHistoryUserDataRequest = {
    /** UTC timestamp in ms */
    startTime: number;
    /** UTC timestamp in ms */
    endTime: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** default 100, max 1000 */
    limit?: number;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class GetConvertTradeHistoryUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetConvertTradeHistoryUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAllConvertPairsRequest = {
    /** User spends coin */
    fromAsset?: string;
    /** User receives coin */
    toAsset?: string;
  };

  export class ListAllConvertPairsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ListAllConvertPairsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type OrderStatusUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    orderId?: string;
    quoteId?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class OrderStatusUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<OrderStatusUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PlaceLimitOrderUserDataRequest = {
    baseAsset: string;
    quoteAsset: string;
    /** Symbol limit price (from baseAsset to quoteAsset) */
    limitPrice: number;
    side: Side;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** Base asset amount. (One of baseAmount or quoteAmount is required) */
    baseAmount?: number;
    /** Quote asset amount. (One of baseAmount or quoteAmount is required) */
    quoteAmount?: number;
    /** SPOT or FUNDING or SPOT_FUNDING. It is to use which type of assets. Default is SPOT. */
    walletType?: WalletType;
    /** 1_D, 3_D, 7_D, 30_D (D means day) */
    expiredType?: ExpiredType;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class PlaceLimitOrderUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<PlaceLimitOrderUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryLimitOpenOrdersUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryLimitOpenOrdersUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryLimitOpenOrdersUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QueryOrderQuantityPrecisionPerAssetUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class QueryOrderQuantityPrecisionPerAssetUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<QueryOrderQuantityPrecisionPerAssetUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SendQuoteRequestUserDataRequest = {
    fromAsset: string;
    toAsset: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** When specified, it is the amount you will be debited after the conversion */
    fromAmount?: number;
    /** When specified, it is the amount you will be debited after the conversion */
    toAmount?: number;
    /** 10s, 30s, 1m, 2m, default 10s */
    validTime?: string;
    /** SPOT or FUNDING. Default is SPOT */
    walletType?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class SendQuoteRequestUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SendQuoteRequestUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
