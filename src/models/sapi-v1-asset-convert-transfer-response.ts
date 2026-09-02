import { s, type Schema } from "../core/index.js";

export type SapiV1AssetConvertTransferResponse = {
  tranId: number;
  status: string;
};

export const sapiV1AssetConvertTransferResponseSchema: Schema<SapiV1AssetConvertTransferResponse> =
  s.object<SapiV1AssetConvertTransferResponse>({
    tranId: s.number(),
    status: s.string(),
  });
