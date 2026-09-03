import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dayTickerSchema, type DayTicker } from "../day-ticker.js";

export type ApiV3TickerTradingDayResponse = DayTicker | DayTicker[];

export const apiV3TickerTradingDayResponseSchema: Schema<ApiV3TickerTradingDayResponse> =
  s.of<ApiV3TickerTradingDayResponse>(
    s.union([s.lazy(() => dayTickerSchema), s.array(s.lazy(() => dayTickerSchema))]),
  );
