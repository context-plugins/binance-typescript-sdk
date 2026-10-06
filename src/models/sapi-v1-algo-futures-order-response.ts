import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1AlgoFuturesOrderResponse = {
  algoId: number;
  success: boolean;
  code: number;
  msg: string;
};

export const sapiV1AlgoFuturesOrderResponseSchema: Schema<SapiV1AlgoFuturesOrderResponse> =
  s.object<SapiV1AlgoFuturesOrderResponse>({
    algoId: s.int(),
    success: s.boolean(),
    code: s.int(),
    msg: s.string(),
  });
