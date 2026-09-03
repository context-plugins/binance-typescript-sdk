import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingSide = {
  Buy: "BUY",
  Sell: "SELL",
} as const;
export type PendingSide = (typeof PendingSide)[keyof typeof PendingSide] | (string & {});

export const pendingSideSchema: EnumSchema<PendingSide> = s.enumOf<PendingSide>(PendingSide);
