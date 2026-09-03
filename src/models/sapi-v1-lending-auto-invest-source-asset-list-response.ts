import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourceAssetSchema, type SourceAsset } from "./source-asset.js";

export type SapiV1LendingAutoInvestSourceAssetListResponse = {
  feeRate: string;
  sourceAssets: SourceAsset[];
};

export const sapiV1LendingAutoInvestSourceAssetListResponseSchema: Schema<SapiV1LendingAutoInvestSourceAssetListResponse> =
  s.object<SapiV1LendingAutoInvestSourceAssetListResponse>({
    feeRate: s.string(),
    sourceAssets: s.array(s.lazy(() => sourceAssetSchema)),
  });
