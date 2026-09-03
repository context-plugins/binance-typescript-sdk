import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AboveTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type AboveTimeInForce = (typeof AboveTimeInForce)[keyof typeof AboveTimeInForce] | (string & {});

export const aboveTimeInForceSchema: EnumSchema<AboveTimeInForce> =
  s.enumOf<AboveTimeInForce>(AboveTimeInForce);
