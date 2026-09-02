import { s, type Schema } from "../core/index.js";
import { order17Schema, type Order17 } from "./order17.js";

export type SapiV1AlgoSpotHistoricalOrdersResponse = {
  total: number;
  orders: Order17[];
};

export const sapiV1AlgoSpotHistoricalOrdersResponseSchema: Schema<SapiV1AlgoSpotHistoricalOrdersResponse> =
  s.object<SapiV1AlgoSpotHistoricalOrdersResponse>({
    total: s.number(),
    orders: s.array(s.lazy(() => order17Schema)),
  });
