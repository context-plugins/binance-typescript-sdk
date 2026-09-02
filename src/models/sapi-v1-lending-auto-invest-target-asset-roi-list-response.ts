import { s, type Schema } from "../core/index.js";

export type SapiV1LendingAutoInvestTargetAssetRoiListResponse = {
  date: string;
  simulateRoi: string;
};

export const sapiV1LendingAutoInvestTargetAssetRoiListResponseSchema: Schema<SapiV1LendingAutoInvestTargetAssetRoiListResponse> =
  s.object<SapiV1LendingAutoInvestTargetAssetRoiListResponse>({
    date: s.string(),
    simulateRoi: s.string(),
  });
