import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TradeType = {
  Buy: "BUY",
  Sell: "SELL",
} as const;
export type TradeType = (typeof TradeType)[keyof typeof TradeType] | (string & {});

export const tradeTypeSchema: EnumSchema<TradeType> = s.enumOf<TradeType>(TradeType);
