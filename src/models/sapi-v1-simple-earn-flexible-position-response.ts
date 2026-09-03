import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row40Schema, type Row40 } from "./row40.js";

export type SapiV1SimpleEarnFlexiblePositionResponse = {
  rows: Row40[];
  total: number;
};

export const sapiV1SimpleEarnFlexiblePositionResponseSchema: Schema<SapiV1SimpleEarnFlexiblePositionResponse> =
  s.object<SapiV1SimpleEarnFlexiblePositionResponse>({
    rows: s.array(s.lazy(() => row40Schema)),
    total: s.number(),
  });
