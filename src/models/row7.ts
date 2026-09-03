import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row7 = {
  asset: string;
  amount: string;
  type: string;
  status: string;
  tranId: number;
  timestamp: number;
};

export const row7Schema: Schema<Row7> = s.object<Row7>({
  asset: s.string(),
  amount: s.string(),
  type: s.string(),
  status: s.string(),
  tranId: s.number(),
  timestamp: s.number(),
});
