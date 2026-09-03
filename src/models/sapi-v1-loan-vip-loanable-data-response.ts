import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row15Schema, type Row15 } from "./row15.js";

export type SapiV1LoanVipLoanableDataResponse = {
  total: number;
  rows: Row15[];
};

export const sapiV1LoanVipLoanableDataResponseSchema: Schema<SapiV1LoanVipLoanableDataResponse> =
  s.object<SapiV1LoanVipLoanableDataResponse>({
    total: s.number(),
    rows: s.array(s.lazy(() => row15Schema)),
  });
