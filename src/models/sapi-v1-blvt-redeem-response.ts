import { s, type Schema } from "../core/index.js";

export type SapiV1BlvtRedeemResponse = {
  id: number;
  status: string;
  tokenName: string;
  redeemAmount: string;
  amount: string;
  timestamp: number;
};

export const sapiV1BlvtRedeemResponseSchema: Schema<SapiV1BlvtRedeemResponse> =
  s.object<SapiV1BlvtRedeemResponse>({
    id: s.number(),
    status: s.string(),
    tokenName: s.string(),
    redeemAmount: s.string(),
    amount: s.string(),
    timestamp: s.number(),
  });
