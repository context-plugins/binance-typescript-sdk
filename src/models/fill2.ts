import { s, type Schema } from "../core/index.js";

export type Fill2 = {
  matchType: string;
  price: string;
  qty: string;
  commission: string;
  commissionAsset: string;
  tradeId: number;
  allocId: number;
};

export const fill2Schema: Schema<Fill2> = s.object<Fill2>({
  matchType: s.string(),
  price: s.string(),
  qty: s.string(),
  commission: s.string(),
  commissionAsset: s.string(),
  tradeId: s.number(),
  allocId: s.number(),
});
