import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row11 = {
  asset: string;
  tranId: number;
  amount: string;
  type: string;
  timestamp: number;
  /**
   * one of PENDING (pending to execution), CONFIRMED (successfully transfered), FAILED (execution
   * failed, nothing happened to your account);
   */
  status: string;
};

export const row11Schema: Schema<Row11> = s.object<Row11>({
  asset: s.string(),
  tranId: s.int(),
  amount: s.string(),
  type: s.string(),
  timestamp: s.int(),
  status: s.string(),
});
