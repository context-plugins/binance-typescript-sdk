import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountFuturesPositionRiskResponse = {
  entryPrice: string;
  leverage: string;
  maxNotional: string;
  liquidationPrice: string;
  markPrice: string;
  positionAmount: string;
  symbol: string;
  unrealizedProfit: string;
};

export const sapiV1SubAccountFuturesPositionRiskResponseSchema: Schema<SapiV1SubAccountFuturesPositionRiskResponse> =
  s.object<SapiV1SubAccountFuturesPositionRiskResponse>({
    entryPrice: s.string(),
    leverage: s.string(),
    maxNotional: s.string(),
    liquidationPrice: s.string(),
    markPrice: s.string(),
    positionAmount: s.string(),
    symbol: s.string(),
    unrealizedProfit: s.string(),
  });
