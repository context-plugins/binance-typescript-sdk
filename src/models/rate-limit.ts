import { s, type Schema } from "../core/index.js";

export type RateLimit = {
  rateLimitType: string;
  interval: string;
  intervalNum: number;
  limit: number;
};

export const rateLimitSchema: Schema<RateLimit> = s.object<RateLimit>({
  rateLimitType: s.string(),
  interval: s.string(),
  intervalNum: s.number(),
  limit: s.number(),
});
