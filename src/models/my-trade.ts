import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MyTrade = {
  symbol: string;
  /** Trade id */
  id: number;
  orderId: number;
  orderListId: number;
  /** Price */
  price: string;
  /** Amount of base asset */
  qty: string;
  /** Amount of quote asset */
  quoteQty: string;
  commission: string;
  commissionAsset: string;
  /** Trade timestamp */
  time: number;
  isBuyer: boolean;
  isMaker: boolean;
  isBestMatch: boolean;
};

export const myTradeSchema: Schema<MyTrade> = s.object<MyTrade>({
  symbol: s.string(),
  id: s.int(),
  orderId: s.int(),
  orderListId: s.int(),
  price: s.string(),
  qty: s.string(),
  quoteQty: s.string(),
  commission: s.string(),
  commissionAsset: s.string(),
  time: s.int(),
  isBuyer: s.boolean(),
  isMaker: s.boolean(),
  isBestMatch: s.boolean(),
});
