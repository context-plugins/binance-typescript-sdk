import { s, type Schema } from "../core/index.js";

export type Row15 = {
  loanCoin: string;
  flexibleDailyInterestRate: string;
  flexibleYearlyInterestRate: string;
  DDailyInterestRate30: string;
  DYearlyInterestRate30: string;
  DDailyInterestRate60: string;
  DYearlyInterestRate60: string;
  minLimit: string;
  maxLimit: string;
  vipLevel: number;
};

export const row15Schema: Schema<Row15> = s.object<Row15>({
  loanCoin: s.string(),
  flexibleDailyInterestRate: s.string(),
  flexibleYearlyInterestRate: s.string(),
  DDailyInterestRate30: s.string(),
  DYearlyInterestRate30: s.string(),
  DDailyInterestRate60: s.string(),
  DYearlyInterestRate60: s.string(),
  minLimit: s.string(),
  maxLimit: s.string(),
  vipLevel: s.number(),
  _keysMap: {
    flexibleDailyInterestRate: "_flexibleDailyInterestRate",
    flexibleYearlyInterestRate: "_flexibleYearlyInterestRate",
    DDailyInterestRate30: "_30dDailyInterestRate",
    DYearlyInterestRate30: "_30dYearlyInterestRate",
    DDailyInterestRate60: "_60dDailyInterestRate",
    DYearlyInterestRate60: "_60dYearlyInterestRate",
  },
});
