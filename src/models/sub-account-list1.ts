import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
