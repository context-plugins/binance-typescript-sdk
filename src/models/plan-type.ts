import { s, type EnumSchema } from "../core/index.js";

export const PlanType = {
  Single: "SINGLE",
  Portfolio: "PORTFOLIO",
  Index: "INDEX",
} as const;
export type PlanType = (typeof PlanType)[keyof typeof PlanType] | (string & {});

export const planTypeSchema: EnumSchema<PlanType> = s.enumOf<PlanType>(PlanType);
