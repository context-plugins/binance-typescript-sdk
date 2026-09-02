import { s, type Schema } from "../core/index.js";

export type SapiV2LoanFlexibleBorrowResponse = {
  loanCoin: string;
  loanAmount: string;
  collateralCoin?: string;
  collateralAmount: string;
  status: string;
};

export const sapiV2LoanFlexibleBorrowResponseSchema: Schema<SapiV2LoanFlexibleBorrowResponse> =
  s.object<SapiV2LoanFlexibleBorrowResponse>({
    loanCoin: s.string(),
    loanAmount: s.string(),
    collateralCoin: s.optional(s.string()),
    collateralAmount: s.string(),
    status: s.string(),
  });
