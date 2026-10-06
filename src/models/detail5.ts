import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Detail5 = {
  targetAsset?: string;
  percentage?: number;
};

export const detail5Schema: Schema<Detail5> = s.object<Detail5>({
  targetAsset: s.optional(s.string()),
  percentage: s.optional(s.int()),
});
