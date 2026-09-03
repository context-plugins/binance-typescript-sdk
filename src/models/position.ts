import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Position = {
  entryPrice: string;
  markPrice: string;
  positionAmt: string;
  symbol: string;
  unRealizedProfit: string;
};

export const positionSchema: Schema<Position> = s.object<Position>({
  entryPrice: s.string(),
  markPrice: s.string(),
  positionAmt: s.string(),
  symbol: s.string(),
  unRealizedProfit: s.string(),
});
