import { s, type EnumSchema } from "../core/index.js";

export const RedeemTo = {
  Spot: "SPOT",
  Flexible: "FLEXIBLE",
} as const;
export type RedeemTo = (typeof RedeemTo)[keyof typeof RedeemTo] | (string & {});

export const redeemToSchema: EnumSchema<RedeemTo> = s.enumOf<RedeemTo>(RedeemTo);
