import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row45 = {
  positionId: string;
  redeemId: number;
  time: number;
  asset: string;
  lockPeriod: string;
  amount: string;
  originalAmount: string;
  type: string;
  deliverDate: string;
  lossAmount: string;
  isComplete: boolean;
  rewardAsset: string;
  rewardAmt: string;
  extraRewardAsset: string;
  estExtraRewardAmt: string;
  status: string;
};

export const row45Schema: Schema<Row45> = s.object<Row45>({
  positionId: s.string(),
  redeemId: s.number(),
  time: s.number(),
  asset: s.string(),
  lockPeriod: s.string(),
  amount: s.string(),
  originalAmount: s.string(),
  type: s.string(),
  deliverDate: s.string(),
  lossAmount: s.string(),
  isComplete: s.boolean(),
  rewardAsset: s.string(),
  rewardAmt: s.string(),
  extraRewardAsset: s.string(),
  estExtraRewardAmt: s.string(),
  status: s.string(),
});
