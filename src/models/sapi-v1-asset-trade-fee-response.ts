import { s, type Schema } from "../core/index.js";

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
