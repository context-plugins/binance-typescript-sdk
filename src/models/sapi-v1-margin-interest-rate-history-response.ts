import { s, type Schema } from "../core/index.js";

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
    timestamp: s.number(),
    vipLevel: s.number(),
  });
