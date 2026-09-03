import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Side = {
  Sell: "SELL",
  Buy: "BUY",
} as const;
export type Side = (typeof Side)[keyof typeof Side] | (string & {});

export const sideSchema: EnumSchema<Side> = s.enumOf<Side>(Side);
