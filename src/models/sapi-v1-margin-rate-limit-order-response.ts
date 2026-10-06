import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginRateLimitOrderResponse = {
  rateLimitType: string;
  interval: string;
  intervalNum: number;
  limit: number;
  count: number;
};

export const sapiV1MarginRateLimitOrderResponseSchema: Schema<SapiV1MarginRateLimitOrderResponse> =
  s.object<SapiV1MarginRateLimitOrderResponse>({
    rateLimitType: s.string(),
    interval: s.string(),
    intervalNum: s.int(),
    limit: s.int(),
    count: s.int(),
  });
