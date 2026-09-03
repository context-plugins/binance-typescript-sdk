import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV3AssetGetUserAssetResponse = {
  asset: string;
  free: string;
  locked: string;
  freeze: string;
  withdrawing: string;
  ipoable: string;
  btcValuation: string;
};

export const sapiV3AssetGetUserAssetResponseSchema: Schema<SapiV3AssetGetUserAssetResponse> =
  s.object<SapiV3AssetGetUserAssetResponse>({
    asset: s.string(),
    free: s.string(),
    locked: s.string(),
    freeze: s.string(),
    withdrawing: s.string(),
    ipoable: s.string(),
    btcValuation: s.string(),
  });
