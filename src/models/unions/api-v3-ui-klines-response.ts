import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ApiV3UiKlinesResponse = number | string;

export const apiV3UiKlinesResponseSchema: Schema<ApiV3UiKlinesResponse> = s.of<ApiV3UiKlinesResponse>(
  s.union([s.int(), s.string()]),
);
