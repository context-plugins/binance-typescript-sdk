import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1LendingAutoInvestHistoryListResponse = {
  id: number;
  targetAsset: string;
  planType: string;
  planName: string;
  planId: number;
  transactionDateTime: number;
  transactionStatus: string;
  failedType: string;
  sourceAsset: string;
  sourceAssetAmount: string;
  targetAssetAmount: string;
  sourceWallet: string;
  flexibleUsed: string;
  transactionFee: string;
  transactionFeeUnit: string;
  executionPrice: string;
  executionType: string;
  subscriptionCycle: string;
};

export const sapiV1LendingAutoInvestHistoryListResponseSchema: Schema<SapiV1LendingAutoInvestHistoryListResponse> =
  s.object<SapiV1LendingAutoInvestHistoryListResponse>({
    id: s.number(),
    targetAsset: s.string(),
    planType: s.string(),
    planName: s.string(),
    planId: s.number(),
    transactionDateTime: s.number(),
    transactionStatus: s.string(),
    failedType: s.string(),
    sourceAsset: s.string(),
    sourceAssetAmount: s.string(),
    targetAssetAmount: s.string(),
    sourceWallet: s.string(),
    flexibleUsed: s.string(),
    transactionFee: s.string(),
    transactionFeeUnit: s.string(),
    executionPrice: s.string(),
    executionType: s.string(),
    subscriptionCycle: s.string(),
  });
