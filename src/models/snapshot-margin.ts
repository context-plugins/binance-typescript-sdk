import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snapshotVo1Schema, type SnapshotVo1 } from "./snapshot-vo1.js";

export type SnapshotMargin = {
  code: number;
  msg: string;
  snapshotVos: SnapshotVo1[];
};

export const snapshotMarginSchema: Schema<SnapshotMargin> = s.object<SnapshotMargin>({
  code: s.int(),
  msg: s.string(),
  snapshotVos: s.array(s.lazy(() => snapshotVo1Schema)),
});
