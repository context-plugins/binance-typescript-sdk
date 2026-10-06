import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subOrderSchema, type SubOrder } from "./sub-order.js";

export type SapiV1AlgoFuturesSubOrdersResponse = {
  total: number;
  executedQty: string;
  executedAmt: string;
  subOrders: SubOrder[];
};

export const sapiV1AlgoFuturesSubOrdersResponseSchema: Schema<SapiV1AlgoFuturesSubOrdersResponse> =
  s.object<SapiV1AlgoFuturesSubOrdersResponse>({
    total: s.int(),
    executedQty: s.string(),
    executedAmt: s.string(),
    subOrders: s.array(s.lazy(() => subOrderSchema)),
  });
