import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
