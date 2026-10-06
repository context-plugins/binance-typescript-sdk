import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DayTicker = {
  symbol: string;
  /** Absolute price change */
  priceChange: string;
  /** Relative price change in percent */
  priceChangePercent: string;
  /** quoteVolume / volume */
  weightedAvgPrice: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
  /** Volume in base asset */
  volume: string;
  /** Volume in quote asset */
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  /** Trade ID of the first trade in the interval */
  firstId: number;
  /** Trade ID of the last trade in the interval */
  lastId: number;
  /** Number of trades in the interval */
  count: number;
};

export const dayTickerSchema: Schema<DayTicker> = s.object<DayTicker>({
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
