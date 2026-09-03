import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row26Schema, type Row26 } from "./row26.js";

export type SapiV2LoanFlexibleBorrowHistoryResponse = {
  total: number;
  rows: Row26[];
};

export const sapiV2LoanFlexibleBorrowHistoryResponseSchema: Schema<SapiV2LoanFlexibleBorrowHistoryResponse> =
  s.object<SapiV2LoanFlexibleBorrowHistoryResponse>({
    total: s.number(),
    rows: s.array(s.lazy(() => row26Schema)),
  });
