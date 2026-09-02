import { s, type Schema } from "../core/index.js";

export type Row33 = {
  time: number;
  asset: string;
  holding: string;
  amount: string;
  annualPercentageRate: string;
  status: string;
};

export const row33Schema: Schema<Row33> = s.object<Row33>({
  time: s.number(),
  asset: s.string(),
  holding: s.string(),
  amount: s.string(),
  annualPercentageRate: s.string(),
  status: s.string(),
});
