import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Btcusdt = {
  /** Unfilled Ratio (UFR) */
  i: string;
  /** Count of all orders */
  c: number;
  /** Current UFR value */
  v: number;
  /** Trigger UFR value */
  t: number;
};

export const btcusdtSchema: Schema<Btcusdt> = s.object<Btcusdt>({
  i: s.string(),
  c: s.int(),
  v: s.float64(),
  t: s.float64(),
});
