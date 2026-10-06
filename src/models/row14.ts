import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row14 = {
  collateralAccountId: string;
  collateralCoin: string;
  /** locked collateral value shown in USD value */
  collateralValue: string;
};

export const row14Schema: Schema<Row14> = s.object<Row14>({
  collateralAccountId: s.string(),
  collateralCoin: s.string(),
  collateralValue: s.string(),
});
