import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row31 = {
  time: number;
  asset: string;
  amount: string;
  /** PENDING, SUCCESS, FAILED */
  status: string;
  distributeAmount: string;
  conversionRatio: string;
};

export const row31Schema: Schema<Row31> = s.object<Row31>({
  time: s.int(),
  asset: s.string(),
  amount: s.string(),
  status: s.string(),
  distributeAmount: s.string(),
  conversionRatio: s.string(),
});
