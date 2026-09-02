import { s, type Schema } from "../../core/index.js";
import { priceTickerSchema, type PriceTicker } from "../price-ticker.js";

export type ApiV3TickerPriceResponse = PriceTicker | PriceTicker[];

export const apiV3TickerPriceResponseSchema: Schema<ApiV3TickerPriceResponse> =
  s.of<ApiV3TickerPriceResponse>(
    s.union([s.lazy(() => priceTickerSchema), s.array(s.lazy(() => priceTickerSchema))]),
  );
