import { s, type Schema } from "../../core/index.js";
import { ocoOrderSchema, type OcoOrder } from "../oco-order.js";
import { orderSchema, type Order } from "../order.js";

export type ApiV3OpenOrdersResponse = Order | OcoOrder;

export const apiV3OpenOrdersResponseSchema: Schema<ApiV3OpenOrdersResponse> = s.of<ApiV3OpenOrdersResponse>(
  s.union([s.lazy(() => orderSchema), s.lazy(() => ocoOrderSchema)]),
);
