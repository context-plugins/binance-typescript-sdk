import { s, type Schema } from "../core/index.js";

export type SapiV1MarginIsolatedAllPairsResponse = {
  symbol: string;
  base: string;
  quote: string;
  isMarginTrade: boolean;
  isBuyAllowed: boolean;
  isSellAllowed: boolean;
};

export const sapiV1MarginIsolatedAllPairsResponseSchema: Schema<SapiV1MarginIsolatedAllPairsResponse> =
  s.object<SapiV1MarginIsolatedAllPairsResponse>({
    symbol: s.string(),
    base: s.string(),
    quote: s.string(),
    isMarginTrade: s.boolean(),
    isBuyAllowed: s.boolean(),
    isSellAllowed: s.boolean(),
  });
