import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row16Schema, type Row16 } from "./row16.js";

export type SapiV1LoanVipCollateralDataResponse = {
  rows: Row16[];
  total: number;
};

export const sapiV1LoanVipCollateralDataResponseSchema: Schema<SapiV1LoanVipCollateralDataResponse> =
  s.object<SapiV1LoanVipCollateralDataResponse>({
    rows: s.array(s.lazy(() => row16Schema)),
    total: s.int(),
  });
