import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row39Schema, type Row39 } from "./row39.js";

export type SapiV1SimpleEarnLockedListResponse = {
  rows: Row39[];
  total: number;
};

export const sapiV1SimpleEarnLockedListResponseSchema: Schema<SapiV1SimpleEarnLockedListResponse> =
  s.object<SapiV1SimpleEarnLockedListResponse>({
    rows: s.array(s.lazy(() => row39Schema)),
    total: s.int(),
  });
