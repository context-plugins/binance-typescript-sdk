import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row49 = {
  amount: string;
  productId: string;
  asset: string;
  createTime: number;
  type: string;
  productName: string;
  orderId: number;
};

export const row49Schema: Schema<Row49> = s.object<Row49>({
  amount: s.string(),
  productId: s.string(),
  asset: s.string(),
  createTime: s.number(),
  type: s.string(),
  productName: s.string(),
  orderId: s.number(),
});
