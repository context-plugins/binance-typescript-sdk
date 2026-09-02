import { s, type Schema } from "../core/index.js";
import { row6Schema, type Row6 } from "./row6.js";

export type SapiV1AssetAssetDividendResponse = {
  rows: Row6[];
  total: number;
};

export const sapiV1AssetAssetDividendResponseSchema: Schema<SapiV1AssetAssetDividendResponse> =
  s.object<SapiV1AssetAssetDividendResponse>({
    rows: s.array(s.lazy(() => row6Schema)),
    total: s.number(),
  });
