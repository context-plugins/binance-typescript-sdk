import { s, type Schema } from "../core/index.js";
import { row35Schema, type Row35 } from "./row35.js";

export type SapiV1EthStakingWbethHistoryUnwrapHistoryResponse = {
  rows: Row35[];
  total: number;
};

export const sapiV1EthStakingWbethHistoryUnwrapHistoryResponseSchema: Schema<SapiV1EthStakingWbethHistoryUnwrapHistoryResponse> =
  s.object<SapiV1EthStakingWbethHistoryUnwrapHistoryResponse>({
    rows: s.array(s.lazy(() => row35Schema)),
    total: s.number(),
  });
