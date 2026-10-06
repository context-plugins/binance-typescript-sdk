import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1BlvtSubscribeRecordResponse = {
  id: number;
  tokenName: string;
  /** Subscription amount */
  amount: string;
  /** NAV price of subscription */
  nav: string;
  /** Subscription fee in usdt */
  fee: string;
  /** Subscription cost in usdt */
  totalCharge: string;
  timestamp: number;
};

export const sapiV1BlvtSubscribeRecordResponseSchema: Schema<SapiV1BlvtSubscribeRecordResponse> =
  s.object<SapiV1BlvtSubscribeRecordResponse>({
    id: s.int(),
    tokenName: s.string(),
    amount: s.string(),
    nav: s.string(),
    fee: s.string(),
    totalCharge: s.string(),
    timestamp: s.int(),
  });
