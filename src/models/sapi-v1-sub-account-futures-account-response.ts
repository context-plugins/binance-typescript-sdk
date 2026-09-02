import { s, type Schema } from "../core/index.js";
import { assets1Schema, type Assets1 } from "./assets1.js";

export type SapiV1SubAccountFuturesAccountResponse = {
  email: string;
  asset: string;
  assets: Assets1[];
  canDeposit: boolean;
  canTrade: boolean;
  canWithdraw: boolean;
  feeTier: number;
  maxWithdrawAmount: string;
  totalInitialMargin: string;
  totalMaintenanceMargin: string;
  totalMarginBalance: string;
  totalOpenOrderInitialMargin: string;
  totalPositionInitialMargin: string;
  totalUnrealizedProfit: string;
  totalWalletBalance: string;
  updateTime: number;
};

export const sapiV1SubAccountFuturesAccountResponseSchema: Schema<SapiV1SubAccountFuturesAccountResponse> =
  s.object<SapiV1SubAccountFuturesAccountResponse>({
    email: s.string(),
    asset: s.string(),
    assets: s.array(s.lazy(() => assets1Schema)),
    canDeposit: s.boolean(),
    canTrade: s.boolean(),
    canWithdraw: s.boolean(),
    feeTier: s.number(),
    maxWithdrawAmount: s.string(),
    totalInitialMargin: s.string(),
    totalMaintenanceMargin: s.string(),
    totalMarginBalance: s.string(),
    totalOpenOrderInitialMargin: s.string(),
    totalPositionInitialMargin: s.string(),
    totalUnrealizedProfit: s.string(),
    totalWalletBalance: s.string(),
    updateTime: s.number(),
  });
