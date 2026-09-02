import { s, type EnumSchema } from "../core/index.js";

export const AboveTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type AboveTimeInForce = (typeof AboveTimeInForce)[keyof typeof AboveTimeInForce] | (string & {});

export const aboveTimeInForceSchema: EnumSchema<AboveTimeInForce> =
  s.enumOf<AboveTimeInForce>(AboveTimeInForce);
