import { s, type Schema } from "../core/index.js";

export type AssetAllocation = {
  targetAsset: string;
  allocation: string;
};

export const assetAllocationSchema: Schema<AssetAllocation> = s.object<AssetAllocation>({
  targetAsset: s.string(),
  allocation: s.string(),
});
