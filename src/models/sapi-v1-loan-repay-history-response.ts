import { s, type Schema } from "../core/index.js";
import { row20Schema, type Row20 } from "./row20.js";

export type SapiV1LoanRepayHistoryResponse = {
  rows: Row20[];
  total: number;
};

export const sapiV1LoanRepayHistoryResponseSchema: Schema<SapiV1LoanRepayHistoryResponse> =
  s.object<SapiV1LoanRepayHistoryResponse>({
    rows: s.array(s.lazy(() => row20Schema)),
    total: s.number(),
  });
