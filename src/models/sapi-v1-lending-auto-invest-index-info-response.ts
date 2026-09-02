import { s, type Schema } from "../core/index.js";
import { assetAllocationSchema, type AssetAllocation } from "./asset-allocation.js";

export type SapiV1LendingAutoInvestIndexInfoResponse = {
  indexId: number;
  indexName: string;
  status: string;
  assetAllocation: AssetAllocation[];
};

export const sapiV1LendingAutoInvestIndexInfoResponseSchema: Schema<SapiV1LendingAutoInvestIndexInfoResponse> =
  s.object<SapiV1LendingAutoInvestIndexInfoResponse>({
    indexId: s.number(),
    indexName: s.string(),
    status: s.string(),
    assetAllocation: s.array(s.lazy(() => assetAllocationSchema)),
  });
