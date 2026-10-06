import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data6Schema, type Data6 } from "./data6.js";

export type SnapshotVo4 = {
  type: string;
  updateTime: number;
  data: Data6;
};

export const snapshotVo4Schema: Schema<SnapshotVo4> = s.object<SnapshotVo4>({
  type: s.string(),
  updateTime: s.int(),
  data: data6Schema,
});
