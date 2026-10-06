import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row37 = {
  time: number;
  /** Estimated rewards accrued within WBETH */
  amountInEth: string;
  /** WBETH holding balance */
  holding: string;
  holdingInEth: string;
  annualPercentageRate: string;
};

export const row37Schema: Schema<Row37> = s.object<Row37>({
  time: s.int(),
  amountInEth: s.string(),
  holding: s.string(),
  holdingInEth: s.string(),
  annualPercentageRate: s.string(),
  _keysMap: {
    amountInEth: "amountInETH",
    holdingInEth: "holdingInETH",
  },
});
