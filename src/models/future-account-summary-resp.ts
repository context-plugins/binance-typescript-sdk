import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subAccountListSchema, type SubAccountList } from "./sub-account-list.js";

export type FutureAccountSummaryResp = {
  totalInitialMargin: string;
  totalMaintenanceMargin: string;
  totalMarginBalance: string;
  totalOpenOrderInitialMargin: string;
  totalPositionInitialMargin: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  /** The sum of BUSD and USDT */
  asset: string;
  subAccountList: SubAccountList[];
};

export const futureAccountSummaryRespSchema: Schema<FutureAccountSummaryResp> =
  s.object<FutureAccountSummaryResp>({
    totalInitialMargin: s.string(),
    totalMaintenanceMargin: s.string(),
    totalMarginBalance: s.string(),
    totalOpenOrderInitialMargin: s.string(),
    totalPositionInitialMargin: s.string(),
    totalUnrealizedProfit: s.string(),
    totalWalletBalance: s.string(),
    asset: s.string(),
    subAccountList: s.array(s.lazy(() => subAccountListSchema)),
  });
