import { s, type Schema } from "../core/index.js";

export type AssetAllocation1 = {
  targetAsset: string;
  allocation: string;
};

export const assetAllocation1Schema: Schema<AssetAllocation1> = s.object<AssetAllocation1>({
  targetAsset: s.string(),
  allocation: s.string(),
});
