import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";

export type SnapshotVo2 = {
  data: Data2;
  type: string;
  updateTime: number;
};

export const snapshotVo2Schema: Schema<SnapshotVo2> = s.object<SnapshotVo2>({
  data: data2Schema,
  type: s.string(),
  updateTime: s.int(),
});
