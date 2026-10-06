import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountProfit = {
  /** Mining date */
  time: number;
  /**
   * 0:Mining Wallet,5:Mining Address,7:Pool Savings,8:Transferred,31:Income Transfer ,32:Hashrate
   * Resale-Mining Wallet 33:Hashrate Resale-Pool Savings
   */
  type: number;
  /** Transferred Hashrate */
  hashTransfer: number;
  /** Transferred Income */
  transferAmount: number;
  /** Daily Hashrate */
  dayHashRate: number;
  /** Earnings Amount */
  profitAmount: number;
  /** Coin Type */
  coinName: string;
  /** Status：0:Unpaid, 1:Paying 2：Paid */
  status: number;
};

export const accountProfitSchema: Schema<AccountProfit> = s.object<AccountProfit>({
  time: s.int(),
  type: s.int(),
  hashTransfer: s.int(),
  transferAmount: s.float64(),
  dayHashRate: s.int(),
  profitAmount: s.float64(),
  coinName: s.string(),
  status: s.int(),
});
