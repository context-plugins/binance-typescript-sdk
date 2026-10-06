import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

/**
 * Market Data
 */
export class Market {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * 24hr Ticker Price Change Statistics
   *
   * @remarks
   * 24 hour rolling window price change statistics. Careful when accessing this with no symbol.
   *
   * - If the symbol is not sent, tickers for all symbols will be returned in an array.
   *
   * Weight(IP):
   * - `2` for a single symbol;
   * - `80` when the symbol parameter is omitted;
   *
   * @returns 24hr ticker
   *
   * @throws {@link Market.HrTickerPriceChangeStatistics24Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hrTickerPriceChangeStatistics24(
    request: Market.HrTickerPriceChangeStatistics24Request,
    options?: RequestOptions,
  ): ApiPromise<ApiV3Ticker24HrResponse, Market.HrTickerPriceChangeStatistics24Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/ticker/24hr"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => typeSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3Ticker24HrResponseSchema },
        errorFactory: Market.HrTickerPriceChangeStatistics24Error,
      },
      options,
    );
  }

  /**
   * Check Server Time
   *
   * @remarks
   * Test connectivity to the Rest API and get the current server time.
   *
   * Weight(IP): 1
   *
   * @returns Binance server UTC timestamp
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkServerTime(options?: RequestOptions): ApiPromise<ApiV3TimeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/time"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TimeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Compressed/Aggregate Trades List
   *
   * @remarks
   * Get compressed, aggregate trades. Trades that fill at the time, from the same order, with the
   * same price will have the quantity aggregated.
   * - If `fromId`, `startTime`, and `endTime` are not sent, the most recent aggregate trades will
   *   be returned.
   * - Note that if a trade has the following values, this was a duplicate aggregate trade and
   *   marked as invalid:
   *
   * p = '0' // price
   *
   * q = '0' // qty
   *
   * f = -1 // ﬁrst_trade_id
   *
   * l = -1 // last_trade_id
   *
   * Weight(IP): 2
   *
   * @returns Trade list
   *
   * @throws {@link Market.CompressedAggregateTradesListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  compressedAggregateTradesList(
    request: Market.CompressedAggregateTradesListRequest,
    options?: RequestOptions,
  ): ApiPromise<AggTrade[], Market.CompressedAggregateTradesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/aggTrades"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "fromId", value: request.fromId, schema: s.optional(s.int()) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => aggTradeSchema)) },
        errorFactory: Market.CompressedAggregateTradesListError,
      },
      options,
    );
  }

  /**
   * Current Average Price
   *
   * @remarks
   * Current average price for a symbol.
   *
   * Weight(IP): 2
   *
   * @returns Average price
   *
   * @throws {@link Market.CurrentAveragePriceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  currentAveragePrice(
    request: Market.CurrentAveragePriceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3AvgPriceResponse, Market.CurrentAveragePriceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/avgPrice"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3AvgPriceResponseSchema },
        errorFactory: Market.CurrentAveragePriceError,
      },
      options,
    );
  }

  /**
   * Exchange Information
   *
   * @remarks
   * Current exchange trading rules and symbol information
   *
   * - If any symbol provided in either symbol or symbols do not exist, the endpoint will throw an
   *   error.
   * - All parameters are optional.
   * - permissions can support single or multiple values (e.g. SPOT, ["MARGIN","LEVERAGED"])
   * - If permissions parameter not provided, the default values will be
   *   ["SPOT","MARGIN","LEVERAGED"].
   *   - To display all permissions you need to specify them explicitly. (e.g. SPOT, MARGIN,...)
   *
   * Examples of Symbol Permissions Interpretation from the Response:
   * - [["A","B"]] means you may place an order if your account has either permission "A" or
   *   permission "B".
   * - [["A"],["B"]] means you can place an order if your account has permission "A" and permission
   *   "B".
   * - [["A"],["B","C"]] means you can place an order if your account has permission "A" and
   *   permission "B" or permission "C". (Inclusive or is applied here, not exclusive or, so your
   *   account may have both permission "B" and permission "C".)
   *
   * Weight(IP): 10
   *
   * @returns Current exchange trading rules and symbol information
   *
   * @throws {@link Market.ExchangeInformationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exchangeInformation(
    request: Market.ExchangeInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3ExchangeInfoResponse, Market.ExchangeInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/exchangeInfo"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "permissions", value: request.permissions, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3ExchangeInfoResponseSchema },
        errorFactory: Market.ExchangeInformationError,
      },
      options,
    );
  }

  /**
   * Kline/Candlestick Data
   *
   * @remarks
   * Kline/candlestick bars for a symbol. Klines are uniquely identified by their open time.
   *
   * - If `startTime` and `endTime` are not sent, the most recent klines are returned.
   *
   * Weight(IP): 2
   *
   * @returns Kline data
   *
   * @throws {@link Market.KlineCandlestickDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  klineCandlestickData(
    request: Market.KlineCandlestickDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3KlinesResponse[][], Market.KlineCandlestickDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/klines"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "interval", value: request.interval, schema: intervalSchema },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "timeZone", value: request.timeZone, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.array(s.lazy(() => apiV3KlinesResponseSchema))) },
        errorFactory: Market.KlineCandlestickDataError,
      },
      options,
    );
  }

  /**
   * Old Trade Lookup
   *
   * @remarks
   * Get older market trades.
   *
   * Weight(IP): 10
   *
   * @returns Trade list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oldTradeLookup(
    request: Market.OldTradeLookupRequest,
    options?: RequestOptions,
  ): ApiPromise<Trade[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/historicalTrades"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "fromId", value: request.fromId, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tradeSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Order Book
   *
   * @remarks
   * | Limit               | Weight(IP)  |
   * |---------------------|-------------|
   * | 1-100               | 5           |
   * | 101-500             | 25          |
   * | 501-1000            | 50          |
   * | 1001-5000           | 250         |
   *
   * @returns Order book
   *
   * @throws {@link Market.OrderBookError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  orderBook(
    request: Market.OrderBookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3DepthResponse, Market.OrderBookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/depth"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3DepthResponseSchema },
        errorFactory: Market.OrderBookError,
      },
      options,
    );
  }

  /**
   * Recent Trades List
   *
   * @remarks
   * Get recent trades.
   *
   * Weight(IP): 10
   *
   * @returns Trade list
   *
   * @throws {@link Market.RecentTradesListError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recentTradesList(
    request: Market.RecentTradesListRequest,
    options?: RequestOptions,
  ): ApiPromise<Trade[], Market.RecentTradesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/trades"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tradeSchema)) },
        errorFactory: Market.RecentTradesListError,
      },
      options,
    );
  }

  /**
   * Rolling window price change statistics
   *
   * @remarks
   * The window used to compute statistics is typically slightly wider than requested windowSize.
   *
   * openTime for /api/v3/ticker always starts on a minute, while the closeTime is the current time
   * of the request. As such, the effective window might be up to 1 minute wider than requested.
   *
   * E.g. If the closeTime is 1641287867099 (January 04, 2022 09:17:47:099 UTC) , and the windowSize
   * is 1d. the openTime will be: 1641201420000 (January 3, 2022, 09:17:00 UTC)
   *
   * Weight(IP): 4 for each requested symbol regardless of windowSize.
   *
   * The weight for this request will cap at 200 once the number of symbols in the request is more
   * than 50.
   *
   * @returns Rolling price ticker
   *
   * @throws {@link Market.RollingWindowPriceChangeStatisticsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rollingWindowPriceChangeStatistics(
    request: Market.RollingWindowPriceChangeStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3TickerResponse, Market.RollingWindowPriceChangeStatisticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/ticker"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "windowSize", value: request.windowSize, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TickerResponseSchema },
        errorFactory: Market.RollingWindowPriceChangeStatisticsError,
      },
      options,
    );
  }

  /**
   * Symbol Order Book Ticker
   *
   * @remarks
   * Best price/qty on the order book for a symbol or symbols.
   *
   * - If the symbol is not sent, bookTickers for all symbols will be returned in an array.
   *
   * Weight(IP):
   * - `2` for a single symbol;
   * - `4` when the symbol parameter is omitted;
   *
   * @returns Order book ticker
   *
   * @throws {@link Market.SymbolOrderBookTickerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  symbolOrderBookTicker(
    request: Market.SymbolOrderBookTickerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3TickerBookTickerResponse, Market.SymbolOrderBookTickerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/ticker/bookTicker"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TickerBookTickerResponseSchema },
        errorFactory: Market.SymbolOrderBookTickerError,
      },
      options,
    );
  }

  /**
   * Symbol Price Ticker
   *
   * @remarks
   * Latest price for a symbol or symbols.
   *
   * - If the symbol is not sent, prices for all symbols will be returned in an array.
   *
   * Weight(IP):
   * - `2` for a single symbol;
   * - `4` when the symbol parameter is omitted;
   *
   * @returns Price ticker
   *
   * @throws {@link Market.SymbolPriceTickerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  symbolPriceTicker(
    request: Market.SymbolPriceTickerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3TickerPriceResponse, Market.SymbolPriceTickerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/ticker/price"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TickerPriceResponseSchema },
        errorFactory: Market.SymbolPriceTickerError,
      },
      options,
    );
  }

  /**
   * Test Connectivity
   *
   * @remarks
   * Test connectivity to the Rest API.
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
  testConnectivity(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/ping"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Trading Day Ticker
   *
   * @remarks
   * Price change statistics for a trading day.
   *
   * Notes:
   * - Supported values for timeZone:
   *   - Hours and minutes (e.g. -1:00, 05:45)
   *   - Only hours (e.g. 0, 8, 4)
   *
   * Weight:
   * - `4` for each requested symbol.
   * - The weight for this request will cap at `200` once the number of symbols in the request is
   *   more than `50`.
   *
   * @returns Trading day ticker
   *
   * @throws {@link Market.TradingDayTickerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tradingDayTicker(
    request: Market.TradingDayTickerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3TickerTradingDayResponse, Market.TradingDayTickerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/ticker/tradingDay"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "symbols", value: request.symbols, schema: s.optional(s.string()) },
          { name: "timeZone", value: request.timeZone, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => typeSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV3TickerTradingDayResponseSchema },
        errorFactory: Market.TradingDayTickerError,
      },
      options,
    );
  }

  /**
   * UIKlines
   *
   * @remarks
   * The request is similar to klines having the same parameters and response.
   *
   * uiKlines return modified kline data, optimized for presentation of candlestick charts.
   *
   * Weight(IP): 2
   *
   * @returns UIKline data
   *
   * @throws {@link Market.UiKlinesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uiKlines(
    request: Market.UiKlinesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV3UiKlinesResponse[][], Market.UiKlinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/uiKlines"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "interval", value: request.interval, schema: intervalSchema },
          { name: "startTime", value: request.startTime, schema: s.optional(s.int()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.int()) },
          { name: "timeZone", value: request.timeZone, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
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
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    symbols?: string;
    /** Supported values: FULL or MINI. If none provided, the default is FULL */
    type?: Type;
  };

  export class HrTickerPriceChangeStatistics24Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<HrTickerPriceChangeStatistics24Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CompressedAggregateTradesListRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** Trade id to fetch from. Default gets most recent trades. */
    fromId?: number;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default 500; max 1000. */
    limit?: number;
  };

  export class CompressedAggregateTradesListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<CompressedAggregateTradesListError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CurrentAveragePriceRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
  };

  export class CurrentAveragePriceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<CurrentAveragePriceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ExchangeInformationRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    symbols?: string;
    permissions?: string;
  };

  export class ExchangeInformationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<ExchangeInformationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type KlineCandlestickDataRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** kline intervals */
    interval: Interval;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default: 0 (UTC) */
    timeZone?: string;
    /** Default 500; max 1000. */
    limit?: number;
  };

  export class KlineCandlestickDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<KlineCandlestickDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type OldTradeLookupRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** Default 500; max 1000. */
    limit?: number;
    /** Trade id to fetch from. Default gets most recent trades. */
    fromId?: number;
  };

  export type OrderBookRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** If limit > 5000, then the response will truncate to 5000 @default 100 */
    limit?: number;
  };

  export class OrderBookError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<OrderBookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RecentTradesListRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** Default 500; max 1000. */
    limit?: number;
  };

  export class RecentTradesListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<RecentTradesListError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RollingWindowPriceChangeStatisticsRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    symbols?: string;
    /**
     * Defaults to 1d if no parameter provided. Supported windowSize values: 1m,2m....59m for
     * minutes 1h, 2h....23h - for hours 1d...7d - for days.
     *
     * Units cannot be combined (e.g. 1d2h is not allowed)
     */
    windowSize?: string;
    /** Supported values: FULL or MINI. If none provided, the default is FULL */
    type?: string;
  };

  export class RollingWindowPriceChangeStatisticsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<RollingWindowPriceChangeStatisticsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SymbolOrderBookTickerRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    symbols?: string;
  };

  export class SymbolOrderBookTickerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<SymbolOrderBookTickerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SymbolPriceTickerRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    symbols?: string;
  };

  export class SymbolPriceTickerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<SymbolPriceTickerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TradingDayTickerRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol?: string;
    symbols?: string;
    /** Default: 0 (UTC) */
    timeZone?: string;
    /** Supported values: FULL or MINI. If none provided, the default is FULL */
    type?: Type;
  };

  export class TradingDayTickerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<TradingDayTickerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UiKlinesRequest = {
    /** Trading symbol, e.g. BNBUSDT */
    symbol: string;
    /** kline intervals */
    interval: Interval;
    /** UTC timestamp in ms */
    startTime?: number;
    /** UTC timestamp in ms */
    endTime?: number;
    /** Default: 0 (UTC) */
    timeZone?: string;
    /** Default 500; max 1000. */
    limit?: number;
  };

  export class UiKlinesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<UiKlinesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
