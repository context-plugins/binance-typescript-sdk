import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountUniversalTransferResponse1 = {
  tranId: number;
  clientTranId: string;
};

export const sapiV1SubAccountUniversalTransferResponse1Schema: Schema<SapiV1SubAccountUniversalTransferResponse1> =
  s.object<SapiV1SubAccountUniversalTransferResponse1>({
    tranId: s.int(),
    clientTranId: s.string(),
  });
