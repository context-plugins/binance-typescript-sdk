import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LoanVipRequestInterestRateResponse = {
  asset: string;
  flexibleDailyInterestRate: string;
  flexibleYearlyInterestRate: string;
  time: number;
};

export const sapiV1LoanVipRequestInterestRateResponseSchema: Schema<SapiV1LoanVipRequestInterestRateResponse> =
  s.object<SapiV1LoanVipRequestInterestRateResponse>({
    asset: s.string(),
    flexibleDailyInterestRate: s.string(),
    flexibleYearlyInterestRate: s.string(),
    time: s.number(),
  });
