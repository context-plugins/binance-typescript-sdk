import { s, type Schema } from "../core/index.js";

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
