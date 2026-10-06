import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenSchema, type Token } from "./token.js";

export type List3 = {
  /** 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee */
  orderNo: string;
  tokens: Token[];
  tradeTime: number;
  tradeAmount: string;
  tradeCurrency: string;
};

export const list3Schema: Schema<List3> = s.object<List3>({
  orderNo: s.string(),
  tokens: s.array(s.lazy(() => tokenSchema)),
  tradeTime: s.int(),
  tradeAmount: s.string(),
  tradeCurrency: s.string(),
});
