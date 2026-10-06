import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row23Schema, type Row23 } from "./row23.js";

export type SapiV1LoanCollateralDataResponse = {
  rows: Row23[];
  total: number;
};

export const sapiV1LoanCollateralDataResponseSchema: Schema<SapiV1LoanCollateralDataResponse> =
  s.object<SapiV1LoanCollateralDataResponse>({
    rows: s.array(s.lazy(() => row23Schema)),
    total: s.int(),
  });
