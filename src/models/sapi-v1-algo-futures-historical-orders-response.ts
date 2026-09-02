import { s, type Schema } from "../core/index.js";
import { order15Schema, type Order15 } from "./order15.js";

export type SapiV1AlgoFuturesHistoricalOrdersResponse = {
  total: number;
  orders: Order15[];
};

export const sapiV1AlgoFuturesHistoricalOrdersResponseSchema: Schema<SapiV1AlgoFuturesHistoricalOrdersResponse> =
  s.object<SapiV1AlgoFuturesHistoricalOrdersResponse>({
    total: s.number(),
    orders: s.array(s.lazy(() => order15Schema)),
  });
