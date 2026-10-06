import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountProfit1 = {
  time: number;
  coinName: string;
  /** 0:Referral 1:Refund 2:Rebate */
  type: number;
  /** puid */
  puid: number;
  /** Mining account */
  subName: string;
  amount: number;
};

export const accountProfit1Schema: Schema<AccountProfit1> = s.object<AccountProfit1>({
  time: s.int(),
  coinName: s.string(),
  type: s.int(),
  puid: s.int(),
  subName: s.string(),
  amount: s.float64(),
});
