import { s, type Schema } from "../core/index.js";
import { row13Schema, type Row13 } from "./row13.js";

export type SapiV1LoanVipRepayHistoryResponse = {
  rows: Row13[];
  total: number;
};

export const sapiV1LoanVipRepayHistoryResponseSchema: Schema<SapiV1LoanVipRepayHistoryResponse> =
  s.object<SapiV1LoanVipRepayHistoryResponse>({
    rows: s.array(s.lazy(() => row13Schema)),
    total: s.number(),
  });
