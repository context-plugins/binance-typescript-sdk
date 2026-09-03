import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancelResponseSchema, type CancelResponse } from "./cancel-response.js";
import { newOrderResponseSchema, type NewOrderResponse } from "./new-order-response.js";

export type ApiV3OrderCancelReplaceResponse = {
  cancelResult: string;
  newOrderResult: string;
  cancelResponse: CancelResponse;
  newOrderResponse: NewOrderResponse;
};

export const apiV3OrderCancelReplaceResponseSchema: Schema<ApiV3OrderCancelReplaceResponse> =
  s.object<ApiV3OrderCancelReplaceResponse>({
    cancelResult: s.string(),
    newOrderResult: s.string(),
    cancelResponse: cancelResponseSchema,
    newOrderResponse: newOrderResponseSchema,
  });
