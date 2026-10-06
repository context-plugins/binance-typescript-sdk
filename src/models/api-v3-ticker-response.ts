import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV3TickerResponse = {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
};

export const apiV3TickerResponseSchema: Schema<ApiV3TickerResponse> = s.object<ApiV3TickerResponse>({
  symbol: s.string(),
  priceChange: s.string(),
  priceChangePercent: s.string(),
  weightedAvgPrice: s.string(),
  openPrice: s.string(),
  highPrice: s.string(),
  lowPrice: s.string(),
  lastPrice: s.string(),
  volume: s.string(),
  quoteVolume: s.string(),
  openTime: s.int(),
  closeTime: s.int(),
  firstId: s.int(),
  lastId: s.int(),
  count: s.int(),
});
