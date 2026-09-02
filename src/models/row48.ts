import { s, type Schema } from "../core/index.js";

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
  time: s.number(),
});
