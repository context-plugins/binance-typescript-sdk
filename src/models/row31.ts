import { s, type Schema } from "../core/index.js";

export type Row31 = {
  time: number;
  asset: string;
  amount: string;
  status: string;
  distributeAmount: string;
  conversionRatio: string;
};

export const row31Schema: Schema<Row31> = s.object<Row31>({
  time: s.number(),
  asset: s.string(),
  amount: s.string(),
  status: s.string(),
  distributeAmount: s.string(),
  conversionRatio: s.string(),
});
