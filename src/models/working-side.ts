import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WorkingSide = {
  Buy: "BUY",
  Sell: "SELL",
} as const;
export type WorkingSide = (typeof WorkingSide)[keyof typeof WorkingSide] | (string & {});

export const workingSideSchema: EnumSchema<WorkingSide> = s.enumOf<WorkingSide>(WorkingSide);
