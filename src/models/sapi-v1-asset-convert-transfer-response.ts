import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1AssetConvertTransferResponse = {
  tranId: number;
  status: string;
};

export const sapiV1AssetConvertTransferResponseSchema: Schema<SapiV1AssetConvertTransferResponse> =
  s.object<SapiV1AssetConvertTransferResponse>({
    tranId: s.int(),
    status: s.string(),
  });
