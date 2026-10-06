import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV3RateLimitOrderResponse = {
  rateLimitType: string;
  interval: string;
  intervalNum: number;
  limit: number;
  count?: number;
};

export const apiV3RateLimitOrderResponseSchema: Schema<ApiV3RateLimitOrderResponse> =
  s.object<ApiV3RateLimitOrderResponse>({
    rateLimitType: s.string(),
    interval: s.string(),
    intervalNum: s.int(),
    limit: s.int(),
    count: s.optional(s.int()),
  });
