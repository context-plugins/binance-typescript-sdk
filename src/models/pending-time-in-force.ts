import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type PendingTimeInForce = (typeof PendingTimeInForce)[keyof typeof PendingTimeInForce] | (string & {});

export const pendingTimeInForceSchema: EnumSchema<PendingTimeInForce> =
  s.enumOf<PendingTimeInForce>(PendingTimeInForce);
