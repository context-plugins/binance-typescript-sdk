import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountSubTransferHistoryResponse = {
  from: string;
  to: string;
  asset: string;
  qty: string;
  status: string;
  tranId: number;
  time: number;
};

export const sapiV1SubAccountSubTransferHistoryResponseSchema: Schema<SapiV1SubAccountSubTransferHistoryResponse> =
  s.object<SapiV1SubAccountSubTransferHistoryResponse>({
    from: s.string(),
    to: s.string(),
    asset: s.string(),
    qty: s.string(),
    status: s.string(),
    tranId: s.int(),
    time: s.int(),
  });
