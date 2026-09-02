import { s, type Schema } from "../core/index.js";

export type DayTicker = {
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
  openTime: s.number(),
  closeTime: s.number(),
  firstId: s.number(),
  lastId: s.number(),
  count: s.number(),
});
