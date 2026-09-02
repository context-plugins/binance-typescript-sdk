import { s, type Schema } from "../core/index.js";

export type SapiV1AlgoSpotOrderResponse = {
  algoId: number;
  success: boolean;
  code: number;
  msg: string;
};

export const sapiV1AlgoSpotOrderResponseSchema: Schema<SapiV1AlgoSpotOrderResponse> =
  s.object<SapiV1AlgoSpotOrderResponse>({
    algoId: s.number(),
    success: s.boolean(),
    code: s.number(),
    msg: s.string(),
  });
