import { s, type Schema } from "../core/index.js";

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
