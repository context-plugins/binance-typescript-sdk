import { s, type Schema } from "../core/index.js";

export type UserAsset = {
  asset: string;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
};

export const userAssetSchema: Schema<UserAsset> = s.object<UserAsset>({
  asset: s.string(),
  borrowed: s.string(),
  free: s.string(),
  interest: s.string(),
  locked: s.string(),
  netAsset: s.string(),
});
