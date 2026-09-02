import { s, type Schema } from "../core/index.js";

export type SapiV1LoanVipBorrowResponse = {
  loanAccountId: string;
  requestId: string;
  loanCoin: string;
  isFlexibleRate: string;
  loanAmount: string;
  collateralAccountId: string;
  collateralCoin: string;
  loanTerm?: string;
};

export const sapiV1LoanVipBorrowResponseSchema: Schema<SapiV1LoanVipBorrowResponse> =
  s.object<SapiV1LoanVipBorrowResponse>({
    loanAccountId: s.string(),
    requestId: s.string(),
    loanCoin: s.string(),
    isFlexibleRate: s.string(),
    loanAmount: s.string(),
    collateralAccountId: s.string(),
    collateralCoin: s.string(),
    loanTerm: s.optional(s.string()),
  });
