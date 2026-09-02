import { s, type Schema } from "../core/index.js";
import { snapshotVoSchema, type SnapshotVo } from "./snapshot-vo.js";

export type SnapshotSpot = {
  code: number;
  msg: string;
  snapshotVos: SnapshotVo[];
};

export const snapshotSpotSchema: Schema<SnapshotSpot> = s.object<SnapshotSpot>({
  code: s.number(),
  msg: s.string(),
  snapshotVos: s.array(s.lazy(() => snapshotVoSchema)),
});
