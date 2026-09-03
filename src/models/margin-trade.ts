import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarginTrade = {
  commission: string;
  commissionAsset: string;
  id: number;
  isBestMatch: boolean;
  isBuyer: boolean;
  isMaker: boolean;
  orderId: number;
  price: string;
  qty: string;
  symbol: string;
  isIsolated: boolean;
  time: number;
};

export const marginTradeSchema: Schema<MarginTrade> = s.object<MarginTrade>({
  commission: s.string(),
  commissionAsset: s.string(),
  id: s.number(),
  isBestMatch: s.boolean(),
  isBuyer: s.boolean(),
  isMaker: s.boolean(),
  orderId: s.number(),
  price: s.string(),
  qty: s.string(),
  symbol: s.string(),
  isIsolated: s.boolean(),
  time: s.number(),
});
