import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row47 = {
  positionId: string;
  time: number;
  asset: string;
  lockPeriod: string;
  amount: string;
};

export const row47Schema: Schema<Row47> = s.object<Row47>({
  positionId: s.string(),
  time: s.int(),
  asset: s.string(),
  lockPeriod: s.string(),
  amount: s.string(),
});
