import { s, type Schema } from "../core/index.js";
import { userAssetSchema, type UserAsset } from "./user-asset.js";

export type Data1 = {
  marginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  userAssets: UserAsset[];
};

export const data1Schema: Schema<Data1> = s.object<Data1>({
  marginLevel: s.string(),
  totalAssetOfBtc: s.string(),
  totalLiabilityOfBtc: s.string(),
  totalNetAssetOfBtc: s.string(),
  userAssets: s.array(s.lazy(() => userAssetSchema)),
});
