import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row45Schema, type Row45 } from "./row45.js";

export type SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse = {
  rows: Row45[];
  total: number;
};

export const sapiV1SimpleEarnLockedHistoryRedemptionRecordResponseSchema: Schema<SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse> =
  s.object<SapiV1SimpleEarnLockedHistoryRedemptionRecordResponse>({
    rows: s.array(s.lazy(() => row45Schema)),
    total: s.int(),
  });
