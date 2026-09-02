import { s, type Schema } from "../core/index.js";

export type SapiV1AlgoFuturesOrderResponse = {
  algoId: number;
  success: boolean;
  code: number;
  msg: string;
};

export const sapiV1AlgoFuturesOrderResponseSchema: Schema<SapiV1AlgoFuturesOrderResponse> =
  s.object<SapiV1AlgoFuturesOrderResponse>({
    algoId: s.number(),
    success: s.boolean(),
    code: s.number(),
    msg: s.string(),
  });
