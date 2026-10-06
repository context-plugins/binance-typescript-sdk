import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snapshotVo2Schema, type SnapshotVo2 } from "./snapshot-vo2.js";

export type SnapshotFutures = {
  code: number;
  msg: string;
  snapshotVos: SnapshotVo2[];
};

export const snapshotFuturesSchema: Schema<SnapshotFutures> = s.object<SnapshotFutures>({
  code: s.int(),
  msg: s.string(),
  snapshotVos: s.array(s.lazy(() => snapshotVo2Schema)),
});
