import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1BlvtSubscribeResponse = {
  id: number;
  /** S, P, and F for "success", "pending", and "failure" */
  status: string;
  tokenName: string;
  /** subscribed token amount */
  amount: string;
  /** subscription cost in usdt */
  cost: string;
  timestamp: number;
};

export const sapiV1BlvtSubscribeResponseSchema: Schema<SapiV1BlvtSubscribeResponse> =
  s.object<SapiV1BlvtSubscribeResponse>({
    id: s.int(),
    status: s.string(),
    tokenName: s.string(),
    amount: s.string(),
    cost: s.string(),
    timestamp: s.int(),
  });
