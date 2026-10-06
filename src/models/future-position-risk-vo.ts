import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FuturePositionRiskVo = {
  entryPrice: string;
  /** current initial leverage */
  leverage: string;
  /** notional value limit of current initial leverage */
  maxNotional: string;
  liquidationPrice: string;
  markPrice: string;
  positionAmount: string;
  symbol: string;
  unrealizedProfit: string;
};

export const futurePositionRiskVoSchema: Schema<FuturePositionRiskVo> = s.object<FuturePositionRiskVo>({
  entryPrice: s.string(),
  leverage: s.string(),
  maxNotional: s.string(),
  liquidationPrice: s.string(),
  markPrice: s.string(),
  positionAmount: s.string(),
  symbol: s.string(),
  unrealizedProfit: s.string(),
});
