import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ApiV3KlinesResponse = number | string;

export const apiV3KlinesResponseSchema: Schema<ApiV3KlinesResponse> = s.of<ApiV3KlinesResponse>(
  s.union([s.number(), s.string()]),
);
