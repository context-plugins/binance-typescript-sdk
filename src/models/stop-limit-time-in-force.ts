import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StopLimitTimeInForce = {
  Gtc: "GTC",
  Fok: "FOK",
  Ioc: "IOC",
} as const;
export type StopLimitTimeInForce =
  | (typeof StopLimitTimeInForce)[keyof typeof StopLimitTimeInForce]
  | (string & {});

export const stopLimitTimeInForceSchema: EnumSchema<StopLimitTimeInForce> =
  s.enumOf<StopLimitTimeInForce>(StopLimitTimeInForce);
