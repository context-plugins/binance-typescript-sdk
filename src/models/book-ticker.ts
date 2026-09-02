import { s, type Schema } from "../core/index.js";

export type BookTicker = {
  symbol: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
};

export const bookTickerSchema: Schema<BookTicker> = s.object<BookTicker>({
  symbol: s.string(),
  bidPrice: s.string(),
  bidQty: s.string(),
  askPrice: s.string(),
  askQty: s.string(),
});
