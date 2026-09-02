import { s, type Schema } from "../core/index.js";

export type SapiV1ConvertGetQuoteResponse = {
  quoteId: string;
  ratio: string;
  inverseRatio: string;
  validTimestamp: number;
  toAmount: string;
  fromAmount: string;
};

export const sapiV1ConvertGetQuoteResponseSchema: Schema<SapiV1ConvertGetQuoteResponse> =
  s.object<SapiV1ConvertGetQuoteResponse>({
    quoteId: s.string(),
    ratio: s.string(),
    inverseRatio: s.string(),
    validTimestamp: s.number(),
    toAmount: s.string(),
    fromAmount: s.string(),
  });
