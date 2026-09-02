import { s, type Schema } from "../core/index.js";
import {
  tierAnnualPercentageRateSchema,
  type TierAnnualPercentageRate,
} from "./tier-annual-percentage-rate.js";

export type Row38 = {
  asset: string;
  latestAnnualPercentageRate: string;
  tierAnnualPercentageRate: TierAnnualPercentageRate;
  airDropPercentageRate: string;
  canPurchase: boolean;
  canRedeem: boolean;
  isSoldOut: boolean;
  hot: boolean;
  minPurchaseAmount: string;
  productId: string;
  subscriptionStartTime: string;
  status: string;
};

export const row38Schema: Schema<Row38> = s.object<Row38>({
  asset: s.string(),
  latestAnnualPercentageRate: s.string(),
  tierAnnualPercentageRate: tierAnnualPercentageRateSchema,
  airDropPercentageRate: s.string(),
  canPurchase: s.boolean(),
  canRedeem: s.boolean(),
  isSoldOut: s.boolean(),
  hot: s.boolean(),
  minPurchaseAmount: s.string(),
  productId: s.string(),
  subscriptionStartTime: s.string(),
  status: s.string(),
});
