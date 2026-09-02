import { s, type EnumSchema } from "../core/index.js";

export const CancelRestrictions = {
  OnlyNew: "ONLY_NEW",
  OnlyPartiallyFilled: "ONLY_PARTIALLY_FILLED",
} as const;
export type CancelRestrictions = (typeof CancelRestrictions)[keyof typeof CancelRestrictions] | (string & {});

export const cancelRestrictionsSchema: EnumSchema<CancelRestrictions> =
  s.enumOf<CancelRestrictions>(CancelRestrictions);
