import { s, type Schema } from "../core/index.js";

export type CommissionRates = {
  maker: string;
  taker: string;
  buyer: string;
  seller: string;
};

export const commissionRatesSchema: Schema<CommissionRates> = s.object<CommissionRates>({
  maker: s.string(),
  taker: s.string(),
  buyer: s.string(),
  seller: s.string(),
});
