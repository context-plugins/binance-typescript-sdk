import { s, type Schema } from "../core/index.js";

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
    intervalNum: s.number(),
    limit: s.number(),
    count: s.number(),
  });
