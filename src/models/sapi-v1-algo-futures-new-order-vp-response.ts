import { s, type Schema } from "../core/index.js";

export type SapiV1AlgoFuturesNewOrderVpResponse = {
  clientAlgoId: string;
  success: boolean;
  code: number;
  msg: string;
};

export const sapiV1AlgoFuturesNewOrderVpResponseSchema: Schema<SapiV1AlgoFuturesNewOrderVpResponse> =
  s.object<SapiV1AlgoFuturesNewOrderVpResponse>({
    clientAlgoId: s.string(),
    success: s.boolean(),
    code: s.number(),
    msg: s.string(),
  });
