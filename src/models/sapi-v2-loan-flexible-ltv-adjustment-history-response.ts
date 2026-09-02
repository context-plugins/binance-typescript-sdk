import { s, type Schema } from "../core/index.js";
import { row28Schema, type Row28 } from "./row28.js";

export type SapiV2LoanFlexibleLtvAdjustmentHistoryResponse = {
  rows: Row28[];
  total: number;
};

export const sapiV2LoanFlexibleLtvAdjustmentHistoryResponseSchema: Schema<SapiV2LoanFlexibleLtvAdjustmentHistoryResponse> =
  s.object<SapiV2LoanFlexibleLtvAdjustmentHistoryResponse>({
    rows: s.array(s.lazy(() => row28Schema)),
    total: s.number(),
  });
