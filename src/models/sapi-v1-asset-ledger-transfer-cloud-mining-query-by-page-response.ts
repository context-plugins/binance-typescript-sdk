import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row9Schema, type Row9 } from "./row9.js";

export type SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse = {
  total: number;
  rows: Row9[];
};

export const sapiV1AssetLedgerTransferCloudMiningQueryByPageResponseSchema: Schema<SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse> =
  s.object<SapiV1AssetLedgerTransferCloudMiningQueryByPageResponse>({
    total: s.int(),
    rows: s.array(s.lazy(() => row9Schema)),
  });
