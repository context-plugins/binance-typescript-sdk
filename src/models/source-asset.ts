import { s, type Schema } from "../core/index.js";

export type SourceAsset = {
  sourceAsset: string;
  assetMinAmount: string;
  assetMaxAmount: string;
  scale: string;
  flexibleAmount: string;
};

export const sourceAssetSchema: Schema<SourceAsset> = s.object<SourceAsset>({
  sourceAsset: s.string(),
  assetMinAmount: s.string(),
  assetMaxAmount: s.string(),
  scale: s.string(),
  flexibleAmount: s.string(),
});
