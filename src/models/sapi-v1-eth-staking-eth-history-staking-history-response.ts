import { s, type Schema } from "../core/index.js";
import { row31Schema, type Row31 } from "./row31.js";

export type SapiV1EthStakingEthHistoryStakingHistoryResponse = {
  rows: Row31[];
  total: number;
};

export const sapiV1EthStakingEthHistoryStakingHistoryResponseSchema: Schema<SapiV1EthStakingEthHistoryStakingHistoryResponse> =
  s.object<SapiV1EthStakingEthHistoryStakingHistoryResponse>({
    rows: s.array(s.lazy(() => row31Schema)),
    total: s.number(),
  });
