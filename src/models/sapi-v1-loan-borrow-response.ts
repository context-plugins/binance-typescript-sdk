import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LoanBorrowResponse = {
  loanCoin: string;
  loanAmount: string;
  collateralCoin: string;
  collateralAmount: string;
  hourlyInterestRate: string;
  orderId: string;
};

export const sapiV1LoanBorrowResponseSchema: Schema<SapiV1LoanBorrowResponse> =
  s.object<SapiV1LoanBorrowResponse>({
    loanCoin: s.string(),
    loanAmount: s.string(),
    collateralCoin: s.string(),
    collateralAmount: s.string(),
    hourlyInterestRate: s.string(),
    orderId: s.string(),
  });
