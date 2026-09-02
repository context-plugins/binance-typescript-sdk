import { s, type Schema } from "../core/index.js";

export type Row13 = {
  loanCoin: string;
  repayAmount: string;
  collateralCoin: string;
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
