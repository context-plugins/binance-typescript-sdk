import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1CapitalDepositHisrecResponse = {
  amount: string;
  coin: string;
  network: string;
  status: number;
  address: string;
  addressTag: string;
  txId: string;
  insertTime: number;
  transferType: number;
  unlockConfirm: string;
  confirmTimes: string;
};

export const sapiV1CapitalDepositHisrecResponseSchema: Schema<SapiV1CapitalDepositHisrecResponse> =
  s.object<SapiV1CapitalDepositHisrecResponse>({
    amount: s.string(),
    coin: s.string(),
    network: s.string(),
    status: s.number(),
    address: s.string(),
    addressTag: s.string(),
    txId: s.string(),
    insertTime: s.number(),
    transferType: s.number(),
    unlockConfirm: s.string(),
    confirmTimes: s.string(),
  });
