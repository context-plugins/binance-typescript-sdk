import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AggTrade = {
  /** Aggregate tradeId */
  a: number;
  /** Price */
  p: string;
  /** Quantity */
  q: string;
  /** First tradeId */
  f: number;
  /** Last tradeId */
  l: number;
  /** Timestamp */
  t: boolean;
  /** Was the buyer the maker? */
  m: boolean;
  /** Was the trade the best price match? */
  m2: boolean;
};

export const aggTradeSchema: Schema<AggTrade> = s.object<AggTrade>({
  a: s.int(),
  p: s.string(),
  q: s.string(),
  f: s.int(),
  l: s.int(),
  t: s.boolean(),
  m: s.boolean(),
  m2: s.boolean(),
  _keysMap: {
    t: "T",
    m2: "M",
  },
});
