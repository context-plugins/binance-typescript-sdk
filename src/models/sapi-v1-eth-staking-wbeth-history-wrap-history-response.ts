import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row35Schema, type Row35 } from "./row35.js";

export type SapiV1EthStakingWbethHistoryWrapHistoryResponse = {
  rows: Row35[];
  total: number;
};

export const sapiV1EthStakingWbethHistoryWrapHistoryResponseSchema: Schema<SapiV1EthStakingWbethHistoryWrapHistoryResponse> =
  s.object<SapiV1EthStakingWbethHistoryWrapHistoryResponse>({
    rows: s.array(s.lazy(() => row35Schema)),
    total: s.number(),
  });
