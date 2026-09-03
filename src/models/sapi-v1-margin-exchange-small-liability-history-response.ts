import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row5Schema, type Row5 } from "./row5.js";

export type SapiV1MarginExchangeSmallLiabilityHistoryResponse = {
  total: number;
  rows: Row5[];
};

export const sapiV1MarginExchangeSmallLiabilityHistoryResponseSchema: Schema<SapiV1MarginExchangeSmallLiabilityHistoryResponse> =
  s.object<SapiV1MarginExchangeSmallLiabilityHistoryResponse>({
    total: s.number(),
    rows: s.array(s.lazy(() => row5Schema)),
  });
