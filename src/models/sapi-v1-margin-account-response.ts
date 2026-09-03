import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userAssetSchema, type UserAsset } from "./user-asset.js";

export type SapiV1MarginAccountResponse = {
  created: boolean;
  borrowEnabled: boolean;
  marginLevel: string;
  collateralMarginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  totalCollateralValueInUsdt: string;
  tradeEnabled: boolean;
  transferInEnabled: boolean;
  transferOutEnabled: boolean;
  accountType: string;
  userAssets: UserAsset[];
};

export const sapiV1MarginAccountResponseSchema: Schema<SapiV1MarginAccountResponse> =
  s.object<SapiV1MarginAccountResponse>({
    created: s.boolean(),
    borrowEnabled: s.boolean(),
    marginLevel: s.string(),
    collateralMarginLevel: s.string(),
    totalAssetOfBtc: s.string(),
    totalLiabilityOfBtc: s.string(),
    totalNetAssetOfBtc: s.string(),
    totalCollateralValueInUsdt: s.string(),
    tradeEnabled: s.boolean(),
    transferInEnabled: s.boolean(),
    transferOutEnabled: s.boolean(),
    accountType: s.string(),
    userAssets: s.array(s.lazy(() => userAssetSchema)),
    _keysMap: {
      totalCollateralValueInUsdt: "TotalCollateralValueInUSDT",
    },
  });
