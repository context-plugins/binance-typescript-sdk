import { s, type Schema } from "../core/index.js";

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
