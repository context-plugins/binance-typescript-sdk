import { s, type Schema } from "../core/index.js";

export type Row9 = {
  createTime: number;
  tranId: number;
  type: number;
  asset: string;
  amount: string;
  status: string;
};

export const row9Schema: Schema<Row9> = s.object<Row9>({
  createTime: s.number(),
  tranId: s.number(),
  type: s.number(),
  asset: s.string(),
  amount: s.string(),
  status: s.string(),
});
