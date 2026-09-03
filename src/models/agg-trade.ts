import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AggTrade = {
  a: number;
  p: string;
  q: string;
  f: number;
  l: number;
  t: boolean;
  m: boolean;
  m2: boolean;
};

export const aggTradeSchema: Schema<AggTrade> = s.object<AggTrade>({
  a: s.number(),
  p: s.string(),
  q: s.string(),
  f: s.number(),
  l: s.number(),
  t: s.boolean(),
  m: s.boolean(),
  m2: s.boolean(),
  _keysMap: {
    t: "T",
    m2: "M",
  },
});
