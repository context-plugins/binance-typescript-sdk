import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row11 = {
  asset: string;
  tranId: number;
  amount: string;
  type: string;
  timestamp: number;
  status: string;
};

export const row11Schema: Schema<Row11> = s.object<Row11>({
  asset: s.string(),
  tranId: s.number(),
  amount: s.string(),
  type: s.string(),
  timestamp: s.number(),
  status: s.string(),
});
