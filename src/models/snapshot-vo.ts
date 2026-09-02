import { s, type Schema } from "../core/index.js";
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
