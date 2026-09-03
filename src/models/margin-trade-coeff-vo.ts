import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
