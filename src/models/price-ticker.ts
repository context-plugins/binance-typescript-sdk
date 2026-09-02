import { s, type Schema } from "../core/index.js";

export type PriceTicker = {
  symbol: string;
  price: string;
};

export const priceTickerSchema: Schema<PriceTicker> = s.object<PriceTicker>({
  symbol: s.string(),
  price: s.string(),
});
