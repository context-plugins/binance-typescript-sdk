import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row10Schema, type Row10 } from "./row10.js";

export type SapiV1AssetCustodyTransferHistoryResponse = {
  total: number;
  rows: Row10[];
};

export const sapiV1AssetCustodyTransferHistoryResponseSchema: Schema<SapiV1AssetCustodyTransferHistoryResponse> =
  s.object<SapiV1AssetCustodyTransferHistoryResponse>({
    total: s.number(),
    rows: s.array(s.lazy(() => row10Schema)),
  });
