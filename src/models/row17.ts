import { s, type Schema } from "../core/index.js";

export type Row17 = {
  loanAccountId: string;
  orderId: string;
  requestId: string;
  loanCoin: string;
  loanAmount: string;
  collateralAccountId: string;
  collateralCoin: string;
  loanTerm: number;
  status: number;
};

export const row17Schema: Schema<Row17> = s.object<Row17>({
  loanAccountId: s.string(),
  orderId: s.string(),
  requestId: s.string(),
  loanCoin: s.string(),
  loanAmount: s.string(),
  collateralAccountId: s.string(),
  collateralCoin: s.string(),
  loanTerm: s.number(),
  status: s.number(),
});
