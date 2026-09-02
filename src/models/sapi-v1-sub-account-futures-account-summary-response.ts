import { s, type Schema } from "../core/index.js";
import { subAccountList3Schema, type SubAccountList3 } from "./sub-account-list3.js";

export type SapiV1SubAccountFuturesAccountSummaryResponse = {
  totalInitialMargin: string;
  totalMaintenanceMargin: string;
  totalMarginBalance: string;
  totalOpenOrderInitialMargin: string;
  totalPositionInitialMargin: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  asset: string;
  subAccountList: SubAccountList3[];
};

export const sapiV1SubAccountFuturesAccountSummaryResponseSchema: Schema<SapiV1SubAccountFuturesAccountSummaryResponse> =
  s.object<SapiV1SubAccountFuturesAccountSummaryResponse>({
    totalInitialMargin: s.string(),
    totalMaintenanceMargin: s.string(),
    totalMarginBalance: s.string(),
    totalOpenOrderInitialMargin: s.string(),
    totalPositionInitialMargin: s.string(),
    totalUnrealizedProfit: s.string(),
    totalWalletBalance: s.string(),
    asset: s.string(),
    subAccountList: s.array(s.lazy(() => subAccountList3Schema)),
  });
