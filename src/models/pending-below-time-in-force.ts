import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingBelowTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type PendingBelowTimeInForce =
  | (typeof PendingBelowTimeInForce)[keyof typeof PendingBelowTimeInForce]
  | (string & {});

export const pendingBelowTimeInForceSchema: EnumSchema<PendingBelowTimeInForce> =
  s.enumOf<PendingBelowTimeInForce>(PendingBelowTimeInForce);
