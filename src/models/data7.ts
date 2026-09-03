import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data7 = {
  orderNo: string;
  fiatCurrency: string;
  indicatedAmount: string;
  amount: string;
  totalFee: string;
  method: string;
  status: string;
  createTime: number;
  updateTime: number;
};

export const data7Schema: Schema<Data7> = s.object<Data7>({
  orderNo: s.string(),
  fiatCurrency: s.string(),
  indicatedAmount: s.string(),
  amount: s.string(),
  totalFee: s.string(),
  method: s.string(),
  status: s.string(),
  createTime: s.number(),
  updateTime: s.number(),
});
