import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountFuturesTransferResponse = {
  txnId: string;
};

export const sapiV1SubAccountFuturesTransferResponseSchema: Schema<SapiV1SubAccountFuturesTransferResponse> =
  s.object<SapiV1SubAccountFuturesTransferResponse>({
    txnId: s.string(),
  });
