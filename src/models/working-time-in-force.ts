import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WorkingTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type WorkingTimeInForce = (typeof WorkingTimeInForce)[keyof typeof WorkingTimeInForce] | (string & {});

export const workingTimeInForceSchema: EnumSchema<WorkingTimeInForce> =
  s.enumOf<WorkingTimeInForce>(WorkingTimeInForce);
