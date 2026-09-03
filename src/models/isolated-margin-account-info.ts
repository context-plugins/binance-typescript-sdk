import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetSchema, type Asset } from "./asset.js";

export type IsolatedMarginAccountInfo = {
  assets: Asset[];
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
};

export const isolatedMarginAccountInfoSchema: Schema<IsolatedMarginAccountInfo> =
  s.object<IsolatedMarginAccountInfo>({
    assets: s.array(s.lazy(() => assetSchema)),
    totalAssetOfBtc: s.string(),
    totalLiabilityOfBtc: s.string(),
    totalNetAssetOfBtc: s.string(),
  });
