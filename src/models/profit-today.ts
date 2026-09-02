import { s, type Schema } from "../core/index.js";

export type ProfitToday = {
  btc: string;
  bsv: string;
  bch: string;
};

export const profitTodaySchema: Schema<ProfitToday> = s.object<ProfitToday>({
  btc: s.string(),
  bsv: s.string(),
  bch: s.string(),
  _keysMap: {
    btc: "BTC",
    bsv: "BSV",
    bch: "BCH",
  },
});
