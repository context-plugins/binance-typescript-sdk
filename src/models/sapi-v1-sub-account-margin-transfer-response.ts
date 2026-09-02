import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountMarginTransferResponse = {
  txnId: string;
};

export const sapiV1SubAccountMarginTransferResponseSchema: Schema<SapiV1SubAccountMarginTransferResponse> =
  s.object<SapiV1SubAccountMarginTransferResponse>({
    txnId: s.string(),
  });
