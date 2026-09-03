import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountMarginTransferResponse = {
  txnId: string;
};

export const sapiV1SubAccountMarginTransferResponseSchema: Schema<SapiV1SubAccountMarginTransferResponse> =
  s.object<SapiV1SubAccountMarginTransferResponse>({
    txnId: s.string(),
  });
