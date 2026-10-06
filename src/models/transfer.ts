import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Transfer = {
  from: string;
  to: string;
  asset: string;
  qty: string;
  tranId: number;
  time: number;
};

export const transferSchema: Schema<Transfer> = s.object<Transfer>({
  from: s.string(),
  to: s.string(),
  asset: s.string(),
  qty: s.string(),
  tranId: s.int(),
  time: s.int(),
});
