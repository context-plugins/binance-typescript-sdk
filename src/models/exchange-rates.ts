import { s, type Schema } from "../core/index.js";

export type ExchangeRates = {
  usdc: string;
  tusd: string;
  usdp: string;
};

export const exchangeRatesSchema: Schema<ExchangeRates> = s.object<ExchangeRates>({
  usdc: s.string(),
  tusd: s.string(),
  usdp: s.string(),
  _keysMap: {
    usdc: "USDC",
    tusd: "TUSD",
    usdp: "USDP",
  },
});
