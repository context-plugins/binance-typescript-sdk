import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row34Schema, type Row34 } from "./row34.js";

export type SapiV1EthStakingEthHistoryRateHistoryResponse = {
  rows: Row34[];
  total: number;
};

export const sapiV1EthStakingEthHistoryRateHistoryResponseSchema: Schema<SapiV1EthStakingEthHistoryRateHistoryResponse> =
  s.object<SapiV1EthStakingEthHistoryRateHistoryResponse>({
    rows: s.array(s.lazy(() => row34Schema)),
    total: s.int(),
  });
