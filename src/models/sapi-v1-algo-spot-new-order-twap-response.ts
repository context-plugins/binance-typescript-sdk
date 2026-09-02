import { s, type Schema } from "../core/index.js";

export type SapiV1AlgoSpotNewOrderTwapResponse = {
  clientAlgoId: string;
  success: boolean;
  code: number;
  msg: string;
};

export const sapiV1AlgoSpotNewOrderTwapResponseSchema: Schema<SapiV1AlgoSpotNewOrderTwapResponse> =
  s.object<SapiV1AlgoSpotNewOrderTwapResponse>({
    clientAlgoId: s.string(),
    success: s.boolean(),
    code: s.number(),
    msg: s.string(),
  });
