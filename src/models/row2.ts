import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row2 = {
  amount: string;
  asset: string;
  status: string;
  timestamp: number;
  txId: number;
  type: string;
};

export const row2Schema: Schema<Row2> = s.object<Row2>({
  amount: s.string(),
  asset: s.string(),
  status: s.string(),
  timestamp: s.int(),
  txId: s.int(),
  type: s.string(),
});
