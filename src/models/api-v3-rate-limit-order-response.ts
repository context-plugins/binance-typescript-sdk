import { s, type Schema } from "../core/index.js";

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
    intervalNum: s.number(),
    limit: s.number(),
    count: s.optional(s.number()),
  });
