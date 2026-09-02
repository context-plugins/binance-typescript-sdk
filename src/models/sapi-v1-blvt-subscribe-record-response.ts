import { s, type Schema } from "../core/index.js";

export type SapiV1BlvtSubscribeRecordResponse = {
  id: number;
  tokenName: string;
  amount: string;
  nav: string;
  fee: string;
  totalCharge: string;
  timestamp: number;
};

export const sapiV1BlvtSubscribeRecordResponseSchema: Schema<SapiV1BlvtSubscribeRecordResponse> =
  s.object<SapiV1BlvtSubscribeRecordResponse>({
    id: s.number(),
    tokenName: s.string(),
    amount: s.string(),
    nav: s.string(),
    fee: s.string(),
    totalCharge: s.string(),
    timestamp: s.number(),
  });
