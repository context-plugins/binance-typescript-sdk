import { s, type Schema } from "../core/index.js";

export type Detail6 = {
  asset: string;
  rewardAsset: string;
  duration: number;
  renewable: boolean;
  isSoldOut: boolean;
  apr: string;
  status: string;
  subscriptionStartTime: string;
  extraRewardAsset: string;
  extraRewardApr: string;
};

export const detail6Schema: Schema<Detail6> = s.object<Detail6>({
  asset: s.string(),
  rewardAsset: s.string(),
  duration: s.number(),
  renewable: s.boolean(),
  isSoldOut: s.boolean(),
  apr: s.string(),
  status: s.string(),
  subscriptionStartTime: s.string(),
  extraRewardAsset: s.string(),
  extraRewardApr: s.string(),
  _keysMap: {
    extraRewardApr: "extraRewardAPR",
  },
});
