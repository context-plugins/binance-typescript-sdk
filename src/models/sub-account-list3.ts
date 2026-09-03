import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubAccountList3 = {
  email: string;
  totalInitialMargin: string;
  totalMaintenanceMargin: string;
  totalMarginBalance: string;
  totalOpenOrderInitialMargin: string;
  totalPositionInitialMargin: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  asset: string;
};

export const subAccountList3Schema: Schema<SubAccountList3> = s.object<SubAccountList3>({
  email: s.string(),
  totalInitialMargin: s.string(),
  totalMaintenanceMargin: s.string(),
  totalMarginBalance: s.string(),
  totalOpenOrderInitialMargin: s.string(),
  totalPositionInitialMargin: s.string(),
  totalUnrealizedProfit: s.string(),
  totalWalletBalance: s.string(),
  asset: s.string(),
});
