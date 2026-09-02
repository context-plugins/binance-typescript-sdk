import { s, type Schema } from "../core/index.js";

export type SubAccountList1 = {
  email: string;
  totalMarginBalance: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  asset: string;
};

export const subAccountList1Schema: Schema<SubAccountList1> = s.object<SubAccountList1>({
  email: s.string(),
  totalMarginBalance: s.string(),
  totalUnrealizedProfit: s.string(),
  totalWalletBalance: s.string(),
  asset: s.string(),
});
