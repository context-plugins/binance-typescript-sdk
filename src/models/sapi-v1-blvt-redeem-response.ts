import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1BlvtRedeemResponse = {
  id: number;
  /** S, P, and F for "success", "pending", and "failure" */
  status: string;
  tokenName: string;
  /** Redemption token amount */
  redeemAmount: string;
  /** Redemption value in usdt */
  amount: string;
  timestamp: number;
};

export const sapiV1BlvtRedeemResponseSchema: Schema<SapiV1BlvtRedeemResponse> =
  s.object<SapiV1BlvtRedeemResponse>({
    id: s.int(),
    status: s.string(),
    tokenName: s.string(),
    redeemAmount: s.string(),
    amount: s.string(),
    timestamp: s.int(),
  });
