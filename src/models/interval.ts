import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Interval = {
  _1S: "1s",
  _1M: "1m",
  _3M: "3m",
  _5M: "5m",
  _15M: "15m",
  _30M: "30m",
  _1H: "1h",
  _2H: "2h",
  _4H: "4h",
  _6H: "6h",
  _8H: "8h",
  _12H: "12h",
  _1D: "1d",
  _3D: "3d",
  _1W: "1w",
  _1M2: "1M",
} as const;
export type Interval = (typeof Interval)[keyof typeof Interval] | (string & {});

export const intervalSchema: EnumSchema<Interval> = s.enumOf<Interval>(Interval);
