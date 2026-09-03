import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingAboveTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type PendingAboveTimeInForce =
  | (typeof PendingAboveTimeInForce)[keyof typeof PendingAboveTimeInForce]
  | (string & {});

export const pendingAboveTimeInForceSchema: EnumSchema<PendingAboveTimeInForce> =
  s.enumOf<PendingAboveTimeInForce>(PendingAboveTimeInForce);
