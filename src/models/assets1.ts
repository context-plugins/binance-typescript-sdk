import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Assets1 = {
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

export const assets1Schema: Schema<Assets1> = s.object<Assets1>({
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
