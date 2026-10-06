import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginTradeCoeffResponse = {
  /** Account's currently max borrowable amount with sufficient system availability */
  normalBar?: string;
  /** Max borrowable amount limited by the account level */
  marginCallBar?: string;
  /** Liquidation Margin Ratio */
  forceLiquidationBar?: string;
};

export const sapiV1MarginTradeCoeffResponseSchema: Schema<SapiV1MarginTradeCoeffResponse> =
  s.object<SapiV1MarginTradeCoeffResponse>({
    normalBar: s.optional(s.string()),
    marginCallBar: s.optional(s.string()),
    forceLiquidationBar: s.optional(s.string()),
  });
