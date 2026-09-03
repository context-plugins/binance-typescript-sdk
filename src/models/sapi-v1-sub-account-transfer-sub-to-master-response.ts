import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountTransferSubToMasterResponse = {
  txnId: string;
};

export const sapiV1SubAccountTransferSubToMasterResponseSchema: Schema<SapiV1SubAccountTransferSubToMasterResponse> =
  s.object<SapiV1SubAccountTransferSubToMasterResponse>({
    txnId: s.string(),
  });
