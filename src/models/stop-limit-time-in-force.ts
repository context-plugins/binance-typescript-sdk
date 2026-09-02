import { s, type EnumSchema } from "../core/index.js";

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
