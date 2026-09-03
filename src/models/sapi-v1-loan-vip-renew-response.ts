import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LoanVipRenewResponse = {
  loanAccountId: string;
  loanCoin: string;
  loanAmount: string;
  collateralAccountId: string;
  collateralCoin: string;
  loanTerm: string;
};

export const sapiV1LoanVipRenewResponseSchema: Schema<SapiV1LoanVipRenewResponse> =
  s.object<SapiV1LoanVipRenewResponse>({
    loanAccountId: s.string(),
    loanCoin: s.string(),
    loanAmount: s.string(),
    collateralAccountId: s.string(),
    collateralCoin: s.string(),
    loanTerm: s.string(),
  });
