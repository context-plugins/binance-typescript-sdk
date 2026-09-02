import { s, type Schema } from "../core/index.js";

export type MyTrade = {
  symbol: string;
  id: number;
  orderId: number;
  orderListId: number;
  price: string;
  qty: string;
  quoteQty: string;
  commission: string;
  commissionAsset: string;
  time: number;
  isBuyer: boolean;
  isMaker: boolean;
  isBestMatch: boolean;
};

export const myTradeSchema: Schema<MyTrade> = s.object<MyTrade>({
  symbol: s.string(),
  id: s.number(),
  orderId: s.number(),
  orderListId: s.number(),
  price: s.string(),
  qty: s.string(),
  quoteQty: s.string(),
  commission: s.string(),
  commissionAsset: s.string(),
  time: s.number(),
  isBuyer: s.boolean(),
  isMaker: s.boolean(),
  isBestMatch: s.boolean(),
});
