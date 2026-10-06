import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type List7 = {
  id: string;
  investCoin: string;
  exercisedCoin: string;
  strikePrice: string;
  duration: number;
  settleDate: number;
  purchaseDecimal: number;
  purchaseEndTime: number;
  canPurchase: boolean;
  apr: string;
  orderId: number;
  minAmount: string;
  maxAmount: string;
  createTimestamp: number;
  optionType: string;
  isAutoCompoundEnable: boolean;
  autoCompoundPlanList: string[];
};

export const list7Schema: Schema<List7> = s.object<List7>({
  id: s.string(),
  investCoin: s.string(),
  exercisedCoin: s.string(),
  strikePrice: s.string(),
  duration: s.int(),
  settleDate: s.int(),
  purchaseDecimal: s.int(),
  purchaseEndTime: s.int(),
  canPurchase: s.boolean(),
  apr: s.string(),
  orderId: s.int(),
  minAmount: s.string(),
  maxAmount: s.string(),
  createTimestamp: s.int(),
  optionType: s.string(),
  isAutoCompoundEnable: s.boolean(),
  autoCompoundPlanList: s.array(s.string()),
});
