import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountFuturesInternalTransferResponse1 = {
  success: boolean;
  txnId: string;
};

export const sapiV1SubAccountFuturesInternalTransferResponse1Schema: Schema<SapiV1SubAccountFuturesInternalTransferResponse1> =
  s.object<SapiV1SubAccountFuturesInternalTransferResponse1>({
    success: s.boolean(),
    txnId: s.string(),
  });
