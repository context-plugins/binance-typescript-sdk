import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BelowTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type BelowTimeInForce = (typeof BelowTimeInForce)[keyof typeof BelowTimeInForce] | (string & {});

export const belowTimeInForceSchema: EnumSchema<BelowTimeInForce> =
  s.enumOf<BelowTimeInForce>(BelowTimeInForce);
