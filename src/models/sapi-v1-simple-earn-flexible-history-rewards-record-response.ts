import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row46Schema, type Row46 } from "./row46.js";

export type SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse = {
  rows: Row46[];
  total: number;
};

export const sapiV1SimpleEarnFlexibleHistoryRewardsRecordResponseSchema: Schema<SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse> =
  s.object<SapiV1SimpleEarnFlexibleHistoryRewardsRecordResponse>({
    rows: s.array(s.lazy(() => row46Schema)),
    total: s.int(),
  });
