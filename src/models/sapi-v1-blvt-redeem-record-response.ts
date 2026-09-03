import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1BlvtRedeemRecordResponse = {
  id: number;
  tokenName: string;
  amount: string;
  nav: string;
  fee: string;
  netProceed: string;
  timestamp: number;
};

export const sapiV1BlvtRedeemRecordResponseSchema: Schema<SapiV1BlvtRedeemRecordResponse> =
  s.object<SapiV1BlvtRedeemRecordResponse>({
    id: s.number(),
    tokenName: s.string(),
    amount: s.string(),
    nav: s.string(),
    fee: s.string(),
    netProceed: s.string(),
    timestamp: s.number(),
  });
