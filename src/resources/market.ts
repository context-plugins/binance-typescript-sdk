import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, noneAuth, s } from "../core/index.js";
import { aggTradeSchema, type AggTrade } from "../models/agg-trade.js";
import {
  apiV3AvgPriceResponseSchema,
  type ApiV3AvgPriceResponse,
} from "../models/api-v3-avg-price-response.js";
import { apiV3DepthResponseSchema, type ApiV3DepthResponse } from "../models/api-v3-depth-response.js";
import {
  apiV3ExchangeInfoResponseSchema,
  type ApiV3ExchangeInfoResponse,
} from "../models/api-v3-exchange-info-response.js";
import { apiV3TickerResponseSchema, type ApiV3TickerResponse } from "../models/api-v3-ticker-response.js";
import { apiV3TimeResponseSchema, type ApiV3TimeResponse } from "../models/api-v3-time-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { intervalSchema, type Interval } from "../models/interval.js";
import { tradeSchema, type Trade } from "../models/trade.js";
import { typeSchema, type Type } from "../models/type.js";
import {
  apiV3KlinesResponseSchema,
  type ApiV3KlinesResponse,
} from "../models/unions/api-v3-klines-response.js";
import {
  apiV3TickerBookTickerResponseSchema,
  type ApiV3TickerBookTickerResponse,
} from "../models/unions/api-v3-ticker-book-ticker-response.js";
import {
  apiV3TickerPriceResponseSchema,
  type ApiV3TickerPriceResponse,
} from "../models/unions/api-v3-ticker-price-response.js";
import {
  apiV3TickerTradingDayResponseSchema,
  type ApiV3TickerTradingDayResponse,
} from "../models/unions/api-v3-ticker-trading-day-response.js";
import {
  apiV3Ticker24HrResponseSchema,
  type ApiV3Ticker24HrResponse,
} from "../models/unions/api-v3-ticker24-hr-response.js";
import {
  apiV3UiKlinesResponseSchema,
  type ApiV3UiKlinesResponse,
} from "../models/unions/api-v3-ui-klines-response.js";
import type { Servers } from "../servers.js";

export class Market {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  hrTickerPriceChangeStatistics24(
    request: Market.HrTickerPriceChangeStatistics24Request,
    options?: RequestOptions,
  ): ApiPromise<ApiV3Ticker24HrResponse, Market.HrTickerPriceChangeStatistics24Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/ticker/24hr"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => typeSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3Ticker24HrResponseSchema },
        errorFactory: Market.HrTickerPriceChangeStatistics24Error,
      },
      options,
    );
  }

  checkServerTime(options?: RequestOptions): ApiPromise<ApiV3TimeResponse, ResponseError> {
    return this.#rawClient.execute<ApiV3TimeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/time"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TimeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  compressedAggregateTradesList(
    request: Market.CompressedAggregateTradesListRequest,
    options?: RequestOptions,
  ): ApiPromise<AggTrade[], Market.CompressedAggregateTradesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/aggTrades"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "fromId", value: request.fromId, schema: s.optional(s.number()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => aggTradeSchema)) },
        errorFactory: Market.CompressedAggregateTradesListError,
      },
      options,
    );
  }

  currentAveragePrice(
    request: Market.CurrentAveragePriceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3AvgPriceResponse, Market.CurrentAveragePriceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/avgPrice"),
        auth: noneAuth,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3AvgPriceResponseSchema },
        errorFactory: Market.CurrentAveragePriceError,
      },
      options,
    );
  }

  exchangeInformation(
    request: Market.ExchangeInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3ExchangeInfoResponse, Market.ExchangeInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/exchangeInfo"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "permissions", value: request.permissions, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3ExchangeInfoResponseSchema },
        errorFactory: Market.ExchangeInformationError,
      },
      options,
    );
  }

  klineCandlestickData(
    request: Market.KlineCandlestickDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3KlinesResponse[][], Market.KlineCandlestickDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/klines"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "interval", value: request.interval, schema: intervalSchema },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "timeZone", value: request.timeZone, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.array(s.lazy(() => apiV3KlinesResponseSchema))) },
        errorFactory: Market.KlineCandlestickDataError,
      },
      options,
    );
  }

  oldTradeLookup(
    request: Market.OldTradeLookupRequest,
    options?: RequestOptions,
  ): ApiPromise<Trade[], ResponseError> {
    return this.#rawClient.execute<Trade[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/historicalTrades"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tradeSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  orderBook(
    request: Market.OrderBookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3DepthResponse, Market.OrderBookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/depth"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 100) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3DepthResponseSchema },
        errorFactory: Market.OrderBookError,
      },
      options,
    );
  }

  recentTradesList(
    request: Market.RecentTradesListRequest,
    options?: RequestOptions,
  ): ApiPromise<Trade[], Market.RecentTradesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/trades"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tradeSchema)) },
        errorFactory: Market.RecentTradesListError,
      },
      options,
    );
  }

  rollingWindowPriceChangeStatistics(
    request: Market.RollingWindowPriceChangeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3TickerResponse, Market.RollingWindowPriceChangeStatisticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/ticker"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "windowSize", value: request.windowSize, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TickerResponseSchema },
        errorFactory: Market.RollingWindowPriceChangeStatisticsError,
      },
      options,
    );
  }

  symbolOrderBookTicker(
    request: Market.SymbolOrderBookTickerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3TickerBookTickerResponse, Market.SymbolOrderBookTickerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/ticker/bookTicker"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TickerBookTickerResponseSchema },
        errorFactory: Market.SymbolOrderBookTickerError,
      },
      options,
    );
  }

  symbolPriceTicker(
    request: Market.SymbolPriceTickerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3TickerPriceResponse, Market.SymbolPriceTickerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/ticker/price"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TickerPriceResponseSchema },
        errorFactory: Market.SymbolPriceTickerError,
      },
      options,
    );
  }

  testConnectivity(options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/ping"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  tradingDayTicker(
    request: Market.TradingDayTickerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3TickerTradingDayResponse, Market.TradingDayTickerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/ticker/tradingDay"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "timeZone", value: request.timeZone, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => typeSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TickerTradingDayResponseSchema },
        errorFactory: Market.TradingDayTickerError,
      },
      options,
    );
  }

  uiKlines(
    request: Market.UiKlinesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3UiKlinesResponse[][], Market.UiKlinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/api/v3/uiKlines"),
        auth: noneAuth,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "interval", value: request.interval, schema: intervalSchema },
          { name: "startTime", value: request.startTime, schema: s.optional(s.number()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.number()) },
          { name: "timeZone", value: request.timeZone, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.array(s.lazy(() => apiV3UiKlinesResponseSchema))) },
        errorFactory: Market.UiKlinesError,
      },
      options,
    );
  }
}

