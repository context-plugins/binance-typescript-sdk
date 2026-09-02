import { s, type EnumSchema } from "../core/index.js";

export const PendingType = {
  Limit: "LIMIT",
  Market: "MARKET",
  StopLoss: "STOP_LOSS",
  StopLossLimit: "STOP_LOSS_LIMIT",
  TakeProfit: "TAKE_PROFIT",
  TakeProfitLimit: "TAKE_PROFIT_LIMIT",
  LimitMaker: "LIMIT_MAKER",
} as const;
export type PendingType = (typeof PendingType)[keyof typeof PendingType] | (string & {});

export const pendingTypeSchema: EnumSchema<PendingType> = s.enumOf<PendingType>(PendingType);
