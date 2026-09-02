import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountUniversalTransferResponse1 = {
  tranId: number;
  clientTranId: string;
};

export const sapiV1SubAccountUniversalTransferResponse1Schema: Schema<SapiV1SubAccountUniversalTransferResponse1> =
  s.object<SapiV1SubAccountUniversalTransferResponse1>({
    tranId: s.number(),
    clientTranId: s.string(),
  });
