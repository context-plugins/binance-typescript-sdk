import { s, type Schema } from "../core/index.js";

export type Row34 = {
  annualPercentageRate: string;
  exchangeRate: string;
  time: number;
};

export const row34Schema: Schema<Row34> = s.object<Row34>({
  annualPercentageRate: s.string(),
  exchangeRate: s.string(),
  time: s.number(),
});
