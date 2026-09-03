import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Asset2 = {
  asset: string;
  initialMargin: string;
  maintenanceMargin: string;
  marginBalance: string;
  maxWithdrawAmount: string;
  openOrderInitialMargin: string;
  positionInitialMargin: string;
  unrealizedProfit: string;
  walletBalance: string;
};

export const asset2Schema: Schema<Asset2> = s.object<Asset2>({
  asset: s.string(),
  initialMargin: s.string(),
  maintenanceMargin: s.string(),
  marginBalance: s.string(),
  maxWithdrawAmount: s.string(),
  openOrderInitialMargin: s.string(),
  positionInitialMargin: s.string(),
  unrealizedProfit: s.string(),
  walletBalance: s.string(),
});
