import { s, type EnumSchema } from "../core/index.js";

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
