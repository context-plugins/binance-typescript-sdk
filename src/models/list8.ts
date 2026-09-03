import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type List8 = {
  id: string;
  investCoin: string;
  exercisedCoin: string;
  subscriptionAmount: string;
  strikePrice: string;
  duration: number;
  settleDate: number;
  purchaseStatus: string;
  apr: string;
  orderId: number;
  purchaseEndTime: number;
  optionType: string;
  autoCompoundPlan: string;
};

export const list8Schema: Schema<List8> = s.object<List8>({
  id: s.string(),
  investCoin: s.string(),
  exercisedCoin: s.string(),
  subscriptionAmount: s.string(),
  strikePrice: s.string(),
  duration: s.number(),
  settleDate: s.number(),
  purchaseStatus: s.string(),
  apr: s.string(),
  orderId: s.number(),
  purchaseEndTime: s.number(),
  optionType: s.string(),
  autoCompoundPlan: s.string(),
});
