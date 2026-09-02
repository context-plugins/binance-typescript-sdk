import { s, type Schema } from "../core/index.js";

export type SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse = {
  totalAmount: string;
  rewardAsset: string;
  airDropAsset: string;
  estDailyBonusRewards: string;
  estDailyRealTimeRewards: string;
  estDailyAirdropRewards: string;
};

export const sapiV1SimpleEarnFlexibleSubscriptionPreviewResponseSchema: Schema<SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse> =
  s.object<SapiV1SimpleEarnFlexibleSubscriptionPreviewResponse>({
    totalAmount: s.string(),
    rewardAsset: s.string(),
    airDropAsset: s.string(),
    estDailyBonusRewards: s.string(),
    estDailyRealTimeRewards: s.string(),
    estDailyAirdropRewards: s.string(),
  });
