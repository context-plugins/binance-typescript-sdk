import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row44 = {
  amount: string;
  asset: string;
  time: number;
  projectId: string;
  redeemId: number;
  /** SPOT, FUNDING */
  destAccount: string;
  status: string;
};

export const row44Schema: Schema<Row44> = s.object<Row44>({
  amount: s.string(),
  asset: s.string(),
  time: s.int(),
  projectId: s.string(),
  redeemId: s.int(),
  destAccount: s.string(),
  status: s.string(),
});
