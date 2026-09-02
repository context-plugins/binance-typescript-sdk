import { s, type Schema } from "../core/index.js";

export type SapiV1LendingAutoInvestAllAssetResponse = {
  targetAssets: string[];
  sourceAssets: string[];
};

export const sapiV1LendingAutoInvestAllAssetResponseSchema: Schema<SapiV1LendingAutoInvestAllAssetResponse> =
  s.object<SapiV1LendingAutoInvestAllAssetResponse>({
    targetAssets: s.array(s.string()),
    sourceAssets: s.array(s.string()),
  });
