import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Plan = {
  planId: number;
  planType: string;
  editAllowed: string;
  creationDateTime: number;
  firstExecutionDateTime: number;
  nextExecutionDateTime: number;
  status: string;
  lastUpdatedDateTime: number;
  targetAsset: string;
  totalTargetAmount: string;
  sourceAsset: string;
  totalInvestedInUsd: string;
  subscriptionAmount: string;
  subscriptionCycle: string;
  subscriptionStartDay: string;
  subscriptionStartWeekday: string;
  subscriptionStartTime: string;
  sourceWallet: string;
  flexibleAllowedToUse: string;
  planValueInUsd: string;
  pnlInUsd: string;
  roi: string;
};

export const planSchema: Schema<Plan> = s.object<Plan>({
  planId: s.number(),
  planType: s.string(),
  editAllowed: s.string(),
  creationDateTime: s.number(),
  firstExecutionDateTime: s.number(),
  nextExecutionDateTime: s.number(),
  status: s.string(),
  lastUpdatedDateTime: s.number(),
  targetAsset: s.string(),
  totalTargetAmount: s.string(),
  sourceAsset: s.string(),
  totalInvestedInUsd: s.string(),
  subscriptionAmount: s.string(),
  subscriptionCycle: s.string(),
  subscriptionStartDay: s.string(),
  subscriptionStartWeekday: s.string(),
  subscriptionStartTime: s.string(),
  sourceWallet: s.string(),
  flexibleAllowedToUse: s.string(),
  planValueInUsd: s.string(),
  pnlInUsd: s.string(),
  roi: s.string(),
  _keysMap: {
    totalInvestedInUsd: "totalInvestedInUSD",
    planValueInUsd: "planValueInUSD",
    pnlInUsd: "pnlInUSD",
  },
});
