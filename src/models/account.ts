import { s, type Schema } from "../core/index.js";
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
  makerCommission: s.number(),
  takerCommission: s.number(),
  buyerCommission: s.number(),
  sellerCommission: s.number(),
  commissionRates: commissionRatesSchema,
  canTrade: s.boolean(),
  canWithdraw: s.boolean(),
  canDeposit: s.boolean(),
  brokered: s.boolean(),
  requireSelfTradePrevention: s.boolean(),
  preventSor: s.boolean(),
  updateTime: s.number(),
  accountType: s.string(),
  balances: s.array(s.lazy(() => balanceSchema)),
  permissions: s.array(s.string()),
  uid: s.number(),
});
