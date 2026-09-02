import { s, type EnumSchema } from "../core/index.js";

export const TradeType = {
  Buy: "BUY",
  Sell: "SELL",
} as const;
export type TradeType = (typeof TradeType)[keyof typeof TradeType] | (string & {});

export const tradeTypeSchema: EnumSchema<TradeType> = s.enumOf<TradeType>(TradeType);
