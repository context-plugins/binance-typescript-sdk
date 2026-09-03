import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SapiV1MarginPriceIndexResponse = {
  calcTime: number;
  price: string;
  symbol: string;
};

export const sapiV1MarginPriceIndexResponseSchema: Schema<SapiV1MarginPriceIndexResponse> =
  s.object<SapiV1MarginPriceIndexResponse>({
    calcTime: s.number(),
    price: s.string(),
    symbol: s.string(),
  });
