import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OtherProfit = {
  /** Mining date */
  time: number;
  /** Coin Name */
  coinName: string;
  /** 1: Merged Mining, 2: Activity Bonus, 3:Rebate 4:Smart Pool 6:Income Transfer 7:Pool Savings */
  type: number;
  profitAmount: number;
  /** 0:Unpaid, 1:Paying 2：Paid */
  status: number;
};

export const otherProfitSchema: Schema<OtherProfit> = s.object<OtherProfit>({
  time: s.int(),
  coinName: s.string(),
  type: s.int(),
  profitAmount: s.float64(),
  status: s.int(),
});
