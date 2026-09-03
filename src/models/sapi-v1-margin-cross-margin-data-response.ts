import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginCrossMarginDataResponse = {
  vipLevel: number;
  coin: string;
  transferIn: boolean;
  borrowable: boolean;
  dailyInterest: string;
  yearlyInterest: string;
  borrowLimit: string;
  marginablePairs: string[];
};

export const sapiV1MarginCrossMarginDataResponseSchema: Schema<SapiV1MarginCrossMarginDataResponse> =
  s.object<SapiV1MarginCrossMarginDataResponse>({
    vipLevel: s.number(),
    coin: s.string(),
    transferIn: s.boolean(),
    borrowable: s.boolean(),
    dailyInterest: s.string(),
    yearlyInterest: s.string(),
    borrowLimit: s.string(),
    marginablePairs: s.array(s.string()),
  });
