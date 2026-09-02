import { s, type Schema } from "../../core/index.js";
import { tickerSchema, type Ticker } from "../ticker.js";

export type ApiV3Ticker24HrResponse = Ticker | Ticker[];

export const apiV3Ticker24HrResponseSchema: Schema<ApiV3Ticker24HrResponse> = s.of<ApiV3Ticker24HrResponse>(
  s.union([s.lazy(() => tickerSchema), s.array(s.lazy(() => tickerSchema))]),
);
