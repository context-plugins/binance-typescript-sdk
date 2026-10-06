import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV2LoanFlexibleRepayResponse = {
  loanCoin: string;
  collateralCoin: string;
  remainingDebt: string;
  remainingCollateral: string;
  fullRepayment: boolean;
  currentLtv: string;
  /** Repaid, Repaying, Failed */
  repayStatus: string;
};

export const sapiV2LoanFlexibleRepayResponseSchema: Schema<SapiV2LoanFlexibleRepayResponse> =
  s.object<SapiV2LoanFlexibleRepayResponse>({
    loanCoin: s.string(),
    collateralCoin: s.string(),
    remainingDebt: s.string(),
    remainingCollateral: s.string(),
    fullRepayment: s.boolean(),
    currentLtv: s.string(),
    repayStatus: s.string(),
    _keysMap: {
      currentLtv: "currentLTV",
    },
  });
