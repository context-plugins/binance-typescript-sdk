import { s, type Schema } from "../core/index.js";
import { row33Schema, type Row33 } from "./row33.js";

export type SapiV1EthStakingEthHistoryRewardsHistoryResponse = {
  rows: Row33[];
  total: number;
};

export const sapiV1EthStakingEthHistoryRewardsHistoryResponseSchema: Schema<SapiV1EthStakingEthHistoryRewardsHistoryResponse> =
  s.object<SapiV1EthStakingEthHistoryRewardsHistoryResponse>({
    rows: s.array(s.lazy(() => row33Schema)),
    total: s.number(),
  });
