import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type List2 = {
  quoteId: string;
  orderId: number;
  orderStatus: string;
  fromAsset: string;
  fromAmount: string;
  toAsset: string;
  toAmount: string;
  /** price ratio */
  ratio: string;
  /** inverse price */
  inverseRatio: string;
  createTime: number;
};

export const list2Schema: Schema<List2> = s.object<List2>({
  quoteId: s.string(),
  orderId: s.int(),
  orderStatus: s.string(),
  fromAsset: s.string(),
  fromAmount: s.string(),
  toAsset: s.string(),
  toAmount: s.string(),
  ratio: s.string(),
  inverseRatio: s.string(),
  createTime: s.int(),
});
