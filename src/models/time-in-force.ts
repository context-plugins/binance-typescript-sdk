import { s, type EnumSchema } from "../core/index.js";

export const TimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type TimeInForce = (typeof TimeInForce)[keyof typeof TimeInForce] | (string & {});

export const timeInForceSchema: EnumSchema<TimeInForce> = s.enumOf<TimeInForce>(TimeInForce);
