import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { priceTickerSchema, type PriceTicker } from "../price-ticker.js";

export type ApiV3TickerPriceResponse = PriceTicker | PriceTicker[];

export const apiV3TickerPriceResponseSchema: Schema<ApiV3TickerPriceResponse> =
  s.of<ApiV3TickerPriceResponse>(
    s.union([s.lazy(() => priceTickerSchema), s.array(s.lazy(() => priceTickerSchema))]),
  );
