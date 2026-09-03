import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountTransferSubToSubResponse = {
  txnId: string;
};

export const sapiV1SubAccountTransferSubToSubResponseSchema: Schema<SapiV1SubAccountTransferSubToSubResponse> =
  s.object<SapiV1SubAccountTransferSubToSubResponse>({
    txnId: s.string(),
  });
