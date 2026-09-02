import { s, type EnumSchema } from "../core/index.js";

export const PendingAboveType = {
  LimitMaker: "LIMIT_MAKER",
  StopLoss: "STOP_LOSS",
  StopLossLimit: "STOP_LOSS_LIMIT",
} as const;
export type PendingAboveType = (typeof PendingAboveType)[keyof typeof PendingAboveType] | (string & {});

export const pendingAboveTypeSchema: EnumSchema<PendingAboveType> =
  s.enumOf<PendingAboveType>(PendingAboveType);
