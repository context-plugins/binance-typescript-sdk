import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profitTodaySchema, type ProfitToday } from "./profit-today.js";
import { profitYesterdaySchema, type ProfitYesterday } from "./profit-yesterday.js";

export type Data17 = {
  fifteenMinHashRate: string;
  dayHashRate: string;
  validNum: number;
  invalidNum: number;
  profitToday: ProfitToday;
  profitYesterday: ProfitYesterday;
  userName: string;
  unit: string;
  algo: string;
};

export const data17Schema: Schema<Data17> = s.object<Data17>({
  fifteenMinHashRate: s.string(),
  dayHashRate: s.string(),
  validNum: s.int(),
  invalidNum: s.int(),
  profitToday: profitTodaySchema,
  profitYesterday: profitYesterdaySchema,
  userName: s.string(),
  unit: s.string(),
  algo: s.string(),
});
