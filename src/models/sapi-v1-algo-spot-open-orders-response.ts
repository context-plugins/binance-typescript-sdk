import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { order17Schema, type Order17 } from "./order17.js";

export type SapiV1AlgoSpotOpenOrdersResponse = {
  total: number;
  orders: Order17[];
};

export const sapiV1AlgoSpotOpenOrdersResponseSchema: Schema<SapiV1AlgoSpotOpenOrdersResponse> =
  s.object<SapiV1AlgoSpotOpenOrdersResponse>({
    total: s.number(),
    orders: s.array(s.lazy(() => order17Schema)),
  });
