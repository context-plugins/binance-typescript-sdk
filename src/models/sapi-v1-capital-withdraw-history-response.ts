import { s, type Schema } from "../core/index.js";

export type SapiV1CapitalWithdrawHistoryResponse = {
  address: string;
  amount: string;
  applyTime: string;
  coin: string;
  id: string;
  withdrawOrderId: string;
  network: string;
  transferType: number;
  status: number;
  transactionFee: string;
  confirmNo?: number;
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
    transferType: s.number(),
    status: s.number(),
    transactionFee: s.string(),
    confirmNo: s.optional(s.number()),
    info: s.optional(s.string()),
    txId: s.string(),
  });
