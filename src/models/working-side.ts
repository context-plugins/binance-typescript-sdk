import { s, type EnumSchema } from "../core/index.js";

export const WorkingSide = {
  Buy: "BUY",
  Sell: "SELL",
} as const;
export type WorkingSide = (typeof WorkingSide)[keyof typeof WorkingSide] | (string & {});

export const workingSideSchema: EnumSchema<WorkingSide> = s.enumOf<WorkingSide>(WorkingSide);
