import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
  userId: s.optional(s.int()),
  btc: s.optional(s.float64()),
  btcFutures: s.optional(s.float64()),
  btcMargin: s.optional(s.float64()),
  busd: s.optional(s.float64()),
  busdFutures: s.optional(s.float64()),
  busdMargin: s.optional(s.float64()),
  date: s.optional(s.int()),
});
