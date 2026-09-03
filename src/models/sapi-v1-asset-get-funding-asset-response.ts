import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1AssetGetFundingAssetResponse = {
  asset: string;
  free: string;
  locked: string;
  freeze: string;
  withdrawing: string;
  btcValuation: string;
};

export const sapiV1AssetGetFundingAssetResponseSchema: Schema<SapiV1AssetGetFundingAssetResponse> =
  s.object<SapiV1AssetGetFundingAssetResponse>({
    asset: s.string(),
    free: s.string(),
    locked: s.string(),
    freeze: s.string(),
    withdrawing: s.string(),
    btcValuation: s.string(),
  });
