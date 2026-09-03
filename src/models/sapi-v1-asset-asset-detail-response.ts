import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
