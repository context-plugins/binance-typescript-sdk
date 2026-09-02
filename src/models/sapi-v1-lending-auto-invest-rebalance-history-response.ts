import { s, type Schema } from "../core/index.js";
import { transactionDetailSchema, type TransactionDetail } from "./transaction-detail.js";

export type SapiV1LendingAutoInvestRebalanceHistoryResponse = {
  indexId: number;
  indexName: string;
  rebalanceId: number;
  status: string;
  rebalanceFee: string;
  rebalanceFeeUnit: string;
  transactionDetails: TransactionDetail[];
};

export const sapiV1LendingAutoInvestRebalanceHistoryResponseSchema: Schema<SapiV1LendingAutoInvestRebalanceHistoryResponse> =
  s.object<SapiV1LendingAutoInvestRebalanceHistoryResponse>({
    indexId: s.number(),
    indexName: s.string(),
    rebalanceId: s.number(),
    status: s.string(),
    rebalanceFee: s.string(),
    rebalanceFeeUnit: s.string(),
    transactionDetails: s.array(s.lazy(() => transactionDetailSchema)),
  });
