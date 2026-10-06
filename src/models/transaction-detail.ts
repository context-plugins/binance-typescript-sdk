import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionDetail = {
  asset: string;
  transactionDateTime: number;
  rebalanceDirection: string;
  rebalanceAmount: string;
};

export const transactionDetailSchema: Schema<TransactionDetail> = s.object<TransactionDetail>({
  asset: s.string(),
  transactionDateTime: s.int(),
  rebalanceDirection: s.string(),
  rebalanceAmount: s.string(),
});
