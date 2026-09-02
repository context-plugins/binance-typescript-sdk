import { s, type Schema } from "../core/index.js";

export type Row18 = {
  orderId: number;
  loanCoin: string;
  initialLoanAmount: string;
  hourlyInterestRate: string;
  loanTerm: string;
  collateralCoin: string;
  initialCollateralAmount: string;
  borrowTime: number;
  status: string;
};

export const row18Schema: Schema<Row18> = s.object<Row18>({
  orderId: s.number(),
  loanCoin: s.string(),
  initialLoanAmount: s.string(),
  hourlyInterestRate: s.string(),
  loanTerm: s.string(),
  collateralCoin: s.string(),
  initialCollateralAmount: s.string(),
  borrowTime: s.number(),
  status: s.string(),
});
