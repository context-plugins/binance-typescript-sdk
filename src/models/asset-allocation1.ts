import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetAllocation1 = {
  targetAsset: string;
  allocation: string;
};

export const assetAllocation1Schema: Schema<AssetAllocation1> = s.object<AssetAllocation1>({
  targetAsset: s.string(),
  allocation: s.string(),
});
