import { s, type Schema } from "../core/index.js";

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
