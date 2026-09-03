import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
