import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Balance = {
  asset: string;
  free: string;
  locked: string;
};

export const balanceSchema: Schema<Balance> = s.object<Balance>({
  asset: s.string(),
  free: s.string(),
  locked: s.string(),
});
