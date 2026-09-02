import { s, type Schema } from "../core/index.js";

export type Row46 = {
  asset: string;
  rewards: string;
  projectId: string;
  type: string;
  time: number;
};

export const row46Schema: Schema<Row46> = s.object<Row46>({
  asset: s.string(),
  rewards: s.string(),
  projectId: s.string(),
  type: s.string(),
  time: s.number(),
});
