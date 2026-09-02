# Reference

> Source: [BinancePublicSpotApiClient](src/client.ts)

## Market

> Source: [Market](src/resources/market.ts)

<details>
<summary><code>hrTickerPriceChangeStatistics24(request: Market.HrTickerPriceChangeStatistics24Request, options?: RequestOptions): ApiPromise&lt;ApiV3Ticker24HrResponse, Market.HrTickerPriceChangeStatistics24Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

24 hour rolling window price change statistics. Careful when accessing this with no symbol.

- If the symbol is not sent, tickers for all symbols will be returned in an array.

Weight(IP):
- `2` for a single symbol;
- `80` when the symbol parameter is omitted;

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.hrTickerPriceChangeStatistics24();
  // TODO: Handle 'response' of type ApiV3Ticker24HrResponse
} catch (err) {
  if (err instanceof Market.HrTickerPriceChangeStatistics24Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>symbols?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[Type](src/models/type.ts)</code> | Supported values: FULL or MINI.<br>If none provided, the default is FULL |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3Ticker24HrResponse](src/models/unions/api-v3-ticker24-hr-response.ts)</code>

**OnError**: <code>[Market.HrTickerPriceChangeStatistics24Error](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkServerTime(options?: RequestOptions): ApiPromise&lt;ApiV3TimeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Test connectivity to the Rest API and get the current server time.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.checkServerTime();
  // TODO: Handle 'response' of type ApiV3TimeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3TimeResponse](src/models/api-v3-time-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>compressedAggregateTradesList(request: Market.CompressedAggregateTradesListRequest, options?: RequestOptions): ApiPromise&lt;AggTrade[], Market.CompressedAggregateTradesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get compressed, aggregate trades. Trades that fill at the time, from the same order, with the same price will have the quantity aggregated.
- If `fromId`, `startTime`, and `endTime` are not sent, the most recent aggregate trades will be returned.
- Note that if a trade has the following values, this was a duplicate aggregate trade and marked as invalid:

  p = '0' // price

  q = '0' // qty

  f = -1 // ﬁrst_trade_id

  l = -1 // last_trade_id

Weight(IP): 2

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.compressedAggregateTradesList({ symbol });
  // TODO: Handle 'response' of type AggTrade[]
} catch (err) {
  if (err instanceof Market.CompressedAggregateTradesListError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>fromId?</code> | <code>number</code> | Trade id to fetch from. Default gets most recent trades. |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AggTrade](src/models/agg-trade.ts)[]</code>

**OnError**: <code>[Market.CompressedAggregateTradesListError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>currentAveragePrice(request: Market.CurrentAveragePriceRequest, options?: RequestOptions): ApiPromise&lt;ApiV3AvgPriceResponse, Market.CurrentAveragePriceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current average price for a symbol.

Weight(IP): 2

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.currentAveragePrice({ symbol });
  // TODO: Handle 'response' of type ApiV3AvgPriceResponse
} catch (err) {
  if (err instanceof Market.CurrentAveragePriceError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3AvgPriceResponse](src/models/api-v3-avg-price-response.ts)</code>

**OnError**: <code>[Market.CurrentAveragePriceError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangeInformation(request: Market.ExchangeInformationRequest, options?: RequestOptions): ApiPromise&lt;ApiV3ExchangeInfoResponse, Market.ExchangeInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current exchange trading rules and symbol information

- If any symbol provided in either symbol or symbols do not exist, the endpoint will throw an error.
- All parameters are optional.
- permissions can support single or multiple values (e.g. SPOT, ["MARGIN","LEVERAGED"])
- If permissions parameter not provided, the default values will be ["SPOT","MARGIN","LEVERAGED"].
  - To display all permissions you need to specify them explicitly. (e.g. SPOT, MARGIN,...)

Examples of Symbol Permissions Interpretation from the Response:
- [["A","B"]] means you may place an order if your account has either permission "A" or permission "B".
- [["A"],["B"]] means you can place an order if your account has permission "A" and permission "B".
- [["A"],["B","C"]] means you can place an order if your account has permission "A" and permission "B" or permission "C". (Inclusive or is applied here, not exclusive or, so your account may have both permission "B" and permission "C".)

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.exchangeInformation();
  // TODO: Handle 'response' of type ApiV3ExchangeInfoResponse
} catch (err) {
  if (err instanceof Market.ExchangeInformationError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>symbols?</code> | <code>string</code> | - |
| <code>permissions?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3ExchangeInfoResponse](src/models/api-v3-exchange-info-response.ts)</code>

**OnError**: <code>[Market.ExchangeInformationError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>klineCandlestickData(request: Market.KlineCandlestickDataRequest, options?: RequestOptions): ApiPromise&lt;ApiV3KlinesResponse[][], Market.KlineCandlestickDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kline/candlestick bars for a symbol.
Klines are uniquely identified by their open time.

- If `startTime` and `endTime` are not sent, the most recent klines are returned.

Weight(IP): 2

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.klineCandlestickData({ symbol, interval });
  // TODO: Handle 'response' of type ApiV3KlinesResponse[][]
} catch (err) {
  if (err instanceof Market.KlineCandlestickDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>interval</code> | <code>[Interval](src/models/interval.ts)</code> | kline intervals |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>timeZone?</code> | <code>string</code> | Default: 0 (UTC) |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3KlinesResponse](src/models/unions/api-v3-klines-response.ts)[][]</code>

**OnError**: <code>[Market.KlineCandlestickDataError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oldTradeLookup(request: Market.OldTradeLookupRequest, options?: RequestOptions): ApiPromise&lt;Trade[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get older market trades.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.oldTradeLookup({ symbol });
  // TODO: Handle 'response' of type Trade[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>fromId?</code> | <code>number</code> | Trade id to fetch from. Default gets most recent trades. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Trade](src/models/trade.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>orderBook(request: Market.OrderBookRequest, options?: RequestOptions): ApiPromise&lt;ApiV3DepthResponse, Market.OrderBookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

| Limit               | Weight(IP)  |
|---------------------|-------------|
| 1-100               | 5           |
| 101-500             | 25          |
| 501-1000            | 50          |
| 1001-5000           | 250         |

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.orderBook({ symbol });
  // TODO: Handle 'response' of type ApiV3DepthResponse
} catch (err) {
  if (err instanceof Market.OrderBookError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>limit?</code> | <code>number</code> | If limit > 5000, then the response will truncate to 5000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3DepthResponse](src/models/api-v3-depth-response.ts)</code>

**OnError**: <code>[Market.OrderBookError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recentTradesList(request: Market.RecentTradesListRequest, options?: RequestOptions): ApiPromise&lt;Trade[], Market.RecentTradesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get recent trades.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.recentTradesList({ symbol });
  // TODO: Handle 'response' of type Trade[]
} catch (err) {
  if (err instanceof Market.RecentTradesListError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Trade](src/models/trade.ts)[]</code>

**OnError**: <code>[Market.RecentTradesListError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rollingWindowPriceChangeStatistics(request: Market.RollingWindowPriceChangeStatisticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV3TickerResponse, Market.RollingWindowPriceChangeStatisticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The window used to compute statistics is typically slightly wider than requested windowSize.

openTime for /api/v3/ticker always starts on a minute, while the closeTime is the current time of the request. As such, the effective window might be up to 1 minute wider than requested.

E.g. If the closeTime is 1641287867099 (January 04, 2022 09:17:47:099 UTC) , and the windowSize is 1d. the openTime will be: 1641201420000 (January 3, 2022, 09:17:00 UTC)

Weight(IP): 4 for each requested symbol regardless of windowSize.

The weight for this request will cap at 200 once the number of symbols in the request is more than 50.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.rollingWindowPriceChangeStatistics();
  // TODO: Handle 'response' of type ApiV3TickerResponse
} catch (err) {
  if (err instanceof Market.RollingWindowPriceChangeStatisticsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>symbols?</code> | <code>string</code> | - |
| <code>windowSize?</code> | <code>string</code> | Defaults to 1d if no parameter provided.<br>Supported windowSize values:<br>1m,2m....59m for minutes<br>1h, 2h....23h - for hours<br>1d...7d - for days.<br><br>Units cannot be combined (e.g. 1d2h is not allowed) |
| <code>type?</code> | <code>string</code> | Supported values: FULL or MINI.<br>If none provided, the default is FULL |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3TickerResponse](src/models/api-v3-ticker-response.ts)</code>

**OnError**: <code>[Market.RollingWindowPriceChangeStatisticsError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>symbolOrderBookTicker(request: Market.SymbolOrderBookTickerRequest, options?: RequestOptions): ApiPromise&lt;ApiV3TickerBookTickerResponse, Market.SymbolOrderBookTickerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Best price/qty on the order book for a symbol or symbols.

- If the symbol is not sent, bookTickers for all symbols will be returned in an array.

Weight(IP):
- `2` for a single symbol;
- `4` when the symbol parameter is omitted;

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.symbolOrderBookTicker();
  // TODO: Handle 'response' of type ApiV3TickerBookTickerResponse
} catch (err) {
  if (err instanceof Market.SymbolOrderBookTickerError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>symbols?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3TickerBookTickerResponse](src/models/unions/api-v3-ticker-book-ticker-response.ts)</code>

**OnError**: <code>[Market.SymbolOrderBookTickerError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>symbolPriceTicker(request: Market.SymbolPriceTickerRequest, options?: RequestOptions): ApiPromise&lt;ApiV3TickerPriceResponse, Market.SymbolPriceTickerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Latest price for a symbol or symbols.

- If the symbol is not sent, prices for all symbols will be returned in an array.

Weight(IP):
- `2` for a single symbol;
- `4` when the symbol parameter is omitted;

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.symbolPriceTicker();
  // TODO: Handle 'response' of type ApiV3TickerPriceResponse
} catch (err) {
  if (err instanceof Market.SymbolPriceTickerError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>symbols?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3TickerPriceResponse](src/models/unions/api-v3-ticker-price-response.ts)</code>

**OnError**: <code>[Market.SymbolPriceTickerError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testConnectivity(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Test connectivity to the Rest API.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.testConnectivity();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tradingDayTicker(request: Market.TradingDayTickerRequest, options?: RequestOptions): ApiPromise&lt;ApiV3TickerTradingDayResponse, Market.TradingDayTickerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Price change statistics for a trading day.

Notes:
- Supported values for timeZone:
  - Hours and minutes (e.g. -1:00, 05:45)
  - Only hours (e.g. 0, 8, 4)

Weight:
- `4` for each requested symbol.
- The weight for this request will cap at `200` once the number of symbols in the request is more than `50`.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.tradingDayTicker();
  // TODO: Handle 'response' of type ApiV3TickerTradingDayResponse
} catch (err) {
  if (err instanceof Market.TradingDayTickerError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>symbols?</code> | <code>string</code> | - |
| <code>timeZone?</code> | <code>string</code> | Default: 0 (UTC) |
| <code>type?</code> | <code>[Type](src/models/type.ts)</code> | Supported values: FULL or MINI.<br>If none provided, the default is FULL |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3TickerTradingDayResponse](src/models/unions/api-v3-ticker-trading-day-response.ts)</code>

**OnError**: <code>[Market.TradingDayTickerError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uiKlines(request: Market.UiKlinesRequest, options?: RequestOptions): ApiPromise&lt;ApiV3UiKlinesResponse[][], Market.UiKlinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The request is similar to klines having the same parameters and response.

uiKlines return modified kline data, optimized for presentation of candlestick charts.

Weight(IP): 2

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.uiKlines({ symbol, interval });
  // TODO: Handle 'response' of type ApiV3UiKlinesResponse[][]
} catch (err) {
  if (err instanceof Market.UiKlinesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>interval</code> | <code>[Interval](src/models/interval.ts)</code> | kline intervals |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>timeZone?</code> | <code>string</code> | Default: 0 (UTC) |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3UiKlinesResponse](src/models/unions/api-v3-ui-klines-response.ts)[][]</code>

**OnError**: <code>[Market.UiKlinesError](src/resources/market.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TradeApi

> Source: [TradeApi](src/resources/trade-api.ts)

<details>
<summary><code>accountInformationUserData(request: TradeApi.AccountInformationUserDataRequest, options?: RequestOptions): ApiPromise&lt;Account, TradeApi.AccountInformationUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current account information.

Weight(IP): 20

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.accountInformationUserData({ timestamp, signature });
  // TODO: Handle 'response' of type Account
} catch (err) {
  if (err instanceof TradeApi.AccountInformationUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](src/models/account.ts)</code>

**OnError**: <code>[TradeApi.AccountInformationUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>accountTradeListUserData(request: TradeApi.AccountTradeListUserDataRequest, options?: RequestOptions): ApiPromise&lt;MyTrade[], TradeApi.AccountTradeListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get trades for a specific account and symbol.

If `fromId` is set, it will get id >= that `fromId`. Otherwise most recent orders are returned.

The time between startTime and endTime can't be longer than 24 hours.
These are the supported combinations of all parameters:

  symbol

  symbol + orderId

  symbol + startTime

  symbol + endTime

  symbol + fromId

  symbol + startTime + endTime

  symbol+ orderId + fromId

Weight(IP): 20

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.accountTradeListUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type MyTrade[]
} catch (err) {
  if (err instanceof TradeApi.AccountTradeListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | This can only be used in combination with symbol. |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>fromId?</code> | <code>number</code> | Trade id to fetch from. Default gets most recent trades. |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MyTrade](src/models/my-trade.ts)[]</code>

**OnError**: <code>[TradeApi.AccountTradeListUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allOrdersUserData(request: TradeApi.AllOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;OrderDetails[], TradeApi.AllOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all account orders; active, canceled, or filled..

- If `orderId` is set, it will get orders >= that `orderId`. Otherwise most recent orders are returned.
- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.
- If `startTime` and/or `endTime` provided, `orderId` is not required

Weight(IP): 20

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.allOrdersUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type OrderDetails[]
} catch (err) {
  if (err instanceof TradeApi.AllOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderDetails](src/models/order-details.ts)[]</code>

**OnError**: <code>[TradeApi.AllOrdersUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelOcoTrade(request: TradeApi.CancelOcoTradeRequest, options?: RequestOptions): ApiPromise&lt;OcoOrder, TradeApi.CancelOcoTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an entire Order List

Canceling an individual leg will cancel the entire OCO

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.cancelOcoTrade({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type OcoOrder
} catch (err) {
  if (err instanceof TradeApi.CancelOcoTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderListId?</code> | <code>number</code> | Order list id |
| <code>listClientOrderId?</code> | <code>string</code> | A unique Id for the entire orderList |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OcoOrder](src/models/oco-order.ts)</code>

**OnError**: <code>[TradeApi.CancelOcoTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelOrderTrade(request: TradeApi.CancelOrderTradeRequest, options?: RequestOptions): ApiPromise&lt;Order, TradeApi.CancelOrderTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an active order.

Either `orderId` or `origClientOrderId` must be sent.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.cancelOrderTrade({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type Order
} catch (err) {
  if (err instanceof TradeApi.CancelOrderTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>origClientOrderId?</code> | <code>string</code> | Order id from client |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>cancelRestrictions?</code> | <code>[CancelRestrictions](src/models/cancel-restrictions.ts)</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](src/models/order.ts)</code>

**OnError**: <code>[TradeApi.CancelOrderTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelAllOpenOrdersOnASymbolTrade(request: TradeApi.CancelAllOpenOrdersOnASymbolTradeRequest, options?: RequestOptions): ApiPromise&lt;ApiV3OpenOrdersResponse[], TradeApi.CancelAllOpenOrdersOnASymbolTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels all active orders on a symbol.
This includes OCO orders.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.cancelAllOpenOrdersOnASymbolTrade({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type ApiV3OpenOrdersResponse[]
} catch (err) {
  if (err instanceof TradeApi.CancelAllOpenOrdersOnASymbolTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3OpenOrdersResponse](src/models/unions/api-v3-open-orders-response.ts)[]</code>

**OnError**: <code>[TradeApi.CancelAllOpenOrdersOnASymbolTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelAnExistingOrderAndSendANewOrderTrade(request: TradeApi.CancelAnExistingOrderAndSendANewOrderTradeRequest, options?: RequestOptions): ApiPromise&lt;ApiV3OrderCancelReplaceResponse, TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an existing order and places a new order on the same symbol.

Filters and Order Count are evaluated before the processing of the cancellation and order placement occurs.

A new order that was not attempted (i.e. when newOrderResult: NOT_ATTEMPTED), will still increase the order count by 1.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.cancelAnExistingOrderAndSendANewOrderTrade({
    symbol,
    side,
    type,
    cancelReplaceMode,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type ApiV3OrderCancelReplaceResponse
} catch (err) {
  if (
    err instanceof TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>type</code> | <code>[Type1](src/models/type1.ts)</code> | Order type |
| <code>cancelReplaceMode</code> | <code>string</code> | - `STOP_ON_FAILURE` If the cancel request fails, the new order placement will not be attempted.<br>- `ALLOW_FAILURES` If new order placement will be attempted even if cancel request fails. |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>cancelRestrictions?</code> | <code>[CancelRestrictions](src/models/cancel-restrictions.ts)</code> | - |
| <code>timeInForce?</code> | <code>[TimeInForce](src/models/time-in-force.ts)</code> | Order time in force |
| <code>quantity?</code> | <code>number</code> | Order quantity |
| <code>quoteOrderQty?</code> | <code>number</code> | Quote quantity |
| <code>price?</code> | <code>number</code> | Order price |
| <code>cancelNewClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>cancelOrigClientOrderId?</code> | <code>string</code> | Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence. |
| <code>cancelOrderId?</code> | <code>number</code> | Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence. |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>strategyId?</code> | <code>number</code> | - |
| <code>strategyType?</code> | <code>number</code> | The value cannot be less than 1000000. |
| <code>stopPrice?</code> | <code>number</code> | Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. |
| <code>trailingDelta?</code> | <code>number</code> | Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. |
| <code>icebergQty?</code> | <code>number</code> | Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3OrderCancelReplaceResponse](src/models/api-v3-order-cancel-replace-response.ts)</code>

**OnError**: <code>[TradeApi.CancelAnExistingOrderAndSendANewOrderTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>currentOpenOrdersUserData(request: TradeApi.CurrentOpenOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;OrderDetails[], TradeApi.CurrentOpenOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all open orders on a symbol. Careful when accessing this with no symbol.

Weight(IP):
- `6` for a single symbol;
- `80` when the symbol parameter is omitted;

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.currentOpenOrdersUserData({ timestamp, signature });
  // TODO: Handle 'response' of type OrderDetails[]
} catch (err) {
  if (err instanceof TradeApi.CurrentOpenOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderDetails](src/models/order-details.ts)[]</code>

**OnError**: <code>[TradeApi.CurrentOpenOrdersUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>newOrderTrade(request: TradeApi.NewOrderTradeRequest, options?: RequestOptions): ApiPromise&lt;ApiV3OrderResponse, TradeApi.NewOrderTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send in a new order.

- `LIMIT_MAKER` are `LIMIT` orders that will be rejected if they would immediately match and trade as a taker.
- `STOP_LOSS` and `TAKE_PROFIT` will execute a `MARKET` order when the `stopPrice` is reached.
- Any `LIMIT` or `LIMIT_MAKER` type order can be made an iceberg order by sending an `icebergQty`.
- Any order with an `icebergQty` MUST have `timeInForce` set to `GTC`.
- `MARKET` orders using `quantity` specifies how much a user wants to buy or sell based on the market price.
- `MARKET` orders using `quoteOrderQty` specifies the amount the user wants to spend (when buying) or receive (when selling) of the quote asset; the correct quantity will be determined based on the market liquidity and `quoteOrderQty`.
- `MARKET` orders using `quoteOrderQty` will not break `LOT_SIZE` filter rules; the order will execute a quantity that will have the notional value as close as possible to `quoteOrderQty`.
- same `newClientOrderId` can be accepted only when the previous one is filled, otherwise the order will be rejected.

Trigger order price rules against market price for both `MARKET` and `LIMIT` versions:

- Price above market price: `STOP_LOSS` `BUY`, `TAKE_PROFIT` `SELL`
- Price below market price: `STOP_LOSS` `SELL`, `TAKE_PROFIT` `BUY`


Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.newOrderTrade({ symbol, side, type, timestamp, signature });
  // TODO: Handle 'response' of type ApiV3OrderResponse
} catch (err) {
  if (err instanceof TradeApi.NewOrderTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>type</code> | <code>[Type1](src/models/type1.ts)</code> | Order type |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>timeInForce?</code> | <code>[TimeInForce](src/models/time-in-force.ts)</code> | Order time in force |
| <code>quantity?</code> | <code>number</code> | Order quantity |
| <code>quoteOrderQty?</code> | <code>number</code> | Quote quantity |
| <code>price?</code> | <code>number</code> | Order price |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>strategyId?</code> | <code>number</code> | - |
| <code>strategyType?</code> | <code>number</code> | The value cannot be less than 1000000. |
| <code>stopPrice?</code> | <code>number</code> | Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. |
| <code>trailingDelta?</code> | <code>number</code> | Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. |
| <code>icebergQty?</code> | <code>number</code> | Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3OrderResponse](src/models/unions/api-v3-order-response.ts)</code>

**OnError**: <code>[TradeApi.NewOrderTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>newOrderListOtoTrade(request: TradeApi.NewOrderListOtoTradeRequest, options?: RequestOptions): ApiPromise&lt;ApiV3OrderListOtoResponse, TradeApi.NewOrderListOtoTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Places an `OTO`.
- An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders.
- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.
- The second order is called the pending order. It can be any order type except for `MARKET` orders using parameter `quoteOrderQty`. The pending order is only placed on the order book when the working order gets fully filled.
- If either the working order or the pending order is cancelled individually, the other order in the order list will also be canceled or expired.
- When the order list is placed, if the working order gets immediately fully filled, the placement response will show the working order as `FILLED` but the pending order will still appear as `PENDING_NEW`. You need to query the status of the pending order again to see its updated status.
- OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter.

Weight: 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.newOrderListOtoTrade({
    symbol,
    workingType,
    workingSide,
    workingPrice,
    workingQuantity,
    workingIcebergQty,
    pendingType,
    pendingSide,
    pendingQuantity,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type ApiV3OrderListOtoResponse
} catch (err) {
  if (err instanceof TradeApi.NewOrderListOtoTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>workingType</code> | <code>[WorkingType](src/models/working-type.ts)</code> | Supported values: LIMIT,LIMIT_MAKER |
| <code>workingSide</code> | <code>[WorkingSide](src/models/working-side.ts)</code> | BUY,SELL |
| <code>workingPrice</code> | <code>number</code> | - |
| <code>workingQuantity</code> | <code>number</code> | Sets the quantity for the working order. |
| <code>workingIcebergQty</code> | <code>number</code> | This can only be used if workingTimeInForce is GTC. |
| <code>pendingType</code> | <code>[PendingType](src/models/pending-type.ts)</code> | Supported values: Order Types Note that MARKET orders using quoteOrderQty are not supported. |
| <code>pendingSide</code> | <code>[PendingSide](src/models/pending-side.ts)</code> | BUY,SELL |
| <code>pendingQuantity</code> | <code>number</code> | Sets the quantity for the pending order. |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>listClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>workingClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the working order. Automatically generated if not sent. |
| <code>workingTimeInForce?</code> | <code>[WorkingTimeInForce](src/models/working-time-in-force.ts)</code> | GTC, IOC, FOK |
| <code>workingStrategyId?</code> | <code>number</code> | Arbitrary numeric value identifying the working order within an order strategy. |
| <code>workingStrategyType?</code> | <code>number</code> | Arbitrary numeric value identifying the working order strategy.<br>Values smaller than 1000000 are reserved and cannot be used. |
| <code>pendingClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the pending order. Automatically generated if not sent. |
| <code>pendingPrice?</code> | <code>number</code> | - |
| <code>pendingStopPrice?</code> | <code>number</code> | - |
| <code>pendingTrailingDelta?</code> | <code>number</code> | - |
| <code>pendingIcebergQty?</code> | <code>number</code> | This can only be used if pendingTimeInForce is GTC. |
| <code>pendingTimeInForce?</code> | <code>[PendingTimeInForce](src/models/pending-time-in-force.ts)</code> | GTC, IOC, FOK |
| <code>pendingStrategyId?</code> | <code>number</code> | Arbitrary numeric value identifying the pending order within an order strategy. |
| <code>pendingStrategyType?</code> | <code>number</code> | Arbitrary numeric value identifying the pending order strategy.<br>Values smaller than 1000000 are reserved and cannot be used. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3OrderListOtoResponse](src/models/api-v3-order-list-oto-response.ts)</code>

**OnError**: <code>[TradeApi.NewOrderListOtoTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>newOrderListOtocoTrade(request: TradeApi.NewOrderListOtocoTradeRequest, options?: RequestOptions): ApiPromise&lt;ApiV3OrderListOtocoResponse, TradeApi.NewOrderListOtocoTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Place an `OTOCO`.
- An `OTOCO` (One-Triggers-One-Cancels-the-Other) is an order list comprised of 3 orders.
- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.
  - The behavior of the working order is the same as the `OTO`.
- `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The pending orders are only placed on the order book when the working order gets fully filled.
  - The rules of the pending above and pending below follow the same rules as the Order List `OCO`.
- OTOCOs add 3 orders against the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter, and `MAX_NUM_ORDERS` filter.

Weight: 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.newOrderListOtocoTrade({
    symbol,
    workingType,
    workingSide,
    workingPrice,
    workingQuantity,
    workingIcebergQty,
    pendingSide,
    pendingQuantity,
    pendingAboveType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type ApiV3OrderListOtocoResponse
} catch (err) {
  if (err instanceof TradeApi.NewOrderListOtocoTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>workingType</code> | <code>[WorkingType](src/models/working-type.ts)</code> | Supported values: LIMIT,LIMIT_MAKER |
| <code>workingSide</code> | <code>[WorkingSide](src/models/working-side.ts)</code> | BUY,SELL |
| <code>workingPrice</code> | <code>number</code> | - |
| <code>workingQuantity</code> | <code>number</code> | Sets the quantity for the working order. |
| <code>workingIcebergQty</code> | <code>number</code> | This can only be used if workingTimeInForce is GTC. |
| <code>pendingSide</code> | <code>[PendingSide](src/models/pending-side.ts)</code> | BUY,SELL |
| <code>pendingQuantity</code> | <code>number</code> | Sets the quantity for the pending order. |
| <code>pendingAboveType</code> | <code>[PendingAboveType](src/models/pending-above-type.ts)</code> | Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>listClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>workingClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the working order. Automatically generated if not sent. |
| <code>workingTimeInForce?</code> | <code>[WorkingTimeInForce](src/models/working-time-in-force.ts)</code> | GTC, IOC, FOK |
| <code>workingStrategyId?</code> | <code>number</code> | Arbitrary numeric value identifying the working order within an order strategy. |
| <code>workingStrategyType?</code> | <code>number</code> | Arbitrary numeric value identifying the working order strategy.<br>Values smaller than 1000000 are reserved and cannot be used. |
| <code>pendingAboveClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the pending above order. Automatically generated if not sent. |
| <code>pendingAbovePrice?</code> | <code>number</code> | - |
| <code>pendingAboveStopPrice?</code> | <code>number</code> | - |
| <code>pendingAboveTrailingDelta?</code> | <code>number</code> | - |
| <code>pendingAboveIcebergQty?</code> | <code>number</code> | This can only be used if pendingAboveTimeInForce is GTC. |
| <code>pendingAboveTimeInForce?</code> | <code>[PendingAboveTimeInForce](src/models/pending-above-time-in-force.ts)</code> | - |
| <code>pendingAboveStrategyId?</code> | <code>number</code> | Arbitrary numeric value identifying the pending above order within an order strategy. |
| <code>pendingAboveStrategyType?</code> | <code>number</code> | Arbitrary numeric value identifying the pending above order strategy.<br>Values smaller than 1000000 are reserved and cannot be used. |
| <code>pendingBelowType?</code> | <code>[PendingBelowType](src/models/pending-below-type.ts)</code> | Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT |
| <code>pendingBelowClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the pending below order. Automatically generated if not sent. |
| <code>pendingBelowPrice?</code> | <code>number</code> | - |
| <code>pendingBelowStopPrice?</code> | <code>number</code> | - |
| <code>pendingBelowTrailingDelta?</code> | <code>number</code> | - |
| <code>pendingBelowIcebergQty?</code> | <code>number</code> | This can only be used if pendingBelowTimeInForce is GTC. |
| <code>pendingBelowTimeInForce?</code> | <code>[PendingBelowTimeInForce](src/models/pending-below-time-in-force.ts)</code> | - |
| <code>pendingBelowStrategyId?</code> | <code>number</code> | Arbitrary numeric value identifying the pending below order within an order strategy. |
| <code>pendingBelowStrategyType?</code> | <code>number</code> | Arbitrary numeric value identifying the pending below order strategy.<br>Values smaller than 1000000 are reserved and cannot be used. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3OrderListOtocoResponse](src/models/api-v3-order-list-otoco-response.ts)</code>

**OnError**: <code>[TradeApi.NewOrderListOtocoTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>newOrderListOcoTrade(request: TradeApi.NewOrderListOcoTradeRequest, options?: RequestOptions): ApiPromise&lt;ApiV3OrderListOcoResponse, TradeApi.NewOrderListOcoTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send in an one-cancels-the-other (OCO) pair, where activation of one order immediately cancels the other.

- An `OCO` has 2 orders called the above order and below order.
- One of the orders must be a `LIMIT_MAKER` order and the other must be `STOP_LOSS` or`STOP_LOSS_LIMIT` order.
- Price restrictions:
    - If the `OCO` is on the `SELL` side: `LIMIT_MAKER` price > Last Traded Price > stopPrice
    - If the `OCO` is on the `BUY` side: `LIMIT_MAKER` price < Last Traded Price < stopPrice
- OCOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_ORDERS` filter, and the `MAX_NUM_ORDERS` filter.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.newOrderListOcoTrade({
    symbol,
    side,
    quantity,
    aboveType,
    belowType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type ApiV3OrderListOcoResponse
} catch (err) {
  if (err instanceof TradeApi.NewOrderListOcoTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>quantity</code> | <code>number</code> | - |
| <code>aboveType</code> | <code>string</code> | Supported values : `STOP_LOSS_LIMIT`, `STOP_LOSS`, `LIMIT_MAKER` |
| <code>belowType</code> | <code>string</code> | Supported values : `STOP_LOSS_LIMIT`, `STOP_LOSS`, `LIMIT_MAKER` |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>listClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `aboveClientOrderId` and the `belowCLientOrderId`. |
| <code>aboveClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the above order. Automatically generated if not sent |
| <code>aboveIcebergQty?</code> | <code>number</code> | Note that this can only be used if `aboveTimeInForce` is `GTC`. |
| <code>abovePrice?</code> | <code>number</code> | - |
| <code>aboveStopPrice?</code> | <code>number</code> | Can be used if `aboveType` is `STOP_LOSS` or `STOP_LOSS_LIMIT`.<br>Either `aboveStopPrice` or `aboveTrailingDelta` or both, must be specified. |
| <code>aboveTrailingDelta?</code> | <code>number</code> | - |
| <code>aboveTimeInForce?</code> | <code>[AboveTimeInForce](src/models/above-time-in-force.ts)</code> | Required if the `aboveType` is `STOP_LOSS_LIMIT`. |
| <code>aboveStrategyId?</code> | <code>number</code> | Arbitrary numeric value identifying the above order within an order strategy. |
| <code>aboveStrategyType?</code> | <code>number</code> | Arbitrary numeric value identifying the above order strategy.<br>Values smaller than 1000000 are reserved and cannot be used. |
| <code>belowClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the below order. Automatically generated if not sent |
| <code>belowIcebergQty?</code> | <code>number</code> | Note that this can only be used if `belowTimeInForce` is `GTC`. |
| <code>belowPrice?</code> | <code>number</code> | Can be used if `belowType` is `STOP_LOSS_LIMIT` or `LIMIT_MAKER` to specify the limit price. |
| <code>belowStopPrice?</code> | <code>number</code> | Can be used if `belowType` is `STOP_LOSS` or `STOP_LOSS_LIMIT`.<br>Either `belowStopPrice` or `belowTrailingDelta` or both, must be specified. |
| <code>belowTrailingDelta?</code> | <code>number</code> | - |
| <code>belowTimeInForce?</code> | <code>[BelowTimeInForce](src/models/below-time-in-force.ts)</code> | Required if the `belowType` is `STOP_LOSS_LIMIT`. |
| <code>belowStrategyId?</code> | <code>number</code> | Arbitrary numeric value identifying the below order within an order strategy. |
| <code>belowStrategyType?</code> | <code>number</code> | Arbitrary numeric value identifying the below order strategy.<br>Values smaller than 1000000 are reserved and cannot be used. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3OrderListOcoResponse](src/models/api-v3-order-list-oco-response.ts)</code>

**OnError**: <code>[TradeApi.NewOrderListOcoTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>newOrderUsingSorTrade(request: TradeApi.NewOrderUsingSorTradeRequest, options?: RequestOptions): ApiPromise&lt;ApiV3SorOrderResponse, TradeApi.NewOrderUsingSorTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 6

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.newOrderUsingSorTrade({
    symbol,
    side,
    type,
    quantity,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type ApiV3SorOrderResponse
} catch (err) {
  if (err instanceof TradeApi.NewOrderUsingSorTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>type</code> | <code>[Type1](src/models/type1.ts)</code> | Order type |
| <code>quantity</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>timeInForce?</code> | <code>[TimeInForce](src/models/time-in-force.ts)</code> | Order time in force |
| <code>price?</code> | <code>number</code> | - |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>strategyId?</code> | <code>number</code> | - |
| <code>strategyType?</code> | <code>number</code> | The value cannot be less than 1000000. |
| <code>icebergQty?</code> | <code>number</code> | Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3SorOrderResponse](src/models/api-v3-sor-order-response.ts)</code>

**OnError**: <code>[TradeApi.NewOrderUsingSorTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryAllocationsUserData(request: TradeApi.QueryAllocationsUserDataRequest, options?: RequestOptions): ApiPromise&lt;ApiV3MyAllocationsResponse[], TradeApi.QueryAllocationsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves allocations resulting from SOR order placement.

Weight: 20

Supported parameter combinations:
Parameters                               Response
symbol                                   allocations from oldest to newest
symbol + startTime                       oldest allocations since startTime
symbol + endTime                         newest allocations until endTime
symbol + startTime + endTime             allocations within the time range
symbol + fromAllocationId               allocations by allocation ID
symbol + orderId                         allocations related to an order starting with oldest
symbol + orderId + fromAllocationId     allocations related to an order by allocation ID

Note: The time between startTime and endTime can't be longer than 24 hours.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.queryAllocationsUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type ApiV3MyAllocationsResponse[]
} catch (err) {
  if (err instanceof TradeApi.QueryAllocationsUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>fromAllocationId?</code> | <code>number</code> | - |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3MyAllocationsResponse](src/models/api-v3-my-allocations-response.ts)[]</code>

**OnError**: <code>[TradeApi.QueryAllocationsUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryCommissionRatesUserData(request: TradeApi.QueryCommissionRatesUserDataRequest, options?: RequestOptions): ApiPromise&lt;ApiV3AccountCommissionResponse, TradeApi.QueryCommissionRatesUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current account commission rates.

Weight: 20

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.queryCommissionRatesUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type ApiV3AccountCommissionResponse
} catch (err) {
  if (err instanceof TradeApi.QueryCommissionRatesUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3AccountCommissionResponse](src/models/api-v3-account-commission-response.ts)</code>

**OnError**: <code>[TradeApi.QueryCommissionRatesUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryCurrentOrderCountUsageTrade(request: TradeApi.QueryCurrentOrderCountUsageTradeRequest, options?: RequestOptions): ApiPromise&lt;ApiV3RateLimitOrderResponse[], TradeApi.QueryCurrentOrderCountUsageTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Displays the user's current order count usage for all intervals.

Weight(IP): 40

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.queryCurrentOrderCountUsageTrade({ timestamp, signature });
  // TODO: Handle 'response' of type ApiV3RateLimitOrderResponse[]
} catch (err) {
  if (err instanceof TradeApi.QueryCurrentOrderCountUsageTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3RateLimitOrderResponse](src/models/api-v3-rate-limit-order-response.ts)[]</code>

**OnError**: <code>[TradeApi.QueryCurrentOrderCountUsageTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryOcoUserData(request: TradeApi.QueryOcoUserDataRequest, options?: RequestOptions): ApiPromise&lt;ApiV3OrderListResponse, TradeApi.QueryOcoUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific OCO based on provided optional parameters

Weight(IP): 4

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.queryOcoUserData({ timestamp, signature });
  // TODO: Handle 'response' of type ApiV3OrderListResponse
} catch (err) {
  if (err instanceof TradeApi.QueryOcoUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderListId?</code> | <code>number</code> | Order list id |
| <code>origClientOrderId?</code> | <code>string</code> | Order id from client |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3OrderListResponse](src/models/api-v3-order-list-response.ts)</code>

**OnError**: <code>[TradeApi.QueryOcoUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryOpenOcoUserData(request: TradeApi.QueryOpenOcoUserDataRequest, options?: RequestOptions): ApiPromise&lt;ApiV3OpenOrderListResponse[], TradeApi.QueryOpenOcoUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 6

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.queryOpenOcoUserData({ timestamp, signature });
  // TODO: Handle 'response' of type ApiV3OpenOrderListResponse[]
} catch (err) {
  if (err instanceof TradeApi.QueryOpenOcoUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3OpenOrderListResponse](src/models/api-v3-open-order-list-response.ts)[]</code>

**OnError**: <code>[TradeApi.QueryOpenOcoUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryOrderUserData(request: TradeApi.QueryOrderUserDataRequest, options?: RequestOptions): ApiPromise&lt;OrderDetails, TradeApi.QueryOrderUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check an order's status.

- Either `orderId` or `origClientOrderId` must be sent.
- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.

Weight(IP): 4

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.queryOrderUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type OrderDetails
} catch (err) {
  if (err instanceof TradeApi.QueryOrderUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>origClientOrderId?</code> | <code>string</code> | Order id from client |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderDetails](src/models/order-details.ts)</code>

**OnError**: <code>[TradeApi.QueryOrderUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryPreventedMatches(request: TradeApi.QueryPreventedMatchesRequest, options?: RequestOptions): ApiPromise&lt;ApiV3MyPreventedMatchesResponse[], TradeApi.QueryPreventedMatchesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Displays the list of orders that were expired because of STP.

For additional information on what a Prevented match is, as well as Self Trade Prevention (STP), please refer to our STP FAQ page.

These are the combinations supported:

* symbol + preventedMatchId
* symbol + orderId
* symbol + orderId + fromPreventedMatchId (limit will default to 500)
* symbol + orderId + fromPreventedMatchId + limit

Weight(IP):

Case                               Weight
If symbol is invalid:             2
Querying by preventedMatchId:     2
Querying by orderId:               20

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.queryPreventedMatches({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type ApiV3MyPreventedMatchesResponse[]
} catch (err) {
  if (err instanceof TradeApi.QueryPreventedMatchesError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>preventedMatchId?</code> | <code>number</code> | - |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>fromPreventedMatchId?</code> | <code>number</code> | - |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3MyPreventedMatchesResponse](src/models/api-v3-my-prevented-matches-response.ts)[]</code>

**OnError**: <code>[TradeApi.QueryPreventedMatchesError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryAllOcoUserData(request: TradeApi.QueryAllOcoUserDataRequest, options?: RequestOptions): ApiPromise&lt;ApiV3AllOrderListResponse[], TradeApi.QueryAllOcoUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all OCO based on provided optional parameters

Weight(IP): 20

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.queryAllOcoUserData({ timestamp, signature });
  // TODO: Handle 'response' of type ApiV3AllOrderListResponse[]
} catch (err) {
  if (err instanceof TradeApi.QueryAllOcoUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>fromId?</code> | <code>number</code> | Trade id to fetch from. Default gets most recent trades. |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3AllOrderListResponse](src/models/api-v3-all-order-list-response.ts)[]</code>

**OnError**: <code>[TradeApi.QueryAllOcoUserDataError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testNewOrderTrade(request: TradeApi.TestNewOrderTradeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, TradeApi.TestNewOrderTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Test new order creation and signature/recvWindow long.
Creates and validates a new order but does not send it into the matching engine.

Weight(IP):
  - Without computeCommissionRates: `1`
  - With computeCommissionRates: `20`

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.testNewOrderTrade({ symbol, side, type, timestamp, signature });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof TradeApi.TestNewOrderTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>type</code> | <code>[Type1](src/models/type1.ts)</code> | Order type |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>timeInForce?</code> | <code>[TimeInForce](src/models/time-in-force.ts)</code> | Order time in force |
| <code>quantity?</code> | <code>number</code> | Order quantity |
| <code>quoteOrderQty?</code> | <code>number</code> | Quote quantity |
| <code>price?</code> | <code>number</code> | Order price |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>strategyId?</code> | <code>number</code> | - |
| <code>strategyType?</code> | <code>number</code> | The value cannot be less than 1000000. |
| <code>stopPrice?</code> | <code>number</code> | Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. |
| <code>trailingDelta?</code> | <code>number</code> | Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. |
| <code>icebergQty?</code> | <code>number</code> | Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |
| <code>computeCommissionRates?</code> | <code>boolean</code> | Default: false |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[TradeApi.TestNewOrderTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testNewOrderUsingSorTrade(request: TradeApi.TestNewOrderUsingSorTradeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, TradeApi.TestNewOrderUsingSorTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Test new order creation and signature/recvWindow using smart order routing (SOR).
Creates and validates a new order but does not send it into the matching engine.

Weight(IP):
  - Without computeCommissionRates: `1`
  - With computeCommissionRates: `20`

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tradeApi.testNewOrderUsingSorTrade({
    symbol,
    side,
    type,
    quantity,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof TradeApi.TestNewOrderUsingSorTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>type</code> | <code>[Type1](src/models/type1.ts)</code> | Order type |
| <code>quantity</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>timeInForce?</code> | <code>[TimeInForce](src/models/time-in-force.ts)</code> | Order time in force |
| <code>price?</code> | <code>number</code> | - |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>strategyId?</code> | <code>number</code> | - |
| <code>strategyType?</code> | <code>number</code> | The value cannot be less than 1000000. |
| <code>icebergQty?</code> | <code>number</code> | Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK. |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>computeCommissionRates?</code> | <code>boolean</code> | Default: false |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[TradeApi.TestNewOrderUsingSorTradeError](src/resources/trade-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Margin

> Source: [Margin](src/resources/margin.ts)

<details>
<summary><code>adjustCrossMarginMaxLeverageUserData(request: Margin.AdjustCrossMarginMaxLeverageUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginMaxLeverageResponse, Margin.AdjustCrossMarginMaxLeverageUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adjust cross margin max leverage

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.adjustCrossMarginMaxLeverageUserData({
    maxLeverage,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MarginMaxLeverageResponse
} catch (err) {
  if (err instanceof Margin.AdjustCrossMarginMaxLeverageUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>maxLeverage</code> | <code>number</code> | Can only adjust 3 or 5 |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginMaxLeverageResponse](src/models/sapi-v1-margin-max-leverage-response.ts)</code>

**OnError**: <code>[Margin.AdjustCrossMarginMaxLeverageUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>crossMarginCollateralRatioMarketData(options?: RequestOptions): ApiPromise&lt;SapiV1MarginCrossMarginCollateralRatioResponse[], Margin.CrossMarginCollateralRatioMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>


Weight(IP): 100

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.crossMarginCollateralRatioMarketData();
  // TODO: Handle 'response' of type SapiV1MarginCrossMarginCollateralRatioResponse[]
} catch (err) {
  if (err instanceof Margin.CrossMarginCollateralRatioMarketDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginCrossMarginCollateralRatioResponse](src/models/sapi-v1-margin-cross-margin-collateral-ratio-response.ts)[]</code>

**OnError**: <code>[Margin.CrossMarginCollateralRatioMarketDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableIsolatedMarginAccountTrade(request: Margin.DisableIsolatedMarginAccountTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginIsolatedAccountResponse, Margin.DisableIsolatedMarginAccountTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable isolated margin account for a specific symbol. Each trading pair can only be deactivated once every 24 hours .

Weight(UID): 300

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.disableIsolatedMarginAccountTrade({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginIsolatedAccountResponse
} catch (err) {
  if (err instanceof Margin.DisableIsolatedMarginAccountTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginIsolatedAccountResponse](src/models/sapi-v1-margin-isolated-account-response.ts)</code>

**OnError**: <code>[Margin.DisableIsolatedMarginAccountTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableIsolatedMarginAccountTrade(request: Margin.EnableIsolatedMarginAccountTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginIsolatedAccountResponse, Margin.EnableIsolatedMarginAccountTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable isolated margin account for a specific symbol.

Weight(UID): 300

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.enableIsolatedMarginAccountTrade({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginIsolatedAccountResponse
} catch (err) {
  if (err instanceof Margin.EnableIsolatedMarginAccountTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginIsolatedAccountResponse](src/models/sapi-v1-margin-isolated-account-response.ts)</code>

**OnError**: <code>[Margin.EnableIsolatedMarginAccountTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllCrossMarginPairsMarketData(request: Margin.GetAllCrossMarginPairsMarketDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginAllPairsResponse[], Margin.GetAllCrossMarginPairsMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getAllCrossMarginPairsMarketData({ symbol });
  // TODO: Handle 'response' of type SapiV1MarginAllPairsResponse[]
} catch (err) {
  if (err instanceof Margin.GetAllCrossMarginPairsMarketDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginAllPairsResponse](src/models/sapi-v1-margin-all-pairs-response.ts)[]</code>

**OnError**: <code>[Margin.GetAllCrossMarginPairsMarketDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllIsolatedMarginSymbolUserData(request: Margin.GetAllIsolatedMarginSymbolUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginIsolatedAllPairsResponse[], Margin.GetAllIsolatedMarginSymbolUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getAllIsolatedMarginSymbolUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginIsolatedAllPairsResponse[]
} catch (err) {
  if (err instanceof Margin.GetAllIsolatedMarginSymbolUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginIsolatedAllPairsResponse](src/models/sapi-v1-margin-isolated-all-pairs-response.ts)[]</code>

**OnError**: <code>[Margin.GetAllIsolatedMarginSymbolUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllMarginAssetsMarketData(request: Margin.GetAllMarginAssetsMarketDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginAllAssetsResponse[], Margin.GetAllMarginAssetsMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getAllMarginAssetsMarketData({ asset });
  // TODO: Handle 'response' of type SapiV1MarginAllAssetsResponse[]
} catch (err) {
  if (err instanceof Margin.GetAllMarginAssetsMarketDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginAllAssetsResponse](src/models/sapi-v1-margin-all-assets-response.ts)[]</code>

**OnError**: <code>[Margin.GetAllMarginAssetsMarketDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBnbBurnStatusUserData(request: Margin.GetBnbBurnStatusUserDataRequest, options?: RequestOptions): ApiPromise&lt;BnbBurnStatus, Margin.GetBnbBurnStatusUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getBnbBurnStatusUserData({ timestamp, signature });
  // TODO: Handle 'response' of type BnbBurnStatus
} catch (err) {
  if (err instanceof Margin.GetBnbBurnStatusUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BnbBurnStatus](src/models/bnb-burn-status.ts)</code>

**OnError**: <code>[Margin.GetBnbBurnStatusUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCrossMarginTransferHistoryUserData(request: Margin.GetCrossMarginTransferHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginTransferResponse, Margin.GetCrossMarginTransferHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Response in descending order
- Returns data for last 7 days by default
- Set `archived` to `true` to query data from 6 months ago

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getCrossMarginTransferHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginTransferResponse
} catch (err) {
  if (err instanceof Margin.GetCrossMarginTransferHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[Type2](src/models/type2.ts)</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>isolatedSymbol?</code> | <code>string</code> | Isolated symbol |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginTransferResponse](src/models/sapi-v1-margin-transfer-response.ts)</code>

**OnError**: <code>[Margin.GetCrossMarginTransferHistoryUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getForceLiquidationRecordUserData(request: Margin.GetForceLiquidationRecordUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginForceLiquidationRecResponse, Margin.GetForceLiquidationRecordUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Response in descending order

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getForceLiquidationRecordUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginForceLiquidationRecResponse
} catch (err) {
  if (err instanceof Margin.GetForceLiquidationRecordUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>isolatedSymbol?</code> | <code>string</code> | Isolated symbol |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginForceLiquidationRecResponse](src/models/sapi-v1-margin-force-liquidation-rec-response.ts)</code>

**OnError**: <code>[Margin.GetForceLiquidationRecordUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInterestHistoryUserData(request: Margin.GetInterestHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginInterestHistoryResponse, Margin.GetInterestHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Response in descending order
- If `isolatedSymbol` is not sent, crossed margin data will be returned
- Set `archived` to `true` to query data from 6 months ago
- `type` in response has 4 enums:
  - `PERIODIC` interest charged per hour
  - `ON_BORROW` first interest charged on borrow
  - `PERIODIC_CONVERTED` interest charged per hour converted into BNB
  - `ON_BORROW_CONVERTED` first interest charged on borrow converted into BNB

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getInterestHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginInterestHistoryResponse
} catch (err) {
  if (err instanceof Margin.GetInterestHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>isolatedSymbol?</code> | <code>string</code> | Isolated symbol |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>archived?</code> | <code>string</code> | Default: false. Set to true for archived data from 6 months ago |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginInterestHistoryResponse](src/models/sapi-v1-margin-interest-history-response.ts)</code>

**OnError**: <code>[Margin.GetInterestHistoryUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSmallLiabilityExchangeCoinListUserData(request: Margin.GetSmallLiabilityExchangeCoinListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginExchangeSmallLiabilityResponse[], Margin.GetSmallLiabilityExchangeCoinListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query the coins which can be small liability exchange

Weight(UID): 100

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getSmallLiabilityExchangeCoinListUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginExchangeSmallLiabilityResponse[]
} catch (err) {
  if (err instanceof Margin.GetSmallLiabilityExchangeCoinListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginExchangeSmallLiabilityResponse](src/models/sapi-v1-margin-exchange-small-liability-response.ts)[]</code>

**OnError**: <code>[Margin.GetSmallLiabilityExchangeCoinListUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSmallLiabilityExchangeHistoryUserData(request: Margin.GetSmallLiabilityExchangeHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginExchangeSmallLiabilityHistoryResponse, Margin.GetSmallLiabilityExchangeHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Small liability Exchange History

Weight(UID): 100

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getSmallLiabilityExchangeHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginExchangeSmallLiabilityHistoryResponse
} catch (err) {
  if (err instanceof Margin.GetSmallLiabilityExchangeHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginExchangeSmallLiabilityHistoryResponse](src/models/sapi-v1-margin-exchange-small-liability-history-response.ts)</code>

**OnError**: <code>[Margin.GetSmallLiabilityExchangeHistoryUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSummaryOfMarginAccountUserData(request: Margin.GetSummaryOfMarginAccountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginTradeCoeffResponse, Margin.GetSummaryOfMarginAccountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get personal margin level information

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getSummaryOfMarginAccountUserData({ email, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginTradeCoeffResponse
} catch (err) {
  if (err instanceof Margin.GetSummaryOfMarginAccountUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Email Address |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginTradeCoeffResponse](src/models/sapi-v1-margin-trade-coeff-response.ts)</code>

**OnError**: <code>[Margin.GetSummaryOfMarginAccountUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAFutureHourlyInterestRateUserData(request: Margin.GetAFutureHourlyInterestRateUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginNextHourlyInterestRateResponse[], Margin.GetAFutureHourlyInterestRateUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get user the next hourly estimate interest

Weight(UID): 100

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getAFutureHourlyInterestRateUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginNextHourlyInterestRateResponse[]
} catch (err) {
  if (err instanceof Margin.GetAFutureHourlyInterestRateUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>assets?</code> | <code>string</code> | List of assets, separated by commas, up to 20 |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | for isolated margin or not, "TRUE", "FALSE" |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginNextHourlyInterestRateResponse](src/models/sapi-v1-margin-next-hourly-interest-rate-response.ts)[]</code>

**OnError**: <code>[Margin.GetAFutureHourlyInterestRateUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCrossOrIsolatedMarginCapitalFlowUserData(request: Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginCapitalFlowResponse[], Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get cross or isolated margin capital flow

Weight(IP): 100

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.getCrossOrIsolatedMarginCapitalFlowUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginCapitalFlowResponse[]
} catch (err) {
  if (
    err instanceof Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>symbol?</code> | <code>string</code> | Required when querying isolated data |
| <code>type?</code> | <code>[Type3](src/models/type3.ts)</code> | - |
| <code>startTime?</code> | <code>number</code> | Only supports querying the data of the last 90 days |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>fromId?</code> | <code>number</code> | If fromId is set, the data with id > fromId will be returned. Otherwise the latest data will be returned |
| <code>limit?</code> | <code>number</code> | The number of data items returned each time is limited. Default 500; Max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginCapitalFlowResponse](src/models/sapi-v1-margin-capital-flow-response.ts)[]</code>

**OnError**: <code>[Margin.GetCrossOrIsolatedMarginCapitalFlowUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketData(request: Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginDelistScheduleResponse[], Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get tokens or symbols delist schedule for cross margin and isolated margin

Weight(IP): 100

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.margin.getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketData({
      timestamp,
      signature,
    });
  // TODO: Handle 'response' of type SapiV1MarginDelistScheduleResponse[]
} catch (err) {
  if (
    err instanceof Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginDelistScheduleResponse](src/models/sapi-v1-margin-delist-schedule-response.ts)[]</code>

**OnError**: <code>[Margin.GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginAccountCancelOcoTrade(request: Margin.MarginAccountCancelOcoTradeRequest, options?: RequestOptions): ApiPromise&lt;MarginOcoOrder, Margin.MarginAccountCancelOcoTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an entire Order List for a margin account

- Canceling an individual leg will cancel the entire OCO
- Either `orderListId` or `listClientOrderId` must be provided

Weight(UID): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginAccountCancelOcoTrade({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type MarginOcoOrder
} catch (err) {
  if (err instanceof Margin.MarginAccountCancelOcoTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>orderListId?</code> | <code>number</code> | Order list id |
| <code>listClientOrderId?</code> | <code>string</code> | A unique Id for the entire orderList |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MarginOcoOrder](src/models/margin-oco-order.ts)</code>

**OnError**: <code>[Margin.MarginAccountCancelOcoTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginAccountCancelOrderTrade(request: Margin.MarginAccountCancelOrderTradeRequest, options?: RequestOptions): ApiPromise&lt;MarginOrder, Margin.MarginAccountCancelOrderTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an active order for margin account.

Either `orderId` or `origClientOrderId` must be sent.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginAccountCancelOrderTrade({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type MarginOrder
} catch (err) {
  if (err instanceof Margin.MarginAccountCancelOrderTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>origClientOrderId?</code> | <code>string</code> | Order id from client |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MarginOrder](src/models/margin-order.ts)</code>

**OnError**: <code>[Margin.MarginAccountCancelOrderTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginAccountCancelAllOpenOrdersOnASymbolTrade(request: Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginOpenOrdersResponse[], Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Cancels all active orders on a symbol for margin account.
- This includes OCO orders.

Weight(IP): 1


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginAccountCancelAllOpenOrdersOnASymbolTrade({
    symbol,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MarginOpenOrdersResponse[]
} catch (err) {
  if (
    err instanceof Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginOpenOrdersResponse](src/models/unions/sapi-v1-margin-open-orders-response.ts)[]</code>

**OnError**: <code>[Margin.MarginAccountCancelAllOpenOrdersOnASymbolTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginAccountNewOcoTrade(request: Margin.MarginAccountNewOcoTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginOrderOcoResponse, Margin.MarginAccountNewOcoTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send in a new OCO for a margin account

- Price Restrictions:
  - SELL: Limit Price > Last Price > Stop Price
  - BUY: Limit Price < Last Price < Stop Price
- Quantity Restrictions:
  - Both legs must have the same quantity
  - ICEBERG quantities however do not have to be the same.
- Order Rate Limit
  - OCO counts as 2 orders against the order rate limit.

Weight(UID): 6

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginAccountNewOcoTrade({
    symbol,
    side,
    quantity,
    price,
    stopPrice,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MarginOrderOcoResponse
} catch (err) {
  if (err instanceof Margin.MarginAccountNewOcoTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>quantity</code> | <code>number</code> | - |
| <code>price</code> | <code>number</code> | Order price |
| <code>stopPrice</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>listClientOrderId?</code> | <code>string</code> | A unique Id for the entire orderList |
| <code>limitClientOrderId?</code> | <code>string</code> | A unique Id for the limit order |
| <code>limitIcebergQty?</code> | <code>number</code> | - |
| <code>stopClientOrderId?</code> | <code>string</code> | A unique Id for the stop loss/stop loss limit leg |
| <code>stopLimitPrice?</code> | <code>number</code> | If provided, stopLimitTimeInForce is required. |
| <code>stopIcebergQty?</code> | <code>number</code> | - |
| <code>stopLimitTimeInForce?</code> | <code>[StopLimitTimeInForce](src/models/stop-limit-time-in-force.ts)</code> | - |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. |
| <code>sideEffectType?</code> | <code>[SideEffectType](src/models/side-effect-type.ts)</code> | Default `NO_SIDE_EFFECT` |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginOrderOcoResponse](src/models/sapi-v1-margin-order-oco-response.ts)</code>

**OnError**: <code>[Margin.MarginAccountNewOcoTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginAccountNewOtoTrade(request: Margin.MarginAccountNewOtoTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginOrderOtoResponse, Margin.MarginAccountNewOtoTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Post a new `OTO` order for margin account:
- An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders
- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.
- The second order is called the pending order. It can be any order type except for `MARKET` orders using parameter `quoteOrderQty`. The pending order is only placed on the order book when the working order gets fully filled.
- If either the working order or the pending order is cancelled individually, the other order in the order list will also be canceled or expired.
- When the order list is placed, if the working order gets immediately fully filled, the placement response will show the working order as `FILLED` but the pending order will still appear as `PENDING_NEW`. You need to query the status of the pending order again to see its updated status.
- OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter.

Weight(UID): 6

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginAccountNewOtoTrade({
    symbol,
    workingType,
    workingSide,
    workingPrice,
    workingQuantity,
    workingIcebergQty,
    pendingType,
    pendingSide,
    pendingQuantity,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MarginOrderOtoResponse
} catch (err) {
  if (err instanceof Margin.MarginAccountNewOtoTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>workingType</code> | <code>[WorkingType](src/models/working-type.ts)</code> | Supported values: LIMIT,LIMIT_MAKER |
| <code>workingSide</code> | <code>[WorkingSide](src/models/working-side.ts)</code> | BUY,SELL |
| <code>workingPrice</code> | <code>number</code> | - |
| <code>workingQuantity</code> | <code>number</code> | Sets the quantity for the working order. |
| <code>workingIcebergQty</code> | <code>number</code> | This can only be used if workingTimeInForce is GTC. |
| <code>pendingType</code> | <code>[PendingType](src/models/pending-type.ts)</code> | Supported values: Order Types Note that MARKET orders using quoteOrderQty are not supported. |
| <code>pendingSide</code> | <code>[PendingSide](src/models/pending-side.ts)</code> | BUY,SELL |
| <code>pendingQuantity</code> | <code>number</code> | Sets the quantity for the pending order. |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>listClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. |
| <code>sideEffectType?</code> | <code>[SideEffectType1](src/models/side-effect-type1.ts)</code> | Default `NO_SIDE_EFFECT` |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>autoRepayAtCancel?</code> | <code>boolean</code> | Only when MARGIN_BUY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true |
| <code>workingClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the working order. Automatically generated if not sent. |
| <code>workingTimeInForce?</code> | <code>[WorkingTimeInForce](src/models/working-time-in-force.ts)</code> | GTC, IOC, FOK |
| <code>pendingClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the pending order. Automatically generated if not sent. |
| <code>pendingPrice?</code> | <code>number</code> | - |
| <code>pendingStopPrice?</code> | <code>number</code> | - |
| <code>pendingTrailingDelta?</code> | <code>number</code> | - |
| <code>pendingIcebergQty?</code> | <code>number</code> | This can only be used if pendingTimeInForce is GTC. |
| <code>pendingTimeInForce?</code> | <code>[PendingTimeInForce](src/models/pending-time-in-force.ts)</code> | GTC, IOC, FOK |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginOrderOtoResponse](src/models/sapi-v1-margin-order-oto-response.ts)</code>

**OnError**: <code>[Margin.MarginAccountNewOtoTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginAccountNewOtocoTrade(request: Margin.MarginAccountNewOtocoTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginOrderOtocoResponse, Margin.MarginAccountNewOtocoTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Post a new `OTOCO` order for margin account:
- An `OTOCO` (One-Triggers-the-Other-Cancel-the-Other) is an order list comprised of 3 orders
- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.
  - The behavior of the working order is the same as the `OTO`.
- `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The pending orders are only placed on the order book when the working order gets fully filled.
  - The rules of the pending above and pending below follow the same rules as the Order List `OCO`.
- OTOCOs add 3 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter.

Weight(UID): 6

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginAccountNewOtocoTrade({
    symbol,
    workingType,
    workingSide,
    workingPrice,
    workingQuantity,
    workingIcebergQty,
    pendingSide,
    pendingQuantity,
    pendingAboveType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MarginOrderOtocoResponse
} catch (err) {
  if (err instanceof Margin.MarginAccountNewOtocoTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>workingType</code> | <code>[WorkingType](src/models/working-type.ts)</code> | Supported values: LIMIT,LIMIT_MAKER |
| <code>workingSide</code> | <code>[WorkingSide](src/models/working-side.ts)</code> | BUY,SELL |
| <code>workingPrice</code> | <code>number</code> | - |
| <code>workingQuantity</code> | <code>number</code> | Sets the quantity for the working order. |
| <code>workingIcebergQty</code> | <code>number</code> | This can only be used if workingTimeInForce is GTC. |
| <code>pendingSide</code> | <code>[PendingSide](src/models/pending-side.ts)</code> | BUY,SELL |
| <code>pendingQuantity</code> | <code>number</code> | Sets the quantity for the pending order. |
| <code>pendingAboveType</code> | <code>[PendingAboveType](src/models/pending-above-type.ts)</code> | Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>sideEffectType?</code> | <code>[SideEffectType1](src/models/side-effect-type1.ts)</code> | Default `NO_SIDE_EFFECT` |
| <code>autoRepayAtCancel?</code> | <code>boolean</code> | Only when MARGIN_BUY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true |
| <code>listClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>workingClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the working order. Automatically generated if not sent. |
| <code>workingTimeInForce?</code> | <code>[WorkingTimeInForce](src/models/working-time-in-force.ts)</code> | GTC, IOC, FOK |
| <code>pendingAboveClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the pending above order. Automatically generated if not sent. |
| <code>pendingAbovePrice?</code> | <code>number</code> | - |
| <code>pendingAboveStopPrice?</code> | <code>number</code> | - |
| <code>pendingAboveTrailingDelta?</code> | <code>number</code> | - |
| <code>pendingAboveIcebergQty?</code> | <code>number</code> | This can only be used if pendingAboveTimeInForce is GTC. |
| <code>pendingAboveTimeInForce?</code> | <code>[PendingAboveTimeInForce](src/models/pending-above-time-in-force.ts)</code> | - |
| <code>pendingBelowType?</code> | <code>[PendingBelowType](src/models/pending-below-type.ts)</code> | Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT |
| <code>pendingBelowClientOrderId?</code> | <code>string</code> | Arbitrary unique ID among open orders for the pending below order. Automatically generated if not sent. |
| <code>pendingBelowPrice?</code> | <code>number</code> | - |
| <code>pendingBelowStopPrice?</code> | <code>number</code> | - |
| <code>pendingBelowTrailingDelta?</code> | <code>number</code> | - |
| <code>pendingBelowIcebergQty?</code> | <code>number</code> | This can only be used if pendingBelowTimeInForce is GTC. |
| <code>pendingBelowTimeInForce?</code> | <code>[PendingBelowTimeInForce](src/models/pending-below-time-in-force.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginOrderOtocoResponse](src/models/sapi-v1-margin-order-otoco-response.ts)</code>

**OnError**: <code>[Margin.MarginAccountNewOtocoTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginAccountNewOrderTrade(request: Margin.MarginAccountNewOrderTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginOrderResponse, Margin.MarginAccountNewOrderTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Post a new order for margin account.

Weight(UID): 6

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginAccountNewOrderTrade({
    symbol,
    side,
    type,
    quantity,
    autoRepayAtCancel,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MarginOrderResponse
} catch (err) {
  if (err instanceof Margin.MarginAccountNewOrderTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>type</code> | <code>[Type1](src/models/type1.ts)</code> | Order type |
| <code>quantity</code> | <code>number</code> | - |
| <code>autoRepayAtCancel</code> | <code>boolean</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>quoteOrderQty?</code> | <code>number</code> | Quote quantity |
| <code>price?</code> | <code>number</code> | Order price |
| <code>stopPrice?</code> | <code>number</code> | Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. |
| <code>newClientOrderId?</code> | <code>string</code> | Used to uniquely identify this cancel. Automatically generated by default |
| <code>icebergQty?</code> | <code>number</code> | Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. |
| <code>newOrderRespType?</code> | <code>[NewOrderRespType](src/models/new-order-resp-type.ts)</code> | Set the response JSON. |
| <code>sideEffectType?</code> | <code>[SideEffectType](src/models/side-effect-type.ts)</code> | Default `NO_SIDE_EFFECT` |
| <code>timeInForce?</code> | <code>[TimeInForce](src/models/time-in-force.ts)</code> | Order time in force |
| <code>selfTradePreventionMode?</code> | <code>[SelfTradePreventionMode](src/models/self-trade-prevention-mode.ts)</code> | The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginOrderResponse](src/models/unions/sapi-v1-margin-order-response.ts)</code>

**OnError**: <code>[Margin.MarginAccountNewOrderTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginInterestRateHistoryUserData(request: Margin.MarginInterestRateHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginInterestRateHistoryResponse[], Margin.MarginInterestRateHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The max interval between startTime and endTime is 30 days.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginInterestRateHistoryUserData({ asset, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginInterestRateHistoryResponse[]
} catch (err) {
  if (err instanceof Margin.MarginInterestRateHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>vipLevel?</code> | <code>number</code> | Defaults to user's vip level |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginInterestRateHistoryResponse](src/models/sapi-v1-margin-interest-rate-history-response.ts)[]</code>

**OnError**: <code>[Margin.MarginInterestRateHistoryUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginAccountBorrowRepayMargin(request: Margin.MarginAccountBorrowRepayMarginRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginBorrowRepayResponse, Margin.MarginAccountBorrowRepayMarginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Margin account borrow/repay(MARGIN)

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginAccountBorrowRepayMargin({
    asset,
    isIsolated,
    symbol,
    amount,
    type,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MarginBorrowRepayResponse
} catch (err) {
  if (err instanceof Margin.MarginAccountBorrowRepayMarginError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>isIsolated</code> | <code>string</code> | TRUE for isolated margin, FALSE for crossed margin |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>amount</code> | <code>number</code> | - |
| <code>type</code> | <code>string</code> | BORROW or REPAY |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginBorrowRepayResponse](src/models/sapi-v1-margin-borrow-repay-response.ts)</code>

**OnError**: <code>[Margin.MarginAccountBorrowRepayMarginError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginManualLiquidationMargin(request: Margin.MarginManualLiquidationMarginRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginManualLiquidationResponse[], Margin.MarginManualLiquidationMarginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Margin manual liquidation

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.marginManualLiquidationMargin({ type, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginManualLiquidationResponse[]
} catch (err) {
  if (err instanceof Margin.MarginManualLiquidationMarginError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[Type4](src/models/type4.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>symbol?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginManualLiquidationResponse](src/models/sapi-v1-margin-manual-liquidation-response.ts)[]</code>

**OnError**: <code>[Margin.MarginManualLiquidationMarginError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryCrossMarginAccountDetailsUserData(request: Margin.QueryCrossMarginAccountDetailsUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginAccountResponse, Margin.QueryCrossMarginAccountDetailsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryCrossMarginAccountDetailsUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginAccountResponse
} catch (err) {
  if (err instanceof Margin.QueryCrossMarginAccountDetailsUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginAccountResponse](src/models/sapi-v1-margin-account-response.ts)</code>

**OnError**: <code>[Margin.QueryCrossMarginAccountDetailsUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryCrossMarginFeeDataUserData(request: Margin.QueryCrossMarginFeeDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginCrossMarginDataResponse[], Margin.QueryCrossMarginFeeDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get cross margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee

Weight(IP): 1 when coin is specified; 5 when the coin parameter is omitted

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryCrossMarginFeeDataUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginCrossMarginDataResponse[]
} catch (err) {
  if (err instanceof Margin.QueryCrossMarginFeeDataUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>vipLevel?</code> | <code>number</code> | Defaults to user's vip level |
| <code>coin?</code> | <code>string</code> | Coin name |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginCrossMarginDataResponse](src/models/sapi-v1-margin-cross-margin-data-response.ts)[]</code>

**OnError**: <code>[Margin.QueryCrossMarginFeeDataUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryCurrentMarginOrderCountUsageTrade(request: Margin.QueryCurrentMarginOrderCountUsageTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginRateLimitOrderResponse[], Margin.QueryCurrentMarginOrderCountUsageTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Displays the user's current margin order count usage for all intervals.

Weight(IP): 20

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryCurrentMarginOrderCountUsageTrade({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginRateLimitOrderResponse[]
} catch (err) {
  if (err instanceof Margin.QueryCurrentMarginOrderCountUsageTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>string</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>symbol?</code> | <code>string</code> | isolated symbol, mandatory for isolated margin |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginRateLimitOrderResponse](src/models/sapi-v1-margin-rate-limit-order-response.ts)[]</code>

**OnError**: <code>[Margin.QueryCurrentMarginOrderCountUsageTradeError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryEnabledIsolatedMarginAccountLimitUserData(request: Margin.QueryEnabledIsolatedMarginAccountLimitUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginIsolatedAccountLimitResponse, Margin.QueryEnabledIsolatedMarginAccountLimitUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query enabled isolated margin account limit.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryEnabledIsolatedMarginAccountLimitUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MarginIsolatedAccountLimitResponse
} catch (err) {
  if (
    err instanceof Margin.QueryEnabledIsolatedMarginAccountLimitUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginIsolatedAccountLimitResponse](src/models/sapi-v1-margin-isolated-account-limit-response.ts)</code>

**OnError**: <code>[Margin.QueryEnabledIsolatedMarginAccountLimitUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryIsolatedMarginAccountInfoUserData(request: Margin.QueryIsolatedMarginAccountInfoUserDataRequest, options?: RequestOptions): ApiPromise&lt;IsolatedMarginAccountInfo, Margin.QueryIsolatedMarginAccountInfoUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If "symbols" is not sent, all isolated assets will be returned.
- If "symbols" is sent, only the isolated assets of the sent symbols will be returned.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryIsolatedMarginAccountInfoUserData({ timestamp, signature });
  // TODO: Handle 'response' of type IsolatedMarginAccountInfo
} catch (err) {
  if (err instanceof Margin.QueryIsolatedMarginAccountInfoUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>symbols?</code> | <code>string</code> | Max 5 symbols can be sent; separated by ',' |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IsolatedMarginAccountInfo](src/models/isolated-margin-account-info.ts)</code>

**OnError**: <code>[Margin.QueryIsolatedMarginAccountInfoUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryIsolatedMarginFeeDataUserData(request: Margin.QueryIsolatedMarginFeeDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginIsolatedMarginDataResponse[], Margin.QueryIsolatedMarginFeeDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get isolated margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee

Weight(IP): 1 when a single is specified; 10 when the symbol parameter is omitted

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryIsolatedMarginFeeDataUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginIsolatedMarginDataResponse[]
} catch (err) {
  if (err instanceof Margin.QueryIsolatedMarginFeeDataUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>vipLevel?</code> | <code>number</code> | Defaults to user's vip level |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginIsolatedMarginDataResponse](src/models/sapi-v1-margin-isolated-margin-data-response.ts)[]</code>

**OnError**: <code>[Margin.QueryIsolatedMarginFeeDataUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryIsolatedMarginTierDataUserData(request: Margin.QueryIsolatedMarginTierDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginIsolatedMarginTierResponse[], Margin.QueryIsolatedMarginTierDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get isolated margin tier data collection with any tier as https://www.binance.com/en/margin-data

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryIsolatedMarginTierDataUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginIsolatedMarginTierResponse[]
} catch (err) {
  if (err instanceof Margin.QueryIsolatedMarginTierDataUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>tier?</code> | <code>string</code> | All margin tier data will be returned if tier is omitted |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginIsolatedMarginTierResponse](src/models/sapi-v1-margin-isolated-margin-tier-response.ts)[]</code>

**OnError**: <code>[Margin.QueryIsolatedMarginTierDataUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryLiabilityCoinLeverageBracketInCrossMarginProModeMarketData(options?: RequestOptions): ApiPromise&lt;SapiV1MarginLeverageBracketResponse[], Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Liability Coin Leverage Bracket in Cross Margin Pro Mode

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryLiabilityCoinLeverageBracketInCrossMarginProModeMarketData();
  // TODO: Handle 'response' of type SapiV1MarginLeverageBracketResponse[]
} catch (err) {
  if (
    err instanceof Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginLeverageBracketResponse](src/models/sapi-v1-margin-leverage-bracket-response.ts)[]</code>

**OnError**: <code>[Margin.QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMarginAccountSAllOrdersUserData(request: Margin.QueryMarginAccountSAllOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;MarginOrderDetail[], Margin.QueryMarginAccountSAllOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If `orderId` is set, it will get orders >= that orderId. Otherwise most recent orders are returned.
- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.

Weight(IP): 200

Request Limit: 60 times/min per IP

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMarginAccountSAllOrdersUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type MarginOrderDetail[]
} catch (err) {
  if (err instanceof Margin.QueryMarginAccountSAllOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MarginOrderDetail](src/models/margin-order-detail.ts)[]</code>

**OnError**: <code>[Margin.QueryMarginAccountSAllOrdersUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMarginAccountSOcoUserData(request: Margin.QueryMarginAccountSOcoUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginOrderListResponse, Margin.QueryMarginAccountSOcoUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific OCO based on provided optional parameters

- Either `orderListId` or `origClientOrderId` must be provided

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMarginAccountSOcoUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginOrderListResponse
} catch (err) {
  if (err instanceof Margin.QueryMarginAccountSOcoUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>symbol?</code> | <code>string</code> | Mandatory for isolated margin, not supported for cross margin |
| <code>orderListId?</code> | <code>number</code> | Order list id |
| <code>origClientOrderId?</code> | <code>string</code> | Order id from client |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginOrderListResponse](src/models/sapi-v1-margin-order-list-response.ts)</code>

**OnError**: <code>[Margin.QueryMarginAccountSOcoUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMarginAccountSOpenOcoUserData(request: Margin.QueryMarginAccountSOpenOcoUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginOpenOrderListResponse[], Margin.QueryMarginAccountSOpenOcoUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMarginAccountSOpenOcoUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginOpenOrderListResponse[]
} catch (err) {
  if (err instanceof Margin.QueryMarginAccountSOpenOcoUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>symbol?</code> | <code>string</code> | Mandatory for isolated margin, not supported for cross margin |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginOpenOrderListResponse](src/models/sapi-v1-margin-open-order-list-response.ts)[]</code>

**OnError**: <code>[Margin.QueryMarginAccountSOpenOcoUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMarginAccountSOpenOrdersUserData(request: Margin.QueryMarginAccountSOpenOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;MarginOrderDetail[], Margin.QueryMarginAccountSOpenOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If the `symbol` is not sent, orders for all symbols will be returned in an array.
- When all symbols are returned, the number of requests counted against the rate limiter is equal to the number of symbols currently trading on the exchange
- If isIsolated ="TRUE", symbol must be sent.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMarginAccountSOpenOrdersUserData({ timestamp, signature });
  // TODO: Handle 'response' of type MarginOrderDetail[]
} catch (err) {
  if (err instanceof Margin.QueryMarginAccountSOpenOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MarginOrderDetail](src/models/margin-order-detail.ts)[]</code>

**OnError**: <code>[Margin.QueryMarginAccountSOpenOrdersUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMarginAccountSOrderUserData(request: Margin.QueryMarginAccountSOrderUserDataRequest, options?: RequestOptions): ApiPromise&lt;MarginOrderDetail, Margin.QueryMarginAccountSOrderUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Either `orderId` or `origClientOrderId` must be sent.
- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMarginAccountSOrderUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type MarginOrderDetail
} catch (err) {
  if (err instanceof Margin.QueryMarginAccountSOrderUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>origClientOrderId?</code> | <code>string</code> | Order id from client |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MarginOrderDetail](src/models/margin-order-detail.ts)</code>

**OnError**: <code>[Margin.QueryMarginAccountSOrderUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMarginAccountSTradeListUserData(request: Margin.QueryMarginAccountSTradeListUserDataRequest, options?: RequestOptions): ApiPromise&lt;MarginTrade[], Margin.QueryMarginAccountSTradeListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If `fromId` is set, it will get orders >= that `fromId`. Otherwise most recent trades are returned.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMarginAccountSTradeListUserData({ symbol, timestamp, signature });
  // TODO: Handle 'response' of type MarginTrade[]
} catch (err) {
  if (err instanceof Margin.QueryMarginAccountSTradeListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>fromId?</code> | <code>number</code> | Trade id to fetch from. Default gets most recent trades. |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MarginTrade](src/models/margin-trade.ts)[]</code>

**OnError**: <code>[Margin.QueryMarginAccountSTradeListUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMarginAccountSAllOcoUserData(request: Margin.QueryMarginAccountSAllOcoUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginAllOrderListResponse[], Margin.QueryMarginAccountSAllOcoUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all OCO for a specific margin account based on provided optional parameters

Weight(IP): 200

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMarginAccountSAllOcoUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginAllOrderListResponse[]
} catch (err) {
  if (err instanceof Margin.QueryMarginAccountSAllOcoUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isIsolated?</code> | <code>[IsIsolated](src/models/is-isolated.ts)</code> | * `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin |
| <code>symbol?</code> | <code>string</code> | Mandatory for isolated margin, not supported for cross margin |
| <code>fromId?</code> | <code>string</code> | If supplied, neither `startTime` or `endTime` can be provided |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default Value: 500; Max Value: 1000 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginAllOrderListResponse](src/models/sapi-v1-margin-all-order-list-response.ts)[]</code>

**OnError**: <code>[Margin.QueryMarginAccountSAllOcoUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMarginAvailableInventoryUserData(request: Margin.QueryMarginAvailableInventoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginAvailableInventoryResponse, Margin.QueryMarginAvailableInventoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Margin available Inventory query

Weight(UID): 50

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMarginAvailableInventoryUserData({ type, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginAvailableInventoryResponse
} catch (err) {
  if (err instanceof Margin.QueryMarginAvailableInventoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[Type4](src/models/type4.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginAvailableInventoryResponse](src/models/sapi-v1-margin-available-inventory-response.ts)</code>

**OnError**: <code>[Margin.QueryMarginAvailableInventoryUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMarginPriceIndexMarketData(request: Margin.QueryMarginPriceIndexMarketDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginPriceIndexResponse, Margin.QueryMarginPriceIndexMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMarginPriceIndexMarketData({ symbol });
  // TODO: Handle 'response' of type SapiV1MarginPriceIndexResponse
} catch (err) {
  if (err instanceof Margin.QueryMarginPriceIndexMarketDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginPriceIndexResponse](src/models/sapi-v1-margin-price-index-response.ts)</code>

**OnError**: <code>[Margin.QueryMarginPriceIndexMarketDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMaxBorrowUserData(request: Margin.QueryMaxBorrowUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginMaxBorrowableResponse, Margin.QueryMaxBorrowUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If `isolatedSymbol` is not sent, crossed margin data will be sent.
- `borrowLimit` is also available from https://www.binance.com/en/margin-fee

Weight(IP): 50

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMaxBorrowUserData({ asset, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginMaxBorrowableResponse
} catch (err) {
  if (err instanceof Margin.QueryMaxBorrowUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isolatedSymbol?</code> | <code>string</code> | Isolated symbol |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginMaxBorrowableResponse](src/models/sapi-v1-margin-max-borrowable-response.ts)</code>

**OnError**: <code>[Margin.QueryMaxBorrowUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMaxTransferOutAmountUserData(request: Margin.QueryMaxTransferOutAmountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginMaxTransferableResponse, Margin.QueryMaxTransferOutAmountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If `isolatedSymbol` is not sent, crossed margin data will be sent.

Weight(IP): 50

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryMaxTransferOutAmountUserData({ asset, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MarginMaxTransferableResponse
} catch (err) {
  if (err instanceof Margin.QueryMaxTransferOutAmountUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isolatedSymbol?</code> | <code>string</code> | Isolated symbol |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginMaxTransferableResponse](src/models/sapi-v1-margin-max-transferable-response.ts)</code>

**OnError**: <code>[Margin.QueryMaxTransferOutAmountUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryBorrowRepayRecordsInMarginAccountUserData(request: Margin.QueryBorrowRepayRecordsInMarginAccountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MarginBorrowRepayResponse1, Margin.QueryBorrowRepayRecordsInMarginAccountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query borrow/repay records in Margin account

- txId or startTime must be sent. txId takes precedence. Response in descending order
- If an asset is sent, data within 30 days before endTime; If an asset is not sent, data within 7 days before endTime
- If neither startTime nor endTime is sent, the recent 7-day data will be returned.
- startTime set as endTime - 7 days by default, endTime set as current time by default

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.queryBorrowRepayRecordsInMarginAccountUserData({
    asset,
    type,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MarginBorrowRepayResponse1
} catch (err) {
  if (
    err instanceof Margin.QueryBorrowRepayRecordsInMarginAccountUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>type</code> | <code>string</code> | BORROW or REPAY |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>isolatedSymbol?</code> | <code>string</code> | Isolated symbol |
| <code>txId?</code> | <code>number</code> | tranId in POST /sapi/v1/margin/loan |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MarginBorrowRepayResponse1](src/models/sapi-v1-margin-borrow-repay-response1.ts)</code>

**OnError**: <code>[Margin.QueryBorrowRepayRecordsInMarginAccountUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toggleBnbBurnOnSpotTradeAndMarginInterestUserData(request: Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataRequest, options?: RequestOptions): ApiPromise&lt;BnbBurnStatus, Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- "spotBNBBurn" and "interestBNBBurn" should be sent at least one.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.margin.toggleBnbBurnOnSpotTradeAndMarginInterestUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type BnbBurnStatus
} catch (err) {
  if (
    err instanceof Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>spotBnbBurn?</code> | <code>[SpotBnbBurn](src/models/spot-bnb-burn.ts)</code> | Determines whether to use BNB to pay for trading fees on SPOT |
| <code>interestBnbBurn?</code> | <code>[InterestBnbBurn](src/models/interest-bnb-burn.ts)</code> | Determines whether to use BNB to pay for margin loan's interest |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BnbBurnStatus](src/models/bnb-burn-status.ts)</code>

**OnError**: <code>[Margin.ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError](src/resources/margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Wallet

> Source: [Wallet](src/resources/wallet.ts)

<details>
<summary><code>accountApiTradingStatusUserData(request: Wallet.AccountApiTradingStatusUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AccountApiTradingStatusResponse, Wallet.AccountApiTradingStatusUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch account API trading status with details.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.accountApiTradingStatusUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AccountApiTradingStatusResponse
} catch (err) {
  if (err instanceof Wallet.AccountApiTradingStatusUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AccountApiTradingStatusResponse](src/models/sapi-v1-account-api-trading-status-response.ts)</code>

**OnError**: <code>[Wallet.AccountApiTradingStatusUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>accountStatusUserData(request: Wallet.AccountStatusUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AccountStatusResponse, Wallet.AccountStatusUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch account status detail.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.accountStatusUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AccountStatusResponse
} catch (err) {
  if (err instanceof Wallet.AccountStatusUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AccountStatusResponse](src/models/sapi-v1-account-status-response.ts)</code>

**OnError**: <code>[Wallet.AccountStatusUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>accountInfoUserData(request: Wallet.AccountInfoUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AccountInfoResponse, Wallet.AccountInfoUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch account info detail.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.accountInfoUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AccountInfoResponse
} catch (err) {
  if (err instanceof Wallet.AccountInfoUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AccountInfoResponse](src/models/sapi-v1-account-info-response.ts)</code>

**OnError**: <code>[Wallet.AccountInfoUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allCoinsInformationUserData(request: Wallet.AllCoinsInformationUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CapitalConfigGetallResponse[], Wallet.AllCoinsInformationUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information of coins (available for deposit and withdraw) for user.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.allCoinsInformationUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1CapitalConfigGetallResponse[]
} catch (err) {
  if (err instanceof Wallet.AllCoinsInformationUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalConfigGetallResponse](src/models/sapi-v1-capital-config-getall-response.ts)[]</code>

**OnError**: <code>[Wallet.AllCoinsInformationUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetDetailUserData(request: Wallet.AssetDetailUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetAssetDetailResponse, Wallet.AssetDetailUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details of assets supported on Binance.

- Please get network and other deposit or withdraw details from `GET /sapi/v1/capital/config/getall`.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.assetDetailUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AssetAssetDetailResponse
} catch (err) {
  if (err instanceof Wallet.AssetDetailUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetAssetDetailResponse](src/models/sapi-v1-asset-asset-detail-response.ts)</code>

**OnError**: <code>[Wallet.AssetDetailUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetDividendRecordUserData(request: Wallet.AssetDividendRecordUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetAssetDividendResponse, Wallet.AssetDividendRecordUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query asset Dividend Record

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.assetDividendRecordUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AssetAssetDividendResponse
} catch (err) {
  if (err instanceof Wallet.AssetDividendRecordUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetAssetDividendResponse](src/models/sapi-v1-asset-asset-dividend-response.ts)</code>

**OnError**: <code>[Wallet.AssetDividendRecordUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>convertTransferUserData(request: Wallet.ConvertTransferUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetConvertTransferResponse, Wallet.ConvertTransferUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert transfer, convert between BUSD and stablecoins.
If the clientId has been used before, will not do the convert transfer, the original transfer will be returned.

Weight(UID): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.convertTransferUserData({
    clientTranId,
    asset,
    amount,
    targetAsset,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1AssetConvertTransferResponse
} catch (err) {
  if (err instanceof Wallet.ConvertTransferUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientTranId</code> | <code>string</code> | The unique flag, the min length is 20 |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>targetAsset</code> | <code>string</code> | Target asset you want to convert |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetConvertTransferResponse](src/models/sapi-v1-asset-convert-transfer-response.ts)</code>

**OnError**: <code>[Wallet.ConvertTransferUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dailyAccountSnapshotUserData(request: Wallet.DailyAccountSnapshotUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AccountSnapshotResponse, Wallet.DailyAccountSnapshotUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The query time period must be less than 30 days
- Support query within the last one month only
- If startTimeand endTime not sent, return records of the last 7 days by default

Weight(IP): 2400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.dailyAccountSnapshotUserData({ type, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AccountSnapshotResponse
} catch (err) {
  if (err instanceof Wallet.DailyAccountSnapshotUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[Type6](src/models/type6.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AccountSnapshotResponse](src/models/unions/sapi-v1-account-snapshot-response.ts)</code>

**OnError**: <code>[Wallet.DailyAccountSnapshotUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>depositAddressSupportingNetworkUserData(request: Wallet.DepositAddressSupportingNetworkUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CapitalDepositAddressResponse, Wallet.DepositAddressSupportingNetworkUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch deposit address with network.

- If network is not send, return with default network of the coin.
- You can get network and isDefault in networkList in the response of Get /sapi/v1/capital/config/getall (HMAC SHA256).

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.depositAddressSupportingNetworkUserData({
    coin,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1CapitalDepositAddressResponse
} catch (err) {
  if (err instanceof Wallet.DepositAddressSupportingNetworkUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>coin</code> | <code>string</code> | Coin name |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>network?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalDepositAddressResponse](src/models/sapi-v1-capital-deposit-address-response.ts)</code>

**OnError**: <code>[Wallet.DepositAddressSupportingNetworkUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>depositHistorySupportingNetworkUserData(request: Wallet.DepositHistorySupportingNetworkUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CapitalDepositHisrecResponse[], Wallet.DepositHistorySupportingNetworkUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch deposit history.

- Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days.
- If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.depositHistorySupportingNetworkUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1CapitalDepositHisrecResponse[]
} catch (err) {
  if (err instanceof Wallet.DepositHistorySupportingNetworkUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>coin?</code> | <code>string</code> | Coin name |
| <code>status?</code> | <code>number</code> | * `0` - pending<br>* `6` - credited but cannot withdraw<br>* `1` - success |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>offset?</code> | <code>number</code> | - |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalDepositHisrecResponse](src/models/sapi-v1-capital-deposit-hisrec-response.ts)[]</code>

**OnError**: <code>[Wallet.DepositHistorySupportingNetworkUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableFastWithdrawSwitchUserData(request: Wallet.DisableFastWithdrawSwitchUserDataRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Wallet.DisableFastWithdrawSwitchUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- This request will disable fastwithdraw switch under your account.
- You need to enable "trade" option for the api key which requests this endpoint.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.disableFastWithdrawSwitchUserData({ timestamp, signature });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof Wallet.DisableFastWithdrawSwitchUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[Wallet.DisableFastWithdrawSwitchUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dustTransferUserData(request: Wallet.DustTransferUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetDustResponse, Wallet.DustTransferUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert dust assets to BNB.

Weight(UID): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.dustTransferUserData({ asset, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AssetDustResponse
} catch (err) {
  if (err instanceof Wallet.DustTransferUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string[]</code> | The asset being converted. For example, asset=BTC&asset=USDT |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>accountType?</code> | <code>[AccountType](src/models/account-type.ts)</code> | SPOT or MARGIN, default SPOT |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetDustResponse](src/models/sapi-v1-asset-dust-response.ts)</code>

**OnError**: <code>[Wallet.DustTransferUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dustLogUserData(request: Wallet.DustLogUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetDribbletResponse, Wallet.DustLogUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.dustLogUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AssetDribbletResponse
} catch (err) {
  if (err instanceof Wallet.DustLogUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>accountType?</code> | <code>[AccountType](src/models/account-type.ts)</code> | SPOT or MARGIN, default SPOT |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetDribbletResponse](src/models/sapi-v1-asset-dribblet-response.ts)</code>

**OnError**: <code>[Wallet.DustLogUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableFastWithdrawSwitchUserData(request: Wallet.EnableFastWithdrawSwitchUserDataRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Wallet.EnableFastWithdrawSwitchUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- This request will enable fastwithdraw switch under your account. You need to enable "trade" option for the api key which requests this endpoint.
- When Fast Withdraw Switch is on, transferring funds to a Binance account will be done instantly. There is no on-chain transaction, no transaction ID and no withdrawal fee.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.enableFastWithdrawSwitchUserData({ timestamp, signature });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof Wallet.EnableFastWithdrawSwitchUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[Wallet.EnableFastWithdrawSwitchUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchDepositAddressListWithNetworkUserData(request: Wallet.FetchDepositAddressListWithNetworkUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CapitalDepositAddressListResponse[], Wallet.FetchDepositAddressListWithNetworkUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch deposit address list with network.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.fetchDepositAddressListWithNetworkUserData({
    coin,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1CapitalDepositAddressListResponse[]
} catch (err) {
  if (err instanceof Wallet.FetchDepositAddressListWithNetworkUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>coin</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>network?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalDepositAddressListResponse](src/models/sapi-v1-capital-deposit-address-list-response.ts)[]</code>

**OnError**: <code>[Wallet.FetchDepositAddressListWithNetworkUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchWithdrawAddressListUserData(options?: RequestOptions): ApiPromise&lt;SapiV1CapitalWithdrawAddressListResponse[], Wallet.FetchWithdrawAddressListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch withdraw address list

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.fetchWithdrawAddressListUserData();
  // TODO: Handle 'response' of type SapiV1CapitalWithdrawAddressListResponse[]
} catch (err) {
  if (err instanceof Wallet.FetchWithdrawAddressListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalWithdrawAddressListResponse](src/models/sapi-v1-capital-withdraw-address-list-response.ts)[]</code>

**OnError**: <code>[Wallet.FetchWithdrawAddressListUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fundingWalletUserData(request: Wallet.FundingWalletUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetGetFundingAssetResponse[], Wallet.FundingWalletUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Currently supports querying the following business assets：Binance Pay, Binance Card, Binance Gift Card, Stock Token

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.fundingWalletUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AssetGetFundingAssetResponse[]
} catch (err) {
  if (err instanceof Wallet.FundingWalletUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>needBtcValuation?</code> | <code>[NeedBtcValuation](src/models/need-btc-valuation.ts)</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetGetFundingAssetResponse](src/models/sapi-v1-asset-get-funding-asset-response.ts)[]</code>

**OnError**: <code>[Wallet.FundingWalletUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiKeyPermissionUserData(request: Wallet.GetApiKeyPermissionUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AccountApiRestrictionsResponse, Wallet.GetApiKeyPermissionUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.getApiKeyPermissionUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AccountApiRestrictionsResponse
} catch (err) {
  if (err instanceof Wallet.GetApiKeyPermissionUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AccountApiRestrictionsResponse](src/models/sapi-v1-account-api-restrictions-response.ts)</code>

**OnError**: <code>[Wallet.GetApiKeyPermissionUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAssetsThatCanBeConvertedIntoBnbUserData(request: Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetDustBtcResponse, Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.getAssetsThatCanBeConvertedIntoBnbUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AssetDustBtcResponse
} catch (err) {
  if (err instanceof Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>accountType?</code> | <code>[AccountType](src/models/account-type.ts)</code> | SPOT or MARGIN, default SPOT |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetDustBtcResponse](src/models/sapi-v1-asset-dust-btc-response.ts)</code>

**OnError**: <code>[Wallet.GetAssetsThatCanBeConvertedIntoBnbUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudMiningPaymentAndRefundHistoryUserData(request: Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse, Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The query of Cloud-Mining payment and refund history

Weight(UID): 600

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.getCloudMiningPaymentAndRefundHistoryUserData({
    startTime,
    endTime,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse
} catch (err) {
  if (
    err instanceof Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>startTime</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime</code> | <code>number</code> | UTC timestamp in ms |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>tranId?</code> | <code>number</code> | The transaction id |
| <code>clientTranId?</code> | <code>string</code> | The unique flag |
| <code>asset?</code> | <code>string</code> | If it is blank, we will query all assets |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse](src/models/sapi-v1-asset-ledger-transfer-cloud-mining-query-by-page-response.ts)</code>

**OnError**: <code>[Wallet.GetCloudMiningPaymentAndRefundHistoryUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSymbolsDelistScheduleForSpotMarketData(request: Wallet.GetSymbolsDelistScheduleForSpotMarketDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SpotDelistScheduleResponse[], Wallet.GetSymbolsDelistScheduleForSpotMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get symbols delist schedule for spot

Weight(IP): 100

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.getSymbolsDelistScheduleForSpotMarketData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SpotDelistScheduleResponse[]
} catch (err) {
  if (err instanceof Wallet.GetSymbolsDelistScheduleForSpotMarketDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SpotDelistScheduleResponse](src/models/sapi-v1-spot-delist-schedule-response.ts)[]</code>

**OnError**: <code>[Wallet.GetSymbolsDelistScheduleForSpotMarketDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oneClickArrivalDepositApplyUserData(request: Wallet.OneClickArrivalDepositApplyUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CapitalDepositCreditApplyResponse, Wallet.OneClickArrivalDepositApplyUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Apply deposit credit for expired address (One click arrival)

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.oneClickArrivalDepositApplyUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1CapitalDepositCreditApplyResponse
} catch (err) {
  if (err instanceof Wallet.OneClickArrivalDepositApplyUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>depositId?</code> | <code>number</code> | Deposit record Id, priority use |
| <code>txId?</code> | <code>string</code> | Deposit txId, used when depositId is not specified |
| <code>subAccountId?</code> | <code>number</code> | - |
| <code>subUserId?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalDepositCreditApplyResponse](src/models/sapi-v1-capital-deposit-credit-apply-response.ts)</code>

**OnError**: <code>[Wallet.OneClickArrivalDepositApplyUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryConvertTransferUserData(request: Wallet.QueryConvertTransferUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetConvertTransferQueryByPageResponse, Wallet.QueryConvertTransferUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(UID): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.queryConvertTransferUserData({
    startTime,
    endTime,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1AssetConvertTransferQueryByPageResponse
} catch (err) {
  if (err instanceof Wallet.QueryConvertTransferUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>startTime</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime</code> | <code>number</code> | UTC timestamp in ms |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>tranId?</code> | <code>number</code> | The transaction id |
| <code>asset?</code> | <code>string</code> | If it is blank, we will match deducted asset and target asset. |
| <code>accountType?</code> | <code>[AccountType3](src/models/account-type3.ts)</code> | MAIN: main account. CARD: funding account. If it is blank, we will query spot and card wallet, otherwise, we just query the corresponding wallet |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetConvertTransferQueryByPageResponse](src/models/sapi-v1-asset-convert-transfer-query-by-page-response.ts)</code>

**OnError**: <code>[Wallet.QueryConvertTransferUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryUserDelegationHistoryForMasterAccountUserData(request: Wallet.QueryUserDelegationHistoryForMasterAccountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetCustodyTransferHistoryResponse, Wallet.QueryUserDelegationHistoryForMasterAccountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query User Delegation History

Weight(IP): 60

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.queryUserDelegationHistoryForMasterAccountUserData({
    email,
    startTime,
    endTime,
    asset,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1AssetCustodyTransferHistoryResponse
} catch (err) {
  if (
    err instanceof Wallet.QueryUserDelegationHistoryForMasterAccountUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>startTime</code> | <code>number</code> | - |
| <code>endTime</code> | <code>number</code> | - |
| <code>asset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>type?</code> | <code>string</code> | - |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetCustodyTransferHistoryResponse](src/models/sapi-v1-asset-custody-transfer-history-response.ts)</code>

**OnError**: <code>[Wallet.QueryUserDelegationHistoryForMasterAccountUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryUserUniversalTransferHistoryUserData(request: Wallet.QueryUserUniversalTransferHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetTransferResponse, Wallet.QueryUserUniversalTransferHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
- `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
- Support query within the last 6 months only
- If `startTime` and `endTime` not sent, return records of the last 7 days by default

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.queryUserUniversalTransferHistoryUserData({
    type,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1AssetTransferResponse
} catch (err) {
  if (err instanceof Wallet.QueryUserUniversalTransferHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[Type7](src/models/type7.ts)</code> | Universal transfer type |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>fromSymbol?</code> | <code>string</code> | Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN |
| <code>toSymbol?</code> | <code>string</code> | Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetTransferResponse](src/models/sapi-v1-asset-transfer-response.ts)</code>

**OnError**: <code>[Wallet.QueryUserUniversalTransferHistoryUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryUserWalletBalanceUserData(request: Wallet.QueryUserWalletBalanceUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetWalletBalanceResponse[], Wallet.QueryUserWalletBalanceUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query User Wallet Balance

Weight(IP): 60

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.queryUserWalletBalanceUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AssetWalletBalanceResponse[]
} catch (err) {
  if (err instanceof Wallet.QueryUserWalletBalanceUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetWalletBalanceResponse](src/models/sapi-v1-asset-wallet-balance-response.ts)[]</code>

**OnError**: <code>[Wallet.QueryUserWalletBalanceUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryAutoConvertingStableCoinsUserData(options?: RequestOptions): ApiPromise&lt;SapiV1CapitalContractConvertibleCoinsResponse, Wallet.QueryAutoConvertingStableCoinsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a user's auto-conversion settings in deposit/withdrawal

Weight(UID): 600'

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.queryAutoConvertingStableCoinsUserData();
  // TODO: Handle 'response' of type SapiV1CapitalContractConvertibleCoinsResponse
} catch (err) {
  if (err instanceof Wallet.QueryAutoConvertingStableCoinsUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalContractConvertibleCoinsResponse](src/models/sapi-v1-capital-contract-convertible-coins-response.ts)</code>

**OnError**: <code>[Wallet.QueryAutoConvertingStableCoinsUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>switchOnOffBusdAndStableCoinsConversionUserDataUserData(request: Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

User can use it to turn on or turn off the BUSD auto-conversion from/to a specific stable coin.

Weight(UID): 600'

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.switchOnOffBusdAndStableCoinsConversionUserDataUserData({
    coin,
    enable,
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (
    err instanceof Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>coin</code> | <code>string</code> | Must be USDC, USDP or TUSD |
| <code>enable</code> | <code>boolean</code> | true: turn on the auto-conversion. false: turn off the auto-conversion |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[Wallet.SwitchOnOffBusdAndStableCoinsConversionUserDataUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>systemStatusSystem(options?: RequestOptions): ApiPromise&lt;SapiV1SystemStatusResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch system status.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.systemStatusSystem();
  // TODO: Handle 'response' of type SapiV1SystemStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SystemStatusResponse](src/models/sapi-v1-system-status-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tradeFeeUserData(request: Wallet.TradeFeeUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetTradeFeeResponse[], Wallet.TradeFeeUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch trade fee

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.tradeFeeUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AssetTradeFeeResponse[]
} catch (err) {
  if (err instanceof Wallet.TradeFeeUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetTradeFeeResponse](src/models/sapi-v1-asset-trade-fee-response.ts)[]</code>

**OnError**: <code>[Wallet.TradeFeeUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userAssetUserData(request: Wallet.UserAssetUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV3AssetGetUserAssetResponse[], Wallet.UserAssetUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get user assets, just for positive data.

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.userAssetUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV3AssetGetUserAssetResponse[]
} catch (err) {
  if (err instanceof Wallet.UserAssetUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>needBtcValuation?</code> | <code>[NeedBtcValuation](src/models/need-btc-valuation.ts)</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV3AssetGetUserAssetResponse](src/models/sapi-v3-asset-get-user-asset-response.ts)[]</code>

**OnError**: <code>[Wallet.UserAssetUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userUniversalTransferUserData(request: Wallet.UserUniversalTransferUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AssetTransferResponse1, Wallet.UserUniversalTransferUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You need to enable `Permits Universal Transfer` option for the api key which requests this endpoint.

- `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
- `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN

ENUM of transfer types:
  - MAIN_UMFUTURE Spot account transfer to USDⓈ-M Futures account
  - MAIN_CMFUTURE Spot account transfer to COIN-M Futures account
  - MAIN_MARGIN Spot account transfer to Margin(cross)account
  - UMFUTURE_MAIN USDⓈ-M Futures account transfer to Spot account
  - UMFUTURE_MARGIN USDⓈ-M Futures account transfer to Margin(cross)account
  - CMFUTURE_MAIN COIN-M Futures account transfer to Spot account
  - CMFUTURE_MARGIN COIN-M Futures account transfer to Margin(cross) account
  - MARGIN_MAIN Margin(cross)account transfer to Spot account
  - MARGIN_UMFUTURE Margin(cross)account transfer to USDⓈ-M Futures
  - MARGIN_CMFUTURE Margin(cross)account transfer to COIN-M Futures
  - ISOLATEDMARGIN_MARGIN Isolated margin account transfer to Margin(cross) account
  - MARGIN_ISOLATEDMARGIN Margin(cross) account transfer to Isolated margin account
  - ISOLATEDMARGIN_ISOLATEDMARGIN Isolated margin account transfer to Isolated margin account
  - MAIN_FUNDING Spot account transfer to Funding account
  - FUNDING_MAIN Funding account transfer to Spot account
  - FUNDING_UMFUTURE Funding account transfer to UMFUTURE account
  - UMFUTURE_FUNDING UMFUTURE account transfer to Funding account
  - MARGIN_FUNDING MARGIN account transfer to Funding account
  - FUNDING_MARGIN Funding account transfer to Margin account
  - FUNDING_CMFUTURE Funding account transfer to CMFUTURE account
  - CMFUTURE_FUNDING CMFUTURE account transfer to Funding account
  - MAIN_OPTION Spot account transfer to Options account
  - OPTION_MAIN Options account transfer to Spot account
  - UMFUTURE_OPTION USDⓈ-M Futures account transfer to Options account
  - OPTION_UMFUTURE Options account transfer to USDⓈ-M Futures account
  - MARGIN_OPTION Margin(cross)account transfer to Options account
  - OPTION_MARGIN Options account transfer to Margin(cross)account
  - FUNDING_OPTION Funding account transfer to Options account
  - OPTION_FUNDING Options account transfer to Funding account
  - MAIN_PORTFOLIO_MARGIN Spot account transfer to Portfolio Margin account
  - PORTFOLIO_MARGIN_MAIN Portfolio Margin account transfer to Spot account
  - MAIN_ISOLATED_MARGIN Spot account transfer to Isolated margin account
  - ISOLATED_MARGIN_MAIN Isolated margin account transfer to Spot account

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.userUniversalTransferUserData({
    type,
    asset,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1AssetTransferResponse1
} catch (err) {
  if (err instanceof Wallet.UserUniversalTransferUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[Type7](src/models/type7.ts)</code> | Universal transfer type |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>fromSymbol?</code> | <code>string</code> | Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN |
| <code>toSymbol?</code> | <code>string</code> | Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AssetTransferResponse1](src/models/sapi-v1-asset-transfer-response1.ts)</code>

**OnError**: <code>[Wallet.UserUniversalTransferUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>withdrawUserData(request: Wallet.WithdrawUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CapitalWithdrawApplyResponse, Wallet.WithdrawUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a withdraw request.

- If `network` not send, return with default network of the coin.
- You can get `network` and `isDefault` in `networkList` of a coin in the response of `Get /sapi/v1/capital/config/getall (HMAC SHA256)`.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.withdrawUserData({ coin, address, amount, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1CapitalWithdrawApplyResponse
} catch (err) {
  if (err instanceof Wallet.WithdrawUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>coin</code> | <code>string</code> | Coin name |
| <code>address</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>withdrawOrderId?</code> | <code>string</code> | Client id for withdraw |
| <code>network?</code> | <code>string</code> | - |
| <code>addressTag?</code> | <code>string</code> | Secondary address identifier for coins like XRP,XMR etc. |
| <code>transactionFeeFlag?</code> | <code>boolean</code> | When making internal transfer<br>- `true` ->  returning the fee to the destination account;<br>- `false` -> returning the fee back to the departure account. |
| <code>name?</code> | <code>string</code> | - |
| <code>walletType?</code> | <code>number</code> | The wallet type for withdraw，0-Spot wallet, 1- Funding wallet. Default is Spot wallet |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalWithdrawApplyResponse](src/models/sapi-v1-capital-withdraw-apply-response.ts)</code>

**OnError**: <code>[Wallet.WithdrawUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>withdrawHistorySupportingNetworkUserData(request: Wallet.WithdrawHistorySupportingNetworkUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CapitalWithdrawHistoryResponse[], Wallet.WithdrawHistorySupportingNetworkUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch withdraw history.

This endpoint specifically uses per second UID rate limit, user's total second level IP rate limit is 180000/second. Response from the endpoint contains header key X-SAPI-USED-UID-WEIGHT-1S, which defines weight used by the current IP.

- `network` may not be in the response for old withdraw.
- Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days.
- If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days
- If withdrawOrderId is sent, time between startTime and endTime must be less than 7 days.
- If withdrawOrderId is sent, startTime and endTime are not sent, will return last 7 days records by default.

Weight(UID): 18000
Request Limit: 10 requests per second

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallet.withdrawHistorySupportingNetworkUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1CapitalWithdrawHistoryResponse[]
} catch (err) {
  if (err instanceof Wallet.WithdrawHistorySupportingNetworkUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>coin?</code> | <code>string</code> | Coin name |
| <code>withdrawOrderId?</code> | <code>string</code> | - |
| <code>status?</code> | <code>number</code> | * `0` - Email Sent<br>* `1` - Cancelled<br>* `2` - Awaiting Approval<br>* `3` - Rejected<br>* `4` - Processing<br>* `5` - Failure<br>* `6` - Completed |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>offset?</code> | <code>number</code> | - |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalWithdrawHistoryResponse](src/models/sapi-v1-capital-withdraw-history-response.ts)[]</code>

**OnError**: <code>[Wallet.WithdrawHistorySupportingNetworkUserDataError](src/resources/wallet.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubAccountApi

> Source: [SubAccountApi](src/resources/sub-account-api.ts)

<details>
<summary><code>createAVirtualSubAccountForMasterAccount(request: SubAccountApi.CreateAVirtualSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountVirtualSubAccountResponse, SubAccountApi.CreateAVirtualSubAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- This request will generate a virtual sub account under your master account.
- You need to enable "trade" option for the api key which requests this endpoint.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.createAVirtualSubAccountForMasterAccount({
    subAccountString,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountVirtualSubAccountResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.CreateAVirtualSubAccountForMasterAccountError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subAccountString</code> | <code>string</code> | Please input a string. We will create a virtual email using that string for you to register |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountVirtualSubAccountResponse](src/models/sapi-v1-sub-account-virtual-sub-account-response.ts)</code>

**OnError**: <code>[SubAccountApi.CreateAVirtualSubAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteIpListForASubAccountApiKeyForMasterAccount(request: SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse, SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.deleteIpListForASubAccountApiKeyForMasterAccount({
    email,
    subAccountApiKey,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>subAccountApiKey</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>ipAddress?</code> | <code>string</code> | Can be added in batches, separated by commas |
| <code>thirdPartyName?</code> | <code>string</code> | third party IP list name |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountSubAccountApiIpRestrictionIpListResponse](src/models/sapi-v1-sub-account-sub-account-api-ip-restriction-ip-list-response.ts)</code>

**OnError**: <code>[SubAccountApi.DeleteIpListForASubAccountApiKeyForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>depositAssetsIntoTheManagedSubAccountForInvestorMasterAccount(request: SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountDepositResponse, SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.depositAssetsIntoTheManagedSubAccountForInvestorMasterAccount({
    toEmail,
    asset,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountDepositResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>toEmail</code> | <code>string</code> | Recipient email |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountDepositResponse](src/models/sapi-v1-managed-subaccount-deposit-response.ts)</code>

**OnError**: <code>[SubAccountApi.DepositAssetsIntoTheManagedSubAccountForInvestorMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detailOnSubAccountSFuturesAccountForMasterAccount(request: SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountFuturesAccountResponse, SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.detailOnSubAccountSFuturesAccountForMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountFuturesAccountResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountFuturesAccountResponse](src/models/sapi-v1-sub-account-futures-account-response.ts)</code>

**OnError**: <code>[SubAccountApi.DetailOnSubAccountSFuturesAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detailOnSubAccountSFuturesAccountV2ForMasterAccount(request: SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV2SubAccountFuturesAccountResponse, SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.detailOnSubAccountSFuturesAccountV2ForMasterAccount({
    email,
    futuresType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2SubAccountFuturesAccountResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>futuresType</code> | <code>number</code> | * `1` - USDT Margined Futures<br>* `2` - COIN Margined Futures |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2SubAccountFuturesAccountResponse](src/models/unions/sapi-v2-sub-account-futures-account-response.ts)</code>

**OnError**: <code>[SubAccountApi.DetailOnSubAccountSFuturesAccountV2ForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detailOnSubAccountSMarginAccountForMasterAccount(request: SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountMarginAccountResponse, SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.detailOnSubAccountSMarginAccountForMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountMarginAccountResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountMarginAccountResponse](src/models/sapi-v1-sub-account-margin-account-response.ts)</code>

**OnError**: <code>[SubAccountApi.DetailOnSubAccountSMarginAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableFuturesForSubAccountForMasterAccount(request: SubAccountApi.EnableFuturesForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountFuturesEnableResponse, SubAccountApi.EnableFuturesForSubAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.enableFuturesForSubAccountForMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountFuturesEnableResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.EnableFuturesForSubAccountForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountFuturesEnableResponse](src/models/sapi-v1-sub-account-futures-enable-response.ts)</code>

**OnError**: <code>[SubAccountApi.EnableFuturesForSubAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableLeverageTokenForSubAccountForMasterAccount(request: SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountBlvtEnableResponse, SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.enableLeverageTokenForSubAccountForMasterAccount({
    email,
    enableBlvt,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountBlvtEnableResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>enableBlvt</code> | <code>boolean</code> | Only true for now |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountBlvtEnableResponse](src/models/sapi-v1-sub-account-blvt-enable-response.ts)</code>

**OnError**: <code>[SubAccountApi.EnableLeverageTokenForSubAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableMarginForSubAccountForMasterAccount(request: SubAccountApi.EnableMarginForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountMarginEnableResponse, SubAccountApi.EnableMarginForSubAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.enableMarginForSubAccountForMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountMarginEnableResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.EnableMarginForSubAccountForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountMarginEnableResponse](src/models/sapi-v1-sub-account-margin-enable-response.ts)</code>

**OnError**: <code>[SubAccountApi.EnableMarginForSubAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableOptionsForSubAccountForMasterAccountUserData(request: SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountEoptionsEnableResponse, SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable Options for Sub-account (For Master Account).

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.enableOptionsForSubAccountForMasterAccountUserData({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountEoptionsEnableResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountEoptionsEnableResponse](src/models/sapi-v1-sub-account-eoptions-enable-response.ts)</code>

**OnError**: <code>[SubAccountApi.EnableOptionsForSubAccountForMasterAccountUserDataError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>futuresPositionRiskOfSubAccountForMasterAccount(request: SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountFuturesPositionRiskResponse[], SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.futuresPositionRiskOfSubAccountForMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountFuturesPositionRiskResponse[]
} catch (err) {
  if (
    err instanceof SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountFuturesPositionRiskResponse](src/models/sapi-v1-sub-account-futures-position-risk-response.ts)[]</code>

**OnError**: <code>[SubAccountApi.FuturesPositionRiskOfSubAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>futuresPositionRiskOfSubAccountV2ForMasterAccount(request: SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV2SubAccountFuturesPositionRiskResponse, SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.futuresPositionRiskOfSubAccountV2ForMasterAccount({
    email,
    futuresType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2SubAccountFuturesPositionRiskResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>futuresType</code> | <code>number</code> | * `1` - USDT Margined Futures<br>* `2` - COIN Margined Futures |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2SubAccountFuturesPositionRiskResponse](src/models/unions/sapi-v2-sub-account-futures-position-risk-response.ts)</code>

**OnError**: <code>[SubAccountApi.FuturesPositionRiskOfSubAccountV2ForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIpRestrictionForASubAccountApiKeyForMasterAccount(request: SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountSubAccountApiIpRestrictionResponse, SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.getIpRestrictionForASubAccountApiKeyForMasterAccount({
    email,
    subAccountApiKey,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountSubAccountApiIpRestrictionResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>subAccountApiKey</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountSubAccountApiIpRestrictionResponse](src/models/sapi-v1-sub-account-sub-account-api-ip-restriction-response.ts)</code>

**OnError**: <code>[SubAccountApi.GetIpRestrictionForASubAccountApiKeyForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getManagedSubAccountDepositAddressForInvestorMasterAccount(request: SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountDepositAddressResponse, SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get investor's managed sub-account deposit address

Weight(UID): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.getManagedSubAccountDepositAddressForInvestorMasterAccount({
    email,
    coin,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountDepositAddressResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>coin</code> | <code>string</code> | Coin name |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>network?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountDepositAddressResponse](src/models/sapi-v1-managed-subaccount-deposit-address-response.ts)</code>

**OnError**: <code>[SubAccountApi.GetManagedSubAccountDepositAddressForInvestorMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>managedSubAccountAssetDetailsForInvestorMasterAccount(request: SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountAssetResponse[], SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.managedSubAccountAssetDetailsForInvestorMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountAssetResponse[]
} catch (err) {
  if (
    err instanceof SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountAssetResponse](src/models/sapi-v1-managed-subaccount-asset-response.ts)[]</code>

**OnError**: <code>[SubAccountApi.ManagedSubAccountAssetDetailsForInvestorMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>managedSubAccountSnapshotForInvestorMasterAccount(request: SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountAccountSnapshotResponse, SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The query time period must be less then 30 days
- Support query within the last one month only
- If `startTime` and `endTime` not sent, return records of the last 7 days by default

Weight(IP): 2400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.managedSubAccountSnapshotForInvestorMasterAccount({
    email,
    type,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountAccountSnapshotResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>type</code> | <code>string</code> | "SPOT", "MARGIN"(cross), "FUTURES"(UM) |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | min 7, max 30, default 7 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountAccountSnapshotResponse](src/models/sapi-v1-managed-subaccount-account-snapshot-response.ts)</code>

**OnError**: <code>[SubAccountApi.ManagedSubAccountSnapshotForInvestorMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marginTransferForSubAccountForMasterAccount(request: SubAccountApi.MarginTransferForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountMarginTransferResponse, SubAccountApi.MarginTransferForSubAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.marginTransferForSubAccountForMasterAccount({
    email,
    asset,
    amount,
    type,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountMarginTransferResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.MarginTransferForSubAccountForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>type</code> | <code>number</code> | * `1` - transfer from subaccount's spot account to margin account<br>* `2` - transfer from subaccount's margin account to its spot account |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountMarginTransferResponse](src/models/sapi-v1-sub-account-margin-transfer-response.ts)</code>

**OnError**: <code>[SubAccountApi.MarginTransferForSubAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryManagedSubAccountTransferLogForInvestorMasterAccount(request: SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountQueryTransLogForInvestorResponse, SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Investor can use this api to query managed sub account transfer log. This endpoint is available for investor of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.queryManagedSubAccountTransferLogForInvestorMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountQueryTransLogForInvestorResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>transfers?</code> | <code>string</code> | Transfer Direction (FROM/TO) |
| <code>transferFunctionAccountType?</code> | <code>string</code> | Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE) |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountQueryTransLogForInvestorResponse](src/models/sapi-v1-managed-subaccount-query-trans-log-for-investor-response.ts)</code>

**OnError**: <code>[SubAccountApi.QueryManagedSubAccountTransferLogForInvestorMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryManagedSubAccountTransferLogForTradingTeamMasterAccount(request: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse, SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trading team can use this api to query managed sub account transfer log. This endpoint is available for trading team of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team

Weight(IP): 60

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.queryManagedSubAccountTransferLogForTradingTeamMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>transfers?</code> | <code>string</code> | Transfer Direction (FROM/TO) |
| <code>transferFunctionAccountType?</code> | <code>string</code> | Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE) |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountQueryTransLogForTradeParentResponse](src/models/sapi-v1-managed-subaccount-query-trans-log-for-trade-parent-response.ts)</code>

**OnError**: <code>[SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryManagedSubAccountTransferLogForTradingTeamSubAccountUserData(request: SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountQueryTransLogResponse, SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Managed Sub Account Transfer Log (For Trading Team Sub Account)

Weight(UID): 60

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.subAccountApi.queryManagedSubAccountTransferLogForTradingTeamSubAccountUserData({
      transfers,
      transferFunctionAccountType,
      timestamp,
      signature,
    });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountQueryTransLogResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transfers</code> | <code>[Transfers](src/models/transfers.ts)</code> | Transfer Direction |
| <code>transferFunctionAccountType</code> | <code>[TransferFunctionAccountType](src/models/transfer-function-account-type.ts)</code> | Transfer function account type |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountQueryTransLogResponse](src/models/sapi-v1-managed-subaccount-query-trans-log-response.ts)</code>

**OnError**: <code>[SubAccountApi.QueryManagedSubAccountTransferLogForTradingTeamSubAccountUserDataError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccount(request: SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountFetchFutureAssetResponse, SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Investor can use this api to query managed sub account futures asset details

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.subAccountApi.queryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccount({
      email,
      timestamp,
      signature,
    });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountFetchFutureAssetResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountFetchFutureAssetResponse](src/models/sapi-v1-managed-subaccount-fetch-future-asset-response.ts)</code>

**OnError**: <code>[SubAccountApi.QueryManagedSubAccountFuturesAssetDetailsForInvestorMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryManagedSubAccountListForInvestor(request: SubAccountApi.QueryManagedSubAccountListForInvestorRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountInfoResponse, SubAccountApi.QueryManagedSubAccountListForInvestorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get investor's managed sub-account list.

Weight(UID): 60

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.queryManagedSubAccountListForInvestor({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountInfoResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.QueryManagedSubAccountListForInvestorError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountInfoResponse](src/models/sapi-v1-managed-subaccount-info-response.ts)</code>

**OnError**: <code>[SubAccountApi.QueryManagedSubAccountListForInvestorError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryManagedSubAccountMarginAssetDetailsForInvestorMasterAccount(request: SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountMarginAssetResponse, SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Investor can use this api to query managed sub account margin asset details

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.subAccountApi.queryManagedSubAccountMarginAssetDetailsForInvestorMasterAccount({
      email,
      timestamp,
      signature,
    });
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountMarginAssetResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountMarginAssetResponse](src/models/sapi-v1-managed-subaccount-margin-asset-response.ts)</code>

**OnError**: <code>[SubAccountApi.QueryManagedSubAccountMarginAssetDetailsForInvestorMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySubAccountAssetsForMasterAccount(request: SubAccountApi.QuerySubAccountAssetsForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV4SubAccountAssetsResponse, SubAccountApi.QuerySubAccountAssetsForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch sub-account assets

Weight(UID): 60

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.querySubAccountAssetsForMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV4SubAccountAssetsResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.QuerySubAccountAssetsForMasterAccountError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV4SubAccountAssetsResponse](src/models/sapi-v4-sub-account-assets-response.ts)</code>

**OnError**: <code>[SubAccountApi.QuerySubAccountAssetsForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySubAccountListForMasterAccount(request: SubAccountApi.QuerySubAccountListForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountListResponse, SubAccountApi.QuerySubAccountListForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.querySubAccountListForMasterAccount({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SubAccountListResponse
} catch (err) {
  if (err instanceof SubAccountApi.QuerySubAccountListForMasterAccountError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>email?</code> | <code>string</code> | Sub-account email |
| <code>isFreeze?</code> | <code>[IsFreeze](src/models/is-freeze.ts)</code> | - |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>limit?</code> | <code>number</code> | Default 1; max 200 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountListResponse](src/models/sapi-v1-sub-account-list-response.ts)</code>

**OnError**: <code>[SubAccountApi.QuerySubAccountListForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySubAccountTransactionStatisticsForMasterAccount(request: SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountTransactionStatisticsResponse, SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Sub-account Transaction statistics (For Master Account).

Weight(UID): 60

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.querySubAccountTransactionStatisticsForMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountTransactionStatisticsResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountTransactionStatisticsResponse](src/models/sapi-v1-sub-account-transaction-statistics-response.ts)</code>

**OnError**: <code>[SubAccountApi.QuerySubAccountTransactionStatisticsForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subAccountAssetsForMasterAccount(request: SubAccountApi.SubAccountAssetsForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV3SubAccountAssetsResponse, SubAccountApi.SubAccountAssetsForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch sub-account assets

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.subAccountAssetsForMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV3SubAccountAssetsResponse
} catch (err) {
  if (err instanceof SubAccountApi.SubAccountAssetsForMasterAccountError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV3SubAccountAssetsResponse](src/models/sapi-v3-sub-account-assets-response.ts)</code>

**OnError**: <code>[SubAccountApi.SubAccountAssetsForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subAccountDepositHistoryForMasterAccount(request: SubAccountApi.SubAccountDepositHistoryForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CapitalDepositSubHisrecResponse[], SubAccountApi.SubAccountDepositHistoryForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch sub-account deposit history

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.subAccountDepositHistoryForMasterAccount({
    email,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1CapitalDepositSubHisrecResponse[]
} catch (err) {
  if (
    err instanceof SubAccountApi.SubAccountDepositHistoryForMasterAccountError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>coin?</code> | <code>string</code> | Coin name |
| <code>status?</code> | <code>number</code> | 0(0:pending,6: credited but cannot withdraw, 1:success) |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalDepositSubHisrecResponse](src/models/sapi-v1-capital-deposit-sub-hisrec-response.ts)[]</code>

**OnError**: <code>[SubAccountApi.SubAccountDepositHistoryForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subAccountFuturesAssetTransferForMasterAccount(request: SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountFuturesInternalTransferResponse1, SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Master account can transfer max 2000 times a minute

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.subAccountFuturesAssetTransferForMasterAccount({
    fromEmail,
    toEmail,
    futuresType,
    asset,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountFuturesInternalTransferResponse1
} catch (err) {
  if (
    err instanceof SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fromEmail</code> | <code>string</code> | Sender email |
| <code>toEmail</code> | <code>string</code> | Recipient email |
| <code>futuresType</code> | <code>number</code> | 1:USDT-margined Futures,2: Coin-margined Futures |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountFuturesInternalTransferResponse1](src/models/sapi-v1-sub-account-futures-internal-transfer-response1.ts)</code>

**OnError**: <code>[SubAccountApi.SubAccountFuturesAssetTransferForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subAccountFuturesAssetTransferHistoryForMasterAccount(request: SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountFuturesInternalTransferResponse, SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.subAccountFuturesAssetTransferHistoryForMasterAccount({
    email,
    futuresType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountFuturesInternalTransferResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>futuresType</code> | <code>number</code> | 1:USDT-margined Futures, 2: Coin-margined Futures |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>limit?</code> | <code>number</code> | Default value: 50, Max value: 500 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountFuturesInternalTransferResponse](src/models/sapi-v1-sub-account-futures-internal-transfer-response.ts)</code>

**OnError**: <code>[SubAccountApi.SubAccountFuturesAssetTransferHistoryForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subAccountSpotAssetTransferHistoryForMasterAccount(request: SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountSubTransferHistoryResponse[], SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- fromEmail and toEmail cannot be sent at the same time.
- Return fromEmail equal master account email by default.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.subAccountSpotAssetTransferHistoryForMasterAccount({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountSubTransferHistoryResponse[]
} catch (err) {
  if (
    err instanceof SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>fromEmail?</code> | <code>string</code> | Sub-account email |
| <code>toEmail?</code> | <code>string</code> | Sub-account email |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>limit?</code> | <code>number</code> | Default 1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountSubTransferHistoryResponse](src/models/sapi-v1-sub-account-sub-transfer-history-response.ts)[]</code>

**OnError**: <code>[SubAccountApi.SubAccountSpotAssetTransferHistoryForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subAccountSpotAssetsSummaryForMasterAccount(request: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountSpotSummaryResponse, SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get BTC valued asset summary of subaccounts.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.subAccountSpotAssetsSummaryForMasterAccount({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountSpotSummaryResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>email?</code> | <code>string</code> | Sub-account email |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:20 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountSpotSummaryResponse](src/models/sapi-v1-sub-account-spot-summary-response.ts)</code>

**OnError**: <code>[SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subAccountSpotAssetsSummaryForMasterAccount2(request: SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Request, options?: RequestOptions): ApiPromise&lt;SapiV1CapitalDepositSubAddressResponse, SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch sub-account deposit address

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.subAccountSpotAssetsSummaryForMasterAccount2({
    email,
    coin,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1CapitalDepositSubAddressResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Error &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>coin</code> | <code>string</code> | Coin name |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>network?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CapitalDepositSubAddressResponse](src/models/sapi-v1-capital-deposit-sub-address-response.ts)</code>

**OnError**: <code>[SubAccountApi.SubAccountSpotAssetsSummaryForMasterAccount2Error](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subAccountTransferHistoryForSubAccount(request: SubAccountApi.SubAccountTransferHistoryForSubAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountTransferSubUserHistoryResponse[], SubAccountApi.SubAccountTransferHistoryForSubAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If `type` is not sent, the records of type 2: transfer out will be returned by default.
- If `startTime` and `endTime` are not sent, the recent 30-day data will be returned.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.subAccountTransferHistoryForSubAccount({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountTransferSubUserHistoryResponse[]
} catch (err) {
  if (
    err instanceof SubAccountApi.SubAccountTransferHistoryForSubAccountError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>type?</code> | <code>number</code> | * `1` - transfer in<br>* `2` - transfer out |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountTransferSubUserHistoryResponse](src/models/sapi-v1-sub-account-transfer-sub-user-history-response.ts)[]</code>

**OnError**: <code>[SubAccountApi.SubAccountTransferHistoryForSubAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subAccountSStatusOnMarginFuturesForMasterAccount(request: SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountStatusResponse[], SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If no `email` sent, all sub-accounts' information will be returned.

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.subAccountSStatusOnMarginFuturesForMasterAccount({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountStatusResponse[]
} catch (err) {
  if (
    err instanceof SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>email?</code> | <code>string</code> | Sub-account email |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountStatusResponse](src/models/sapi-v1-sub-account-status-response.ts)[]</code>

**OnError**: <code>[SubAccountApi.SubAccountSStatusOnMarginFuturesForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>summaryOfSubAccountSFuturesAccountForMasterAccount(request: SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountFuturesAccountSummaryResponse, SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.summaryOfSubAccountSFuturesAccountForMasterAccount({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountFuturesAccountSummaryResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountFuturesAccountSummaryResponse](src/models/sapi-v1-sub-account-futures-account-summary-response.ts)</code>

**OnError**: <code>[SubAccountApi.SummaryOfSubAccountSFuturesAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>summaryOfSubAccountSFuturesAccountV2ForMasterAccount(request: SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV2SubAccountFuturesAccountSummaryResponse, SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.summaryOfSubAccountSFuturesAccountV2ForMasterAccount({
    futuresType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2SubAccountFuturesAccountSummaryResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>futuresType</code> | <code>number</code> | * `1` - USDT Margined Futures<br>* `2` - COIN Margined Futures |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>limit?</code> | <code>number</code> | Default 10, Max 20 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2SubAccountFuturesAccountSummaryResponse](src/models/unions/sapi-v2-sub-account-futures-account-summary-response.ts)</code>

**OnError**: <code>[SubAccountApi.SummaryOfSubAccountSFuturesAccountV2ForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>summaryOfSubAccountSMarginAccountForMasterAccount(request: SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountMarginAccountSummaryResponse, SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.summaryOfSubAccountSMarginAccountForMasterAccount({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountMarginAccountSummaryResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountMarginAccountSummaryResponse](src/models/sapi-v1-sub-account-margin-account-summary-response.ts)</code>

**OnError**: <code>[SubAccountApi.SummaryOfSubAccountSMarginAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferForSubAccountForMasterAccount(request: SubAccountApi.TransferForSubAccountForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountFuturesTransferResponse, SubAccountApi.TransferForSubAccountForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.transferForSubAccountForMasterAccount({
    email,
    asset,
    amount,
    type,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountFuturesTransferResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.TransferForSubAccountForMasterAccountError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>type</code> | <code>number</code> | * `1` - transfer from subaccount's spot account to its USDT-margined futures account<br>* `2` - transfer from subaccount's USDT-margined futures account to its spot account<br>* `3` - transfer from subaccount's spot account to its COIN-margined futures account<br>* `4` - transfer from subaccount's COIN-margined futures account to its spot account |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountFuturesTransferResponse](src/models/sapi-v1-sub-account-futures-transfer-response.ts)</code>

**OnError**: <code>[SubAccountApi.TransferForSubAccountForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferToMasterForSubAccount(request: SubAccountApi.TransferToMasterForSubAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountTransferSubToMasterResponse, SubAccountApi.TransferToMasterForSubAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.transferToMasterForSubAccount({
    asset,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountTransferSubToMasterResponse
} catch (err) {
  if (err instanceof SubAccountApi.TransferToMasterForSubAccountError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountTransferSubToMasterResponse](src/models/sapi-v1-sub-account-transfer-sub-to-master-response.ts)</code>

**OnError**: <code>[SubAccountApi.TransferToMasterForSubAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferToSubAccountOfSameMasterForSubAccount(request: SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountTransferSubToSubResponse, SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.transferToSubAccountOfSameMasterForSubAccount({
    toEmail,
    asset,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountTransferSubToSubResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>toEmail</code> | <code>string</code> | Recipient email |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountTransferSubToSubResponse](src/models/sapi-v1-sub-account-transfer-sub-to-sub-response.ts)</code>

**OnError**: <code>[SubAccountApi.TransferToSubAccountOfSameMasterForSubAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>universalTransferForMasterAccount(request: SubAccountApi.UniversalTransferForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountUniversalTransferResponse1, SubAccountApi.UniversalTransferForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- You need to enable "internal transfer" option for the api key which requests this endpoint.
- Transfer from master account by default if fromEmail is not sent.
- Transfer to master account by default if toEmail is not sent.
- Supported transfer scenarios:
  - Master account SPOT transfer to sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN
  - Sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN transfer to master account SPOT
  - Transfer between two sub-account SPOT accounts

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.universalTransferForMasterAccount({
    fromAccountType,
    toAccountType,
    asset,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountUniversalTransferResponse1
} catch (err) {
  if (err instanceof SubAccountApi.UniversalTransferForMasterAccountError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fromAccountType</code> | <code>[FromAccountType](src/models/from-account-type.ts)</code> | - |
| <code>toAccountType</code> | <code>[ToAccountType](src/models/to-account-type.ts)</code> | - |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>fromEmail?</code> | <code>string</code> | Sub-account email |
| <code>toEmail?</code> | <code>string</code> | Sub-account email |
| <code>clientTranId?</code> | <code>string</code> | - |
| <code>symbol?</code> | <code>string</code> | Only supported under ISOLATED_MARGIN type |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountUniversalTransferResponse1](src/models/sapi-v1-sub-account-universal-transfer-response1.ts)</code>

**OnError**: <code>[SubAccountApi.UniversalTransferForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>universalTransferHistoryForMasterAccount(request: SubAccountApi.UniversalTransferHistoryForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SubAccountUniversalTransferResponse[], SubAccountApi.UniversalTransferHistoryForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- `fromEmail` and `toEmail` cannot be sent at the same time.
- Return `fromEmail` equal master account email by default.
- The query time period must be less then 30 days.
- If startTime and endTime not sent, return records of the last 30 days by default.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.universalTransferHistoryForMasterAccount({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SubAccountUniversalTransferResponse[]
} catch (err) {
  if (
    err instanceof SubAccountApi.UniversalTransferHistoryForMasterAccountError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>fromEmail?</code> | <code>string</code> | Sub-account email |
| <code>toEmail?</code> | <code>string</code> | Sub-account email |
| <code>clientTranId?</code> | <code>string</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>limit?</code> | <code>number</code> | Default 500, Max 500 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SubAccountUniversalTransferResponse](src/models/sapi-v1-sub-account-universal-transfer-response.ts)[]</code>

**OnError**: <code>[SubAccountApi.UniversalTransferHistoryForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateIpRestrictionForSubAccountApiKeyForMasterAccount(request: SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV2SubAccountSubAccountApiIpRestrictionResponse, SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update IP Restriction for Sub-Account API key

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.updateIpRestrictionForSubAccountApiKeyForMasterAccount({
    email,
    subAccountApiKey,
    status,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2SubAccountSubAccountApiIpRestrictionResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | Sub-account email |
| <code>subAccountApiKey</code> | <code>string</code> | - |
| <code>status</code> | <code>string</code> | IP Restriction status. 1 = IP Unrestricted. 2 = Restrict access to trusted IPs only. 3 = Restrict access to users' trusted third party IPs only |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>thirdPartyName?</code> | <code>string</code> | third party IP list name |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2SubAccountSubAccountApiIpRestrictionResponse](src/models/sapi-v2-sub-account-sub-account-api-ip-restriction-response.ts)</code>

**OnError**: <code>[SubAccountApi.UpdateIpRestrictionForSubAccountApiKeyForMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>withdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccount(request: SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ManagedSubaccountWithdrawResponse, SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.subAccountApi.withdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccount(
    { fromEmail, asset, amount, timestamp, signature },
  );
  // TODO: Handle 'response' of type SapiV1ManagedSubaccountWithdrawResponse
} catch (err) {
  if (
    err instanceof SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fromEmail</code> | <code>string</code> | Sender email |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>transferDate?</code> | <code>number</code> | Withdrawals is automatically occur on the transfer date(UTC0). If a date is not selected, the withdrawal occurs right now |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ManagedSubaccountWithdrawResponse](src/models/sapi-v1-managed-subaccount-withdraw-response.ts)</code>

**OnError**: <code>[SubAccountApi.WithdrawlAssetsFromTheManagedSubAccountForInvestorMasterAccountError](src/resources/sub-account-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stream

> Source: [Stream](src/resources/stream.ts)

<details>
<summary><code>closeAListenKeyUserStream(request: Stream.CloseAListenKeyUserStreamRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Stream.CloseAListenKeyUserStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Close out a user data stream.

Weight: 2

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.stream.closeAListenKeyUserStream();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof Stream.CloseAListenKeyUserStreamError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>listenKey?</code> | <code>string</code> | User websocket listen key |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[Stream.CloseAListenKeyUserStreamError](src/resources/stream.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createAListenKeyUserStream(options?: RequestOptions): ApiPromise&lt;ApiV3UserDataStreamResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new user data stream.
The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.

Weight: 2

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.stream.createAListenKeyUserStream();
  // TODO: Handle 'response' of type ApiV3UserDataStreamResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV3UserDataStreamResponse](src/models/api-v3-user-data-stream-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pingKeepAliveAListenKeyUserStream(request: Stream.PingKeepAliveAListenKeyUserStreamRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Stream.PingKeepAliveAListenKeyUserStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.

Weight: 2

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.stream.pingKeepAliveAListenKeyUserStream();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof Stream.PingKeepAliveAListenKeyUserStreamError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>listenKey?</code> | <code>string</code> | User websocket listen key |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[Stream.PingKeepAliveAListenKeyUserStreamError](src/resources/stream.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MarginStream

> Source: [MarginStream](src/resources/margin-stream.ts)

<details>
<summary><code>closeAListenKeyUserStream2(request: MarginStream.CloseAListenKeyUserStream2Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, MarginStream.CloseAListenKeyUserStream2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Close out a user data stream.

Weight: 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.marginStream.closeAListenKeyUserStream2();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof MarginStream.CloseAListenKeyUserStream2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>listenKey?</code> | <code>string</code> | User websocket listen key |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[MarginStream.CloseAListenKeyUserStream2Error](src/resources/margin-stream.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createAListenKeyUserStream2(options?: RequestOptions): ApiPromise&lt;SapiV1UserDataStreamResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new user data stream.
The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.

Weight: 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.marginStream.createAListenKeyUserStream2();
  // TODO: Handle 'response' of type SapiV1UserDataStreamResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1UserDataStreamResponse](src/models/sapi-v1-user-data-stream-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pingKeepAliveAListenKeyUserStream2(request: MarginStream.PingKeepAliveAListenKeyUserStream2Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, MarginStream.PingKeepAliveAListenKeyUserStream2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.

Weight: 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.marginStream.pingKeepAliveAListenKeyUserStream2();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof MarginStream.PingKeepAliveAListenKeyUserStream2Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>listenKey?</code> | <code>string</code> | User websocket listen key |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[MarginStream.PingKeepAliveAListenKeyUserStream2Error](src/resources/margin-stream.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IsolatedMarginStream

> Source: [IsolatedMarginStream](src/resources/isolated-margin-stream.ts)

<details>
<summary><code>closeAListenKeyUserStream3(request: IsolatedMarginStream.CloseAListenKeyUserStream3Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, IsolatedMarginStream.CloseAListenKeyUserStream3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Close out a user data stream.

Weight: 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.isolatedMarginStream.closeAListenKeyUserStream3();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof IsolatedMarginStream.CloseAListenKeyUserStream3Error && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>listenKey?</code> | <code>string</code> | User websocket listen key |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[IsolatedMarginStream.CloseAListenKeyUserStream3Error](src/resources/isolated-margin-stream.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateAListenKeyUserStream(options?: RequestOptions): ApiPromise&lt;SapiV1UserDataStreamIsolatedResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new user data stream.
The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.

Weight: 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.isolatedMarginStream.generateAListenKeyUserStream();
  // TODO: Handle 'response' of type SapiV1UserDataStreamIsolatedResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1UserDataStreamIsolatedResponse](src/models/sapi-v1-user-data-stream-isolated-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pingKeepAliveAListenKeyUserStream(request: IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.

Weight: 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.isolatedMarginStream.pingKeepAliveAListenKeyUserStream();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (
    err instanceof IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>listenKey?</code> | <code>string</code> | User websocket listen key |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError](src/resources/isolated-margin-stream.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Savings

> Source: [Savings](src/resources/savings.ts)

<details>
<summary><code>changeFixedActivityPositionToDailyPositionUserData(request: Savings.ChangeFixedActivityPositionToDailyPositionUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingPositionChangedResponse, Savings.ChangeFixedActivityPositionToDailyPositionUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- PositionId is mandatory parameter for fixed position.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.savings.changeFixedActivityPositionToDailyPositionUserData({
    projectId,
    lot,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingPositionChangedResponse
} catch (err) {
  if (
    err instanceof Savings.ChangeFixedActivityPositionToDailyPositionUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>lot</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>positionId?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingPositionChangedResponse](src/models/sapi-v1-lending-position-changed-response.ts)</code>

**OnError**: <code>[Savings.ChangeFixedActivityPositionToDailyPositionUserDataError](src/resources/savings.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFixedActivityProjectListUserData(request: Savings.GetFixedActivityProjectListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingProjectListResponse[], Savings.GetFixedActivityProjectListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.savings.getFixedActivityProjectListUserData({ type, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LendingProjectListResponse[]
} catch (err) {
  if (err instanceof Savings.GetFixedActivityProjectListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[Type8](src/models/type8.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[Status](src/models/status.ts)</code> | Default `ALL` |
| <code>isSortAsc?</code> | <code>boolean</code> | default "true" |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | Default `START_TIME` |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingProjectListResponse](src/models/sapi-v1-lending-project-list-response.ts)[]</code>

**OnError**: <code>[Savings.GetFixedActivityProjectListUserDataError](src/resources/savings.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFixedActivityProjectPositionUserData(request: Savings.GetFixedActivityProjectPositionUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingProjectPositionListResponse[], Savings.GetFixedActivityProjectPositionUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.savings.getFixedActivityProjectPositionUserData({
    asset,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingProjectPositionListResponse[]
} catch (err) {
  if (err instanceof Savings.GetFixedActivityProjectPositionUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>projectId?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[Status](src/models/status.ts)</code> | Default `ALL` |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingProjectPositionListResponse](src/models/sapi-v1-lending-project-position-list-response.ts)[]</code>

**OnError**: <code>[Savings.GetFixedActivityProjectPositionUserDataError](src/resources/savings.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purchaseFixedActivityProjectUserData(request: Savings.PurchaseFixedActivityProjectUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingCustomizedFixedPurchaseResponse, Savings.PurchaseFixedActivityProjectUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.savings.purchaseFixedActivityProjectUserData({
    projectId,
    lot,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingCustomizedFixedPurchaseResponse
} catch (err) {
  if (err instanceof Savings.PurchaseFixedActivityProjectUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>lot</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingCustomizedFixedPurchaseResponse](src/models/sapi-v1-lending-customized-fixed-purchase-response.ts)</code>

**OnError**: <code>[Savings.PurchaseFixedActivityProjectUserDataError](src/resources/savings.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Mining

> Source: [Mining](src/resources/mining.ts)

<details>
<summary><code>accountListUserData(request: Mining.AccountListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningStatisticsUserListResponse, Mining.AccountListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.accountListUserData({ algo, userName, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MiningStatisticsUserListResponse
} catch (err) {
  if (err instanceof Mining.AccountListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algo</code> | <code>string</code> | Algorithm(sha256) |
| <code>userName</code> | <code>string</code> | Mining Account |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningStatisticsUserListResponse](src/models/sapi-v1-mining-statistics-user-list-response.ts)</code>

**OnError**: <code>[Mining.AccountListUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>acquiringAlgorithmMarketData(options?: RequestOptions): ApiPromise&lt;SapiV1MiningPubAlgoListResponse, Mining.AcquiringAlgorithmMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.acquiringAlgorithmMarketData();
  // TODO: Handle 'response' of type SapiV1MiningPubAlgoListResponse
} catch (err) {
  if (err instanceof Mining.AcquiringAlgorithmMarketDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningPubAlgoListResponse](src/models/sapi-v1-mining-pub-algo-list-response.ts)</code>

**OnError**: <code>[Mining.AcquiringAlgorithmMarketDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>acquiringCoinNameMarketData(options?: RequestOptions): ApiPromise&lt;SapiV1MiningPubCoinListResponse, Mining.AcquiringCoinNameMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.acquiringCoinNameMarketData();
  // TODO: Handle 'response' of type SapiV1MiningPubCoinListResponse
} catch (err) {
  if (err instanceof Mining.AcquiringCoinNameMarketDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningPubCoinListResponse](src/models/sapi-v1-mining-pub-coin-list-response.ts)</code>

**OnError**: <code>[Mining.AcquiringCoinNameMarketDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelHashrateResaleConfigurationUserData(request: Mining.CancelHashrateResaleConfigurationUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningHashTransferConfigCancelResponse, Mining.CancelHashrateResaleConfigurationUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.cancelHashrateResaleConfigurationUserData({
    configId,
    userName,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MiningHashTransferConfigCancelResponse
} catch (err) {
  if (err instanceof Mining.CancelHashrateResaleConfigurationUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>configId</code> | <code>string</code> | Mining ID |
| <code>userName</code> | <code>string</code> | Mining Account |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningHashTransferConfigCancelResponse](src/models/sapi-v1-mining-hash-transfer-config-cancel-response.ts)</code>

**OnError**: <code>[Mining.CancelHashrateResaleConfigurationUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>earningsListUserData(request: Mining.EarningsListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningPaymentListResponse, Mining.EarningsListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.earningsListUserData({ algo, userName, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MiningPaymentListResponse
} catch (err) {
  if (err instanceof Mining.EarningsListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algo</code> | <code>string</code> | Algorithm(sha256) |
| <code>userName</code> | <code>string</code> | Mining Account |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>coin?</code> | <code>string</code> | Coin name |
| <code>startDate?</code> | <code>string</code> | Search date, millisecond timestamp, while empty query all |
| <code>endDate?</code> | <code>string</code> | Search date, millisecond timestamp, while empty query all |
| <code>pageIndex?</code> | <code>number</code> | Page number, default is first page, start form 1 |
| <code>pageSize?</code> | <code>string</code> | Number of pages, minimum 10, maximum 200 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningPaymentListResponse](src/models/sapi-v1-mining-payment-list-response.ts)</code>

**OnError**: <code>[Mining.EarningsListUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>extraBonusListUserData(request: Mining.ExtraBonusListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningPaymentOtherResponse, Mining.ExtraBonusListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.extraBonusListUserData({ algo, userName, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MiningPaymentOtherResponse
} catch (err) {
  if (err instanceof Mining.ExtraBonusListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algo</code> | <code>string</code> | Algorithm(sha256) |
| <code>userName</code> | <code>string</code> | Mining Account |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>coin?</code> | <code>string</code> | Coin name |
| <code>startDate?</code> | <code>string</code> | Search date, millisecond timestamp, while empty query all |
| <code>endDate?</code> | <code>string</code> | Search date, millisecond timestamp, while empty query all |
| <code>pageIndex?</code> | <code>number</code> | Page number, default is first page, start form 1 |
| <code>pageSize?</code> | <code>string</code> | Number of pages, minimum 10, maximum 200 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningPaymentOtherResponse](src/models/sapi-v1-mining-payment-other-response.ts)</code>

**OnError**: <code>[Mining.ExtraBonusListUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hashrateResaleDetailsUserData(request: Mining.HashrateResaleDetailsUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningHashTransferProfitDetailsResponse, Mining.HashrateResaleDetailsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.hashrateResaleDetailsUserData({
    configId,
    userName,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MiningHashTransferProfitDetailsResponse
} catch (err) {
  if (err instanceof Mining.HashrateResaleDetailsUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>configId</code> | <code>string</code> | Mining ID |
| <code>userName</code> | <code>string</code> | Mining Account |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>pageIndex?</code> | <code>number</code> | Page number, default is first page, start form 1 |
| <code>pageSize?</code> | <code>string</code> | Number of pages, minimum 10, maximum 200 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningHashTransferProfitDetailsResponse](src/models/sapi-v1-mining-hash-transfer-profit-details-response.ts)</code>

**OnError**: <code>[Mining.HashrateResaleDetailsUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hashrateResaleListUserData(request: Mining.HashrateResaleListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningHashTransferConfigDetailsListResponse, Mining.HashrateResaleListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.hashrateResaleListUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MiningHashTransferConfigDetailsListResponse
} catch (err) {
  if (err instanceof Mining.HashrateResaleListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>pageIndex?</code> | <code>number</code> | Page number, default is first page, start form 1 |
| <code>pageSize?</code> | <code>string</code> | Number of pages, minimum 10, maximum 200 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningHashTransferConfigDetailsListResponse](src/models/sapi-v1-mining-hash-transfer-config-details-list-response.ts)</code>

**OnError**: <code>[Mining.HashrateResaleListUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hashrateResaleRequestUserData(request: Mining.HashrateResaleRequestUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningHashTransferConfigResponse, Mining.HashrateResaleRequestUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.hashrateResaleRequestUserData({
    userName,
    algo,
    toPoolUser,
    hashRate,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MiningHashTransferConfigResponse
} catch (err) {
  if (err instanceof Mining.HashrateResaleRequestUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userName</code> | <code>string</code> | Mining Account |
| <code>algo</code> | <code>string</code> | Algorithm(sha256) |
| <code>toPoolUser</code> | <code>string</code> | Mining Account |
| <code>hashRate</code> | <code>string</code> | Resale hashrate h/s must be transferred (BTC is greater than 500000000000 ETH is greater than 500000) |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startDate?</code> | <code>string</code> | Search date, millisecond timestamp, while empty query all |
| <code>endDate?</code> | <code>string</code> | Search date, millisecond timestamp, while empty query all |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningHashTransferConfigResponse](src/models/sapi-v1-mining-hash-transfer-config-response.ts)</code>

**OnError**: <code>[Mining.HashrateResaleRequestUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miningAccountEarningUserData(request: Mining.MiningAccountEarningUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningPaymentUidResponse, Mining.MiningAccountEarningUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.miningAccountEarningUserData({ algo, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MiningPaymentUidResponse
} catch (err) {
  if (err instanceof Mining.MiningAccountEarningUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algo</code> | <code>string</code> | Algorithm(sha256) |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startDate?</code> | <code>string</code> | Search date, millisecond timestamp, while empty query all |
| <code>endDate?</code> | <code>string</code> | Search date, millisecond timestamp, while empty query all |
| <code>pageIndex?</code> | <code>number</code> | Page number, default is first page, start form 1 |
| <code>pageSize?</code> | <code>string</code> | Number of pages, minimum 10, maximum 200 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningPaymentUidResponse](src/models/sapi-v1-mining-payment-uid-response.ts)</code>

**OnError**: <code>[Mining.MiningAccountEarningUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>requestForDetailMinerListUserData(request: Mining.RequestForDetailMinerListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningWorkerDetailResponse, Mining.RequestForDetailMinerListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.requestForDetailMinerListUserData({
    algo,
    userName,
    workerName,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1MiningWorkerDetailResponse
} catch (err) {
  if (err instanceof Mining.RequestForDetailMinerListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algo</code> | <code>string</code> | Algorithm(sha256) |
| <code>userName</code> | <code>string</code> | Mining Account |
| <code>workerName</code> | <code>string</code> | Miner’s name |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningWorkerDetailResponse](src/models/sapi-v1-mining-worker-detail-response.ts)</code>

**OnError**: <code>[Mining.RequestForDetailMinerListUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>requestForMinerListUserData(request: Mining.RequestForMinerListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningWorkerListResponse, Mining.RequestForMinerListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.requestForMinerListUserData({ algo, userName, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MiningWorkerListResponse
} catch (err) {
  if (err instanceof Mining.RequestForMinerListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algo</code> | <code>string</code> | Algorithm(sha256) |
| <code>userName</code> | <code>string</code> | Mining Account |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>pageIndex?</code> | <code>number</code> | Page number, default is first page, start form 1 |
| <code>sort?</code> | <code>number</code> | sort sequence(default=0)0 positive sequence, 1 negative sequence |
| <code>sortColumn?</code> | <code>number</code> | Sort by( default 1): 1: miner name, 2: real-time computing power, 3: daily average computing power, 4: real-time rejection rate, 5: last submission time |
| <code>workerStatus?</code> | <code>number</code> | miners status(default=0)0 all, 1 valid, 2 invalid, 3 failure |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningWorkerListResponse](src/models/sapi-v1-mining-worker-list-response.ts)</code>

**OnError**: <code>[Mining.RequestForMinerListUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>statisticListUserData(request: Mining.StatisticListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1MiningStatisticsUserStatusResponse, Mining.StatisticListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 5

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mining.statisticListUserData({ algo, userName, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1MiningStatisticsUserStatusResponse
} catch (err) {
  if (err instanceof Mining.StatisticListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algo</code> | <code>string</code> | Algorithm(sha256) |
| <code>userName</code> | <code>string</code> | Mining Account |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1MiningStatisticsUserStatusResponse](src/models/sapi-v1-mining-statistics-user-status-response.ts)</code>

**OnError**: <code>[Mining.StatisticListUserDataError](src/resources/mining.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Futures

> Source: [Futures](src/resources/futures.ts)

<details>
<summary><code>getFutureAccountTransactionHistoryListUserData(request: Futures.GetFutureAccountTransactionHistoryListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1FuturesTransferResponse1, Futures.GetFutureAccountTransactionHistoryListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 10

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.futures.getFutureAccountTransactionHistoryListUserData({
    asset,
    startTime,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1FuturesTransferResponse1
} catch (err) {
  if (
    err instanceof Futures.GetFutureAccountTransactionHistoryListUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>startTime</code> | <code>number</code> | UTC timestamp in ms |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1FuturesTransferResponse1](src/models/sapi-v1-futures-transfer-response1.ts)</code>

**OnError**: <code>[Futures.GetFutureAccountTransactionHistoryListUserDataError](src/resources/futures.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFutureTickLevelOrderbookHistoricalDataDownloadLinkUserData(request: Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1FuturesHistDataLinkResponse, Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.futures.getFutureTickLevelOrderbookHistoricalDataDownloadLinkUserData({
    symbol,
    dataType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1FuturesHistDataLinkResponse
} catch (err) {
  if (
    err instanceof Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | - |
| <code>dataType</code> | <code>[DataType](src/models/data-type.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1FuturesHistDataLinkResponse](src/models/sapi-v1-futures-hist-data-link-response.ts)</code>

**OnError**: <code>[Futures.GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError](src/resources/futures.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>newFutureAccountTransferUserData(request: Futures.NewFutureAccountTransferUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1FuturesTransferResponse, Futures.NewFutureAccountTransferUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Execute transfer between spot account and futures account.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.futures.newFutureAccountTransferUserData({
    asset,
    amount,
    type,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1FuturesTransferResponse
} catch (err) {
  if (err instanceof Futures.NewFutureAccountTransferUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>type</code> | <code>number</code> | 1: transfer from spot account to USDT-Ⓜ futures account. 2: transfer from USDT-Ⓜ futures account to spot account. 3: transfer from spot account to COIN-Ⓜ futures account. 4: transfer from COIN-Ⓜ futures account to spot account. |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1FuturesTransferResponse](src/models/sapi-v1-futures-transfer-response.ts)</code>

**OnError**: <code>[Futures.NewFutureAccountTransferUserDataError](src/resources/futures.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FuturesAlgo

> Source: [FuturesAlgo](src/resources/futures-algo.ts)

<details>
<summary><code>cancelAlgoOrderTrade(request: FuturesAlgo.CancelAlgoOrderTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoFuturesOrderResponse, FuturesAlgo.CancelAlgoOrderTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an active order.
- You need to enable Futures Trading Permission for the api key which requests this endpoint.
- Base URL: https://api.binance.com

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.futuresAlgo.cancelAlgoOrderTrade({ algoId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AlgoFuturesOrderResponse
} catch (err) {
  if (err instanceof FuturesAlgo.CancelAlgoOrderTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algoId</code> | <code>number</code> | Eg. 14511 |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoFuturesOrderResponse](src/models/sapi-v1-algo-futures-order-response.ts)</code>

**OnError**: <code>[FuturesAlgo.CancelAlgoOrderTradeError](src/resources/futures-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryCurrentAlgoOpenOrdersUserData(request: FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoFuturesOpenOrdersResponse, FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- You need to enable Futures Trading Permission for the api key which requests this endpoint.
- Base URL: https://api.binance.com

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.futuresAlgo.queryCurrentAlgoOpenOrdersUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AlgoFuturesOpenOrdersResponse
} catch (err) {
  if (err instanceof FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoFuturesOpenOrdersResponse](src/models/sapi-v1-algo-futures-open-orders-response.ts)</code>

**OnError**: <code>[FuturesAlgo.QueryCurrentAlgoOpenOrdersUserDataError](src/resources/futures-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryHistoricalAlgoOrdersUserData(request: FuturesAlgo.QueryHistoricalAlgoOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoFuturesHistoricalOrdersResponse, FuturesAlgo.QueryHistoricalAlgoOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- You need to enable Futures Trading Permission for the api key which requests this endpoint.
- Base URL: https://api.binance.com

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.futuresAlgo.queryHistoricalAlgoOrdersUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AlgoFuturesHistoricalOrdersResponse
} catch (err) {
  if (err instanceof FuturesAlgo.QueryHistoricalAlgoOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>symbol?</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side?</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>pageSize?</code> | <code>string</code> | MIN 1, MAX 100; Default 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoFuturesHistoricalOrdersResponse](src/models/sapi-v1-algo-futures-historical-orders-response.ts)</code>

**OnError**: <code>[FuturesAlgo.QueryHistoricalAlgoOrdersUserDataError](src/resources/futures-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySubOrdersUserData(request: FuturesAlgo.QuerySubOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoFuturesSubOrdersResponse, FuturesAlgo.QuerySubOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- You need to enable Futures Trading Permission for the api key which requests this endpoint.
- Base URL: https://api.binance.com

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.futuresAlgo.querySubOrdersUserData({ algoId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AlgoFuturesSubOrdersResponse
} catch (err) {
  if (err instanceof FuturesAlgo.QuerySubOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algoId</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>pageSize?</code> | <code>string</code> | MIN 1, MAX 100; Default 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoFuturesSubOrdersResponse](src/models/sapi-v1-algo-futures-sub-orders-response.ts)</code>

**OnError**: <code>[FuturesAlgo.QuerySubOrdersUserDataError](src/resources/futures-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>timeWeightedAveragePriceTwapNewOrderTrade(request: FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoFuturesNewOrderTwapResponse, FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send in a Twap new order. Only support on USDⓈ-M Contracts.

You need to enable Futures Trading Permission for the api key which requests this endpoint.
Base URL: https://api.binance.com

- Total Algo open orders max allowed: 10 orders.
- Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi.
- Receiving "success": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive "success": true, but the order status will be expired after we check it.
- quantity * 60 / duration should be larger than minQty
- duration cannot be less than 5 mins or more than 24 hours.
- For delivery contracts, TWAP end time should be one hour earlier than the delivery time of the symbol.

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.futuresAlgo.timeWeightedAveragePriceTwapNewOrderTrade({
    symbol,
    side,
    quantity,
    duration,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1AlgoFuturesNewOrderTwapResponse
} catch (err) {
  if (
    err instanceof FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>quantity</code> | <code>number</code> | Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT |
| <code>duration</code> | <code>number</code> | Duration for TWAP orders in seconds. [300, 86400];Less than 5min => defaults to 5 min; Greater than 24h => defaults to 24h |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>positionSide?</code> | <code>[PositionSide](src/models/position-side.ts)</code> | Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode. |
| <code>clientAlgoId?</code> | <code>string</code> | A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value |
| <code>reduceOnly?</code> | <code>boolean</code> | 'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position |
| <code>limitPrice?</code> | <code>number</code> | Limit price of the order; If it is not sent, will place order by market price by default |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoFuturesNewOrderTwapResponse](src/models/sapi-v1-algo-futures-new-order-twap-response.ts)</code>

**OnError**: <code>[FuturesAlgo.TimeWeightedAveragePriceTwapNewOrderTradeError](src/resources/futures-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>volumeParticipationVpNewOrderTrade(request: FuturesAlgo.VolumeParticipationVpNewOrderTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoFuturesNewOrderVpResponse, FuturesAlgo.VolumeParticipationVpNewOrderTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send in a VP new order. Only support on USDⓈ-M Contracts.

- You need to enable `Futures Trading Permission` for the api key which requests this endpoint.
- Base URL: https://api.binance.com

- Total Algo open orders max allowed: 10 orders.
- Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi.
- Receiving "success": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive "success": true, but the order status will be expired after we check it.

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.futuresAlgo.volumeParticipationVpNewOrderTrade({
    symbol,
    side,
    quantity,
    urgency,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1AlgoFuturesNewOrderVpResponse
} catch (err) {
  if (err instanceof FuturesAlgo.VolumeParticipationVpNewOrderTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>quantity</code> | <code>number</code> | Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT |
| <code>urgency</code> | <code>[Urgency](src/models/urgency.ts)</code> | Represent the relative speed of the current execution; ENUM: LOW, MEDIUM, HIGH |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>positionSide?</code> | <code>[PositionSide](src/models/position-side.ts)</code> | Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode. |
| <code>clientAlgoId?</code> | <code>string</code> | A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value |
| <code>reduceOnly?</code> | <code>boolean</code> | 'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position |
| <code>limitPrice?</code> | <code>number</code> | Limit price of the order; If it is not sent, will place order by market price by default |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoFuturesNewOrderVpResponse](src/models/sapi-v1-algo-futures-new-order-vp-response.ts)</code>

**OnError**: <code>[FuturesAlgo.VolumeParticipationVpNewOrderTradeError](src/resources/futures-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SpotAlgo

> Source: [SpotAlgo](src/resources/spot-algo.ts)

<details>
<summary><code>cancelAlgoOrder(request: SpotAlgo.CancelAlgoOrderRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoSpotOrderResponse, SpotAlgo.CancelAlgoOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an open TWAP order

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.spotAlgo.cancelAlgoOrder({ algoId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AlgoSpotOrderResponse
} catch (err) {
  if (err instanceof SpotAlgo.CancelAlgoOrderError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algoId</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoSpotOrderResponse](src/models/sapi-v1-algo-spot-order-response.ts)</code>

**OnError**: <code>[SpotAlgo.CancelAlgoOrderError](src/resources/spot-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryCurrentAlgoOpenOrders(request: SpotAlgo.QueryCurrentAlgoOpenOrdersRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoSpotOpenOrdersResponse, SpotAlgo.QueryCurrentAlgoOpenOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all open SPOT TWAP orders

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.spotAlgo.queryCurrentAlgoOpenOrders({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AlgoSpotOpenOrdersResponse
} catch (err) {
  if (err instanceof SpotAlgo.QueryCurrentAlgoOpenOrdersError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoSpotOpenOrdersResponse](src/models/sapi-v1-algo-spot-open-orders-response.ts)</code>

**OnError**: <code>[SpotAlgo.QueryCurrentAlgoOpenOrdersError](src/resources/spot-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryHistoricalAlgoOrders(request: SpotAlgo.QueryHistoricalAlgoOrdersRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoSpotHistoricalOrdersResponse, SpotAlgo.QueryHistoricalAlgoOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all historical SPOT TWAP orders

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.spotAlgo.queryHistoricalAlgoOrders({ symbol, side, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AlgoSpotHistoricalOrdersResponse
} catch (err) {
  if (err instanceof SpotAlgo.QueryHistoricalAlgoOrdersError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>pageSize?</code> | <code>string</code> | MIN 1, MAX 100; Default 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoSpotHistoricalOrdersResponse](src/models/sapi-v1-algo-spot-historical-orders-response.ts)</code>

**OnError**: <code>[SpotAlgo.QueryHistoricalAlgoOrdersError](src/resources/spot-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySubOrders(request: SpotAlgo.QuerySubOrdersRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoSpotSubOrdersResponse, SpotAlgo.QuerySubOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get respective sub orders for a specified algoId

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.spotAlgo.querySubOrders({ algoId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1AlgoSpotSubOrdersResponse
} catch (err) {
  if (err instanceof SpotAlgo.QuerySubOrdersError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>algoId</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>pageSize?</code> | <code>string</code> | MIN 1, MAX 100; Default 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoSpotSubOrdersResponse](src/models/sapi-v1-algo-spot-sub-orders-response.ts)</code>

**OnError**: <code>[SpotAlgo.QuerySubOrdersError](src/resources/spot-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>timeWeightedAveragePriceTwapNewOrder(request: SpotAlgo.TimeWeightedAveragePriceTwapNewOrderRequest, options?: RequestOptions): ApiPromise&lt;SapiV1AlgoSpotNewOrderTwapResponse, SpotAlgo.TimeWeightedAveragePriceTwapNewOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Place a new spot TWAP order with Algo service.

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.spotAlgo.timeWeightedAveragePriceTwapNewOrder({
    symbol,
    side,
    quantity,
    duration,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1AlgoSpotNewOrderTwapResponse
} catch (err) {
  if (err instanceof SpotAlgo.TimeWeightedAveragePriceTwapNewOrderError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Trading symbol, e.g. BNBUSDT |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>quantity</code> | <code>number</code> | - |
| <code>duration</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>clientAlgoId?</code> | <code>string</code> | - |
| <code>limitPrice?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1AlgoSpotNewOrderTwapResponse](src/models/sapi-v1-algo-spot-new-order-twap-response.ts)</code>

**OnError**: <code>[SpotAlgo.TimeWeightedAveragePriceTwapNewOrderError](src/resources/spot-algo.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PortfolioMargin

> Source: [PortfolioMargin](src/resources/portfolio-margin.ts)

<details>
<summary><code>bnbTransferUserData(request: PortfolioMargin.BnbTransferUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioBnbTransferResponse, PortfolioMargin.BnbTransferUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

BNB transfer can be between Margin Account and USDM Account

Weight(IP): 1500

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.bnbTransferUserData({
    transferSide,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1PortfolioBnbTransferResponse
} catch (err) {
  if (err instanceof PortfolioMargin.BnbTransferUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferSide</code> | <code>[TransferSide](src/models/transfer-side.ts)</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioBnbTransferResponse](src/models/sapi-v1-portfolio-bnb-transfer-response.ts)</code>

**OnError**: <code>[PortfolioMargin.BnbTransferUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changeAutoRepayFuturesStatusUserData(request: PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioRepayFuturesSwitchResponse, PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change Auto-repay-futures Status

Weight(IP): 1500

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.changeAutoRepayFuturesStatusUserData({
    autoRepay,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1PortfolioRepayFuturesSwitchResponse
} catch (err) {
  if (
    err instanceof PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>autoRepay</code> | <code>boolean</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioRepayFuturesSwitchResponse](src/models/sapi-v1-portfolio-repay-futures-switch-response.ts)</code>

**OnError**: <code>[PortfolioMargin.ChangeAutoRepayFuturesStatusUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fundAutoCollectionUserData(request: PortfolioMargin.FundAutoCollectionUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioAutoCollectionResponse, PortfolioMargin.FundAutoCollectionUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transfers all assets from Futures Account to Margin account

Weight(IP): 1500

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.fundAutoCollectionUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1PortfolioAutoCollectionResponse
} catch (err) {
  if (err instanceof PortfolioMargin.FundAutoCollectionUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioAutoCollectionResponse](src/models/sapi-v1-portfolio-auto-collection-response.ts)</code>

**OnError**: <code>[PortfolioMargin.FundAutoCollectionUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fundCollectionByAssetUserData(request: PortfolioMargin.FundCollectionByAssetUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioAssetCollectionResponse, PortfolioMargin.FundCollectionByAssetUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transfers specific asset from Futures Account to Margin account

Weight(IP): 60

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.fundCollectionByAssetUserData({
    asset,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1PortfolioAssetCollectionResponse
} catch (err) {
  if (err instanceof PortfolioMargin.FundCollectionByAssetUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioAssetCollectionResponse](src/models/sapi-v1-portfolio-asset-collection-response.ts)</code>

**OnError**: <code>[PortfolioMargin.FundCollectionByAssetUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAutoRepayFuturesStatusUserData(request: PortfolioMargin.GetAutoRepayFuturesStatusUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioRepayFuturesSwitchResponse1, PortfolioMargin.GetAutoRepayFuturesStatusUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Auto-repay-futures Status

Weight(IP): 30

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.getAutoRepayFuturesStatusUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1PortfolioRepayFuturesSwitchResponse1
} catch (err) {
  if (err instanceof PortfolioMargin.GetAutoRepayFuturesStatusUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioRepayFuturesSwitchResponse1](src/models/sapi-v1-portfolio-repay-futures-switch-response1.ts)</code>

**OnError**: <code>[PortfolioMargin.GetAutoRepayFuturesStatusUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioMarginAssetLeverageUserData(options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioMarginAssetLeverageResponse[], PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 50

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.getPortfolioMarginAssetLeverageUserData();
  // TODO: Handle 'response' of type SapiV1PortfolioMarginAssetLeverageResponse[]
} catch (err) {
  if (
    err instanceof PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioMarginAssetLeverageResponse](src/models/sapi-v1-portfolio-margin-asset-leverage-response.ts)[]</code>

**OnError**: <code>[PortfolioMargin.GetPortfolioMarginAssetLeverageUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>portfolioMarginAccountUserData(request: PortfolioMargin.PortfolioMarginAccountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioAccountResponse, PortfolioMargin.PortfolioMarginAccountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the account info

'Weight(IP): 1'

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.portfolioMarginAccountUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1PortfolioAccountResponse
} catch (err) {
  if (err instanceof PortfolioMargin.PortfolioMarginAccountUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioAccountResponse](src/models/sapi-v1-portfolio-account-response.ts)</code>

**OnError**: <code>[PortfolioMargin.PortfolioMarginAccountUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>portfolioMarginBankruptcyLoanAmountUserData(request: PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioPmLoanResponse, PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Portfolio Margin Bankruptcy Loan Amount.

Weight(UID): 500

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.portfolioMarginBankruptcyLoanAmountUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1PortfolioPmLoanResponse
} catch (err) {
  if (
    err instanceof PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioPmLoanResponse](src/models/sapi-v1-portfolio-pm-loan-response.ts)</code>

**OnError**: <code>[PortfolioMargin.PortfolioMarginBankruptcyLoanAmountUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>portfolioMarginBankruptcyLoanRepayUserData(request: PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioRepayResponse, PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repay Portfolio Margin Bankruptcy Loan.

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.portfolioMarginBankruptcyLoanRepayUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1PortfolioRepayResponse
} catch (err) {
  if (
    err instanceof PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>from?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioRepayResponse](src/models/sapi-v1-portfolio-repay-response.ts)</code>

**OnError**: <code>[PortfolioMargin.PortfolioMarginBankruptcyLoanRepayUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>portfolioMarginCollateralRateMarketData(options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioCollateralRateResponse[], PortfolioMargin.PortfolioMarginCollateralRateMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Portfolio Margin Collateral Rate.

Weight(IP): 50

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.portfolioMarginCollateralRateMarketData();
  // TODO: Handle 'response' of type SapiV1PortfolioCollateralRateResponse[]
} catch (err) {
  if (
    err instanceof PortfolioMargin.PortfolioMarginCollateralRateMarketDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioCollateralRateResponse](src/models/sapi-v1-portfolio-collateral-rate-response.ts)[]</code>

**OnError**: <code>[PortfolioMargin.PortfolioMarginCollateralRateMarketDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>portfolioMarginProTieredCollateralRateUserData(request: PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV2PortfolioCollateralRateResponse[], PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Portfolio Margin PRO Tiered Collateral Rate

Weight(IP): 50

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.portfolioMarginProTieredCollateralRateUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2PortfolioCollateralRateResponse[]
} catch (err) {
  if (
    err instanceof PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2PortfolioCollateralRateResponse](src/models/sapi-v2-portfolio-collateral-rate-response.ts)[]</code>

**OnError**: <code>[PortfolioMargin.PortfolioMarginProTieredCollateralRateUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryClassicPortfolioMarginNegativeBalanceInterestHistoryUserData(request: PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioInterestHistoryResponse[], PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query interest history of negative balance for portfolio margin.

Weight(IP): 50

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.portfolioMargin.queryClassicPortfolioMarginNegativeBalanceInterestHistoryUserData({
      asset,
      timestamp,
      signature,
    });
  // TODO: Handle 'response' of type SapiV1PortfolioInterestHistoryResponse[]
} catch (err) {
  if (
    err instanceof PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioInterestHistoryResponse](src/models/sapi-v1-portfolio-interest-history-response.ts)[]</code>

**OnError**: <code>[PortfolioMargin.QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryPortfolioMarginAssetIndexPriceMarketData(request: PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioAssetIndexPriceResponse[], PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Portfolio Margin Asset Index Price

Weight(IP):
- 1 if send asset
- 50 if not send asset

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.queryPortfolioMarginAssetIndexPriceMarketData();
  // TODO: Handle 'response' of type SapiV1PortfolioAssetIndexPriceResponse[]
} catch (err) {
  if (
    err instanceof PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioAssetIndexPriceResponse](src/models/sapi-v1-portfolio-asset-index-price-response.ts)[]</code>

**OnError**: <code>[PortfolioMargin.QueryPortfolioMarginAssetIndexPriceMarketDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>repayFuturesNegativeBalanceUserData(request: PortfolioMargin.RepayFuturesNegativeBalanceUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PortfolioRepayFuturesNegativeBalanceResponse, PortfolioMargin.RepayFuturesNegativeBalanceUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repay futures Negative Balance

Weight(IP): 1500

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMargin.repayFuturesNegativeBalanceUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1PortfolioRepayFuturesNegativeBalanceResponse
} catch (err) {
  if (
    err instanceof PortfolioMargin.RepayFuturesNegativeBalanceUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PortfolioRepayFuturesNegativeBalanceResponse](src/models/sapi-v1-portfolio-repay-futures-negative-balance-response.ts)</code>

**OnError**: <code>[PortfolioMargin.RepayFuturesNegativeBalanceUserDataError](src/resources/portfolio-margin.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Blvt

> Source: [Blvt](src/resources/blvt.ts)

<details>
<summary><code>blvtInfoMarketData(request: Blvt.BlvtInfoMarketDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1BlvtTokenInfoResponse[], Blvt.BlvtInfoMarketDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.blvt.blvtInfoMarketData();
  // TODO: Handle 'response' of type SapiV1BlvtTokenInfoResponse[]
} catch (err) {
  if (err instanceof Blvt.BlvtInfoMarketDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tokenName?</code> | <code>string</code> | BTCDOWN, BTCUP |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1BlvtTokenInfoResponse](src/models/sapi-v1-blvt-token-info-response.ts)[]</code>

**OnError**: <code>[Blvt.BlvtInfoMarketDataError](src/resources/blvt.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>blvtUserLimitInfoUserData(request: Blvt.BlvtUserLimitInfoUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1BlvtUserLimitResponse[], Blvt.BlvtUserLimitInfoUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.blvt.blvtUserLimitInfoUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1BlvtUserLimitResponse[]
} catch (err) {
  if (err instanceof Blvt.BlvtUserLimitInfoUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>tokenName?</code> | <code>string</code> | BTCDOWN, BTCUP |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1BlvtUserLimitResponse](src/models/sapi-v1-blvt-user-limit-response.ts)[]</code>

**OnError**: <code>[Blvt.BlvtUserLimitInfoUserDataError](src/resources/blvt.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySubscriptionRecordUserData(request: Blvt.QuerySubscriptionRecordUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1BlvtSubscribeRecordResponse, Blvt.QuerySubscriptionRecordUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Only the data of the latest 90 days is available

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.blvt.querySubscriptionRecordUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1BlvtSubscribeRecordResponse
} catch (err) {
  if (err instanceof Blvt.QuerySubscriptionRecordUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>tokenName?</code> | <code>string</code> | BTCDOWN, BTCUP |
| <code>id?</code> | <code>number</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1BlvtSubscribeRecordResponse](src/models/sapi-v1-blvt-subscribe-record-response.ts)</code>

**OnError**: <code>[Blvt.QuerySubscriptionRecordUserDataError](src/resources/blvt.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>redeemBlvtUserData(request: Blvt.RedeemBlvtUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1BlvtRedeemResponse, Blvt.RedeemBlvtUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.blvt.redeemBlvtUserData({ tokenName, amount, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1BlvtRedeemResponse
} catch (err) {
  if (err instanceof Blvt.RedeemBlvtUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tokenName</code> | <code>string</code> | BTCDOWN, BTCUP |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1BlvtRedeemResponse](src/models/sapi-v1-blvt-redeem-response.ts)</code>

**OnError**: <code>[Blvt.RedeemBlvtUserDataError](src/resources/blvt.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>redemptionRecordUserData(request: Blvt.RedemptionRecordUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1BlvtRedeemRecordResponse[], Blvt.RedemptionRecordUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Only the data of the latest 90 days is available

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.blvt.redemptionRecordUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1BlvtRedeemRecordResponse[]
} catch (err) {
  if (err instanceof Blvt.RedemptionRecordUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>tokenName?</code> | <code>string</code> | BTCDOWN, BTCUP |
| <code>id?</code> | <code>number</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | default 1000, max 1000 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1BlvtRedeemRecordResponse](src/models/sapi-v1-blvt-redeem-record-response.ts)[]</code>

**OnError**: <code>[Blvt.RedemptionRecordUserDataError](src/resources/blvt.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribeBlvtUserData(request: Blvt.SubscribeBlvtUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1BlvtSubscribeResponse, Blvt.SubscribeBlvtUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.blvt.subscribeBlvtUserData({ tokenName, cost, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1BlvtSubscribeResponse
} catch (err) {
  if (err instanceof Blvt.SubscribeBlvtUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tokenName</code> | <code>string</code> | BTCDOWN, BTCUP |
| <code>cost</code> | <code>number</code> | Spot balance |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1BlvtSubscribeResponse](src/models/sapi-v1-blvt-subscribe-response.ts)</code>

**OnError**: <code>[Blvt.SubscribeBlvtUserDataError](src/resources/blvt.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Fiat

> Source: [Fiat](src/resources/fiat.ts)

<details>
<summary><code>fiatDepositWithdrawHistoryUserData(request: Fiat.FiatDepositWithdrawHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1FiatOrdersResponse, Fiat.FiatDepositWithdrawHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If beginTime and endTime are not sent, the recent 30-day data will be returned.

Weight(UID): 90000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.fiat.fiatDepositWithdrawHistoryUserData({
    transactionType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1FiatOrdersResponse
} catch (err) {
  if (err instanceof Fiat.FiatDepositWithdrawHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionType</code> | <code>number</code> | * `0` - deposit<br>* `1` - withdraw |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>beginTime?</code> | <code>number</code> | - |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>rows?</code> | <code>number</code> | Default 100, max 500 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1FiatOrdersResponse](src/models/sapi-v1-fiat-orders-response.ts)</code>

**OnError**: <code>[Fiat.FiatDepositWithdrawHistoryUserDataError](src/resources/fiat.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fiatPaymentsHistoryUserData(request: Fiat.FiatPaymentsHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1FiatPaymentsResponse, Fiat.FiatPaymentsHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If beginTime and endTime are not sent, the recent 30-day data will be returned.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.fiat.fiatPaymentsHistoryUserData({ transactionType, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1FiatPaymentsResponse
} catch (err) {
  if (err instanceof Fiat.FiatPaymentsHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionType</code> | <code>number</code> | * `0` - deposit<br>* `1` - withdraw |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>beginTime?</code> | <code>number</code> | - |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>rows?</code> | <code>number</code> | Default 100, max 500 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1FiatPaymentsResponse](src/models/sapi-v1-fiat-payments-response.ts)</code>

**OnError**: <code>[Fiat.FiatPaymentsHistoryUserDataError](src/resources/fiat.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## C2C

> Source: [C2C](src/resources/c2-c.ts)

<details>
<summary><code>getC2CTradeHistoryUserData(request: C2C.GetC2CTradeHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1C2COrderMatchListUserOrderHistoryResponse, C2C.GetC2CTradeHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned.
- The max interval between startTimestamp and endTimestamp is 30 days.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.c2C.getC2CTradeHistoryUserData({ tradeType, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1C2COrderMatchListUserOrderHistoryResponse
} catch (err) {
  if (err instanceof C2C.GetC2CTradeHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tradeType</code> | <code>[TradeType](src/models/trade-type.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTimestamp?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTimestamp?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>rows?</code> | <code>number</code> | default 100, max 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1C2COrderMatchListUserOrderHistoryResponse](src/models/sapi-v1-c2-corder-match-list-user-order-history-response.ts)</code>

**OnError**: <code>[C2C.GetC2CTradeHistoryUserDataError](src/resources/c2-c.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VipLoans

> Source: [VipLoans](src/resources/vip-loans.ts)

<details>
<summary><code>checkLockedValueOfVipCollateralAccountUserData(request: VipLoans.CheckLockedValueOfVipCollateralAccountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipCollateralAccountResponse, VipLoans.CheckLockedValueOfVipCollateralAccountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

VIP loan is available for VIP users only.

Weight(IP): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.checkLockedValueOfVipCollateralAccountUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LoanVipCollateralAccountResponse
} catch (err) {
  if (
    err instanceof VipLoans.CheckLockedValueOfVipCollateralAccountUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>collateralAccountId?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipCollateralAccountResponse](src/models/sapi-v1-loan-vip-collateral-account-response.ts)</code>

**OnError**: <code>[VipLoans.CheckLockedValueOfVipCollateralAccountUserDataError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBorrowInterestRateUserData(request: VipLoans.GetBorrowInterestRateUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipRequestInterestRateResponse[], VipLoans.GetBorrowInterestRateUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get borrow interest rate.

Weight(UID): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.getBorrowInterestRateUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanVipRequestInterestRateResponse[]
} catch (err) {
  if (err instanceof VipLoans.GetBorrowInterestRateUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Max 10 assets, Multiple split by "," |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipRequestInterestRateResponse](src/models/sapi-v1-loan-vip-request-interest-rate-response.ts)[]</code>

**OnError**: <code>[VipLoans.GetBorrowInterestRateUserDataError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCollateralAssetDataUserData(request: VipLoans.GetCollateralAssetDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipCollateralDataResponse, VipLoans.GetCollateralAssetDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get collateral asset data.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.getCollateralAssetDataUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanVipCollateralDataResponse
} catch (err) {
  if (err instanceof VipLoans.GetCollateralAssetDataUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipCollateralDataResponse](src/models/sapi-v1-loan-vip-collateral-data-response.ts)</code>

**OnError**: <code>[VipLoans.GetCollateralAssetDataUserDataError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLoanableAssetsData(request: VipLoans.GetLoanableAssetsDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipLoanableDataResponse, VipLoans.GetLoanableAssetsDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.getLoanableAssetsData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanVipLoanableDataResponse
} catch (err) {
  if (err instanceof VipLoans.GetLoanableAssetsDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>vipLevel?</code> | <code>number</code> | Defaults to user's vip level |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipLoanableDataResponse](src/models/sapi-v1-loan-vip-loanable-data-response.ts)</code>

**OnError**: <code>[VipLoans.GetLoanableAssetsDataError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVipLoanOngoingOrdersUserData(request: VipLoans.GetVipLoanOngoingOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipOngoingOrdersResponse, VipLoans.GetVipLoanOngoingOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

VIP loan is available for VIP users only.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.getVipLoanOngoingOrdersUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanVipOngoingOrdersResponse
} catch (err) {
  if (err instanceof VipLoans.GetVipLoanOngoingOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>collateralAccountId?</code> | <code>number</code> | - |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | Default 10; max 100. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipOngoingOrdersResponse](src/models/sapi-v1-loan-vip-ongoing-orders-response.ts)</code>

**OnError**: <code>[VipLoans.GetVipLoanOngoingOrdersUserDataError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVipLoanRepaymentHistoryUserData(request: VipLoans.GetVipLoanRepaymentHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipRepayHistoryResponse, VipLoans.GetVipLoanRepaymentHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

VIP loan is available for VIP users only.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.getVipLoanRepaymentHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanVipRepayHistoryResponse
} catch (err) {
  if (err instanceof VipLoans.GetVipLoanRepaymentHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | Default 10; max 100. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipRepayHistoryResponse](src/models/sapi-v1-loan-vip-repay-history-response.ts)</code>

**OnError**: <code>[VipLoans.GetVipLoanRepaymentHistoryUserDataError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryApplicationStatusUserData(request: VipLoans.QueryApplicationStatusUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipRequestDataResponse, VipLoans.QueryApplicationStatusUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Application Status

Weight(UID): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.queryApplicationStatusUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanVipRequestDataResponse
} catch (err) {
  if (err instanceof VipLoans.QueryApplicationStatusUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipRequestDataResponse](src/models/sapi-v1-loan-vip-request-data-response.ts)</code>

**OnError**: <code>[VipLoans.QueryApplicationStatusUserDataError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vipLoanBorrow(request: VipLoans.VipLoanBorrowRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipBorrowResponse, VipLoans.VipLoanBorrowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

VIP loan is available for VIP users only.

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.vipLoanBorrow({
    loanAccountId,
    loanAmount,
    collateralAccountId,
    collateralCoin,
    isFlexibleRate,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LoanVipBorrowResponse
} catch (err) {
  if (err instanceof VipLoans.VipLoanBorrowError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>loanAccountId</code> | <code>number</code> | - |
| <code>loanAmount</code> | <code>number</code> | - |
| <code>collateralAccountId</code> | <code>string</code> | - |
| <code>collateralCoin</code> | <code>string</code> | - |
| <code>isFlexibleRate</code> | <code>[IsFlexibleRate](src/models/is-flexible-rate.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>loanTerm?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipBorrowResponse](src/models/sapi-v1-loan-vip-borrow-response.ts)</code>

**OnError**: <code>[VipLoans.VipLoanBorrowError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vipLoanRenew(request: VipLoans.VipLoanRenewRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipRenewResponse, VipLoans.VipLoanRenewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

VIP loan is available for VIP users only.

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.vipLoanRenew({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanVipRenewResponse
} catch (err) {
  if (err instanceof VipLoans.VipLoanRenewError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>loanTerm?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipRenewResponse](src/models/sapi-v1-loan-vip-renew-response.ts)</code>

**OnError**: <code>[VipLoans.VipLoanRenewError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vipLoanRepayTrade(request: VipLoans.VipLoanRepayTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanVipRepayResponse, VipLoans.VipLoanRepayTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

VIP loan is available for VIP users only.

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vipLoans.vipLoanRepayTrade({ amount, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanVipRepayResponse
} catch (err) {
  if (err instanceof VipLoans.VipLoanRepayTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order id |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanVipRepayResponse](src/models/sapi-v1-loan-vip-repay-response.ts)</code>

**OnError**: <code>[VipLoans.VipLoanRepayTradeError](src/resources/vip-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CryptoLoans

> Source: [CryptoLoans](src/resources/crypto-loans.ts)

<details>
<summary><code>adjustLtvFlexibleLoanAdjustLtvTrade(request: CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV2LoanFlexibleAdjustLtvResponse, CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- API Key needs Spot & Margin Trading permission for this endpoint

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.adjustLtvFlexibleLoanAdjustLtvTrade({
    adjustmentAmount,
    direction,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2LoanFlexibleAdjustLtvResponse
} catch (err) {
  if (err instanceof CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>adjustmentAmount</code> | <code>number</code> | - |
| <code>direction</code> | <code>[Direction](src/models/direction.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2LoanFlexibleAdjustLtvResponse](src/models/sapi-v2-loan-flexible-adjust-ltv-response.ts)</code>

**OnError**: <code>[CryptoLoans.AdjustLtvFlexibleLoanAdjustLtvTradeError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserData(request: CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV2LoanFlexibleLtvAdjustmentHistoryResponse, CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If startTime and endTime are not sent, the recent 90-day data will be returned.
- The max interval between startTime and endTime is 180 days.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.adjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2LoanFlexibleLtvAdjustmentHistoryResponse
} catch (err) {
  if (
    err instanceof CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2LoanFlexibleLtvAdjustmentHistoryResponse](src/models/sapi-v2-loan-flexible-ltv-adjustment-history-response.ts)</code>

**OnError**: <code>[CryptoLoans.AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>borrowFlexibleLoanBorrowTrade(request: CryptoLoans.BorrowFlexibleLoanBorrowTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV2LoanFlexibleBorrowResponse, CryptoLoans.BorrowFlexibleLoanBorrowTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- Only available for master account

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.borrowFlexibleLoanBorrowTrade({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV2LoanFlexibleBorrowResponse
} catch (err) {
  if (err instanceof CryptoLoans.BorrowFlexibleLoanBorrowTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>loanAmount?</code> | <code>number</code> | Loan amount |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>collateralAmount?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2LoanFlexibleBorrowResponse](src/models/sapi-v2-loan-flexible-borrow-response.ts)</code>

**OnError**: <code>[CryptoLoans.BorrowFlexibleLoanBorrowTradeError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>borrowGetFlexibleLoanBorrowHistoryUserData(request: CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV2LoanFlexibleBorrowHistoryResponse, CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If startTime and endTime are not sent, the recent 90-day data will be returned.
- The max interval between startTime and endTime is 180 days.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.borrowGetFlexibleLoanBorrowHistoryUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2LoanFlexibleBorrowHistoryResponse
} catch (err) {
  if (
    err instanceof CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2LoanFlexibleBorrowHistoryResponse](src/models/sapi-v2-loan-flexible-borrow-history-response.ts)</code>

**OnError**: <code>[CryptoLoans.BorrowGetFlexibleLoanBorrowHistoryUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>borrowGetFlexibleLoanOngoingOrdersUserData(request: CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV2LoanFlexibleOngoingOrdersResponse, CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>


Weight(IP): 300

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.borrowGetFlexibleLoanOngoingOrdersUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2LoanFlexibleOngoingOrdersResponse
} catch (err) {
  if (
    err instanceof CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2LoanFlexibleOngoingOrdersResponse](src/models/sapi-v2-loan-flexible-ongoing-orders-response.ts)</code>

**OnError**: <code>[CryptoLoans.BorrowGetFlexibleLoanOngoingOrdersUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkCollateralRepayRateUserData(request: CryptoLoans.CheckCollateralRepayRateUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanRepayCollateralRateResponse, CryptoLoans.CheckCollateralRepayRateUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be valid within 8 second.

Weight(IP): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.checkCollateralRepayRateUserData({
    loanCoin,
    collateralCoin,
    repayAmount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LoanRepayCollateralRateResponse
} catch (err) {
  if (err instanceof CryptoLoans.CheckCollateralRepayRateUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>loanCoin</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin</code> | <code>string</code> | Coin used as collateral |
| <code>repayAmount</code> | <code>number</code> | repay amount of loanCoin |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanRepayCollateralRateResponse](src/models/sapi-v1-loan-repay-collateral-rate-response.ts)</code>

**OnError**: <code>[CryptoLoans.CheckCollateralRepayRateUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cryptoLoanAdjustLtvTrade(request: CryptoLoans.CryptoLoanAdjustLtvTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanAdjustLtvResponse, CryptoLoans.CryptoLoanAdjustLtvTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.cryptoLoanAdjustLtvTrade({
    orderId,
    amount,
    direction,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LoanAdjustLtvResponse
} catch (err) {
  if (err instanceof CryptoLoans.CryptoLoanAdjustLtvTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>number</code> | Order ID |
| <code>amount</code> | <code>number</code> | Amount |
| <code>direction</code> | <code>[Direction](src/models/direction.ts)</code> | 'ADDITIONAL', 'REDUCED' |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanAdjustLtvResponse](src/models/sapi-v1-loan-adjust-ltv-response.ts)</code>

**OnError**: <code>[CryptoLoans.CryptoLoanAdjustLtvTradeError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cryptoLoanBorrowTrade(request: CryptoLoans.CryptoLoanBorrowTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanBorrowResponse, CryptoLoans.CryptoLoanBorrowTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.cryptoLoanBorrowTrade({
    loanCoin,
    collateralCoin,
    loanTerm,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LoanBorrowResponse
} catch (err) {
  if (err instanceof CryptoLoans.CryptoLoanBorrowTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>loanCoin</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin</code> | <code>string</code> | Coin used as collateral |
| <code>loanTerm</code> | <code>number</code> | 7/14/30/90/180 days |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanAmount?</code> | <code>number</code> | Loan amount |
| <code>collateralAmount?</code> | <code>number</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanBorrowResponse](src/models/sapi-v1-loan-borrow-response.ts)</code>

**OnError**: <code>[CryptoLoans.CryptoLoanBorrowTradeError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cryptoLoanCustomizeMarginCallTrade(request: CryptoLoans.CryptoLoanCustomizeMarginCallTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanCustomizeMarginCallResponse, CryptoLoans.CryptoLoanCustomizeMarginCallTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Customize margin call for ongoing orders only.

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.cryptoLoanCustomizeMarginCallTrade({
    marginCall,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LoanCustomizeMarginCallResponse
} catch (err) {
  if (err instanceof CryptoLoans.CryptoLoanCustomizeMarginCallTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>marginCall</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Mandatory when collateralCoin is empty. Send either orderId or collateralCoin, if both parameters are sent, take orderId only. |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanCustomizeMarginCallResponse](src/models/sapi-v1-loan-customize-margin-call-response.ts)</code>

**OnError**: <code>[CryptoLoans.CryptoLoanCustomizeMarginCallTradeError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cryptoLoanRepayTrade(request: CryptoLoans.CryptoLoanRepayTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanRepayResponse, CryptoLoans.CryptoLoanRepayTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.cryptoLoanRepayTrade({ orderId, amount, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanRepayResponse
} catch (err) {
  if (err instanceof CryptoLoans.CryptoLoanRepayTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>number</code> | Order ID |
| <code>amount</code> | <code>number</code> | Repayment Amount |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>type?</code> | <code>number</code> | Default: 1. 1 for 'repay with borrowed coin'; 2 for 'repay with collateral'. |
| <code>collateralReturn?</code> | <code>boolean</code> | Default: TRUE. TRUE: Return extra collateral to spot account; FALSE: Keep extra collateral in the order. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanRepayResponse](src/models/unions/sapi-v1-loan-repay-response.ts)</code>

**OnError**: <code>[CryptoLoans.CryptoLoanRepayTradeError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCollateralAssetsDataUserData(request: CryptoLoans.GetCollateralAssetsDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanCollateralDataResponse, CryptoLoans.GetCollateralAssetsDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get LTV information and collateral limit of collateral assets. The collateral limit is shown in USD value.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.getCollateralAssetsDataUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanCollateralDataResponse
} catch (err) {
  if (err instanceof CryptoLoans.GetCollateralAssetsDataUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>vipLevel?</code> | <code>number</code> | Defaults to user's vip level |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanCollateralDataResponse](src/models/sapi-v1-loan-collateral-data-response.ts)</code>

**OnError**: <code>[CryptoLoans.GetCollateralAssetsDataUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCryptoLoansBorrowHistoryUserData(request: CryptoLoans.GetCryptoLoansBorrowHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanBorrowHistoryResponse, CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If startTime and endTime are not sent, the recent 90-day data will be returned.
- The max interval between startTime and endTime is 180 days.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.getCryptoLoansBorrowHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanBorrowHistoryResponse
} catch (err) {
  if (err instanceof CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | orderId in POST /sapi/v1/loan/borrow |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | default 10, max 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanBorrowHistoryResponse](src/models/sapi-v1-loan-borrow-history-response.ts)</code>

**OnError**: <code>[CryptoLoans.GetCryptoLoansBorrowHistoryUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCryptoLoansIncomeHistoryUserData(request: CryptoLoans.GetCryptoLoansIncomeHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanIncomeResponse[], CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If startTime and endTime are not sent, the recent 7-day data will be returned.
- The max interval between startTime and endTime is 30 days.

Weight(UID): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.getCryptoLoansIncomeHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanIncomeResponse[]
} catch (err) {
  if (err instanceof CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[Type9](src/models/type9.ts)</code> | All types will be returned by default.<br>  * `borrowIn`<br>  * `collateralSpent`<br>  * `repayAmount`<br>  * `collateralReturn` - Collateral return after repayment<br>  * `addCollateral`<br>  * `removeCollateral`<br>  * `collateralReturnAfterLiquidation` |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | default 20, max 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanIncomeResponse](src/models/sapi-v1-loan-income-response.ts)[]</code>

**OnError**: <code>[CryptoLoans.GetCryptoLoansIncomeHistoryUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFlexibleLoanAssetsDataUserData(request: CryptoLoans.GetFlexibleLoanAssetsDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV2LoanFlexibleLoanableDataResponse, CryptoLoans.GetFlexibleLoanAssetsDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get interest rate and borrow limit of flexible loanable assets. The borrow limit is shown in USD value.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.getFlexibleLoanAssetsDataUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV2LoanFlexibleLoanableDataResponse
} catch (err) {
  if (err instanceof CryptoLoans.GetFlexibleLoanAssetsDataUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2LoanFlexibleLoanableDataResponse](src/models/sapi-v2-loan-flexible-loanable-data-response.ts)</code>

**OnError**: <code>[CryptoLoans.GetFlexibleLoanAssetsDataUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFlexibleLoanCollateralAssetsDataUserData(request: CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV2LoanFlexibleCollateralDataResponse, CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get LTV information and collateral limit of flexible loan's collateral assets. The collateral limit is shown in USD value.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.getFlexibleLoanCollateralAssetsDataUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2LoanFlexibleCollateralDataResponse
} catch (err) {
  if (
    err instanceof CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2LoanFlexibleCollateralDataResponse](src/models/sapi-v2-loan-flexible-collateral-data-response.ts)</code>

**OnError**: <code>[CryptoLoans.GetFlexibleLoanCollateralAssetsDataUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLoanLtvAdjustmentHistoryUserData(request: CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanLtvAdjustmentHistoryResponse, CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If startTime and endTime are not sent, the recent 90-day data will be returned.
The max interval between startTime and endTime is 180 days.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.getLoanLtvAdjustmentHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanLtvAdjustmentHistoryResponse
} catch (err) {
  if (err instanceof CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order ID |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | default 10, max 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanLtvAdjustmentHistoryResponse](src/models/sapi-v1-loan-ltv-adjustment-history-response.ts)</code>

**OnError**: <code>[CryptoLoans.GetLoanLtvAdjustmentHistoryUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLoanOngoingOrdersUserData(request: CryptoLoans.GetLoanOngoingOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanOngoingOrdersResponse, CryptoLoans.GetLoanOngoingOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 300

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.getLoanOngoingOrdersUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanOngoingOrdersResponse
} catch (err) {
  if (err instanceof CryptoLoans.GetLoanOngoingOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | orderId in POST /sapi/v1/loan/borrow |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1; default:1, max:1000 |
| <code>limit?</code> | <code>number</code> | default 10, max 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanOngoingOrdersResponse](src/models/sapi-v1-loan-ongoing-orders-response.ts)</code>

**OnError**: <code>[CryptoLoans.GetLoanOngoingOrdersUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLoanRepaymentHistoryUserData(request: CryptoLoans.GetLoanRepaymentHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanRepayHistoryResponse, CryptoLoans.GetLoanRepaymentHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If startTime and endTime are not sent, the recent 90-day data will be returned.
The max interval between startTime and endTime is 180 days.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.getLoanRepaymentHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanRepayHistoryResponse
} catch (err) {
  if (err instanceof CryptoLoans.GetLoanRepaymentHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>number</code> | Order ID |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | default 10, max 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanRepayHistoryResponse](src/models/sapi-v1-loan-repay-history-response.ts)</code>

**OnError**: <code>[CryptoLoans.GetLoanRepaymentHistoryUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLoanableAssetsDataUserData(request: CryptoLoans.GetLoanableAssetsDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LoanLoanableDataResponse, CryptoLoans.GetLoanableAssetsDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.getLoanableAssetsDataUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LoanLoanableDataResponse
} catch (err) {
  if (err instanceof CryptoLoans.GetLoanableAssetsDataUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>vipLevel?</code> | <code>number</code> | Defaults to user's vip level |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LoanLoanableDataResponse](src/models/sapi-v1-loan-loanable-data-response.ts)</code>

**OnError**: <code>[CryptoLoans.GetLoanableAssetsDataUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>repayFlexibleLoanRepayTrade(request: CryptoLoans.RepayFlexibleLoanRepayTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV2LoanFlexibleRepayResponse, CryptoLoans.RepayFlexibleLoanRepayTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- repayAmount is mandatory even fullRepayment = FALSE

Weight(IP): 6000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.repayFlexibleLoanRepayTrade({
    repayAmount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2LoanFlexibleRepayResponse
} catch (err) {
  if (err instanceof CryptoLoans.RepayFlexibleLoanRepayTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repayAmount</code> | <code>number</code> | repay amount of loanCoin |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>collateralReturn?</code> | <code>boolean</code> | Default: TRUE.<br>TRUE: Return extra collateral to earn account;<br>FALSE: Keep extra collateral in the order, and lower LTV. |
| <code>fullRepayment?</code> | <code>boolean</code> | Default: FALSE.<br>TRUE: Full repayment;<br>FALSE: Partial repayment, based on loanAmount |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2LoanFlexibleRepayResponse](src/models/sapi-v2-loan-flexible-repay-response.ts)</code>

**OnError**: <code>[CryptoLoans.RepayFlexibleLoanRepayTradeError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>repayGetFlexibleLoanRepaymentHistoryUserData(request: CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV2LoanFlexibleRepayHistoryResponse, CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If startTime and endTime are not sent, the recent 90-day data will be returned.
- The max interval between startTime and endTime is 180 days.

Weight(IP): 400

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cryptoLoans.repayGetFlexibleLoanRepaymentHistoryUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV2LoanFlexibleRepayHistoryResponse
} catch (err) {
  if (
    err instanceof CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>loanCoin?</code> | <code>string</code> | Coin loaned |
| <code>collateralCoin?</code> | <code>string</code> | Coin used as collateral |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>limit?</code> | <code>number</code> | Default 500; max 1000. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2LoanFlexibleRepayHistoryResponse](src/models/sapi-v2-loan-flexible-repay-history-response.ts)</code>

**OnError**: <code>[CryptoLoans.RepayGetFlexibleLoanRepaymentHistoryUserDataError](src/resources/crypto-loans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pay

> Source: [Pay](src/resources/pay.ts)

<details>
<summary><code>getPayTradeHistoryUserData(request: Pay.GetPayTradeHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1PayTransactionsResponse, Pay.GetPayTradeHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- If startTime and endTime are not sent, the recent 90 days' data will be returned.
- The max interval between startTime and endTime is 90 days.
- Support for querying orders within the last 18 months.

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pay.getPayTradeHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1PayTransactionsResponse
} catch (err) {
  if (err instanceof Pay.GetPayTradeHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | default 100, max 100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1PayTransactionsResponse](src/models/sapi-v1-pay-transactions-response.ts)</code>

**OnError**: <code>[Pay.GetPayTradeHistoryUserDataError](src/resources/pay.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Convert

> Source: [Convert](src/resources/convert.ts)

<details>
<summary><code>acceptQuoteTrade(request: Convert.AcceptQuoteTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ConvertAcceptQuoteResponse, Convert.AcceptQuoteTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept the offered quote by quote ID.

Weight(UID): 500

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.acceptQuoteTrade({ quoteId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1ConvertAcceptQuoteResponse
} catch (err) {
  if (err instanceof Convert.AcceptQuoteTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>quoteId</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ConvertAcceptQuoteResponse](src/models/sapi-v1-convert-accept-quote-response.ts)</code>

**OnError**: <code>[Convert.AcceptQuoteTradeError](src/resources/convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelLimitOrderUserData(request: Convert.CancelLimitOrderUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ConvertLimitCancelOrderResponse, Convert.CancelLimitOrderUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable users to cancel a limit order

Weight(UID): 200

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.cancelLimitOrderUserData({ orderId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1ConvertLimitCancelOrderResponse
} catch (err) {
  if (err instanceof Convert.CancelLimitOrderUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ConvertLimitCancelOrderResponse](src/models/sapi-v1-convert-limit-cancel-order-response.ts)</code>

**OnError**: <code>[Convert.CancelLimitOrderUserDataError](src/resources/convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConvertTradeHistoryUserData(request: Convert.GetConvertTradeHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ConvertTradeFlowResponse, Convert.GetConvertTradeHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The max interval between startTime and endTime is 30 days.

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.getConvertTradeHistoryUserData({
    startTime,
    endTime,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ConvertTradeFlowResponse
} catch (err) {
  if (err instanceof Convert.GetConvertTradeHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>startTime</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime</code> | <code>number</code> | UTC timestamp in ms |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>limit?</code> | <code>number</code> | default 100, max 1000 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ConvertTradeFlowResponse](src/models/sapi-v1-convert-trade-flow-response.ts)</code>

**OnError**: <code>[Convert.GetConvertTradeHistoryUserDataError](src/resources/convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllConvertPairs(request: Convert.ListAllConvertPairsRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ConvertExchangeInfoResponse[], Convert.ListAllConvertPairsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query for all convertible token pairs and the tokens’ respective upper/lower limits

Weight(IP): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.listAllConvertPairs();
  // TODO: Handle 'response' of type SapiV1ConvertExchangeInfoResponse[]
} catch (err) {
  if (err instanceof Convert.ListAllConvertPairsError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fromAsset?</code> | <code>string</code> | User spends coin |
| <code>toAsset?</code> | <code>string</code> | User receives coin |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ConvertExchangeInfoResponse](src/models/sapi-v1-convert-exchange-info-response.ts)[]</code>

**OnError**: <code>[Convert.ListAllConvertPairsError](src/resources/convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>orderStatusUserData(request: Convert.OrderStatusUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ConvertOrderStatusResponse, Convert.OrderStatusUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query order status by order ID.

Weight(UID): 100

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.orderStatusUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1ConvertOrderStatusResponse
} catch (err) {
  if (err instanceof Convert.OrderStatusUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>orderId?</code> | <code>string</code> | - |
| <code>quoteId?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ConvertOrderStatusResponse](src/models/sapi-v1-convert-order-status-response.ts)</code>

**OnError**: <code>[Convert.OrderStatusUserDataError](src/resources/convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>placeLimitOrderUserData(request: Convert.PlaceLimitOrderUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ConvertLimitPlaceOrderResponse, Convert.PlaceLimitOrderUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable users to place a limit order

- baseAsset or quoteAsset can be determined via exchangeInfo endpoint.
- Limit price is defined from baseAsset to quoteAsset.
- Either baseAmount or quoteAmount is used.

Weight(UID): 500

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.placeLimitOrderUserData({
    baseAsset,
    quoteAsset,
    limitPrice,
    side,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ConvertLimitPlaceOrderResponse
} catch (err) {
  if (err instanceof Convert.PlaceLimitOrderUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseAsset</code> | <code>string</code> | - |
| <code>quoteAsset</code> | <code>string</code> | - |
| <code>limitPrice</code> | <code>number</code> | Symbol limit price (from baseAsset to quoteAsset) |
| <code>side</code> | <code>[Side](src/models/side.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>baseAmount?</code> | <code>number</code> | Base asset amount. (One of baseAmount or quoteAmount is required) |
| <code>quoteAmount?</code> | <code>number</code> | Quote asset amount. (One of baseAmount or quoteAmount is required) |
| <code>walletType?</code> | <code>[WalletType](src/models/wallet-type.ts)</code> | SPOT or FUNDING or SPOT_FUNDING. It is to use which type of assets. Default is SPOT. |
| <code>expiredType?</code> | <code>[ExpiredType](src/models/expired-type.ts)</code> | 1_D, 3_D, 7_D, 30_D (D means day) |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ConvertLimitPlaceOrderResponse](src/models/sapi-v1-convert-limit-place-order-response.ts)</code>

**OnError**: <code>[Convert.PlaceLimitOrderUserDataError](src/resources/convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryLimitOpenOrdersUserData(request: Convert.QueryLimitOpenOrdersUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ConvertLimitQueryOpenOrdersResponse, Convert.QueryLimitOpenOrdersUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable users to query for all existing limit orders

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.queryLimitOpenOrdersUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1ConvertLimitQueryOpenOrdersResponse
} catch (err) {
  if (err instanceof Convert.QueryLimitOpenOrdersUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ConvertLimitQueryOpenOrdersResponse](src/models/sapi-v1-convert-limit-query-open-orders-response.ts)</code>

**OnError**: <code>[Convert.QueryLimitOpenOrdersUserDataError](src/resources/convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryOrderQuantityPrecisionPerAssetUserData(request: Convert.QueryOrderQuantityPrecisionPerAssetUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ConvertAssetInfoResponse[], Convert.QueryOrderQuantityPrecisionPerAssetUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query for supported asset precision information

Weight(IP): 100

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.queryOrderQuantityPrecisionPerAssetUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1ConvertAssetInfoResponse[]
} catch (err) {
  if (
    err instanceof Convert.QueryOrderQuantityPrecisionPerAssetUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ConvertAssetInfoResponse](src/models/sapi-v1-convert-asset-info-response.ts)[]</code>

**OnError**: <code>[Convert.QueryOrderQuantityPrecisionPerAssetUserDataError](src/resources/convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendQuoteRequestUserData(request: Convert.SendQuoteRequestUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1ConvertGetQuoteResponse, Convert.SendQuoteRequestUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request a quote for the requested token pairs

Weight(UID): 200

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.sendQuoteRequestUserData({
    fromAsset,
    toAsset,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1ConvertGetQuoteResponse
} catch (err) {
  if (err instanceof Convert.SendQuoteRequestUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fromAsset</code> | <code>string</code> | - |
| <code>toAsset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>fromAmount?</code> | <code>number</code> | When specified, it is the amount you will be debited after the conversion |
| <code>toAmount?</code> | <code>number</code> | When specified, it is the amount you will be debited after the conversion |
| <code>validTime?</code> | <code>string</code> | 10s, 30s, 1m, 2m, default 10s |
| <code>walletType?</code> | <code>string</code> | SPOT or FUNDING. Default is SPOT |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1ConvertGetQuoteResponse](src/models/sapi-v1-convert-get-quote-response.ts)</code>

**OnError**: <code>[Convert.SendQuoteRequestUserDataError](src/resources/convert.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Rebate

> Source: [Rebate](src/resources/rebate.ts)

<details>
<summary><code>getSpotRebateHistoryRecordsUserData(request: Rebate.GetSpotRebateHistoryRecordsUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1RebateTaxQueryResponse, Rebate.GetSpotRebateHistoryRecordsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The max interval between startTime and endTime is 90 days.
- If startTime and endTime are not sent, the recent 7 days' data will be returned.
- The earliest startTime is supported on June 10, 2020

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.rebate.getSpotRebateHistoryRecordsUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1RebateTaxQueryResponse
} catch (err) {
  if (err instanceof Rebate.GetSpotRebateHistoryRecordsUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>page?</code> | <code>number</code> | default 1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1RebateTaxQueryResponse](src/models/sapi-v1-rebate-tax-query-response.ts)</code>

**OnError**: <code>[Rebate.GetSpotRebateHistoryRecordsUserDataError](src/resources/rebate.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Nft

> Source: [Nft](src/resources/nft.ts)

<details>
<summary><code>getNftAssetUserData(request: Nft.GetNftAssetUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1NftUserGetAssetResponse, Nft.GetNftAssetUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.nft.getNftAssetUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1NftUserGetAssetResponse
} catch (err) {
  if (err instanceof Nft.GetNftAssetUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>limit?</code> | <code>number</code> | Default 50, Max 50 |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1NftUserGetAssetResponse](src/models/sapi-v1-nft-user-get-asset-response.ts)</code>

**OnError**: <code>[Nft.GetNftAssetUserDataError](src/resources/nft.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getNftDepositHistoryUserData(request: Nft.GetNftDepositHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1NftHistoryDepositResponse, Nft.GetNftDepositHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The max interval between startTime and endTime is 90 days.
- If startTime and endTime are not sent, the recent 7 days' data will be returned.

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.nft.getNftDepositHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1NftHistoryDepositResponse
} catch (err) {
  if (err instanceof Nft.GetNftDepositHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default 50, Max 50 |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1NftHistoryDepositResponse](src/models/sapi-v1-nft-history-deposit-response.ts)</code>

**OnError**: <code>[Nft.GetNftDepositHistoryUserDataError](src/resources/nft.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getNftTransactionHistoryUserData(request: Nft.GetNftTransactionHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1NftHistoryTransactionsResponse, Nft.GetNftTransactionHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The max interval between startTime and endTime is 90 days.
- If startTime and endTime are not sent, the recent 7 days' data will be returned.

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.nft.getNftTransactionHistoryUserData({ orderType, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1NftHistoryTransactionsResponse
} catch (err) {
  if (err instanceof Nft.GetNftTransactionHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderType</code> | <code>number</code> | 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default 50, Max 50 |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1NftHistoryTransactionsResponse](src/models/sapi-v1-nft-history-transactions-response.ts)</code>

**OnError**: <code>[Nft.GetNftTransactionHistoryUserDataError](src/resources/nft.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getNftWithdrawHistoryUserData(request: Nft.GetNftWithdrawHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1NftHistoryWithdrawResponse, Nft.GetNftWithdrawHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The max interval between startTime and endTime is 90 days.
- If startTime and endTime are not sent, the recent 7 days' data will be returned.

Weight(UID): 3000

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.nft.getNftWithdrawHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1NftHistoryWithdrawResponse
} catch (err) {
  if (err instanceof Nft.GetNftWithdrawHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>limit?</code> | <code>number</code> | Default 50, Max 50 |
| <code>page?</code> | <code>number</code> | Default 1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1NftHistoryWithdrawResponse](src/models/sapi-v1-nft-history-withdraw-response.ts)</code>

**OnError**: <code>[Nft.GetNftWithdrawHistoryUserDataError](src/resources/nft.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GiftCard

> Source: [GiftCard](src/resources/gift-card.ts)

<details>
<summary><code>buyABinanceCodeTrade(request: GiftCard.BuyABinanceCodeTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1GiftcardBuyCodeResponse, GiftCard.BuyABinanceCodeTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API is for buying a fixed-value Binance Code, which means your Binance Code will be redeemable to a token that is different to the token that you are paying in. If the token you’re paying and the redeemable token are the same, please use the Create Binance Code endpoint.
You can use supported crypto currency or fiat token as baseToken to buy Binance Code that is redeemable to your chosen faceToken.
Once successfully purchased, the amount of baseToken would be deducted from your funding wallet.

To get started with, please make sure:
- You have a Binance account
- You have passed kyc
- You have a sufficient balance in your Binance funding wallet
- You need Enable Withdrawals for the API Key which requests this endpoint.

Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCard.buyABinanceCodeTrade({
    baseToken,
    faceToken,
    baseTokenAmount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1GiftcardBuyCodeResponse
} catch (err) {
  if (err instanceof GiftCard.BuyABinanceCodeTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseToken</code> | <code>string</code> | The token you want to pay, example BUSD |
| <code>faceToken</code> | <code>string</code> | The token you want to buy, example BNB. If faceToken = baseToken, it's the same as createCode endpoint. |
| <code>baseTokenAmount</code> | <code>number</code> | The base token asset quantity, example  1.002 |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1GiftcardBuyCodeResponse](src/models/sapi-v1-giftcard-buy-code-response.ts)</code>

**OnError**: <code>[GiftCard.BuyABinanceCodeTradeError](src/resources/gift-card.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createABinanceCodeUserData(request: GiftCard.CreateABinanceCodeUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1GiftcardCreateCodeResponse, GiftCard.CreateABinanceCodeUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API is for creating a Binance Code. To get started with, please make sure:

- You have a Binance account
- You have passed kyc
- You have a sufficient balance in your Binance funding wallet
- You need Enable Withdrawals for the API Key which requests this endpoint.

Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCard.createABinanceCodeUserData({ token, amount, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1GiftcardCreateCodeResponse
} catch (err) {
  if (err instanceof GiftCard.CreateABinanceCodeUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | The coin type contained in the Binance Code |
| <code>amount</code> | <code>number</code> | The amount of the coin |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1GiftcardCreateCodeResponse](src/models/sapi-v1-giftcard-create-code-response.ts)</code>

**OnError**: <code>[GiftCard.CreateABinanceCodeUserDataError](src/resources/gift-card.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchRsaPublicKeyUserData(request: GiftCard.FetchRsaPublicKeyUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1GiftcardCryptographyRsaPublicKeyResponse, GiftCard.FetchRsaPublicKeyUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API is for fetching the RSA Public Key.
This RSA Public key will be used to encrypt the card code.
Please note that the RSA Public key fetched is valid only for the current day.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCard.fetchRsaPublicKeyUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1GiftcardCryptographyRsaPublicKeyResponse
} catch (err) {
  if (err instanceof GiftCard.FetchRsaPublicKeyUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1GiftcardCryptographyRsaPublicKeyResponse](src/models/sapi-v1-giftcard-cryptography-rsa-public-key-response.ts)</code>

**OnError**: <code>[GiftCard.FetchRsaPublicKeyUserDataError](src/resources/gift-card.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fetchTokenLimitUserData(request: GiftCard.FetchTokenLimitUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1GiftcardBuyCodeTokenLimitResponse, GiftCard.FetchTokenLimitUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API is to help you verify which tokens are available for you to purchase fixed-value gift cards as mentioned in section 2 and it's limitation.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCard.fetchTokenLimitUserData({ baseToken, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1GiftcardBuyCodeTokenLimitResponse
} catch (err) {
  if (err instanceof GiftCard.FetchTokenLimitUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseToken</code> | <code>string</code> | The token you want to pay, example BUSD |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1GiftcardBuyCodeTokenLimitResponse](src/models/sapi-v1-giftcard-buy-code-token-limit-response.ts)</code>

**OnError**: <code>[GiftCard.FetchTokenLimitUserDataError](src/resources/gift-card.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>redeemABinanceCodeUserData(request: GiftCard.RedeemABinanceCodeUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1GiftcardRedeemCodeResponse, GiftCard.RedeemABinanceCodeUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API is for redeeming the Binance Code. Once redeemed, the coins will be deposited in your funding wallet.

Please note that if you enter the wrong code 5 times within 24 hours, you will no longer be able to redeem any Binance Code that day.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCard.redeemABinanceCodeUserData({ code, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1GiftcardRedeemCodeResponse
} catch (err) {
  if (err instanceof GiftCard.RedeemABinanceCodeUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | Binance Code |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>externalUid?</code> | <code>string</code> | Each external unique ID represents a unique user on the partner platform. The function helps you to identify the redemption behavior of different users, such as redemption frequency and amount. It also helps risk and limit control of a single account, such as daily limit on redemption volume, frequency, and incorrect number of entries. This will also prevent a single user account reach the partner's daily redemption limits. We strongly recommend you to use this feature and transfer us the User ID of your users if you have different users redeeming Binance codes on your platform. To protect user data privacy, you may choose to transfer the user id in any desired format (max. 400 characters). |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1GiftcardRedeemCodeResponse](src/models/sapi-v1-giftcard-redeem-code-response.ts)</code>

**OnError**: <code>[GiftCard.RedeemABinanceCodeUserDataError](src/resources/gift-card.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyABinanceCodeUserData(request: GiftCard.VerifyABinanceCodeUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1GiftcardVerifyResponse, GiftCard.VerifyABinanceCodeUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API is for verifying whether the Binance Code is valid or not by entering Binance Code or reference number.

Please note that if you enter the wrong binance code 5 times within an hour, you will no longer be able to verify any binance code for that hour.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCard.verifyABinanceCodeUserData({ referenceNo, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1GiftcardVerifyResponse
} catch (err) {
  if (err instanceof GiftCard.VerifyABinanceCodeUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>referenceNo</code> | <code>string</code> | reference number |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1GiftcardVerifyResponse](src/models/sapi-v1-giftcard-verify-response.ts)</code>

**OnError**: <code>[GiftCard.VerifyABinanceCodeUserDataError](src/resources/gift-card.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AutoInvest

> Source: [AutoInvest](src/resources/auto-invest.ts)

<details>
<summary><code>changePlanStatus(request: AutoInvest.ChangePlanStatusRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestPlanEditStatusResponse, AutoInvest.ChangePlanStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change Plan Status

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.changePlanStatus({ planId, status, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestPlanEditStatusResponse
} catch (err) {
  if (err instanceof AutoInvest.ChangePlanStatusError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>planId</code> | <code>number</code> | - |
| <code>status</code> | <code>[Status1](src/models/status1.ts)</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestPlanEditStatusResponse](src/models/sapi-v1-lending-auto-invest-plan-edit-status-response.ts)</code>

**OnError**: <code>[AutoInvest.ChangePlanStatusError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListOfPlans(request: AutoInvest.GetListOfPlansRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestPlanListResponse, AutoInvest.GetListOfPlansError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query plan lists

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.getListOfPlans({ planType, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestPlanListResponse
} catch (err) {
  if (err instanceof AutoInvest.GetListOfPlansError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>planType</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestPlanListResponse](src/models/sapi-v1-lending-auto-invest-plan-list-response.ts)</code>

**OnError**: <code>[AutoInvest.GetListOfPlansError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTargetAssetRoiDataUserData(request: AutoInvest.GetTargetAssetRoiDataUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestTargetAssetRoiListResponse[], AutoInvest.GetTargetAssetRoiDataUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ROI return list for target asset

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.getTargetAssetRoiDataUserData({
    targetAsset,
    hisRoiType,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestTargetAssetRoiListResponse[]
} catch (err) {
  if (err instanceof AutoInvest.GetTargetAssetRoiDataUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>targetAsset</code> | <code>string</code> | - |
| <code>hisRoiType</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestTargetAssetRoiListResponse](src/models/sapi-v1-lending-auto-invest-target-asset-roi-list-response.ts)[]</code>

**OnError**: <code>[AutoInvest.GetTargetAssetRoiDataUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTargetAssetListUserData(request: AutoInvest.GetTargetAssetListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestTargetAssetListResponse, AutoInvest.GetTargetAssetListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.getTargetAssetListUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestTargetAssetListResponse
} catch (err) {
  if (err instanceof AutoInvest.GetTargetAssetListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>targetAsset?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestTargetAssetListResponse](src/models/sapi-v1-lending-auto-invest-target-asset-list-response.ts)</code>

**OnError**: <code>[AutoInvest.GetTargetAssetListUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexLinkedPlanRebalanceDetailsUserData(request: AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestRebalanceHistoryResponse[], AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the history of Index Linked Plan Redemption transactions

Max 30 day difference between startTime and endTime
If no startTime and endTime, default to show past 30 day records

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.indexLinkedPlanRebalanceDetailsUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestRebalanceHistoryResponse[]
} catch (err) {
  if (
    err instanceof AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestRebalanceHistoryResponse](src/models/sapi-v1-lending-auto-invest-rebalance-history-response.ts)[]</code>

**OnError**: <code>[AutoInvest.IndexLinkedPlanRebalanceDetailsUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexLinkedPlanRedemptionTrade(request: AutoInvest.IndexLinkedPlanRedemptionTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestRedeemResponse, AutoInvest.IndexLinkedPlanRedemptionTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To redeem index-Linked plan holdings

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.indexLinkedPlanRedemptionTrade({
    indexId,
    redemptionPercentage,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestRedeemResponse
} catch (err) {
  if (err instanceof AutoInvest.IndexLinkedPlanRedemptionTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>indexId</code> | <code>number</code> | PORTFOLIO plan's Id |
| <code>redemptionPercentage</code> | <code>number</code> | user redeem percentage,10/20/100. |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>requestId?</code> | <code>string</code> | sourceType + unique, transactionId and requestId cannot be empty at the same time |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestRedeemResponse](src/models/sapi-v1-lending-auto-invest-redeem-response.ts)</code>

**OnError**: <code>[AutoInvest.IndexLinkedPlanRedemptionTradeError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexLinkedPlanRedemptionHistoryUserData(request: AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestRedeemHistoryResponse[], AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the history of Index Linked Plan Redemption transactions

Max 30 day difference between startTime and endTime
If no startTime and endTime, default to show past 30 day records

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.indexLinkedPlanRedemptionHistoryUserData({
    requestId,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestRedeemHistoryResponse[]
} catch (err) {
  if (
    err instanceof AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>requestId</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>asset?</code> | <code>string</code> | - |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestRedeemHistoryResponse](src/models/sapi-v1-lending-auto-invest-redeem-history-response.ts)[]</code>

**OnError**: <code>[AutoInvest.IndexLinkedPlanRedemptionHistoryUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>investmentPlanAdjustment(request: AutoInvest.InvestmentPlanAdjustmentRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestPlanEditResponse, AutoInvest.InvestmentPlanAdjustmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Source Asset to be used for investment

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.investmentPlanAdjustment({
    planId,
    subscriptionAmount,
    subscriptionCycle,
    subscriptionStartTime,
    sourceAsset,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestPlanEditResponse
} catch (err) {
  if (err instanceof AutoInvest.InvestmentPlanAdjustmentError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>planId</code> | <code>number</code> | - |
| <code>subscriptionAmount</code> | <code>number</code> | - |
| <code>subscriptionCycle</code> | <code>[SubscriptionCycle](src/models/subscription-cycle.ts)</code> | - |
| <code>subscriptionStartTime</code> | <code>number</code> | - |
| <code>sourceAsset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>subscriptionStartDay?</code> | <code>number</code> | - |
| <code>subscriptionStartWeekday?</code> | <code>[SubscriptionStartWeekday](src/models/subscription-start-weekday.ts)</code> | - |
| <code>flexibleAllowedToUse?</code> | <code>boolean</code> | - |
| <code>details?</code> | <code>[Detail1](src/models/detail1.ts)[]</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestPlanEditResponse](src/models/sapi-v1-lending-auto-invest-plan-edit-response.ts)</code>

**OnError**: <code>[AutoInvest.InvestmentPlanAdjustmentError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>investmentPlanCreationUserData(request: AutoInvest.InvestmentPlanCreationUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestPlanAddResponse, AutoInvest.InvestmentPlanCreationUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Post an investment plan creation

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.investmentPlanCreationUserData({
    sourceType,
    planType,
    subscriptionAmount,
    subscriptionCycle,
    subscriptionStartTime,
    sourceAsset,
    details,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestPlanAddResponse
} catch (err) {
  if (err instanceof AutoInvest.InvestmentPlanCreationUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourceType</code> | <code>[SourceType](src/models/source-type.ts)</code> | - |
| <code>planType</code> | <code>[PlanType](src/models/plan-type.ts)</code> | - |
| <code>subscriptionAmount</code> | <code>number</code> | - |
| <code>subscriptionCycle</code> | <code>[SubscriptionCycle](src/models/subscription-cycle.ts)</code> | - |
| <code>subscriptionStartTime</code> | <code>number</code> | - |
| <code>sourceAsset</code> | <code>string</code> | - |
| <code>details</code> | <code>[Detail1](src/models/detail1.ts)[]</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>requestId?</code> | <code>string</code> | - |
| <code>indexId?</code> | <code>number</code> | - |
| <code>subscriptionStartDay?</code> | <code>number</code> | - |
| <code>subscriptionStartWeekday?</code> | <code>[SubscriptionStartWeekday](src/models/subscription-start-weekday.ts)</code> | - |
| <code>flexibleAllowedToUse?</code> | <code>boolean</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestPlanAddResponse](src/models/sapi-v1-lending-auto-invest-plan-add-response.ts)</code>

**OnError**: <code>[AutoInvest.InvestmentPlanCreationUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oneTimeTransactionTrade(request: AutoInvest.OneTimeTransactionTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestOneOffResponse, AutoInvest.OneTimeTransactionTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One time transaction

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.oneTimeTransactionTrade({
    sourceType,
    subscriptionAmount,
    sourceAsset,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestOneOffResponse
} catch (err) {
  if (err instanceof AutoInvest.OneTimeTransactionTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourceType</code> | <code>string</code> | - |
| <code>subscriptionAmount</code> | <code>number</code> | - |
| <code>sourceAsset</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>requestId?</code> | <code>string</code> | - |
| <code>flexibleAllowedToUse?</code> | <code>boolean</code> | - |
| <code>planId?</code> | <code>number</code> | - |
| <code>indexId?</code> | <code>number</code> | - |
| <code>details?</code> | <code>[Detail5](src/models/detail5.ts)[]</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestOneOffResponse](src/models/sapi-v1-lending-auto-invest-one-off-response.ts)</code>

**OnError**: <code>[AutoInvest.OneTimeTransactionTradeError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryIndexDetailsUserData(request: AutoInvest.QueryIndexDetailsUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestIndexInfoResponse, AutoInvest.QueryIndexDetailsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query index details

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.queryIndexDetailsUserData({ indexId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestIndexInfoResponse
} catch (err) {
  if (err instanceof AutoInvest.QueryIndexDetailsUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>indexId</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestIndexInfoResponse](src/models/sapi-v1-lending-auto-invest-index-info-response.ts)</code>

**OnError**: <code>[AutoInvest.QueryIndexDetailsUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryIndexLinkedPlanPositionDetailsUserData(request: AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestIndexUserSummaryResponse, AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Details on users Index-Linked plan position details

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.queryIndexLinkedPlanPositionDetailsUserData({
    indexId,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestIndexUserSummaryResponse
} catch (err) {
  if (
    err instanceof AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>indexId</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestIndexUserSummaryResponse](src/models/sapi-v1-lending-auto-invest-index-user-summary-response.ts)</code>

**OnError**: <code>[AutoInvest.QueryIndexLinkedPlanPositionDetailsUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryOneTimeTransactionStatusUserData(request: AutoInvest.QueryOneTimeTransactionStatusUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestOneOffStatusResponse, AutoInvest.QueryOneTimeTransactionStatusUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transaction status for one-time transaction

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.queryOneTimeTransactionStatusUserData({
    transactionId,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestOneOffStatusResponse
} catch (err) {
  if (err instanceof AutoInvest.QueryOneTimeTransactionStatusUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>requestId?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestOneOffStatusResponse](src/models/sapi-v1-lending-auto-invest-one-off-status-response.ts)</code>

**OnError**: <code>[AutoInvest.QueryOneTimeTransactionStatusUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryAllSourceAssetAndTargetAssetUserData(request: AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestAllAssetResponse, AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query all source assets and target assets

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.queryAllSourceAssetAndTargetAssetUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestAllAssetResponse
} catch (err) {
  if (
    err instanceof AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestAllAssetResponse](src/models/sapi-v1-lending-auto-invest-all-asset-response.ts)</code>

**OnError**: <code>[AutoInvest.QueryAllSourceAssetAndTargetAssetUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryHoldingDetailsOfThePlan(request: AutoInvest.QueryHoldingDetailsOfThePlanRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestPlanIdResponse, AutoInvest.QueryHoldingDetailsOfThePlanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query holding details of the plan

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.queryHoldingDetailsOfThePlan({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestPlanIdResponse
} catch (err) {
  if (err instanceof AutoInvest.QueryHoldingDetailsOfThePlanError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>planId?</code> | <code>number</code> | - |
| <code>requestId?</code> | <code>string</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestPlanIdResponse](src/models/sapi-v1-lending-auto-invest-plan-id-response.ts)</code>

**OnError**: <code>[AutoInvest.QueryHoldingDetailsOfThePlanError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySourceAssetListUserData(request: AutoInvest.QuerySourceAssetListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestSourceAssetListResponse, AutoInvest.QuerySourceAssetListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Source Asset to be used for investment

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.querySourceAssetListUserData({ usageType, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestSourceAssetListResponse
} catch (err) {
  if (err instanceof AutoInvest.QuerySourceAssetListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>usageType</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>targetAsset?</code> | <code>string</code> | - |
| <code>indexId?</code> | <code>number</code> | - |
| <code>flexibleAllowedToUse?</code> | <code>boolean</code> | - |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestSourceAssetListResponse](src/models/sapi-v1-lending-auto-invest-source-asset-list-response.ts)</code>

**OnError**: <code>[AutoInvest.QuerySourceAssetListUserDataError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySubscriptionTransactionHistory(request: AutoInvest.QuerySubscriptionTransactionHistoryRequest, options?: RequestOptions): ApiPromise&lt;SapiV1LendingAutoInvestHistoryListResponse[], AutoInvest.QuerySubscriptionTransactionHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query subscription transaction history of a plan

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.autoInvest.querySubscriptionTransactionHistory({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1LendingAutoInvestHistoryListResponse[]
} catch (err) {
  if (err instanceof AutoInvest.QuerySubscriptionTransactionHistoryError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>planId?</code> | <code>number</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>targetAsset?</code> | <code>number</code> | - |
| <code>planType?</code> | <code>[PlanType1](src/models/plan-type1.ts)</code> | - |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1LendingAutoInvestHistoryListResponse](src/models/sapi-v1-lending-auto-invest-history-list-response.ts)[]</code>

**OnError**: <code>[AutoInvest.QuerySubscriptionTransactionHistoryError](src/resources/auto-invest.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CopyTrading

> Source: [CopyTrading](src/resources/copy-trading.ts)

<details>
<summary><code>getFuturesLeadTraderStatusTrade(request: CopyTrading.GetFuturesLeadTraderStatusTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CopyTradingFuturesUserStatusResponse, CopyTrading.GetFuturesLeadTraderStatusTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Futures Lead Trader Status

Weight(UID): 20

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.copyTrading.getFuturesLeadTraderStatusTrade({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1CopyTradingFuturesUserStatusResponse
} catch (err) {
  if (err instanceof CopyTrading.GetFuturesLeadTraderStatusTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CopyTradingFuturesUserStatusResponse](src/models/sapi-v1-copy-trading-futures-user-status-response.ts)</code>

**OnError**: <code>[CopyTrading.GetFuturesLeadTraderStatusTradeError](src/resources/copy-trading.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFuturesLeadTradingSymbolWhitelistUserData(request: CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1CopyTradingFuturesLeadSymbolResponse, CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Futures Lead Trading Symbol Whitelist

Weight(IP): 20

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.copyTrading.getFuturesLeadTradingSymbolWhitelistUserData({
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1CopyTradingFuturesLeadSymbolResponse
} catch (err) {
  if (
    err instanceof CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataError &&
      err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1CopyTradingFuturesLeadSymbolResponse](src/models/sapi-v1-copy-trading-futures-lead-symbol-response.ts)</code>

**OnError**: <code>[CopyTrading.GetFuturesLeadTradingSymbolWhitelistUserDataError](src/resources/copy-trading.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SimpleEarn

> Source: [SimpleEarn](src/resources/simple-earn.ts)

<details>
<summary><code>getCollateralRecordUserData(request: SimpleEarn.GetCollateralRecordUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse, SimpleEarn.GetCollateralRecordUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getCollateralRecordUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetCollateralRecordUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>productId?</code> | <code>string</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse](src/models/sapi-v1-simple-earn-flexible-history-collateral-record-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetCollateralRecordUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFlexiblePersonalLeftQuotaUserData(request: SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse, SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getFlexiblePersonalLeftQuotaUserData({
    productId,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexiblePersonalLeftQuotaResponse](src/models/sapi-v1-simple-earn-flexible-personal-left-quota-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetFlexiblePersonalLeftQuotaUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFlexibleProductPositionUserData(request: SimpleEarn.GetFlexibleProductPositionUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexiblePositionResponse, SimpleEarn.GetFlexibleProductPositionUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getFlexibleProductPositionUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexiblePositionResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetFlexibleProductPositionUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>productId?</code> | <code>string</code> | - |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexiblePositionResponse](src/models/sapi-v1-simple-earn-flexible-position-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetFlexibleProductPositionUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFlexibleRedemptionRecordUserData(request: SimpleEarn.GetFlexibleRedemptionRecordUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse, SimpleEarn.GetFlexibleRedemptionRecordUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getFlexibleRedemptionRecordUserData();
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetFlexibleRedemptionRecordUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId?</code> | <code>string</code> | - |
| <code>redeemId?</code> | <code>string</code> | - |
| <code>asset?</code> | <code>string</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse](src/models/sapi-v1-simple-earn-flexible-history-redemption-record-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetFlexibleRedemptionRecordUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFlexibleRewardsHistoryUserData(request: SimpleEarn.GetFlexibleRewardsHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse, SimpleEarn.GetFlexibleRewardsHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getFlexibleRewardsHistoryUserData({ type });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetFlexibleRewardsHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>string</code> | "BONUS", "REALTIME", "REWARDS" |
| <code>productId?</code> | <code>string</code> | - |
| <code>asset?</code> | <code>string</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse](src/models/sapi-v1-simple-earn-flexible-history-rewards-record-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetFlexibleRewardsHistoryUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFlexibleSubscriptionPreviewUserData(request: SimpleEarn.GetFlexibleSubscriptionPreviewUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse, SimpleEarn.GetFlexibleSubscriptionPreviewUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getFlexibleSubscriptionPreviewUserData({
    productId,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetFlexibleSubscriptionPreviewUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse](src/models/sapi-v1-simple-earn-flexible-subscription-preview-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetFlexibleSubscriptionPreviewUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFlexibleSubscriptionRecordUserData(request: SimpleEarn.GetFlexibleSubscriptionRecordUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse, SimpleEarn.GetFlexibleSubscriptionRecordUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getFlexibleSubscriptionRecordUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetFlexibleSubscriptionRecordUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>productId?</code> | <code>string</code> | - |
| <code>purchaseId?</code> | <code>string</code> | - |
| <code>asset?</code> | <code>string</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse](src/models/sapi-v1-simple-earn-flexible-history-subscription-record-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetFlexibleSubscriptionRecordUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLockedPersonalLeftQuotaUserData(request: SimpleEarn.GetLockedPersonalLeftQuotaUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedPersonalLeftQuotaResponse, SimpleEarn.GetLockedPersonalLeftQuotaUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getLockedPersonalLeftQuotaUserData({
    projectId,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedPersonalLeftQuotaResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetLockedPersonalLeftQuotaUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedPersonalLeftQuotaResponse](src/models/sapi-v1-simple-earn-locked-personal-left-quota-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetLockedPersonalLeftQuotaUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLockedProductPositionUserData(request: SimpleEarn.GetLockedProductPositionUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedPositionResponse, SimpleEarn.GetLockedProductPositionUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getLockedProductPositionUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedPositionResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetLockedProductPositionUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>positionId?</code> | <code>string</code> | - |
| <code>projectId?</code> | <code>string</code> | - |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedPositionResponse](src/models/sapi-v1-simple-earn-locked-position-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetLockedProductPositionUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLockedRedemptionRecordUserData(request: SimpleEarn.GetLockedRedemptionRecordUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse, SimpleEarn.GetLockedRedemptionRecordUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getLockedRedemptionRecordUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetLockedRedemptionRecordUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>positionId?</code> | <code>string</code> | - |
| <code>redeemId?</code> | <code>string</code> | - |
| <code>asset?</code> | <code>string</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse](src/models/sapi-v1-simple-earn-locked-history-redemption-record-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetLockedRedemptionRecordUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLockedRewardsHistoryUserData(request: SimpleEarn.GetLockedRewardsHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedHistoryRewardsRecordResponse, SimpleEarn.GetLockedRewardsHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getLockedRewardsHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedHistoryRewardsRecordResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetLockedRewardsHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>positionId?</code> | <code>string</code> | - |
| <code>asset?</code> | <code>string</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedHistoryRewardsRecordResponse](src/models/sapi-v1-simple-earn-locked-history-rewards-record-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetLockedRewardsHistoryUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLockedSubscriptionPreviewUserData(request: SimpleEarn.GetLockedSubscriptionPreviewUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedSubscriptionPreviewResponse[], SimpleEarn.GetLockedSubscriptionPreviewUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getLockedSubscriptionPreviewUserData({
    projectId,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedSubscriptionPreviewResponse[]
} catch (err) {
  if (err instanceof SimpleEarn.GetLockedSubscriptionPreviewUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>autoSubscribe?</code> | <code>boolean</code> | true or false, default true. |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedSubscriptionPreviewResponse](src/models/sapi-v1-simple-earn-locked-subscription-preview-response.ts)[]</code>

**OnError**: <code>[SimpleEarn.GetLockedSubscriptionPreviewUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLockedSubscriptionRecordUserData(request: SimpleEarn.GetLockedSubscriptionRecordUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse, SimpleEarn.GetLockedSubscriptionRecordUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getLockedSubscriptionRecordUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetLockedSubscriptionRecordUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>purchaseId?</code> | <code>string</code> | - |
| <code>asset?</code> | <code>string</code> | - |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse](src/models/sapi-v1-simple-earn-locked-history-subscription-record-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetLockedSubscriptionRecordUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRateHistoryUserData(request: SimpleEarn.GetRateHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse, SimpleEarn.GetRateHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getRateHistoryUserData({ productId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetRateHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse](src/models/sapi-v1-simple-earn-flexible-history-rate-history-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetRateHistoryUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSimpleEarnFlexibleProductListUserData(request: SimpleEarn.GetSimpleEarnFlexibleProductListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleListResponse, SimpleEarn.GetSimpleEarnFlexibleProductListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get available Simple Earn flexible product list

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getSimpleEarnFlexibleProductListUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleListResponse
} catch (err) {
  if (
    err instanceof SimpleEarn.GetSimpleEarnFlexibleProductListUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleListResponse](src/models/sapi-v1-simple-earn-flexible-list-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetSimpleEarnFlexibleProductListUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSimpleEarnLockedProductListUserData(request: SimpleEarn.GetSimpleEarnLockedProductListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedListResponse, SimpleEarn.GetSimpleEarnLockedProductListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.getSimpleEarnLockedProductListUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedListResponse
} catch (err) {
  if (err instanceof SimpleEarn.GetSimpleEarnLockedProductListUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | - |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedListResponse](src/models/sapi-v1-simple-earn-locked-list-response.ts)</code>

**OnError**: <code>[SimpleEarn.GetSimpleEarnLockedProductListUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>redeemFlexibleProductTrade(request: SimpleEarn.RedeemFlexibleProductTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleRedeemResponse, SimpleEarn.RedeemFlexibleProductTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

Rate Limit: 1/3s per account

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.redeemFlexibleProductTrade({ productId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleRedeemResponse
} catch (err) {
  if (err instanceof SimpleEarn.RedeemFlexibleProductTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>redeemAll?</code> | <code>boolean</code> | true or false, default to false |
| <code>amount?</code> | <code>number</code> | if redeemAll is false, amount is mandatory |
| <code>destAccount?</code> | <code>string</code> | SPOT,FUND,ALL, default SPOT |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleRedeemResponse](src/models/sapi-v1-simple-earn-flexible-redeem-response.ts)</code>

**OnError**: <code>[SimpleEarn.RedeemFlexibleProductTradeError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>redeemLockedProductTrade(request: SimpleEarn.RedeemLockedProductTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedRedeemResponse, SimpleEarn.RedeemLockedProductTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

Rate Limit: 1/3s per account

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.redeemLockedProductTrade({ positionId, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedRedeemResponse
} catch (err) {
  if (err instanceof SimpleEarn.RedeemLockedProductTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>positionId</code> | <code>string</code> | 1234 |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedRedeemResponse](src/models/sapi-v1-simple-earn-locked-redeem-response.ts)</code>

**OnError**: <code>[SimpleEarn.RedeemLockedProductTradeError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setFlexibleAutoSubscribeUserData(request: SimpleEarn.SetFlexibleAutoSubscribeUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse, SimpleEarn.SetFlexibleAutoSubscribeUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.setFlexibleAutoSubscribeUserData({
    productId,
    autoSubscribe,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse
} catch (err) {
  if (err instanceof SimpleEarn.SetFlexibleAutoSubscribeUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>string</code> | - |
| <code>autoSubscribe</code> | <code>boolean</code> | true or false |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleSetAutoSubscribeResponse](src/models/sapi-v1-simple-earn-flexible-set-auto-subscribe-response.ts)</code>

**OnError**: <code>[SimpleEarn.SetFlexibleAutoSubscribeUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setLockedAutoSubscribeUserData(request: SimpleEarn.SetLockedAutoSubscribeUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedSetAutoSubscribeResponse, SimpleEarn.SetLockedAutoSubscribeUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.setLockedAutoSubscribeUserData({
    positionId,
    autoSubscribe,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedSetAutoSubscribeResponse
} catch (err) {
  if (err instanceof SimpleEarn.SetLockedAutoSubscribeUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>positionId</code> | <code>string</code> | - |
| <code>autoSubscribe</code> | <code>boolean</code> | true or false |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedSetAutoSubscribeResponse](src/models/sapi-v1-simple-earn-locked-set-auto-subscribe-response.ts)</code>

**OnError**: <code>[SimpleEarn.SetLockedAutoSubscribeUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setLockedProductRedeemOptionUserData(request: SimpleEarn.SetLockedProductRedeemOptionUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedSetRedeemOptionResponse, SimpleEarn.SetLockedProductRedeemOptionUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set redeem option for Locked product

Weight(IP): 50

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.setLockedProductRedeemOptionUserData({
    positionId,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedSetRedeemOptionResponse
} catch (err) {
  if (err instanceof SimpleEarn.SetLockedProductRedeemOptionUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>positionId</code> | <code>string</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>redeemTo?</code> | <code>[RedeemTo](src/models/redeem-to.ts)</code> | SPOT,FLEXIBLE, default FLEXIBLE |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedSetRedeemOptionResponse](src/models/sapi-v1-simple-earn-locked-set-redeem-option-response.ts)</code>

**OnError**: <code>[SimpleEarn.SetLockedProductRedeemOptionUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>simpleAccountUserData(request: SimpleEarn.SimpleAccountUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnAccountResponse, SimpleEarn.SimpleAccountUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.simpleAccountUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1SimpleEarnAccountResponse
} catch (err) {
  if (err instanceof SimpleEarn.SimpleAccountUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnAccountResponse](src/models/sapi-v1-simple-earn-account-response.ts)</code>

**OnError**: <code>[SimpleEarn.SimpleAccountUserDataError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribeFlexibleProductTrade(request: SimpleEarn.SubscribeFlexibleProductTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnFlexibleSubscribeResponse, SimpleEarn.SubscribeFlexibleProductTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

Rate Limit: 1/3s per account

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.subscribeFlexibleProductTrade({
    productId,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SimpleEarnFlexibleSubscribeResponse
} catch (err) {
  if (err instanceof SimpleEarn.SubscribeFlexibleProductTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>autoSubscribe?</code> | <code>boolean</code> | true or false, default true. |
| <code>sourceAccount?</code> | <code>string</code> | SPOT,FUND,ALL, default SPOT |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnFlexibleSubscribeResponse](src/models/sapi-v1-simple-earn-flexible-subscribe-response.ts)</code>

**OnError**: <code>[SimpleEarn.SubscribeFlexibleProductTradeError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribeLockedProductTrade(request: SimpleEarn.SubscribeLockedProductTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1SimpleEarnLockedSubscribeResponse, SimpleEarn.SubscribeLockedProductTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 1

Rate Limit: 1/3s per account

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simpleEarn.subscribeLockedProductTrade({
    projectId,
    amount,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1SimpleEarnLockedSubscribeResponse
} catch (err) {
  if (err instanceof SimpleEarn.SubscribeLockedProductTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | - |
| <code>amount</code> | <code>number</code> | - |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>autoSubscribe?</code> | <code>boolean</code> | true or false, default true. |
| <code>sourceAccount?</code> | <code>string</code> | SPOT,FUND,ALL, default SPOT |
| <code>redeemTo?</code> | <code>[RedeemTo](src/models/redeem-to.ts)</code> | SPOT,FLEXIBLE, default FLEXIBLE |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1SimpleEarnLockedSubscribeResponse](src/models/sapi-v1-simple-earn-locked-subscribe-response.ts)</code>

**OnError**: <code>[SimpleEarn.SubscribeLockedProductTradeError](src/resources/simple-earn.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Staking

> Source: [Staking](src/resources/staking.ts)

<details>
<summary><code>ethStakingAccountV2UserData(request: Staking.EthStakingAccountV2UserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV2EthStakingAccountResponse, Staking.EthStakingAccountV2UserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.ethStakingAccountV2UserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV2EthStakingAccountResponse
} catch (err) {
  if (err instanceof Staking.EthStakingAccountV2UserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2EthStakingAccountResponse](src/models/sapi-v2-eth-staking-account-response.ts)</code>

**OnError**: <code>[Staking.EthStakingAccountV2UserDataError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBethRewardsDistributionHistoryUserData(request: Staking.GetBethRewardsDistributionHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingEthHistoryRewardsHistoryResponse, Staking.GetBethRewardsDistributionHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.getBethRewardsDistributionHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingEthHistoryRewardsHistoryResponse
} catch (err) {
  if (err instanceof Staking.GetBethRewardsDistributionHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingEthHistoryRewardsHistoryResponse](src/models/sapi-v1-eth-staking-eth-history-rewards-history-response.ts)</code>

**OnError**: <code>[Staking.GetBethRewardsDistributionHistoryUserDataError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEthRedemptionHistoryUserData(request: Staking.GetEthRedemptionHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingEthHistoryRedemptionHistoryResponse, Staking.GetEthRedemptionHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.getEthRedemptionHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingEthHistoryRedemptionHistoryResponse
} catch (err) {
  if (err instanceof Staking.GetEthRedemptionHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingEthHistoryRedemptionHistoryResponse](src/models/sapi-v1-eth-staking-eth-history-redemption-history-response.ts)</code>

**OnError**: <code>[Staking.GetEthRedemptionHistoryUserDataError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEthStakingHistoryUserData(request: Staking.GetEthStakingHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingEthHistoryStakingHistoryResponse, Staking.GetEthStakingHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.getEthStakingHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingEthHistoryStakingHistoryResponse
} catch (err) {
  if (err instanceof Staking.GetEthStakingHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingEthHistoryStakingHistoryResponse](src/models/sapi-v1-eth-staking-eth-history-staking-history-response.ts)</code>

**OnError**: <code>[Staking.GetEthStakingHistoryUserDataError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWbethRateHistoryUserData(request: Staking.GetWbethRateHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingEthHistoryRateHistoryResponse, Staking.GetWbethRateHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.getWbethRateHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingEthHistoryRateHistoryResponse
} catch (err) {
  if (err instanceof Staking.GetWbethRateHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingEthHistoryRateHistoryResponse](src/models/sapi-v1-eth-staking-eth-history-rate-history-response.ts)</code>

**OnError**: <code>[Staking.GetWbethRateHistoryUserDataError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWbethRewardsHistoryUserData(request: Staking.GetWbethRewardsHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse, Staking.GetWbethRewardsHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.getWbethRewardsHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse
} catch (err) {
  if (err instanceof Staking.GetWbethRewardsHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse](src/models/sapi-v1-eth-staking-eth-history-wbeth-rewards-history-response.ts)</code>

**OnError**: <code>[Staking.GetWbethRewardsHistoryUserDataError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWbethUnwrapHistoryUserData(request: Staking.GetWbethUnwrapHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingWbethHistoryUnwrapHistoryResponse, Staking.GetWbethUnwrapHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.getWbethUnwrapHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingWbethHistoryUnwrapHistoryResponse
} catch (err) {
  if (err instanceof Staking.GetWbethUnwrapHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingWbethHistoryUnwrapHistoryResponse](src/models/sapi-v1-eth-staking-wbeth-history-unwrap-history-response.ts)</code>

**OnError**: <code>[Staking.GetWbethUnwrapHistoryUserDataError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWbethWrapHistoryUserData(request: Staking.GetWbethWrapHistoryUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingWbethHistoryWrapHistoryResponse, Staking.GetWbethWrapHistoryUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.getWbethWrapHistoryUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingWbethHistoryWrapHistoryResponse
} catch (err) {
  if (err instanceof Staking.GetWbethWrapHistoryUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>startTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>endTime?</code> | <code>number</code> | UTC timestamp in ms |
| <code>current?</code> | <code>number</code> | Current querying page. Start from 1. Default:1 |
| <code>size?</code> | <code>number</code> | Default:10 Max:100 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingWbethHistoryWrapHistoryResponse](src/models/sapi-v1-eth-staking-wbeth-history-wrap-history-response.ts)</code>

**OnError**: <code>[Staking.GetWbethWrapHistoryUserDataError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCurrentEthStakingQuotaUserData(request: Staking.GetCurrentEthStakingQuotaUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingEthQuotaResponse, Staking.GetCurrentEthStakingQuotaUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.getCurrentEthStakingQuotaUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingEthQuotaResponse
} catch (err) {
  if (err instanceof Staking.GetCurrentEthStakingQuotaUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingEthQuotaResponse](src/models/sapi-v1-eth-staking-eth-quota-response.ts)</code>

**OnError**: <code>[Staking.GetCurrentEthStakingQuotaUserDataError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>redeemEthTrade(request: Staking.RedeemEthTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingEthRedeemResponse, Staking.RedeemEthTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Redeem WBETH or BETH and get ETH

- You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.redeemEthTrade({ amount, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingEthRedeemResponse
} catch (err) {
  if (err instanceof Staking.RedeemEthTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>amount</code> | <code>number</code> | Amount in BETH, limit 8 decimals |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>asset?</code> | <code>string</code> | WBETH or BETH, default to BETH |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingEthRedeemResponse](src/models/sapi-v1-eth-staking-eth-redeem-response.ts)</code>

**OnError**: <code>[Staking.RedeemEthTradeError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribeEthStakingV2Trade(request: Staking.SubscribeEthStakingV2TradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV2EthStakingEthStakeResponse, Staking.SubscribeEthStakingV2TradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stake ETH to get WBETH

- You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.subscribeEthStakingV2Trade({ amount, timestamp, signature });
  // TODO: Handle 'response' of type SapiV2EthStakingEthStakeResponse
} catch (err) {
  if (err instanceof Staking.SubscribeEthStakingV2TradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>amount</code> | <code>number</code> | Amount in ETH, limit 4 decimals |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV2EthStakingEthStakeResponse](src/models/sapi-v2-eth-staking-eth-stake-response.ts)</code>

**OnError**: <code>[Staking.SubscribeEthStakingV2TradeError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wrapBethTrade(request: Staking.WrapBethTradeRequest, options?: RequestOptions): ApiPromise&lt;SapiV1EthStakingWbethWrapResponse, Staking.WrapBethTradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

- You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.

Weight(IP): 150

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.staking.wrapBethTrade({ amount, timestamp, signature });
  // TODO: Handle 'response' of type SapiV1EthStakingWbethWrapResponse
} catch (err) {
  if (err instanceof Staking.WrapBethTradeError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>amount</code> | <code>number</code> | Amount in BETH, limit 4 decimals |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1EthStakingWbethWrapResponse](src/models/sapi-v1-eth-staking-wbeth-wrap-response.ts)</code>

**OnError**: <code>[Staking.WrapBethTradeError](src/resources/staking.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DualInvestment

> Source: [DualInvestment](src/resources/dual-investment.ts)

<details>
<summary><code>changeAutoCompoundStatusUserData(request: DualInvestment.ChangeAutoCompoundStatusUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1DciProductAutoCompoundEditStatusResponse, DualInvestment.ChangeAutoCompoundStatusUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change Auto-Compound status

- 15:31 ~ 16:00 UTC+8 This function is disabled

Weight(IP): 1

Rate Limit: Maximum 1 time/s per account

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dualInvestment.changeAutoCompoundStatusUserData({
    positionId,
    autoCompoundPlan,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1DciProductAutoCompoundEditStatusResponse
} catch (err) {
  if (err instanceof DualInvestment.ChangeAutoCompoundStatusUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>positionId</code> | <code>number</code> | Get positionId from /sapi/v1/dci/product/positions |
| <code>autoCompoundPlan</code> | <code>[AutoCompoundPlan](src/models/auto-compound-plan.ts)</code> | NONE: switch off the plan,<br>STANDARD: standard plan,<br>ADVANCED: advanced plan; |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1DciProductAutoCompoundEditStatusResponse](src/models/sapi-v1-dci-product-auto-compound-edit-status-response.ts)</code>

**OnError**: <code>[DualInvestment.ChangeAutoCompoundStatusUserDataError](src/resources/dual-investment.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkDualInvestmentAccountsUserData(request: DualInvestment.CheckDualInvestmentAccountsUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1DciProductAccountsResponse, DualInvestment.CheckDualInvestmentAccountsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check Dual Investment accounts

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dualInvestment.checkDualInvestmentAccountsUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1DciProductAccountsResponse
} catch (err) {
  if (
    err instanceof DualInvestment.CheckDualInvestmentAccountsUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1DciProductAccountsResponse](src/models/sapi-v1-dci-product-accounts-response.ts)</code>

**OnError**: <code>[DualInvestment.CheckDualInvestmentAccountsUserDataError](src/resources/dual-investment.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDualInvestmentPositionsUserData(request: DualInvestment.GetDualInvestmentPositionsUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1DciProductPositionsResponse, DualInvestment.GetDualInvestmentPositionsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Dual Investment positions (batch)

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dualInvestment.getDualInvestmentPositionsUserData({ timestamp, signature });
  // TODO: Handle 'response' of type SapiV1DciProductPositionsResponse
} catch (err) {
  if (err instanceof DualInvestment.GetDualInvestmentPositionsUserDataError && err.payload.kind === "error") {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>status?</code> | <code>[Status2](src/models/status2.ts)</code> | - PENDING: Products are purchasing, will give results later;<br>- PURCHASE_SUCCESS: purchase successfully;<br>- SETTLED: Products are finish settling;<br>- PURCHASE_FAIL: fail to purchase;<br>- REFUNDING: refund ongoing;<br>- REFUND_SUCCESS: refund to spot account successfully;<br>- SETTLING: Products are settling.<br>If don't fill this field, will response all the position status. |
| <code>pageSize?</code> | <code>string</code> | MIN 1, MAX 100; Default 100 |
| <code>pageIndex?</code> | <code>number</code> | Page number, default is first page, start form 1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1DciProductPositionsResponse](src/models/sapi-v1-dci-product-positions-response.ts)</code>

**OnError**: <code>[DualInvestment.GetDualInvestmentPositionsUserDataError](src/resources/dual-investment.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDualInvestmentProductListUserData(request: DualInvestment.GetDualInvestmentProductListUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1DciProductListResponse, DualInvestment.GetDualInvestmentProductListUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Dual Investment product list

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dualInvestment.getDualInvestmentProductListUserData({
    optionType,
    exercisedCoin,
    investCoin,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1DciProductListResponse
} catch (err) {
  if (
    err instanceof DualInvestment.GetDualInvestmentProductListUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optionType</code> | <code>[OptionType](src/models/option-type.ts)</code> | Input CALL or PUT |
| <code>exercisedCoin</code> | <code>string</code> | Target exercised asset, e.g.:<br>if you subscribe to a high sell product (call option), you should input:<br>  - optionType: CALL,<br>  - exercisedCoin: USDT,<br>  - investCoin: BNB;<br><br>if you subscribe to a low buy product (put option), you should input:<br>  - optionType: PUT,<br>  - exercisedCoin: BNB,<br>  - investCoin: USDT; |
| <code>investCoin</code> | <code>string</code> | Asset used for subscribing, e.g.:<br>if you subscribe to a high sell product (call option), you should input:<br>  - optionType: CALL,<br>  - exercisedCoin: USDT,<br>  - investCoin: BNB;<br><br>if you subscribe to a low buy product (put option), you should input:<br>  - optionType: PUT,<br>  - exercisedCoin: BNB,<br>  - investCoin: USDT; |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>pageSize?</code> | <code>string</code> | MIN 1, MAX 100; Default 100 |
| <code>pageIndex?</code> | <code>number</code> | Page number, default is first page, start form 1 |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1DciProductListResponse](src/models/sapi-v1-dci-product-list-response.ts)</code>

**OnError**: <code>[DualInvestment.GetDualInvestmentProductListUserDataError](src/resources/dual-investment.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribeDualInvestmentProductsUserData(request: DualInvestment.SubscribeDualInvestmentProductsUserDataRequest, options?: RequestOptions): ApiPromise&lt;SapiV1DciProductSubscribeResponse, DualInvestment.SubscribeDualInvestmentProductsUserDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe Dual Investment products

- `Products are not available.` means that the APR changes to lower value, or the orders are not available.
- `Failed` is a system or network errors.

Weight(IP): 1

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dualInvestment.subscribeDualInvestmentProductsUserData({
    id,
    orderId,
    depositAmount,
    autoCompoundPlan,
    timestamp,
    signature,
  });
  // TODO: Handle 'response' of type SapiV1DciProductSubscribeResponse
} catch (err) {
  if (
    err instanceof DualInvestment.SubscribeDualInvestmentProductsUserDataError && err.payload.kind === "error"
  ) {
    // TODO: Handle 'err.payload.body' of type Error
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | get id from /sapi/v1/dci/product/list |
| <code>orderId</code> | <code>string</code> | get orderId from /sapi/v1/dci/product/list |
| <code>depositAmount</code> | <code>number</code> | - |
| <code>autoCompoundPlan</code> | <code>[AutoCompoundPlan](src/models/auto-compound-plan.ts)</code> | NONE: switch off the plan,<br>STANDARD: standard plan,<br>ADVANCED: advanced plan; |
| <code>timestamp</code> | <code>number</code> | UTC timestamp in ms |
| <code>signature</code> | <code>string</code> | Signature |
| <code>recvWindow?</code> | <code>number</code> | The value cannot be greater than 60000 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SapiV1DciProductSubscribeResponse](src/models/sapi-v1-dci-product-subscribe-response.ts)</code>

**OnError**: <code>[DualInvestment.SubscribeDualInvestmentProductsUserDataError](src/resources/dual-investment.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

