import { s, type Schema } from "../core/index.js";
import { exchangeRatesSchema, type ExchangeRates } from "./exchange-rates.js";

export type SapiV1CapitalContractConvertibleCoinsResponse = {
  convertEnabled: boolean;
  coins: string[];
  exchangeRates: ExchangeRates;
};

export const sapiV1CapitalContractConvertibleCoinsResponseSchema: Schema<SapiV1CapitalContractConvertibleCoinsResponse> =
  s.object<SapiV1CapitalContractConvertibleCoinsResponse>({
    convertEnabled: s.boolean(),
    coins: s.array(s.string()),
    exchangeRates: exchangeRatesSchema,
  });
