import { s, type EnumSchema } from "../core/index.js";

export const SubscriptionCycle = {
  H1: "H1",
  H4: "H4",
  H8: "H8",
  H12: "H12",
  Weekly: "WEEKLY",
  Daily: "DAILY",
  Monthly: "MONTHLY",
  BiWeekly: "BI_WEEKLY",
} as const;
export type SubscriptionCycle = (typeof SubscriptionCycle)[keyof typeof SubscriptionCycle] | (string & {});

export const subscriptionCycleSchema: EnumSchema<SubscriptionCycle> =
  s.enumOf<SubscriptionCycle>(SubscriptionCycle);
