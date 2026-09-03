import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subOrder1Schema, type SubOrder1 } from "./sub-order1.js";

export type SapiV1AlgoSpotSubOrdersResponse = {
  total: number;
  executedQty: string;
  executedAmt: string;
  subOrders: SubOrder1[];
};

export const sapiV1AlgoSpotSubOrdersResponseSchema: Schema<SapiV1AlgoSpotSubOrdersResponse> =
  s.object<SapiV1AlgoSpotSubOrdersResponse>({
    total: s.number(),
    executedQty: s.string(),
    executedAmt: s.string(),
    subOrders: s.array(s.lazy(() => subOrder1Schema)),
  });
