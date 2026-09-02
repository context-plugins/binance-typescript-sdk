import { s, type Schema } from "../core/index.js";
import { row8Schema, type Row8 } from "./row8.js";

export type SapiV1AssetConvertTransferQueryByPageResponse = {
  total: number;
  rows: Row8[];
};

export const sapiV1AssetConvertTransferQueryByPageResponseSchema: Schema<SapiV1AssetConvertTransferQueryByPageResponse> =
  s.object<SapiV1AssetConvertTransferQueryByPageResponse>({
    total: s.number(),
    rows: s.array(s.lazy(() => row8Schema)),
  });
