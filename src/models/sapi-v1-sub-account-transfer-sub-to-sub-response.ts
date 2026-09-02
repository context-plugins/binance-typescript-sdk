import { s, type Schema } from "../core/index.js";

export type SapiV1SubAccountTransferSubToSubResponse = {
  txnId: string;
};

export const sapiV1SubAccountTransferSubToSubResponseSchema: Schema<SapiV1SubAccountTransferSubToSubResponse> =
  s.object<SapiV1SubAccountTransferSubToSubResponse>({
    txnId: s.string(),
  });
