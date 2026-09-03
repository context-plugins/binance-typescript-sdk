import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingBelowType = {
  LimitMaker: "LIMIT_MAKER",
  StopLoss: "STOP_LOSS",
  StopLossLimit: "STOP_LOSS_LIMIT",
} as const;
export type PendingBelowType = (typeof PendingBelowType)[keyof typeof PendingBelowType] | (string & {});

export const pendingBelowTypeSchema: EnumSchema<PendingBelowType> =
  s.enumOf<PendingBelowType>(PendingBelowType);
