import { s, type Schema } from "../core/index.js";
import { ctrSchema, type Ctr } from "./ctr.js";

export type SapiV1AssetAssetDetailResponse = {
  ctr: Ctr;
};

export const sapiV1AssetAssetDetailResponseSchema: Schema<SapiV1AssetAssetDetailResponse> =
  s.object<SapiV1AssetAssetDetailResponse>({
    ctr: ctrSchema,
    _keysMap: {
      ctr: "CTR",
    },
  });
