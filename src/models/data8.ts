import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data8 = {
  orderNo: string;
  sourceAmount: string;
  fiatCurrency: string;
  obtainAmount: string;
  cryptoCurrency: string;
  totalFee: string;
  price: string;
  status: string;
  createTime: number;
  updateTime: number;
};

export const data8Schema: Schema<Data8> = s.object<Data8>({
  orderNo: s.string(),
  sourceAmount: s.string(),
  fiatCurrency: s.string(),
  obtainAmount: s.string(),
  cryptoCurrency: s.string(),
  totalFee: s.string(),
  price: s.string(),
  status: s.string(),
  createTime: s.number(),
  updateTime: s.number(),
});
