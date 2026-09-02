import { s, type Schema } from "../core/index.js";

export type SubAccountList = {
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

export const subAccountListSchema: Schema<SubAccountList> = s.object<SubAccountList>({
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
