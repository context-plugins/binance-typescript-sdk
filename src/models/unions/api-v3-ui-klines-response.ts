import { s, type Schema } from "../../core/index.js";

export type ApiV3UiKlinesResponse = number | string;

export const apiV3UiKlinesResponseSchema: Schema<ApiV3UiKlinesResponse> = s.of<ApiV3UiKlinesResponse>(
  s.union([s.number(), s.string()]),
);
