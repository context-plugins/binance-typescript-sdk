import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceTicker = {
  symbol: string;
  price: string;
};

export const priceTickerSchema: Schema<PriceTicker> = s.object<PriceTicker>({
  symbol: s.string(),
  price: s.string(),
});
