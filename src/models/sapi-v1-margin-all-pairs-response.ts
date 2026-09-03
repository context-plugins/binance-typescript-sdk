import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginAllPairsResponse = {
  base: string;
  id: number;
  isBuyAllowed: boolean;
  isMarginTrade: boolean;
  isSellAllowed: boolean;
  quote: string;
  symbol: string;
};

export const sapiV1MarginAllPairsResponseSchema: Schema<SapiV1MarginAllPairsResponse> =
  s.object<SapiV1MarginAllPairsResponse>({
    base: s.string(),
    id: s.number(),
    isBuyAllowed: s.boolean(),
    isMarginTrade: s.boolean(),
    isSellAllowed: s.boolean(),
    quote: s.string(),
    symbol: s.string(),
  });
