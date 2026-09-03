import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
