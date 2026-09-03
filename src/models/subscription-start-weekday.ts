import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionStartWeekday = {
  Mon: "MON",
  Tue: "TUE",
  Wed: "WED",
  Thu: "THU",
  Fri: "FRI",
  Sat: "SAT",
  Sun: "SUN",
} as const;
export type SubscriptionStartWeekday =
  | (typeof SubscriptionStartWeekday)[keyof typeof SubscriptionStartWeekday]
  | (string & {});

export const subscriptionStartWeekdaySchema: EnumSchema<SubscriptionStartWeekday> =
  s.enumOf<SubscriptionStartWeekday>(SubscriptionStartWeekday);
