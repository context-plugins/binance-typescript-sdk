import { s, type EnumSchema } from "../core/index.js";

export const PendingSide = {
  Buy: "BUY",
  Sell: "SELL",
} as const;
export type PendingSide = (typeof PendingSide)[keyof typeof PendingSide] | (string & {});

export const pendingSideSchema: EnumSchema<PendingSide> = s.enumOf<PendingSide>(PendingSide);
