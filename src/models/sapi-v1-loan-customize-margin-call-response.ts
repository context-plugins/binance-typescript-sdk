import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row24Schema, type Row24 } from "./row24.js";

export type SapiV1LoanCustomizeMarginCallResponse = {
  rows: Row24[];
  total: number;
};

export const sapiV1LoanCustomizeMarginCallResponseSchema: Schema<SapiV1LoanCustomizeMarginCallResponse> =
  s.object<SapiV1LoanCustomizeMarginCallResponse>({
    rows: s.array(s.lazy(() => row24Schema)),
    total: s.int(),
  });
