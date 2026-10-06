import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row43Schema, type Row43 } from "./row43.js";

export type SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse = {
  rows: Row43[];
  total: number;
};

export const sapiV1SimpleEarnLockedHistorySubscriptionRecordResponseSchema: Schema<SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse> =
  s.object<SapiV1SimpleEarnLockedHistorySubscriptionRecordResponse>({
    rows: s.array(s.lazy(() => row43Schema)),
    total: s.int(),
  });
