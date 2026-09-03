import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type TimeInForce = (typeof TimeInForce)[keyof typeof TimeInForce] | (string & {});

export const timeInForceSchema: EnumSchema<TimeInForce> = s.enumOf<TimeInForce>(TimeInForce);
