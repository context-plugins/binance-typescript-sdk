import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountTransferSubUserHistoryResponse = {
  counterParty: string;
  email: string;
  type: number;
  asset: string;
  qty: string;
  fromAccountType: string;
  toAccountType: string;
  status: string;
  tranId: number;
  time: number;
};

export const sapiV1SubAccountTransferSubUserHistoryResponseSchema: Schema<SapiV1SubAccountTransferSubUserHistoryResponse> =
  s.object<SapiV1SubAccountTransferSubUserHistoryResponse>({
    counterParty: s.string(),
    email: s.string(),
    type: s.number(),
    asset: s.string(),
    qty: s.string(),
    fromAccountType: s.string(),
    toAccountType: s.string(),
    status: s.string(),
    tranId: s.number(),
    time: s.number(),
  });
