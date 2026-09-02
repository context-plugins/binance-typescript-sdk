import { s, type EnumSchema } from "../core/index.js";

export const PlanType1 = {
  Single: "SINGLE",
  Portfolio: "PORTFOLIO",
  Index: "INDEX",
  All: "ALL",
} as const;
export type PlanType1 = (typeof PlanType1)[keyof typeof PlanType1] | (string & {});

export const planType1Schema: EnumSchema<PlanType1> = s.enumOf<PlanType1>(PlanType1);
