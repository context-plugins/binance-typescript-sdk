import { s, type Schema } from "../core/index.js";
import { row9Schema, type Row9 } from "./row9.js";

export type SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse = {
  total: number;
  rows: Row9[];
};

export const sapiV1AssetLedgerTransferCloudMiningQueryByPageResponseSchema: Schema<SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse> =
  s.object<SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse>({
    total: s.number(),
    rows: s.array(s.lazy(() => row9Schema)),
  });
