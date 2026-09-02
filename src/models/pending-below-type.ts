import { s, type EnumSchema } from "../core/index.js";

export const PendingBelowType = {
  LimitMaker: "LIMIT_MAKER",
  StopLoss: "STOP_LOSS",
  StopLossLimit: "STOP_LOSS_LIMIT",
} as const;
export type PendingBelowType = (typeof PendingBelowType)[keyof typeof PendingBelowType] | (string & {});

export const pendingBelowTypeSchema: EnumSchema<PendingBelowType> =
  s.enumOf<PendingBelowType>(PendingBelowType);