export namespace Market {
  export type HrTickerPriceChangeStatistics24Request = {
    symbol?: string;
    symbols?: string;
    type?: Type;
  };

  export class HrTickerPriceChangeStatistics24Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<HrTickerPriceChangeStatistics24Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CompressedAggregateTradesListRequest = {
    symbol: string;
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
  };

  export class CompressedAggregateTradesListError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<CompressedAggregateTradesListError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CurrentAveragePriceRequest = {
    symbol: string;
  };

  export class CurrentAveragePriceError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<CurrentAveragePriceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ExchangeInformationRequest = {
    symbol?: string;
    symbols?: string;
    permissions?: string;
  };

  export class ExchangeInformationError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<ExchangeInformationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type KlineCandlestickDataRequest = {
    symbol: string;
    interval: Interval;
    startTime?: number;
    endTime?: number;
    timeZone?: string;
    limit?: number;
  };

  export class KlineCandlestickDataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<KlineCandlestickDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type OldTradeLookupRequest = {
    symbol: string;
    limit?: number;
    fromId?: number;
  };

  export type OrderBookRequest = {
    symbol: string;
    limit?: number;
  };

  export class OrderBookError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<OrderBookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RecentTradesListRequest = {
    symbol: string;
    limit?: number;
  };

  export class RecentTradesListError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<RecentTradesListError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RollingWindowPriceChangeStatisticsRequest = {
    symbol?: string;
    symbols?: string;
    windowSize?: string;
    type?: string;
  };

  export class RollingWindowPriceChangeStatisticsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<RollingWindowPriceChangeStatisticsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SymbolOrderBookTickerRequest = {
    symbol?: string;
    symbols?: string;
  };

  export class SymbolOrderBookTickerError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<SymbolOrderBookTickerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SymbolPriceTickerRequest = {
    symbol?: string;
    symbols?: string;
  };

  export class SymbolPriceTickerError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<SymbolPriceTickerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TradingDayTickerRequest = {
    symbol?: string;
    symbols?: string;
    timeZone?: string;
    type?: Type;
  };

  export class TradingDayTickerError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<TradingDayTickerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UiKlinesRequest = {
    symbol: string;
    interval: Interval;
    startTime?: number;
    endTime?: number;
    timeZone?: string;
    limit?: number;
  };

  export class UiKlinesError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<UiKlinesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
