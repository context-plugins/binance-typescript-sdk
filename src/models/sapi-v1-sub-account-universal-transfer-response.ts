import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1SubAccountUniversalTransferResponse = {
  tranId: number;
  fromEmail: string;
  toEmail: string;
  asset: string;
  amount: string;
  fromAccountType: string;
  toAccountType: string;
  status: string;
  createTimeStamp: number;
  clientTranId: string;
};

export const sapiV1SubAccountUniversalTransferResponseSchema: Schema<SapiV1SubAccountUniversalTransferResponse> =
  s.object<SapiV1SubAccountUniversalTransferResponse>({
    tranId: s.number(),
    fromEmail: s.string(),
    toEmail: s.string(),
    asset: s.string(),
    amount: s.string(),
    fromAccountType: s.string(),
    toAccountType: s.string(),
    status: s.string(),
    createTimeStamp: s.number(),
    clientTranId: s.string(),
  });
