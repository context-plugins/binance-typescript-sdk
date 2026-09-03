import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  spotSubUserAssetBtcVoListSchema,
  type SpotSubUserAssetBtcVoList,
} from "./spot-sub-user-asset-btc-vo-list.js";

export type SapiV1SubAccountSpotSummaryResponse = {
  totalCount: number;
  masterAccountTotalAsset: string;
  spotSubUserAssetBtcVoList: SpotSubUserAssetBtcVoList[];
};

export const sapiV1SubAccountSpotSummaryResponseSchema: Schema<SapiV1SubAccountSpotSummaryResponse> =
  s.object<SapiV1SubAccountSpotSummaryResponse>({
    totalCount: s.number(),
    masterAccountTotalAsset: s.string(),
    spotSubUserAssetBtcVoList: s.array(s.lazy(() => spotSubUserAssetBtcVoListSchema)),
  });
