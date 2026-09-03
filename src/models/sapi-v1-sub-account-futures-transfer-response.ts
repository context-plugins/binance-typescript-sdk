import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountFuturesTransferResponse = {
  txnId: string;
};

export const sapiV1SubAccountFuturesTransferResponseSchema: Schema<SapiV1SubAccountFuturesTransferResponse> =
  s.object<SapiV1SubAccountFuturesTransferResponse>({
    txnId: s.string(),
  });
