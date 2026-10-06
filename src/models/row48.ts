import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row48 = {
  productId: string;
  asset: string;
  annualPercentageRate: string;
  time: number;
};

export const row48Schema: Schema<Row48> = s.object<Row48>({
  productId: s.string(),
  asset: s.string(),
  annualPercentageRate: s.string(),
  time: s.int(),
});
