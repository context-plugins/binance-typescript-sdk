import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1BlvtSubscribeResponse = {
  id: number;
  status: string;
  tokenName: string;
  amount: string;
  cost: string;
  timestamp: number;
};

export const sapiV1BlvtSubscribeResponseSchema: Schema<SapiV1BlvtSubscribeResponse> =
  s.object<SapiV1BlvtSubscribeResponse>({
    id: s.number(),
    status: s.string(),
    tokenName: s.string(),
    amount: s.string(),
    cost: s.string(),
    timestamp: s.number(),
  });
