import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProfitTransferDetail = {
  /** Transfer out of sub-account */
  poolUsername: string;
  /** Transfer into subaccount */
  toPoolUsername: string;
  /** Transfer algorithm */
  algoName: string;
  /** Transferred Hashrate quantity */
  hashRate: number;
  /** Transfer date */
  day: number;
  /** Transfer income */
  amount: number;
  coinName: string;
};

export const profitTransferDetailSchema: Schema<ProfitTransferDetail> = s.object<ProfitTransferDetail>({
  poolUsername: s.string(),
  toPoolUsername: s.string(),
  algoName: s.string(),
  hashRate: s.int(),
  day: s.int(),
  amount: s.float64(),
  coinName: s.string(),
});
