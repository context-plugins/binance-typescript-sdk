import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row17Schema, type Row17 } from "./row17.js";

export type SapiV1LoanVipRequestDataResponse = {
  total: number;
  rows: Row17[];
};

export const sapiV1LoanVipRequestDataResponseSchema: Schema<SapiV1LoanVipRequestDataResponse> =
  s.object<SapiV1LoanVipRequestDataResponse>({
    total: s.int(),
    rows: s.array(s.lazy(() => row17Schema)),
  });
