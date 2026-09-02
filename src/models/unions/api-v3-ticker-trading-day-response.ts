import { s, type Schema } from "../../core/index.js";
import { dayTickerSchema, type DayTicker } from "../day-ticker.js";

export type ApiV3TickerTradingDayResponse = DayTicker | DayTicker[];

export const apiV3TickerTradingDayResponseSchema: Schema<ApiV3TickerTradingDayResponse> =
  s.of<ApiV3TickerTradingDayResponse>(
    s.union([s.lazy(() => dayTickerSchema), s.array(s.lazy(() => dayTickerSchema))]),
  );
