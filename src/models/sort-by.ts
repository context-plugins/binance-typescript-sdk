import { s, type EnumSchema } from "../core/index.js";

export const SortBy = {
  StartTime: "START_TIME",
  LotSize: "LOT_SIZE",
  InterestRate: "INTEREST_RATE",
  Duration: "DURATION",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
