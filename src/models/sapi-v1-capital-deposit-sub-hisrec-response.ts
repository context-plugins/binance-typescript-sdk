import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1CapitalDepositSubHisrecResponse = {
  amount: string;
  coin: string;
  network: string;
  status: number;
  address: string;
  addressTag: string;
  txId: string;
  insertTime: number;
  transferType: number;
  confirmTimes: string;
};

export const sapiV1CapitalDepositSubHisrecResponseSchema: Schema<SapiV1CapitalDepositSubHisrecResponse> =
  s.object<SapiV1CapitalDepositSubHisrecResponse>({
    amount: s.string(),
    coin: s.string(),
    network: s.string(),
    status: s.int(),
    address: s.string(),
    addressTag: s.string(),
    txId: s.string(),
    insertTime: s.int(),
    transferType: s.int(),
    confirmTimes: s.string(),
  });
