import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1CapitalWithdrawHistoryResponse = {
  address: string;
  amount: string;
  applyTime: string;
  coin: string;
  id: string;
  /** will not be returned if there's no withdrawOrderId for this withdraw. */
  withdrawOrderId: string;
  network: string;
  /** 1 for internal transfer, 0 for external transfer */
  transferType: number;
  status: number;
  transactionFee: string;
  confirmNo?: number;
  /** Reason for withdrawal failure */
  info?: string;
  txId: string;
};

export const sapiV1CapitalWithdrawHistoryResponseSchema: Schema<SapiV1CapitalWithdrawHistoryResponse> =
  s.object<SapiV1CapitalWithdrawHistoryResponse>({
    address: s.string(),
    amount: s.string(),
    applyTime: s.string(),
    coin: s.string(),
    id: s.string(),
    withdrawOrderId: s.string(),
    network: s.string(),
    transferType: s.int(),
    status: s.int(),
    transactionFee: s.string(),
    confirmNo: s.optional(s.int()),
    info: s.optional(s.string()),
    txId: s.string(),
  });
