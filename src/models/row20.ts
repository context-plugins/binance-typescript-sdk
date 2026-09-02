import { s, type Schema } from "../core/index.js";

export type Row20 = {
  loanCoin: string;
  repayAmount: string;
  collateralCoin: string;
  collateralUsed: string;
  collateralReturn: string;
  repayType: string;
  repayStatus: string;
  repayTime: number;
  orderId: number;
};

export const row20Schema: Schema<Row20> = s.object<Row20>({
  loanCoin: s.string(),
  repayAmount: s.string(),
  collateralCoin: s.string(),
  collateralUsed: s.string(),
  collateralReturn: s.string(),
  repayType: s.string(),
  repayStatus: s.string(),
  repayTime: s.number(),
  orderId: s.number(),
});
