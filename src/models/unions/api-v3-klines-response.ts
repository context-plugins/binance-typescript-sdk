import { s, type Schema } from "../../core/index.js";

export type ApiV3KlinesResponse = number | string;

export const apiV3KlinesResponseSchema: Schema<ApiV3KlinesResponse> = s.of<ApiV3KlinesResponse>(
  s.union([s.number(), s.string()]),
);
