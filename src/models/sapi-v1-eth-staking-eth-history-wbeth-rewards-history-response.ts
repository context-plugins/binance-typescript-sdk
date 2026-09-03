import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row37Schema, type Row37 } from "./row37.js";

export type SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse = {
  estRewardsInEth: string;
  rows: Row37[];
  total: number;
};

export const sapiV1EthStakingEthHistoryWbethRewardsHistoryResponseSchema: Schema<SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse> =
  s.object<SapiV1EthStakingEthHistoryWbethRewardsHistoryResponse>({
    estRewardsInEth: s.string(),
    rows: s.array(s.lazy(() => row37Schema)),
    total: s.number(),
    _keysMap: {
      estRewardsInEth: "estRewardsInETH",
    },
  });
