import { s, type Schema } from "../core/index.js";
import { row21Schema, type Row21 } from "./row21.js";

export type SapiV1LoanLtvAdjustmentHistoryResponse = {
  rows: Row21[];
  total: number;
};

export const sapiV1LoanLtvAdjustmentHistoryResponseSchema: Schema<SapiV1LoanLtvAdjustmentHistoryResponse> =
  s.object<SapiV1LoanLtvAdjustmentHistoryResponse>({
    rows: s.array(s.lazy(() => row21Schema)),
    total: s.number(),
  });
