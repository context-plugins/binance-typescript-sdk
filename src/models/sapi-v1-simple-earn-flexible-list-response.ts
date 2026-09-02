import { s, type Schema } from "../core/index.js";
import { row38Schema, type Row38 } from "./row38.js";

export type SapiV1SimpleEarnFlexibleListResponse = {
  rows: Row38[];
  total: number;
};

export const sapiV1SimpleEarnFlexibleListResponseSchema: Schema<SapiV1SimpleEarnFlexibleListResponse> =
  s.object<SapiV1SimpleEarnFlexibleListResponse>({
    rows: s.array(s.lazy(() => row38Schema)),
    total: s.number(),
  });
