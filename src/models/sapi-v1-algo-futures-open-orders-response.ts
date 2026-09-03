import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { order15Schema, type Order15 } from "./order15.js";

export type SapiV1AlgoFuturesOpenOrdersResponse = {
  total: number;
  orders?: Order15[];
};

export const sapiV1AlgoFuturesOpenOrdersResponseSchema: Schema<SapiV1AlgoFuturesOpenOrdersResponse> =
  s.object<SapiV1AlgoFuturesOpenOrdersResponse>({
    total: s.number(),
    orders: s.optional(s.array(s.lazy(() => order15Schema))),
  });
