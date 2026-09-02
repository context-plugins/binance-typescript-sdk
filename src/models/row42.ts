import { s, type Schema } from "../core/index.js";

export type Row42 = {
  amount: string;
  asset: string;
  time: number;
  purchaseId: number;
  productId: string;
  type: string;
  sourceAccount: string;
  amtFromSpot: string;
  amtFromFunding: string;
  status: string;
};

export const row42Schema: Schema<Row42> = s.object<Row42>({
  amount: s.string(),
  asset: s.string(),
  time: s.number(),
  purchaseId: s.number(),
  productId: s.string(),
  type: s.string(),
  sourceAccount: s.string(),
  amtFromSpot: s.string(),
  amtFromFunding: s.string(),
  status: s.string(),
});
