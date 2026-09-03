import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SpotSubUserAssetBtcVoList = {
  email: string;
  totalAsset: string;
};

export const spotSubUserAssetBtcVoListSchema: Schema<SpotSubUserAssetBtcVoList> =
  s.object<SpotSubUserAssetBtcVoList>({
    email: s.string(),
    totalAsset: s.string(),
  });
