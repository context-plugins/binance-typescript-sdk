import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceSchema, type Balance } from "./balance.js";
import { commissionRatesSchema, type CommissionRates } from "./commission-rates.js";

export type Account = {
  makerCommission: number;
  takerCommission: number;
  buyerCommission: number;
  sellerCommission: number;
  commissionRates: CommissionRates;
  canTrade: boolean;
  canWithdraw: boolean;
  canDeposit: boolean;
  brokered: boolean;
  requireSelfTradePrevention: boolean;
  preventSor: boolean;
  updateTime: number;
  accountType: string;
  balances: Balance[];
  permissions: string[];
  uid: number;
};

export const accountSchema: Schema<Account> = s.object<Account>({
  makerCommission: s.int(),
  takerCommission: s.int(),
  buyerCommission: s.int(),
  sellerCommission: s.int(),
  commissionRates: commissionRatesSchema,
  canTrade: s.boolean(),
  canWithdraw: s.boolean(),
  canDeposit: s.boolean(),
  brokered: s.boolean(),
  requireSelfTradePrevention: s.boolean(),
  preventSor: s.boolean(),
  updateTime: s.int(),
  accountType: s.string(),
  balances: s.array(s.lazy(() => balanceSchema)),
  permissions: s.array(s.string()),
  uid: s.int(),
});
