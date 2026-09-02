import { s, type Schema } from "../core/index.js";

export type MarginUserAssetVoList = {
  asset: string;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
};

export const marginUserAssetVoListSchema: Schema<MarginUserAssetVoList> = s.object<MarginUserAssetVoList>({
  asset: s.string(),
  borrowed: s.string(),
  free: s.string(),
  interest: s.string(),
  locked: s.string(),
  netAsset: s.string(),
});
