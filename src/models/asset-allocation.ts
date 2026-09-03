import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetAllocation = {
  targetAsset: string;
  allocation: string;
};

export const assetAllocationSchema: Schema<AssetAllocation> = s.object<AssetAllocation>({
  targetAsset: s.string(),
  allocation: s.string(),
});
