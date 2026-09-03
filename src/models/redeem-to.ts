import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RedeemTo = {
  Spot: "SPOT",
  Flexible: "FLEXIBLE",
} as const;
export type RedeemTo = (typeof RedeemTo)[keyof typeof RedeemTo] | (string & {});

export const redeemToSchema: EnumSchema<RedeemTo> = s.enumOf<RedeemTo>(RedeemTo);
