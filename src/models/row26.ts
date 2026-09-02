import { s, type Schema } from "../core/index.js";

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
  borrowTime: s.number(),
  status: s.string(),
});
