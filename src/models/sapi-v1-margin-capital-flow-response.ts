import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginCapitalFlowResponse = {
  id: number;
  tranId: number;
  timestamp: number;
  asset: string;
  symbol: string;
  type: string;
  amount: string;
};

export const sapiV1MarginCapitalFlowResponseSchema: Schema<SapiV1MarginCapitalFlowResponse> =
  s.object<SapiV1MarginCapitalFlowResponse>({
    id: s.int(),
    tranId: s.int(),
    timestamp: s.int(),
    asset: s.string(),
    symbol: s.string(),
    type: s.string(),
    amount: s.string(),
  });
