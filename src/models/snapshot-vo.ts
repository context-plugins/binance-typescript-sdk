import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type SnapshotVo = {
  data: Data;
  type: string;
  updateTime: number;
};

export const snapshotVoSchema: Schema<SnapshotVo> = s.object<SnapshotVo>({
  data: dataSchema,
  type: s.string(),
  updateTime: s.number(),
});
