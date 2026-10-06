import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Ticker = {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  prevClosePrice: string;
  lastPrice: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
};

export const tickerSchema: Schema<Ticker> = s.object<Ticker>({
  symbol: s.string(),
  priceChange: s.string(),
  priceChangePercent: s.string(),
  prevClosePrice: s.string(),
  lastPrice: s.string(),
  bidPrice: s.string(),
  bidQty: s.string(),
  askPrice: s.string(),
  askQty: s.string(),
  openPrice: s.string(),
  highPrice: s.string(),
  lowPrice: s.string(),
  volume: s.string(),
  quoteVolume: s.string(),
  openTime: s.int(),
  closeTime: s.int(),
  firstId: s.int(),
  lastId: s.int(),
  count: s.int(),
});
