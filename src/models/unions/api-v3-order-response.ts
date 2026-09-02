import { s, type Schema } from "../../core/index.js";
import { orderResponseAckSchema, type OrderResponseAck } from "../order-response-ack.js";
import { orderResponseFullSchema, type OrderResponseFull } from "../order-response-full.js";
import { orderResponseResultSchema, type OrderResponseResult } from "../order-response-result.js";

export type ApiV3OrderResponse = OrderResponseAck | OrderResponseResult | OrderResponseFull;

export const apiV3OrderResponseSchema: Schema<ApiV3OrderResponse> = s.of<ApiV3OrderResponse>(
  s.union([
    s.lazy(() => orderResponseAckSchema),
    s.lazy(() => orderResponseResultSchema),
    s.lazy(() => orderResponseFullSchema),
  ]),
);
