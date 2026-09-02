import { s, type EnumSchema } from "../core/index.js";

export const BelowTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type BelowTimeInForce = (typeof BelowTimeInForce)[keyof typeof BelowTimeInForce] | (string & {});

export const belowTimeInForceSchema: EnumSchema<BelowTimeInForce> =
  s.enumOf<BelowTimeInForce>(BelowTimeInForce);
