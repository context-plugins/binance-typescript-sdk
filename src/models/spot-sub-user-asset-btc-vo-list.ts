import { s, type Schema } from "../core/index.js";

export type SpotSubUserAssetBtcVoList = {
  email: string;
  totalAsset: string;
};

export const spotSubUserAssetBtcVoListSchema: Schema<SpotSubUserAssetBtcVoList> =
  s.object<SpotSubUserAssetBtcVoList>({
    email: s.string(),
    totalAsset: s.string(),
  });
