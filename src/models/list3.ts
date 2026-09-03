import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenSchema, type Token } from "./token.js";

export type List3 = {
  orderNo: string;
  tokens: Token[];
  tradeTime: number;
  tradeAmount: string;
  tradeCurrency: string;
};

export const list3Schema: Schema<List3> = s.object<List3>({
  orderNo: s.string(),
  tokens: s.array(s.lazy(() => tokenSchema)),
  tradeTime: s.number(),
  tradeAmount: s.string(),
  tradeCurrency: s.string(),
});
