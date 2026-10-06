import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LoanRepayCollateralRateResponse = {
  loanCoin: string;
  collateralCoin: string;
  repayAmount: string;
  /** rate of collateral coin/loan coin */
  rate: string;
};

export const sapiV1LoanRepayCollateralRateResponseSchema: Schema<SapiV1LoanRepayCollateralRateResponse> =
  s.object<SapiV1LoanRepayCollateralRateResponse>({
    loanCoin: s.string(),
    collateralCoin: s.string(),
    repayAmount: s.string(),
    rate: s.string(),
  });
