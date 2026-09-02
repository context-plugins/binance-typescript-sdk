import { s, type Schema } from "../core/index.js";

export type MarginTradeCoeffVo = {
  forceLiquidationBar: string;
  marginCallBar: string;
  normalBar: string;
};

export const marginTradeCoeffVoSchema: Schema<MarginTradeCoeffVo> = s.object<MarginTradeCoeffVo>({
  forceLiquidationBar: s.string(),
  marginCallBar: s.string(),
  normalBar: s.string(),
});
