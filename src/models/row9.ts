import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row9 = {
  createTime: number;
  tranId: number;
  type: number;
  asset: string;
  amount: string;
  status: string;
};

export const row9Schema: Schema<Row9> = s.object<Row9>({
  createTime: s.int(),
  tranId: s.int(),
  type: s.int(),
  asset: s.string(),
  amount: s.string(),
  status: s.string(),
});
