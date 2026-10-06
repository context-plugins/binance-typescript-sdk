import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LoanVipRepayResponse = {
  loanCoin: string;
  repayAmount: string;
  remainingPrincipal: string;
  remainingInterest: string;
  collateralCoin: string;
  currentLtv: string;
  /** Repaid, Repaying, Failed */
  repayStatus: string;
};

export const sapiV1LoanVipRepayResponseSchema: Schema<SapiV1LoanVipRepayResponse> =
  s.object<SapiV1LoanVipRepayResponse>({
    loanCoin: s.string(),
    repayAmount: s.string(),
    remainingPrincipal: s.string(),
    remainingInterest: s.string(),
    collateralCoin: s.string(),
    currentLtv: s.string(),
    repayStatus: s.string(),
    _keysMap: {
      currentLtv: "currentLTV",
    },
  });
