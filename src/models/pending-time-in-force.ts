import { s, type EnumSchema } from "../core/index.js";

export const PendingTimeInForce = {
  Gtc: "GTC",
  Ioc: "IOC",
  Fok: "FOK",
} as const;
export type PendingTimeInForce = (typeof PendingTimeInForce)[keyof typeof PendingTimeInForce] | (string & {});

export const pendingTimeInForceSchema: EnumSchema<PendingTimeInForce> =
  s.enumOf<PendingTimeInForce>(PendingTimeInForce);
