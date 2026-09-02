import { s, type Schema } from "../core/index.js";
import { row3Schema, type Row3 } from "./row3.js";

export type SapiV1MarginInterestHistoryResponse = {
  rows: Row3[];
  total: number;
};

export const sapiV1MarginInterestHistoryResponseSchema: Schema<SapiV1MarginInterestHistoryResponse> =
  s.object<SapiV1MarginInterestHistoryResponse>({
    rows: s.array(s.lazy(() => row3Schema)),
    total: s.number(),
  });
