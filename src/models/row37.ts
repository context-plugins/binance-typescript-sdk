import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row37 = {
  time: number;
  amountInEth: string;
  holding: string;
  holdingInEth: string;
  annualPercentageRate: string;
};

export const row37Schema: Schema<Row37> = s.object<Row37>({
  time: s.number(),
  amountInEth: s.string(),
  holding: s.string(),
  holdingInEth: s.string(),
  annualPercentageRate: s.string(),
  _keysMap: {
    amountInEth: "amountInETH",
    holdingInEth: "holdingInETH",
  },
});
