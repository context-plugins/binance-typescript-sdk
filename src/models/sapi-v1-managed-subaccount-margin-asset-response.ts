import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userAssetSchema, type UserAsset } from "./user-asset.js";

export type SapiV1ManagedSubaccountMarginAssetResponse = {
  marginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  userAssets: UserAsset[];
};

export const sapiV1ManagedSubaccountMarginAssetResponseSchema: Schema<SapiV1ManagedSubaccountMarginAssetResponse> =
  s.object<SapiV1ManagedSubaccountMarginAssetResponse>({
    marginLevel: s.string(),
    totalAssetOfBtc: s.string(),
    totalLiabilityOfBtc: s.string(),
    totalNetAssetOfBtc: s.string(),
    userAssets: s.array(s.lazy(() => userAssetSchema)),
  });
