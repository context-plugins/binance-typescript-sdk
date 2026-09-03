import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
