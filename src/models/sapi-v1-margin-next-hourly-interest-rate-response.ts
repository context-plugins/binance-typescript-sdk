import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginNextHourlyInterestRateResponse = {
  asset: string;
  nextHourlyInterestRate: string;
};

export const sapiV1MarginNextHourlyInterestRateResponseSchema: Schema<SapiV1MarginNextHourlyInterestRateResponse> =
  s.object<SapiV1MarginNextHourlyInterestRateResponse>({
    asset: s.string(),
    nextHourlyInterestRate: s.string(),
  });
