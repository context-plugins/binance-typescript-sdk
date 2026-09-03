import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetAllocation1Schema, type AssetAllocation1 } from "./asset-allocation1.js";
import { detail4Schema, type Detail4 } from "./detail4.js";

export type SapiV1LendingAutoInvestIndexUserSummaryResponse = {
  indexId: number;
  totalInvestedInUsd: string;
  currentInvestedInUsd: string;
  pnlInUsd: string;
  roi: string;
  assetAllocation: AssetAllocation1[];
  details: Detail4[];
};

export const sapiV1LendingAutoInvestIndexUserSummaryResponseSchema: Schema<SapiV1LendingAutoInvestIndexUserSummaryResponse> =
  s.object<SapiV1LendingAutoInvestIndexUserSummaryResponse>({
    indexId: s.number(),
    totalInvestedInUsd: s.string(),
    currentInvestedInUsd: s.string(),
    pnlInUsd: s.string(),
    roi: s.string(),
    assetAllocation: s.array(s.lazy(() => assetAllocation1Schema)),
    details: s.array(s.lazy(() => detail4Schema)),
    _keysMap: {
      totalInvestedInUsd: "totalInvestedInUSD",
      currentInvestedInUsd: "currentInvestedInUSD",
      pnlInUsd: "pnlInUSD",
    },
  });
