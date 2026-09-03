import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row29 = {
  loanCoin: string;
  flexibleInterestRate: string;
  flexibleMinLimit: string;
  flexibleMaxLimit: string;
};

export const row29Schema: Schema<Row29> = s.object<Row29>({
  loanCoin: s.string(),
  flexibleInterestRate: s.string(),
  flexibleMinLimit: s.string(),
  flexibleMaxLimit: s.string(),
});
