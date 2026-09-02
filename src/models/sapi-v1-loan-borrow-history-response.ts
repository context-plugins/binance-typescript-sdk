import { s, type Schema } from "../core/index.js";
import { row18Schema, type Row18 } from "./row18.js";

export type SapiV1LoanBorrowHistoryResponse = {
  rows: Row18[];
  total: number;
};

export const sapiV1LoanBorrowHistoryResponseSchema: Schema<SapiV1LoanBorrowHistoryResponse> =
  s.object<SapiV1LoanBorrowHistoryResponse>({
    rows: s.array(s.lazy(() => row18Schema)),
    total: s.number(),
  });
