import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanType = {
  Single: "SINGLE",
  Portfolio: "PORTFOLIO",
  Index: "INDEX",
} as const;
export type PlanType = (typeof PlanType)[keyof typeof PlanType] | (string & {});

export const planTypeSchema: EnumSchema<PlanType> = s.enumOf<PlanType>(PlanType);
