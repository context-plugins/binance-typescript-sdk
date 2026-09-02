import { s, type Schema } from "../core/index.js";

export type SapiV1LendingAutoInvestRedeemHistoryResponse = {
  indexId: number;
  indexName: string;
  redemptionId: number;
  status: string;
  asset: string;
  amount: string;
  redemptionDateTime: number;
  transactionFee: string;
  transactionFeeUnit: string;
};

export const sapiV1LendingAutoInvestRedeemHistoryResponseSchema: Schema<SapiV1LendingAutoInvestRedeemHistoryResponse> =
  s.object<SapiV1LendingAutoInvestRedeemHistoryResponse>({
    indexId: s.number(),
    indexName: s.string(),
    redemptionId: s.number(),
    status: s.string(),
    asset: s.string(),
    amount: s.string(),
    redemptionDateTime: s.number(),
    transactionFee: s.string(),
    transactionFeeUnit: s.string(),
  });
