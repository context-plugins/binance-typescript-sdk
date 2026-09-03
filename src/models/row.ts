import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row = {
  amount: string;
  asset: string;
  status: string;
  timestamp: number;
  txId: number;
  type?: string;
  transFrom: string;
  transTo: string;
};

export const rowSchema: Schema<Row> = s.object<Row>({
  amount: s.string(),
  asset: s.string(),
  status: s.string(),
  timestamp: s.number(),
  txId: s.number(),
  type: s.optional(s.string()),
  transFrom: s.string(),
  transTo: s.string(),
});
