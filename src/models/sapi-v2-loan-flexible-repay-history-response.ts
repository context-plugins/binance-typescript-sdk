import { s, type Schema } from "../core/index.js";
import { row27Schema, type Row27 } from "./row27.js";

export type SapiV2LoanFlexibleRepayHistoryResponse = {
  rows: Row27[];
  total: number;
};

export const sapiV2LoanFlexibleRepayHistoryResponseSchema: Schema<SapiV2LoanFlexibleRepayHistoryResponse> =
  s.object<SapiV2LoanFlexibleRepayHistoryResponse>({
    rows: s.array(s.lazy(() => row27Schema)),
    total: s.number(),
  });
