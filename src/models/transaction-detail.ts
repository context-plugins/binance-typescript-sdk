import { s, type Schema } from "../core/index.js";

export type TransactionDetail = {
  asset: string;
  transactionDateTime: number;
  rebalanceDirection: string;
  rebalanceAmount: string;
};

export const transactionDetailSchema: Schema<TransactionDetail> = s.object<TransactionDetail>({
  asset: s.string(),
  transactionDateTime: s.number(),
  rebalanceDirection: s.string(),
  rebalanceAmount: s.string(),
});
