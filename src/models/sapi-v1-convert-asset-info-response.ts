import { s, type Schema } from "../core/index.js";

export type SapiV1ConvertAssetInfoResponse = {
  asset: string;
  fraction: number;
};

export const sapiV1ConvertAssetInfoResponseSchema: Schema<SapiV1ConvertAssetInfoResponse> =
  s.object<SapiV1ConvertAssetInfoResponse>({
    asset: s.string(),
    fraction: s.number(),
  });
