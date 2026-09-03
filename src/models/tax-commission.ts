import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaxCommission = {
  maker: string;
  taker: string;
  buyer: string;
  seller: string;
};

export const taxCommissionSchema: Schema<TaxCommission> = s.object<TaxCommission>({
  maker: s.string(),
  taker: s.string(),
  buyer: s.string(),
  seller: s.string(),
});
