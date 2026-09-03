import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeliveryPositionRiskVo = {
  entryPrice: string;
  markPrice: string;
  leverage: string;
  isolated: string;
  isolatedWallet: string;
  isolatedMargin: string;
  isAutoAddMargin: string;
  positionSide: string;
  positionAmount: string;
  symbol: string;
  unrealizedProfit: string;
};

export const deliveryPositionRiskVoSchema: Schema<DeliveryPositionRiskVo> = s.object<DeliveryPositionRiskVo>({
  entryPrice: s.string(),
  markPrice: s.string(),
  leverage: s.string(),
  isolated: s.string(),
  isolatedWallet: s.string(),
  isolatedMargin: s.string(),
  isAutoAddMargin: s.string(),
  positionSide: s.string(),
  positionAmount: s.string(),
  symbol: s.string(),
  unrealizedProfit: s.string(),
});
