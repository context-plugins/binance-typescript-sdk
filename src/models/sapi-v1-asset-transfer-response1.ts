import { s, type Schema } from "../core/index.js";

export type SapiV1AssetTransferResponse1 = {
  tranId: number;
};

export const sapiV1AssetTransferResponse1Schema: Schema<SapiV1AssetTransferResponse1> =
  s.object<SapiV1AssetTransferResponse1>({
    tranId: s.number(),
  });
