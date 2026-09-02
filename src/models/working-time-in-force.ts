import { s, type EnumSchema } from "../core/index.js";

export const WorkingTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type WorkingTimeInForce = (typeof WorkingTimeInForce)[keyof typeof WorkingTimeInForce] | (string & {});

export const workingTimeInForceSchema: EnumSchema<WorkingTimeInForce> =
  s.enumOf<WorkingTimeInForce>(WorkingTimeInForce);
