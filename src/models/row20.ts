import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row20 = {
  loanCoin: string;
  repayAmount: string;
  collateralCoin: string;
  collateralUsed: string;
  collateralReturn: string;
  repayType: string;
  /**
   * 'repayType': '1' // 1 for 'repay with borrowed coin', 2 for 'repay with collateral'
   * 'repayStatus': 'Repaid' // Repaid, Repaying, Failed
   */
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
  repayTime: s.int(),
  orderId: s.int(),
});
