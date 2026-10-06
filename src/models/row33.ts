import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row33 = {
  time: number;
  asset: string;
  /** BETH holding balance */
  holding: string;
  /** Distributed rewards */
  amount: string;
  /** 0.5 means 50% here */
  annualPercentageRate: string;
  status: string;
};

export const row33Schema: Schema<Row33> = s.object<Row33>({
  time: s.int(),
  asset: s.string(),
  holding: s.string(),
  amount: s.string(),
  annualPercentageRate: s.string(),
  status: s.string(),
});
