import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { asset2Schema, type Asset2 } from "./asset2.js";

export type FutureAccountResp = {
  email: string;
  assets: Asset2[];
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

export const futureAccountRespSchema: Schema<FutureAccountResp> = s.object<FutureAccountResp>({
  email: s.string(),
  assets: s.array(s.lazy(() => asset2Schema)),
  canDeposit: s.boolean(),
  canTrade: s.boolean(),
  canWithdraw: s.boolean(),
  feeTier: s.int(),
  maxWithdrawAmount: s.string(),
  totalInitialMargin: s.string(),
  totalMaintenanceMargin: s.string(),
  totalMarginBalance: s.string(),
  totalOpenOrderInitialMargin: s.string(),
  totalPositionInitialMargin: s.string(),
  totalUnrealizedProfit: s.string(),
  totalWalletBalance: s.string(),
  updateTime: s.int(),
});
