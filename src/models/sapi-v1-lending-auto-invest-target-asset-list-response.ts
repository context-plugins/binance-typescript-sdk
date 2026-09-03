import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { autoInvestAssetListSchema, type AutoInvestAssetList } from "./auto-invest-asset-list.js";

export type SapiV1LendingAutoInvestTargetAssetListResponse = {
  targetAssets?: string;
  autoInvestAssetList?: AutoInvestAssetList[];
};

export const sapiV1LendingAutoInvestTargetAssetListResponseSchema: Schema<SapiV1LendingAutoInvestTargetAssetListResponse> =
  s.object<SapiV1LendingAutoInvestTargetAssetListResponse>({
    targetAssets: s.optional(s.string()),
    autoInvestAssetList: s.optional(s.array(s.lazy(() => autoInvestAssetListSchema))),
  });
