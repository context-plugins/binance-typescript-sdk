import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row47Schema, type Row47 } from "./row47.js";

export type SapiV1SimpleEarnLockedHistoryRewardsRecordResponse = {
  rows: Row47[];
  total: number;
};

export const sapiV1SimpleEarnLockedHistoryRewardsRecordResponseSchema: Schema<SapiV1SimpleEarnLockedHistoryRewardsRecordResponse> =
  s.object<SapiV1SimpleEarnLockedHistoryRewardsRecordResponse>({
    rows: s.array(s.lazy(() => row47Schema)),
    total: s.int(),
  });
