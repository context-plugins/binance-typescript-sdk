import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
