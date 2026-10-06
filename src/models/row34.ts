import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row34 = {
  /** BETH APR */
  annualPercentageRate: string;
  /** BETH value per 1 WBETH */
  exchangeRate: string;
  time: number;
};

export const row34Schema: Schema<Row34> = s.object<Row34>({
  annualPercentageRate: s.string(),
  exchangeRate: s.string(),
  time: s.int(),
});
