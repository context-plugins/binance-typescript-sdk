import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row13 = {
  loanCoin: string;
  repayAmount: string;
  collateralCoin: string;
  /** Repaid, Repaying, Failed */
  repayStatus: string;
  repayTime: string;
  orderId: string;
};

export const row13Schema: Schema<Row13> = s.object<Row13>({
  loanCoin: s.string(),
  repayAmount: s.string(),
  collateralCoin: s.string(),
  repayStatus: s.string(),
  repayTime: s.string(),
  orderId: s.string(),
});
