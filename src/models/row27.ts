import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row27 = {
  loanCoin: string;
  repayAmount: string;
  collateralCoin: string;
  collateralReturn: string;
  repayStatus: string;
  repayTime: number;
};

export const row27Schema: Schema<Row27> = s.object<Row27>({
  loanCoin: s.string(),
  repayAmount: s.string(),
  collateralCoin: s.string(),
  collateralReturn: s.string(),
  repayStatus: s.string(),
  repayTime: s.int(),
});
