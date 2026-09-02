import { s, type Schema } from "../core/index.js";
import { row34Schema, type Row34 } from "./row34.js";

export type SapiV1EthStakingEthHistoryRateHistoryResponse = {
  rows: Row34[];
  total: number;
};

export const sapiV1EthStakingEthHistoryRateHistoryResponseSchema: Schema<SapiV1EthStakingEthHistoryRateHistoryResponse> =
  s.object<SapiV1EthStakingEthHistoryRateHistoryResponse>({
    rows: s.array(s.lazy(() => row34Schema)),
    total: s.number(),
  });
