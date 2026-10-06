import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row41Schema, type Row41 } from "./row41.js";

export type SapiV1SimpleEarnLockedPositionResponse = {
  rows: Row41[];
  total: number;
};

export const sapiV1SimpleEarnLockedPositionResponseSchema: Schema<SapiV1SimpleEarnLockedPositionResponse> =
  s.object<SapiV1SimpleEarnLockedPositionResponse>({
    rows: s.array(s.lazy(() => row41Schema)),
    total: s.int(),
  });
