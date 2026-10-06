import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginInterestRateHistoryResponse = {
  asset: string;
  dailyInterestRate: string;
  timestamp: number;
  vipLevel: number;
};

export const sapiV1MarginInterestRateHistoryResponseSchema: Schema<SapiV1MarginInterestRateHistoryResponse> =
  s.object<SapiV1MarginInterestRateHistoryResponse>({
    asset: s.string(),
    dailyInterestRate: s.string(),
    timestamp: s.int(),
    vipLevel: s.int(),
  });
