import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1ConvertAssetInfoResponse = {
  asset: string;
  fraction: number;
};

export const sapiV1ConvertAssetInfoResponseSchema: Schema<SapiV1ConvertAssetInfoResponse> =
  s.object<SapiV1ConvertAssetInfoResponse>({
    asset: s.string(),
    fraction: s.int(),
  });
