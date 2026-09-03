import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1AssetTradeFeeResponse = {
  symbol: string;
  makerCommission: string;
  takerCommission: string;
};

export const sapiV1AssetTradeFeeResponseSchema: Schema<SapiV1AssetTradeFeeResponse> =
  s.object<SapiV1AssetTradeFeeResponse>({
    symbol: s.string(),
    makerCommission: s.string(),
    takerCommission: s.string(),
  });
