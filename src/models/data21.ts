import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data21 = {
  orderNumber: string;
  advNo: string;
  tradeType: string;
  asset: string;
  fiat: string;
  fiatSymbol: string;
  /** Quantity (in Crypto) */
  amount: string;
  totalPrice: string;
  /** Unit Price (in Fiat) */
  unitPrice: string;
  /**
   * PENDING, TRADING, BUYER_PAYED, DISTRIBUTING, COMPLETED, IN_APPEAL, CANCELLED,
   * CANCELLED_BY_SYSTEM
   */
  orderStatus: string;
  createTime: number;
  /** Transaction Fee (in Crypto) */
  commission: string;
  counterPartNickName: string;
  advertisementRole: string;
};

export const data21Schema: Schema<Data21> = s.object<Data21>({
  orderNumber: s.string(),
  advNo: s.string(),
  tradeType: s.string(),
  asset: s.string(),
  fiat: s.string(),
  fiatSymbol: s.string(),
  amount: s.string(),
  totalPrice: s.string(),
  unitPrice: s.string(),
  orderStatus: s.string(),
  createTime: s.int(),
  commission: s.string(),
  counterPartNickName: s.string(),
  advertisementRole: s.string(),
});
