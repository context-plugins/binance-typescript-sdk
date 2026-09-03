import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CurrentBasket = {
  symbol: string;
  amount: string;
  notionalValue: string;
};

export const currentBasketSchema: Schema<CurrentBasket> = s.object<CurrentBasket>({
  symbol: s.string(),
  amount: s.string(),
  notionalValue: s.string(),
});
