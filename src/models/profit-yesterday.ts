import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProfitYesterday = {
  btc: string;
  bsv: string;
  bch: string;
};

export const profitYesterdaySchema: Schema<ProfitYesterday> = s.object<ProfitYesterday>({
  btc: s.string(),
  bsv: s.string(),
  bch: s.string(),
  _keysMap: {
    btc: "BTC",
    bsv: "BSV",
    bch: "BCH",
  },
});
