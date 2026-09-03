import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Btcusdt = {
  i: string;
  c: number;
  v: number;
  t: number;
};

export const btcusdtSchema: Schema<Btcusdt> = s.object<Btcusdt>({
  i: s.string(),
  c: s.number(),
  v: s.number(),
  t: s.number(),
});
