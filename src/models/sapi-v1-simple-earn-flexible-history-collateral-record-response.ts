import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row49Schema, type Row49 } from "./row49.js";

export type SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse = {
  rows: Row49[];
  total: number;
};

export const sapiV1SimpleEarnFlexibleHistoryCollateralRecordResponseSchema: Schema<SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse> =
  s.object<SapiV1SimpleEarnFlexibleHistoryCollateralRecordResponse>({
    rows: s.array(s.lazy(() => row49Schema)),
    total: s.number(),
  });
