import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RateLimit = {
  rateLimitType: string;
  interval: string;
  intervalNum: number;
  limit: number;
};

export const rateLimitSchema: Schema<RateLimit> = s.object<RateLimit>({
  rateLimitType: s.string(),
  interval: s.string(),
  intervalNum: s.int(),
  limit: s.int(),
});
