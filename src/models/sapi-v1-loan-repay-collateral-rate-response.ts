import { s, type Schema } from "../core/index.js";

export type SapiV1LoanRepayCollateralRateResponse = {
  loanCoin: string;
  collateralCoin: string;
  repayAmount: string;
  rate: string;
};

export const sapiV1LoanRepayCollateralRateResponseSchema: Schema<SapiV1LoanRepayCollateralRateResponse> =
  s.object<SapiV1LoanRepayCollateralRateResponse>({
    loanCoin: s.string(),
    collateralCoin: s.string(),
    repayAmount: s.string(),
    rate: s.string(),
  });
