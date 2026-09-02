import { s, type EnumSchema } from "../core/index.js";

export const Status2 = {
  Pending: "PENDING",
  PurchaseSuccess: "PURCHASE_SUCCESS",
  Settled: "SETTLED",
  PurchaseFail: "PURCHASE_FAIL",
  Refunding: "REFUNDING",
  RefundSuccess: "REFUND_SUCCESS",
  Settling: "SETTLING",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
