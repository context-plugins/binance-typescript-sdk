import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Row22 = {
  loanCoin: string;
  DHourlyInterestRate7: string;
  DDailyInterestRate7: string;
  DHourlyInterestRate14: string;
  DDailyInterestRate14: string;
  DHourlyInterestRate30: string;
  DDailyInterestRate30: string;
  DHourlyInterestRate90: string;
  DDailyInterestRate90: string;
  DHourlyInterestRate180: string;
  DDailyInterestRate180: string;
  minLimit: string;
  maxLimit: string;
  vipLevel: number;
};

export const row22Schema: Schema<Row22> = s.object<Row22>({
  loanCoin: s.string(),
  DHourlyInterestRate7: s.string(),
  DDailyInterestRate7: s.string(),
  DHourlyInterestRate14: s.string(),
  DDailyInterestRate14: s.string(),
  DHourlyInterestRate30: s.string(),
  DDailyInterestRate30: s.string(),
  DHourlyInterestRate90: s.string(),
  DDailyInterestRate90: s.string(),
  DHourlyInterestRate180: s.string(),
  DDailyInterestRate180: s.string(),
  minLimit: s.string(),
  maxLimit: s.string(),
  vipLevel: s.int(),
  _keysMap: {
    DHourlyInterestRate7: "_7dHourlyInterestRate",
    DDailyInterestRate7: "_7dDailyInterestRate",
    DHourlyInterestRate14: "_14dHourlyInterestRate",
    DDailyInterestRate14: "_14dDailyInterestRate",
    DHourlyInterestRate30: "_30dHourlyInterestRate",
    DDailyInterestRate30: "_30dDailyInterestRate",
    DHourlyInterestRate90: "_90dHourlyInterestRate",
    DDailyInterestRate90: "_90dDailyInterestRate",
    DHourlyInterestRate180: "_180dHourlyInterestRate",
    DDailyInterestRate180: "_180dDailyInterestRate",
  },
});
