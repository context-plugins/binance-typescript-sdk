import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountType3 = {
  Main: "MAIN",
  Card: "CARD",
} as const;
export type AccountType3 = (typeof AccountType3)[keyof typeof AccountType3] | (string & {});

export const accountType3Schema: EnumSchema<AccountType3> = s.enumOf<AccountType3>(AccountType3);
