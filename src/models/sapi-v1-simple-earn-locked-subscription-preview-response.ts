import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SimpleEarnLockedSubscriptionPreviewResponse = {
  rewardAsset: string;
  totalRewardAmt: string;
  extraRewardAsset: string;
  estTotalExtraRewardAmt: string;
  nextPay: string;
  nextPayDate: string;
  valueDate: string;
  rewardsEndDate: string;
  deliverDate: string;
  nextSubscriptionDate: string;
};

export const sapiV1SimpleEarnLockedSubscriptionPreviewResponseSchema: Schema<SapiV1SimpleEarnLockedSubscriptionPreviewResponse> =
  s.object<SapiV1SimpleEarnLockedSubscriptionPreviewResponse>({
    rewardAsset: s.string(),
    totalRewardAmt: s.string(),
    extraRewardAsset: s.string(),
    estTotalExtraRewardAmt: s.string(),
    nextPay: s.string(),
    nextPayDate: s.string(),
    valueDate: s.string(),
    rewardsEndDate: s.string(),
    deliverDate: s.string(),
    nextSubscriptionDate: s.string(),
  });
