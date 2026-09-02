import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountTransferSubToMasterResponse = {
  txnId: string;
};

export const sapiV1SubAccountTransferSubToMasterResponseSchema: Schema<SapiV1SubAccountTransferSubToMasterResponse> =
  s.object<SapiV1SubAccountTransferSubToMasterResponse>({
    txnId: s.string(),
  });
