import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row29Schema, type Row29 } from "./row29.js";

export type SapiV2LoanFlexibleLoanableDataResponse = {
  rows: Row29[];
  total: number;
};

export const sapiV2LoanFlexibleLoanableDataResponseSchema: Schema<SapiV2LoanFlexibleLoanableDataResponse> =
  s.object<SapiV2LoanFlexibleLoanableDataResponse>({
    rows: s.array(s.lazy(() => row29Schema)),
    total: s.number(),
  });
