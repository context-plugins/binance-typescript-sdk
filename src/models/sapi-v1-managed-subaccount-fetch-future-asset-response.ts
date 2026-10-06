import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snapshotVo4Schema, type SnapshotVo4 } from "./snapshot-vo4.js";

export type SapiV1ManagedSubaccountFetchFutureAssetResponse = {
  code: number;
  message: string;
  snapshotVos: SnapshotVo4[];
};

export const sapiV1ManagedSubaccountFetchFutureAssetResponseSchema: Schema<SapiV1ManagedSubaccountFetchFutureAssetResponse> =
  s.object<SapiV1ManagedSubaccountFetchFutureAssetResponse>({
    code: s.int(),
    message: s.string(),
    snapshotVos: s.array(s.lazy(() => snapshotVo4Schema)),
  });
