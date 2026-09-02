import { s, type EnumSchema } from "../core/index.js";

export const AutoCompoundPlan = {
  None: "NONE",
  Standard: "STANDARD",
  Advance: "ADVANCE",
} as const;
export type AutoCompoundPlan = (typeof AutoCompoundPlan)[keyof typeof AutoCompoundPlan] | (string & {});

export const autoCompoundPlanSchema: EnumSchema<AutoCompoundPlan> =
  s.enumOf<AutoCompoundPlan>(AutoCompoundPlan);
