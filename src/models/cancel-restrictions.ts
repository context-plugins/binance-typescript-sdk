import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CancelRestrictions = {
  OnlyNew: "ONLY_NEW",
  OnlyPartiallyFilled: "ONLY_PARTIALLY_FILLED",
} as const;
export type CancelRestrictions = (typeof CancelRestrictions)[keyof typeof CancelRestrictions] | (string & {});

export const cancelRestrictionsSchema: EnumSchema<CancelRestrictions> =
  s.enumOf<CancelRestrictions>(CancelRestrictions);
