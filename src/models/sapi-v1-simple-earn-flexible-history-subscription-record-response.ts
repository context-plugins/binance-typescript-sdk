import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row42Schema, type Row42 } from "./row42.js";

export type SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse = {
  rows: Row42[];
  total: number;
};

export const sapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponseSchema: Schema<SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse> =
  s.object<SapiV1SimpleEarnFlexibleHistorySubscriptionRecordResponse>({
    rows: s.array(s.lazy(() => row42Schema)),
    total: s.number(),
  });
