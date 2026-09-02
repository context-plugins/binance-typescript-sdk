import { s, type Schema } from "../core/index.js";

export type List1 = {
  quoteId: string;
  orderId: number;
  orderStatus: string;
  fromAsset: string;
  fromAmount: string;
  toAsset: string;
  toAmount: string;
  ratio: string;
  inverseRatio: string;
  createTime: number;
  expiredTimestamp: number;
};

export const list1Schema: Schema<List1> = s.object<List1>({
  quoteId: s.string(),
  orderId: s.number(),
  orderStatus: s.string(),
  fromAsset: s.string(),
  fromAmount: s.string(),
  toAsset: s.string(),
  toAmount: s.string(),
  ratio: s.string(),
  inverseRatio: s.string(),
  createTime: s.number(),
  expiredTimestamp: s.number(),
});
