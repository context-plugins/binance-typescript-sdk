import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snapshotVoSchema, type SnapshotVo } from "./snapshot-vo.js";

export type SnapshotSpot = {
  code: number;
  msg: string;
  snapshotVos: SnapshotVo[];
};

export const snapshotSpotSchema: Schema<SnapshotSpot> = s.object<SnapshotSpot>({
  code: s.int(),
  msg: s.string(),
  snapshotVos: s.array(s.lazy(() => snapshotVoSchema)),
});
