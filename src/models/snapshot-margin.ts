import { s, type Schema } from "../core/index.js";
import { snapshotVo1Schema, type SnapshotVo1 } from "./snapshot-vo1.js";

export type SnapshotMargin = {
  code: number;
  msg: string;
  snapshotVos: SnapshotVo1[];
};

export const snapshotMarginSchema: Schema<SnapshotMargin> = s.object<SnapshotMargin>({
  code: s.number(),
  msg: s.string(),
  snapshotVos: s.array(s.lazy(() => snapshotVo1Schema)),
});
