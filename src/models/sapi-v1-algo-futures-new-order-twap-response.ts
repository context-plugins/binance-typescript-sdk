import { s, type Schema } from "../core/index.js";

export type SapiV1AlgoFuturesNewOrderTwapResponse = {
  clientAlgoId: string;
  success: boolean;
  code: number;
  msg: string;
};

export const sapiV1AlgoFuturesNewOrderTwapResponseSchema: Schema<SapiV1AlgoFuturesNewOrderTwapResponse> =
  s.object<SapiV1AlgoFuturesNewOrderTwapResponse>({
    clientAlgoId: s.string(),
    success: s.boolean(),
    code: s.number(),
    msg: s.string(),
  });
