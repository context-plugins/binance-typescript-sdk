import { s, type Schema } from "../core/index.js";

export type TradeInfoVo = {
  userId?: number;
  btc?: number;
  btcFutures?: number;
  btcMargin?: number;
  busd?: number;
  busdFutures?: number;
  busdMargin?: number;
  date?: number;
};

export const tradeInfoVoSchema: Schema<TradeInfoVo> = s.object<TradeInfoVo>({
  userId: s.optional(s.number()),
  btc: s.optional(s.number()),
  btcFutures: s.optional(s.number()),
  btcMargin: s.optional(s.number()),
  busd: s.optional(s.number()),
  busdFutures: s.optional(s.number()),
  busdMargin: s.optional(s.number()),
  date: s.optional(s.number()),
});
