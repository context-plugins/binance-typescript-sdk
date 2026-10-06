import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row32Schema, type Row32 } from "./row32.js";

export type SapiV1EthStakingEthHistoryRedemptionHistoryResponse = {
  rows: Row32[];
  total: number;
};

export const sapiV1EthStakingEthHistoryRedemptionHistoryResponseSchema: Schema<SapiV1EthStakingEthHistoryRedemptionHistoryResponse> =
  s.object<SapiV1EthStakingEthHistoryRedemptionHistoryResponse>({
    rows: s.array(s.lazy(() => row32Schema)),
    total: s.int(),
  });
