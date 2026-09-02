import { s, type Schema } from "../core/index.js";
import { subOrderSchema, type SubOrder } from "./sub-order.js";

export type SapiV1AlgoFuturesSubOrdersResponse = {
  total: number;
  executedQty: string;
  executedAmt: string;
  subOrders: SubOrder[];
};

export const sapiV1AlgoFuturesSubOrdersResponseSchema: Schema<SapiV1AlgoFuturesSubOrdersResponse> =
  s.object<SapiV1AlgoFuturesSubOrdersResponse>({
    total: s.number(),
    executedQty: s.string(),
    executedAmt: s.string(),
    subOrders: s.array(s.lazy(() => subOrderSchema)),
  });
