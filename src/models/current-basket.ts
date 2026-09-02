import { s, type Schema } from "../core/index.js";

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
