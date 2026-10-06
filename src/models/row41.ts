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
  /** Earned amount */
  rewardAmt: string;
  /** Rewards assets of extra staking type */
  extraRewardAsset: string;
  /** APR of extra staking type */
  extraRewardApr: string;
  /** Rewards of extra staking type, distribute when order expires */
  estExtraRewardAmt: string;
  /** Next estimated rewards payment */
  nextPay: string;
  /** Next rewards payment date */
  nextPayDate: string;
  /** Payment cycle */
  payPeriod: string;
  /** Early redemption amount */
  redeemAmountEarly: string;
  /** Rewards accrual end date */
  rewardsEndDate: string;
  /** Redemption arrival time */
  deliverDate: string;
  /** Redemption interval */
  redeemPeriod: string;
  /** Amount under redemption */
  redeemingAmt: string;
  /** Redeem to Flexible product or Spot wallet */
  redeemTo: string;
  /** Arrival time of partial redemption amount of order */
  partialAmtDeliverDate: string;
  /** When it is true, early redemption can be operated */
  canRedeemEarly: boolean;
  /** When it is true, fast redemption can be operated */
  canFastRedemption: boolean;
  /** When it is true, auto staking can be operated */
  autoSubscribe: boolean;
  /** Order type is auto subscribe or normal */
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
