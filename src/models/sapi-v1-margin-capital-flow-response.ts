import { s, type Schema } from "../core/index.js";

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
    id: s.number(),
    tranId: s.number(),
    timestamp: s.number(),
    asset: s.string(),
    symbol: s.string(),
    type: s.string(),
    amount: s.string(),
  });
