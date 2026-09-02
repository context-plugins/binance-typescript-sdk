import { s, type Schema } from "../core/index.js";

export type SapiV1MarginTradeCoeffResponse = {
  normalBar?: string;
  marginCallBar?: string;
  forceLiquidationBar?: string;
};

export const sapiV1MarginTradeCoeffResponseSchema: Schema<SapiV1MarginTradeCoeffResponse> =
  s.object<SapiV1MarginTradeCoeffResponse>({
    normalBar: s.optional(s.string()),
    marginCallBar: s.optional(s.string()),
    forceLiquidationBar: s.optional(s.string()),
  });
