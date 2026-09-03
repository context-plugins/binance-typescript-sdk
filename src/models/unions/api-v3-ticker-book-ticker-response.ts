import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { bookTickerSchema, type BookTicker } from "../book-ticker.js";

export type ApiV3TickerBookTickerResponse = BookTicker | BookTicker[];

export const apiV3TickerBookTickerResponseSchema: Schema<ApiV3TickerBookTickerResponse> =
  s.of<ApiV3TickerBookTickerResponse>(
    s.union([s.lazy(() => bookTickerSchema), s.array(s.lazy(() => bookTickerSchema))]),
  );
