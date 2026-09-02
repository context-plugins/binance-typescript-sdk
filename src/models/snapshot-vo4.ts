import { s, type Schema } from "../core/index.js";
import { data6Schema, type Data6 } from "./data6.js";

export type SnapshotVo4 = {
  type: string;
  updateTime: number;
  data: Data6;
};

export const snapshotVo4Schema: Schema<SnapshotVo4> = s.object<SnapshotVo4>({
  type: s.string(),
  updateTime: s.number(),
  data: data6Schema,
});
