import { s, type Schema } from "../core/index.js";
import { row22Schema, type Row22 } from "./row22.js";

export type SapiV1LoanLoanableDataResponse = {
  rows: Row22[];
  total: number;
};

export const sapiV1LoanLoanableDataResponseSchema: Schema<SapiV1LoanLoanableDataResponse> =
  s.object<SapiV1LoanLoanableDataResponse>({
    rows: s.array(s.lazy(() => row22Schema)),
    total: s.number(),
  });
