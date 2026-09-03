import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
