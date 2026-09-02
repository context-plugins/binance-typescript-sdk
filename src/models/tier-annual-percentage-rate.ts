import { s, type Schema } from "../core/index.js";

export type TierAnnualPercentageRate = {
  Btc05: number;
  Btc510: number;
};

export const tierAnnualPercentageRateSchema: Schema<TierAnnualPercentageRate> =
  s.object<TierAnnualPercentageRate>({
    Btc05: s.number(),
    Btc510: s.number(),
    _keysMap: {
      Btc05: "0-5BTC",
      Btc510: "5-10BTC",
    },
  });
