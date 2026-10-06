import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row4 = {
  avgPrice: string;
  executedQty: string;
  orderId: number;
  price: string;
  qty: string;
  side: string;
  symbol: string;
  timeInForce: string;
  isIsolated: boolean;
  updatedTime: number;
};

export const row4Schema: Schema<Row4> = s.object<Row4>({
  avgPrice: s.string(),
  executedQty: s.string(),
  orderId: s.int(),
  price: s.string(),
  qty: s.string(),
  side: s.string(),
  symbol: s.string(),
  timeInForce: s.string(),
  isIsolated: s.boolean(),
  updatedTime: s.int(),
});
