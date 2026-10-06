import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snapshotVoSchema, type SnapshotVo } from "./snapshot-vo.js";

export type SapiV1ManagedSubaccountAccountSnapshotResponse = {
  code: number;
  msg: string;
  snapshotVos: SnapshotVo[];
};

export const sapiV1ManagedSubaccountAccountSnapshotResponseSchema: Schema<SapiV1ManagedSubaccountAccountSnapshotResponse> =
  s.object<SapiV1ManagedSubaccountAccountSnapshotResponse>({
    code: s.int(),
    msg: s.string(),
    snapshotVos: s.array(s.lazy(() => snapshotVoSchema)),
  });
