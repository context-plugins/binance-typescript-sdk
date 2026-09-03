import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RepaymentInfo2 = {
  loanCoin: string;
  collateralCoin: string;
  repayStatus: string;
};

export const repaymentInfo2Schema: Schema<RepaymentInfo2> = s.object<RepaymentInfo2>({
  loanCoin: s.string(),
  collateralCoin: s.string(),
  repayStatus: s.string(),
});
