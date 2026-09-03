import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LoanIncomeResponse = {
  asset: string;
  type: string;
  amount: string;
  timestamp: number;
  tranId: string;
};

export const sapiV1LoanIncomeResponseSchema: Schema<SapiV1LoanIncomeResponse> =
  s.object<SapiV1LoanIncomeResponse>({
    asset: s.string(),
    type: s.string(),
    amount: s.string(),
    timestamp: s.number(),
    tranId: s.string(),
  });
