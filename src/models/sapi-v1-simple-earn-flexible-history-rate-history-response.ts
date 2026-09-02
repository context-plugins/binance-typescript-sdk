import { s, type Schema } from "../core/index.js";
import { row48Schema, type Row48 } from "./row48.js";

export type SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse = {
  rows: Row48[];
  total: number;
};

export const sapiV1SimpleEarnFlexibleHistoryRateHistoryResponseSchema: Schema<SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse> =
  s.object<SapiV1SimpleEarnFlexibleHistoryRateHistoryResponse>({
    rows: s.array(s.lazy(() => row48Schema)),
    total: s.number(),
  });
