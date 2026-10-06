import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
    code: s.int(),
    msg: s.string(),
  });
