import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Position1 = {
  symbol: string;
  entryPrice: number;
  markPrice: number;
  positionAmt: number;
};

export const position1Schema: Schema<Position1> = s.object<Position1>({
  symbol: s.string(),
  entryPrice: s.number(),
  markPrice: s.number(),
  positionAmt: s.number(),
});
