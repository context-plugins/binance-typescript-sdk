import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  tierAnnualPercentageRateSchema,
  type TierAnnualPercentageRate,
} from "./tier-annual-percentage-rate.js";

export type Row40 = {
  totalAmount: string;
  tierAnnualPercentageRate: TierAnnualPercentageRate;
  latestAnnualPercentageRate: string;
  yesterdayAirdropPercentageRate: string;
  asset: string;
  airDropAsset: string;
  canRedeem: boolean;
  collateralAmount: string;
  productId: string;
  yesterdayRealTimeRewards: string;
  cumulativeBonusRewards: string;
  cumulativeRealTimeRewards: string;
  cumulativeTotalRewards: string;
  autoSubscribe: boolean;
};

export const row40Schema: Schema<Row40> = s.object<Row40>({
  totalAmount: s.string(),
  tierAnnualPercentageRate: tierAnnualPercentageRateSchema,
  latestAnnualPercentageRate: s.string(),
  yesterdayAirdropPercentageRate: s.string(),
  asset: s.string(),
  airDropAsset: s.string(),
  canRedeem: s.boolean(),
  collateralAmount: s.string(),
  productId: s.string(),
  yesterdayRealTimeRewards: s.string(),
  cumulativeBonusRewards: s.string(),
  cumulativeRealTimeRewards: s.string(),
  cumulativeTotalRewards: s.string(),
  autoSubscribe: s.boolean(),
});
