import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data8 = {
  orderNo: string;
  /** Fiat trade amount */
  sourceAmount: string;
  /** Fiat token */
  fiatCurrency: string;
  /** Crypto trade amount */
  obtainAmount: string;
  /** Crypto token */
  cryptoCurrency: string;
  /** Trade fee */
  totalFee: string;
  price: string;
  /** Processing, Completed, Failed, Refunded */
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
  createTime: s.int(),
  updateTime: s.int(),
});
