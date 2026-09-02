import { s, type Schema } from "../core/index.js";
import { row44Schema, type Row44 } from "./row44.js";

export type SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse = {
  rows: Row44[];
  total: number;
};

export const sapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponseSchema: Schema<SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse> =
  s.object<SapiV1SimpleEarnFlexibleHistoryRedemptionRecordResponse>({
    rows: s.array(s.lazy(() => row44Schema)),
    total: s.number(),
  });
