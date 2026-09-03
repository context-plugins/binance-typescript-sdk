import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { row7Schema, type Row7 } from "./row7.js";

export type SapiV1AssetTransferResponse = {
  total: number;
  rows: Row7[];
};

export const sapiV1AssetTransferResponseSchema: Schema<SapiV1AssetTransferResponse> =
  s.object<SapiV1AssetTransferResponse>({
    total: s.number(),
    rows: s.array(s.lazy(() => row7Schema)),
  });
