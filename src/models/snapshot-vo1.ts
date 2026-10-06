import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

export type SnapshotVo1 = {
  data: Data1;
  type: string;
  updateTime: number;
};

export const snapshotVo1Schema: Schema<SnapshotVo1> = s.object<SnapshotVo1>({
  data: data1Schema,
  type: s.string(),
  updateTime: s.int(),
});
