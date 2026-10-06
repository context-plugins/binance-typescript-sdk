import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row26 = {
  loanCoin: string;
  initialLoanAmount: string;
  collateralCoin: string;
  initialCollateralAmount: string;
  borrowTime: number;
  status: string;
};

export const row26Schema: Schema<Row26> = s.object<Row26>({
  loanCoin: s.string(),
  initialLoanAmount: s.string(),
  collateralCoin: s.string(),
  initialCollateralAmount: s.string(),
  borrowTime: s.int(),
  status: s.string(),
});
