import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rateLimitSchema, type RateLimit } from "./rate-limit.js";
import { symbolSchema, type Symbol } from "./symbol.js";

export type ApiV3ExchangeInfoResponse = {
  timezone: string;
  serverTime: number;
  rateLimits: RateLimit[];
  exchangeFilters: Record<string, unknown>[];
  symbols: Symbol[];
};

export const apiV3ExchangeInfoResponseSchema: Schema<ApiV3ExchangeInfoResponse> =
  s.object<ApiV3ExchangeInfoResponse>({
    timezone: s.string(),
    serverTime: s.number(),
    rateLimits: s.array(s.lazy(() => rateLimitSchema)),
    exchangeFilters: s.array(s.record(s.string(), s.unknown())),
    symbols: s.array(s.lazy(() => symbolSchema)),
  });
