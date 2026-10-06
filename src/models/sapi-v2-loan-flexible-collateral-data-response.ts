import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row30Schema, type Row30 } from "./row30.js";

export type SapiV2LoanFlexibleCollateralDataResponse = {
  rows: Row30[];
  total: number;
};

export const sapiV2LoanFlexibleCollateralDataResponseSchema: Schema<SapiV2LoanFlexibleCollateralDataResponse> =
  s.object<SapiV2LoanFlexibleCollateralDataResponse>({
    rows: s.array(s.lazy(() => row30Schema)),
    total: s.int(),
  });
