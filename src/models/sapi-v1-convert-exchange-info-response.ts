import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1ConvertExchangeInfoResponse = {
  fromAsset: string;
  toAsset: string;
  fromAssetMinAmount: string;
  fromAssetMaxAmount: string;
  toAssetMinAmount: string;
  toAssetMaxAmount: string;
};

export const sapiV1ConvertExchangeInfoResponseSchema: Schema<SapiV1ConvertExchangeInfoResponse> =
  s.object<SapiV1ConvertExchangeInfoResponse>({
    fromAsset: s.string(),
    toAsset: s.string(),
    fromAssetMinAmount: s.string(),
    fromAssetMaxAmount: s.string(),
    toAssetMinAmount: s.string(),
    toAssetMaxAmount: s.string(),
  });
