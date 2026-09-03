import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy = {
  StartTime: "START_TIME",
  LotSize: "LOT_SIZE",
  InterestRate: "INTEREST_RATE",
  Duration: "DURATION",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
