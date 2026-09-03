import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row41 = {
  positionId: string;
  parentPositionId: string;
  projectId: string;
  asset: string;
  amount: string;
  purchaseTime: string;
  duration: string;
  accrualDays: string;
  rewardAsset: string;
  apy: string;
  rewardAmt: string;
  extraRewardAsset: string;
  extraRewardApr: string;
  estExtraRewardAmt: string;
  nextPay: string;
  nextPayDate: string;
  payPeriod: string;
  redeemAmountEarly: string;
  rewardsEndDate: string;
  deliverDate: string;
  redeemPeriod: string;
  redeemingAmt: string;
  redeemTo: string;
  partialAmtDeliverDate: string;
  canRedeemEarly: boolean;
  canFastRedemption: boolean;
  autoSubscribe: boolean;
  type: string;
  status: string;
  canReStake: boolean;
};

export const row41Schema: Schema<Row41> = s.object<Row41>({
  positionId: s.string(),
  parentPositionId: s.string(),
  projectId: s.string(),
  asset: s.string(),
  amount: s.string(),
  purchaseTime: s.string(),
  duration: s.string(),
  accrualDays: s.string(),
  rewardAsset: s.string(),
  apy: s.string(),
  rewardAmt: s.string(),
  extraRewardAsset: s.string(),
  extraRewardApr: s.string(),
  estExtraRewardAmt: s.string(),
  nextPay: s.string(),
  nextPayDate: s.string(),
  payPeriod: s.string(),
  redeemAmountEarly: s.string(),
  rewardsEndDate: s.string(),
  deliverDate: s.string(),
  redeemPeriod: s.string(),
  redeemingAmt: s.string(),
  redeemTo: s.string(),
  partialAmtDeliverDate: s.string(),
  canRedeemEarly: s.boolean(),
  canFastRedemption: s.boolean(),
  autoSubscribe: s.boolean(),
  type: s.string(),
  status: s.string(),
  canReStake: s.boolean(),
  _keysMap: {
    apy: "APY",
    extraRewardApr: "extraRewardAPR",
  },
});
